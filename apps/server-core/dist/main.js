/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: external "@nestjs/common"
const common_namespaceObject = require("@nestjs/common");
;// CONCATENATED MODULE: external "@nestjs/core"
const core_namespaceObject = require("@nestjs/core");
;// CONCATENATED MODULE: external "@nestjs/swagger"
const swagger_namespaceObject = require("@nestjs/swagger");
;// CONCATENATED MODULE: external "@ts-rest/open-api"
const open_api_namespaceObject = require("@ts-rest/open-api");
;// CONCATENATED MODULE: external "zod"
const external_zod_namespaceObject = require("zod");
;// CONCATENATED MODULE: ../../libs/shared/src/models/Cert.ts

const linksSchema = external_zod_namespaceObject.z.object({
    self: external_zod_namespaceObject.z.string(),
});
const certificateSchema = external_zod_namespaceObject.z.object({
    track_slug: external_zod_namespaceObject.z.string(),
    label: external_zod_namespaceObject.z.string(),
    level: external_zod_namespaceObject.z.union([external_zod_namespaceObject.z.literal("Basic"), external_zod_namespaceObject.z.literal("Intermediate"), external_zod_namespaceObject.z.literal("Advanced")]),
    skill_unique_id: external_zod_namespaceObject.z.string(),
    description: external_zod_namespaceObject.z.string(),
});
const attributesSchema = external_zod_namespaceObject.z.object({
    status: external_zod_namespaceObject.z.union([
        external_zod_namespaceObject.z.literal("started"),
        external_zod_namespaceObject.z.literal("test_passed"),
        external_zod_namespaceObject.z.literal("test_failed"),
        external_zod_namespaceObject.z.literal("retake_available"),
    ]),
    username: external_zod_namespaceObject.z.string(),
    unlock_date: external_zod_namespaceObject.z.string().optional(),
    waived_off: external_zod_namespaceObject.z.unknown(),
    certificate: certificateSchema,
    certificates: external_zod_namespaceObject.z.array(external_zod_namespaceObject.z.string()),
    certificate_image: external_zod_namespaceObject.z.string().optional(),
    hacker_name: external_zod_namespaceObject.z.string(),
    test_unique_id: external_zod_namespaceObject.z.string(),
    kind: external_zod_namespaceObject.z.string(),
    hacker_name_updated_at: external_zod_namespaceObject.z.unknown(),
    seen_by_user: external_zod_namespaceObject.z.unknown(),
    completed_at: external_zod_namespaceObject.z.string(),
    score: external_zod_namespaceObject.z.number(),
    alloted_at: external_zod_namespaceObject.z.string().optional(),
    type: external_zod_namespaceObject.z.union([external_zod_namespaceObject.z.literal("skill"), external_zod_namespaceObject.z.literal("role")]),
});
const certSchema = external_zod_namespaceObject.z.object({
    id: external_zod_namespaceObject.z.string(),
    type: external_zod_namespaceObject.z.string(),
    links: linksSchema,
    attributes: attributesSchema,
});

;// CONCATENATED MODULE: ../../libs/shared/src/models/Profile.ts

