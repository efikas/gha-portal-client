webpackJsonp([6],{

/***/ 1030:
/***/ (function(module, exports) {

module.exports = "/images/ekiti-logo.png?d3cfaa568afb3c25c7723c9a1610cf11";

/***/ }),

/***/ 1414:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1415);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(36)("d8757aa6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-24b4a97a\",\"scoped\":true,\"hasInlineConfig\":true}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./layout.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-24b4a97a\",\"scoped\":true,\"hasInlineConfig\":true}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./layout.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1415:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, "\n.wrapper[data-v-24b4a97a]:before,\n.wrapper[data-v-24b4a97a]:after {\n  display: table;\n  content: \" \";\n}\n.wrapper[data-v-24b4a97a]:after {\n  clear: both;\n}\n.wrapper[data-v-24b4a97a] {\n  display: table;\n  overflow-x: hidden;\n  width: 100%;\n  max-width: 100%;\n  table-layout: fixed;\n}\n.right-aside[data-v-24b4a97a],\n.left-aside[data-v-24b4a97a] {\n  padding: 0;\n  display: table-cell;\n  vertical-align: top;\n}\n.right-aside[data-v-24b4a97a] {\n  background-color: rgba(235, 242, 246, 0.5) !important;\n}\n@media (max-width: 992px) {\n.wrapper > .right-aside[data-v-24b4a97a] {\n    width: 100vw;\n    min-width: 100vw;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 1416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_layouts_preloader_preloader__ = __webpack_require__(1417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_layouts_preloader_preloader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_layouts_preloader_preloader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_layouts_right_side__ = __webpack_require__(1421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_layouts_right_side___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_layouts_right_side__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_layouts_left_side_default_left_side__ = __webpack_require__(1426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_layouts_left_side_default_left_side___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_layouts_left_side_default_left_side__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_layouts_header_fixed_header__ = __webpack_require__(1451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_layouts_header_fixed_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_layouts_header_fixed_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_assets_sass_custom_scss__ = __webpack_require__(1460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_assets_sass_custom_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_assets_sass_custom_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_animejs__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_animejs__);
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * These are the files that enable you to change layouts and other options
 */

/**
 * import preloader
 * choose from preloader and bounce
 */


/**
 * The right side content
 */


/**
 * import left-side from default or horizontal-menu
 * eg: import left_side from 'components/layouts/left-side/horizontal-menu/left-side'
 */


/**
 * import from header or fixed-header or no-header
 */


/**
 * Styles
 */

/**
 * Main stylesheet for the layout
 */


/**
 * Style required for a boxed layout
 */
// import 'components/layouts/css/boxed.scss'

/**
 * Style required for a fixed-menu layout
 */
// import 'components/layouts/css/fixed-menu.scss'

/**
 * Style required for a compact-menu layout
 */
// import 'components/layouts/css/compact-menu.scss'

/**
 * Style required for a centered-logo layout
 */
// import 'components/layouts/css/centered-logo.scss'

/**
 * Style required for a content-menu layout
 */
// import 'components/layouts/css/content_menu.scss'


/**
 * import animejs for the menu transition effects
 */


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'layout',
  components: {
    preloader: __WEBPACK_IMPORTED_MODULE_0_components_layouts_preloader_preloader___default.a,
    vueadmin_header: __WEBPACK_IMPORTED_MODULE_3_components_layouts_header_fixed_header___default.a,
    left_side: __WEBPACK_IMPORTED_MODULE_2_components_layouts_left_side_default_left_side___default.a,
    right_side: __WEBPACK_IMPORTED_MODULE_1_components_layouts_right_side___default.a
  },
  data: function data() {
    return {
      showtopbtn: false
    };
  },
  mounted: function mounted() {
    if (window.innerWidth <= 992) {
      this.$store.commit('left_menu', 'close');
    }
  }
});

/***/ }),

/***/ 1417:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1418)
}
var normalizeComponent = __webpack_require__(48)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(1420)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-27bb4792"
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
Component.options.__file = "src/components/layouts/preloader/preloader.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-27bb4792", Component.options)
  } else {
    hotAPI.reload("data-v-27bb4792", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1418:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1419);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(36)("a92bd558", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-27bb4792\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./preloader.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-27bb4792\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./preloader.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1419:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, "\n.cssload-aim[data-v-27bb4792] {\n  position: fixed;\n  z-index: 1500;\n  left: calc(100% - 42px);\n  top: 60px;\n  border-radius: 20px;\n  background-color: transparent;\n  border-width: 15px;\n  border-style: double;\n  border-color: transparent #428bca;\n  -webkit-animation: cssload-anim-data-v-27bb4792 0.7s linear infinite;\n          animation: cssload-anim-data-v-27bb4792 0.7s linear infinite;\n}\n@media screen and (max-width: 560px) {\n.cssload-aim[data-v-27bb4792] {\n      top: 106px;\n}\n}\n@-webkit-keyframes cssload-anim-data-v-27bb4792 {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes cssload-anim-data-v-27bb4792 {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 1420:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "cssload-aim" })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-27bb4792", module.exports)
  }
}

/***/ }),

/***/ 1421:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1422)
}
var normalizeComponent = __webpack_require__(48)
/* script */
var __vue_script__ = __webpack_require__(1424)
/* template */
var __vue_template__ = __webpack_require__(1425)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4d83a4be"
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
Component.options.__file = "src/components/layouts/right-side.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4d83a4be", Component.options)
  } else {
    hotAPI.reload("data-v-4d83a4be", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1422:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1423);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(36)("823b0846", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4d83a4be\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./right-side.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4d83a4be\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./right-side.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1423:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, "\n.right-aside[data-v-4d83a4be] {\n  padding: 0 20px 10px 20px;\n  width: 100%;\n  max-width: 100%;\n}\n.right-aside .content-header > h1[data-v-4d83a4be] {\n    margin: 2px;\n    padding-left: 13px;\n    padding-top: 12px;\n    font-size: 20px;\n    line-height: 1.5;\n    color: #6b1c2b;\n}\n.right-aside .content-header[data-v-4d83a4be] {\n    margin: -2px -20px 25px -20px;\n    height: 55px;\n    background: #f9fafb;\n    -webkit-box-shadow: 3px 1px 5px #ccc;\n            box-shadow: 3px 1px 5px #ccc;\n}\n", ""]);

