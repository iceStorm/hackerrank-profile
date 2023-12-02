import { Injectable, NotFoundException } from "@nestjs/common"

import { Request, Response } from "express"
import { format } from "date-fns"
import AdmZip from "adm-zip"
import Jimp from "jimp"

import { getCerts } from "@hackerrank-profile/hackerrank-api"

import { generateCertificateImage } from "../services/hackerrank.service"

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: "Hello API" }
  }

  async getUserSingleCertificate(username: string, certId: string) {
    const userAllCerts = await getCerts(username)

    const theCert = userAllCerts.find(cert => cert.id === certId)

    if (!theCert) {
      throw new NotFoundException(``)
    }

    return theCert
  }

  async generateAndDownloadCertificates(username: string, req: Request, res: Response, certId?: string) {
    const quality = parseInt((req.query["quality"] as string) ?? "10", 10)

    const allCerts = await getCerts(username)
    const passedCerts = allCerts.filter(cert => cert.attributes.status === "test_passed")

    // no certificates available
    if (!passedCerts.length) {
      return Response.json({
        username,
        message:
          "There is no data to download. You have typed the wrong HackerRank username, or your account does not contain any certificates.",
        profile: `https://www.hackerrank.com/profile/${username}`,
      })
    }

    // handle single cert downloading
    if (certId) {
      const foundCert = passedCerts.find(cert => cert.id === certId)

      if (!foundCert) {
        throw new Error(`No certificate with id ${certId} available for user ${username}`)
      }

      res.header({
        "Content-Type": Jimp.MIME_JPEG,
        "Content-Disposition": `attachment; filename="${username}_hackerrank_certificate__${foundCert.attributes.certificates[0].replace(
          " ()",
          "",
        )}.jpg"`,
      })

      return res.end(await generateCertificateImage(foundCert, quality, "buffer"))
    }

    const zipper = new AdmZip()

    // map all certificates image to buffer array
    await Promise.all(
      passedCerts.map(cert =>
        generateCertificateImage(cert, quality, "buffer").then(imageBuffer => {
          zipper.addFile(`${cert.id}__${cert.attributes.certificates[0].replace(" ()", "")}.jpg`, imageBuffer)
        }),
      ),
    )

    res.header({
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="${username}_hackerrank_certificates__${format(
        new Date(),
        "dd.MM.yyyy",
      )}.zip"`,
    })

    res.end(zipper.toBuffer())
  }
}
