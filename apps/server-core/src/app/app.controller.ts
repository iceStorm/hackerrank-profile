import { Controller, Get, Param } from "@nestjs/common"

import { getCerts, getProfile } from "@hackerrank-profile/hackerrank-api"

import { AppService } from "./app.service"

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData()
  }

  @Get(":username")
  getUserProfile(@Param("username") username: string) {
    return Promise.all([getProfile(username), getCerts(username)])
  }
}
