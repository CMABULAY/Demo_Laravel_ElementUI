(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/list.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/list.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
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
      dialog: false,
      form: {
        id: '',
        name: "",
        zone: "",
        date: "",
        time: "",
        delivery: false,
        resources: "",
        form: ""
      },
      tableData: []
    };
  },
  created: function created() {
    this.loadList();
  },
  methods: {
    loadList: function loadList() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/demo/get').then(function (result) {
        _this.tableData = result.data;
      });
    },
    handleEdit: function handleEdit(data) {
      this.dialog = true;

      for (var key in data.row) {
        console.log(data.row), this.form[key] = data.row[key];
      }

      if (data.row.delivery === "1") {
        this.form.delivery = true;
      }

      if (data.row.date) {
        this.form.date = new Date(data.row.date);
      }
    },
    handleDelete: function handleDelete(data) {
      var _this2 = this;

      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
        title: 'Are you want to delete data?',
        showCancelButton: true
      }).then(function (result) {
        if (result.isConfirmed) {
          axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/demo/delete', {
            id: data.row.id
          }).then(function (result) {
            console.log(result);

            if (result.data) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                title: 'Deleted!'
              });
            }

            _this2.loadList();
          });
        }
      });
    },
    handleSubmitUpdate: function handleSubmitUpdate() {
      var _this3 = this;

      this.dialog = false;
      console.log(this.form);
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/demo/update', this.$data.form).then(function (result) {
        console.log(result.data);

        if (result.data) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Updated!'
          });
        }

        _this3.loadList();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/list.vue?vue&type=template&id=0f727887&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/list.vue?vue&type=template&id=0f727887& ***!
  \**************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c(
        "el-table",
        { staticStyle: { width: "100%" }, attrs: { data: _vm.tableData } },
        [
          _c("el-table-column", {
            attrs: { label: "Date Added", width: "180" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c("i", { staticClass: "el-icon-time" }),
                    _vm._v(" "),
                    _c("span", { staticStyle: { "margin-left": "10px" } }, [
                      _vm._v(_vm._s(scope.row.created_at))
                    ])
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "Activity Name", width: "180" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c("span", { staticStyle: { "margin-left": "10px" } }, [
                      _vm._v(_vm._s(scope.row.name))
                    ])
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "Operations" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c(
                      "el-button",
                      {
                        attrs: { size: "mini" },
                        on: {
                          click: function($event) {
                            return _vm.handleEdit(scope)
                          }
                        }
                      },
                      [_vm._v("Edit")]
                    ),
                    _vm._v(" "),
                    _c(
                      "el-button",
                      {
                        attrs: { size: "mini", type: "danger" },
                        on: {
                          click: function($event) {
                            return _vm.handleDelete(scope)
                          }
                        }
                      },
                      [_vm._v("Delete")]
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: { title: "Edit Information", visible: _vm.dialog },
          on: {
            "update:visible": function($event) {
              _vm.dialog = $event
            }
          }
        },
        [
          _c(
            "el-form",
            { ref: "form", attrs: { model: _vm.form, "label-width": "120px" } },
            [
              _c(
                "el-form-item",
                { attrs: { label: "Activity name" } },
                [
                  _c("el-input", {
                    model: {
                      value: _vm.form.name,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "name", $$v)
                      },
                      expression: "form.name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "Activity zone" } },
                [
                  _c(
                    "el-select",
                    {
                      attrs: { placeholder: "please select your zone" },
                      model: {
                        value: _vm.form.zone,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "zone", $$v)
                        },
                        expression: "form.zone"
                      }
                    },
                    [
                      _c("el-option", {
                        attrs: { label: "Zone one", value: "shanghai" }
                      }),
                      _vm._v(" "),
                      _c("el-option", {
                        attrs: { label: "Zone two", value: "beijing" }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "Activity time" } },
                [
                  _c(
                    "el-col",
                    { attrs: { span: 11 } },
                    [
                      _c("el-date-picker", {
                        ref: "date",
                        staticStyle: { width: "100%" },
                        attrs: {
                          type: "date",
                          format: "yyyy-MM-dd",
                          placeholder: "Pick a date"
                        },
                        model: {
                          value: _vm.form.date,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "date", $$v)
                          },
                          expression: "form.date"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("el-col", { staticClass: "line", attrs: { span: 2 } }, [
                    _vm._v("-")
                  ]),
                  _vm._v(" "),
                  _c(
                    "el-col",
                    { attrs: { span: 11 } },
                    [
                      _c("el-time-picker", {
                        staticStyle: { width: "100%" },
                        attrs: { placeholder: "Pick a time" },
                        model: {
                          value: _vm.form.time,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "time", $$v)
                          },
                          expression: "form.time"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "Instant delivery" } },
                [
                  _c("el-switch", {
                    model: {
                      value: _vm.form.delivery,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "delivery", $$v)
                      },
                      expression: "form.delivery"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "Resources" } },
                [
                  _c(
                    "el-radio-group",
                    {
                      model: {
                        value: _vm.form.resources,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "resources", $$v)
                        },
                        expression: "form.resources"
                      }
                    },
                    [
                      _c("el-radio", { attrs: { label: "Sponsor" } }),
                      _vm._v(" "),
                      _c("el-radio", { attrs: { label: "Venue" } })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                { attrs: { label: "Activity form" } },
                [
                  _c("el-input", {
                    attrs: { type: "textarea" },
                    model: {
                      value: _vm.form.form,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "form", $$v)
                      },
                      expression: "form.form"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c(
                "el-button",
                {
                  on: {
                    click: function($event) {
                      _vm.dialog = false
                    }
                  }
                },
                [_vm._v("Cancel")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  attrs: { type: "primary" },
                  on: { click: _vm.handleSubmitUpdate }
                },
                [_vm._v("Update")]
              )
            ],
            1
          )
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

/***/ "./resources/js/pages/list.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/list.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_vue_vue_type_template_id_0f727887___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=0f727887& */ "./resources/js/pages/list.vue?vue&type=template&id=0f727887&");
/* harmony import */ var _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.vue?vue&type=script&lang=js& */ "./resources/js/pages/list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_vue_vue_type_template_id_0f727887___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_vue_vue_type_template_id_0f727887___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/list.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/pages/list.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/list.vue?vue&type=template&id=0f727887&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/list.vue?vue&type=template&id=0f727887& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_0f727887___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./list.vue?vue&type=template&id=0f727887& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/list.vue?vue&type=template&id=0f727887&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_0f727887___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_vue_vue_type_template_id_0f727887___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);