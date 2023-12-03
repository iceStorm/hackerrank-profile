import { Controller, Res } from "@nestjs/common"

import { TsRestHandler, tsRestHandler } from "@ts-rest/nest"
import { Response } from "express"

import { appRouter } from "@hackerrank-profile/contracts"
import { getCerts } from "@hackerrank-profile/hackerrank-api"

import { CertificateService } from "./certificate.service"

@Controller()
export class CertificateController {
  constructor(private certificateService: CertificateService) {}

  // @TsRestHandler(appRouter.certificates)
  // handler(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
  //   return tsRestHandler(appRouter.certificates, {
  //     getAllCertificates: async ({ params: { username } }) => {
  //       return { status: 200, body: await getCerts(username) }
  //     },

  //     downloadCertificates: async ({ params, query }) => {
  //       const { username } = params
  //       const { quality, certificate_id } = query

  //       await this.certificateService.generateAndDownloadCertificates(username, res, quality, certificate_id)

  //       return {
  //         status: 200,
  //         body: undefined,
  //       }
  //     },

  //     getSingleCertificate: async ({ params: { username, certificate_id } }) => {
  //       return {
  //         status: 200,
  //         body: await this.certificateService.getUserSingleCertificate(username, certificate_id),
  //       }
  //     },
  //   })
  // }

  @TsRestHandler(appRouter.certificates.getSingleCertificate)
  getSingleCertificates() {
    return tsRestHandler(appRouter.certificates.getSingleCertificate, async ({ params: { certificate_id } }) => {
      const certObject = await this.certificateService.getSingleCertificate(certificate_id)

      return {
        status: 200,
        body: certObject,
      }
    })
  }

  @TsRestHandler(appRouter.certificates.getUserAllCertificates)
  getAllCertificates() {
    return tsRestHandler(appRouter.certificates.getUserAllCertificates, async ({ params: { username } }) => {
      return { status: 200, body: await getCerts(username) }
    })
  }

  @TsRestHandler(appRouter.certificates.downloadUserCertificates)
  downloadCertificates(@Res({ passthrough: true }) res: Response) {
    return tsRestHandler(appRouter.certificates.downloadUserCertificates, async ({ params, query }) => {
      const { username } = params
      const { quality, certificate_id } = query

      await this.certificateService.generateAndDownloadCertificates(username, res, quality, certificate_id)

      return {
        status: 200,
        body: undefined,
      }
    })
  }

  @TsRestHandler(appRouter.certificates.getUserSingleCertificate)
  getUserSingleCertificates() {
    return tsRestHandler(
      appRouter.certificates.getUserSingleCertificate,

      async ({ params: { username, certificate_id } }) => {
        const certObject = await this.certificateService.getUserSingleCertificate(username, certificate_id)

        return {
          status: 200,
          body: certObject,
        }
      },
    )
  }
}
