import { z } from "zod"

export const profileSchema = z.object({
  id: z.number(),
  username: z.string(),
  country: z.string(),
  school: z.string(),
  languages: z.array(z.unknown()),
  created_at: z.string(),
  level: z.number(),
  deleted: z.boolean(),
  is_admin: z.boolean(),
  support_admin: z.boolean(),
  avatar: z.string(),
  website: z.string(),
  short_bio: z.string(),
  username_change_count: z.string(),
  name: z.string(),
  personal_first_name: z.string(),
  personal_last_name: z.string(),
  company: z.string(),
  local_language: z.string(),
  has_avatar_url: z.boolean(),
  hide_account_checklist: z.string(),
  spam_user: z.string(),
  job_title: z.string(),
  jobs_headline: z.string(),
  linkedin_url: z.string(),
  github_url: z.string(),
  self: z.boolean(),
  title: z.string(),
  event_count: z.number(),
  online: z.boolean(),
  is_following: z.boolean(),
  is_followed: z.boolean(),
  followers_count: z.number(),
})

export const profileResponseSchema = z.object({
  model: profileSchema,
})

export type Profile = z.infer<typeof profileSchema>
export type ProfileResponse = z.infer<typeof profileResponseSchema>