// exports


/***/ }),

/***/ 1424:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "right-side",
    methods: {}
});

/***/ }),

/***/ 1425:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("aside", { staticClass: "right-aside" }, [
    _c("section", { staticClass: "content-header " }, [
      _c("h1", [
        _vm._v(
          _vm._s(
            this.$store.state.page_title
              ? this.$store.state.page_title
              : this.$route.meta.title
          )
        )
      ])
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "content" }, [_vm._t("default")], 2)
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4d83a4be", module.exports)
  }
}

/***/ }),

/***/ 1426:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1427)
}
var normalizeComponent = __webpack_require__(48)
/* script */
var __vue_script__ = __webpack_require__(1429)
/* template */
var __vue_template__ = __webpack_require__(1450)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ccda5a12"
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
Component.options.__file = "src/components/layouts/left-side/default/left-side.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ccda5a12", Component.options)
  } else {
    hotAPI.reload("data-v-ccda5a12", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1427:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1428);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(36)("2ba6387c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ccda5a12\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./left-side.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ccda5a12\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./left-side.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1428:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, "\n.left-aside[data-v-ccda5a12] {\n  width: 250px;\n  background: #650606;\n  background-repeat: repeat-y;\n}\n.navigation[data-v-ccda5a12] {\n  padding: 0;\n}\n.divider[data-v-ccda5a12] {\n  margin-top: 10px;\n  list-style-type: none;\n  border-bottom: 1px solid #ececec;\n  padding-bottom: 6px;\n}\n.divider span[data-v-ccda5a12] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #ccc;\n  margin: 20px 20px -15px 20px;\n}\n.sidebar[data-v-ccda5a12] {\n  display: block;\n  font-size: 14px;\n  letter-spacing: 1px;\n}\n.content[data-v-ccda5a12] {\n  display: block;\n  width: auto;\n  overflow-x: hidden;\n  padding: 0 15px;\n}\n.badge-success[data-v-ccda5a12] {\n  background-color: #22d69d;\n}\n.badge[data-v-ccda5a12] {\n  padding: 0.60em 0.7em;\n  border-radius: 0.75rem;\n}\n.nav_profile[data-v-ccda5a12] {\n  border-bottom: 1px solid #eee;\n}\n", ""]);

// exports


/***/ }),

/***/ 1429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu__ = __webpack_require__(1430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__left_profile_user_profile2_vue__ = __webpack_require__(1444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__left_profile_user_profile2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__left_profile_user_profile2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_js__ = __webpack_require__(1449);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "left-side",
    components: {
        vmenu: __WEBPACK_IMPORTED_MODULE_0__menu__["vmenu"],
        vsubMenu: __WEBPACK_IMPORTED_MODULE_0__menu__["vsubMenu"],
        vmenuItem: __WEBPACK_IMPORTED_MODULE_0__menu__["vmenuItem"],
        profile: __WEBPACK_IMPORTED_MODULE_1__left_profile_user_profile2_vue___default.a
    },
    data: function data() {
        return {
            menuitems: __WEBPACK_IMPORTED_MODULE_2__menu_js__["a" /* default */]
        };
    }
});

/***/ }),

/***/ 1430:
/***/ (function(module, exports, __webpack_require__) {

exports.vmenu = __webpack_require__(1431);
exports.vsubMenu = __webpack_require__(1434);
exports.vmenuItem = __webpack_require__(1439);

/***/ }),

/***/ 1431:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(48)
/* script */
var __vue_script__ = __webpack_require__(1432)
/* template */
var __vue_template__ = __webpack_require__(1433)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "src/components/layouts/left-side/default/menu/vueMenu.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6709deaa", Component.options)
  } else {
    hotAPI.reload("data-v-6709deaa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    computed: {
        $collapseItems: function $collapseItems() {
            return this.$children.filter(function (child) {
                return child._isCollapseItem;
            });
        }
    },
    methods: {
        openByIndex: function openByIndex(index) {
            this.$collapseItems.forEach(function (item, i) {
                if (i !== index) {
                    item.isActived = false;
                }
            });
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.$on("closeall", function (index) {
            _this.openByIndex(index);
        });
    }
});

/***/ }),

/***/ 1433:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vuemenu navigation" },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6709deaa", module.exports)
  }
}

/***/ }),

/***/ 1434:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1435)
}
var normalizeComponent = __webpack_require__(48)
/* script */
var __vue_script__ = __webpack_require__(1437)
/* template */
var __vue_template__ = __webpack_require__(1438)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-50ffab65"
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
Component.options.__file = "src/components/layouts/left-side/default/menu/subMenu.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-50ffab65", Component.options)
  } else {
    hotAPI.reload("data-v-50ffab65", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1435:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1436);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(36)("575b28d7", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-50ffab65\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./subMenu.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-50ffab65\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./subMenu.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1436:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, "\n.collapse-item .submenu-header[data-v-50ffab65] {\n  cursor: pointer;\n  color: #fff;\n  padding: 11px 10px 11px 30px;\n}\n.collapse-item .submenu-header[data-v-50ffab65]:hover {\n    color: gold;\n}\n.collapse-item .submenu-header .submenu-header-title[data-v-50ffab65] {\n    vertical-align: text-bottom;\n}\n.collapse-item .submenu-header .active .submenu-header-title[data-v-50ffab65] {\n    font-weight: 600;\n}\n.collapse-item .submenu-content[data-v-50ffab65] {\n  background-color: rgba(0, 0, 0, 0.3);\n  overflow-y: hidden;\n  position: relative;\n}\n.collapse-item .submenu-content-box[data-v-50ffab65]:active {\n  color: #000;\n}\n.collapse-item .submenu_icon[data-v-50ffab65] {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  font-size: 16px;\n  margin-top: -2px;\n  color: #3e6174;\n}\n.collapse-item.active > .submenu-header[data-v-50ffab65] {\n  background-color: white;\n  color: #0a3c5f;\n  font-weight: 500;\n}\n.collapse-item.active > .submenu-header > .submenu_icon[data-v-50ffab65] {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n}\n.collapse-item.active > .submenu-header i[data-v-50ffab65] {\n    color: #0a3c5f !important;\n}\n.leftmenu_icon[data-v-50ffab65] {\n  margin-right: 6px;\n  line-height: 20px;\n  height: 22px;\n  width: 20px;\n  text-align: center;\n  font-size: 16px;\n  color: #fff;\n}\n.leftmenu_icon:hover .submenu-header-title[data-v-50ffab65], .leftmenu_icon:hover .submenu_icon[data-v-50ffab65] {\n  padding-left: 50px;\n}\n", ""]);

