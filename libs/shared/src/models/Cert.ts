import { z } from "zod"

export const linksSchema = z.object({
  self: z.string(),
})

export const certificateSchema = z.object({
  track_slug: z.string(),
  label: z.string(),
  level: z.union([z.literal("Basic"), z.literal("Intermediate"), z.literal("Advanced")]),
  skill_unique_id: z.string(),
  description: z.string(),
})

export const attributesSchema = z.object({
  status: z.union([
    z.literal("started"),
    z.literal("test_passed"),
    z.literal("test_failed"),
    z.literal("retake_available"),
  ]),
  username: z.string(),
  unlock_date: z.string().optional(),
  waived_off: z.unknown(),
  certificate: certificateSchema,
  certificates: z.array(z.string()),
  certificate_image: z.string().optional(),
  hacker_name: z.string(),
  test_unique_id: z.string(),
  kind: z.string(),
  hacker_name_updated_at: z.unknown(),
  seen_by_user: z.unknown(),
  completed_at: z.string(),
  score: z.number(),
  alloted_at: z.string().optional(),
  type: z.union([z.literal("skill"), z.literal("role")]),
})

export const certSchema = z.object({
  id: z.string(),
  type: z.string(),
  links: linksSchema,
  attributes: attributesSchema,
})

export type Cert = z.infer<typeof certSchema>
