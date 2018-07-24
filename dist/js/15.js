webpackJsonp([15],{

/***/ 1353:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1354);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(36)("4776ed12", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ba2735e2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./profile.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ba2735e2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./profile.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1354:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, "\ntd.views {\n    background-color: #e5e5e5 !important;\n    padding-top: 12px;\n    padding-bottom: 12px;\n    color: #555;\n}\n", ""]);

// exports


/***/ }),

/***/ 1355:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1356);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(36)("7e080e57", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ba2735e2\",\"scoped\":true,\"hasInlineConfig\":true}!./user_profile.css", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ba2735e2\",\"scoped\":true,\"hasInlineConfig\":true}!./user_profile.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1356:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// imports


// module
exports.push([module.i, "\n.profile[data-v-ba2735e2] {\n    padding-bottom: 15px;\n}\n.user-rating[data-v-ba2735e2] {\n    font-size: 16px;\n    border-right: 2px solid #ccc;\n}\n.panel-heading.data[data-v-ba2735e2] {\n    padding: 0 15px;\n}\n\n\n/*custom tabs*/\n.nav-tabs > li > a[data-v-ba2735e2] {\n    color: #888;\n    padding: 10px 20px;\n}\n.nav-tabs > li.active > a[data-v-ba2735e2]:after {\n    content: '';\n    position: absolute;\n    bottom: -1px;\n    display: block;\n    width: 70%;\n    left: 15%;\n    border-bottom: 4px solid #3399FF;\n}\n.nav-tabs > li.active > a[data-v-ba2735e2],\n.nav-tabs > li.active > a[data-v-ba2735e2]:hover,\n.nav-tabs > li.active > a[data-v-ba2735e2]:focus {\n    color: #3399FF;\n    background-color: transparent;\n    border: 0;\n    border-bottom-color: transparent;\n}\n.profile_details .tab-content[data-v-ba2735e2] {\n    padding: 20px 10px 0;\n}\n.profile_details #tab-details label[data-v-ba2735e2] {\n    font-weight: bold;\n    color: #8f8f8f;\n    border-bottom: 2px dotted #ccc;\n}\n.profile_details #tab-details p.info[data-v-ba2735e2] {\n    font-size: 16px;\n}\n.dl-horizontal dt[data-v-ba2735e2] {\n    width: 40%;\n    float: left;\n    clear: left;\n    text-align: right;\n    margin-bottom: 15px;\n    color: #777;\n}\n.dl-horizontal dd[data-v-ba2735e2] {\n    margin-left: 43%;\n}\n\n\n/*project details*/\n.nav_border > li > a[data-v-ba2735e2] {\n    padding: 10px 2px;\n    line-height: 20px;\n}\n.nav_border > li[data-v-ba2735e2]:not(:last-child) {\n    border-bottom: 1px solid #eee;\n}\n.nav.nav-stacked > li > a[data-v-ba2735e2]:hover,\n.nav.nav-stacked > li > a[data-v-ba2735e2]:focus {\n    background-color: #f9f9f9;\n}\n\n\n/*connections*/\n.connection[data-v-ba2735e2] {\n    -webkit-box-shadow: 0 0 5px #ccc;\n            box-shadow: 0 0 5px #ccc;\n    border: 1px solid #efefef;\n    margin: 25px 0 0;\n    position: relative;\n}\n.connect-head[data-v-ba2735e2] {\n    width: 100%;\n    padding: 12px 0;\n    position: relative;\n}\n.connect-head img[data-v-ba2735e2] {\n    width: 80px;\n}\n.connect-head p[data-v-ba2735e2] {\n    margin-bottom: 0;\n}\n.connect-data[data-v-ba2735e2] {\n    width: 50%;\n    float: left;\n    color: #FFF;\n    padding: 14px 0;\n    position: relative;\n}\n.connect-data .count[data-v-ba2735e2] {\n    font-size: 18px;\n}\n.connect-bg1[data-v-ba2735e2] {\n    background-color: #394263;\n}\n.connect-bg2[data-v-ba2735e2] {\n    background-color: #3B3F40;\n}\n.connect-bg3[data-v-ba2735e2] {\n    background-color: #4A2E2B;\n}\n.connect-bg4[data-v-ba2735e2] {\n    background-color: #583A63;\n}\n\n\n/*connections end*/\n\n\n/*blogs*/\n.blog-border[data-v-ba2735e2] {\n    -webkit-box-shadow: 0 0 5px #ccc;\n            box-shadow: 0 0 5px #ccc;\n    cursor: pointer;\n    margin: 20px 0;\n}\n#blog p[data-v-ba2735e2] {\n    margin: 0;\n}\n.blog-image[data-v-ba2735e2] {\n    width: 70px;\n}\n.blog-heading[data-v-ba2735e2] {\n    position: relative;\n}\n.blog-heading .post-by[data-v-ba2735e2] {\n    display: block;\n}\n#blog .sharedpost-image[data-v-ba2735e2] {\n    width: 100%;\n    height: 220px;\n}\n#blog .attached-image[data-v-ba2735e2] {\n    width: 100%;\n    height: 170px;\n}\n#blog .posted-image[data-v-ba2735e2] {\n    width: 100%;\n    height: 277px;\n}\n.blog-desc[data-v-ba2735e2] {\n    position: absolute;\n    bottom: 0;\n    padding: 10px 13px;\n    background-color: rgba(0, 0, 0, .3);\n    width: 100%;\n    color: #FFF;\n}\n\n\n/*end of blogs*/\n.badge[data-v-ba2735e2] {\n    display: inline-block;\n    min-width: 10px;\n    padding: 3px 7px;\n    padding-top: 3px;\n    padding-right: 7px;\n    padding-bottom: 3px;\n    padding-left: 7px;\n    font-size: 12px;\n    color: #fff;\n    vertical-align: middle;\n    border-radius: 10px;\n}\n.project-deatails a[data-v-ba2735e2] {\n    width: 100%;\n}\n.profile-thumb[data-v-ba2735e2] {\n    height: 150px;\n    width: 150px;\n}\n", ""]);

// exports


/***/ }),

/***/ 1357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_plugins_scroll_vScroll_vue__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_plugins_scroll_vScroll_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_plugins_scroll_vScroll_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_js_modal__ = __webpack_require__(1358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_js_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_js_modal__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vue_js_modal___default.a);

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "user_profile",
    components: {
        vScroll: __WEBPACK_IMPORTED_MODULE_1_components_plugins_scroll_vScroll_vue___default.a
    },
    data: function data() {
        return {
            staffInfo: null,
            schoolName: ''
        };
    },

    methods: {
        show: function show() {
            this.$modal.show('hello-world');
        },
        hide: function hide() {
            this.$modal.hide('hello-world');
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.$staff.staffProfile(this.$route.params.id).then(function (data) {
            _this.staffInfo = data.data;
            _this.schoolName = data.school.data.school_name;
            // console.log()
        });
    },
    destroyed: function destroyed() {}
});