// exports


/***/ }),

/***/ 1437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_animejs__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_animejs__);
//
//
//
//
//
//
//
//
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
        selected: Boolean,
        icon: String,
        title: {
            type: String,
            required: true
        }
    },
    data: function data() {
        return {
            isActived: this.selected
        };
    },

    computed: {
        index: function index() {
            return this.$parent.$collapseItems.indexOf(this);
        }
    },
    created: function created() {
        this._isCollapseItem = true;
    },
    mounted: function mounted() {
        var _this = this;

        function activate(self) {
            if (self.$refs.box) {
                self.isActived = self.$refs.box.querySelectorAll("a.active").length >= 1 ? true : false;
            }
        }
        //change when route changes
        this.$store.subscribe(function (mutation, state) {
            if (mutation.type == "routeChange" && mutation.payload == "end") {
                setTimeout(function () {
                    activate(_this);
                }, 0);
            }
        });
        activate(this);
    },

    methods: {
        toggle: function toggle() {
            this.$parent.$emit('closeall', this.index);
            this.isActived = !this.isActived;
        },
        cancel: function cancel() {
            this.anime.pause();
        },
        before: function before(targets) {
            targets.removeAttribute('style');
        },
        enter: function enter(targets, done) {
            var height = targets.scrollHeight;
            targets.style.height = 0;
            targets.style.opacity = 0;
            __WEBPACK_IMPORTED_MODULE_0_animejs___default()({
                targets: targets,
                duration: 377,
                easing: 'easeOutExpo',
                opacity: [0, 1],
                height: height,
                complete: function complete() {
                    targets.removeAttribute('style');
                    done();
                }
            });
        },
        leave: function leave(targets, complete) {
            __WEBPACK_IMPORTED_MODULE_0_animejs___default()({
                targets: targets,
                duration: 377,
                easing: 'easeOutExpo',
                opacity: [1, 0],
                height: 0
            });
        }
    }
});

/***/ }),

/***/ 1438:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "submenu collapse-item", class: { active: _vm.isActived } },
    [
      _c(
        "div",
        {
          staticClass: "submenu-header touchable",
          attrs: {
            role: "tab",
            "aria-expanded": _vm.selected ? "true" : "fase"
          },
          on: { click: _vm.toggle }
        },
        [
          _c("i", { staticClass: "leftmenu_icon\n", class: _vm.icon }),
          _vm._v(" "),
          _c("span", { staticClass: "submenu-header-title" }, [
            _vm._v(_vm._s(_vm.title))
          ]),
          _vm._v(" "),
          _vm._m(0)
        ]
      ),
      _vm._v(" "),
      _c(
        "transition",
        {
          attrs: { name: "collapsed-fade", css: false },
          on: {
            "before-appear": _vm.before,
            appear: _vm.enter,
            "appear-cancel": _vm.cancel,
            "before-enter": _vm.before,
            enter: _vm.enter,
            "enter-cancel": _vm.cancel,
            leave: _vm.leave,
            "leave-cancel": _vm.cancel
          }
        },
        [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.isActived,
                  expression: "isActived"
                }
              ],
              staticClass: "submenu-content"
            },
            [
              _c(
                "div",
                { ref: "box", staticClass: "submenu-content-box" },
                [_vm._t("default")],
                2
              )
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "submenu_icon float-right" }, [
      _c("i", { staticClass: "fa fa-angle-right" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-50ffab65", module.exports)
  }
}

/***/ }),

/***/ 1439:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1440)
}
var normalizeComponent = __webpack_require__(48)
/* script */
var __vue_script__ = __webpack_require__(1442)
/* template */
var __vue_template__ = __webpack_require__(1443)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-79869808"
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
Component.options.__file = "src/components/layouts/left-side/default/menu/MenuItem.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-79869808", Component.options)
  } else {
    hotAPI.reload("data-v-79869808", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1440:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1441);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(36)("f5c0ea4e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-79869808\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MenuItem.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-79869808\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MenuItem.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1441:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, "\na[data-v-79869808] {\n  color: #fff;\n  position: relative;\n  display: block;\n  line-height: 21px;\n  padding: 10px 30px;\n}\na[data-v-79869808]:hover {\n    color: gold;\n}\na.active[data-v-79869808] {\n    color: #0a3c5f;\n    background-color: white;\n}\na.active i[data-v-79869808] {\n      color: #0a3c5f !important;\n}\n\n/*.submenu-content-box .listbrdr::after{\n      content: \"\";\n     display: block;\n     position: absolute;\n     width: 11px;\n     left: 25px;\n     margin-top: -21px;\n     border-top: 2px solid #888585;\n     }*/\n.submenu-content-box .listbrdr[data-v-79869808]:active {\n  color: #000;\n}\n.submenu-content a[data-v-79869808] {\n  padding: 11px 20px 10px 45px;\n  position: relative;\n}\n.submenu-content .leftmenu_icon[data-v-79869808] {\n  font-size: 14px;\n  color: inherit;\n}\n.name[data-v-79869808] {\n  vertical-align: text-bottom;\n}\n.collapse-item .card-content .card-content-box div a[data-v-79869808] {\n  padding-left: 43px;\n}\n.leftmenu_icon[data-v-79869808] {\n  margin-right: 1px;\n  line-height: 22px;\n  height: 23px;\n  width: 20px;\n  text-align: center;\n  font-size: 16px;\n  color: #fff;\n}\n", ""]);

// exports


/***/ }),

/***/ 1442:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ["link", "icon"]
});

/***/ }),

