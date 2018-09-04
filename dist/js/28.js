webpackJsonp([28],{

/***/ 1281:
/***/ (function(module, exports) {

module.exports = "/images/ekiti-logo.png?d3cfaa568afb3c25c7723c9a1610cf11";

/***/ }),

/***/ 1612:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1613);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(32)("39067e58", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6a28b65a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./forgotpassword.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6a28b65a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./forgotpassword.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1613:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(false);
// imports


// module
exports.push([module.i, "\n.login-content[data-v-6a28b65a] {\n        margin: 7% auto;\n        -webkit-box-shadow: 0 0 20px #ccc;\n                box-shadow: 0 0 20px #ccc;\n        border-radius: 7px;\n        background-color: rgba(255, 255, 255, 1);\n        width: 288px !important;\n        padding: 20px;\n        font-size: 12px;\n}\n.user-message[data-v-6a28b65a] {\n    padding: 15px 0;\n    font-size: 14px;\n    color: #777;\n}\n.img_backgrond[data-v-6a28b65a]{\n    width:100%;\n}\n.logo[data-v-6a28b65a] {\n    min-height:60px;\n}\nlabel[data-v-6a28b65a]{\n    font-size: 14px !important;\n}\n[data-v-6a28b65a]::-webkit-input-placeholder {\n    font-size:14px;\n}\n", ""]);

// exports


/***/ }),

/***/ 1614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_form__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_form__);
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



__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_form___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
    name: "forgetpassword",
    data: function data() {
        return {
            formstate: {},
            model: {
                email: ""
            }
        };
    },

    methods: {
        onSubmit: function onSubmit() {
            if (this.formstate.$invalid) {
                return;
            } else {
                this.$router.push("/reset_password");
            }
        }
    },
    mounted: function mounted() {},
    destroyed: function destroyed() {}
});

/***/ }),

/***/ 1615:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid img_backgrond" }, [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "login-content mt-5" },
        [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "vue-form",
            {
              attrs: { state: _vm.formstate },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  _vm.onSubmit($event)
                }
              }
            },
            [
              _c("div", { staticClass: "col-lg-12" }, [
                _c("p", { staticClass: "user-message " }, [
                  _vm._v(
                    " Please enter the email you are registered with. An email message will be sent to the email address with further instructions."
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c(
                      "validate",
                      { attrs: { tag: "div" } },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.model.email,
                              expression: "model.email"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            name: "email",
                            type: "email",
                            required: "",
                            placeholder: "E-mail"
                          },
                          domProps: { value: _vm.model.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.model, "email", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "field-messages",
                          {
                            staticClass: "text-danger",
                            attrs: {
                              name: "email",
                              show: "$invalid && $submitted"
                            }
                          },
                          [
                            _c(
                              "div",
                              { attrs: { slot: "required" }, slot: "required" },
                              [_vm._v("Email is a required field")]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { attrs: { slot: "email" }, slot: "email" },
                              [_vm._v("Email is not valid")]
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 mt-4" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("input", {
                    staticClass: "btn btn-primary btn-block",
                    attrs: { type: "submit", value: "Send Confirmation Mail" }
                  })
                ])
              ])
            ]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-12 mt-4" }, [
        _c("h2", { staticClass: "text-center logo" }, [
          _c("img", {
            attrs: {
              width: "240",
              height: "auto",
              src: __webpack_require__(1281),
              alt: "Logo"
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-12 mt-4" }, [
        _c("h3", { staticClass: "page-name text-center" }, [
          _vm._v("Forgot Password")
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6a28b65a", module.exports)
  }
}

/***/ }),

/***/ 973:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1612)
}
var normalizeComponent = __webpack_require__(48)
/* script */
var __vue_script__ = __webpack_require__(1614)
/* template */
var __vue_template__ = __webpack_require__(1615)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6a28b65a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/pages/auth/forgotpassword.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6a28b65a", Component.options)
  } else {
    hotAPI.reload("data-v-6a28b65a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});