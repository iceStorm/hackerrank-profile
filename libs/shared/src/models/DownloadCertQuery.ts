import { z } from "zod"

export const downloadCertQuery = z.object({
  certificate_id: z.optional(z.string()),
  quality: z.number({ coerce: true }).min(0).max(100).default(10),
})