/***/ 1443:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "listbrdr" },
    [
      _c(
        "router-link",
        { staticClass: "menu-item", attrs: { to: _vm.link, exact: "" } },
        [
          _c("i", { staticClass: "leftmenu_icon", class: _vm.icon }),
          _vm._v(" "),
          _c("span", { staticClass: "name" }, [_vm._t("default")], 2)
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
    require("vue-hot-reload-api")      .rerender("data-v-79869808", module.exports)
  }
}

/***/ }),

/***/ 1444:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1445)
}
var normalizeComponent = __webpack_require__(48)
/* script */
var __vue_script__ = __webpack_require__(1447)
/* template */
var __vue_template__ = __webpack_require__(1448)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e1ac488e"
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
Component.options.__file = "src/components/layouts/left-side/left-profile/user_profile2.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e1ac488e", Component.options)
  } else {
    hotAPI.reload("data-v-e1ac488e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1445:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1446);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(36)("e03bb20e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e1ac488e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./user_profile2.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e1ac488e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./user_profile2.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1446:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, "/*user section*/\n.user_section[data-v-e1ac488e] {\n  height: 188px;\n  /*background-color:#f3f6f9;*/\n  padding: 15px 20px;\n}\n.user_section .img-wrapper[data-v-e1ac488e] {\n    width: 100px;\n    border-radius: 50%;\n    padding: 7px;\n    margin: auto;\n}\n.user_section img[data-v-e1ac488e] {\n    width: 84px;\n    border: 2px solid #ccc;\n}\n.user_section p[data-v-e1ac488e] {\n    font-size: 15px;\n}\n.user_section .leftuser_icons .logout_padd[data-v-e1ac488e] {\n    padding: 1px !important;\n}\n.user_name_max[data-v-e1ac488e] {\n  text-transform: uppercase;\n  font-weight: 700;\n  max-width: 210px;\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n  margin: 0 0 -4px;\n  padding-top: 2px;\n  padding-bottom: 5px;\n}\n.leftuser_icons div[data-v-e1ac488e] {\n  cursor: pointer;\n  padding: 1px 12px;\n  font-size: 18px;\n  background-color: transparent;\n  margin-right: 3px;\n  border-radius: 50px;\n  margin: auto;\n  width: 100%;\n  display: inline;\n}\n.user_name_max[data-v-e1ac488e],\n.leftuser_icons i[data-v-e1ac488e] {\n  color: #fff;\n}\n", ""]);

// exports


/***/ }),

/***/ 1447:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    methods: {}
});

/***/ }),

