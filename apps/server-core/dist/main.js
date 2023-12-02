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
;// CONCATENATED MODULE: external "tslib"
const external_tslib_namespaceObject = require("tslib");
;// CONCATENATED MODULE: external "express"
const external_express_namespaceObject = require("express");
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

;// CONCATENATED MODULE: external "date-fns"
const external_date_fns_namespaceObject = require("date-fns");
;// CONCATENATED MODULE: external "jimp"
const external_jimp_namespaceObject = require("jimp");
var external_jimp_default = /*#__PURE__*/__webpack_require__.n(external_jimp_namespaceObject);
;// CONCATENATED MODULE: external "adm-zip"
const external_adm_zip_namespaceObject = require("adm-zip");
var external_adm_zip_default = /*#__PURE__*/__webpack_require__.n(external_adm_zip_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
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
var _a, _b, _c;





let AppController = class AppController {
    appService;
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
    getUserProfile(username) {
        return getProfile(username);
    }
    getUserAllCertificate(username) {
        return getCerts(username);
    }
    downloadUserSingleCertificate(req, res, username, certId) {
        return this.appService.generateAndDownloadCertificates(username, req, res, certId);
    }
    getUserSingleCertificate(username, certId) {
        return this.appService.getUserSingleCertificate(username, certId);
    }
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", []),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], AppController.prototype, "getData", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(":username"),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)("username")),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], AppController.prototype, "getUserProfile", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(":username/certificates"),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)("username")),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], AppController.prototype, "getUserAllCertificate", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(":username/certificates/:cert_id?/download"),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Req)()),
    (0,external_tslib_namespaceObject.__param)(1, (0,common_namespaceObject.Res)()),
    (0,external_tslib_namespaceObject.__param)(2, (0,common_namespaceObject.Param)("username")),
    (0,external_tslib_namespaceObject.__param)(3, (0,common_namespaceObject.Param)("cert_id")),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (_b = typeof external_express_namespaceObject.Request !== "undefined" && external_express_namespaceObject.Request) === "function" ? _b : Object, typeof (_c = typeof external_express_namespaceObject.Response !== "undefined" && external_express_namespaceObject.Response) === "function" ? _c : Object, String, String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], AppController.prototype, "downloadUserSingleCertificate", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(":username/certificates/:cert_id"),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)("username")),
    (0,external_tslib_namespaceObject.__param)(1, (0,common_namespaceObject.Param)("cert_id")),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String, String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], AppController.prototype, "getUserSingleCertificate", null);
AppController = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Controller)(),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (_a = typeof AppService !== "undefined" && AppService) === "function" ? _a : Object])
], AppController);


;// CONCATENATED MODULE: ./src/app/app.module.ts




let AppModule = class AppModule {
};
AppModule = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Module)({
        imports: [],
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
    const port = process.env.PORT ?? 3000;
    await app.listen(port);
    common_namespaceObject.Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}
bootstrap();

/******/ })()
;
//# sourceMappingURL=main.js.map