import { certificatesRouter } from "./certificates.contract"
import { profileRouter } from "./profile.contract"
import { appContract } from "./c"

export const appRouter = appContract.router({
  profile: profileRouter,
  certificates: certificatesRouter,
})
