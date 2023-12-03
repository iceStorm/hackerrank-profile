import { Module } from "@nestjs/common"

import { ProfileModule } from "../modules/profile/profile.module"
import { CertificateModule } from "../modules/certificate/certificate.module"

import { AppController } from "./app.controller"
import { AppService } from "./app.service"

export const config = {
  runtime: "edge",
}

@Module({
  imports: [ProfileModule, CertificateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
