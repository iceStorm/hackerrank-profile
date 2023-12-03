import { loginBodySchema, loginResponseSchema, profileResponseSchema } from "@hackerrank-profile/shared/models"

import { appContract } from "./c"

export const profileRouter = appContract.router({
  login: {
    method: "POST",
    path: "/login",
    body: loginBodySchema,
    summary: "Login into HackerRank using a pair of credentials",
    responses: {
      200: loginResponseSchema,
    },
  },

  getProfile: {
    method: "GET",
    path: "/:username",
    responses: {
      200: profileResponseSchema,
    },
    summary: "Get profile information of a user by using username",
  },
})
