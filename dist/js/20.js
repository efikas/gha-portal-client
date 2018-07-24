webpackJsonp([20],{

/***/ 1125:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1126);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(36)("78785efd", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fbe6eb7e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./add.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fbe6eb7e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./add.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1126:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, "\n#color[data-v-fbe6eb7e] {\n    height: 35px;\n}\n[data-v-fbe6eb7e] .form-control:disabled {\n    cursor: not-allowed;\n}\n.disabled[data-v-fbe6eb7e] {\n    cursor: not-allowed;\n}\n.form-control[data-v-fbe6eb7e]:active, .input-group .form-control[data-v-fbe6eb7e]:hover {\n    z-index: 1;\n}\n.dropzone_wrapper[data-v-fbe6eb7e] {\n    width: 100%;\n}\n.align-left[data-v-fbe6eb7e] {\n    float: left;\n}\n.align-right[data-v-fbe6eb7e] {\n    float: right;\n}\ntab-content[data-v-fbe6eb7e] {\n    border-top: 1px solid grey;\n    border-bottom: 1px solid grey;\n}\n.even-row[data-v-fbe6eb7e] {\n    background-color: #fafafa;\n    border-top: 1px dashed #959DCC;\n    border-bottom: 1px dashed #959DCC;\n    min-height: 62px;\n    padding: 8px 0;\n}\n.odd-row[data-v-fbe6eb7e] {\n    padding: 8px 0;\n}\nform .odd-row[data-v-fbe6eb7e]:first-of-type {\n    border-top: 1px dashed #959DCC;\n}\n.form-group label[data-v-fbe6eb7e] {\n    font-size: .8rem !important;\n    letter-spacing: 1px;\n    color: #684348 !important;\n}\n.btn-school[data-v-fbe6eb7e] {\n    width: 200px;\n    -ms-flex-item-align: center;\n        align-self: center;\n    margin-left: calc(50% -  100px);\n    margin-top: 30px;\n}\ninput[type=\"text\"][data-v-fbe6eb7e], input[type=\"email\"][data-v-fbe6eb7e], input[type=\"number\"][data-v-fbe6eb7e], input[type=\"url\"][data-v-fbe6eb7e], select[data-v-fbe6eb7e] {\n    height: 40px;\n}\n", ""]);

// exports


/***/ }),

/***/ 1127:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1128);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(36)("00f8d263", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fbe6eb7e\",\"scoped\":false,\"hasInlineConfig\":true}!./vue-multiselect.min.css", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fbe6eb7e\",\"scoped\":false,\"hasInlineConfig\":true}!./vue-multiselect.min.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1128:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, "\nfieldset[disabled] .multiselect{pointer-events:none\n}\n.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block\n}\n.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:\"\";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border-color:#41b883 transparent transparent;border-style:solid;border-width:2px;-webkit-box-shadow:0 0 0 1px transparent;box-shadow:0 0 0 1px transparent\n}\n.multiselect__spinner:before{-webkit-animation:a 2.4s cubic-bezier(.41,.26,.2,.62);animation:a 2.4s cubic-bezier(.41,.26,.2,.62);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite\n}\n.multiselect__spinner:after{-webkit-animation:a 2.4s cubic-bezier(.51,.09,.21,.8);animation:a 2.4s cubic-bezier(.51,.09,.21,.8);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite\n}\n.multiselect__loading-enter-active,.multiselect__loading-leave-active{-webkit-transition:opacity .4s ease-in-out;transition:opacity .4s ease-in-out;opacity:1\n}\n.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0\n}\n.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:14px;-ms-touch-action:manipulation;touch-action:manipulation\n}\n.multiselect{-webkit-box-sizing:content-box;box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e\n}\n.multiselect *{-webkit-box-sizing:border-box;box-sizing:border-box\n}\n.multiselect:focus{outline:none\n}\n.multiselect--disabled{opacity:.6\n}\n.multiselect--active{z-index:1\n}\n.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0\n}\n.multiselect--active .multiselect__select{-webkit-transform:rotate(180deg);transform:rotate(180deg)\n}\n.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0\n}\n.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;width:100%;-webkit-transition:border .1s ease;transition:border .1s ease;-webkit-box-sizing:border-box;box-sizing:border-box;margin-bottom:8px;vertical-align:top\n}\n.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto\n}\n.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf\n}\n.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none\n}\n.multiselect__single{padding-left:6px;margin-bottom:8px\n}\n.multiselect__tags-wrap{display:inline\n}\n.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff\n}\n.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:5px;white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis\n}\n.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;-webkit-transition:all .2s ease;transition:all .2s ease;border-radius:5px\n}\n.multiselect__tag-icon:after{content:\"\\D7\";color:#266d4d;font-size:14px\n}\n.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e\n}\n.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff\n}\n.multiselect__current{min-height:40px;overflow:hidden;padding:8px 12px 0;padding-right:30px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8\n}\n.multiselect__current,.multiselect__select{line-height:16px;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer\n}\n.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;-webkit-transition:-webkit-transform .2s ease;transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease, -webkit-transform .2s ease\n}\n.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-style:solid;border-width:5px 5px 0;border-color:#999 transparent transparent;content:\"\"\n}\n.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px\n}\n.multiselect--active .multiselect__placeholder{display:none\n}\n.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:1;-webkit-overflow-scrolling:touch\n}\n.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top\n}\n.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8\n}\n.multiselect__content::webkit-scrollbar{display:none\n}\n.multiselect__element{display:block\n}\n.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap\n}\n.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px\n}\n.multiselect__option--highlight{background:#41b883;outline:none;color:#fff\n}\n.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff\n}\n.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700\n}\n.multiselect__option--selected:after{content:attr(data-selected);color:silver\n}\n.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff\n}\n.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff\n}\n.multiselect--disabled{background:#ededed;pointer-events:none\n}\n.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select,.multiselect__option--disabled{background:#ededed;color:#a6a6a6\n}\n.multiselect__option--disabled{cursor:text;pointer-events:none\n}\n.multiselect__option--disabled.multiselect__option--highlight{background:#dedede!important\n}\n.multiselect-enter-active,.multiselect-leave-active{-webkit-transition:all .15s ease;transition:all .15s ease\n}\n.multiselect-enter,.multiselect-leave-active{opacity:0\n}\n.multiselect__strong{margin-bottom:8px;line-height:20px;display:inline-block;vertical-align:top\n}\n[dir=rtl] .multiselect{text-align:right\n}\n[dir=rtl] .multiselect__select{right:auto;left:1px\n}\n[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px\n}\n[dir=rtl] .multiselect__content{text-align:right\n}\n[dir=rtl] .multiselect__option:after{right:auto;left:0\n}\n[dir=rtl] .multiselect__clear{right:auto;left:12px\n}\n[dir=rtl] .multiselect__spinner{right:auto;left:1px\n}\n@-webkit-keyframes a{\n0%{-webkit-transform:rotate(0);transform:rotate(0)\n}\nto{-webkit-transform:rotate(2turn);transform:rotate(2turn)\n}\n}\n@keyframes a{\n0%{-webkit-transform:rotate(0);transform:rotate(0)\n}\nto{-webkit-transform:rotate(2turn);transform:rotate(2turn)\n}\n}", ""]);