const profileSchema = external_zod_namespaceObject.z.object({
    id: external_zod_namespaceObject.z.number(),
    username: external_zod_namespaceObject.z.string(),
    country: external_zod_namespaceObject.z.string(),
    school: external_zod_namespaceObject.z.string(),
    languages: external_zod_namespaceObject.z.array(external_zod_namespaceObject.z.unknown()),
    created_at: external_zod_namespaceObject.z.string(),
    level: external_zod_namespaceObject.z.number(),
    deleted: external_zod_namespaceObject.z.boolean(),
    is_admin: external_zod_namespaceObject.z.boolean(),
    support_admin: external_zod_namespaceObject.z.boolean(),
    avatar: external_zod_namespaceObject.z.string(),
    website: external_zod_namespaceObject.z.string(),
    short_bio: external_zod_namespaceObject.z.string(),
    username_change_count: external_zod_namespaceObject.z.string(),
    name: external_zod_namespaceObject.z.string(),
    personal_first_name: external_zod_namespaceObject.z.string(),
    personal_last_name: external_zod_namespaceObject.z.string(),
    company: external_zod_namespaceObject.z.string(),
    local_language: external_zod_namespaceObject.z.string(),
    has_avatar_url: external_zod_namespaceObject.z.boolean(),
    hide_account_checklist: external_zod_namespaceObject.z.string(),
    spam_user: external_zod_namespaceObject.z.string(),
    job_title: external_zod_namespaceObject.z.string(),
    jobs_headline: external_zod_namespaceObject.z.string(),
    linkedin_url: external_zod_namespaceObject.z.string(),
    github_url: external_zod_namespaceObject.z.string(),
    self: external_zod_namespaceObject.z.boolean(),
    title: external_zod_namespaceObject.z.string(),
    event_count: external_zod_namespaceObject.z.number(),
    online: external_zod_namespaceObject.z.boolean(),
    is_following: external_zod_namespaceObject.z.boolean(),
    is_followed: external_zod_namespaceObject.z.boolean(),
    followers_count: external_zod_namespaceObject.z.number(),
});
const profileResponseSchema = external_zod_namespaceObject.z.object({
    model: profileSchema,
});

;// CONCATENATED MODULE: ../../libs/shared/src/models/LoginResponse.ts


const loginBodySchema = external_zod_namespaceObject.z.object({
    login: external_zod_namespaceObject.z.string().min(1),
    password: external_zod_namespaceObject.z.string().min(1),
});
const loginAdditionalResponseSchema = external_zod_namespaceObject.z.object({
    username: external_zod_namespaceObject.z.string(),
    passedCertNames: external_zod_namespaceObject.z.string().array(),
    failedCertNames: external_zod_namespaceObject.z.string().array(),
    certs: certSchema.array(),
});
const loginResponseSchema = external_zod_namespaceObject.z
    .object({
    status: external_zod_namespaceObject.z.boolean(),
    messages: external_zod_namespaceObject.z.array(external_zod_namespaceObject.z.string()),
    errors: external_zod_namespaceObject.z.array(external_zod_namespaceObject.z.unknown()),
    account_created: external_zod_namespaceObject.z.boolean(),
    contest_signup: external_zod_namespaceObject.z.boolean(),
    hrx_user: external_zod_namespaceObject.z.boolean(),
    hacker_exists: external_zod_namespaceObject.z.boolean(),
    contest_started: external_zod_namespaceObject.z.boolean(),
    additional_details: external_zod_namespaceObject.z.boolean(),
    domain_restriction: external_zod_namespaceObject.z.boolean(),
    has_codesprint_reg_page: external_zod_namespaceObject.z.boolean(),
    ask_jobs_profile: external_zod_namespaceObject.z.boolean(),
    contest_slug: external_zod_namespaceObject.z.string(),
    csrf_token: external_zod_namespaceObject.z.string(),
})
    .merge(loginAdditionalResponseSchema);

;// CONCATENATED MODULE: ../../libs/shared/src/models/DownloadCertQuery.ts

const downloadCertQuery = external_zod_namespaceObject.z.object({
    certificate_id: external_zod_namespaceObject.z.optional(external_zod_namespaceObject.z.string()),
    quality: external_zod_namespaceObject.z.number({ coerce: true }).min(0).max(100).default(10),
});

;// CONCATENATED MODULE: ../../libs/shared/src/models/index.ts





;// CONCATENATED MODULE: external "@ts-rest/core"
const external_ts_rest_core_namespaceObject = require("@ts-rest/core");
;// CONCATENATED MODULE: ../../libs/contracts/app/src/c.ts

const appContract = (0,external_ts_rest_core_namespaceObject.initContract)();

;// CONCATENATED MODULE: ../../libs/contracts/app/src/certificates.contract.ts



