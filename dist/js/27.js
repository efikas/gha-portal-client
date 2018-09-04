webpackJsonp([27],{

/***/ 1282:
/***/ (function(module, exports) {

module.exports = "/images/Login-03-01.png?a49e5729cfa038ae5bdb04a917eeed17";

/***/ }),

/***/ 1283:
/***/ (function(module, exports) {

module.exports = "/images/logo_black.png?ecb90e766da2db04bffa5588aa3486ec";

/***/ }),

/***/ 1608:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1609);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(32)("1f8f6352", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f6bf2bf\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./register.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f6bf2bf\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./register.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1609:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(260);
exports = module.exports = __webpack_require__(28)(false);
// imports


// module
exports.push([module.i, "\n.login-content[data-v-2f6bf2bf] {\n    margin-top: 6%;\n    margin-bottom: 6%;\n    padding-bottom: 20px;\n    -webkit-box-shadow: 0 0 30px #ccc;\n            box-shadow: 0 0 30px #ccc;\n    background-size: 100% 100%;\n    border-radius: 7px;\n}\n.img_backgrond[data-v-2f6bf2bf]{\n    background-image: url(" + escape(__webpack_require__(1282)) + ");\n    background-size: cover;\n    padding: 75px 15px;\n}\n.text_gray[data-v-2f6bf2bf]{\n        color:#625e5e;\n}\nlabel[data-v-2f6bf2bf]{\n    font-size: 14px !important;\n}\n[data-v-2f6bf2bf]::-webkit-input-placeholder {\n   font-size: 14px;\n}\n", ""]);

// exports


/***/ }),

/***/ 1610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
    name: "register",
    data: function data() {
        return {
            formstate: {},
            model: {
                username: "",
                email: "",
                password: '',
                repeatPassword: '',
                terms: false
            }
        };
    },

    methods: {
        onSubmit: function onSubmit() {
            if (this.formstate.$invalid) {
                return;
            } else {
                this.$router.push("/");
            }
        }
    }
});

/***/ }),