// exports


/***/ }),

/***/ 1129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_src_validations_validations_js__ = __webpack_require__(778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_multiselect__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_multiselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_multiselect__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_src_validations_validations_js__["a" /* default */]);
/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'school-add',
    components: {
        Multiselect: __WEBPACK_IMPORTED_MODULE_2_vue_multiselect___default.a
    },
    data: function data() {
        return {
            lgas: [],
            wards: [],
            lgasInfo: [],
            wardKeys: {}, // capture the ward id and ward name of the selected LGA
            data: {
                lga_ward_id: 3,
                name: 'Saint Mathew Nur and pry school',
                established: '2008',
                average_distance: '1',
                town: 'Ado',
                location: 'Rural', //rural or urban
                email: 'saitpaul@gmail.com',
                phone: '080',
                website: 'www.sbemis.com',
                geolocation: '9.182 / -39.140625',
                category: 'Private', //private or public
                private_membership_name: 'Ado',
                type: 2,
                ownership: '1',
                education_level: "Primary",
                multigrade: 0,
                shift: 1,
                management_committee: 1,
                pta_pf: 0,
                development_plan: 1,
                grants: 1,
                address: 'ado'
            },
            users: [{ name: 'Patrick' }, { name: 'Evan' }, { name: 'Christian' }, { name: 'Daniel' }],
            selectedSharedFacilities: []
        };
    },

    methods: {
        upload_pic: function upload_pic() {
            this.$refs.user_image.processQueue();
        },
        uploaded: function uploaded() {
            console.log("uploaded");
        },
        clearqueue: function clearqueue(file) {
            if (this.$refs.user_image.dropzone.files.length > 1) {
                this.$refs.user_image.dropzone.removeFile(this.old_file);
            }
            this.old_file = file;
        },

        onComplete: function onComplete() {
            console.log("aaa");
            this.$school.addSchool(this.data).then(function (response) {});
            // alert('Yay. Done!');
        },
        addMore: function addMore(elementGroup) {
            switch (elementGroup) {
                case 'seater':
                    this.data.classrooms.seater.push({ type: "", class: '', quantity: '' });
                    break;
                case 'pupil':
                    this.data.textbooks.pupil.push({ subject: '', level: '', quantity: '' });
                    break;
                case 'teacher':
                    this.data.textbooks.teacher.push({ subject: '', level: '', quantity: '' });
                    break;
                case 'members':
                    this.data.sbmc.members.push({ name: '', position: '', phone_number: '', email: '' });
                    break;
                case 'projects':
                    this.data.sbmc.projects.push({ brief: '', cost: '', funding: '', year: '' });
                    break;
                default:
                    break;

            }
        },
        getWard: function getWard() {
            var _this = this;

            this.wards = []; // clear previous ward elements
            this.wardKeys = [];

            var _lga = this.lgasInfo.filter(function (item) {
                return item.id === _this.lgas.indexOf(_this.data.lga) + 1;
            });
            _lga[0].wards.forEach(function (item) {
                _this.wards.push(item.name);
                _this.wardKeys[item.id] = item.name;
            });
        }
    },
    mounted: function mounted() {
        var _this2 = this;

        this.$lga.getLgas().then(function (data) {
            data.forEach(function (item) {
                // console.log(item);
                _this2.lgasInfo.push(item);
                _this2.lgas.push(item.name);
            });
            console.log(_this2.lgasInfo);
        });
    },
    destroyed: function destroyed() {}
});

/***/ }),

