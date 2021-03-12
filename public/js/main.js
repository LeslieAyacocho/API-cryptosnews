/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/crypto.js":
/*!********************************!*\
  !*** ./resources/js/crypto.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ crypto)
/* harmony export */ });
function crypto(type) {
  console.log("This is working...");
  var tableContent = "\n            <thead class=\"\">\n                <tr>\n                \n                \n                <th>  </th>\n                <th>CRYPTOCURRENCY</th>\n                <th>PRICE</th>\n                <th>MARKET CAP</th>\n                \n                </tr>\n            </thead>\n            <tbody id=\"cryptoCoin\">\n            </tbody>\n            ";
  $('#tableContent').html(tableContent);
  $.ajax({
    type: 'GET',
    url: // 'https://api.coinranking.com/v1/public/coins',
    'https://api.coinranking.com/v1/public/' + type + '?base=PHP&timePeriod=7d',
    // coinranking4a54ef6bb07419e96c653461240ac9f9ebe2c2d4db26a7d6
    success: function success(response) {
      var data = response.data;
      console.log(data);
      var currency = new Intl.NumberFormat();
      data.coins.forEach(function (element) {
        $('#cryptoCoin').append("\n                        <tr class=\"uuid\" data-id=\"".concat(element.uuid, "\">\n                        <td> ").concat(element.rank, "</td>\n                        <td>\n                            <div class=\"profilename_wrapper\" >\n                        \n                            <img class=\"img\" src=\"").concat(element.iconUrl, "\">\n                                <span class=\"profile_name\"> \n                                <a class=\"currencylink\" href=\"\" > ").concat(element.name, "</a>\n                                <p class=\"profile_symbol\"> ").concat(element.symbol, "</p>\n                                </span>\n                            </div>\n                        </td>\n                        <td>").concat(data.base.sign, " ").concat(currency.format(element.price), "</td>\n                        <td>").concat(data.base.sign, " ").concat(currency.format(element.marketCap), "</td>\n                    \n                        </tr>\n                        "));
      });
      $(".uuid").on("click", function (e) {
        var id = $(e.currentTarget).attr('data-id');
        alert(id);
      });
    }
  });
}

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crypto */ "./resources/js/crypto.js");

$(document).ready(function () {
  $('.link').on('click', function (e) {
    var link = e.currentTarget.dataset.id;
    console.log(link);

    switch (link) {
      case "crypto":
        (0,_crypto__WEBPACK_IMPORTED_MODULE_0__.default)('coins');
        break;

      default:
        break;
    }
  });
});
})();

/******/ })()
;