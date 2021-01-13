/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/converter.js":
/*!*****************************!*\
  !*** ./src/js/converter.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/services */ "./src/js/services/services.js");




const converter = ({
    selectFromIdentifier,
    selectToIdentifier,
    inputFromIdentifier,
    inputToIdentifier
}) => {
    const selectFrom = document.querySelector(selectFromIdentifier);
    const selectTo = document.querySelector(selectToIdentifier);
    const inputFrom = document.querySelector(inputFromIdentifier);
    const inputTo = document.querySelector(inputToIdentifier);

    if ( !selectFrom || !selectTo || !inputFrom || !inputTo ) return ;

    const data = {
        quantity: null,
        valute: selectFrom.value
    };

    let rate = 0;

    const calculationValue = () => +rate * +data.quantity;

    const checkСurrency = props => {
        for (let key in props) {
            if ( key === selectTo.value ) {
                rate = props[key].Value
                break
            }
        }
        inputTo.value = calculationValue().toFixed(4);
    };

    const request = () => {
        (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.postData)(data)
        .then(props => {// получаем объект с данными по курсам
            // checkСurrency(props);

            // ------------------- тестовый ответ
            const prop = {
                "Valute": {
                    "USD": {
                        "ID": "R01235",
                        "NumCode": "840",
                        "CharCode": "USD",
                        "Nominal": 1,
                        "Name": "Доллар США",
                        "Value": 73.8757,
                        "Previous": 73.8757
                    },
                    "EUR": {
                        "ID": "R01239",
                        "NumCode": "978",
                        "CharCode": "EUR",
                        "Nominal": 1,
                        "Name": "Евро",
                        "Value": 90.7932,
                        "Previous": 90.6824
                    }
                }
            }
            checkСurrency(prop.Valute);
            // ------------------- тестовый ответ
        });
    };

    const inputEvent = e => {
        e.target.value = e.target.value.replace(/\D/ig, '');
        if ( e.target.value === data.quantity ) return;

        data.quantity = e.target.value;
        request();
    };

    const changeEvent = e => request();

    inputFrom.addEventListener('input', inputEvent);
    selectFrom.addEventListener('change', changeEvent);
    selectTo.addEventListener('change', changeEvent);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (converter);

/***/ }),

/***/ "./src/js/services/services.js":
/*!*************************************!*\
  !*** ./src/js/services/services.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": () => /* binding */ postData
/* harmony export */ });

const _url = 'https://jsonplaceholder.typicode.com/posts';

const postData = async body => {
    const resp = await fetch(_url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    if (!resp.ok) throw new Error(`Could not fetch ${_url}, status: ${resp.status}`);

    return await resp.json();
};



/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_converter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/converter */ "./src/js/converter.js");


document.addEventListener('DOMContentLoaded', () => {

    (0,_js_converter__WEBPACK_IMPORTED_MODULE_0__.default)({
        selectFromIdentifier: '[data-select-from]',
        selectToIdentifier: '[data-select-to]',
        inputFromIdentifier: '[data-input-from]',
        inputToIdentifier: '[data-input-to]'
    });

});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=app.js.map