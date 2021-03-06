/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/AuthenticationModals.js":
/*!**********************************************!*\
  !*** ./resources/js/AuthenticationModals.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ authModal)
/* harmony export */ });
function authModal() {
  return "\n    \n<!-------------------------------------- LOGIN-MODAL --------------------------- -->\n<div id=\"loginModal\" class=\"modal fade\">\n\t<div class=\"modal-dialog modal-login\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\t\t\t\t\n\t\t\t\t<h4 class=\"modal-title\">LOGIN</h4>\n\t\t\t\t<button type=\"button\" class=\"btn close\" data-bs-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<form id=\"loginForm\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<i class=\"fa fa-user\"></i>\n\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"lemail\" name=\"email\" placeholder=\"Email\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<i class=\"fa fa-lock\"></i>\n\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"lpassword\" name=\"password\" autocomplete=\"on\" placeholder=\"Password\">\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"submit\" class=\"btn btn-lg\" id=\"loginBtn\" value=\"Login\">\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>     \n    \n<!-------------------------------------- REGISTER-MODAL ----------------------------->\n<div id=\"registerModal\" class=\"modal fade\">\n\t<div class=\"modal-dialog modal-login\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\t\t\t\t\n\t\t\t\t<h4 class=\"modal-title\">REGISTER</h4>\n\t\t\t\t<button type=\"button\" class=\"btn close\" data-bs-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<form id=\"registerForm\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<i class=\"fa fa-user\"></i>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Name\" >\n                    </div>\n                    <div class=\"form-group\">\n\t\t\t\t\t\t<i class=\"fa fa-user\"></i>\n\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Email\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<i class=\"fa fa-lock\"></i>\n\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" autocomplete=\"on\" placeholder=\"Password\">\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"submit\" class=\"btn btn-lg\" id=\"registerBtn\" value=\"Register\">\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t</div>\n</div>     \n\n\n\n    ";
}

/***/ }),

/***/ "./resources/js/bookmark.js":
/*!**********************************!*\
  !*** ./resources/js/bookmark.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ bookmark)
/* harmony export */ });
function bookmark(response) {
  // console.log('bookmarks');
  var newsContent = "\n    <div id=\"card-append\">\n        \n    </div>\n    ";
  $('#content-account').html(newsContent);
  var i = 0;
  var all_news_id = new Array();
  response.forEach(function (data) {
    all_news_id[i] = data.news;
    i++;
  });
  $.ajax({
    type: 'GET',
    url: 'https://min-api.cryptocompare.com/data/v2/news' + '/?api_key=d3fb5e4f2e639187374967645a9ffdd24789d3d1884df5965fc36d5688046429',
    success: function success(response) {
      var news = response.Data;

      var _loop = function _loop(r) {
        news.forEach(function (element) {
          if (all_news_id[r] == element.id) {
            var string = element.body;
            var length = 150;
            var bodytrimmed = string.substring(0, length);
            $('#card-append').append("\n                            <div class=\"card col\"  style=\"\">\n                                <img src=\"".concat(element.imageurl, "\" class=\"card-img-top\" alt=\"...\"> \n                                <div class=\"card-body\">\n                                    <h5 class=\"card-title\"><a href=\"#\" target=\"_blank\">").concat(element.title, "</a></h5>\n                                    <p class=\"card-text\">").concat(bodytrimmed, "</p>\n                                    <input type=\"hidden\" id=\"tags\" name=\"tags\" id=\"").concat(element.tags, "\">\n                                </div>\n                                <div class=\"card-footer\">\n                                <a href=\"").concat(element.url, "\" target=\"_blank\"><button type=\"button\" class=\"btn\" style=\"background-color:#6930c3; color:#80ffdb\">READ MORE</button></a>\n                                <span id=\"bookmark\"><i class=\"fas fa-trash-alt del-bookmarknews\" id=\"bookmarknews\" data-id=\"").concat(element.id, "\" tabindex=\"0\"></i></span>\n                                </div>\n                            </div>\n                            "));
          }
        });
      };

      for (var r = -1; r < all_news_id.length; r++) {
        _loop(r);
      }
    },
    error: function error(_error) {
      console.log('error');
    }
  });
}