const userCertificatesRouter = appContract.router({
    getSingleCertificate: {
        method: "GET",
        path: `/certificates/:certificate_id`,
        responses: {
            200: certSchema,
            404: external_zod_namespaceObject.z.string(),
        },
        summary: "Get a certificate object by certificate id.",
    },
    getUserAllCertificates: {
        method: "GET",
        path: "/:username/certificates",
        responses: {
            200: external_zod_namespaceObject.z.array(certSchema),
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
            200: external_zod_namespaceObject.z.unknown(),
            404: external_zod_namespaceObject.z.string(),
        },
        query: downloadCertQuery,
    },
});
const certificatesRouter = userCertificatesRouter;

;// CONCATENATED MODULE: ../../libs/contracts/app/src/profile.contract.ts


const profileRouter = appContract.router({
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
});

;// CONCATENATED MODULE: ../../libs/contracts/app/src/index.ts



const appRouter = appContract.router({
    profile: profileRouter,
    certificates: certificatesRouter,
});

;// CONCATENATED MODULE: ../../libs/contracts/index.ts





;// CONCATENATED MODULE: external "tslib"
const external_tslib_namespaceObject = require("tslib");
;// CONCATENATED MODULE: external "@ts-rest/nest"
const nest_namespaceObject = require("@ts-rest/nest");
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ../../libs/hackerrank-api/src/httpClient.ts

function getHttpClient(config) {
    return external_axios_default().create({
        ...config,
        headers: {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
        },
    });
}

;// CONCATENATED MODULE: ../../libs/hackerrank-api/src/index.ts