/***/ }),

/***/ 1358:
/***/ (function(module, exports, __webpack_require__) {

!function(root, factory) {
     true ? module.exports = factory() : "function" == typeof define && define.amd ? define([], factory) : "object" == typeof exports ? exports["vue-js-modal"] = factory() : root["vue-js-modal"] = factory();
}(this, function() {
    return function(modules) {
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: !1,
                exports: {}
            };
            return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
            module.l = !0, module.exports;
        }
        var installedModules = {};
        return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
        __webpack_require__.i = function(value) {
            return value;
        }, __webpack_require__.d = function(exports, name, getter) {
            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                configurable: !1,
                enumerable: !0,
                get: getter
            });
        }, __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function() {
                return module.default;
            } : function() {
                return module;
            };
            return __webpack_require__.d(getter, "a", getter), getter;
        }, __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        }, __webpack_require__.p = "/dist/", __webpack_require__(__webpack_require__.s = 3);
    }([ function(module, exports) {
        module.exports = function(rawScriptExports, compiledTemplate, scopeId, cssModules) {
            var esModule, scriptExports = rawScriptExports = rawScriptExports || {}, type = typeof rawScriptExports.default;
            "object" !== type && "function" !== type || (esModule = rawScriptExports, scriptExports = rawScriptExports.default);
            var options = "function" == typeof scriptExports ? scriptExports.options : scriptExports;
            if (compiledTemplate && (options.render = compiledTemplate.render, options.staticRenderFns = compiledTemplate.staticRenderFns), 
            scopeId && (options._scopeId = scopeId), cssModules) {
                var computed = options.computed || (options.computed = {});
                Object.keys(cssModules).forEach(function(key) {
                    var module = cssModules[key];
                    computed[key] = function() {
                        return module;
                    };
                });
            }
            return {
                esModule: esModule,
                exports: scriptExports,
                options: options
            };
        };
    }, function(module, exports) {
        module.exports = function() {
            var list = [];
            return list.toString = function() {
                for (var result = [], i = 0; i < this.length; i++) {
                    var item = this[i];
                    item[2] ? result.push("@media " + item[2] + "{" + item[1] + "}") : result.push(item[1]);
                }
                return result.join("");
            }, list.i = function(modules, mediaQuery) {
                "string" == typeof modules && (modules = [ [ null, modules, "" ] ]);
                for (var alreadyImportedModules = {}, i = 0; i < this.length; i++) {
                    var id = this[i][0];
                    "number" == typeof id && (alreadyImportedModules[id] = !0);
                }
                for (i = 0; i < modules.length; i++) {
                    var item = modules[i];
                    "number" == typeof item[0] && alreadyImportedModules[item[0]] || (mediaQuery && !item[2] ? item[2] = mediaQuery : mediaQuery && (item[2] = "(" + item[2] + ") and (" + mediaQuery + ")"), 
                    list.push(item));
                }
            }, list;
        };
    }, function(module, exports, __webpack_require__) {
        function addStylesToDom(styles) {
            for (var i = 0; i < styles.length; i++) {
                var item = styles[i], domStyle = stylesInDom[item.id];
                if (domStyle) {
                    domStyle.refs++;
                    for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j](item.parts[j]);
                    for (;j < item.parts.length; j++) domStyle.parts.push(addStyle(item.parts[j]));
                    domStyle.parts.length > item.parts.length && (domStyle.parts.length = item.parts.length);
                } else {
                    for (var parts = [], j = 0; j < item.parts.length; j++) parts.push(addStyle(item.parts[j]));
                    stylesInDom[item.id] = {
                        id: item.id,
                        refs: 1,
                        parts: parts
                    };
                }
            }
        }
        function createStyleElement() {
            var styleElement = document.createElement("style");
            return styleElement.type = "text/css", head.appendChild(styleElement), styleElement;
        }
        function addStyle(obj) {
            var update, remove, styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]');
            if (styleElement) {
                if (isProduction) return noop;
                styleElement.parentNode.removeChild(styleElement);
            }
            if (isOldIE) {
                var styleIndex = singletonCounter++;
                styleElement = singletonElement || (singletonElement = createStyleElement()), update = applyToSingletonTag.bind(null, styleElement, styleIndex, !1), 
                remove = applyToSingletonTag.bind(null, styleElement, styleIndex, !0);
            } else styleElement = createStyleElement(), update = applyToTag.bind(null, styleElement), 
            remove = function() {
                styleElement.parentNode.removeChild(styleElement);
            };
            return update(obj), function(newObj) {
                if (newObj) {
                    if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) return;
                    update(obj = newObj);
                } else remove();
            };
        }
        function applyToSingletonTag(styleElement, index, remove, obj) {
            var css = remove ? "" : obj.css;
            if (styleElement.styleSheet) styleElement.styleSheet.cssText = replaceText(index, css); else {
                var cssNode = document.createTextNode(css), childNodes = styleElement.childNodes;
                childNodes[index] && styleElement.removeChild(childNodes[index]), childNodes.length ? styleElement.insertBefore(cssNode, childNodes[index]) : styleElement.appendChild(cssNode);
            }
        }
        function applyToTag(styleElement, obj) {
            var css = obj.css, media = obj.media, sourceMap = obj.sourceMap;
            if (media && styleElement.setAttribute("media", media), sourceMap && (css += "\n/*# sourceURL=" + sourceMap.sources[0] + " */", 
            css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */"), 
            styleElement.styleSheet) styleElement.styleSheet.cssText = css; else {
                for (;styleElement.firstChild; ) styleElement.removeChild(styleElement.firstChild);
                styleElement.appendChild(document.createTextNode(css));
            }
        }
        var hasDocument = "undefined" != typeof document;
        if ("undefined" != typeof DEBUG && DEBUG && !hasDocument) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
        var listToStyles = __webpack_require__(24), stylesInDom = {}, head = hasDocument && (document.head || document.getElementsByTagName("head")[0]), singletonElement = null, singletonCounter = 0, isProduction = !1, noop = function() {}, isOldIE = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
        module.exports = function(parentId, list, _isProduction) {
            isProduction = _isProduction;
            var styles = listToStyles(parentId, list);
            return addStylesToDom(styles), function(newList) {
                for (var mayRemove = [], i = 0; i < styles.length; i++) {
                    var item = styles[i], domStyle = stylesInDom[item.id];
                    domStyle.refs--, mayRemove.push(domStyle);
                }
                newList ? (styles = listToStyles(parentId, newList), addStylesToDom(styles)) : styles = [];
                for (var i = 0; i < mayRemove.length; i++) {
                    var domStyle = mayRemove[i];
                    if (0 === domStyle.refs) {
                        for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();
                        delete stylesInDom[domStyle.id];
                    }
                }
            };
        };
        var replaceText = function() {
            var textStore = [];
            return function(index, replacement) {
                return textStore[index] = replacement, textStore.filter(Boolean).join("\n");
            };
        }();
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _Modal = __webpack_require__(6), _Modal2 = _interopRequireDefault(_Modal), _Dialog = __webpack_require__(5), _Dialog2 = _interopRequireDefault(_Dialog), _ModalsContainer = __webpack_require__(7), _ModalsContainer2 = _interopRequireDefault(_ModalsContainer), Plugin = {
            install: function(Vue) {
                var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.installed || (this.installed = !0, this.event = new Vue(), this.dynamicContainer = null, 
                this.componentName = options.componentName || "modal", Vue.prototype.$modal = {
                    _setDynamicContainer: function(dynamicContainer) {
                        Plugin.dynamicContainer = dynamicContainer;
                    },
                    show: function(modal, paramsOrProps, params) {
                        var events = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        "string" == typeof modal ? Plugin.event.$emit("toggle", modal, !0, paramsOrProps) : null === Plugin.dynamicContainer ? console.warn("[vue-js-modal] In order to render dynamic modals, a <modals-container> component must be present on the page") : Plugin.dynamicContainer.add(modal, paramsOrProps, params, events);
                    },
                    hide: function(name, params) {
                        Plugin.event.$emit("toggle", name, !1, params);
                    },
                    toggle: function(name, params) {
                        Plugin.event.$emit("toggle", name, void 0, params);
                    }
                }, Vue.component(this.componentName, _Modal2.default), options.dialog && Vue.component("v-dialog", _Dialog2.default), 
                options.dynamic && Vue.component("modals-container", _ModalsContainer2.default));
            }
        };
        exports.default = Plugin;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var inRange = exports.inRange = function(from, to, value) {
            return value < from ? from : value > to ? to : value;
        };
        exports.default = {
            inRange: inRange
        };
    }, function(module, exports, __webpack_require__) {
        __webpack_require__(21);
        var Component = __webpack_require__(0)(__webpack_require__(8), __webpack_require__(18), null, null);
        Component.options.__file = "D:\\Projects\\vue\\vue-js-modal\\src\\Dialog.vue", Component.esModule && Object.keys(Component.esModule).some(function(key) {
            return "default" !== key && "__esModule" !== key;
        }) && console.error("named exports are not supported in *.vue files."), Component.options.functional && console.error("[vue-loader] Dialog.vue: functional components are not supported with templates, they should use render functions."), 
        module.exports = Component.exports;
    }, function(module, exports, __webpack_require__) {
        __webpack_require__(22);
        var Component = __webpack_require__(0)(__webpack_require__(9), __webpack_require__(19), null, null);
        Component.options.__file = "D:\\Projects\\vue\\vue-js-modal\\src\\Modal.vue", Component.esModule && Object.keys(Component.esModule).some(function(key) {
            return "default" !== key && "__esModule" !== key;
        }) && console.error("named exports are not supported in *.vue files."), Component.options.functional && console.error("[vue-loader] Modal.vue: functional components are not supported with templates, they should use render functions."), 
        module.exports = Component.exports;
    }, function(module, exports, __webpack_require__) {
        var Component = __webpack_require__(0)(__webpack_require__(10), __webpack_require__(17), null, null);
        Component.options.__file = "D:\\Projects\\vue\\vue-js-modal\\src\\ModalsContainer.vue", 
        Component.esModule && Object.keys(Component.esModule).some(function(key) {
            return "default" !== key && "__esModule" !== key;
        }) && console.error("named exports are not supported in *.vue files."), Component.options.functional && console.error("[vue-loader] ModalsContainer.vue: functional components are not supported with templates, they should use render functions."), 
        module.exports = Component.exports;
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = {
            name: "VueJsDialog",
            props: {
                width: {
                    type: [ Number, String ],
                    default: 400
                },
                clickToClose: {
                    type: Boolean,
                    default: !0
                },
                transition: {
                    type: String,
                    default: "fade"
                }
            },
            data: function() {
                return {
                    params: {},
                    defaultButtons: [ {
                        title: "CLOSE"
                    } ]
                };
            },
            computed: {
                buttons: function() {
                    return this.params.buttons || this.defaultButtons;
                },
                buttonStyle: function() {
                    return {
                        flex: "1 1 " + 100 / this.buttons.length + "%"
                    };
                }
            },
            methods: {
                beforeOpened: function(event) {
                    window.addEventListener("keyup", this.onKeyUp), this.params = event.params || {}, 
                    this.$emit("before-opened", event);
                },
                beforeClosed: function(event) {
                    window.removeEventListener("keyup", this.onKeyUp), this.params = {}, this.$emit("before-closed", event);
                },
                click: function(i, event) {
                    var source = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "click", button = this.buttons[i];
                    button && "function" == typeof button.handler ? button.handler(i, event, {
                        source: source
                    }) : this.$modal.hide("dialog");
                },
                onKeyUp: function(event) {
                    if (13 === event.which && this.buttons.length > 0) {
                        var buttonIndex = 1 === this.buttons.length ? 0 : this.buttons.findIndex(function(button) {
                            return button.default;
                        });
                        -1 !== buttonIndex && this.click(buttonIndex, event, "keypress");
                    }
                }
            }
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _index = __webpack_require__(3), _index2 = _interopRequireDefault(_index), _Resizer = __webpack_require__(16), _Resizer2 = _interopRequireDefault(_Resizer), _util = __webpack_require__(4), _parser = __webpack_require__(12), _parser2 = _interopRequireDefault(_parser);
        exports.default = {
            name: "VueJsModal",
            props: {
                name: {
                    required: !0,
                    type: String
                },
                delay: {
                    type: Number,
                    default: 0
                },
                resizable: {
                    type: Boolean,
                    default: !1
                },
                adaptive: {
                    type: Boolean,
                    default: !1
                },
                draggable: {
                    type: [ Boolean, String ],
                    default: !1
                },
                scrollable: {
                    type: Boolean,
                    default: !1
                },
                reset: {
                    type: Boolean,
                    default: !1
                },
                transition: {
                    type: String
                },
                clickToClose: {
                    type: Boolean,
                    default: !0
                },
                classes: {
                    type: [ String, Array ],
                    default: "v--modal"
                },
                minWidth: {
                    type: Number,
                    default: 0,
                    validator: function(value) {
                        return value >= 0;
                    }
                },
                minHeight: {
                    type: Number,
                    default: 0,
                    validator: function(value) {
                        return value >= 0;
                    }
                },
                maxWidth: {
                    type: Number,
                    default: 1 / 0
                },
                maxHeight: {
                    type: Number,
                    default: 1 / 0
                },
                width: {
                    type: [ Number, String ],
                    default: 600,
                    validator: function(value) {
                        if ("string" == typeof value) {
                            var width = (0, _parser2.default)(value);
                            return ("%" === width.type || "px" === width.type) && width.value > 0;
                        }
                        return value >= 0;
                    }
                },
                height: {
                    type: [ Number, String ],
                    default: 300,
                    validator: function(value) {
                        if ("string" == typeof value) {
                            if ("auto" === value) return !0;
                            var height = (0, _parser2.default)(value);
                            return ("%" === height.type || "px" === height.type) && height.value > 0;
                        }
                        return value >= 0;
                    }
                },
                pivotX: {
                    type: Number,
                    default: .5,
                    validator: function(value) {
                        return value >= 0 && value <= 1;
                    }
                },
                pivotY: {
                    type: Number,
                    default: .5,
                    validator: function(value) {
                        return value >= 0 && value <= 1;
                    }
                }
            },
            components: {
                Resizer: _Resizer2.default
            },
            data: function() {
                return {
                    visible: !1,
                    visibility: {
                        modal: !1,
                        overlay: !1
                    },
                    shift: {
                        left: 0,
                        top: 0
                    },
                    modal: {
                        width: 0,
                        widthType: "px",
                        height: 0,
                        heightType: "px",
                        renderedHeight: 0
                    },
                    window: {
                        width: 0,
                        height: 0
                    },
                    mutationObserver: null
                };
            },
            watch: {
                visible: function(value) {
                    var _this = this;
                    value ? (this.visibility.overlay = !0, setTimeout(function() {
                        _this.visibility.modal = !0, _this.$nextTick(function() {
                            _this.addDraggableListeners(), _this.callAfterEvent(!0);
                        });
                    }, this.delay)) : (this.visibility.modal = !1, setTimeout(function() {
                        _this.visibility.overlay = !1, _this.$nextTick(function() {
                            _this.removeDraggableListeners(), _this.callAfterEvent(!1);
                        });
                    }, this.delay));
                }
            },
            created: function() {
                this.setInitialSize();
            },
            beforeMount: function() {
                var _this2 = this;
                if (_index2.default.event.$on("toggle", function(name, state, params) {
                    name === _this2.name && (void 0 === state && (state = !_this2.visible), _this2.toggle(state, params));
                }), window.addEventListener("resize", this.onWindowResize), this.onWindowResize(), 
                this.scrollable && !this.isAutoHeight && console.warn('Modal "' + this.name + '" has scrollable flag set to true but height is not "auto" (' + this.height + ")"), 
                this.isAutoHeight) {
                    var MutationObserver = function() {
                        for (var prefixes = [ "", "WebKit", "Moz", "O", "Ms" ], i = 0; i < prefixes.length; i++) {
                            var name = prefixes[i] + "MutationObserver";
                            if (name in window) return window[name];
                        }
                        return !1;
                    }();
                    MutationObserver && (this.mutationObserver = new MutationObserver(function(mutations) {
                        _this2.updateRenderedHeight();
                    }));
                }
                this.clickToClose && window.addEventListener("keyup", this.onEscapeKeyUp);
            },
            beforeDestroy: function() {
                window.removeEventListener("resize", this.onWindowResize), this.clickToClose && window.removeEventListener("keyup", this.onEscapeKeyUp);
            },
            computed: {
                isAutoHeight: function() {
                    return "auto" === this.modal.heightType;
                },
                position: function() {
                    var window = this.window, shift = this.shift, pivotX = this.pivotX, pivotY = this.pivotY, trueModalWidth = this.trueModalWidth, trueModalHeight = this.trueModalHeight, maxLeft = window.width - trueModalWidth, maxTop = window.height - trueModalHeight, left = shift.left + pivotX * maxLeft, top = shift.top + pivotY * maxTop;
                    return {
                        left: (0, _util.inRange)(0, maxLeft, left),
                        top: (0, _util.inRange)(0, maxTop, top)
                    };
                },
                trueModalWidth: function() {
                    var window = this.window, modal = this.modal, adaptive = this.adaptive, minWidth = this.minWidth, maxWidth = this.maxWidth, value = "%" === modal.widthType ? window.width / 100 * modal.width : modal.width, max = Math.min(window.width, maxWidth);
                    return adaptive ? (0, _util.inRange)(minWidth, max, value) : value;
                },
                trueModalHeight: function() {
                    var window = this.window, modal = this.modal, isAutoHeight = this.isAutoHeight, adaptive = this.adaptive, maxHeight = this.maxHeight, value = "%" === modal.heightType ? window.height / 100 * modal.height : modal.height;
                    if (isAutoHeight) return this.modal.renderedHeight;
                    var max = Math.min(window.height, maxHeight);
                    return adaptive ? (0, _util.inRange)(this.minHeight, max, value) : value;
                },
                overlayClass: function() {
                    return {
                        "v--modal-overlay": !0,
                        scrollable: this.scrollable && this.isAutoHeight
                    };
                },
                backgroundClickClass: function() {
                    return [ "v--modal-background-click" ];
                },
                modalClass: function() {
                    return [ "v--modal-box", this.classes ];
                },
                modalStyle: function() {
                    return {
                        top: this.position.top + "px",
                        left: this.position.left + "px",
                        width: this.trueModalWidth + "px",
                        height: this.isAutoHeight ? "auto" : this.trueModalHeight + "px"
                    };
                }
            },
            methods: {
                setInitialSize: function() {
                    var modal = this.modal, width = (0, _parser2.default)(this.width), height = (0, 
                    _parser2.default)(this.height);
                    modal.width = width.value, modal.widthType = width.type, modal.height = height.value, 
                    modal.heightType = height.type;
                },
                onEscapeKeyUp: function(event) {
                    27 === event.which && this.visible && this.$modal.hide(this.name);
                },
                onWindowResize: function() {
                    this.window.width = window.innerWidth, this.window.height = window.innerHeight;
                },
                genEventObject: function(params) {
                    var eventData = {
                        name: this.name,
                        timestamp: Date.now(),
                        canceled: !1,
                        ref: this.$refs.modal
                    };
                    return Object.assign(eventData, params || {});
                },
                onModalResize: function(event) {
                    this.modal.widthType = "px", this.modal.width = event.size.width, this.modal.heightType = "px", 
                    this.modal.height = event.size.height;
                    var size = this.modal.size, resizeEvent = this.genEventObject({
                        size: size
                    });
                    this.$emit("resize", resizeEvent);
                },
                toggle: function(state, params) {
                    var reset = this.reset, scrollable = this.scrollable, visible = this.visible;
                    if (visible !== state) {
                        var beforeEventName = visible ? "before-close" : "before-open";
                        "before-open" === beforeEventName ? (document.activeElement && document.activeElement.blur(), 
                        reset && (this.setInitialSize(), this.shift.left = 0, this.shift.top = 0), scrollable && (document.getElementsByTagName("html")[0].classList.add("v--modal-block-scroll"), 
                        document.body.classList.add("v--modal-block-scroll"))) : scrollable && (document.getElementsByTagName("html")[0].classList.remove("v--modal-block-scroll"), 
                        document.body.classList.remove("v--modal-block-scroll"));
                        var stopEventExecution = !1, stop = function() {
                            stopEventExecution = !0;
                        }, beforeEvent = this.genEventObject({
                            stop: stop,
                            state: state,
                            params: params
                        });
                        this.$emit(beforeEventName, beforeEvent), stopEventExecution || (this.visible = state);
                    }
                },
                getDraggableElement: function() {
                    var selector = "string" != typeof this.draggable ? ".v--modal-box" : this.draggable;
                    if (selector) {
                        var handler = this.$refs.overlay.querySelector(selector);
                        if (handler) return handler;
                    }
                },
                onBackgroundClick: function() {
                    this.clickToClose && this.toggle(!1);
                },
                addDraggableListeners: function() {
                    var _this3 = this;
                    if (this.draggable) {
                        var dragger = this.getDraggableElement();
                        if (dragger) {
                            var startX = 0, startY = 0, cachedShiftX = 0, cachedShiftY = 0, getPosition = function(event) {
                                return event.touches && event.touches.length > 0 ? event.touches[0] : event;
                            }, mousedown = function(event) {
                                var target = event.target;
                                if (!target || "INPUT" !== target.nodeName) {
                                    var _getPosition = getPosition(event), clientX = _getPosition.clientX, clientY = _getPosition.clientY;
                                    document.addEventListener("mousemove", _mousemove), document.addEventListener("mouseup", _mouseup), 
                                    document.addEventListener("touchmove", _mousemove), document.addEventListener("touchend", _mouseup), 
                                    startX = clientX, startY = clientY, cachedShiftX = _this3.shift.left, cachedShiftY = _this3.shift.top;
                                }
                            }, _mousemove = function(event) {
                                var _getPosition2 = getPosition(event), clientX = _getPosition2.clientX, clientY = _getPosition2.clientY;
                                _this3.shift.left = cachedShiftX + clientX - startX, _this3.shift.top = cachedShiftY + clientY - startY, 
                                event.preventDefault();
                            }, _mouseup = function _mouseup(event) {
                                document.removeEventListener("mousemove", _mousemove), document.removeEventListener("mouseup", _mouseup), 
                                document.removeEventListener("touchmove", _mousemove), document.removeEventListener("touchend", _mouseup), 
                                event.preventDefault();
                            };
                            dragger.addEventListener("mousedown", mousedown), dragger.addEventListener("touchstart", mousedown);
                        }
                    }
                },
                removeDraggableListeners: function() {},
                callAfterEvent: function(state) {
                    state ? this.connectObserver() : this.disconnectObserver();
                    var eventName = state ? "opened" : "closed", event = this.genEventObject({
                        state: state
                    });
                    this.$emit(eventName, event);
                },
                updateRenderedHeight: function() {
                    this.$refs.modal && (this.modal.renderedHeight = this.$refs.modal.getBoundingClientRect().height);
                },
                connectObserver: function() {
                    this.mutationObserver && this.mutationObserver.observe(this.$refs.modal, {
                        childList: !0,
                        attributes: !0,
                        subtree: !0
                    });
                },
                disconnectObserver: function() {
                    this.mutationObserver && this.mutationObserver.disconnect();
                }
            }
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = {
            data: function() {
                return {
                    uid: 0,
                    modals: []
                };
            },
            created: function() {
                this.$modal._setDynamicContainer(this);
            },
            methods: {
                add: function(modal, params, config, events) {
                    var _this = this, id = this.uid++;
                    config = config ? Object.assign({}, config) : {}, config.name || (config.name = "_dynamic-modal-" + id), 
                    this.modals.push({
                        id: id,
                        component: modal,
                        params: params || {},
                        config: config,
                        events: events
                    }), this.$nextTick(function() {
                        _this.$modal.show(config.name);
                    });
                },
                remove: function(id) {
                    for (var i in this.modals) if (this.modals[i].id === id) return void this.modals.splice(i, 1);
                }
            }
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _util = __webpack_require__(4);
        exports.default = {
            name: "VueJsModalResizer",
            props: {
                minHeight: {
                    type: Number,
                    default: 0
                },
                minWidth: {
                    type: Number,
                    default: 0
                }
            },
            data: function() {
                return {
                    clicked: !1,
                    size: {}
                };
            },
            mounted: function() {
                this.$el.addEventListener("mousedown", this.start, !1);
            },
            computed: {
                className: function() {
                    return {
                        "vue-modal-resizer": !0,
                        clicked: this.clicked
                    };
                }
            },
            methods: {
                start: function(event) {
                    this.clicked = !0, window.addEventListener("mousemove", this.mousemove, !1), window.addEventListener("mouseup", this.stop, !1), 
                    event.stopPropagation(), event.preventDefault();
                },
                stop: function() {
                    this.clicked = !1, window.removeEventListener("mousemove", this.mousemove, !1), 
                    window.removeEventListener("mouseup", this.stop, !1), this.$emit("resize-stop", {
                        element: this.$el.parentElement,
                        size: this.size
                    });
                },
                mousemove: function(event) {
                    this.resize(event);
                },
                resize: function(event) {
                    var el = this.$el.parentElement;
                    if (el) {
                        var width = event.clientX - el.offsetLeft, height = event.clientY - el.offsetTop;
                        width = (0, _util.inRange)(this.minWidth, window.innerWidth, width), height = (0, 
                        _util.inRange)(this.minHeight, window.innerHeight, height), this.size = {
                            width: width,
                            height: height
                        }, el.style.width = width + "px", el.style.height = height + "px", this.$emit("resize", {
                            element: el,
                            size: this.size
                        });
                    }
                }
            }
        };
    }, function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }, types = [ {
            name: "px",
            regexp: new RegExp("^[-+]?[0-9]*.?[0-9]+px$")
        }, {
            name: "%",
            regexp: new RegExp("^[-+]?[0-9]*.?[0-9]+%$")
        }, {
            name: "px",
            regexp: new RegExp("^[-+]?[0-9]*.?[0-9]+$")
        } ], getType = function(value) {
            if ("auto" === value) return {
                type: value,
                value: 0
            };
            for (var i = 0; i < types.length; i++) {
                var type = types[i];
                if (type.regexp.test(value)) return {
                    type: type.name,
                    value: parseFloat(value)
                };
            }
            return {
                type: "",
                value: value
            };
        }, parse = exports.parse = function(value) {
            switch (void 0 === value ? "undefined" : _typeof(value)) {
              case "number":
                return {
                    type: "px",
                    value: value
                };

              case "string":
                return getType(value);

              default:
                return {
                    type: "",
                    value: value
                };
            }
        };
        exports.default = parse;
    }, function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(1)(), exports.push([ module.i, "\n.vue-dialog div {\r\n  box-sizing: border-box;\n}\n.vue-dialog .dialog-flex {\r\n  width: 100%;\r\n  height: 100%;\n}\n.vue-dialog .dialog-content {\r\n  flex: 1 0 auto;\r\n  width: 100%;\r\n  padding: 15px;\r\n  font-size: 14px;\n}\n.vue-dialog .dialog-c-title {\r\n  font-weight: 600;\r\n  padding-bottom: 15px;\n}\n.vue-dialog .dialog-c-text {\n}\n.vue-dialog .vue-dialog-buttons {\r\n  display: flex;\r\n  flex: 0 1 auto;\r\n  width: 100%;\r\n  border-top: 1px solid #eee;\n}\n.vue-dialog .vue-dialog-buttons-none {\r\n  width: 100%;\r\n  padding-bottom: 15px;\n}\n.vue-dialog-button {\r\n  font-size: 12px !important;\r\n  background: transparent;\r\n  padding: 0;\r\n  margin: 0;\r\n  border: 0;\r\n  cursor: pointer;\r\n  box-sizing: border-box;\r\n  line-height: 40px;\r\n  height: 40px;\r\n  color: inherit;\r\n  font: inherit;\r\n  outline: none;\n}\n.vue-dialog-button:hover {\r\n  background: rgba(0, 0, 0, 0.01);\n}\n.vue-dialog-button:active {\r\n  background: rgba(0, 0, 0, 0.025);\n}\n.vue-dialog-button:not(:first-of-type) {\r\n  border-left: 1px solid #eee;\n}\r\n", "" ]);
    }, function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(1)(), exports.push([ module.i, "\n.v--modal-block-scroll {\r\n  overflow: hidden;\r\n  width: 100vw;\n}\n.v--modal-overlay {\r\n  position: fixed;\r\n  box-sizing: border-box;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.2);\r\n  z-index: 999;\r\n  opacity: 1;\n}\n.v--modal-overlay.scrollable {\r\n  height: 100%;\r\n  min-height: 100vh;\r\n  overflow-y: auto;\r\n  -webkit-overflow-scrolling: touch;\n}\n.v--modal-overlay .v--modal-background-click {\r\n  min-height: 100%;\r\n  width: 100%;\r\n  padding-bottom: 10px;\n}\n.v--modal-overlay .v--modal-box {\r\n  position: relative;\r\n  overflow: hidden;\r\n  box-sizing: border-box;\n}\n.v--modal-overlay.scrollable .v--modal-box {\r\n  margin-bottom: 2px;\r\n  /* transition: top 0.2s ease; */\n}\n.v--modal {\r\n  background-color: white;\r\n  text-align: left;\r\n  border-radius: 3px;\r\n  box-shadow: 0 20px 60px -2px rgba(27, 33, 58, 0.4);\r\n  padding: 0;\n}\n.v--modal.v--modal-fullscreen {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  margin: 0;\r\n  left: 0;\r\n  top: 0;\n}\n.v--modal-top-right {\r\n  display: block;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\n}\n.overlay-fade-enter-active,\r\n.overlay-fade-leave-active {\r\n  transition: all 0.2s;\n}\n.overlay-fade-enter,\r\n.overlay-fade-leave-active {\r\n  opacity: 0;\n}\n.nice-modal-fade-enter-active,\r\n.nice-modal-fade-leave-active {\r\n  transition: all 0.4s;\n}\n.nice-modal-fade-enter,\r\n.nice-modal-fade-leave-active {\r\n  opacity: 0;\r\n  transform: translateY(-20px);\n}\r\n", "" ]);
    }, function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(1)(), exports.push([ module.i, "\n.vue-modal-resizer {\r\n  display: block;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  width: 12px;\r\n  height: 12px;\r\n  right: 0;\r\n  bottom: 0;\r\n  z-index: 9999999;\r\n  background: transparent;\r\n  cursor: se-resize;\n}\n.vue-modal-resizer::after {\r\n  display: block;\r\n  position: absolute;\r\n  content: '';\r\n  background: transparent;\r\n  left: 0;\r\n  top: 0;\r\n  width: 0;\r\n  height: 0;\r\n  border-bottom: 10px solid #ddd;\r\n  border-left: 10px solid transparent;\n}\n.vue-modal-resizer.clicked::after {\r\n  border-bottom: 10px solid #369be9;\n}\r\n", "" ]);
    }, function(module, exports, __webpack_require__) {
        __webpack_require__(23);
        var Component = __webpack_require__(0)(__webpack_require__(11), __webpack_require__(20), null, null);
        Component.options.__file = "D:\\Projects\\vue\\vue-js-modal\\src\\Resizer.vue", 
        Component.esModule && Object.keys(Component.esModule).some(function(key) {
            return "default" !== key && "__esModule" !== key;
        }) && console.error("named exports are not supported in *.vue files."), Component.options.functional && console.error("[vue-loader] Resizer.vue: functional components are not supported with templates, they should use render functions."), 
        module.exports = Component.exports;
    }, function(module, exports, __webpack_require__) {
        module.exports = {
            render: function() {
                var _vm = this, _h = _vm.$createElement, _c = _vm._self._c || _h;
                return _c("div", {
                    attrs: {
                        id: "#modals-container"
                    }
                }, _vm._l(_vm.modals, function(modal) {
                    return _c("modal", _vm._g(_vm._b({
                        key: modal.id,
                        on: {
                            closed: function($event) {
                                _vm.remove(modal.id);
                            }
                        }
                    }, "modal", modal.config, !1), modal.events), [ _c(modal.component, _vm._b({
                        tag: "component",
                        on: {
                            close: function($event) {
                                _vm.$modal.hide(modal.config.name);
                            }
                        }
                    }, "component", modal.params, !1)) ], 1);
                }));
            },
            staticRenderFns: []
        }, module.exports.render._withStripped = !0;
    }, function(module, exports, __webpack_require__) {
        module.exports = {
            render: function() {
                var _vm = this, _h = _vm.$createElement, _c = _vm._self._c || _h;
                return _c("modal", {
                    attrs: {
                        name: "dialog",
                        height: "auto",
                        classes: [ "v--modal", "vue-dialog", this.params.class ],
                        width: _vm.width,
                        "pivot-y": .3,
                        adaptive: !0,
                        clickToClose: _vm.clickToClose,
                        transition: _vm.transition
                    },
                    on: {
                        "before-open": _vm.beforeOpened,
                        "before-close": _vm.beforeClosed,
                        opened: function($event) {
                            _vm.$emit("opened", $event);
                        },
                        closed: function($event) {
                            _vm.$emit("closed", $event);
                        }
                    }
                }, [ _c("div", {
                    staticClass: "dialog-content"
                }, [ _vm.params.title ? _c("div", {
                    staticClass: "dialog-c-title",
                    domProps: {
                        innerHTML: _vm._s(_vm.params.title || "")
                    }
                }) : _vm._e(), _vm._v(" "), _c("div", {
                    staticClass: "dialog-c-text",
                    domProps: {
                        innerHTML: _vm._s(_vm.params.text || "")
                    }
                }) ]), _vm._v(" "), _vm.buttons ? _c("div", {
                    staticClass: "vue-dialog-buttons"
                }, _vm._l(_vm.buttons, function(button, i) {
                    return _c("button", {
                        key: i,
                        class: button.class || "vue-dialog-button",
                        style: _vm.buttonStyle,
                        attrs: {
                            type: "button"
                        },
                        domProps: {
                            innerHTML: _vm._s(button.title)
                        },
                        on: {
                            click: function($event) {
                                $event.stopPropagation(), _vm.click(i, $event);
                            }
                        }
                    }, [ _vm._v("\n      " + _vm._s(button.title) + "\n    ") ]);
                })) : _c("div", {
                    staticClass: "vue-dialog-buttons-none"
                }) ]);
            },
            staticRenderFns: []
        }, module.exports.render._withStripped = !0;
    }, function(module, exports, __webpack_require__) {
        module.exports = {
            render: function() {
                var _vm = this, _h = _vm.$createElement, _c = _vm._self._c || _h;
                return _c("transition", {
                    attrs: {
                        name: "overlay-fade"
                    }
                }, [ _vm.visibility.overlay ? _c("div", {
                    ref: "overlay",
                    class: _vm.overlayClass,
                    attrs: {
                        "aria-expanded": _vm.visible.toString(),
                        "data-modal": _vm.name
                    }
                }, [ _c("div", {
                    class: _vm.backgroundClickClass,
                    on: {
                        mousedown: function($event) {
                            $event.stopPropagation(), _vm.onBackgroundClick($event);
                        },
                        touchstart: function($event) {
                            $event.stopPropagation(), _vm.onBackgroundClick($event);
                        }
                    }
                }, [ _c("div", {
                    staticClass: "v--modal-top-right"
                }, [ _vm._t("top-right") ], 2), _vm._v(" "), _c("transition", {
                    attrs: {
                        name: _vm.transition
                    }
                }, [ _vm.visibility.modal ? _c("div", {
                    ref: "modal",
                    class: _vm.modalClass,
                    style: _vm.modalStyle,
                    on: {
                        mousedown: function($event) {
                            $event.stopPropagation();
                        },
                        touchstart: function($event) {
                            $event.stopPropagation();
                        }
                    }
                }, [ _vm._t("default"), _vm._v(" "), _vm.resizable && !_vm.isAutoHeight ? _c("resizer", {
                    attrs: {
                        "min-width": _vm.minWidth,
                        "min-height": _vm.minHeight
                    },
                    on: {
                        resize: _vm.onModalResize
                    }
                }) : _vm._e() ], 2) : _vm._e() ]) ], 1) ]) : _vm._e() ]);
            },
            staticRenderFns: []
        }, module.exports.render._withStripped = !0;
    }, function(module, exports, __webpack_require__) {
        module.exports = {
            render: function() {
                var _vm = this, _h = _vm.$createElement;
                return (_vm._self._c || _h)("div", {
                    class: _vm.className
                });
            },
            staticRenderFns: []
        }, module.exports.render._withStripped = !0;
    }, function(module, exports, __webpack_require__) {
        var content = __webpack_require__(13);
        "string" == typeof content && (content = [ [ module.i, content, "" ] ]), content.locals && (module.exports = content.locals);
        __webpack_require__(2)("237a7ca4", content, !1);
    }, function(module, exports, __webpack_require__) {
        var content = __webpack_require__(14);
        "string" == typeof content && (content = [ [ module.i, content, "" ] ]), content.locals && (module.exports = content.locals);
        __webpack_require__(2)("2790b368", content, !1);
    }, function(module, exports, __webpack_require__) {
        var content = __webpack_require__(15);
        "string" == typeof content && (content = [ [ module.i, content, "" ] ]), content.locals && (module.exports = content.locals);
        __webpack_require__(2)("02ec91af", content, !1);
    }, function(module, exports) {
        module.exports = function(parentId, list) {
            for (var styles = [], newStyles = {}, i = 0; i < list.length; i++) {
                var item = list[i], id = item[0], css = item[1], media = item[2], sourceMap = item[3], part = {
                    id: parentId + ":" + i,
                    css: css,
                    media: media,
                    sourceMap: sourceMap
                };
                newStyles[id] ? newStyles[id].parts.push(part) : styles.push(newStyles[id] = {
                    id: id,
                    parts: [ part ]
                });
            }
            return styles;
        };
    } ]);
});