/***/ 1448:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "user_section" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "img-wrapper" }, [
            _c("img", {
              staticClass: "rounded-circle",
              attrs: {
                src: this.$store.state.user.picture,
                alt: "user not found"
              }
            })
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mt-2 mb-1 user_name_max text-center" }, [
            _vm._v(_vm._s(this.$store.state.user.name))
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "leftuser_icons col-12 compact_data" }, [
          _c("div", { staticClass: "row" }, [
            _vm._m(0),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-3 logout_padd" }, [
              _c(
                "a",
                {
                  attrs: { href: "javascript:void(0)" },
                  on: {
                    click: function($event) {
                      _vm.$store.dispatch("logout")
                    }
                  }
                },
                [_c("i", { staticClass: "fa fa-sign-out" })]
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("a", { attrs: { href: "#/user_profile", title: "User Profile" } }, [
        _c("i", { staticClass: "fa fa-user-o" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("a", { attrs: { href: "#/lockscreen", title: "Lock screen" } }, [
        _c("i", { staticClass: "fa fa-lock", attrs: { "aria-hidden": "true" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("a", { attrs: { href: "#/", title: "E-mail" } }, [
        _c("i", { staticClass: "fa fa-envelope-o" })
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e1ac488e", module.exports)
  }
}

/***/ }),

/***/ 1449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var menu_items = [{
    name: 'Dashboard',
    link: '/',
    icon: 'fa fa-home'
}, {
    name: "School",
    icon: "fa fa-files-o",
    child: [{
        name: 'Overview',
        link: '/school',
        icon: 'fa fa-angle-double-right'
    }, {
        name: 'Manage',
        link: '/school/manage',
        icon: 'fa fa-angle-double-right'
    }, {
        name: 'Create',
        link: '/school/add',
        icon: 'fa fa-angle-double-right'
    }, {
        name: 'Import',
        link: '/school/import',
        icon: 'fa fa-angle-double-right'
    }]
}, {
    name: "Staff",
    icon: "fa fa-files-o",
    child: [{
        name: 'Overview',
        link: '/staff',
        icon: 'fa fa-angle-double-right'
    }, {
        name: 'Manage',
        link: '/staff/manage',
        icon: 'fa fa-angle-double-right'
    }, {
        name: 'Create',
        link: '/staff/add',
        icon: 'fa fa-angle-double-right'
    }, {
        name: 'Import',
        link: '/staff/import',
        icon: 'fa fa-angle-double-right'
    }]
}, {
    name: "Student",
    icon: "fa fa-files-o",
    child: [{
        name: 'Overview',
        link: '/student',
        icon: 'fa fa-angle-double-right'
    }, {
        name: 'Manage',
        link: '/student/manage',
        icon: 'fa fa-angle-double-right'
    }, {
        name: 'Create',
        link: '/student/add',
        icon: 'fa fa-angle-double-right'
    }, {
        name: 'Import',
        link: '/student/import',
        icon: 'fa fa-angle-double-right'
    }]
}, {
    name: 'Attendance',
    link: '/attendance',
    icon: 'fa fa-angle-double-right'
}, {
    name: 'SBMC',
    link: '/SBMC',
    icon: 'fa fa-angle-double-right'
}, {
    name: 'Report',
    link: '/report',
    icon: 'fa fa-angle-double-right'
}];
/* harmony default export */ __webpack_exports__["a"] = (menu_items);

/***/ }),

/***/ 1450:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("aside", { staticClass: "left-aside sidebar-offcanvas" }, [
    _c("section", { staticClass: "sidebar" }, [
      _c("br"),
      _vm._v(" "),
      _c(
        "div",
        { attrs: { id: "menu", role: "navigation" } },
        [
          _c(
            "vmenu",
            [
              _vm._l(_vm.menuitems, function(item) {
                return [
                  item.title
                    ? _c("li", { staticClass: "divider mt-3 " }, [
                        _c("span", [_vm._v(_vm._s(item.name))])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  item.child
                    ? _c(
                        "vsub-menu",
                        { attrs: { title: item.name, icon: item.icon } },
                        _vm._l(item.child, function(child) {
                          return _c(
                            "vmenu-item",
                            {
                              key: child.name,
                              attrs: { link: child.link, icon: child.icon }
                            },
                            [
                              _vm._v(
                                _vm._s(child.name) +
                                  "\n                        "
                              )
                            ]
                          )
                        })
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  item.link
                    ? _c(
                        "vmenu-item",
                        { attrs: { link: item.link, icon: item.icon } },
                        [_vm._v(_vm._s(item.name) + "\n                    ")]
                      )
                    : _vm._e()
                ]
              })
            ],
            2
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ccda5a12", module.exports)
  }
}

/***/ }),

/***/ 1451:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1452)
  __webpack_require__(1454)
}
var normalizeComponent = __webpack_require__(48)
/* script */
var __vue_script__ = __webpack_require__(1456)
/* template */
var __vue_template__ = __webpack_require__(1459)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1fc4383c"
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
Component.options.__file = "src/components/layouts/header/fixed-header.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1fc4383c", Component.options)
  } else {
    hotAPI.reload("data-v-1fc4383c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1452:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1453);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(36)("007fb437", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1fc4383c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./fixed-header.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1fc4383c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./fixed-header.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1453:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, "\n.header[data-v-1fc4383c] {\n  z-index: 1030;\n}\n.header nav[data-v-1fc4383c] {\n    margin-bottom: 0;\n    height: 50px;\n    /*background: $header_color;*/\n    background-color: #4d1d03;\n    background: linear-gradient(315deg, #82162b, #650638);\n    background: -webkit-linear-gradient(315deg, #650606, #650638);\n    /*box-shadow:none;*/\n    background-size: 100% 100%;\n    -webkit-box-shadow: 0px 0px 10px #4d1d03;\n            box-shadow: 0px 0px 10px #4d1d03;\n}\n.header .navbar-right[data-v-1fc4383c] {\n    float: right;\n    margin-right: 15px;\n}\n.header .logo[data-v-1fc4383c] {\n    display: block;\n    float: left;\n    height: 50px;\n    line-height: 41px;\n    padding: 3px 10px;\n    text-align: center;\n    width: 250px;\n    background: white;\n}\n.header .logo img[data-v-1fc4383c] {\n      width: 125px;\n}\n.header .navbar-right .dropdown-item[data-v-1fc4383c] {\n    padding: 0;\n    width: 100%;\n    outline: none;\n}\n.header .navbar-right div.dropdown > a[data-v-1fc4383c] {\n    color: #000;\n}\n.header .navbar-right div.dropdown .dropdown-menu > button[data-v-1fc4383c] {\n    padding: 10px 15px;\n}\n.header .navbar-right div.dropdown.notifications-menu[data-v-1fc4383c] {\n    height: 50px;\n}\n.header .navbar-right div.dropdown.notifications-menu .noti-icon[data-v-1fc4383c] {\n      font-size: 18px;\n}\n.header .navbar-right div.dropdown > a > i[data-v-1fc4383c] {\n    font-size: 23px;\n}\n.header .navbar-right div.dropdown > a[data-v-1fc4383c] {\n    display: block;\n    padding: 12px;\n}\n.header .navbar-right div.dropdown:hover > a[data-v-1fc4383c] {\n    background-color: #ededed;\n    color: #000;\n}\n.header .navbar-right div.dropdown > a.padding-user[data-v-1fc4383c] {\n    padding-top: 8px;\n    padding-bottom: 6px;\n}\n.header nav .sidebar-toggle[data-v-1fc4383c] {\n    float: left;\n    color: red;\n    font-size: 19px;\n    padding-top: 10px;\n}\n.user_name_max[data-v-1fc4383c] {\n  display: inline-block;\n  max-width: 180px;\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n  margin: 0 0 -4px;\n}\n.noti_msg[data-v-1fc4383c] {\n  font-size: 16px;\n  padding: 10px;\n  border: 1px solid #4f90c1;\n  border-radius: 50px;\n  margin-top: 10px;\n}\n.user.user-menu > button img[data-v-1fc4383c] {\n  width: 35px;\n  height: 35px;\n}\n\n/**** END HEADER RIGHT SIDE DROPDOWNS ****/\n@media screen and (max-width: 767px) {\n.dropdown.open .dropdown-menu[data-v-1fc4383c] {\n    position: absolute;\n}\n.navbar-right > li > a[data-v-1fc4383c] {\n    padding: 10px 12px;\n}\n}\n\n/* Fix menu positions on xs screens to appear correctly and fully */\n@media (max-width: 560px) {\nbody .header .logo[data-v-1fc4383c],\n  body .header nav[data-v-1fc4383c] {\n    width: 100%;\n}\nbody .header nav .sidebar-toggle[data-v-1fc4383c] {\n    padding-left: 15px;\n}\nnav[data-v-1fc4383c] {\n    height: 100px !important;\n}\n}\n.notifications_badge_top[data-v-1fc4383c] {\n  margin-top: -28px;\n  margin-left: 10px;\n  position: absolute;\n}\n.notifications_badge_top span[data-v-1fc4383c] {\n    top: 1px;\n    left: 2px;\n    border-radius: 50%;\n}\n.notifications-menu .dropdown-item[data-v-1fc4383c] {\n  width: 100%;\n  display: block;\n}\n.dropdown-footer[data-v-1fc4383c] {\n  padding: 10px !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 1454:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1455);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(36)("479704e2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1fc4383c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./fixed-header.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1fc4383c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./fixed-header.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1455:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, "\n.wrapper {\n  margin-top: 50px;\n}\n@media screen and (max-width: 560px) {\n.wrapper {\n      margin-top: 100px;\n}\n}\n.sidebar-toggle {\n  margin-left: 10px;\n}\n.bell_bg button.btn-secondary {\n  color: #fff;\n  background-color: transparent;\n  border: none;\n  border-radius: 0;\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n}\n.bell_bg button.btn-secondary:hover {\n    background-color: #ededed !important;\n}\n.bell_bg button.btn-secondary:active {\n    color: red !important;\n}\n.bell_bg.show button {\n  background-color: #ededed !important;\n}\n.bell_bg.user_btn .dropdown-toggle {\n  padding: 7px 9px;\n}\n.tabs_cont,\n.event_date {\n  background-color: #fff !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 1456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_screenfull__ = __webpack_require__(1457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_screenfull___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_screenfull__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "vueadmin_header",

    created: function created() {

        this.setAuthenticatedUser();
    },

    methods: {
        toggle_menu: function toggle_menu() {
            this.$store.commit('left_menu', "toggle");
        },
        fullscreen: function fullscreen() {
            if (__WEBPACK_IMPORTED_MODULE_0_screenfull___default.a.enabled) {
                __WEBPACK_IMPORTED_MODULE_0_screenfull___default.a.toggle();
            }
        },
        setAuthenticatedUser: function setAuthenticatedUser() {
            var _this = this;

            this.$auth.getUser().then(function (response) {
                var data = response.data;
                data.picture = __webpack_require__(1458);
                _this.$store.dispatch('setUser', data);
                console.log(response.data);
            });
        }
    }
});

/***/ }),

/***/ 1457:
/***/ (function(module, exports) {

/*!
* screenfull
* v3.3.2 - 2017-10-27
* (c) Sindre Sorhus; MIT License
*/
(function () {
	'use strict';

	var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
	var isCommonjs = typeof module !== 'undefined' && module.exports;
	var keyboardAllowed = typeof Element !== 'undefined' && 'ALLOW_KEYBOARD_INPUT' in Element;

	var fn = (function () {
		var val;

		var fnMap = [
			[
				'requestFullscreen',
				'exitFullscreen',
				'fullscreenElement',
				'fullscreenEnabled',
				'fullscreenchange',
				'fullscreenerror'
			],
			// New WebKit
			[
				'webkitRequestFullscreen',
				'webkitExitFullscreen',
				'webkitFullscreenElement',
				'webkitFullscreenEnabled',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			// Old WebKit (Safari 5.1)
			[
				'webkitRequestFullScreen',
				'webkitCancelFullScreen',
				'webkitCurrentFullScreenElement',
				'webkitCancelFullScreen',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			[
				'mozRequestFullScreen',
				'mozCancelFullScreen',
				'mozFullScreenElement',
				'mozFullScreenEnabled',
				'mozfullscreenchange',
				'mozfullscreenerror'
			],
			[
				'msRequestFullscreen',
				'msExitFullscreen',
				'msFullscreenElement',
				'msFullscreenEnabled',
				'MSFullscreenChange',
				'MSFullscreenError'
			]
		];

		var i = 0;
		var l = fnMap.length;
		var ret = {};

		for (; i < l; i++) {
			val = fnMap[i];
			if (val && val[1] in document) {
				for (i = 0; i < val.length; i++) {
					ret[fnMap[0][i]] = val[i];
				}
				return ret;
			}
		}

		return false;
	})();

	var eventNameMap = {
		change: fn.fullscreenchange,
		error: fn.fullscreenerror
	};

	var screenfull = {
		request: function (elem) {
			var request = fn.requestFullscreen;

			elem = elem || document.documentElement;

			// Work around Safari 5.1 bug: reports support for
			// keyboard in fullscreen even though it doesn't.
			// Browser sniffing, since the alternative with
			// setTimeout is even worse.
			if (/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)) {
				elem[request]();
			} else {
				elem[request](keyboardAllowed && Element.ALLOW_KEYBOARD_INPUT);
			}
		},
		exit: function () {
			document[fn.exitFullscreen]();
		},
		toggle: function (elem) {
			if (this.isFullscreen) {
				this.exit();
			} else {
				this.request(elem);
			}
		},
		onchange: function (callback) {
			this.on('change', callback);
		},
		onerror: function (callback) {
			this.on('error', callback);
		},
		on: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.addEventListener(eventName, callback, false);
			}
		},
		off: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.removeEventListener(eventName, callback, false);
			}
		},
		raw: fn
	};

	if (!fn) {
		if (isCommonjs) {
			module.exports = false;
		} else {
			window.screenfull = false;
		}

		return;
	}

	Object.defineProperties(screenfull, {
		isFullscreen: {
			get: function () {
				return Boolean(document[fn.fullscreenElement]);
			}
		},
		element: {
			enumerable: true,
			get: function () {
				return document[fn.fullscreenElement];
			}
		},
		enabled: {
			enumerable: true,
			get: function () {
				// Coerce to boolean in case of old WebKit
				return Boolean(document[fn.fullscreenEnabled]);
			}
		}
	});

	if (isCommonjs) {
		module.exports = screenfull;
	} else {
		window.screenfull = screenfull;
	}
})();


/***/ }),

/***/ 1458:
/***/ (function(module, exports) {

module.exports = "/images/prf4.jpg?3b4ea1ffe3e8e4dd7f91cc126f3fdfdf";

/***/ }),

/***/ 1459:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("header", { staticClass: "header fixed-top" }, [
    _c(
      "nav",
      [
        _c("router-link", { staticClass: "logo", attrs: { to: "/" } }, [
          _c("img", {
            attrs: { src: __webpack_require__(1030), alt: "logo" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "float-left" }, [
          _c(
            "a",
            {
              staticClass: "sidebar-toggle",
              attrs: { href: "javascript:void(0)" },
              on: { click: _vm.toggle_menu }
            },
            [_c("i", { staticClass: "fa fa-bars" })]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "navbar-right" }, [
          _c(
            "div",
            [
              _c(
                "b-dropdown",
                {
                  staticClass: "user user-menu bell_bg user_btn",
                  attrs: { right: "", link: "" }
                },
                [
                  _c("span", { attrs: { slot: "text" }, slot: "text" }, [
                    _c("img", {
                      staticClass: "rounded-circle",
                      attrs: {
                        src: this.$store.state.user.picture,
                        alt: "User Image"
                      }
                    }),
                    _vm._v(" "),
                    _c("p", { staticClass: "user_name_max" }, [
                      _vm._v(_vm._s(this.$store.state.user.name))
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    { staticClass: "dropdown_content", attrs: { exact: "" } },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "drpodowtext",
                          attrs: { to: "/user_profile", exact: "" }
                        },
                        [
                          _c("i", { staticClass: "fa fa-user-o" }),
                          _vm._v(" Profile\n                        ")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    { staticClass: "dropdown_content", attrs: { exact: "" } },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "drpodowtext",
                          attrs: { to: "/edit_user", exact: "" }
                        },
                        [
                          _c("i", { staticClass: "fa fa-cog" }),
                          _vm._v(" Settings\n                        ")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    { staticClass: "dropdown_content", attrs: { exact: "" } },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "drpodowtext",
                          attrs: { to: "/lockscreen", exact: "" }
                        },
                        [
                          _c("i", { staticClass: "fa fa-lock" }),
                          _vm._v(" Lock\n                        ")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    { staticClass: "dropdown_content", attrs: { exact: "" } },
                    [
                      _c(
                        "a",
                        {
                          staticClass: "drpodowtext",
                          attrs: { href: "javascript:void(0)" },
                          on: {
                            click: function($event) {
                              _vm.$store.dispatch("logout")
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fa fa-sign-out" }),
                          _vm._v(" Logout\n                        ")
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
        ])
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
    require("vue-hot-reload-api")      .rerender("data-v-1fc4383c", module.exports)
  }
}

/***/ }),

/***/ 1460:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1461);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(774)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./custom.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./custom.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1461:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, "/*\nCreated by: Jyostna Designs\n\n[TABLE OF CONTENTS]\n\n1.  RESET STYLES\n2.  HEADER STYLES\n    2.1 HEADER LEFT\n    2.2 HEADER RIGHT SIDE DROPDOWNS\n3. LEFT SIDEBAR\n4. MAIN WRAPPER STYLES\n5. LEFT MENU COLLAPSE STYLES\n6. CUSTOM STYLES\n7. MEDIA QUERIES\n\n*/\n/*===import bootstrap variables===*/\n.badge {\n  color: #fff; }\n\n/*****  1.RESET STYLES  *****/\nhtml {\n  background: none repeat scroll 0 0 #fff;\n  overflow-x: hidden;\n  transition: all .25s ease-out;\n  font-size: small; }\n\nhtml,\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; }\n\nbody {\n  background: none repeat scroll 0 0 #fff;\n  overflow-x: hidden;\n  transition: all .25s ease-out;\n  font-size: small;\n  letter-spacing: 0.5px;\n  width: 100%;\n  margin: 0 auto; }\n\nbody,\n#app,\n#app > div,\n#app div.wrapper {\n  min-height: calc(100vh - 102px); }\n\nul {\n  list-style: none; }\n\nlabel {\n  font-weight: 400;\n  font-size: 14px;\n  letter-spacing: 1px; }\n\na:hover,\na {\n  text-decoration: none !important; }\n\n.table > thead > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > th,\n.table > tbody > tr > td,\n.table > tfoot > tr > th,\n.table > tfoot > tr > td {\n  vertical-align: middle; }\n\n/**Dropdown menus**/\n.dropdown-menu {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);\n  z-index: 2300;\n  margin-top: 0;\n  border: none;\n  outline: none; }\n\n/*********6. CUSTOM STYLES *********/\n.submenu-content .name {\n  vertical-align: text-top !important; }\n\n/*text-area resize*/\n.resize_vertical {\n  resize: vertical; }\n\nh4.card-header {\n  font-size: 16px; }\n\n.card {\n  margin-bottom: 25px; }\n\n/**************card bg colors*******************/\n.bg-primary-card {\n  border: 1px solid #337ab7; }\n  .bg-primary-card > .card-header {\n    background-color: #337ab7;\n    color: #fff; }\n\n.bg-info-card {\n  border: 1px solid #4fc1e9; }\n  .bg-info-card > .card-header {\n    background-color: #4fc1e9;\n    color: #fff; }\n\n.bg-warning-card {\n  border: 1px solid #fea115; }\n  .bg-warning-card > .card-header {\n    background-color: #fea115;\n    color: #fff; }\n\n.bg-danger-card {\n  border: 1px solid #fd7570; }\n  .bg-danger-card > .card-header {\n    background-color: #fd7570;\n    color: #fff; }\n\n.bg-success-card {\n  border: 1px solid #16af81; }\n  .bg-success-card > .card-header {\n    background-color: #16af81;\n    color: #fff; }\n\n.bg-primary-card:hover,\n.bg-info-card:hover,\n.bg-danger-card:hover,\n.bg-warning-card:hover,\n.bg-success-card:hover,\n.card:hover {\n  box-shadow: 1px 1px 38px -8px #8e8c8e; }\n\n.btn-link,\n.btn {\n  cursor: pointer; }\n\n/*=======hide unwanted content in print======*/\n@media print {\n  header.header,\n  aside.left-aside,\n  section.content-header,\n  #scroll {\n    display: none !important; }\n  .table-responsive {\n    display: inline-table;\n    width: 100%; } }\n\n/*=======hide unwanted content in print======*/\n/*============header styles=======*/\nheader .navbar-right .dropdown-menu {\n  padding: 0; }\n\nheader .navbar-right .dropdownheader .nav.nav-tabs,\nheader .navbar-right .dropdown-footer,\nheader .navbar-right .dropdownheader:hover .nav.nav-tabs,\nheader .navbar-right .dropdown-footer:hover {\n  background: #ccc;\n  color: #000;\n  border: 1px solid #ccc; }\n\nheader .navbar-right .show > .btn-secondary.dropdown-toggle {\n  background-color: #EEEEEE;\n  color: #000;\n  border-color: #EEEEEE; }\n\nheader .navbar-right .btn-link:focus,\nheader .navbar-right .btn-link:hover,\nheader .navbar-right .btn-link:active {\n  text-decoration: none; }\n\nheader .navbar-right .btn .btn:active {\n  border: none; }\n\nheader .navbar-right .btn-group > button {\n  vertical-align: top;\n  color: red; }\n  header .navbar-right .btn-group > button:hover {\n    background-color: #ededed;\n    color: #000; }\n\n@media (max-width: 560px) {\n  .notifications-menu .dropdown-menu.dropdown-menu-right {\n    right: -123px; } }\n\n.notifications-menu .dropdown-menu {\n  width: 300px; }\n\n.dropdownheader .nav-tabs .nav-link {\n  color: #000; }\n\n.dropdown-menu .nav-tabs .nav-link:focus,\n.dropdown-menu .nav-tabs .nav-link:hover {\n  border-color: transparent; }\n\n.dropdown-menu .nav-tabs .nav-link.active,\n.dropdown-menu .nav-tabs .nav-item.show .nav-link {\n  color: #000;\n  background-color: #eee;\n  border-left: 1px transparent;\n  border-right: 1px transparent;\n  border-top: 1px transparent; }\n\n.nav-tabs > li > a {\n  color: #000; }\n\n.drpodowtext {\n  color: #333;\n  transition: 300ms; }\n\n.drpodowtext:hover {\n  margin-left: 12px;\n  transition: 300ms; }\n\n.dropdown_content a {\n  width: 100%;\n  display: block;\n  padding: 10px 15px; }\n\n.dropdown-item img {\n  height: 50px;\n  width: 50px; }\n\n.dropdown-item.active,\n.dropdown-item:active {\n  color: #111;\n  text-decoration: none;\n  background-color: transparent; }\n\n.btn-secondary:focus,\n.btn-secondary.focus {\n  box-shadow: none; }\n\n.dropdown-toggle::after {\n  display: none; }\n\n/*============header styles=======*/\n/*====================form editors Start============*/\n.ql-container .ql-editor {\n  min-height: 20em;\n  padding-bottom: 1em;\n  max-height: 25em; }\n\n.nav-tabs:focus {\n  outline: none; }\n\n/*====================form editors end============*/\n/*=========calendar========*/\n.full-calendar-body .dates .dates-events .events-week .events-day {\n  min-height: 100px !important; }\n\n.full-calendar-header > div.header-center {\n  font-size: 18px; }\n\n/*=========calendar========*/\n/*======chartist=====*/\n.ct-series-a .ct-line,\n.ct-series-a .ct-point {\n  stroke: #8dcee4 !important; }\n\n.ct-series-b .ct-line,\n.ct-series-b .ct-point {\n  stroke: #4fc1e9 !important; }\n\n.ct-series-c .ct-line,\n.ct-series-c .ct-point {\n  stroke: #16AF81 !important; }\n\n.ct-series-d .ct-line,\n.ct-series-d .ct-point {\n  stroke: #8dcee4 !important; }\n\n/*======chartist bars=====*/\n.ct-series-a .ct-bar {\n  /* Colour of your bars */\n  stroke: #97d9ef !important; }\n\n.ct-series-b .ct-bar {\n  /* Colour of your bars */\n  stroke: #4fc1e9 !important; }\n\n.ct-label {\n  font-size: 10px;\n  color: #000; }\n\n/*======pie chart=====*/\n.ct-series-a .ct-slice-pie {\n  fill: #7faff7 !important; }\n\n.ct-series-b .ct-slice-pie {\n  fill: #6f8dd5 !important; }\n\n.ct-series-c .ct-slice-pie {\n  fill: #11bca9 !important; }\n\n.v-chartist-container {\n  height: 300px; }\n\n/*====== donut chart=====*/\n.ct-series-a .ct-slice-donut {\n  stroke: #11bca9 !important; }\n\n.ct-series-a .ct-slice-donut {\n  stroke: #6f8dd5 !important; }\n\n.ct-series-a .ct-slice-donut {\n  stroke: #7faff7 !important; }\n\n.ct-series-c .ct-slice-donut {\n  stroke: #11bca9 !important; }\n\n.ct-series-b .ct-slice-donut {\n  stroke: #6f8dd5 !important; }\n\n/*=======form-elements======*/\n.drp_align .dropdown-menu {\n  left: -100%; }\n\n.form_elemntsdropdown .dropdown-item {\n  padding: 10px 15px; }\n\n/*=======form-elements======*/\n/*========breadcrumbs====*/\n.breadcrumb1 > .breadcrumb-item + .breadcrumb-item::before {\n  content: \"\\BB\"; }\n\n.breadcrumb2 > .breadcrumb-item + .breadcrumb-item::before {\n  content: \"\\203A\" !important; }\n\n.breadcrumb3 > .breadcrumb-item + .breadcrumb-item::before {\n  content: \"\\2013   \"; }\n\n/*========breadcrumbs====*/\n/*==========datepickers=========*/\n.vdp-datepicker input,\n.vdp-datepicker select {\n  padding: .75em .5em;\n  font-size: 100%;\n  border: 1px solid #dcdccc;\n  width: 100%; }\n\n@media (max-width: 768px) {\n  .vdp-datepicker__calendar {\n    width: 100% !important; } }\n\n/*==========datepickers=========*/\n.pull-right {\n  float: right; }\n\n.car-header:first-child {\n  border: none !important; }\n", ""]);

// exports


/***/ }),

/***/ 1462:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("preloader", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: this.$store.state.preloader,
            expression: "this.$store.state.preloader"
          }
        ]
      }),
      _vm._v(" "),
      _c("vueadmin_header"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "wrapper row-offcanvas" },
        [
          _c("left_side", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: this.$store.state.left_open,
                expression: "this.$store.state.left_open"
              }
            ]
          }),
          _vm._v(" "),
          _c("right_side", [_c("router-view")], 1)
        ],
        1
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
    require("vue-hot-reload-api")      .rerender("data-v-24b4a97a", module.exports)
  }
}

/***/ }),

/***/ 764:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1414)
}
var normalizeComponent = __webpack_require__(48)
/* script */
var __vue_script__ = __webpack_require__(1416)
/* template */
var __vue_template__ = __webpack_require__(1462)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-24b4a97a"
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
Component.options.__file = "src/layout.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-24b4a97a", Component.options)
  } else {
    hotAPI.reload("data-v-24b4a97a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 774:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(777);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 777:
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })

});