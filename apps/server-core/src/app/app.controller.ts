import { Body, Controller, Get, Param, Post, Req, Res } from "@nestjs/common"
import { Response, Request } from "express"

import { getCerts, getProfile } from "@hackerrank-profile/hackerrank-api"

import { AppService } from "./app.service"
import { login } from "../services/hackerrank.service"

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData()
  }

  @Post("login")
  login(@Body() payload: { username: string; password: string }) {
    return login(payload.username, payload.password)
  }

  @Get(":username")
  getUserProfile(@Param("username") username: string) {
    return getProfile(username)
  }

  @Get(":username/certificates")
  getUserAllCertificate(@Param("username") username: string) {
    return getCerts(username)
  }

  @Get(":username/certificates/:cert_id?/download")
  downloadUserSingleCertificate(
    @Req() req: Request,
    @Res() res: Response,
    @Param("username") username: string,
    @Param("cert_id") certId?: string,
  ) {
    return this.appService.generateAndDownloadCertificates(username, req, res, certId)
  }

  @Get(":username/certificates/:cert_id")
  getUserSingleCertificate(@Param("username") username: string, @Param("cert_id") certId: string) {
    return this.appService.getUserSingleCertificate(username, certId)
  }
}
