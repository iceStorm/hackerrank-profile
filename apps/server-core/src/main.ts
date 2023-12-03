/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from "@nestjs/common"
import { NestFactory } from "@nestjs/core"
import { SwaggerModule } from "@nestjs/swagger"

import { generateOpenApi } from "@ts-rest/open-api"

import { appRouter } from "@hackerrank-profile/contracts"

import { AppModule } from "./app/app.module"

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true })

  const document = generateOpenApi(
    appRouter,
    {
      info: {
        title: "HackerRank API",
        version: "1.0.0",
      },
    },
    {
      setOperationId: true,
      jsonQuery: true,
    },
  )

  SwaggerModule.setup("api", app, document)

  const port = process.env.PORT ?? 3000
  await app.listen(port)

  Logger.log(`🚀 Application is running on: http://localhost:${port}`)
}

bootstrap()
