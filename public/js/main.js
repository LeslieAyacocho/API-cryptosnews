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
/* harmony import */ var _getHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getHistory */ "./resources/js/getHistory.js");
/* harmony import */ var _drawAllGraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawAllGraph */ "./resources/js/drawAllGraph.js");
/* harmony import */ var _showDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showDetails */ "./resources/js/showDetails.js");
/* harmony import */ var _drawGraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drawGraph */ "./resources/js/drawGraph.js");




function crypto(type) {
  console.log("This is working...");
  var tableContent = "\n            <div class=\"table-responsive\" id=\"draggable\" class=\"table-responsive ui-widget-content\">\n            <table class=\"table\" id=\"tableContent\">\n            <thead class=\"\">\n            <tr>\n            \n            \n            <th>  </th>\n            <th>CRYPTOCURRENCY</th>\n            <th>PRICE</th>\n            <th>MARKET CAP</th>\n            <th>24H</th>\n            \n            </tr>\n            </thead>\n            <tbody id=\"cryptoCoin\">\n            </tbody>\n            </table></div>\n            ";
  $('#contentpage').html(tableContent);
  $('#contentpage').append(_showDetails__WEBPACK_IMPORTED_MODULE_2__.default);
  $.ajax({
    method: 'GET',
    url: 'https://api.coinranking.com/v1/public/coins?base=PHP',
    // headers: {'x-access-token' : 'coinranking4a54ef6bb07419e96c653461240ac9f9ebe2c2d4db26a7d6'} ,
    success: function success(response) {
      var data = response.data;
      var all_coin_history = new Array();
      var all_coin_change = new Array();
      var coin_change;
      var i = 0;
      var x = -1;
      var r = 0;
      console.log(data);
      var currency = new Intl.NumberFormat();
      data.coins.forEach(function (element) {
        var coin_history = (0,_getHistory__WEBPACK_IMPORTED_MODULE_0__.default)(element.id);
        all_coin_history[i] = coin_history;
        i++;
        $('#cryptoCoin').append("\n                        <tr class=\"uuid\" data-id=\"".concat(element.id, "\" data-bs-toggle=\"modal\" data-bs-target=\"#showDetails\">\n                        <td> ").concat(element.rank, "</td>\n                        <td>\n                            <div \n                            class=\"profilename_wrapper\" >\n                        <div class=\"profile_logo\">\n                            <img class=\"img\" src=\"").concat(element.iconUrl, "\">\n                        </div>\n                                <span class=\"profile_name\"> \n                                <a class=\"currencylink\" href=\"#\"> ").concat(element.name, "</a>\n                                <p class=\"profile_symbol\"> ").concat(element.symbol, "</p>\n                                </span>\n                            </div>\n                        </td>\n                        <td>").concat(data.base.sign, " ").concat(currency.format(element.price), "</td>\n                        <td>").concat(data.base.sign, " ").concat(currency.format(element.marketCap), "</td>\n                    \n                        <td id=\"chart_div").concat(r, "\"></td>\n                        \n                        \n                        </tr>\n                        "));
        x++;
        all_coin_change[x] = element.change;
        r++;
        (0,_drawAllGraph__WEBPACK_IMPORTED_MODULE_1__.default)(all_coin_history, all_coin_change);
      });
      $('#showDetails').on('show.bs.modal', function (e) {
        var each_coin_history = new Array();
        var id = $(e.relatedTarget).attr('data-id');
        console.log(id);
        $.ajax({
          method: 'GET',
          url: 'https://api.coinranking.com/v1/public/coin/' + id + '/history/24h?base=PHP',
          success: function success(response) {
            var historydata = response.data;
            var i = -1;
            historydata.history.forEach(function (element) {
              i++;
              each_coin_history[i] = [element.timestamp, parseFloat(element.price)];
            });
            (0,_drawGraph__WEBPACK_IMPORTED_MODULE_3__.default)(each_coin_history);
          }
        });
        $.ajax({
          method: 'GET',
          url: 'https://api.coinranking.com/v1/public/coin/' + id + '?base=PHP',
          success: function success(response) {
            var data = response.data;
            var change; // console.log(data.coin.change);

            if (data.coin.change > 0) {
              change = '+' + data.coin.change;
            } else {
              change = data.coin.change;
            }

            var details = "\n                                \n                                <div class=\"col-8 col-sm-6\" id =\"detail\"><label>PRICE:</label><br>".concat(data.base.sign, " ").concat(currency.format(parseFloat(data.coin.price)), "</div>\n                                <div class=\"col-8 col-sm-6\" id =\"detail\"><label>CHANGE:</label><br>").concat(change, "</div>\n                                \n                                ");
            $('.modal-header').html("\n                            <div class=\"modal-wrapper\" >\n                                <div class=\"modal-logo\">\n                                    <img class=\"img\" src=\"".concat(data.coin.iconUrl, "\">\n                                </div>\n                                    <span class=\"modal_coinname\"> \n                                    <h2> ").concat(data.coin.name, "</h2>\n                                    <p class=\"modal_coinsymbol\"> ").concat(data.coin.symbol, "</p>\n                                    </span>\n                            </div>\n                            \n                            "));
            $('#detail_other').html(details);
          }
        });
      });
    }
  });
}

/***/ }),