/***/ }),

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
  // console.log("This is working...");
  var tableContent = "\n            <div class=\"table-responsive\" id=\"draggable\" class=\"table-responsive ui-widget-content\">\n            <table class=\"table\" id=\"tableContent\">\n            <thead class=\"\">\n            <tr>\n            \n            \n            <th>  </th>\n            <th>CRYPTOCURRENCY</th>\n            <th>PRICE</th>\n            <th>MARKET CAP</th>\n            <th>24H</th>\n            \n            </tr>\n            </thead>\n            <tbody id=\"cryptoCoin\">\n            </tbody>\n            </table></div>\n            ";
  $('#contentpage').html(tableContent);
  $('#contentpage').append(_showDetails__WEBPACK_IMPORTED_MODULE_2__.default);
  $.ajax({
    method: 'GET',
    url: 'https://api.coinranking.com/v1/public/coins?base=PHP&limit=6',
    success: function success(response) {
      var data = response.data;
      var all_coin_history = new Array();
      var all_coin_change = new Array();
      var coin_change;
      var i = 0;
      var x = -1;
      var r = 0; // console.log(data);

      var currency = new Intl.NumberFormat();
      data.coins.forEach(function (element) {
        var coin_history = (0,_getHistory__WEBPACK_IMPORTED_MODULE_0__.default)(element.id);
        all_coin_history[i] = coin_history;
        i++;
        $('#cryptoCoin').append("\n                    <tr class=\"uuid\" data-id=\"".concat(element.id, "\" data-bs-toggle=\"modal\" data-bs-target=\"#showDetails\">\n                    <td> ").concat(element.rank, "</td>\n                    <td>\n                        <div \n                        class=\"profilename_wrapper\" >\n                    <div class=\"profile_logo\">\n                        <img class=\"img\" src=\"").concat(element.iconUrl, "\">\n                    </div>\n                            <span class=\"profile_name\"> \n                            <a class=\"currencylink\" href=\"#\"> ").concat(element.name, "</a>\n                            <p class=\"profile_symbol\"> ").concat(element.symbol, "</p>\n                            </span>\n                        </div>\n                    </td>\n                    <td>").concat(data.base.sign, " ").concat(currency.format(element.price), "</td>\n                    <td>").concat(data.base.sign, " ").concat(currency.format(element.marketCap), "</td>\n                \n                    <td id=\"chart_div").concat(r, "\"></td>\n                    \n                    \n                    </tr>\n                    "));
        x++;
        all_coin_change[x] = element.change;
        r++;
        (0,_drawAllGraph__WEBPACK_IMPORTED_MODULE_1__.default)(all_coin_history, all_coin_change);
      });
      $('#showDetails').on('show.bs.modal', function (e) {
        var each_coin_history = new Array();
        var each_news = new Array();
        var id = $(e.relatedTarget).attr('data-id');
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
            var change;

            if (data.coin.change > 0) {
              change = '+' + data.coin.change;
            } else {
              change = data.coin.change;
            }

            var details = "\n                            \n                            <div class=\"col-8 col-sm-6\" id =\"detail\"><label>PRICE:</label><br>".concat(data.base.sign, " ").concat(currency.format(parseFloat(data.coin.price)), "</div>\n                            <div class=\"col-8 col-sm-6\" id =\"detail\"><label>CHANGE:</label><br>").concat(change, "</div>\n                            \n                            ");
            $('.modal-header').html("\n                        <div class=\"modal-wrapper\" >\n                            <div class=\"modal-logo\">\n                                <img class=\"img\" src=\"".concat(data.coin.iconUrl, "\">\n                            </div>\n                                <span class=\"modal_coinname\"> \n                                <h2> ").concat(data.coin.name, "</h2>\n                                <p class=\"modal_coinsymbol\"> ").concat(data.coin.symbol, "</p>\n                                </span>\n                        </div>\n                        \n                        "));
            $('#detail_other').html(details);
          }
        });
        $('.modal-footer').html("\n                    <button type=\"submit\" class=\"btn followCoin\" style=\"background-color:#6930c3; color:#80ffdb;\" data-id=\"".concat(id, "\"><i class=\"fas fa-plus-circle\"></i></button>\n                    "));
        $('.followCoin').on('click', function (e) {
          var id = $(e.currentTarget).attr('data-id');
          var cryptoid = $(e.currentTarget).attr('data-id'); // console.log(cryptoid);

          var userid = localStorage.getItem('user_id');
          var datainput = "\n                        <form action=\"\" id=\"followCrypto\">\n                        <input type=\"text\" id=\"cryptoid\" name=\"cryptoid\" value=\"".concat(cryptoid, "\">\n                        <input type=\"text\" id=\"user_id\" name=\"user_id\" value=\"").concat(userid, "\">\n                        </form>\n                        ");
          var data = $(datainput).serialize(); // console.log(data);

          $.ajax({
            type: "post",
            url: "/api/Crypto",
            data: data,
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            },
            dataType: "json",
            success: function success(data) {
              e.preventDefault(); // console.log(data);
            },
            error: function error(_error) {
              // console.log('error');
              alert('Login first to follow');
            }
          });
        });
      });
    }
  });
}