/***/ 1611:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid img_backgrond" }, [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        {
          staticClass:
            "col-lg-4 offset-lg-4 col-sm-6 offset-sm-3 col-xs-10 offset-xs-1 login-content mt-5"
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "form",
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
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-12 mt-3" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c(
                        "validate",
                        { attrs: { tag: "div" } },
                        [
                          _c("label", { attrs: { for: "user_name" } }, [
                            _vm._v(" User Name")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.model.username,
                                expression: "model.username"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              id: "user_name",
                              name: "username",
                              type: "text",
                              required: "",
                              autofocus: "",
                              placeholder: "User Name"
                            },
                            domProps: { value: _vm.model.username },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.model,
                                  "username",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "field-messages",
                            {
                              staticClass: "text-danger",
                              attrs: {
                                name: "username",
                                show: "$invalid && $submitted"
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  attrs: { slot: "required" },
                                  slot: "required"
                                },
                                [_vm._v("Username is a required field")]
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
                _c("div", { staticClass: "col-sm-12" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c(
                        "validate",
                        { attrs: { tag: "div" } },
                        [
                          _c("label", { attrs: { for: "email" } }, [
                            _vm._v(" E-mail")
                          ]),
                          _vm._v(" "),
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
                              id: "email",
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
                                _vm.$set(
                                  _vm.model,
                                  "email",
                                  $event.target.value
                                )
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
                                {
                                  attrs: { slot: "required" },
                                  slot: "required"
                                },
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
                _c("div", { staticClass: "col-sm-6" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c(
                        "validate",
                        { attrs: { tag: "div" } },
                        [
                          _c("label", { attrs: { for: "password" } }, [
                            _vm._v(" Password")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.model.password,
                                expression: "model.password"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              id: "password",
                              name: "password",
                              type: "password",
                              required: "",
                              placeholder: "Password",
                              minlength: "4",
                              maxlength: "10"
                            },
                            domProps: { value: _vm.model.password },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.model,
                                  "password",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "field-messages",
                            {
                              staticClass: "text-danger",
                              attrs: {
                                name: "password",
                                show: "$invalid && $submitted"
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  attrs: { slot: "required" },
                                  slot: "required"
                                },
                                [_vm._v("Password is required")]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  attrs: { slot: "minlength" },
                                  slot: "minlength"
                                },
                                [
                                  _vm._v(
                                    "Password should be atleast 4 characters long"
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  attrs: { slot: "maxlength" },
                                  slot: "maxlength"
                                },
                                [
                                  _vm._v(
                                    "Password should be atmost 10 characters long"
                                  )
                                ]
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
                _c("div", { staticClass: "col-sm-6" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c(
                        "validate",
                        { attrs: { tag: "div" } },
                        [
                          _c("label", { attrs: { for: "confirm_password" } }, [
                            _vm._v(" Confirm Password")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.model.repeatPassword,
                                expression: "model.repeatPassword"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              name: "repeatpassword",
                              id: "confirm_password",
                              type: "password",
                              required: "",
                              placeholder: "Confirm Password",
                              sameas: _vm.model.password
                            },
                            domProps: { value: _vm.model.repeatPassword },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.model,
                                  "repeatPassword",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "field-messages",
                            {
                              staticClass: "text-danger",
                              attrs: {
                                name: "repeatpassword",
                                show: "$invalid && $submitted"
                              }
                            },
                            [
                              _c(
                                "div",
                                {
                                  attrs: { slot: "required" },
                                  slot: "required"
                                },
                                [_vm._v("Password confirmatoin is required")]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { attrs: { slot: "sameas" }, slot: "sameas" },
                                [
                                  _vm._v(
                                    "Password and Confirm password should match"
                                  )
                                ]
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
                _c(
                  "div",
                  { staticClass: "col-sm-12" },
                  [
                    _c(
                      "validate",
                      { attrs: { tag: "label" } },
                      [
                        _c(
                          "label",
                          {
                            staticClass:
                              "form-group custom-control custom-checkbox"
                          },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.model.terms,
                                  expression: "model.terms"
                                }
                              ],
                              staticClass:
                                "custom-control-input checkbox_label",
                              attrs: {
                                type: "checkbox",
                                name: "terms",
                                id: "terms",
                                checkbox: ""
                              },
                              domProps: {
                                checked: Array.isArray(_vm.model.terms)
                                  ? _vm._i(_vm.model.terms, null) > -1
                                  : _vm.model.terms
                              },
                              on: {
                                change: function($event) {
                                  var $$a = _vm.model.terms,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = null,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        (_vm.model.terms = $$a.concat([$$v]))
                                    } else {
                                      $$i > -1 &&
                                        (_vm.model.terms = $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1)))
                                    }
                                  } else {
                                    _vm.$set(_vm.model, "terms", $$c)
                                  }
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("span", {
                              staticClass: "custom-control-indicator"
                            }),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "custom-control-description text_gray"
                              },
                              [
                                _vm._v(
                                  "I agree the\n                            "
                                ),
                                _c(
                                  "span",
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "text-info",
                                        attrs: { to: "/" }
                                      },
                                      [_vm._v("terms & conditions")]
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "field-messages",
                          {
                            staticClass: "text-danger",
                            attrs: {
                              name: "terms",
                              show: "$invalid && $submitted"
                            }
                          },
                          [
                            _c(
                              "div",
                              { attrs: { slot: "checkbox" }, slot: "checkbox" },
                              [_vm._v("Terms must be accepted")]
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-12 text-center" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "btn btn-primary btn-block",
                          attrs: { tag: "a", to: "/login" }
                        },
                        [
                          _vm._v(
                            "Already a member? Sign In\n                            "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ])
              ])
            ]
          )
        ]
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
      _c("div", { staticClass: "col-sm-12 mt-3" }, [
        _c("h2", { staticClass: "text-center" }, [
          _c("img", {
            attrs: { src: __webpack_require__(1283), alt: "Logo" }
          })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-12" }, [
      _c("div", { staticClass: "form-group float-right" }, [
        _c("input", {
          staticClass: "btn btn-success",
          attrs: { type: "submit", value: "Sign Up" }
        })
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2f6bf2bf", module.exports)
  }
}

/***/ }),

/***/ 972:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1608)
}
var normalizeComponent = __webpack_require__(48)
/* script */
var __vue_script__ = __webpack_require__(1610)
/* template */
var __vue_template__ = __webpack_require__(1611)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2f6bf2bf"
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
Component.options.__file = "src/components/pages/auth/register.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f6bf2bf", Component.options)
  } else {
    hotAPI.reload("data-v-2f6bf2bf", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});