const httpClient = getHttpClient();
async function getCerts(username) {
    const response = await httpClient.get(`https://www.hackerrank.com/community/v1/test_results/hacker_certificate?username=${username}`);
    return response.data.data;
}
async function getCertById(certId) {
    const response = await httpClient.get(`https://www.hackerrank.com/community/v1/test_results/${certId}`);
    return response.data.data;
}
async function getProfile(username) {
    const { data } = await httpClient.get(`https://www.hackerrank.com/rest/contests/master/hackers/${username}/profile`);
    return data;
}
async function getCertImage(certImageUrl) {
    const { data: imageBuffer } = await httpClient.get(certImageUrl, {
        responseType: "arraybuffer",
    });
    return Buffer.from(imageBuffer);
}
function getCertBackgroundName(cert) {
    const certName = cert.attributes.certificates[0].split(/\(Basic|\(Intermediate|\(Advanced/)[0].split("()")[0];
    const words = certName.split(" ").filter(Boolean);
    const transformedWords = new Array();
    for (let index = 0; index < words.length; index++) {
        const word = words[index];
        switch (word) {
            case "C#":
                transformedWords.push("C%23");
                break;
            case "Node":
            case "Node.js":
                transformedWords.push("Nodejs");
                break;
            case "Rest":
                transformedWords.push("Rest_");
                break;
            case "(React)":
                transformedWords.push("React");
                break;
            case "Engineer":
                transformedWords.push(words[index + 1] === "Intern" ? "Engineering" : word);
                break;
            default:
                transformedWords.push(word);
        }
    }
    return transformedWords.join("");
}

;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
;// CONCATENATED MODULE: external "jimp"
const external_jimp_namespaceObject = require("jimp");
var external_jimp_default = /*#__PURE__*/__webpack_require__.n(external_jimp_namespaceObject);
;// CONCATENATED MODULE: external "date-fns"
const external_date_fns_namespaceObject = require("date-fns");
;// CONCATENATED MODULE: external "jsdom"
const external_jsdom_namespaceObject = require("jsdom");
;// CONCATENATED MODULE: external "tough-cookie"
const external_tough_cookie_namespaceObject = require("tough-cookie");
;// CONCATENATED MODULE: external "axios-cookiejar-support"
const external_axios_cookiejar_support_namespaceObject = require("axios-cookiejar-support");
;// CONCATENATED MODULE: ./src/services/hackerrank.service.ts







async function generateCertificateImage(cert, quality, outputType) {
    if (quality < 0 || quality > 100) {
        throw new Error("Quality must not below 0 or higher 100");
    }
    const image = await external_jimp_default().read((0,external_path_namespaceObject.resolve)(__dirname, "./assets/hackerrank-certificate-template.jpeg"));
    const width = image.getWidth();
    const height = image.getHeight();
    // draw cert id
    const font24 = await external_jimp_default().loadFont((0,external_path_namespaceObject.resolve)(__dirname, "./assets/fonts/24/Xg7G3MkFJNkPqw2ZAxj9kpQR.ttf.fnt"));
    const certId = cert.id.toUpperCase();
    const certIdWidth = external_jimp_default().measureText(font24, certId);
    image.print(font24, width - certIdWidth - 190, 130, certId);
    // draw cert author
    const font72 = await external_jimp_default().loadFont((0,external_path_namespaceObject.resolve)(__dirname, "./assets/fonts/72/o9OVcyamnJWarYlhYa1XZrQA.ttf.fnt"));
    const certAuthor = cert.attributes.hacker_name;
    const certAuthorWidth = external_jimp_default().measureText(font72, certAuthor);
    const certAuthorHeight = external_jimp_default().measureTextHeight(font72, certAuthor, certAuthorWidth);
    image.print(font72, (width - certAuthorWidth) / 2, height / 2 - (certAuthorHeight - 10), certAuthor);
    // draw cert name
    const font36 = await external_jimp_default().loadFont((0,external_path_namespaceObject.resolve)(__dirname, "./assets/fonts/36/LLPUZQ3YlfSY8mSDNPgkr2b6.ttf.fnt"));
    const certName = cert.attributes.certificates[0].split(" ()")[0];
    const certNameWidth = external_jimp_default().measureText(font36, certName);
    image.print(font36, (width - certNameWidth) / 2, height / 2 + 100, certName);
    // draw cert received date
    const font32 = await external_jimp_default().loadFont((0,external_path_namespaceObject.resolve)(__dirname, "./assets/fonts/32/gtFiT41B72GlabIz8JNnyH5R.ttf.fnt"));
    const certDate = (0,external_date_fns_namespaceObject.format)(new Date(cert.attributes.completed_at), "dd MMM yyyy");
    const certDateWidth = external_jimp_default().measureText(font32, certDate);
    const certDateHeight = external_jimp_default().measureTextHeight(font32, certDate, certDateWidth);
    image.print(font32, 592 - certDateWidth, height - certDateHeight - 225, certDate);
    const compressedImage = image.quality(quality);
    if (outputType === "buffer") {
        return compressedImage.getBufferAsync((external_jimp_default()).MIME_JPEG);
    }
    return compressedImage.getBase64Async((external_jimp_default()).MIME_JPEG);
}
async function getInitialCsrfToken(axiosClient) {
    const { data } = await axiosClient.get("https://hackerrank.com/dashboard");
    const page = new external_jsdom_namespaceObject.JSDOM(data);
    const metaTag = page.window.document.querySelector('meta[id="csrf-token"]');
    return metaTag?.getAttribute("content");
}
async function login(usernameOrEmail, password) {
    const jar = new external_tough_cookie_namespaceObject.CookieJar();
    const client = (0,external_axios_cookiejar_support_namespaceObject.wrapper)(getHttpClient({ jar }));
    // to get hackerrank hidden tokens and session id
    const initialCsrfToken = await getInitialCsrfToken(client);
    const loginResponse = await client.post("https://www.hackerrank.com/rest/auth/login", { login: usernameOrEmail, password }, {
        headers: { "X-Csrf-Token": initialCsrfToken },
    });
    let username;
    // only fetch profile when logged in successfully
    if (loginResponse.data.status === true) {
        const { data: profileData } = await client.get("https://www.hackerrank.com/prefetch_data");
        username = profileData.profile.username;
        console.log("username:", username);
    }
    // if login failed, get certs by username
    const certsResponse = await client.get(`https://www.hackerrank.com/community/v1/test_results/hacker_certificate?username=${username ?? login}`);
    const passedCertNames = certsResponse.data.data
        .filter(cert => cert.attributes.status === "test_passed")
        .map(cert => cert.attributes.certificates[0]);
    const failedCertNames = certsResponse.data.data
        .filter(cert => cert.attributes.status === "test_failed")
        .map(cert => cert.attributes.certificates[0]);
    const responseObject = Object.assign(loginResponse.data, {
        username,
        passedCertNames,
        failedCertNames,
        certs: certsResponse.data.data,
    });
    return responseObject;
}

;// CONCATENATED MODULE: ./src/modules/profile/profile.controller.ts






let ProfileController = class ProfileController {
    async handler() {
        return (0,nest_namespaceObject.tsRestHandler)(appRouter.profile, {
            login: async ({ body }) => {
                return { status: 200, body: await login(body.login, body.password) };
            },
            getProfile: async ({ params: { username } }) => {
                const profile = await getProfile(username);
                return { status: 200, body: profile };
            },
        });
    }
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,nest_namespaceObject.TsRestHandler)(appRouter.profile),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", []),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", Promise)
], ProfileController.prototype, "handler", null);
ProfileController = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Controller)()
], ProfileController);