/***/ }),

/***/ "./resources/js/currency.js":
/*!**********************************!*\
  !*** ./resources/js/currency.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ currency)
/* harmony export */ });
/* harmony import */ var _getHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getHistory */ "./resources/js/getHistory.js");
/* harmony import */ var _drawAllGraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawAllGraph */ "./resources/js/drawAllGraph.js");
/* harmony import */ var _showDetailsAcc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showDetailsAcc */ "./resources/js/showDetailsAcc.js");
/* harmony import */ var _drawGraph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drawGraph */ "./resources/js/drawGraph.js");




function currency(response) {
  var tableContent = "\n        <div class=\"table-responsive\" id=\"draggable\" class=\"table-responsive ui-widget-content\">\n        <table class=\"table\" id=\"tableContent\">\n        <thead class=\"\">\n        <tr>\n        \n        \n        <th>  </th>\n        <th>CRYPTOCURRENCY</th>\n        <th>PRICE</th>\n        <th>MARKET CAP</th>\n        <th>24H</th>\n        <th></th>\n        \n        </tr>\n        </thead>\n        <tbody id=\"cryptoCoinAcc\">\n        </tbody>\n        </table></div>\n        ";
  $('#content-account').html(tableContent);
  $('#content-account').append(_showDetailsAcc__WEBPACK_IMPORTED_MODULE_2__.default);
  var currency = new Intl.NumberFormat();
  var all_coin_history = new Array();
  var all_coin_change = new Array();
  var r = 0;
  var i = 0;
  var x = -1;
  response.forEach(function (element) {
    $.ajax({
      method: 'GET',
      url: 'https://api.coinranking.com/v1/public/coin/' + element.cryptoid + "?base=PHP",
      success: function success(response) {
        // console.log(response.data.coin);
        var coins = response.data; // console.log(coins);

        var coin_history = (0,_getHistory__WEBPACK_IMPORTED_MODULE_0__.default)(element.id);
        all_coin_history[i] = coin_history;
        i++; // coins.forEach(element => {

        $('#cryptoCoinAcc').append("\n                    <tr class=\"uuidacc\" data-id=\"".concat(coins.coin.id, "\"  data-bs-toggle=\"modal\" data-bs-target=\"#showDetailsAcc\">\n                    <td> ").concat(coins.coin.rank, "</td>\n                    <td>\n                        <div \n                        class=\"profilename_wrapper\" >\n                    <div class=\"profile_logo\">\n                        <img class=\"img\" src=\"").concat(coins.coin.iconUrl, "\">\n                    </div>\n                            <span class=\"profile_name\"> \n                            <a class=\"currencylink\" href=\"#\"> ").concat(coins.coin.name, "</a>\n                            <p class=\"profile_symbol\"> ").concat(coins.coin.symbol, "</p>\n                            </span>\n                        </div>\n                    </td>\n                    <td>").concat(coins.base.sign, " ").concat(currency.format(coins.coin.price), "</td>\n                    <td>").concat(coins.base.sign, " ").concat(currency.format(coins.coin.marketCap), "</td>\n                    <td id=\"chart_div").concat(r, "\"></td>\n                    <td> <span id=\"bookmark\"><i class=\"fas fa-trash-alt del-bookmarknews\" id=\"bookmarknews\" data-id=\"").concat(element.id, "\" tabindex=\"0\"></i></span></td>\n                    </tr>\n                    "));
        x++;
        all_coin_change[x] = coins.coin.change;
        r++;
        (0,_drawAllGraph__WEBPACK_IMPORTED_MODULE_1__.default)(all_coin_history, all_coin_change); // });
      }
    });
  });
  $('#showDetailsAcc').on('show.bs.modal', function (e) {
    var each_coin_history = new Array();
    var id = $(e.relatedTarget).attr('data-id');
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
        var change;
        var symbol_id = data.coin.symbol;

        if (data.coin.change > 0) {
          change = '+' + data.coin.change;
        } else {
          change = data.coin.change;
        }

        var details = "\n                    \n                    <div class=\"col-8 col-sm-6\" id =\"detail\"><label>PRICE:</label><br>".concat(data.base.sign, " ").concat(currency.format(parseFloat(data.coin.price)), "</div>\n                    <div class=\"col-8 col-sm-6\" id =\"detail\"><label>CHANGE:</label><br>").concat(change, "</div>\n                    \n                    ");
        $('.modal-header').html("\n                <div class=\"modal-wrapper\" >\n                    <div class=\"modal-logo\">\n                        <img class=\"img\" src=\"".concat(data.coin.iconUrl, "\">\n                    </div>\n                        <span class=\"modal_coinname\"> \n                        <h2> ").concat(data.coin.name, "</h2>\n                        <p class=\"modal_coinsymbol\"> ").concat(data.coin.symbol, "</p>\n                        </span>\n                </div>\n                \n                "));
        $('#detail_other').html(details);
        $.ajax({
          type: 'GET',
          url: 'https://min-api.cryptocompare.com/data/v2/news' + '/?api_key=d3fb5e4f2e639187374967645a9ffdd24789d3d1884df5965fc36d5688046429',
          success: function success(response) {
            console.log(response.Data);
            var result = response.Data;
            console.log(result);
            result.forEach(function (element) {
              if (element.tags = symbol_id) {
                $('#card-append-acc').append("\n                        <div class=\"card col\"  style=\"width: 750px;\">\n                            <img src=\"".concat(element.imageurl, "\" class=\"card-img-top\" alt=\"...\" style=\"width: 750px;\"> \n                            <div class=\"card-body\">\n                                <h5 class=\"card-title\"><a href=\"#\" target=\"_blank\">").concat(element.title, "</a></h5>\n                                <p class=\"card-text\">").concat(element.body, "</p>\n                                <input type=\"hidden\" id=\"tags\" name=\"tags\" id=\"").concat(element.tags, "\" >\n                            </div>\n                            <div class=\"card-footer\">\n                            <a href=\"").concat(element.url, "\" target=\"_blank\"><button type=\"button\" class=\"btn\" style=\"background-color:#6930c3; color:#80ffdb\">READ MORE</button></a>\n                            \n                            </div>\n                        </div>\n                        "));
              }
            });
          }
        });
      }
    });
  });
}