/***/ 1130:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-card",
        {
          staticClass: "bg-info-card",
          attrs: { header: "School Basic Information", "header-tag": "h4" }
        },
        [
          _c(
            "form",
            { staticClass: "form-horizontal", attrs: { method: "" } },
            [
              _c("div", { staticClass: "row odd-row" }, [
                _c(
                  "div",
                  { staticClass: "col-xs-12 col-sm-6 col-md-3" },
                  [
                    _c("label", { staticClass: "control-label" }, [
                      _vm._v("LGA")
                    ]),
                    _vm._v(" "),
                    _c("multiselect", {
                      attrs: { "show-labels": false, options: _vm.lgas },
                      on: { input: _vm.getWard },
                      model: {
                        value: _vm.data.lga,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "lga", $$v)
                        },
                        expression: "data.lga"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "form-group p-10" }, [
                    _c(
                      "label",
                      {
                        staticClass: "control-label col-md-8",
                        attrs: { for: "name" }
                      },
                      [_vm._v("School Name\n                                ")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.data.name,
                            expression: "data.name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "name",
                          placeholder: "School Name"
                        },
                        domProps: { value: _vm.data.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.data, "name", $event.target.value)
                          }
                        }
                      })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-xs-12 col-sm-6 col-md-3" },
                  [
                    _c("label", [_vm._v("Ward")]),
                    _vm._v(" "),
                    _c("multiselect", {
                      attrs: { "show-labels": false, options: _vm.wards },
                      model: {
                        value: _vm.data.ward,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "ward", $$v)
                        },
                        expression: "data.ward"
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row even-row" }, [
                _c("div", { staticClass: "col-xs-12 col-sm-6 col-md-3" }, [
                  _c("div", { staticClass: "form-group p-10" }, [
                    _c(
                      "label",
                      {
                        staticClass: "control-label col-md-12",
                        attrs: { for: "year_established" }
                      },
                      [
                        _vm._v(
                          "Year Established\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.data.established,
                              expression: "data.established"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            id: "year_established",
                            name: "established",
                            size: "1"
                          },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.data,
                                "established",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "0" } }, [
                            _vm._v(
                              "\n                                            Select Year\n                                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "1" } }, [
                            _vm._v("1930")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "2" } }, [
                            _vm._v("1931")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "3" } }, [
                            _vm._v("1932")
                          ])
                        ]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-12 col-sm-6 col-md-3" }, [
                  _c("div", { staticClass: "form-group p-10" }, [
                    _c(
                      "label",
                      { staticClass: "control-label", attrs: { for: "dist" } },
                      [
                        _vm._v(
                          "Distance to Catchment Area\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.data.average_distance,
                            expression: "data.average_distance"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "number",
                          min: "0",
                          id: "dist",
                          placeholder: ""
                        },
                        domProps: { value: _vm.data.average_distance },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.data,
                              "average_distance",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-12 col-sm-6 col-md-3" }, [
                  _c("div", { staticClass: "form-group p-10" }, [
                    _c(
                      "label",
                      {
                        staticClass: "control-label",
                        attrs: { for: "village_town" }
                      },
                      [_vm._v("Village/Town\n                                ")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.data.village_town,
                            expression: "data.village_town"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "village_town",
                          placeholder: ""
                        },
                        domProps: { value: _vm.data.village_town },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.data,
                              "village_town",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-12 col-sm-6 col-md-3" }, [
                  _c("div", { staticClass: "form-group p-10" }, [
                    _c(
                      "label",
                      {
                        staticClass: "control-label",
                        attrs: { for: "location" }
                      },
                      [
                        _vm._v(
                          "School Location\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        { staticClass: "radio" },
                        [
                          _c(
                            "b-form-radio",
                            {
                              attrs: {
                                value: 1,
                                checked: "false",
                                name: "location"
                              },
                              model: {
                                value: _vm.data.location,
                                callback: function($$v) {
                                  _vm.$set(_vm.data, "location", $$v)
                                },
                                expression: "data.location"
                              }
                            },
                            [
                              _vm._v(
                                "\n                                            Rural\n                                        "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "radio" },
                        [
                          _c(
                            "b-form-radio",
                            {
                              attrs: {
                                value: 0,
                                checked: "false",
                                name: "location"
                              },
                              model: {
                                value: _vm.data.location,
                                callback: function($$v) {
                                  _vm.$set(_vm.data, "location", $$v)
                                },
                                expression: "data.location"
                              }
                            },
                            [
                              _vm._v(
                                "\n                                            Urban\n                                        "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row odd-row" }, [
                _c("div", { staticClass: "col-xs-12 col-sm-7" }, [
                  _c("div", { staticClass: "form-group p-10" }, [
                    _c(
                      "label",
                      {
                        staticClass: "control-label col-md-8",
                        attrs: { for: "email" }
                      },
                      [_vm._v("Email\n                                ")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.data.email,
                            expression: "data.email"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "email",
                          id: "email",
                          placeholder: "Email"
                        },
                        domProps: { value: _vm.data.email },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.data, "email", $event.target.value)
                          }
                        }
                      })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-12 col-sm-5" }, [
                  _c("div", { staticClass: "form-group p-10" }, [
                    _c(
                      "label",
                      {
                        staticClass: "control-label col-md-12",
                        attrs: { for: "phone" }
                      },
                      [_vm._v("Phone Munber\n                                ")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.data.phone,
                            expression: "data.phone"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "phone",
                          placeholder: "Enter value"
                        },
                        domProps: { value: _vm.data.phone },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.data, "phone", $event.target.value)
                          }
                        }
                      })
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row even-row" }, [
                _c("div", { staticClass: "col-xs-12 col-sm-5" }, [
                  _c("div", { staticClass: "form-group p-10" }, [
                    _c(
                      "label",
                      {
                        staticClass: "control-label",
                        attrs: { for: "website" }
                      },
                      [_vm._v("Website\n                                ")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.data.website,
                            expression: "data.website"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "url",
                          name: "website",
                          value: "http://www.example.com/",
                          id: "url"
                        },
                        domProps: { value: _vm.data.website },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.data, "website", $event.target.value)
                          }
                        }
                      })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-12 col-sm-6 col-md-4" }, [
                  _c("div", { staticClass: "form-group p-10" }, [
                    _c(
                      "label",
                      { staticClass: "control-label", attrs: { for: "text" } },
                      [
                        _vm._v(
                          "Map Coordinate (Lat, Long)\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.data.geolocation,
                          expression: "data.geolocation"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "long",
                        placeholder: "e.g. 9.182 / -39.140625"
                      },
                      domProps: { value: _vm.data.geolocation },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.data, "geolocation", $event.target.value)
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-12 col-sm-6 col-md-3" }, [
                  _c("div", { staticClass: "form-group p-10" }, [
                    _c(
                      "label",
                      {
                        staticClass: "control-label col-md-12",
                        attrs: { for: "text" }
                      },
                      [
                        _vm._v(
                          "School Category\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        { staticClass: "radio" },
                        [
                          _c(
                            "b-form-radio",
                            {
                              attrs: {
                                value: 1,
                                checked: "false",
                                name: "category"
                              },
                              model: {
                                value: _vm.data.category,
                                callback: function($$v) {
                                  _vm.$set(_vm.data, "category", $$v)
                                },
                                expression: "data.category"
                              }
                            },
                            [
                              _vm._v(
                                "\n                                            Public\n                                        "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "radio" },
                        [
                          _c(
                            "b-form-radio",
                            {
                              attrs: {
                                value: 2,
                                checked: "false",
                                name: "category"
                              },
                              model: {
                                value: _vm.data.category,
                                callback: function($$v) {
                                  _vm.$set(_vm.data, "category", $$v)
                                },
                                expression: "data.category"
                              }
                            },
                            [
                              _vm._v(
                                "\n                                            Private\n                                        "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row odd-row" }, [
                _c("div", { staticClass: "col-xs-12 col-sm-6 col-md-5" }, [
                  _c("div", { staticClass: "form-group p-10" }, [
                    _c(
                      "label",
                      {
                        staticClass: "control-label col-md-12",
                        attrs: { for: "name_of_proprietor" }
                      },
                      [
                        _vm._v(
                          "Propritor Name\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.data.name_of_proprietor,
                            expression: "data.name_of_proprietor"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "name_of_proprietor",
                          placeholder: "Propritor Name"
                        },
                        domProps: { value: _vm.data.name_of_proprietor },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.data,
                              "name_of_proprietor",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-12 col-sm-6 col-md-3" }, [
                  _c("div", { staticClass: "form-group p-10" }, [
                    _c(
                      "label",
                      { staticClass: "control-label", attrs: { for: "text" } },
                      [
                        _vm._v(
                          "Private Membership\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        { staticClass: "radio" },
                        [
                          _c(
                            "b-form-radio",
                            {
                              attrs: {
                                value: 1,
                                name: "private_membership_status",
                                checked: "false"
                              },
                              model: {
                                value: _vm.data.private_membership_status,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.data,
                                    "private_membership_status",
                                    $$v
                                  )
                                },
                                expression: "data.private_membership_status"
                              }
                            },
                            [
                              _vm._v(
                                "\n                                            Yes\n                                        "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "radio", attrs: { checked: "false" } },
                        [
                          _c(
                            "b-form-radio",
                            {
                              attrs: {
                                value: 0,
                                name: "private_membership_status"
                              },
                              model: {
                                value: _vm.data.private_membership_status,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.data,
                                    "private_membership_status",
                                    $$v
                                  )
                                },
                                expression: "data.private_membership_status"
                              }
                            },
                            [
                              _vm._v(
                                "\n                                            No\n                                        "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-12 col-sm-6 col-md-4" }, [
                  _c("div", { staticClass: "form-group p-10" }, [
                    _c(
                      "label",
                      {
                        staticClass: "control-label",
                        attrs: { for: "private_membership_name" }
                      },
                      [
                        _vm._v(
                          "Private Memebership's\n                                    Name\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.data.private_membership_name,
                            expression: "data.private_membership_name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "private_membership_name",
                          placeholder: "PPrivate Memebership's Name"
                        },
                        domProps: { value: _vm.data.private_membership_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.data,
                              "private_membership_name",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row even-row" }, [
                _c("div", { staticClass: "col-xs-12 col-sm-6" }, [
                  _c("div", { staticClass: "form-group p-10" }, [
                    _c(
                      "label",
                      {
                        staticClass: "control-label col-md-12",
                        attrs: { for: "text" }
                      },
                      [_vm._v("School Type\n                                ")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-6" }, [
                        _c(
                          "div",
                          { staticClass: "radio" },
                          [
                            _c(
                              "b-form-radio",
                              {
                                attrs: {
                                  value: 1,
                                  checked: "false",
                                  name: "type"
                                },
                                model: {
                                  value: _vm.data.type,
                                  callback: function($$v) {
                                    _vm.$set(_vm.data, "type", $$v)
                                  },
                                  expression: "data.type"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                                Regular\n                                            "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "radio" },
                          [
                            _c(
                              "b-form-radio",
                              {
                                attrs: {
                                  value: 2,
                                  checked: "false",
                                  name: "type"
                                },
                                model: {
                                  value: _vm.data.type,
                                  callback: function($$v) {
                                    _vm.$set(_vm.data, "type", $$v)
                                  },
                                  expression: "data.type"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                                Islamiyya Integrated\n                                            "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "radio" },
                          [
                            _c(
                              "b-form-radio",
                              {
                                attrs: {
                                  value: 3,
                                  checked: "false",
                                  name: "type"
                                },
                                model: {
                                  value: _vm.data.type,
                                  callback: function($$v) {
                                    _vm.$set(_vm.data, "type", $$v)
                                  },
                                  expression: "data.type"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                                Montessori\n                                            "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "radio" },
                          [
                            _c(
                              "b-form-radio",
                              {
                                attrs: {
                                  value: 4,
                                  checked: "false",
                                  name: "type"
                                },
                                model: {
                                  value: _vm.data.type,
                                  callback: function($$v) {
                                    _vm.$set(_vm.data, "type", $$v)
                                  },
                                  expression: "data.type"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                                Special Needs\n                                            "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c(
                          "div",
                          { staticClass: "radio" },
                          [
                            _c(
                              "b-form-radio",
                              {
                                attrs: {
                                  value: 5,
                                  checked: "false",
                                  name: "type"
                                },
                                model: {
                                  value: _vm.data.type,
                                  callback: function($$v) {
                                    _vm.$set(_vm.data, "type", $$v)
                                  },
                                  expression: "data.type"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                                Vocational Training Center\n                                            "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "radio" },
                          [
                            _c(
                              "b-form-radio",
                              {
                                attrs: {
                                  value: 6,
                                  checked: "false",
                                  name: "type"
                                },
                                model: {
                                  value: _vm.data.type,
                                  callback: function($$v) {
                                    _vm.$set(_vm.data, "type", $$v)
                                  },
                                  expression: "data.type"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                                Science and Technology College\n                                            "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "radio" },
                          [
                            _c(
                              "b-form-radio",
                              {
                                attrs: {
                                  value: 7,
                                  checked: "false",
                                  name: "type"
                                },
                                model: {
                                  value: _vm.data.type,
                                  callback: function($$v) {
                                    _vm.$set(_vm.data, "type", $$v)
                                  },
                                  expression: "data.type"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                                Nomadic (Migrant)\n                                            "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-12 col-sm-6" }, [
                  _c("div", { staticClass: "form-group p-10" }, [
                    _c(
                      "label",
                      { staticClass: "control-label", attrs: { for: "text" } },
                      [
                        _vm._v(
                          "School Ownership\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-6" }, [
                        _c(
                          "div",
                          { staticClass: "radio" },
                          [
                            _c(
                              "b-form-radio",
                              {
                                attrs: {
                                  value: 1,
                                  checked: "false",
                                  name: "ownership"
                                },
                                model: {
                                  value: _vm.data.ownership,
                                  callback: function($$v) {
                                    _vm.$set(_vm.data, "ownership", $$v)
                                  },
                                  expression: "data.ownership"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                                Community\n                                            "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "radio" },
                          [
                            _c(
                              "b-form-radio",
                              {
                                attrs: {
                                  value: 2,
                                  checked: "false",
                                  name: "ownership"
                                },
                                model: {
                                  value: _vm.data.ownership,
                                  callback: function($$v) {
                                    _vm.$set(_vm.data, "ownership", $$v)
                                  },
                                  expression: "data.ownership"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                                Cooperation\n                                            "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "radio" },
                          [
                            _c(
                              "b-form-radio",
                              {
                                attrs: {
                                  value: 3,
                                  checked: "false",
                                  name: "ownership"
                                },
                                model: {
                                  value: _vm.data.ownership,
                                  callback: function($$v) {
                                    _vm.$set(_vm.data, "ownership", $$v)
                                  },
                                  expression: "data.ownership"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                                Federal Government\n                                            "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "radio" },
                          [
                            _c(
                              "b-form-radio",
                              {
                                attrs: {
                                  value: 4,
                                  checked: "false",
                                  name: "ownership"
                                },
                                model: {
                                  value: _vm.data.ownership,
                                  callback: function($$v) {
                                    _vm.$set(_vm.data, "ownership", $$v)
                                  },
                                  expression: "data.ownership"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                                State Government\n                                            "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "radio" },
                          [
                            _c(
                              "b-form-radio",
                              {
                                attrs: {
                                  value: 5,
                                  checked: "false",
                                  name: "ownership"
                                },
                                model: {
                                  value: _vm.data.ownership,
                                  callback: function($$v) {
                                    _vm.$set(_vm.data, "ownership", $$v)
                                  },
                                  expression: "data.ownership"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                                Local Government\n                                            "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c(
                          "div",
                          { staticClass: "radio" },
                          [
                            _c(
                              "b-form-radio",
                              {
                                attrs: {
                                  value: 6,
                                  checked: "false",
                                  name: "ownership"
                                },
                                model: {
                                  value: _vm.data.ownership,
                                  callback: function($$v) {
                                    _vm.$set(_vm.data, "ownership", $$v)
                                  },
                                  expression: "data.ownership"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                                Faith Based\n                                            "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "radio" },
                          [
                            _c(
                              "b-form-radio",
                              {
                                attrs: {
                                  value: 7,
                                  checked: "false",
                                  name: "ownership"
                                },
                                model: {
                                  value: _vm.data.ownership,
                                  callback: function($$v) {
                                    _vm.$set(_vm.data, "ownership", $$v)
                                  },
                                  expression: "data.ownership"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                                Individual\n                                            "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "radio" },
                          [
                            _c(
                              "b-form-radio",
                              {
                                attrs: {
                                  value: 8,
                                  checked: "false",
                                  name: "ownership"
                                },
                                model: {
                                  value: _vm.data.ownership,
                                  callback: function($$v) {
                                    _vm.$set(_vm.data, "ownership", $$v)
                                  },
                                  expression: "data.ownership"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                                NGO\n                                            "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "radio" },
                          [
                            _c(
                              "b-form-radio",
                              {
                                attrs: {
                                  value: 9,
                                  checked: "false",
                                  name: "ownership"
                                },
                                model: {
                                  value: _vm.data.ownership,
                                  callback: function($$v) {
                                    _vm.$set(_vm.data, "ownership", $$v)
                                  },
                                  expression: "data.ownership"
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                                Others\n                                            "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row odd-row" }, [
                _c("div", { staticClass: "col-xs-12 col-sm-6 col-md-4" }, [
                  _c("div", { staticClass: "form-group p-10" }, [
                    _c(
                      "label",
                      {
                        staticClass: "control-label col-md-12",
                        attrs: { for: "education_level" }
                      },
                      [
                        _vm._v(
                          "Education Level\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        { staticClass: "radio" },
                        [
                          _c(
                            "b-form-radio",
                            {
                              attrs: {
                                value: "PRY",
                                checked: "false",
                                name: "education_level"
                              },
                              model: {
                                value: _vm.data.education_level,
                                callback: function($$v) {
                                  _vm.$set(_vm.data, "education_level", $$v)
                                },
                                expression: "data.education_level"
                              }
                            },
                            [
                              _vm._v(
                                "\n                                            Primary\n                                        "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "radio" },
                        [
                          _c(
                            "b-form-radio",
                            {
                              attrs: {
                                value: "SEC",
                                checked: "false",
                                name: "education_level"
                              },
                              model: {
                                value: _vm.data.education_level,
                                callback: function($$v) {
                                  _vm.$set(_vm.data, "education_level", $$v)
                                },
                                expression: "data.education_level"
                              }
                            },
                            [
                              _vm._v(
                                "\n                                            Secondary\n                                        "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-12 col-sm-6 col-md-4" }, [
                  _c("div", { staticClass: "form-group p-10" }, [
                    _c(
                      "label",
                      { staticClass: "control-label", attrs: { for: "text" } },
                      [
                        _vm._v(
                          "Multigrading System\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        { staticClass: "radio" },
                        [
                          _c(
                            "b-form-radio",
                            {
                              attrs: {
                                value: 1,
                                checked: "false",
                                name: "multigrade"
                              },
                              model: {
                                value: _vm.data.multigrade,
                                callback: function($$v) {
                                  _vm.$set(_vm.data, "multigrade", $$v)
                                },
                                expression: "data.multigrade"
                              }
                            },
                            [
                              _vm._v(
                                "\n                                            Yes\n                                        "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "radio" },
                        [
                          _c(
                            "b-form-radio",
                            {
                              attrs: {
                                value: 0,
                                checked: "false",
                                name: "multigrade"
                              },
                              model: {
                                value: _vm.data.multigrade,
                                callback: function($$v) {
                                  _vm.$set(_vm.data, "multigrade", $$v)
                                },
                                expression: "data.multigrade"
                              }
                            },
                            [
                              _vm._v(
                                "\n                                            No\n                                        "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-12 col-sm-6 col-md-4" }, [
                  _c("div", { staticClass: "form-group p-10" }, [
                    _c(
                      "label",
                      { staticClass: "control-label", attrs: { for: "text" } },
                      [_vm._v("shift\n                                ")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        { staticClass: "radio" },
                        [
                          _c(
                            "b-form-radio",
                            {
                              attrs: {
                                value: 1,
                                checked: "false",
                                name: "shift"
                              },
                              model: {
                                value: _vm.data.shift,
                                callback: function($$v) {
                                  _vm.$set(_vm.data, "shift", $$v)
                                },
                                expression: "data.shift"
                              }
                            },
                            [
                              _vm._v(
                                "\n                                            Yes\n                                        "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "radio" },
                        [
                          _c(
                            "b-form-radio",
                            {
                              attrs: {
                                value: 0,
                                checked: "false",
                                name: "shift"
                              },
                              model: {
                                value: _vm.data.shift,
                                callback: function($$v) {
                                  _vm.$set(_vm.data, "shift", $$v)
                                },
                                expression: "data.shift"
                              }
                            },
                            [
                              _vm._v(
                                "\n                                            No\n                                        "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row even-row" }, [
                _c("div", { staticClass: "col-xs-12 col-sm-6 col-md-3" }, [
                  _c("div", { staticClass: "form-group p-10" }, [
                    _c(
                      "label",
                      {
                        staticClass: "control-label col-md-12",
                        attrs: { for: "management_committee" }
                      },
                      [
                        _vm._v(
                          "Management\n                                    Committee\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        { staticClass: "radio" },
                        [
                          _c(
                            "b-form-radio",
                            {
                              attrs: {
                                value: 1,
                                checked: "false",
                                name: "management_committee"
                              },
                              model: {
                                value: _vm.data.management_committee,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.data,
                                    "management_committee",
                                    $$v
                                  )
                                },
                                expression: "data.management_committee"
                              }
                            },
                            [
                              _vm._v(
                                "\n                                            Yes\n                                        "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "radio" },
                        [
                          _c(
                            "b-form-radio",
                            {
                              attrs: {
                                value: 0,
                                checked: "false",
                                name: "management_committee"
                              },
                              model: {
                                value: _vm.data.management_committee,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.data,
                                    "management_committee",
                                    $$v
                                  )
                                },
                                expression: "data.management_committee"
                              }
                            },
                            [
                              _vm._v(
                                "\n                                            No\n                                        "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-12 col-sm-6 col-md-3" }, [
                  _c("div", { staticClass: "form-group p-10" }, [
                    _c(
                      "label",
                      { staticClass: "control-label", attrs: { for: "text" } },
                      [_vm._v("PTA/PTF/MA\n                                ")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        { staticClass: "radio" },
                        [
                          _c(
                            "b-form-radio",
                            {
                              attrs: {
                                value: 1,
                                checked: "false",
                                name: "pta_pf"
                              },
                              model: {
                                value: _vm.data.pta_pf,
                                callback: function($$v) {
                                  _vm.$set(_vm.data, "pta_pf", $$v)
                                },
                                expression: "data.pta_pf"
                              }
                            },
                            [
                              _vm._v(
                                "\n                                            Yes\n                                        "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "radio" },
                        [
                          _c(
                            "b-form-radio",
                            {
                              attrs: {
                                value: 0,
                                checked: "false",
                                name: "pta_pf"
                              },
                              model: {
                                value: _vm.data.pta_pf,
                                callback: function($$v) {
                                  _vm.$set(_vm.data, "pta_pf", $$v)
                                },
                                expression: "data.pta_pf"
                              }
                            },
                            [
                              _vm._v(
                                "\n                                            No\n                                        "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-12 col-sm-6 col-md-3" }, [
                  _c("div", { staticClass: "form-group p-10" }, [
                    _c(
                      "label",
                      { staticClass: "control-label", attrs: { for: "text" } },
                      [
                        _vm._v(
                          "School Development Plan\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        { staticClass: "radio" },
                        [
                          _c(
                            "b-form-radio",
                            {
                              attrs: {
                                value: 1,
                                checked: "false",
                                name: "development_plan"
                              },
                              model: {
                                value: _vm.data.development_plan,
                                callback: function($$v) {
                                  _vm.$set(_vm.data, "development_plan", $$v)
                                },
                                expression: "data.development_plan"
                              }
                            },
                            [
                              _vm._v(
                                "\n                                            Yes\n                                        "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "radio" },
                        [
                          _c(
                            "b-form-radio",
                            {
                              attrs: {
                                value: 0,
                                checked: "false",
                                name: "development_plan"
                              },
                              model: {
                                value: _vm.data.development_plan,
                                callback: function($$v) {
                                  _vm.$set(_vm.data, "development_plan", $$v)
                                },
                                expression: "data.development_plan"
                              }
                            },
                            [
                              _vm._v(
                                "\n                                            No\n                                        "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xs-12 col-sm-6 col-md-3" }, [
                  _c("div", { staticClass: "form-group p-10" }, [
                    _c(
                      "label",
                      { staticClass: "control-label", attrs: { for: "text" } },
                      [
                        _vm._v(
                          "School grants\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        { staticClass: "radio" },
                        [
                          _c(
                            "b-form-radio",
                            {
                              attrs: {
                                value: 1,
                                checked: "false",
                                name: "grants"
                              },
                              model: {
                                value: _vm.data.grants,
                                callback: function($$v) {
                                  _vm.$set(_vm.data, "grants", $$v)
                                },
                                expression: "data.grants"
                              }
                            },
                            [
                              _vm._v(
                                "\n                                            Yes\n                                        "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "radio" },
                        [
                          _c(
                            "b-form-radio",
                            {
                              attrs: {
                                value: 0,
                                checked: "false",
                                name: "grants"
                              },
                              model: {
                                value: _vm.data.grants,
                                callback: function($$v) {
                                  _vm.$set(_vm.data, "grants", $$v)
                                },
                                expression: "data.grants"
                              }
                            },
                            [
                              _vm._v(
                                "\n                                            No\n                                        "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row odd-row" }, [
                _c("div", { staticClass: "col-md-5" }, [
                  _c("div", { staticClass: "form-group p-10" }, [
                    _c(
                      "label",
                      {
                        staticClass: "control-label col-md-12",
                        attrs: { for: "text" }
                      },
                      [
                        _vm._v(
                          "Date of Last Inspection Visit\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.data.date_last_inspection,
                            expression: "data.date_last_inspection"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "date",
                          id: "date",
                          value: "yyyy-mm-dd",
                          "aria-selected": "true"
                        },
                        domProps: { value: _vm.data.date_last_inspection },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.data,
                              "date_last_inspection",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c("div", { staticClass: "form-group p-10" }, [
                    _c(
                      "label",
                      {
                        staticClass: "control-label col-md-12",
                        attrs: { for: "um_of_inspection" }
                      },
                      [
                        _vm._v(
                          "Number of Inspections\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.data.num_of_inspection,
                            expression: "data.num_of_inspection"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "number",
                          min: "0",
                          id: "num_of_inspection"
                        },
                        domProps: { value: _vm.data.num_of_inspection },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.data,
                              "num_of_inspection",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-" }, [
                  _c("div", { staticClass: "form-group p-10" }, [
                    _c(
                      "label",
                      { staticClass: "control-label", attrs: { for: "text" } },
                      [
                        _vm._v(
                          "Inspection Authority\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c(
                        "div",
                        { staticClass: "radio" },
                        [
                          _c(
                            "b-form-radio",
                            {
                              attrs: {
                                value: 1,
                                checked: "false",
                                name: "insp_auth"
                              },
                              model: {
                                value: _vm.data.inspection_auth,
                                callback: function($$v) {
                                  _vm.$set(_vm.data, "inspection_auth", $$v)
                                },
                                expression: "data.inspection_auth"
                              }
                            },
                            [
                              _vm._v(
                                "\n                                            Federal Govt\n                                        "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "radio" },
                        [
                          _c(
                            "b-form-radio",
                            {
                              attrs: {
                                value: 2,
                                checked: "false",
                                name: "insp_auth"
                              },
                              model: {
                                value: _vm.data.inspection_auth,
                                callback: function($$v) {
                                  _vm.$set(_vm.data, "inspection_auth", $$v)
                                },
                                expression: "data.inspection_auth"
                              }
                            },
                            [
                              _vm._v(
                                "\n                                            State Govt\n                                        "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "radio" },
                        [
                          _c(
                            "b-form-radio",
                            {
                              attrs: {
                                value: 3,
                                checked: "false",
                                name: "insp_auth"
                              },
                              model: {
                                value: _vm.data.inspection_auth,
                                callback: function($$v) {
                                  _vm.$set(_vm.data, "inspection_auth", $$v)
                                },
                                expression: "data.inspection_auth"
                              }
                            },
                            [
                              _vm._v(
                                "\n                                            Local Govt\n                                        "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row even-row" }, [
                _c("div", { staticClass: "col-md-8" }, [
                  _c("div", { staticClass: "form-group p-10" }, [
                    _c(
                      "label",
                      {
                        staticClass: "control-label col-md-4",
                        attrs: { for: "address" }
                      },
                      [_vm._v("School Address")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-12" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.data.address,
                            expression: "data.address"
                          }
                        ],
                        staticClass: "form-control resize_vertical",
                        attrs: {
                          rows: "4",
                          id: "address",
                          placeholder: "School Address"
                        },
                        domProps: { value: _vm.data.address },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.data, "address", $event.target.value)
                          }
                        }
                      })
                    ])
                  ])
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary btn-lg btn-school",
              on: {
                click: function($event) {
                  _vm.onComplete()
                }
              }
            },
            [_vm._v("Submit")]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-fbe6eb7e", module.exports)
  }
}

/***/ }),

/***/ 744:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1125)
  __webpack_require__(1127)
}
var normalizeComponent = __webpack_require__(48)
/* script */
var __vue_script__ = __webpack_require__(1129)
/* template */
var __vue_template__ = __webpack_require__(1130)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fbe6eb7e"
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
Component.options.__file = "src/components/pages/school/add.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fbe6eb7e", Component.options)
  } else {
    hotAPI.reload("data-v-fbe6eb7e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var options = {
    validators: {
        checkbox: function checkbox(value, attrValue, vnode) {
            // return true to set input as $valid, false to set as $invalid
            return value;
        },
        sameas: function sameas(value, attrValue, vnode) {
            return value == attrValue;
        }
    }
};

/* harmony default export */ __webpack_exports__["a"] = (options);

/***/ }),

/***/ 792:
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMultiselect=t():e.VueMultiselect=t()}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var i={};return t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=4)}([function(e,t,i){"use strict";function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e){return 0!==e&&(!(!Array.isArray(e)||0!==e.length)||!e)}function o(e,t){return void 0===e&&(e="undefined"),null===e&&(e="null"),!1===e&&(e="false"),-1!==e.toString().toLowerCase().indexOf(t.trim())}function l(e,t,i,n){return e.filter(function(e){return o(n(e,i),t)})}function r(e){return e.filter(function(e){return!e.$isLabel})}function a(e,t){return function(i){return i.reduce(function(i,n){return n[e]&&n[e].length?(i.push({$groupLabel:n[t],$isLabel:!0}),i.concat(n[e])):i},[])}}function u(e,t,i,s,o){return function(r){return r.map(function(r){var a;if(!r[i])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];var u=l(r[i],e,t,o);return u.length?(a={},n(a,s,r[s]),n(a,i,u),a):[]})}}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h=i(2),p=function(e){return e&&e.__esModule?e:{default:e}}(h),d=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(e){return t.reduce(function(e,t){return t(e)},e)}};t.default={data:function(){return{search:"",isOpen:!1,prefferedOpenDirection:"below",optimizedHeight:this.maxHeight,internalValue:this.value||0===this.value?(0,p.default)(Array.isArray(this.value)?this.value:[this.value]):[]}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},value:{type:null,default:function(){return[]}},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default:function(e,t){return s(e)?"":t?e[t]:e}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},tagPosition:{type:String,default:"top"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},blockKeys:{type:Array,default:function(){return[]}},preserveSearch:{type:Boolean,default:!1}},mounted:function(){this.multiple||this.clearOnSelect||console.warn("[Vue-Multiselect warn]: ClearOnSelect and Multiple props can’t be both set to false."),!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false.")},computed:{filteredOptions:function(){var e=this.search||"",t=e.toLowerCase().trim(),i=this.options.concat();return i=this.internalSearch?this.groupValues?this.filterAndFlat(i,t,this.label):l(i,t,this.label,this.customLabel):this.groupValues?a(this.groupValues,this.groupLabel)(i):i,i=this.hideSelected?i.filter(this.isNotSelected):i,this.taggable&&t.length&&!this.isExistingOption(t)&&("bottom"===this.tagPosition?i.push({isTag:!0,label:e}):i.unshift({isTag:!0,label:e})),i.slice(0,this.optionsLimit)},valueKeys:function(){var e=this;return this.trackBy?this.internalValue.map(function(t){return t[e.trackBy]}):this.internalValue},optionKeys:function(){var e=this;return(this.groupValues?this.flatAndStrip(this.options):this.options).map(function(t){return e.customLabel(t,e.label).toString().toLowerCase()})},currentOptionLabel:function(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue.length?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:function(e,t){this.resetAfter&&this.internalValue.length&&(this.search="",this.internalValue=[])},search:function(){this.$emit("search-change",this.search,this.id)},value:function(e){this.internalValue=this.getInternalValue(e)}},methods:{getValue:function(){return this.multiple?(0,p.default)(this.internalValue):0===this.internalValue.length?null:(0,p.default)(this.internalValue[0])},getInternalValue:function(e){return null===e||void 0===e?[]:this.multiple?(0,p.default)(e):(0,p.default)([e])},filterAndFlat:function(e,t,i){return d(u(t,i,this.groupValues,this.groupLabel,this.customLabel),a(this.groupValues,this.groupLabel))(e)},flatAndStrip:function(e){return d(a(this.groupValues,this.groupLabel),r)(e)},updateSearch:function(e){this.search=e},isExistingOption:function(e){return!!this.options&&this.optionKeys.indexOf(e)>-1},isSelected:function(e){var t=this.trackBy?e[this.trackBy]:e;return this.valueKeys.indexOf(t)>-1},isNotSelected:function(e){return!this.isSelected(e)},getOptionLabel:function(e){if(s(e))return"";if(e.isTag)return e.label;if(e.$isLabel)return e.$groupLabel;var t=this.customLabel(e,this.label);return s(t)?"":t},select:function(e,t){if(!(-1!==this.blockKeys.indexOf(t)||this.disabled||e.$isLabel||e.$isDisabled)&&(!this.max||!this.multiple||this.internalValue.length!==this.max)&&("Tab"!==t||this.pointerDirty)){if(e.isTag)this.$emit("tag",e.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{if(this.isSelected(e))return void("Tab"!==t&&this.removeElement(e));this.multiple?this.internalValue.push(e):this.internalValue=[e],this.$emit("select",(0,p.default)(e),this.id),this.$emit("input",this.getValue(),this.id),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},removeElement:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.disabled){if(!this.allowEmpty&&this.internalValue.length<=1)return void this.deactivate();var i="object"===(void 0===e?"undefined":c(e))?this.valueKeys.indexOf(e[this.trackBy]):this.valueKeys.indexOf(e);this.internalValue.splice(i,1),this.$emit("input",this.getValue(),this.id),this.$emit("remove",(0,p.default)(e),this.id),this.closeOnSelect&&t&&this.deactivate()}},removeLastElement:function(){-1===this.blockKeys.indexOf("Delete")&&0===this.search.length&&Array.isArray(this.internalValue)&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate:function(){var e=this;this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&0===this.pointer&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.$nextTick(function(){return e.$refs.search.focus()})):this.$el.focus(),this.$emit("open",this.id))},deactivate:function(){this.isOpen&&(this.isOpen=!1,this.searchable?this.$refs.search.blur():this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle:function(){this.isOpen?this.deactivate():this.activate()},adjustPosition:function(){if("undefined"!=typeof window){var e=this.$el.getBoundingClientRect().top,t=window.innerHeight-this.$el.getBoundingClientRect().bottom;t>this.maxHeight||t>e||"below"===this.openDirection||"bottom"===this.openDirection?(this.prefferedOpenDirection="below",this.optimizedHeight=Math.min(t-40,this.maxHeight)):(this.prefferedOpenDirection="above",this.optimizedHeight=Math.min(e-40,this.maxHeight))}}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition:function(){return this.pointer*this.optionHeight},visibleElements:function(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions:function(){this.pointerAdjust()},isOpen:function(){this.pointerDirty=!1}},methods:{optionHighlight:function(e,t){return{"multiselect__option--highlight":e===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(t)}},addPointerElement:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Enter",t=e.key;this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],t),this.pointerReset()},pointerForward:function(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer].$isLabel&&this.pointerForward()),this.pointerDirty=!0},pointerBackward:function(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer].$isLabel&&this.pointerBackward()):this.filteredOptions[0].$isLabel&&this.pointerForward(),this.pointerDirty=!0},pointerReset:function(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust:function(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0)},pointerSet:function(e){this.pointer=e,this.pointerDirty=!0}}}},function(e,t,i){"use strict";function n(e){if(Array.isArray(e))return e.map(n);if(e&&"object"===(void 0===e?"undefined":s(e))){for(var t={},i=Object.keys(e),o=0,l=i.length;o<l;o++){var r=i[o];t[r]=n(e[r])}return t}return e}Object.defineProperty(t,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=n},function(e,t,i){"use strict";function n(e){i(6)}Object.defineProperty(t,"__esModule",{value:!0});var s=i(5),o=i.n(s),l=i(8),r=i(7),a=n,u=r(o.a,l.a,!1,a,null,null);t.default=u.exports},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.deepClone=t.pointerMixin=t.multiselectMixin=t.Multiselect=void 0;var s=i(3),o=n(s),l=i(0),r=n(l),a=i(1),u=n(a),c=i(2),h=n(c);t.default=o.default,t.Multiselect=o.default,t.multiselectMixin=r.default,t.pointerMixin=u.default,t.deepClone=h.default},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=i(0),o=n(s),l=i(1),r=n(l);t.default={name:"vue-multiselect",mixins:[o.default,r.default],props:{name:{type:String,default:""},selectLabel:{type:String,default:"Press enter to select"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:function(e){return"and "+e+" more"}},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{visibleValue:function(){return this.multiple?this.internalValue.slice(0,this.limit):[]},deselectLabelText:function(){return this.showLabels?this.deselectLabel:""},selectLabelText:function(){return this.showLabels?this.selectLabel:""},selectedLabelText:function(){return this.showLabels?this.selectedLabel:""},inputStyle:function(){if(this.multiple&&this.value&&this.value.length)return this.isOpen?{width:"auto"}:{width:"0",position:"absolute"}},contentStyle:function(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove:function(){return"above"===this.openDirection||"top"===this.openDirection||"below"!==this.openDirection&&"bottom"!==this.openDirection&&"above"===this.prefferedOpenDirection}}}},function(e,t){},function(e,t){e.exports=function(e,t,i,n,s,o){var l,r=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(l=e,r=e.default);var u="function"==typeof r?r.options:r;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),i&&(u.functional=!0),s&&(u._scopeId=s);var c;if(o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=c):n&&(c=n),c){var h=u.functional,p=h?u.render:u.beforeCreate;h?(u._injectStyles=c,u.render=function(e,t){return c.call(t),p(e,t)}):u.beforeCreate=p?[].concat(p,c):[c]}return{esModule:l,exports:r,options:u}}},function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"multiselect",class:{"multiselect--active":e.isOpen,"multiselect--disabled":e.disabled,"multiselect--above":e.isAbove},attrs:{tabindex:e.searchable?-1:e.tabindex},on:{focus:function(t){e.activate()},blur:function(t){!e.searchable&&e.deactivate()},keydown:[function(t){return"button"in t||!e._k(t.keyCode,"down",40,t.key)?t.target!==t.currentTarget?null:(t.preventDefault(),void e.pointerForward()):null},function(t){return"button"in t||!e._k(t.keyCode,"up",38,t.key)?t.target!==t.currentTarget?null:(t.preventDefault(),void e.pointerBackward()):null},function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key)||!e._k(t.keyCode,"tab",9,t.key)?(t.stopPropagation(),t.target!==t.currentTarget?null:void e.addPointerElement(t)):null}],keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"esc",27,t.key))return null;e.deactivate()}}},[e._t("caret",[i("div",{staticClass:"multiselect__select",on:{mousedown:function(t){t.preventDefault(),t.stopPropagation(),e.toggle()}}})],{toggle:e.toggle}),e._v(" "),e._t("clear",null,{search:e.search}),e._v(" "),i("div",{ref:"tags",staticClass:"multiselect__tags"},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.visibleValue.length>0,expression:"visibleValue.length > 0"}],staticClass:"multiselect__tags-wrap"},[e._l(e.visibleValue,function(t){return[e._t("tag",[i("span",{staticClass:"multiselect__tag"},[i("span",{domProps:{textContent:e._s(e.getOptionLabel(t))}}),e._v(" "),i("i",{staticClass:"multiselect__tag-icon",attrs:{"aria-hidden":"true",tabindex:"1"},on:{keydown:function(i){if(!("button"in i)&&e._k(i.keyCode,"enter",13,i.key))return null;i.preventDefault(),e.removeElement(t)},mousedown:function(i){i.preventDefault(),e.removeElement(t)}}})])],{option:t,search:e.search,remove:e.removeElement})]})],2),e._v(" "),e.internalValue&&e.internalValue.length>e.limit?[i("strong",{staticClass:"multiselect__strong",domProps:{textContent:e._s(e.limitText(e.internalValue.length-e.limit))}})]:e._e(),e._v(" "),i("transition",{attrs:{name:"multiselect__loading"}},[e._t("loading",[i("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"multiselect__spinner"})])],2),e._v(" "),e.searchable?i("input",{ref:"search",staticClass:"multiselect__input",style:e.inputStyle,attrs:{name:e.name,id:e.id,type:"text",autocomplete:"off",placeholder:e.placeholder,disabled:e.disabled,tabindex:e.tabindex},domProps:{value:e.isOpen?e.search:e.currentOptionLabel},on:{input:function(t){e.updateSearch(t.target.value)},focus:function(t){t.preventDefault(),e.activate()},blur:function(t){t.preventDefault(),e.deactivate()},keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"esc",27,t.key))return null;e.deactivate()},keydown:[function(t){if(!("button"in t)&&e._k(t.keyCode,"down",40,t.key))return null;t.preventDefault(),e.pointerForward()},function(t){if(!("button"in t)&&e._k(t.keyCode,"up",38,t.key))return null;t.preventDefault(),e.pointerBackward()},function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key)?(t.preventDefault(),t.stopPropagation(),t.target!==t.currentTarget?null:void e.addPointerElement(t)):null},function(t){if(!("button"in t)&&e._k(t.keyCode,"delete",[8,46],t.key))return null;t.stopPropagation(),e.removeLastElement()}]}}):e._e(),e._v(" "),e.searchable?e._e():i("span",{staticClass:"multiselect__single",domProps:{textContent:e._s(e.currentOptionLabel)},on:{mousedown:function(t){t.preventDefault(),e.toggle(t)}}})],2),e._v(" "),i("transition",{attrs:{name:"multiselect"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],ref:"list",staticClass:"multiselect__content-wrapper",style:{maxHeight:e.optimizedHeight+"px"},on:{focus:e.activate,mousedown:function(e){e.preventDefault()}}},[i("ul",{staticClass:"multiselect__content",style:e.contentStyle},[e._t("beforeList"),e._v(" "),e.multiple&&e.max===e.internalValue.length?i("li",[i("span",{staticClass:"multiselect__option"},[e._t("maxElements",[e._v("Maximum of "+e._s(e.max)+" options selected. First remove a selected option to select another.")])],2)]):e._e(),e._v(" "),!e.max||e.internalValue.length<e.max?e._l(e.filteredOptions,function(t,n){return i("li",{key:n,staticClass:"multiselect__element"},[t&&(t.$isLabel||t.$isDisabled)?e._e():i("span",{staticClass:"multiselect__option",class:e.optionHighlight(n,t),attrs:{"data-select":t&&t.isTag?e.tagPlaceholder:e.selectLabelText,"data-selected":e.selectedLabelText,"data-deselect":e.deselectLabelText},on:{click:function(i){i.stopPropagation(),e.select(t)},mouseenter:function(t){if(t.target!==t.currentTarget)return null;e.pointerSet(n)}}},[e._t("option",[i("span",[e._v(e._s(e.getOptionLabel(t)))])],{option:t,search:e.search})],2),e._v(" "),t&&(t.$isLabel||t.$isDisabled)?i("span",{staticClass:"multiselect__option multiselect__option--disabled",class:e.optionHighlight(n,t)},[e._t("option",[i("span",[e._v(e._s(e.getOptionLabel(t)))])],{option:t,search:e.search})],2):e._e()])}):e._e(),e._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:e.showNoResults&&0===e.filteredOptions.length&&e.search&&!e.loading,expression:"showNoResults && (filteredOptions.length === 0 && search && !loading)"}]},[i("span",{staticClass:"multiselect__option"},[e._t("noResult",[e._v("No elements found. Consider changing the search query.")])],2)]),e._v(" "),e._t("afterList")],2)])])],2)},s=[],o={render:n,staticRenderFns:s};t.a=o}])});

/***/ })

});