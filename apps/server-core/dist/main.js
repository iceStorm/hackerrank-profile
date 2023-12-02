/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_app_module__WEBPACK_IMPORTED_MODULE_2__]);
_app_app_module__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */



async function bootstrap() {
    const app = await _nestjs_core__WEBPACK_IMPORTED_MODULE_1__.NestFactory.create(_app_app_module__WEBPACK_IMPORTED_MODULE_2__.AppModule, { cors: true });
    const port = process.env.PORT ?? 3000;
    await app.listen(port);
    _nestjs_common__WEBPACK_IMPORTED_MODULE_0__.Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}
bootstrap();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_controller__WEBPACK_IMPORTED_MODULE_2__]);
_app_controller__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Module)({
        imports: [],
        controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_2__.AppController],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService],
    })
], AppModule);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 5 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppController: () => (/* binding */ AppController)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hackerrank_profile_hackerrank_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hackerrank_profile_hackerrank_api__WEBPACK_IMPORTED_MODULE_2__]);
_hackerrank_profile_hackerrank_api__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
var _a;




let AppController = class AppController {
    appService;
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
    getUserProfile(username) {
        return Promise.all([(0,_hackerrank_profile_hackerrank_api__WEBPACK_IMPORTED_MODULE_2__.getProfile)(username), (0,_hackerrank_profile_hackerrank_api__WEBPACK_IMPORTED_MODULE_2__.getCerts)(username)]);
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Get)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", []),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", void 0)
], AppController.prototype, "getData", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Get)(":username"),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(0, (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Param)("username")),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [String]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", void 0)
], AppController.prototype, "getUserProfile", null);
AppController = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Controller)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [typeof (_a = typeof _app_service__WEBPACK_IMPORTED_MODULE_3__.AppService !== "undefined" && _app_service__WEBPACK_IMPORTED_MODULE_3__.AppService) === "function" ? _a : Object])
], AppController);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),
/* 6 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateCertificateImageFactory: () => (/* binding */ generateCertificateImageFactory),
/* harmony export */   generateImageBase64: () => (/* binding */ generateImageBase64),
/* harmony export */   generateImageBuffer: () => (/* binding */ generateImageBuffer),
/* harmony export */   getCertBackgroundName: () => (/* binding */ getCertBackgroundName),
/* harmony export */   getCertImage: () => (/* binding */ getCertImage),
/* harmony export */   getCerts: () => (/* binding */ getCerts),
/* harmony export */   getProfile: () => (/* binding */ getProfile)
/* harmony export */ });
/* harmony import */ var jimp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var jimp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jimp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _httpClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);



const httpClient = (0,_httpClient__WEBPACK_IMPORTED_MODULE_2__.getHttpClient)();
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
async function generateCertificateImageFactory(outputType) {
    return async (cert, quality) => {
        if (quality < 0 || quality > 100) {
            throw new Error("Quality must not below 0 or higher 100");
        }
        const image = await jimp__WEBPACK_IMPORTED_MODULE_0___default().read("./hackerrank-certificate-template.jpeg");
        const width = image.getWidth();
        const height = image.getHeight();
        // draw cert id
        const font24 = await jimp__WEBPACK_IMPORTED_MODULE_0___default().loadFont("./fonts/24/Xg7G3MkFJNkPqw2ZAxj9kpQR.ttf.fnt");
        const certId = cert.id.toUpperCase();
        const certIdWidth = jimp__WEBPACK_IMPORTED_MODULE_0___default().measureText(font24, certId);
        image.print(font24, width - certIdWidth - 190, 130, certId);
        // draw cert author
        const font72 = await jimp__WEBPACK_IMPORTED_MODULE_0___default().loadFont("./fonts/72/o9OVcyamnJWarYlhYa1XZrQA.ttf.fnt");
        const certAuthor = cert.attributes.hacker_name;
        const certAuthorWidth = jimp__WEBPACK_IMPORTED_MODULE_0___default().measureText(font72, certAuthor);
        const certAuthorHeight = jimp__WEBPACK_IMPORTED_MODULE_0___default().measureTextHeight(font72, certAuthor, certAuthorWidth);
        image.print(font72, (width - certAuthorWidth) / 2, height / 2 - (certAuthorHeight - 10), certAuthor);
        // draw cert name
        const font36 = await jimp__WEBPACK_IMPORTED_MODULE_0___default().loadFont("./fonts/36/LLPUZQ3YlfSY8mSDNPgkr2b6.ttf.fnt");
        const certName = cert.attributes.certificates[0].split(" ()")[0];
        const certNameWidth = jimp__WEBPACK_IMPORTED_MODULE_0___default().measureText(font36, certName);
        image.print(font36, (width - certNameWidth) / 2, height / 2 + 100, certName);
        // draw cert received date
        const font32 = await jimp__WEBPACK_IMPORTED_MODULE_0___default().loadFont("./fonts/32/gtFiT41B72GlabIz8JNnyH5R.ttf.fnt");
        const certDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(new Date(cert.attributes.completed_at), "dd MMM yyyy");
        const certDateWidth = jimp__WEBPACK_IMPORTED_MODULE_0___default().measureText(font32, certDate);
        const certDateHeight = jimp__WEBPACK_IMPORTED_MODULE_0___default().measureTextHeight(font32, certDate, certDateWidth);
        image.print(font32, 592 - certDateWidth, height - certDateHeight - 225, certDate);
        const compressedImage = image.quality(quality);
        if (outputType === "buffer") {
            return compressedImage.getBufferAsync((jimp__WEBPACK_IMPORTED_MODULE_0___default().MIME_JPEG));
        }
        return compressedImage.getBase64Async((jimp__WEBPACK_IMPORTED_MODULE_0___default().MIME_JPEG));
    };
}
const generateImageBuffer = await generateCertificateImageFactory("buffer");
const generateImageBase64 = await generateCertificateImageFactory("base64");

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("jimp");

/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  getHttpClient: () => (/* binding */ getHttpClient)
});

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


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppService: () => (/* binding */ AppService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let AppService = class AppService {
    getData() {
        return { message: 'Hello API' };
    }
};
AppService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Injectable)()
], AppService);



/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map