/***/ }),

/***/ "./resources/js/database.js":
/*!**********************************!*\
  !*** ./resources/js/database.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ database)
/* harmony export */ });
function database() {
  var page = "\n    <div class=\"d-flex justify-content-center database-image\">\n    <img src=\"../img/database.png\" class=\"card-img-top\" alt=\"...\" style=\"width: 917px; height:336px;margin-top: 15%;\"> \n    </div>\n    \n    ";
  $('#contentpage').html(page);
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

/***/ "./resources/js/home.js":
/*!******************************!*\
  !*** ./resources/js/home.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
function home() {
  var page = "\n    \n<div class=\"container-name\">\n<div class=\"row\">\n\n<div class=\"col-sm\"  style=\"width: 720px;\">\n    <h1>CryptoNews</h1>\n    <p>AYACOCHO, LESLIE JAYNE | DOLLENTE, MICHAEL JOHN<br>\xA92021</p>\n</div>\n\n</div>\n</div>\n    ";
  $('#contentpage').html(page);
}

/***/ }),

/***/ "./resources/js/myAccount.js":
/*!***********************************!*\
  !*** ./resources/js/myAccount.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ myAccount)
/* harmony export */ });
/* harmony import */ var _bookmark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookmark */ "./resources/js/bookmark.js");
/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency */ "./resources/js/currency.js");


function myAccount() {
  var pageContent = "\n    <div id= myaccNav>\n        <ul class=\"nav justify-content-center myaccNav\">\n        <li class=\"nav-item\">\n        <a class=\"nav-link acclink\" data-id=\"crypto\" href=\"#\">Cryptocurrency</a>\n        </li>\n        \n        <li class=\"nav-item\">\n        <a class=\"nav-link acclink\" data-id=\"bookmarks\" href=\"#\">Bookmarks</a>\n        </li>\n        </ul>\n    </div>\n    \n\n    \n    <div id=\"content-account\">\n    </div>\n    ";
  $('#contentpage').html(pageContent);
  $('.acclink').on('click', function (e) {
    var id = localStorage.getItem('user_id');
    var link = e.currentTarget.dataset.id; // console.log(link);

    $.ajax({
      type: "GET",
      url: "/api/" + link + "/" + id,
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      },
      dataType: 'json',
      success: function success(response) {
        switch (link) {
          case "crypto":
            (0,_currency__WEBPACK_IMPORTED_MODULE_1__.default)(response);
            break;

          case "bookmarks":
            (0,_bookmark__WEBPACK_IMPORTED_MODULE_0__.default)(response);
            break;

          default:
            break;
        }
      },
      error: function error(_error) {
        console.log('error');
      }
    });
  });
}

