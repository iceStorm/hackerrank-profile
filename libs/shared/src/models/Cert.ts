export interface Cert {
  id: string
  type: string
  links: Links
  attributes: Attributes
}

export interface Links {
  self: string
}

export interface Attributes {
  status: "started" | "test_passed" | "test_failed" | "retake_available"
  username: string
  unlock_date?: string
  waived_off: unknown
  certificate: Certificate
  certificates: string[]
  certificate_image?: string
  hacker_name: string
  test_unique_id: string
  kind: string
  hacker_name_updated_at: unknown
  seen_by_user: unknown
  completed_at: string
  score: number
  alloted_at?: string
  type: "skill" | "role"
}

export interface Certificate {
  track_slug: string
  label: string
  level: "Basic" | "Intermediate" | "Advanced"
  skill_unique_id: string
  description: string
}
