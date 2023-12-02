import { resolve } from "path"

import Jimp from "jimp"
import { format } from "date-fns"
import { AxiosInstance } from "axios"

import { JSDOM } from "jsdom"
import { CookieJar } from "tough-cookie"
import { wrapper } from "axios-cookiejar-support"

import { Cert, LoginResoonse } from "@hackerrank-profile/shared/models"
import { getHttpClient } from "@hackerrank-profile/hackerrank-api/httpClient"

export async function generateCertificateImage(cert: Cert, quality: number, outputType: "buffer"): Promise<Buffer>
export async function generateCertificateImage(cert: Cert, quality: number, outputType: "base64"): Promise<string>
export async function generateCertificateImage(cert: Cert, quality: number, outputType: "buffer" | "base64") {
  if (quality < 0 || quality > 100) {
    throw new Error("Quality must not below 0 or higher 100")
  }

  const image = await Jimp.read(resolve(__dirname, "./assets/hackerrank-certificate-template.jpeg"))

  const width = image.getWidth()
  const height = image.getHeight()

  // draw cert id
  const font24 = await Jimp.loadFont(resolve(__dirname, "./assets/fonts/24/Xg7G3MkFJNkPqw2ZAxj9kpQR.ttf.fnt"))
  const certId = cert.id.toUpperCase()
  const certIdWidth = Jimp.measureText(font24, certId)
  image.print(font24, width - certIdWidth - 190, 130, certId)

  // draw cert author
  const font72 = await Jimp.loadFont(resolve(__dirname, "./assets/fonts/72/o9OVcyamnJWarYlhYa1XZrQA.ttf.fnt"))
  const certAuthor = cert.attributes.hacker_name
  const certAuthorWidth = Jimp.measureText(font72, certAuthor)
  const certAuthorHeight = Jimp.measureTextHeight(font72, certAuthor, certAuthorWidth)
  image.print(font72, (width - certAuthorWidth) / 2, height / 2 - (certAuthorHeight - 10), certAuthor)

  // draw cert name
  const font36 = await Jimp.loadFont(resolve(__dirname, "./assets/fonts/36/LLPUZQ3YlfSY8mSDNPgkr2b6.ttf.fnt"))
  const certName = cert.attributes.certificates[0].split(" ()")[0]
  const certNameWidth = Jimp.measureText(font36, certName)
  image.print(font36, (width - certNameWidth) / 2, height / 2 + 100, certName)

  // draw cert received date
  const font32 = await Jimp.loadFont(resolve(__dirname, "./assets/fonts/32/gtFiT41B72GlabIz8JNnyH5R.ttf.fnt"))
  const certDate = format(new Date(cert.attributes.completed_at), "dd MMM yyyy")
  const certDateWidth = Jimp.measureText(font32, certDate)
  const certDateHeight = Jimp.measureTextHeight(font32, certDate, certDateWidth)
  image.print(font32, 592 - certDateWidth, height - certDateHeight - 225, certDate)

  const compressedImage = image.quality(quality)

  if (outputType === "buffer") {
    return compressedImage.getBufferAsync(Jimp.MIME_JPEG)
  }

  return compressedImage.getBase64Async(Jimp.MIME_JPEG)
}

async function getInitialCsrfToken(axiosClient: AxiosInstance) {
  const { data } = await axiosClient.get("https://hackerrank.com/dashboard")

  const page = new JSDOM(data)
  const metaTag = page.window.document.querySelector('meta[id="csrf-token"]')

  return metaTag?.getAttribute("content")
}

export async function login(usernameOrEmail: string, password: string) {
  const jar = new CookieJar()
  const client = wrapper(getHttpClient({ jar }))

  // to get hackerrank hidden tokens and session id
  const initialCsrfToken = await getInitialCsrfToken(client)

  const loginResponse = await client.post<LoginResoonse>(
    "https://www.hackerrank.com/rest/auth/login",
    { login: usernameOrEmail, password },
    {
      headers: { "X-Csrf-Token": initialCsrfToken },
    },
  )

  let username: string | undefined

  // only fetch profile when logged in successfully
  if (loginResponse.data.status === true) {
    const { data: profileData } = await client.get("https://www.hackerrank.com/prefetch_data")
    username = profileData.profile.username
    console.log("username:", username)
  }

  // if login failed, get certs by username
  const certsResponse = await client.get<{ data: Cert[] }>(
    `https://www.hackerrank.com/community/v1/test_results/hacker_certificate?username=${username ?? login}`,
  )

  const passedCertNames = certsResponse.data.data
    .filter(cert => cert.attributes.status === "test_passed")
    .map(cert => cert.attributes.certificates[0])

  const failedCertNames = certsResponse.data.data
    .filter(cert => cert.attributes.status === "test_failed")
    .map(cert => cert.attributes.certificates[0])

  const responseObject = Object.assign(loginResponse.data, {
    username,
    passedCertNames,
    failedCertNames,
    certs: certsResponse.data.data,
  })

  return responseObject
}