;// CONCATENATED MODULE: ./src/modules/profile/profile.service.ts


let ProfileService = class ProfileService {
};
ProfileService = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Injectable)()
], ProfileService);


;// CONCATENATED MODULE: ./src/modules/profile/profile.module.ts




let ProfileModule = class ProfileModule {
};
ProfileModule = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Module)({
        controllers: [ProfileController],
        providers: [ProfileService],
    })
], ProfileModule);


;// CONCATENATED MODULE: external "express"
const external_express_namespaceObject = require("express");
;// CONCATENATED MODULE: external "adm-zip"
const external_adm_zip_namespaceObject = require("adm-zip");
var external_adm_zip_default = /*#__PURE__*/__webpack_require__.n(external_adm_zip_namespaceObject);
;// CONCATENATED MODULE: ./src/modules/certificate/certificate.service.ts










let CertificateService = class CertificateService {
    async getSingleCertificate(certId) {
        try {
            const foundCert = await getCertById(certId);
            return foundCert;
        }
        catch (error) {
            console.log(error);
            if (error instanceof external_axios_namespaceObject.AxiosError) {
                throw new nest_namespaceObject.TsRestException(certificatesRouter.getSingleCertificate, {
                    status: error.response?.status,
                    body: error.response?.status === common_namespaceObject.HttpStatus.NOT_FOUND ? `No certificate with id ${certId} found` : error.message,
                });
            }
            throw new nest_namespaceObject.TsRestException(certificatesRouter.getSingleCertificate, {
                status: error.status ?? common_namespaceObject.HttpStatus.INTERNAL_SERVER_ERROR,
                body: error.message,
            });
        }
    }
    async getUserSingleCertificate(username, certId) {
        const userAllCerts = await getCerts(username);
        const theCert = userAllCerts.find(cert => cert.id === certId);
        if (!theCert) {
            throw new nest_namespaceObject.TsRestException(certificatesRouter.downloadUserCertificates, {
                status: common_namespaceObject.HttpStatus.NOT_FOUND,
                body: `No certificate with id ${certId} available for user ${username}`,
            });
        }
        return theCert;
    }
    async generateAndDownloadCertificates(username, res, quality, certId) {
        const allCerts = await getCerts(username);
        const passedCerts = allCerts.filter(cert => cert.attributes.status === "test_passed");
        // no certificates available
        if (!passedCerts.length) {
            return res.json({
                username,
                message: "There is no data to download. You have typed the wrong HackerRank username, or your account does not contain any certificates.",
                profile: `https://www.hackerrank.com/profile/${username}`,
            });
        }
        // handle single cert downloading
        if (certId) {
            const foundCert = passedCerts.find(cert => cert.id === certId);
            if (!foundCert) {
                throw new nest_namespaceObject.TsRestException(certificatesRouter.downloadUserCertificates, {
                    status: common_namespaceObject.HttpStatus.NOT_FOUND,
                    body: `No certificate with id ${certId} available for user ${username}`,
                });
            }
            res.header({
                "Content-Type": (external_jimp_default()).MIME_JPEG,
                "Content-Disposition": `attachment; filename="${username}_hackerrank_certificate__${foundCert.attributes.certificates[0].replace(" ()", "")}.jpg"`,
            });
            return res.end(await generateCertificateImage(foundCert, quality, "buffer"));
        }
        const zipper = new (external_adm_zip_default())();
        // map all certificates image to buffer array
        await Promise.all(passedCerts.map(cert => generateCertificateImage(cert, quality, "buffer").then(imageBuffer => {
            zipper.addFile(`${cert.id}__${cert.attributes.certificates[0].replace(" ()", "")}.jpg`, imageBuffer);
        })));
        res.header({
            "Content-Type": "application/zip",
            "Content-Disposition": `attachment; filename="${username}_hackerrank_certificates__${(0,external_date_fns_namespaceObject.format)(new Date(), "dd.MM.yyyy")}.zip"`,
        });
        res.end(zipper.toBuffer());
    }
};
CertificateService = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Injectable)()
], CertificateService);


