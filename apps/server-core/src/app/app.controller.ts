import { Controller, Get } from "@nestjs/common"

import { AppService } from "./app.service"

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData()
  }

  // @TsRestHandler(appRouter.login)
  // async login() {
  //   return tsRestHandler(appRouter.login, async ({ body }) => {
  //     return { status: 200 as const, body: await login(body.login, body.password) }
  //   })
  // }

  // @TsRestHandler(appRouter.getProfile)
  // async getProfile() {
  //   return tsRestHandler(appRouter.getProfile, async ({ params: { username } }) => {
  //     return { status: 200 as const, body: await getProfile(username) }
  //   })
  // }

  // @TsRestHandler(appRouter.getAllCertificates)
  // async getAllCertificates() {
  //   return tsRestHandler(appRouter.getAllCertificates, async ({ params: { username } }) => {
  //     return { status: 200 as const, body: await getCerts(username) }
  //   })
  // }

  // @TsRestHandler(appRouter.downloadCertificates)
  // async downloadCertificates(@Req() req: Request, @Res() res: Response) {
  //   return tsRestHandler(appRouter.downloadCertificates, async ({ params: { username, certificate_id } }) => {
  //     const certs = await this.appService.generateAndDownloadCertificates(username, req, res, certificate_id)

  //     return {
  //       status: 200 as const,
  //       body: certs,
  //     }
  //   })
  // }

  // @TsRestHandler(appRouter.getSingleCertificate)
  // async getSingleCertificate() {
  //   return tsRestHandler(appRouter.getSingleCertificate, async ({ params: { username, certificate_id } }) => {
  //     return { status: 200 as const, body: await this.appService.getUserSingleCertificate(username, certificate_id) }
  //   })
  // }
}
