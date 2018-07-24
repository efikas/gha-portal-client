webpackJsonp([16],{

/***/ 1392:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1393);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(36)("745fa582", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-64cf68aa\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./profile.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-64cf68aa\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./profile.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1393:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, "\ntd.views {\n    background-color: #e5e5e5 !important;\n    padding-top: 12px;\n    padding-bottom: 12px;\n    color: #555;\n}\n", ""]);

// exports


/***/ }),

/***/ 1394:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1395);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(36)("70607432", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-64cf68aa\",\"scoped\":true,\"hasInlineConfig\":true}!./user_profile.css", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-64cf68aa\",\"scoped\":true,\"hasInlineConfig\":true}!./user_profile.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1395:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, "\n.profile[data-v-64cf68aa] {\n    padding-bottom: 15px;\n}\n.user-rating[data-v-64cf68aa] {\n    font-size: 16px;\n    border-right: 2px solid #ccc;\n}\n.panel-heading.data[data-v-64cf68aa] {\n    padding: 0 15px;\n}\n\n\n/*custom tabs*/\n.nav-tabs > li > a[data-v-64cf68aa] {\n    color: #888;\n    padding: 10px 20px;\n}\n.nav-tabs > li.active > a[data-v-64cf68aa]:after {\n    content: '';\n    position: absolute;\n    bottom: -1px;\n    display: block;\n    width: 70%;\n    left: 15%;\n    border-bottom: 4px solid #3399FF;\n}\n.nav-tabs > li.active > a[data-v-64cf68aa],\n.nav-tabs > li.active > a[data-v-64cf68aa]:hover,\n.nav-tabs > li.active > a[data-v-64cf68aa]:focus {\n    color: #3399FF;\n    background-color: transparent;\n    border: 0;\n    border-bottom-color: transparent;\n}\n.profile_details .tab-content[data-v-64cf68aa] {\n    padding: 20px 10px 0;\n}\n.profile_details #tab-details label[data-v-64cf68aa] {\n    font-weight: bold;\n    color: #8f8f8f;\n    border-bottom: 2px dotted #ccc;\n}\n.profile_details #tab-details p.info[data-v-64cf68aa] {\n    font-size: 16px;\n}\n.dl-horizontal dt[data-v-64cf68aa] {\n    width: 40%;\n    float: left;\n    clear: left;\n    text-align: right;\n    margin-bottom: 15px;\n    color: #777;\n}\n.dl-horizontal dd[data-v-64cf68aa] {\n    margin-left: 43%;\n}\n\n\n/*project details*/\n.nav_border > li > a[data-v-64cf68aa] {\n    padding: 10px 2px;\n    line-height: 20px;\n}\n.nav_border > li[data-v-64cf68aa]:not(:last-child) {\n    border-bottom: 1px solid #eee;\n}\n.nav.nav-stacked > li > a[data-v-64cf68aa]:hover,\n.nav.nav-stacked > li > a[data-v-64cf68aa]:focus {\n    background-color: #f9f9f9;\n}\n\n\n/*connections*/\n.connection[data-v-64cf68aa] {\n    -webkit-box-shadow: 0 0 5px #ccc;\n            box-shadow: 0 0 5px #ccc;\n    border: 1px solid #efefef;\n    margin: 25px 0 0;\n    position: relative;\n}\n.connect-head[data-v-64cf68aa] {\n    width: 100%;\n    padding: 12px 0;\n    position: relative;\n}\n.connect-head img[data-v-64cf68aa] {\n    width: 80px;\n}\n.connect-head p[data-v-64cf68aa] {\n    margin-bottom: 0;\n}\n.connect-data[data-v-64cf68aa] {\n    width: 50%;\n    float: left;\n    color: #FFF;\n    padding: 14px 0;\n    position: relative;\n}\n.connect-data .count[data-v-64cf68aa] {\n    font-size: 18px;\n}\n.connect-bg1[data-v-64cf68aa] {\n    background-color: #394263;\n}\n.connect-bg2[data-v-64cf68aa] {\n    background-color: #3B3F40;\n}\n.connect-bg3[data-v-64cf68aa] {\n    background-color: #4A2E2B;\n}\n.connect-bg4[data-v-64cf68aa] {\n    background-color: #583A63;\n}\n\n\n/*connections end*/\n\n\n/*blogs*/\n.blog-border[data-v-64cf68aa] {\n    -webkit-box-shadow: 0 0 5px #ccc;\n            box-shadow: 0 0 5px #ccc;\n    cursor: pointer;\n    margin: 20px 0;\n}\n#blog p[data-v-64cf68aa] {\n    margin: 0;\n}\n.blog-image[data-v-64cf68aa] {\n    width: 70px;\n}\n.blog-heading[data-v-64cf68aa] {\n    position: relative;\n}\n.blog-heading .post-by[data-v-64cf68aa] {\n    display: block;\n}\n#blog .sharedpost-image[data-v-64cf68aa] {\n    width: 100%;\n    height: 220px;\n}\n#blog .attached-image[data-v-64cf68aa] {\n    width: 100%;\n    height: 170px;\n}\n#blog .posted-image[data-v-64cf68aa] {\n    width: 100%;\n    height: 277px;\n}\n.blog-desc[data-v-64cf68aa] {\n    position: absolute;\n    bottom: 0;\n    padding: 10px 13px;\n    background-color: rgba(0, 0, 0, .3);\n    width: 100%;\n    color: #FFF;\n}\n\n\n/*end of blogs*/\n.badge[data-v-64cf68aa] {\n    display: inline-block;\n    min-width: 10px;\n    padding: 3px 7px;\n    padding-top: 3px;\n    padding-right: 7px;\n    padding-bottom: 3px;\n    padding-left: 7px;\n    font-size: 12px;\n    color: #fff;\n    vertical-align: middle;\n    border-radius: 10px;\n}\n.project-deatails a[data-v-64cf68aa] {\n    width: 100%;\n}\n.profile-thumb[data-v-64cf68aa] {\n    height: 150px;\n    width: 150px;\n}\n", ""]);

// exports


/***/ }),