/***/ }),

/***/ 1359:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "row" },
    [
      _c(
        "div",
        { staticClass: "col-xl-4 col-lg-5" },
        [
          _vm.staffInfo
            ? _c("b-card", { staticClass: "bg-info-card" }, [
                _c("div", { staticClass: "profile text-center " }, [
                  _c("img", {
                    staticClass: "rounded-circle img-fluid profile-thumb mb-3",
                    attrs: {
                      src: this.$store.state.user.picture,
                      alt: "User Image"
                    }
                  }),
                  _vm._v(" "),
                  _c("h4", { staticClass: "text-gray" }, [
                    _vm._v(
                      _vm._s(
                        _vm.staffInfo.first_name +
                          " " +
                          _vm.staffInfo.middle_name +
                          " " +
                          _vm.staffInfo.last_name
                      )
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(this.$store.state.user.job))]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-sm-7 text-warning user-rating" },
                      [
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
                      ]
                    ),
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
                                        {
                                          staticClass: "col-6 text-right mt-1"
                                        },
                                        [_vm._v("Followers :")]
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col-6 mt-1" }, [
                                        _vm._v("1,079")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "col-6 text-right mt-1"
                                        },
                                        [_vm._v("Online Status :")]
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col-6 mt-1" }, [
                                        _vm._v("Offline")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "col-6 text-right mt-1"
                                        },
                                        [_vm._v("Last seen :")]
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col-6 mt-1" }, [
                                        _vm._v("2 Days ago")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "col-6 text-right mt-1"
                                        },
                                        [_vm._v("Last Updated :")]
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col-6 mt-1" }, [
                                        _vm._v("A Month ago")
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "col-6 text-right mt-1"
                                        },
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
                              _c(
                                "b-tab",
                                { attrs: { title: "About", active: "" } },
                                [
                                  _c("div", { staticClass: "row" }, [
                                    _c("div", { staticClass: "col-12" }, [
                                      _c("div", { staticClass: "row" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "col-4 text-right mt-2"
                                          },
                                          [_vm._v("Email :")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-8 mt-2" },
                                          [_vm._v("user@example.com")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass: "col-4 text-right mt-2"
                                          },
                                          [_vm._v("Contact :")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-8 nt-2" },
                                          [_vm._v("(394)-968-3152")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass: "col-4 text-right mt-2"
                                          },
                                          [_vm._v("D.O.B :")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-8 mt-2" },
                                          [_vm._v("6-4-1987")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass: "col-4 text-right mt-1"
                                          },
                                          [_vm._v("Address :")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "col-8 mt-1" },
                                          [
                                            _vm._v(
                                              "Westwood, 12th Street,7023 Mckinley Ave, US."
                                            )
                                          ]
                                        )
                                      ])
                                    ])
                                  ])
                                ]
                              )
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
            : _vm._e()
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
                          attrs: { type: "button", click: _vm.show() }
                        },
                        [_vm._v("Edit\n                        ")]
                      )
                    ]),
                    _c("h1", [_vm._v("Personal Details")]),
                    _vm._v(" "),
                    _c("p"),
                    _vm._v(" "),
                    _vm.staffInfo
                      ? _c("table", { staticClass: "table account-detailsg" }, [
                          _c("tbody", [
                            _c("tr", { staticClass: "m-0" }, [
                              _c("td", { staticClass: "views" }, [
                                _vm._v("First Name")
                              ]),
                              _vm._v(" "),
                              _c("td", { attrs: { colspan: "3" } }, [
                                _vm._v(" " + _vm._s(_vm.staffInfo.first_name))
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { staticClass: "views" }, [
                                _vm._v("Last Name")
                              ]),
                              _vm._v(" "),
                              _c("td", { attrs: { colspan: "3" } }, [
                                _vm._v(" " + _vm._s(_vm.staffInfo.last_name))
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { staticClass: "views" }, [
                                _vm._v("Middle Name")
                              ]),
                              _vm._v(" "),
                              _c("td", { attrs: { colspan: "3" } }, [
                                _vm._v(" " + _vm._s(_vm.staffInfo.middle_name))
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { staticClass: "views" }, [
                                _vm._v("Gender")
                              ]),
                              _vm._v(" "),
                              _c("td", { attrs: { colspan: "3" } }, [
                                _vm._v(" " + _vm._s(_vm.staffInfo.sex))
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
                                  " " + _vm._s(_vm.staffInfo.email_address)
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
                                _vm._v(" " + _vm._s(_vm.staffInfo.phone_number))
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
                                  " " + _vm._s(_vm.staffInfo.date_of_birth)
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { staticClass: "views" }, [
                                _vm._v("Place of Birth")
                              ]),
                              _vm._v(" "),
                              _c("td", { attrs: { colspan: "3" } }, [
                                _vm._v(_vm._s(_vm.staffInfo.place_of_birth))
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { staticClass: "views" }, [
                                _vm._v("State of Birth")
                              ]),
                              _vm._v(" "),
                              _c("td", { attrs: { colspan: "3" } }, [
                                _vm._v(
                                  " " + _vm._s(_vm.staffInfo.state_of_birth)
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { staticClass: "views" }, [
                                _vm._v("Local Government")
                              ]),
                              _vm._v(" "),
                              _c("td", { attrs: { colspan: "3" } }, [
                                _vm._v(
                                  " " + _vm._s(_vm.staffInfo.lga_of_origin)
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { staticClass: "views" }, [
                                _vm._v("Home Town")
                              ]),
                              _vm._v(" "),
                              _c("td", { attrs: { colspan: "3" } }, [
                                _vm._v(" " + _vm._s(_vm.staffInfo.home_town))
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { staticClass: "views" }, [
                                _vm._v("Marital Status")
                              ]),
                              _vm._v(" "),
                              _c("td", { attrs: { colspan: "3" } }, [
                                _vm._v(
                                  " " + _vm._s(_vm.staffInfo.marital_status)
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { staticClass: "views" }, [
                                _vm._v("Religious Status")
                              ]),
                              _vm._v(" "),
                              _c("td", { attrs: { colspan: "3" } }, [
                                _vm._v(
                                  " " + _vm._s(_vm.staffInfo.religious_status)
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { staticClass: "views" }, [
                                _vm._v("House Address")
                              ]),
                              _vm._v(" "),
                              _c("td", { attrs: { colspan: "3" } }, [
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.staffInfo.residential_address)
                                )
                              ])
                            ])
                          ])
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("b-tab", { attrs: { title: "PROFESSIONAL" } }, [
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
                    _c("h1", [_vm._v("Professional Record")]),
                    _vm._v(" "),
                    _c("p"),
                    _vm._v(" "),
                    _vm.staffInfo
                      ? _c("table", { staticClass: "table account-detailsg" }, [
                          _c("tbody", [
                            _c("tr", { staticClass: "m-0" }, [
                              _c("td", { staticClass: "views" }, [
                                _vm._v("School Name")
                              ]),
                              _vm._v(" "),
                              _c("td", { attrs: { colspan: "3" } }, [
                                _vm._v(" " + _vm._s(_vm.schoolName))
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { staticClass: "views" }, [
                                _vm._v("Grade/Level")
                              ]),
                              _vm._v(" "),
                              _c("td", { attrs: { colspan: "3" } }, [
                                _vm._v(" " + _vm._s(_vm.staffInfo.gl_step))
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { staticClass: "views" }, [
                                _vm._v("Salary Source")
                              ]),
                              _vm._v(" "),
                              _c("td", { attrs: { colspan: "3" } }, [
                                _vm._v(
                                  " " + _vm._s(_vm.staffInfo.salary_source)
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { staticClass: "views" }, [
                                _vm._v("Employment Year")
                              ]),
                              _vm._v(" "),
                              _c("td", { attrs: { colspan: "3" } }, [
                                _vm._v(
                                  " " + _vm._s(_vm.staffInfo.year_of_posting)
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { staticClass: "views" }, [
                                _vm._v("Staff Category")
                              ]),
                              _vm._v(" "),
                              _c("td", { attrs: { colspan: "3" } }, [
                                _vm._v(
                                  " " + _vm._s(_vm.staffInfo.staff_category)
                                )
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
      ),
      _vm._v(" "),
      _c("modal", { attrs: { name: "hello-world" } }, [
        _vm._v("\n        hello, world!\n    ")
      ])
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
    require("vue-hot-reload-api")      .rerender("data-v-ba2735e2", module.exports)
  }
}

/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1353)
  __webpack_require__(1355)
}
var normalizeComponent = __webpack_require__(48)
/* script */
var __vue_script__ = __webpack_require__(1357)
/* template */
var __vue_template__ = __webpack_require__(1359)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ba2735e2"
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
Component.options.__file = "src/components/pages/staff/profile.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ba2735e2", Component.options)
  } else {
    hotAPI.reload("data-v-ba2735e2", Component.options)
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