/***/ }),

/***/ "./resources/js/news.js":
/*!******************************!*\
  !*** ./resources/js/news.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ news)
/* harmony export */ });
function news() {
  // console.log("This is working.");
  var newsContent = "\n    <div class=\"\" id=\"card-append\">\n        \n    </div>\n    ";
  $('#contentpage').html(newsContent);
  $.ajax({
    type: 'GET',
    url: 'https://min-api.cryptocompare.com/data/v2/news' + '/?api_key=d3fb5e4f2e639187374967645a9ffdd24789d3d1884df5965fc36d5688046429',
    success: function success(response) {
      var data = response.Data;
      data.forEach(function (element) {
        console.log(data);
        var string = element.body;
        var length = 150;
        var bodytrimmed = string.substring(0, length);
        $('#card-append').append("\n                <div class=\"card col\"  style=\"\">\n                    <img src=\"".concat(element.imageurl, "\" class=\"card-img-top\" alt=\"...\"> \n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\"><a href=\"#\" target=\"_blank\">").concat(element.title, "</a></h5>\n                        <p class=\"card-text\">").concat(bodytrimmed, "</p>\n                        <input type=\"hidden\" id=\"tags\" name=\"tags\" id=\"").concat(element.tags, "\">\n                    </div>\n                    <div class=\"card-footer\">\n                    <a href=\"").concat(element.url, "\" target=\"_blank\"><button type=\"button\" class=\"btn\" style=\"background-color:#6930c3; color:#80ffdb\">READ MORE</button></a>\n                    <span id=\"bookmark\"><i class=\"fas fa-bookmark bookmarknews\" id=\"bookmarknews\" data-id=\"").concat(element.id, "\" tabindex=\"0\"></i></span>\n                    </div>\n                </div>\n                "));
      });
      $('.bookmarknews').on('click', function (e) {
        var newsid = $(e.currentTarget).attr('data-id'); // console.log(newsid);

        var userid = localStorage.getItem('user_id');
        var datainput = "\n                    <form action=\"\" id=\"addBookmark\">\n                    <input type=\"text\" id=\"news\" name=\"news\" value=\"".concat(newsid, "\">\n                    <input type=\"text\" id=\"user_id\" name=\"user_id\" value=\"").concat(userid, "\">\n                    </form>\n                    ");
        var data = $(datainput).serialize(); // console.log(data);

        $.ajax({
          type: "post",
          url: "/api/Bookmark",
          data: data,
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
          },
          dataType: "json",
          success: function success(data) {
            e.preventDefault(); // console.log(data);
          },
          error: function error(_error) {
            alert('Login first to bookmark news');
          }
        });
      });
    }
  });
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
  return "\n    <div class=\"modal fade\" id=\"showDetails\" tabindex=\"-1\" aria-labelledby=\"showDetails\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n        \n            <div class=\"modal-header\">\n                \n            </div>\n            <div class=\"modal-body\">\n                    \n            <div class=\"row\">\n                <div class=\"col-sm-3 d-flex justify-content-center\">\n                <h2>24h</h2>    \n                </div>\n\n                <div class=\"col-sm-9\">\n                    <div class=\"row\" id=\"detail_other\">\n\n                    </div>\n                </div>\n            </div>\n                \n            \n                <div id=\"detail_chart\"> </div>\n\n            </div>\n            <div class=\"modal-footer\">\n            \n            \n            </div>\n    </div>\n</div>\n";
}

/***/ }),

