export interface LoginResoonse {
  status: boolean
  messages: string[]
  errors: unknown[]
  account_created: boolean
  contest_signup: boolean
  hrx_user: boolean
  hacker_exists: boolean
  contest_started: boolean
  additional_details: boolean
  domain_restriction: boolean
  has_codesprint_reg_page: boolean
  ask_jobs_profile: boolean
  contest_slug: string
  csrf_token: string
}