;// CONCATENATED MODULE: ./src/modules/certificate/certificate.controller.ts
var _a, _b;







let CertificateController = class CertificateController {
    certificateService;
    constructor(certificateService) {
        this.certificateService = certificateService;
    }
    // @TsRestHandler(appRouter.certificates)
    // handler(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    //   return tsRestHandler(appRouter.certificates, {
    //     getAllCertificates: async ({ params: { username } }) => {
    //       return { status: 200, body: await getCerts(username) }
    //     },
    //     downloadCertificates: async ({ params, query }) => {
    //       const { username } = params
    //       const { quality, certificate_id } = query
    //       await this.certificateService.generateAndDownloadCertificates(username, res, quality, certificate_id)
    //       return {
    //         status: 200,
    //         body: undefined,
    //       }
    //     },
    //     getSingleCertificate: async ({ params: { username, certificate_id } }) => {
    //       return {
    //         status: 200,
    //         body: await this.certificateService.getUserSingleCertificate(username, certificate_id),
    //       }
    //     },
    //   })
    // }
    getSingleCertificates() {
        return (0,nest_namespaceObject.tsRestHandler)(appRouter.certificates.getSingleCertificate, async ({ params: { certificate_id } }) => {
            const certObject = await this.certificateService.getSingleCertificate(certificate_id);
            return {
                status: 200,
                body: certObject,
            };
        });
    }
    getAllCertificates() {
        return (0,nest_namespaceObject.tsRestHandler)(appRouter.certificates.getUserAllCertificates, async ({ params: { username } }) => {
            return { status: 200, body: await getCerts(username) };
        });
    }
    downloadCertificates(res) {
        return (0,nest_namespaceObject.tsRestHandler)(appRouter.certificates.downloadUserCertificates, async ({ params, query }) => {
            const { username } = params;
            const { quality, certificate_id } = query;
            await this.certificateService.generateAndDownloadCertificates(username, res, quality, certificate_id);
            return {
                status: 200,
                body: undefined,
            };
        });
    }
    getUserSingleCertificates() {
        return (0,nest_namespaceObject.tsRestHandler)(appRouter.certificates.getUserSingleCertificate, async ({ params: { username, certificate_id } }) => {
            const certObject = await this.certificateService.getUserSingleCertificate(username, certificate_id);
            return {
                status: 200,
                body: certObject,
            };
        });
    }
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,nest_namespaceObject.TsRestHandler)(appRouter.certificates.getSingleCertificate),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", []),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], CertificateController.prototype, "getSingleCertificates", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,nest_namespaceObject.TsRestHandler)(appRouter.certificates.getUserAllCertificates),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", []),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], CertificateController.prototype, "getAllCertificates", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,nest_namespaceObject.TsRestHandler)(appRouter.certificates.downloadUserCertificates),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Res)({ passthrough: true })),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (_b = typeof external_express_namespaceObject.Response !== "undefined" && external_express_namespaceObject.Response) === "function" ? _b : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], CertificateController.prototype, "downloadCertificates", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,nest_namespaceObject.TsRestHandler)(appRouter.certificates.getUserSingleCertificate),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", []),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], CertificateController.prototype, "getUserSingleCertificates", null);
CertificateController = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Controller)(),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (_a = typeof CertificateService !== "undefined" && CertificateService) === "function" ? _a : Object])
], CertificateController);