/***/ "./resources/js/showDetailsAcc.js":
/*!****************************************!*\
  !*** ./resources/js/showDetailsAcc.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showDetailsAcc)
/* harmony export */ });
function showDetailsAcc() {
  return "\n    <div class=\"modal fade\" id=\"showDetailsAcc\" tabindex=\"-1\" aria-labelledby=\"showDetailsAcc\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n        \n            <div class=\"modal-header\">\n                \n            </div>\n            <div class=\"modal-body\">\n                    \n            <div class=\"row\">\n                <div class=\"col-sm-3 d-flex justify-content-center\">\n                <h2>24h</h2>    \n                </div>\n\n                <div class=\"col-sm-9\">\n                    <div class=\"row\" id=\"detail_other\">\n\n                    </div>\n                </div>\n            </div>\n                \n            \n                <div id=\"detail_chart\"> </div>\n                <div id=\"card-append-acc\"> </div>\n\n\n            </div>\n            <div class=\"modal-footer\">\n            \n            \n            </div>\n    </div>\n</div>\n";
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
/* harmony import */ var _AuthenticationModals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthenticationModals */ "./resources/js/AuthenticationModals.js");
/* harmony import */ var _news__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news */ "./resources/js/news.js");
/* harmony import */ var _myAccount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myAccount */ "./resources/js/myAccount.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home */ "./resources/js/home.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./database */ "./resources/js/database.js");






$(document).ready(function () {
  var x = document.getElementById("login-btn-nav");
  var y = document.getElementById("register-btn-nav");
  var z = document.getElementById("myaccount-nav");
  var a = document.getElementById("logout-nav");

  if (localStorage.getItem('access_token')) {
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";
    a.style.display = "block";
  } else {
    x.style.display = "block";
    y.style.display = "block";
    z.style.display = "none";
    a.style.display = "none";
  }

  $('.link').on('click', function (e) {
    var link = e.currentTarget.dataset.id; // console.log(link)

    switch (link) {
      case "crypto":
        (0,_crypto__WEBPACK_IMPORTED_MODULE_0__.default)();
        break;

      case "news":
        (0,_news__WEBPACK_IMPORTED_MODULE_2__.default)();
        break;

      case "myacc":
        (0,_myAccount__WEBPACK_IMPORTED_MODULE_3__.default)();
        break;

      case "home":
        (0,_home__WEBPACK_IMPORTED_MODULE_4__.default)();
        break;

      case "database":
        (0,_database__WEBPACK_IMPORTED_MODULE_5__.default)();
        break;

      case "logout":
        localStorage.removeItem("access_token");
        localStorage.removeItem("user_id");
        location.reload();
        break;

      default:
        break;
    }
  });
  $('#contentpage').append(_AuthenticationModals__WEBPACK_IMPORTED_MODULE_1__.default); // REGISTRATION

  $('#registerForm').validate({
    rules: {
      name: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      password: {
        required: true
      }
    },
    messages: {
      name: {
        required: 'required'
      },
      email: {
        required: 'required'
      },
      password: {
        required: 'required'
      }
    },
    errorPlacement: function errorPlacement(error, element) {
      error.insertAfter(element);
    },
    submitHandler: function submitHandler(form, e) {
      // $('#registerBtn').on('click', (e) => {
      var data = $('#registerForm').serialize();
      e.preventDefault();
      $.ajax({
        type: "post",
        url: "/api/auth/register",
        data: data,
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        dataType: "json",
        success: function success(data) {
          // console.log(data);
          $('#registerModal').each(function () {
            $(this).modal('hide');
          });
        },
        error: function error(_error) {
          console.log('error');
        }
      });
    }
  }); //LOGIN

  $('#loginForm').validate({
    rules: {
      lemail: {
        required: true,
        email: true
      },
      lpassword: {
        required: true
      }
    },
    messages: {
      lemail: {
        required: 'required',
        email: 'Enter Valid Email'
      },
      lpassword: {
        required: 'required'
      }
    },
    errorPlacement: function errorPlacement(error, element) {
      error.insertAfter(element);
    },
    submitHandler: function submitHandler(form, e) {
      // $('#loginBtn').on('click', (e) => {
      var data = $('#loginForm').serialize(); // console.log(data);

      e.preventDefault();
      $.ajax({
        type: "post",
        url: "/api/auth/login",
        data: data,
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        dataType: "json",
        success: function success(data) {
          console.log(data);
          window.localStorage.setItem('access_token', data.access_token);
          window.localStorage.setItem('user_id', data.user_id[0].id);
          $('#loginModal').modal('hide');
          location.reload();
        },
        error: function error(_error2) {
          console.log(_error2);
          alert('Failed to login. Please Try again');
        }
      });
    }
  });
});
})();

/******/ })()
;