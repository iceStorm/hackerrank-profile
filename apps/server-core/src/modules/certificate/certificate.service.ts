import { HttpStatus, Injectable } from "@nestjs/common"
import { TsRestException } from "@ts-rest/nest"

import { Response } from "express"
import { format } from "date-fns"
import AdmZip from "adm-zip"
import Jimp from "jimp"

import { getCertById, getCerts } from "@hackerrank-profile/hackerrank-api"

import { certificatesRouter } from "@hackerrank-profile/contracts"

import { generateCertificateImage } from "../../services/hackerrank.service"
import { AxiosError } from "axios"

@Injectable()
export class CertificateService {
  async getSingleCertificate(certId: string) {
    try {
      const foundCert = await getCertById(certId)
      return foundCert
    } catch (error: any) {
      console.log(error)

      if (error instanceof AxiosError) {
        throw new TsRestException(certificatesRouter.getSingleCertificate, {
          status: error.response?.status as never,
          body:
            error.response?.status === HttpStatus.NOT_FOUND ? `No certificate with id ${certId} found` : error.message,
        })
      }

      throw new TsRestException(certificatesRouter.getSingleCertificate, {
        status: error.status ?? HttpStatus.INTERNAL_SERVER_ERROR,
        body: error.message,
      })
    }
  }

  async getUserSingleCertificate(username: string, certId: string) {
    const userAllCerts = await getCerts(username)

    const theCert = userAllCerts.find(cert => cert.id === certId)

    if (!theCert) {
      throw new TsRestException(certificatesRouter.downloadUserCertificates, {
        status: HttpStatus.NOT_FOUND,
        body: `No certificate with id ${certId} available for user ${username}`,
      })
    }

    return theCert
  }

  async generateAndDownloadCertificates(username: string, res: Response, quality: number, certId?: string) {
    const allCerts = await getCerts(username)
    const passedCerts = allCerts.filter(cert => cert.attributes.status === "test_passed")

    // no certificates available
    if (!passedCerts.length) {
      return res.json({
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
        throw new TsRestException(certificatesRouter.downloadUserCertificates, {
          status: HttpStatus.NOT_FOUND,
          body: `No certificate with id ${certId} available for user ${username}`,
        })
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