/***/ "./resources/js/drawAllGraph.js":
/*!**************************************!*\
  !*** ./resources/js/drawAllGraph.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ drawAllGraph)
/* harmony export */ });
function drawAllGraph(all_coin_history, all_coin_change) {
  var _loop = function _loop(r) {
    google.charts.load('current', {
      callback: function callback() {
        var data = new google.visualization.DataTable();
        data.addColumn('number', 'timestamp');
        data.addColumn('number', 'prices'); //PASSING CHART DATA IN LOOP

        data.addRows(all_coin_history[r]);

        if (all_coin_change[r] < 0) {
          var options = {
            backgroundColor: {
              fill: 'transparent'
            },
            legend: {
              position: 'none'
            },
            hAxis: {
              baselineColor: 'none',
              textPosition: 'none',
              gridlines: {
                color: 'transparent'
              }
            },
            vAxis: {
              baselineColor: 'none',
              textPosition: 'none',
              gridlines: {
                color: 'transparent'
              }
            },
            series: {
              0: {
                color: '#e43a19'
              }
            },
            lineWidth: 1.5,
            width: 100,
            height: 80
          };
        } else {
          var options = {
            backgroundColor: {
              fill: 'transparent'
            },
            legend: {
              position: 'none'
            },
            hAxis: {
              baselineColor: 'none',
              textPosition: 'none',
              gridlines: {
                color: 'transparent'
              }
            },
            vAxis: {
              baselineColor: 'none',
              textPosition: 'none',
              gridlines: {
                color: 'transparent'
              }
            },
            series: {
              0: {
                color: '#30e3ca'
              }
            },
            lineWidth: 1.5,
            width: 100,
            height: 80
          };
        }

        var chart = new google.visualization.LineChart(document.getElementById('chart_div' + r));
        chart.draw(data, options);

        if (all_coin_change[r] < 0) {
          $('#chart_div' + r).append('<label class="change" style="color:#e43a19">' + all_coin_change[r] + '</label>');
        } else {
          $('#chart_div' + r).append('<label class="change" style="color:#30e3ca"> +' + all_coin_change[r] + '</label>');
        }
      },
      packages: ['corechart']
    });
  };

  // console.log(all_coin_change);
  for (var r = 0; r < all_coin_history.length; r++) {
    _loop(r);
  }
}

/***/ }),

/***/ "./resources/js/drawGraph.js":
/*!***********************************!*\
  !*** ./resources/js/drawGraph.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ drawGraph)
/* harmony export */ });
// import genreModal from "./genreModals";
function drawGraph(each_coin_history) {
  // console.log(each_coin_history);
  google.charts.load('current', {
    'packages': ['line']
  });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'timestamp');
    data.addColumn('number', 'price');
    data.addRows(each_coin_history);
    var options = {
      legend: {
        position: 'none'
      },
      hAxis: {// baselineColor: 'none',
        // textPosition: 'none',
        // gridlines: {
        //     color: 'transparent',
        // }
      },
      vAxis: {// baselineColor: 'none',
        // textPosition: 'none',
        // gridlines: {
        //     color: 'transparent',
        // }
      },
      series: {
        0: {
          color: '#6930c3'
        }
      },
      lineWidth: 2,
      width: 750,
      height: 270
    };
    var chart = new google.charts.Line(document.getElementById('detail_chart'));
    chart.draw(data, google.charts.Line.convertOptions(options));
  }
}

/***/ }),

/***/ "./resources/js/getHistory.js":
/*!************************************!*\
  !*** ./resources/js/getHistory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getHistory)
/* harmony export */ });
function getHistory(coin_ID) {
  var coin_history = new Array();
  $.ajax({
    method: 'GET',
    url: 'https://api.coinranking.com/v1/public/coin/' + coin_ID + '/history/24h?base=PHP',
    success: function success(response) {
      var historydata = response.data;
      var i = -1;
      historydata.history.forEach(function (element) {
        i++;
        coin_history[i] = [element.timestamp, parseFloat(element.price)];
      });
    }
  });
  return coin_history;
}

/***/ }),

/***/ "./resources/js/showDetails.js":
/*!*************************************!*\
  !*** ./resources/js/showDetails.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showDetails)
/* harmony export */ });
function showDetails() {
  return "\n    <div class=\"modal fade\" id=\"showDetails\" tabindex=\"-1\" aria-labelledby=\"showDetails\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n        \n            <div class=\"modal-header\">\n                \n            </div>\n            <div class=\"modal-body\">\n                    \n            <div class=\"row\">\n                <div class=\"col-sm-3 d-flex justify-content-center\">\n                <h2>24h</h2>    \n                </div>\n\n                <div class=\"col-sm-9\">\n                    <div class=\"row\" id=\"detail_other\">\n\n                    </div>\n                </div>\n            </div>\n                \n            \n                <div id=\"detail_chart\"> </div>\n\n            </div>\n            <div class=\"modal-footer\">\n            \n            <button type=\"submit\" class=\"btn\" style=\"background-color:#6930c3; color:#80ffdb;\" id=\"folowCoin\" ><i class=\"fas fa-plus-circle\"></i></button>\n            </div>\n    </div>\n</div>\n";
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
        (0,_crypto__WEBPACK_IMPORTED_MODULE_0__.default)();
        break;

      default:
        break;
    }
  });
});
})();

/******/ })()
;