/***/ 1396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_plugins_scroll_vScroll_vue__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_plugins_scroll_vScroll_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_plugins_scroll_vScroll_vue__);
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
    name: "user_profile",
    components: {
        vScroll: __WEBPACK_IMPORTED_MODULE_0_components_plugins_scroll_vScroll_vue___default.a
    },
    data: function data() {
        return {
            studentInfo: null
        };
    },

    mounted: function mounted() {
        var _this = this;

        this.$student.studentProfile(this.$route.params.id).then(function (data) {
            _this.studentInfo = data.data;
        });
    },
    destroyed: function destroyed() {}
});

/***/ }),

/***/ 1397:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      { staticClass: "col-xl-4 col-lg-5" },
      [
        _c("b-card", { staticClass: "bg-info-card" }, [
          _c("div", { staticClass: "profile text-center " }, [
            _c("img", {
              staticClass: "rounded-circle img-fluid profile-thumb mb-3",
              attrs: { src: this.$store.state.user.picture, alt: "User Image" }
            }),
            _vm._v(" "),
            _c("h4", { staticClass: "text-gray" }, [
              _vm._v(_vm._s(this.$store.state.user.name))
            ]),
            _vm._v(" "),
            _c("p", [_vm._v(_vm._s(this.$store.state.user.job))]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-7 text-warning user-rating" }, [
                _c("i", {
                  staticClass: "fa fa-star",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v(" "),
                _c("i", {
                  staticClass: "fa fa-star",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v(" "),
                _c("i", {
                  staticClass: "fa fa-star",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v(" "),
                _c("i", {
                  staticClass: "fa fa-star",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v(" "),
                _c("i", {
                  staticClass: "fa fa-star-half-full",
                  attrs: { "aria-hidden": "true" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-5" }, [
                _c("i", {
                  staticClass: "fa fa-heart text-danger",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v(" 2,080\n                    ")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "profile_details" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-12" }, [
                _c(
                  "div",
                  { staticClass: "nav-tabs-custom" },
                  [
                    _c(
                      "b-tabs",
                      [
                        _c("b-tab", { attrs: { title: "Status" } }, [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-12 mt-3" }, [
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "col-6 text-right mt-1" },
                                  [_vm._v("Followers :")]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-6 mt-1" }, [
                                  _vm._v("1,079")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-6 text-right mt-1" },
                                  [_vm._v("Online Status :")]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-6 mt-1" }, [
                                  _vm._v("Offline")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-6 text-right mt-1" },
                                  [_vm._v("Last seen :")]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-6 mt-1" }, [
                                  _vm._v("2 Days ago")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-6 text-right mt-1" },
                                  [_vm._v("Last Updated :")]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-6 mt-1" }, [
                                  _vm._v("A Month ago")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-6 text-right mt-1" },
                                  [_vm._v("Connections :")]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-6 mt-1" }, [
                                  _vm._v("2,679")
                                ])
                              ])
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("b-tab", { attrs: { title: "About", active: "" } }, [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-12" }, [
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "col-4 text-right mt-2" },
                                  [_vm._v("Email :")]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-8 mt-2" }, [
                                  _vm._v("user@example.com")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-4 text-right mt-2" },
                                  [_vm._v("Contact :")]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-8 nt-2" }, [
                                  _vm._v("(394)-968-3152")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-4 text-right mt-2" },
                                  [_vm._v("D.O.B :")]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-8 mt-2" }, [
                                  _vm._v("6-4-1987")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-4 text-right mt-1" },
                                  [_vm._v("Address :")]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-8 mt-1" }, [
                                  _vm._v(
                                    "Westwood, 12th Street,7023 Mckinley Ave, US."
                                  )
                                ])
                              ])
                            ])
                          ])
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ])
          ])
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-xl-8 col-lg-7" },
      [
        _c(
          "b-card",
          { staticClass: "bg-primary-card data" },
          [
            _c(
              "b-tabs",
              [
                _c("b-tab", { attrs: { title: "PERSONAL" } }, [
                  _c("p", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-outline-primary pull-right",
                        attrs: { type: "button" }
                      },
                      [_vm._v("Edit\n                        ")]
                    )
                  ]),
                  _c("h1", [_vm._v("Personal Details")]),
                  _vm._v(" "),
                  _c("p"),
                  _vm._v(" "),
                  _vm.studentInfo
                    ? _c("table", { staticClass: "table account-detailsg" }, [
                        _c("tbody", [
                          _c("tr", { staticClass: "m-0" }, [
                            _c("td", { staticClass: "views" }, [
                              _vm._v("First Name")
                            ]),
                            _vm._v(" "),
                            _c("td", { attrs: { colspan: "3" } }, [
                              _vm._v(" " + _vm._s(_vm.studentInfo.first_name))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "views" }, [
                              _vm._v("Last Name")
                            ]),
                            _vm._v(" "),
                            _c("td", { attrs: { colspan: "3" } }, [
                              _vm._v(" " + _vm._s(_vm.studentInfo.last_name))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "views" }, [
                              _vm._v("Middle Name")
                            ]),
                            _vm._v(" "),
                            _c("td", { attrs: { colspan: "3" } }, [
                              _vm._v(" " + _vm._s(_vm.studentInfo.middle_name))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "views" }, [
                              _vm._v("Gender")
                            ]),
                            _vm._v(" "),
                            _c("td", { attrs: { colspan: "3" } }, [
                              _vm._v(" " + _vm._s(_vm.studentInfo.sex))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "views" }, [
                              _vm._v("Email Address")
                            ]),
                            _vm._v(" "),
                            _c("td", { attrs: { colspan: "3" } }, [
                              _vm._v(
                                " " + _vm._s(_vm.studentInfo.email_address)
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "views" }, [
                              _vm._v("Phone Number")
                            ]),
                            _vm._v(" "),
                            _c("td", { attrs: { colspan: "3" } }, [
                              _vm._v(" " + _vm._s(_vm.studentInfo.phone_number))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "views" }, [
                              _vm._v("Height")
                            ]),
                            _vm._v(" "),
                            _c("td", { attrs: { colspan: "3" } }, [
                              _vm._v(" " + _vm._s(_vm.studentInfo.height))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "views" }, [
                              _vm._v("Weight")
                            ]),
                            _vm._v(" "),
                            _c("td", { attrs: { colspan: "3" } }, [
                              _vm._v(" " + _vm._s(_vm.studentInfo.weight))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "views" }, [
                              _vm._v("Date of Birth")
                            ]),
                            _vm._v(" "),
                            _c("td", { attrs: { colspan: "3" } }, [
                              _vm._v(
                                " " + _vm._s(_vm.studentInfo.date_of_birth)
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "views" }, [
                              _vm._v("Special Condition")
                            ]),
                            _vm._v(" "),
                            _c("td", { attrs: { colspan: "3" } }, [
                              _vm._v(
                                " " + _vm._s(_vm.studentInfo.special_condition)
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "views" }, [
                              _vm._v("Bloodgroup")
                            ]),
                            _vm._v(" "),
                            _c("td", { attrs: { colspan: "3" } }, [
                              _vm._v(" " + _vm._s(_vm.studentInfo.blood_group))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "views" }, [
                              _vm._v("Birth Place")
                            ]),
                            _vm._v(" "),
                            _c("td", { attrs: { colspan: "3" } }, [
                              _vm._v(
                                " " + _vm._s(_vm.studentInfo.place_of_birth)
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "views" }, [
                              _vm._v("Birth certificate available")
                            ]),
                            _vm._v(" "),
                            _c("td", { attrs: { colspan: "3" } }, [
                              _vm._v(
                                " " + _vm._s(_vm.studentInfo.birth_cert_status)
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "views" }, [
                              _vm._v("Birth certificate Type")
                            ]),
                            _vm._v(" "),
                            _c("td", { attrs: { colspan: "3" } }, [
                              _vm._v(
                                " " + _vm._s(_vm.studentInfo.birth_cert_type)
                              )
                            ])
                          ])
                        ])
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("b-tab", { attrs: { title: "ACADEMIC" } }, [
                  _c("p", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-outline-primary pull-right",
                        attrs: { type: "button" }
                      },
                      [_vm._v("Edit\n                        ")]
                    )
                  ]),
                  _c("h1", [_vm._v("Academic Record")]),
                  _vm._v(" "),
                  _c("p"),
                  _vm._v(" "),
                  _vm.studentInfo
                    ? _c("table", { staticClass: "table account-detailsg" }, [
                        _c("tbody", [
                          _c("tr", { staticClass: "m-0" }, [
                            _c("td", { staticClass: "views" }, [
                              _vm._v("School Name")
                            ]),
                            _vm._v(" "),
                            _c("td", { attrs: { colspan: "3" } }, [
                              _vm._v(" School Name")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "views" }, [
                              _vm._v("Admission promotion_status")
                            ]),
                            _vm._v(" "),
                            _c("td", { attrs: { colspan: "3" } }, [
                              _vm._v(
                                " " + _vm._s(_vm.studentInfo.admission_status)
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "views" }, [
                              _vm._v("Admission Year")
                            ]),
                            _vm._v(" "),
                            _c("td", { attrs: { colspan: "3" } }, [
                              _vm._v(
                                " " + _vm._s(_vm.studentInfo.admission_year)
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "views" }, [
                              _vm._v("Class of Admission")
                            ]),
                            _vm._v(" "),
                            _c("td", { attrs: { colspan: "3" } }, [
                              _vm._v(
                                " " +
                                  _vm._s(
                                    _vm.studentInfo.admission_education_level
                                  )
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "views" }, [
                              _vm._v("Current Class")
                            ]),
                            _vm._v(" "),
                            _c("td", { attrs: { colspan: "3" } }, [
                              _vm._v(
                                " " +
                                  _vm._s(_vm.studentInfo.current_class_level)
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "views" }, [
                              _vm._v("Distance from School")
                            ]),
                            _vm._v(" "),
                            _c("td", { attrs: { colspan: "3" } }, [
                              _vm._v(
                                " " +
                                  _vm._s(_vm.studentInfo.distance_from_school)
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "views" }, [
                              _vm._v("Boarding")
                            ]),
                            _vm._v(" "),
                            _c("td", { attrs: { colspan: "3" } }, [
                              _vm._v(" " + _vm._s(_vm.studentInfo.boarding))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "views" }, [
                              _vm._v("Dormitory")
                            ]),
                            _vm._v(" "),
                            _c("td", { attrs: { colspan: "3" } }, [
                              _vm._v(" " + _vm._s(_vm.studentInfo.dormitory_id))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "views" }, [
                              _vm._v("Promotion Status")
                            ]),
                            _vm._v(" "),
                            _c("td", { attrs: { colspan: "3" } }, [
                              _vm._v(
                                " " + _vm._s(_vm.studentInfo.promotion_status)
                              )
                            ])
                          ])
                        ])
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("b-tab", { attrs: { title: "PARENT/GUARDIAN" } }, [
                  _c("p", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-outline-primary pull-right",
                        attrs: { type: "button" }
                      },
                      [_vm._v("Edit\n                        ")]
                    )
                  ]),
                  _c("h1", [_vm._v("Parent/Guardian Details")]),
                  _vm._v(" "),
                  _c("p"),
                  _vm._v(" "),
                  _vm.studentInfo
                    ? _c("table", { staticClass: "table account-detailsg" }, [
                        _c("tbody", [
                          _c("tr", { staticClass: "m-0" }, [
                            _c("td", { staticClass: "views" }, [
                              _vm._v("Full Name")
                            ]),
                            _vm._v(" "),
                            _c("td", { attrs: { colspan: "3" } }, [
                              _vm._v(" " + _vm._s(_vm.studentInfo.first_name))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "views" }, [
                              _vm._v("Relationship")
                            ]),
                            _vm._v(" "),
                            _c("td", { attrs: { colspan: "3" } }, [
                              _vm._v(" " + _vm._s(_vm.studentInfo.first_name))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "views" }, [
                              _vm._v("Occupation")
                            ]),
                            _vm._v(" "),
                            _c("td", { attrs: { colspan: "3" } }, [
                              _vm._v(" " + _vm._s(_vm.studentInfo.first_name))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "views" }, [
                              _vm._v("Mobile Number")
                            ]),
                            _vm._v(" "),
                            _c("td", { attrs: { colspan: "3" } }, [
                              _vm._v(" " + _vm._s(_vm.studentInfo.first_name))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "views" }, [
                              _vm._v("Phone Number")
                            ]),
                            _vm._v(" "),
                            _c("td", { attrs: { colspan: "3" } }, [
                              _vm._v(" " + _vm._s(_vm.studentInfo.first_name))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "views" }, [
                              _vm._v("Email Address")
                            ]),
                            _vm._v(" "),
                            _c("td", { attrs: { colspan: "3" } }, [
                              _vm._v(" " + _vm._s(_vm.studentInfo.first_name))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "views" }, [
                              _vm._v("Date of Birth")
                            ]),
                            _vm._v(" "),
                            _c("td", { attrs: { colspan: "3" } }, [
                              _vm._v(" " + _vm._s(_vm.studentInfo.first_name))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "views" }, [
                              _vm._v("Religion")
                            ]),
                            _vm._v(" "),
                            _c("td", { attrs: { colspan: "3" } }, [
                              _vm._v(" " + _vm._s(_vm.studentInfo.first_name))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c(
                              "td",
                              { staticClass: "views" },
                              [_vm._v("Home "), _c("Address")],
                              1
                            ),
                            _vm._v(" "),
                            _c("td", { attrs: { colspan: "3" } }, [
                              _vm._v(" " + _vm._s(_vm.studentInfo.first_name))
                            ])
                          ])
                        ])
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("b-tab", { attrs: { title: "BIOMETRICS" } }, [
                  _c("p", [
                    _c("button", { staticClass: "btn btn-primary" }, [
                      _c("i", {
                        staticClass: "fa fa-fingerprint",
                        attrs: { "aria-hidden": "true" }
                      }),
                      _vm._v(
                        "\n                            Scan Right Thumb\n                        "
                      )
                    ])
                  ])
                ])
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-64cf68aa", module.exports)
  }
}

/***/ }),

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1392)
  __webpack_require__(1394)
}
var normalizeComponent = __webpack_require__(48)
/* script */
var __vue_script__ = __webpack_require__(1396)
/* template */
var __vue_template__ = __webpack_require__(1397)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-64cf68aa"
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
Component.options.__file = "src/components/pages/student/profile.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-64cf68aa", Component.options)
  } else {
    hotAPI.reload("data-v-64cf68aa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 783:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(815)
}
var normalizeComponent = __webpack_require__(48)
/* script */
var __vue_script__ = __webpack_require__(817)
/* template */
var __vue_template__ = __webpack_require__(818)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
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
Component.options.__file = "src/components/plugins/scroll/vScroll.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b9393c00", Component.options)
  } else {
    hotAPI.reload("data-v-b9393c00", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 815:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(816);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(36)("b6065a50", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b9393c00\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vScroll.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b9393c00\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vScroll.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 816:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, "\n.ss-wrapper {\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n    position: relative;\n    z-index: 1;\n    float: left;\n}\n.ss-content {\n    height: 100%;\n    width: 100%;\n    padding: 0 18px 0 0;\n    position: relative;\n    right: -18px;\n    overflow: auto;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n.ss-scroll {\n    position: relative;\n    background: rgba(0, 0, 0, 0.1);\n    width: 9px;\n    border-radius: 4px;\n    top: 0;\n    z-index: 2;\n    cursor: pointer;\n    opacity: 0;\n    -webkit-transition: opacity 0.25s linear;\n    transition: opacity 0.25s linear;\n}\n.ss-hidden {\n    display: none;\n}\n.ss-container:hover .ss-scroll,\n.ss-scroll.ss-grabbed,\n.ss-scroll.visible {\n    opacity: 1;\n}\n.ss-grabbed {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n", ""]);

// exports


/***/ }),

/***/ 817:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        height: null,
        minHeight: null,
        maxHeight: null,
        color: null,
        barWidth: null,
        alwaysvisible: Boolean
    },
    mounted: function mounted() {
        this.dragDealer();
        this.moveBar();
    },
    data: function data() {
        return {
            scrollRatio: 0,
            grabbed: false
        };
    },

    methods: {
        // Mouse drag handler
        dragDealer: function dragDealer() {
            var _this = this;

            var t = this;
            var lastPageY;
            this.$refs.bar.addEventListener('mousedown', function (e) {
                lastPageY = e.pageY;
                _this.grabbed = true;
                document.body.classList.add('ss-grabbed');
                document.addEventListener('mousemove', drag);
                document.addEventListener('mouseup', stop);
                return false;

                function drag(e) {
                    var delta = e.pageY - lastPageY;
                    lastPageY = e.pageY;
                    t.$refs.content.scrollTop += delta / t.scrollRatio;
                }

                function stop() {
                    t.grabbed = false;
                    document.body.classList.remove('ss-grabbed');
                    document.removeEventListener('mousemove', drag);
                    document.removeEventListener('mouseup', stop);
                }
            });
        },
        moveBar: function moveBar() {
            var content = this.$refs.content;
            var bar = this.$refs.bar;
            var totalHeight = content.scrollHeight,
                ownHeight = content.clientHeight;
            this.scrollRatio = ownHeight / totalHeight;
            // Hide scrollbar if no scrolling is possible
            if (this.scrollRatio >= 1) {
                bar.classList.add('ss-hidden');
            } else {
                bar.classList.remove('ss-hidden');
                bar.style.cssText = 'height:' + this.scrollRatio * 100 + '%; top:' + content.scrollTop / totalHeight * 100 + '%;right:-' + (this.$refs.vscroll.clientWidth - bar.clientWidth) + 'px;background-color:' + this.color + ';width:' + this.barWidth;
            }
        },
        scrolltotop: function scrolltotop() {
            this.$refs.content.scrollTop = 0;
        },
        scrolltobottom: function scrolltobottom() {
            this.$refs.content.scrollTop = this.$refs.content.scrollHeight;
        }
    }
});

/***/ }),

/***/ 818:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "vscroll",
      staticClass: "ss-container",
      style: {
        height: _vm.height,
        "min-height": _vm.minHeight,
        "max-height": _vm.maxHeight
      }
    },
    [
      _c("div", { ref: "wrapper", staticClass: "ss-wrapper" }, [
        _c(
          "div",
          {
            ref: "content",
            staticClass: "ss-content",
            on: { scroll: _vm.moveBar, mouseenter: _vm.moveBar }
          },
          [_vm._t("default")],
          2
        )
      ]),
      _vm._v(" "),
      _c("div", {
        ref: "bar",
        staticClass: "ss-scroll",
        class: { "ss-grabbed": _vm.grabbed, visible: _vm.alwaysvisible }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b9393c00", module.exports)
  }
}

/***/ })

});