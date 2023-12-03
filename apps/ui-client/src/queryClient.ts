import { initQueryClient } from "@ts-rest/react-query"

import { appRouter } from "@hackerrank-profile/contracts/app"

export const apiClient = initQueryClient(appRouter, {
  baseUrl: import.meta.env.VITE_BASE_URL,
  baseHeaders: {},
})