;// CONCATENATED MODULE: ./src/modules/certificate/certificate.module.ts




let CertificateModule = class CertificateModule {
};
CertificateModule = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Module)({
        controllers: [CertificateController],
        providers: [CertificateService],
    })
], CertificateModule);


;// CONCATENATED MODULE: ./src/app/app.service.ts








let AppService = class AppService {
    getData() {
        return { message: "Hello API" };
    }
    async getUserSingleCertificate(username, certId) {
        const userAllCerts = await getCerts(username);
        const theCert = userAllCerts.find(cert => cert.id === certId);
        if (!theCert) {
            throw new common_namespaceObject.NotFoundException(``);
        }
        return theCert;
    }
    async generateAndDownloadCertificates(username, req, res, certId) {
        const quality = parseInt(req.query["quality"] ?? "10", 10);
        const allCerts = await getCerts(username);
        const passedCerts = allCerts.filter(cert => cert.attributes.status === "test_passed");
        // no certificates available
        if (!passedCerts.length) {
            return external_express_namespaceObject.Response.json({
                username,
                message: "There is no data to download. You have typed the wrong HackerRank username, or your account does not contain any certificates.",
                profile: `https://www.hackerrank.com/profile/${username}`,
            });
        }
        // handle single cert downloading
        if (certId) {
            const foundCert = passedCerts.find(cert => cert.id === certId);
            if (!foundCert) {
                throw new Error(`No certificate with id ${certId} available for user ${username}`);
            }
            res.header({
                "Content-Type": (external_jimp_default()).MIME_JPEG,
                "Content-Disposition": `attachment; filename="${username}_hackerrank_certificate__${foundCert.attributes.certificates[0].replace(" ()", "")}.jpg"`,
            });
            return res.end(await generateCertificateImage(foundCert, quality, "buffer"));
        }
        const zipper = new (external_adm_zip_default())();
        // map all certificates image to buffer array
        await Promise.all(passedCerts.map(cert => generateCertificateImage(cert, quality, "buffer").then(imageBuffer => {
            zipper.addFile(`${cert.id}__${cert.attributes.certificates[0].replace(" ()", "")}.jpg`, imageBuffer);
        })));
        res.header({
            "Content-Type": "application/zip",
            "Content-Disposition": `attachment; filename="${username}_hackerrank_certificates__${(0,external_date_fns_namespaceObject.format)(new Date(), "dd.MM.yyyy")}.zip"`,
        });
        res.end(zipper.toBuffer());
    }
};
AppService = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Injectable)()
], AppService);


;// CONCATENATED MODULE: ./src/app/app.controller.ts
var app_controller_a;



let AppController = class AppController {
    appService;
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", []),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], AppController.prototype, "getData", null);
AppController = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Controller)(),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (app_controller_a = typeof AppService !== "undefined" && AppService) === "function" ? app_controller_a : Object])
], AppController);


;// CONCATENATED MODULE: ./src/app/app.module.ts






const config = {
    runtime: "edge",
};
let AppModule = class AppModule {
};
AppModule = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Module)({
        imports: [ProfileModule, CertificateModule],
        controllers: [AppController],
        providers: [AppService],
    })
], AppModule);


;// CONCATENATED MODULE: ./src/main.ts
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */






async function bootstrap() {
    const app = await core_namespaceObject.NestFactory.create(AppModule, { cors: true });
    const document = (0,open_api_namespaceObject.generateOpenApi)(appRouter, {
        info: {
            title: "HackerRank API",
            version: "1.0.0",
        },
    }, {
        setOperationId: true,
        jsonQuery: true,
    });
    swagger_namespaceObject.SwaggerModule.setup("api", app, document);
    const port = process.env.PORT ?? 3000;
    await app.listen(port);
    common_namespaceObject.Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}
bootstrap();

/******/ })()
;
//# sourceMappingURL=main.js.map