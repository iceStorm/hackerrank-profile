import { Module } from "@nestjs/common"

import { AppController } from "./app.controller"
import { AppService } from "./app.service"

export const config = {
  runtime: "edge",
}

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
