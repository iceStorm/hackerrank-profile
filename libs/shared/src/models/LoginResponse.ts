import { z } from "zod"
import { certSchema } from "./Cert"

export const loginBodySchema = z.object({
  login: z.string().min(1),
  password: z.string().min(1),
})

export const loginAdditionalResponseSchema = z.object({
  username: z.string(),
  passedCertNames: z.string().array(),
  failedCertNames: z.string().array(),
  certs: certSchema.array(),
})

export const loginResponseSchema = z
  .object({
    status: z.boolean(),
    messages: z.array(z.string()),
    errors: z.array(z.unknown()),
    account_created: z.boolean(),
    contest_signup: z.boolean(),
    hrx_user: z.boolean(),
    hacker_exists: z.boolean(),
    contest_started: z.boolean(),
    additional_details: z.boolean(),
    domain_restriction: z.boolean(),
    has_codesprint_reg_page: z.boolean(),
    ask_jobs_profile: z.boolean(),
    contest_slug: z.string(),
    csrf_token: z.string(),
  })
  .merge(loginAdditionalResponseSchema)

export type LoginBody = z.infer<typeof loginBodySchema>

export type LoginResoonse = z.infer<typeof loginResponseSchema>
