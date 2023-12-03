import { Controller } from "@nestjs/common"

import { TsRestHandler, tsRestHandler } from "@ts-rest/nest"

import { appRouter } from "@hackerrank-profile/contracts"
import { getProfile } from "@hackerrank-profile/hackerrank-api"

import { login } from "../../services/hackerrank.service"

@Controller()
export class ProfileController {
  @TsRestHandler(appRouter.profile)
  async handler() {
    return tsRestHandler(appRouter.profile, {
      login: async ({ body }) => {
        return { status: 200, body: await login(body.login, body.password) }
      },

      getProfile: async ({ params: { username } }) => {
        const profile = await getProfile(username)

        return { status: 200, body: profile }
      },
    })
  }
}
