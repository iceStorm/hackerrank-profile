import { z } from "zod"

import { certSchema, downloadCertQuery } from "@hackerrank-profile/shared/models"

import { appContract } from "./c"

const userCertificatesRouter = appContract.router({
  getSingleCertificate: {
    method: "GET",
    path: `/certificates/:certificate_id`,
    responses: {
      200: certSchema,
      404: z.string(),
    },
    summary: "Get a certificate object by certificate id.",
  },

  getUserAllCertificates: {
    method: "GET",
    path: "/:username/certificates",
    responses: {
      200: z.array(certSchema),
    },
    summary: "Get list certificates of a user.",
  },

  getUserSingleCertificate: {
    method: "GET",
    path: `/:username/certificates/:certificate_id`,
    responses: {
      200: certSchema,
    },
    summary: "Get a certificate object of a user by certificate id.",
  },

  downloadUserCertificates: {
    method: "GET",
    path: "/:username/certificates/download",
    summary: "Download a single certificate (jpg) or all certificates (zip).",
    description: "Ignore the certificate_id to download all certificates.",
    responses: {
      200: z.unknown(),
      404: z.string(),
    },
    query: downloadCertQuery,
  },
})

export const certificatesRouter = userCertificatesRouter
