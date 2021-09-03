(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/screen2.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/screen2.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      table: {
        header: [{
          text: "Level",
          value: "level"
        }, {
          text: "Name",
          value: "name"
        }, {
          text: "Actions",
          value: "id"
        }, {
          text: "temp",
          "class": " d-none",
          value: "tempid"
        }],
        dataitems: [],
        sorting: true
      }
    };
  },
  created: function created() {
    this.get();
  },
  methods: {
    get: function get() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("api/get").then(function (result) {
                  _this.table.dataitems = result.data;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    store: function store() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("api/store").then(function (result) {
                  _this2.get();

                  alert(result.data);
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    actionsOnclick: function actionsOnclick(btn, data) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.t0 = btn;
                _context3.next = _context3.t0 === 1 ? 3 : _context3.t0 === 2 ? 7 : 11;
                break;

              case 3:
                _context3.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("api/actions", data).then(function (result) {
                  _this3.get();
                });

              case 5:
                _this3.sorting = true;
                return _context3.abrupt("break", 12);

              case 7:
                _context3.next = 9;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("api/actions", data).then(function (result) {
                  _this3.get();
                });

              case 9:
                _this3.sorting = false;
                return _context3.abrupt("break", 12);

              case 11:
                return _context3.abrupt("break", 12);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    actionsOnclick1: function actionsOnclick1(btn, data) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var dt0, dt1;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.t0 = btn;
                _context4.next = _context4.t0 === 1 ? 3 : _context4.t0 === 2 ? 9 : 15;
                break;

              case 3:
                dt0 = _this4.table.dataitems[_this4.table.dataitems.indexOf(data)];
                dt1 = _this4.table.dataitems[_this4.table.dataitems.indexOf(data) + 1];
                _context4.next = 7;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("api/actions1", {
                  'type': 'up',
                  'current': dt0,
                  'old': dt1
                }).then(function (result) {
                  _this4.get();
                });

              case 7:
                _this4.sorting = true;
                return _context4.abrupt("break", 16);

              case 9:
                dt0 = _this4.table.dataitems[_this4.table.dataitems.indexOf(data)];
                dt1 = _this4.table.dataitems[_this4.table.dataitems.indexOf(data) - 1];
                _context4.next = 13;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("api/actions1", {
                  'type': 'down',
                  'current': dt0,
                  'old': dt1
                }).then(function (result) {
                  _this4.get();
                });

              case 13:
                _this4.sorting = false;
                return _context4.abrupt("break", 16);

              case 15:
                return _context4.abrupt("break", 16);

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/screen2.vue?vue&type=template&id=d79aaa26&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/screen2.vue?vue&type=template&id=d79aaa26& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { staticClass: "p-4" },
    [
      _c("span", [_vm._v("Sample table")]),
      _vm._v(" "),
      _c(
        "v-card-actions",
        [
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "mx-1",
              attrs: { small: "", color: "#0000", to: "/screen1" }
            },
            [_vm._v("\n      back to screen1\n    ")]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "mx-1",
              attrs: { small: "", dark: "", color: "#cc0022" },
              on: { click: _vm.store }
            },
            [_vm._v("\n      import sample\n    ")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c("v-data-table", {
            staticClass: "elevation-2",
            attrs: {
              headers: _vm.table.header,
              items: _vm.table.dataitems,
              "hide-default-footer": "",
              "sort-by": ["created_at", true],
              "sort-desc": [_vm.table.sorting, false],
              dense: "",
              "items-per-page": 5
            },
            scopedSlots: _vm._u(
              [
                {
                  key: "item.id",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _c(
                        "v-card-actions",
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { "x-small": "", text: "" },
                              on: {
                                click: function($event) {
                                  return _vm.actionsOnclick(1, item)
                                }
                              }
                            },
                            [_vm._v(" TOP ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { "x-small": "", text: "" },
                              on: {
                                click: function($event) {
                                  return _vm.actionsOnclick1(1, item)
                                }
                              }
                            },
                            [_vm._v(" UP ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { "x-small": "", text: "" },
                              on: {
                                click: function($event) {
                                  return _vm.actionsOnclick1(2, item)
                                }
                              }
                            },
                            [_vm._v(" DOWN ")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { "x-small": "", text: "" },
                              on: {
                                click: function($event) {
                                  return _vm.actionsOnclick(2, item)
                                }
                              }
                            },
                            [_vm._v("\n            BOTTOM\n          ")]
                          )
                        ],
                        1
                      )
                    ]
                  }
                },
                {
                  key: "item.tempid",
                  fn: function(ref) {
                    var item = ref.item
                    return [
                      _vm._v("\n        " + _vm._s(item.tempid) + "\n      ")
                    ]
                  }
                }
              ],
              null,
              true
            )
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/screen2.vue":
/*!****************************************!*\
  !*** ./resources/js/pages/screen2.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _screen2_vue_vue_type_template_id_d79aaa26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen2.vue?vue&type=template&id=d79aaa26& */ "./resources/js/pages/screen2.vue?vue&type=template&id=d79aaa26&");
/* harmony import */ var _screen2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screen2.vue?vue&type=script&lang=js& */ "./resources/js/pages/screen2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _screen2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _screen2_vue_vue_type_template_id_d79aaa26___WEBPACK_IMPORTED_MODULE_0__["render"],
  _screen2_vue_vue_type_template_id_d79aaa26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/screen2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/screen2.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/pages/screen2.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_screen2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./screen2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/screen2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_screen2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/screen2.vue?vue&type=template&id=d79aaa26&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/screen2.vue?vue&type=template&id=d79aaa26& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_screen2_vue_vue_type_template_id_d79aaa26___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./screen2.vue?vue&type=template&id=d79aaa26& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/screen2.vue?vue&type=template&id=d79aaa26&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_screen2_vue_vue_type_template_id_d79aaa26___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_screen2_vue_vue_type_template_id_d79aaa26___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);