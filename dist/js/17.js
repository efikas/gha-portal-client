webpackJsonp([17],{

/***/ 1000:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(1001);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ 1001:
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),

/***/ 1284:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1285)
}
var normalizeComponent = __webpack_require__(48)
/* script */
var __vue_script__ = __webpack_require__(1287)
/* template */
var __vue_template__ = __webpack_require__(1288)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-47178911"
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
Component.options.__file = "src/components/pages/dashboard/partial/topCard.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47178911", Component.options)
  } else {
    hotAPI.reload("data-v-47178911", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1285:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1286);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(32)("183282b4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-47178911\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./topCard.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-47178911\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./topCard.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1286:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(false);
// imports


// module
exports.push([module.i, "\n.index2_table .table-responsive .card[data-v-47178911] {\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  margin-bottom: 0;\n}\n.index2_swiper .swiper-pagination-bullet-active[data-v-47178911] {\n  background: #08aa80;\n}\n\n/*===============================notes========*/\n.notes[data-v-47178911] {\n  line-height: 22px;\n  font-size: 13px;\n  padding: 0 15px 0 36px;\n  position: relative;\n  outline: none;\n  background: #fff;\n  background-size: 100% 30px;\n}\n.notes p[data-v-47178911] {\n  border-bottom: 1px solid #dfe8ec;\n}\n.notes[data-v-47178911]::after {\n  content: '';\n  position: absolute;\n  width: 0;\n  top: 0;\n  left: 25px;\n  bottom: 0;\n  border-left: 1px solid #0fd1c1;\n}\n.social .bg-default-card .info[data-v-47178911] {\n  font-size: 12px;\n}\n.social .bg-default-card span[data-v-47178911] {\n  display: block;\n  text-transform: uppercase;\n}\n.social .bg-default-card .value[data-v-47178911] {\n  font-size: 40px;\n  line-height: normal;\n}\n.social .bg-default-card i[data-v-47178911] {\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.social .bg-default-card:hover i[data-v-47178911] {\n  font-size: 45px;\n  -webkit-transition: 300ms;\n  transition: 300ms;\n}\n.social_cuntdata[data-v-47178911] {\n  font-weight: bold;\n  font-size: 18px;\n}\n.subscribe_btn[data-v-47178911] {\n  background-color: transparent;\n  border: 0;\n  outline: none;\n}\n.widget_social_icons[data-v-47178911] {\n  background-color: #fff;\n}\n.box_shadow[data-v-47178911] {\n  -webkit-box-shadow: 2px 2px 15px 0px #ccc;\n          box-shadow: 2px 2px 15px 0px #ccc;\n}\n.head_color[data-v-47178911] {\n  color: #686868;\n}\n.text_size[data-v-47178911] {\n  font-size: 25px;\n  color: #797f82;\n}\n.text-ash[data-v-47178911] {\n  color: #575f65;\n}\n.text_color[data-v-47178911] {\n  color: #646161 !important;\n}\n.swiper-pagination[data-v-47178911] {\n  margin: 0 !important;\n}\n.text-blue[data-v-47178911] {\n  color: #215fe2;\n}\n.progress_color2 .progress-bar[data-v-47178911] {\n  background-color: #7FAFF7;\n}\n.icon_color[data-v-47178911] {\n  font-size: 27px;\n  color: #828686;\n}\n.icon_color1[data-v-47178911] {\n  font-size: 25px;\n  color: #6e8dce;\n}\n.line[data-v-47178911] {\n  border-top: 1px solid #ccc;\n}\n.text_head_Color[data-v-47178911] {\n  color: #707373;\n}\n.below_text[data-v-47178911] {\n  color: #a2a1a1;\n}\n.index2_table th[data-v-47178911] {\n  color: #686868;\n}\n.index2_table td[data-v-47178911] {\n  color: #686868;\n}\n.user_color[data-v-47178911] {\n  color: #8e8c8e;\n}\n.count1[data-v-47178911] {\n  font-size: 18px;\n  color: #686868;\n}\n.ti_color[data-v-47178911] {\n  color: #215fe2;\n}\n.fb_color[data-v-47178911] {\n  font-size: 18px;\n  color: #3B5998;\n}\n.twi_color[data-v-47178911] {\n  color: #00aced;\n  font-size: 18px;\n}\n.gi_color[data-v-47178911] {\n  color: red;\n  font-size: 18px;\n}\n.pin_color[data-v-47178911] {\n  color: red;\n}\n.cam_color[data-v-47178911] {\n  color: green;\n}\n.events1[data-v-47178911] {\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  margin-top: 15px;\n  margin-right: -20px;\n  font-size: 18px;\n  color: #555;\n}\n.online_dot img[data-v-47178911] {\n  position: relative;\n}\n.online_dot[data-v-47178911]::after {\n  content: \"\";\n  position: absolute;\n  margin-top: -28px;\n  height: 11px;\n  width: 11px;\n  border: 2px solid #FFF;\n  border-radius: 50%;\n  background-color: green;\n  margin-left: -13px;\n}\n.conversation-list .ctext-wrap p[data-v-47178911] {\n  margin: 0;\n  padding-top: 3px;\n}\n.conversation-list .odd .ctext-wrap[data-v-47178911]:after {\n  border-color: rgba(238, 238, 242, 0);\n  left: 99%;\n  margin-right: -1px;\n  border-top: 0 solid #D8F1E4;\n  border-left: 12px solid #D8F1E4;\n  border-bottom: 14px solid transparent;\n}\n.conversation-list .ctext-wrap p[data-v-47178911] {\n  margin: 0;\n  /*padding-top: 3px;*/\n}\n.ctext-wrap p[data-v-47178911] {\n  margin-bottom: 10px;\n}\n.conversation-list .odd .conversation-text[data-v-47178911] {\n  float: right;\n  margin-right: 25px;\n  text-align: right;\n  width: 95%;\n}\n.conversation-list .ctext-wrap i[data-v-47178911] {\n  color: #777;\n  display: block;\n  font-size: 11px;\n  font-style: normal;\n  position: relative;\n}\n.conversation-list .conversers1 .ctext-wrap[data-v-47178911] {\n  background: #D8F1E4;\n}\n.conversation-list .ctext-wrap[data-v-47178911] {\n  border-radius: 3px;\n  display: inline-block;\n  padding: 5px 10px;\n  position: relative;\n  -webkit-box-shadow: 2px -2px 4px 0px rgba(0, 0, 0, 0.1);\n          box-shadow: 2px -2px 4px 0px rgba(0, 0, 0, 0.1);\n}\n.text-field[data-v-47178911] {\n  padding: 6px 10px;\n}\n.conversation-list .odd .ctext-wrap[data-v-47178911]:after {\n  border-color: rgba(238, 238, 242, 0);\n  left: 99%;\n  margin-right: -1px;\n  border-top: 0 solid #D8F1E4;\n  border-left: 12px solid #D8F1E4;\n  border-bottom: 14px solid transparent;\n}\n.conversation-list .ctext-wrap[data-v-47178911]:after {\n  right: 100%;\n  top: 0;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  margin-left: -1px;\n  border-top: 0 solid #fff;\n  border-right: 12px solid #e9f9ff;\n  border-bottom: 14px solid transparent;\n}\n.clearfix[data-v-47178911]:after {\n  clear: both;\n}\n.back_color1[data-v-47178911] {\n  width: auto;\n  height: 274px;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.conversation-list .conversation-text[data-v-47178911] {\n  float: left;\n  font-size: 13px;\n  width: 70%;\n}\n.clearfix[data-v-47178911]:before,\n.clearfix[data-v-47178911]:after {\n  content: \" \";\n  display: table;\n}\n.conversation-list .conversers2 .ctext-wrap[data-v-47178911] {\n  background: #e9f9ff;\n}\n.m-t-10[data-v-47178911] {\n  margin-top: 10px !important;\n}\n.conversation-list[data-v-47178911] {\n  width: auto;\n  height: 340px;\n  padding-left: 27px;\n}\n.profile-img[data-v-47178911] {\n  background-color: #fff;\n}\n.chat-conversation[data-v-47178911] {\n  width: 100%;\n}\n.table[data-v-47178911] {\n  /*font-weight: bold;*/\n}\n.table tr[data-v-47178911] {\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ 1287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(995);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "topCard",

    data: function data() {
        return {};
    },


    computed: {
        schools: function schools() {
            if (typeof this.$store.getters.statistics.schools !== 'undefined') return this.$store.getters.statistics ? this.$store.getters.statistics.schools.total : 'loading...';
        },
        staff: function staff() {
            if (typeof this.$store.getters.statistics.staffs !== 'undefined') return this.$store.getters.statistics ? this.$store.getters.statistics.staffs.total : 'loading...';
        },
        students: function students() {
            if (typeof this.$store.getters.statistics.students !== 'undefined') return this.$store.getters.statistics ? this.$store.getters.statistics.students.total : 'loading...';
        },
        guardians: function guardians() {
            if (typeof this.$store.getters.statistics.guardians !== 'undefined') return this.$store.getters.statistics ? this.$store.getters.statistics.guardians : 'loading...';
        }
    },

    created: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return this.$store.dispatch('loadStatistics');

                        case 2:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function created() {
            return _ref.apply(this, arguments);
        }

        return created;
    }()
});

/***/ }),

/***/ 1288:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row mb-4" }, [
      _c("div", { staticClass: "col-lg-3  col-sm-6 mb-3" }, [
        _c(
          "div",
          { staticClass: "text-center widget_social_icons box_shadow orange" },
          [
            _c("div", { staticClass: "p-2" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "text-ash" }, [
                _c("h4", { staticClass: "mb-0 mt-2 text_size" }, [
                  _vm._v(_vm._s(_vm._f("commasep")(_vm.schools)))
                ])
              ])
            ]),
            _vm._v(" "),
            _vm._m(1)
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-3  col-sm-6 mb-3" }, [
        _c(
          "div",
          { staticClass: "text-center widget_social_icons box_shadow pink" },
          [
            _c("div", { staticClass: "p-2" }, [
              _vm._m(2),
              _vm._v(" "),
              _c("div", { staticClass: "text-ash" }, [
                _c("h4", { staticClass: "mb-0 mt-2 text_size" }, [
                  _vm._v(_vm._s(_vm._f("commasep")(_vm.staff)))
                ])
              ])
            ]),
            _vm._v(" "),
            _vm._m(3)
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-3 col-md-6 mb-3" }, [
        _c(
          "div",
          { staticClass: "text-center widget_social_icons box_shadow blue" },
          [
            _c("div", { staticClass: "p-2" }, [
              _vm._m(4),
              _vm._v(" "),
              _c("div", { staticClass: "text-ash" }, [
                _c("h4", { staticClass: "mb-0 mt-2 text_size" }, [
                  _vm._v(_vm._s(_vm._f("commasep")(_vm.students)))
                ])
              ])
            ]),
            _vm._v(" "),
            _vm._m(5)
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-3  col-md-6 mb-3" }, [
        _c(
          "div",
          { staticClass: "text-center widget_social_icons box_shadow teal" },
          [
            _c("div", { staticClass: "p-2" }, [
              _vm._m(6),
              _vm._v(" "),
              _c("div", { staticClass: "text-ash" }, [
                _c("h4", { staticClass: "mb-0 mt-2 text_size" }, [
                  _vm._v(_vm._s(_vm._f("commasep")(_vm.guardians)))
                ])
              ])
            ]),
            _vm._v(" "),
            _vm._m(7)
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "widget_social_inner1" }, [
      _c("i", { staticClass: "material-icons fb_text" }, [_vm._v("home")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "p",
      { staticClass: "m-0 orange text-center widget-social_link tiny upper" },
      [
        _c(
          "a",
          { staticStyle: { display: "block" }, attrs: { href: "school" } },
          [_vm._v("Schools "), _c("i", { staticClass: "fa fa-angle-right" })]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "widget_social_inner1" }, [
      _c("i", { staticClass: "material-icons fb_text" }, [_vm._v("group")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "p",
      { staticClass: "m-0 pink text-center widget-social_link tiny upper" },
      [
        _c(
          "a",
          { staticStyle: { display: "block" }, attrs: { href: "staff" } },
          [_vm._v("Staffs "), _c("i", { staticClass: "fa fa-angle-right" })]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: " widget_social_inner1" }, [
      _c("i", { staticClass: "material-icons fb_text" }, [_vm._v("person")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "p",
      { staticClass: "m-0 blue text-center widget-social_link tiny upper" },
      [
        _c(
          "a",
          { staticStyle: { display: "block" }, attrs: { href: "student" } },
          [_vm._v("Students "), _c("i", { staticClass: "fa fa-angle-right" })]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: " widget_social_inner1" }, [
      _c("i", { staticClass: "material-icons fb_text" }, [_vm._v("people")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "p",
      { staticClass: "m-0 teal text-center widget-social_link tiny upper" },
      [
        _c("a", { staticStyle: { display: "block" }, attrs: { href: "#" } }, [
          _vm._v("Parent/Guardian\n                    "),
          _c("i", { staticClass: "fa fa-angle-right" })
        ])
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-47178911", module.exports)
  }
}

/***/ }),

/***/ 1320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_partial_topCard__ = __webpack_require__(1284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_partial_topCard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__dashboard_partial_topCard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_schoolLgaDist__ = __webpack_require__(1321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_schoolLgaDist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__partials_schoolLgaDist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__partials_schoolDistChart__ = __webpack_require__(1328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__partials_schoolDistChart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__partials_schoolDistChart__);
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
    name: "school-overview",
    components: {
        topCard: __WEBPACK_IMPORTED_MODULE_0__dashboard_partial_topCard___default.a,
        schoolLgaDistribution: __WEBPACK_IMPORTED_MODULE_1__partials_schoolLgaDist___default.a,
        schoolDistribution: __WEBPACK_IMPORTED_MODULE_2__partials_schoolDistChart___default.a
    },
    data: function data() {
        return {
            schoolsPerLgas: []
        };
    },

    methods: {
        exportExcel: function exportExcel() {
            var mimeType = 'data:application/vnd.ms-excel';
            var html = this.$refs.exportRef.innerHTML.replace(/ /g, '%20');

            var d = new Date();

            var dummy = document.createElement('a');
            dummy.href = mimeType + ', ' + '<table>' + html + '</table>';
            dummy.download = 'school distributions' + '-' + d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + '-' + d.getHours() + '-' + d.getMinutes() + '-' + d.getSeconds() + '.xls';
            dummy.click();
        }
    }
});

/***/ }),

/***/ 1321:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1322)
  __webpack_require__(1324)
}
var normalizeComponent = __webpack_require__(48)
/* script */
var __vue_script__ = __webpack_require__(1326)
/* template */
var __vue_template__ = __webpack_require__(1327)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4a082f4b"
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
Component.options.__file = "src/components/pages/school/partials/schoolLgaDist.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4a082f4b", Component.options)
  } else {
    hotAPI.reload("data-v-4a082f4b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1322:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1323);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(32)("68143842", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4a082f4b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./schoolLgaDist.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4a082f4b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./schoolLgaDist.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1323:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(false);
// imports


// module
exports.push([module.i, "\n.table td[data-v-4a082f4b] {\n    padding: 0px !important;\n}\n.table td[data-v-4a082f4b] {\n    padding: 0px !important;\n    font-size: 12px;\n}\n.table tr a[data-v-4a082f4b] {\n    cursor: pointer;\n    display: block;\n    margin: 0 !important;\n    padding: 3px;\n}\n.table a[data-v-4a082f4b]:hover {\n    text-decoration: underline !important;\n}\n\n", ""]);

// exports


/***/ }),

/***/ 1324:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1325);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(32)("7490e207", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4a082f4b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./schoolLgaDist.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4a082f4b\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./schoolLgaDist.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1325:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(false);
// imports


// module
exports.push([module.i, "\n.modal-mask[data-v-4a082f4b] {\n  position: fixed;\n  z-index: 9998;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n  display: table;\n  -webkit-transition: opacity .3s ease;\n  transition: opacity .3s ease;\n}\n.modal-wrapper[data-v-4a082f4b] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.modal-container[data-v-4a082f4b] {\n  width: 800px;\n  margin: 0px auto;\n  padding: 20px 30px;\n  background-color: #fff;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);\n          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);\n  -webkit-transition: all .3s ease;\n  transition: all .3s ease;\n  font-family: Helvetica, Arial, sans-serif;\n}\n.modal-header h3[data-v-4a082f4b] {\n  margin-top: 0;\n  color: #6b1c2b;\n}\n.modal-body[data-v-4a082f4b] {\n  margin: 20px 0;\n  height: 300px;\n  overflow: auto;\n}\n.modal-default-button[data-v-4a082f4b] {\n  float: right;\n}\n.modal-enter[data-v-4a082f4b] {\n  opacity: 0;\n}\n.modal-leave-active[data-v-4a082f4b] {\n  opacity: 0;\n}\n.modal-enter .modal-container[data-v-4a082f4b],\n.modal-leave-active .modal-container[data-v-4a082f4b] {\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1);\n}\n", ""]);

// exports


/***/ }),

/***/ 1326:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: {},
    data: function data() {
        return {
            showModal: false,
            modalTitle: '',
            columns: ['id', 'name', 'actions'],
            options: {
                sortIcon: {
                    base: 'fa',
                    up: 'fa fa-angle-up',
                    down: 'fa fa-angle-down'
                },
                // see the options API
                // skin: "table-hover table-striped table-bordered",
                perPage: 10,
                // footerHeadings: true,
                highlightMatches: true,
                pagination: {
                    chunk: 7,
                    //set dropdown to true to get dropdown instead of pagenation
                    dropdown: false
                }
            }
        };
    },

    created: function created() {
        this.$store.dispatch('lgaSchStats');
    },

    computed: {
        schools: function schools() {
            return this.$store.getters.schools;
        },
        lgaSchStats: function lgaSchStats() {
            return this.$store.getters.school_stats;
        }
    },

    methods: {
        hideModal: function hideModal(event) {
            this.showModal = false;
            event.stopPropagation();
        },
        formModalTitle: function formModalTitle(index, query) {
            this.modalTitle = '';
            if (query.category) this.modalTitle += query.category.toUpperCase() + " ";
            if (query.level) this.modalTitle += query.level.toUpperCase() + " ";
            this.modalTitle += 'SCHOOLS IN ' + ('<strong>' + this.lgaSchStats[index].name.toUpperCase() + '</strong>');
        },
        gotoLink: function gotoLink(index, query) {
            if (query.id) {
                //set the route parameter name
                if (query.category) {
                    query.category = query.category === 1 ? 'public' : 'private';
                }
                if (query.level) {
                    query.level = query.level === 'pry' ? 'primary' : 'secondary';
                }
                this.$store.commit('SET_LGA_SCHOOLS', []);
                this.$store.dispatch('lgaSchools', query);
                this.formModalTitle(index, query);
                this.showModal = true;
            }
        },
        exportExcel: function exportExcel() {
            var mimeType = 'data:application/vnd.ms-excel';
            var html = this.$refs.exportRef.innerHTML.replace(/ /g, '%20');

            var d = new Date();

            var dummy = document.createElement('a');
            dummy.href = mimeType + ', ' + '<table>' + html + '</table>';
            dummy.download = 'school distributions' + '-' + d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + '-' + d.getHours() + '-' + d.getMinutes() + '-' + d.getSeconds() + '.xls';
            dummy.click();
        }
    }
});

/***/ }),

/***/ 1327:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-lg-12" },
          [
            _c("b-card", [
              _c("div", { staticClass: "table-responsive" }, [
                _c("a", {
                  staticClass:
                    "fa fa-download icon-big btn btn-outline-primary ekiti-btn pull-right mb-2",
                  attrs: { type: "button" },
                  on: { click: _vm.exportExcel }
                }),
                _vm._v(" "),
                _c(
                  "table",
                  {
                    ref: "exportRef",
                    staticClass:
                      "table table-bordered table-striped mytableh text-center"
                  },
                  [
                    _c("thead", [
                      _c("tr", [
                        _c("th", { attrs: { rowspan: "2" } }, [_vm._v("LGA")]),
                        _vm._v(" "),
                        _c("th", { attrs: { colspan: "3" } }, [
                          _vm._v("Public")
                        ]),
                        _vm._v(" "),
                        _c("th", { attrs: { colspan: "3" } }, [
                          _vm._v("Private")
                        ]),
                        _vm._v(" "),
                        _c("th", { attrs: { rowspan: "2", align: "center" } }, [
                          _vm._v("+Primary")
                        ]),
                        _vm._v(" "),
                        _c("th", { attrs: { rowspan: "2" } }, [
                          _vm._v("+Secondary")
                        ]),
                        _vm._v(" "),
                        _c("th", { attrs: { rowspan: "2" } }, [_vm._v("Total")])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", [_vm._v("Primary")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Secondary")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Total")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Primary")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Secondary")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Total")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.lgaSchStats, function(lga, index) {
                        return _c("tr", { key: index }, [
                          _c("td", [
                            _c(
                              "a",
                              {
                                attrs: { href: "javascript:void (0)" },
                                on: {
                                  click: function($event) {
                                    _vm.gotoLink(index, { id: lga.id })
                                  }
                                }
                              },
                              [_vm._v(_vm._s(lga.name) + " ")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "a",
                              {
                                attrs: { href: "javascript:void (0)" },
                                on: {
                                  click: function($event) {
                                    _vm.gotoLink(index, {
                                      id: lga.id,
                                      category: 1,
                                      level: "pry"
                                    })
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(lga.public.primary) +
                                    "\n                                "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "a",
                              {
                                attrs: { href: "javascript:void (0)" },
                                on: {
                                  click: function($event) {
                                    _vm.gotoLink(index, {
                                      id: lga.id,
                                      category: 1,
                                      level: "sec"
                                    })
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(lga.public.secondary) +
                                    "\n                                "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "a",
                              {
                                attrs: { href: "javascript:void (0)" },
                                on: {
                                  click: function($event) {
                                    _vm.gotoLink(index, {
                                      id: lga.id,
                                      category: 1
                                    })
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(lga.public.total) +
                                    "\n                                "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "a",
                              {
                                attrs: { href: "javascript:void (0)" },
                                on: {
                                  click: function($event) {
                                    _vm.gotoLink(index, {
                                      id: lga.id,
                                      category: 2,
                                      level: "pry"
                                    })
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(lga.private.primary) +
                                    "\n                                "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "a",
                              {
                                attrs: { href: "javascript:void (0)" },
                                on: {
                                  click: function($event) {
                                    _vm.gotoLink(index, {
                                      id: lga.id,
                                      category: 2,
                                      level: "sec"
                                    })
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(lga.private.secondary) +
                                    "\n                                "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "a",
                              {
                                attrs: { href: "javascript:void (0)" },
                                on: {
                                  click: function($event) {
                                    _vm.gotoLink(index, {
                                      id: lga.id,
                                      category: 2
                                    })
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(lga.private.total) +
                                    "\n                                "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "a",
                              {
                                attrs: { href: "javascript:void (0)" },
                                on: {
                                  click: function($event) {
                                    _vm.gotoLink(index, {
                                      id: lga.id,
                                      level: "pry"
                                    })
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(lga.total.primary) +
                                    "\n                                "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "a",
                              {
                                attrs: { href: "javascript:void (0)" },
                                on: {
                                  click: function($event) {
                                    _vm.gotoLink(index, {
                                      id: lga.id,
                                      level: "sec"
                                    })
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(lga.total.secondary) +
                                    "\n                                "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n                                " +
                                _vm._s(
                                  lga.total.secondary + lga.total.primary
                                ) +
                                "\n                            "
                            )
                          ])
                        ])
                      })
                    )
                  ]
                )
              ])
            ])
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm.showModal
        ? _c("transition", { attrs: { name: "modal" } }, [
            _c("div", { staticClass: "modal-mask" }, [
              _c("div", { staticClass: "modal-wrapper" }, [
                _c("div", { staticClass: "modal-container" }, [
                  _c("div", { staticClass: "modal-header" }, [
                    _c("h3", {
                      domProps: { innerHTML: _vm._s(_vm.modalTitle) }
                    }),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "modal-default-button btn btn-default",
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            _vm.hideModal($event)
                          }
                        }
                      },
                      [_c("i", { staticClass: "fa fa-close" })]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "modal-body" },
                    [
                      _vm._t("body", [
                        !_vm.schools.length
                          ? _c(
                              "div",
                              { staticStyle: { margin: "2%" } },
                              [
                                _c(
                                  "skeleton-loading",
                                  [
                                    _c(
                                      "row",
                                      { attrs: { gutter: { top: "20px" } } },
                                      [
                                        _c("square-skeleton", {
                                          attrs: {
                                            count: 5,
                                            boxProperties: {
                                              height: "30px",
                                              width: "100%",
                                              bottom: "10px"
                                            }
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          : _c("v-client-table", {
                              attrs: {
                                data: _vm.schools,
                                columns: _vm.columns,
                                options: _vm.options
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "id",
                                  fn: function(props) {
                                    return _c("a", {}, [
                                      _vm._v(_vm._s(props.index))
                                    ])
                                  }
                                },
                                {
                                  key: "name",
                                  fn: function(props) {
                                    return _c("router-link", {
                                      staticClass: "list-font",
                                      attrs: {
                                        tag: "a",
                                        to: {
                                          name: "school",
                                          params: { id: props.row.id }
                                        }
                                      },
                                      domProps: {
                                        innerHTML: _vm._s(props.row.name)
                                      }
                                    })
                                  }
                                },
                                {
                                  key: "actions",
                                  fn: function(school) {
                                    return _c(
                                      "div",
                                      { staticStyle: { display: "flex" } },
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            attrs: {
                                              tag: "a",
                                              title: "staffs",
                                              to: {
                                                name: "school-staffs",
                                                params: { id: school.row.id }
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fa fa-male"
                                            })
                                          ]
                                        ),
                                        _vm._v(
                                          " |\n                                    "
                                        ),
                                        _c(
                                          "router-link",
                                          {
                                            attrs: {
                                              tag: "a",
                                              title: "students",
                                              to: {
                                                name: "school-students",
                                                params: { id: school.row.id }
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fa fa-users"
                                            })
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  }
                                }
                              ])
                            })
                      ])
                    ],
                    2
                  )
                ])
              ])
            ])
          ])
        : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-4a082f4b", module.exports)
  }
}

/***/ }),

/***/ 1328:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1329)
}
var normalizeComponent = __webpack_require__(48)
/* script */
var __vue_script__ = __webpack_require__(1331)
/* template */
var __vue_template__ = __webpack_require__(1332)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-50800752"
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
Component.options.__file = "src/components/pages/school/partials/schoolDistChart.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-50800752", Component.options)
  } else {
    hotAPI.reload("data-v-50800752", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1329:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1330);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(32)("275d6ca2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-50800752\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./schoolDistChart.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-50800752\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./schoolDistChart.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1330:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(false);
// imports


// module
exports.push([module.i, "\n.echarts[data-v-50800752] {\n    font-size: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ 1331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(995);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_echarts_v3_src_full_js__ = __webpack_require__(256);


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
//
//
//
//
//
//
//
//
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
    components: {
        IEcharts: __WEBPACK_IMPORTED_MODULE_1_vue_echarts_v3_src_full_js__["default"]
    },
    data: function data() {
        return {
            serverdata: [],
            instances: [],
            loading: false,
            ajaxloading: true,

            ajaxbar_chart: {
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    bottom: '10%',
                    right: '1%'
                },
                toolbox: {
                    show: true,
                    feature: {
                        //
                    }
                },
                calculable: true,
                legend: {
                    data: ['Public', 'Private', 'Primary', 'Secondary']
                },
                color: ['#c16989', '#a3ab60', '#d2bf6f', '#e6995b', '#4ca1ab', '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD', '#D7504B', '#dcba42', '#F4E001', '#F0809A', '#26C0C0'],
                xAxis: [{
                    type: 'category',
                    name: 'YEAR',
                    nameRotate: 180,
                    data: ['AD', 'EF', 'EE', 'E.S.W', 'E.W', 'EM', 'Gb', 'I.O', 'IJ', 'IK', 'IL', 'IE', 'I/I', 'I/O', 'MB', 'OE']
                }],
                yAxis: [{
                    type: 'value',
                    name: '%',
                    axisLabel: {
                        formatter: '{value} '
                    }
                }, {
                    type: 'value',

                    axisLabel: {
                        formatter: '{value} '
                    }
                }],
                series: [{
                    name: 'Public',
                    type: 'bar',
                    stack: 'search engine',
                    data: []
                }, {
                    name: 'Private',
                    type: 'bar',
                    stack: 'search engine',
                    data: []
                }, {
                    name: 'Primary',
                    type: 'bar',
                    stack: 'advertising',
                    data: []
                }, {
                    name: 'Secondary',
                    type: 'bar',
                    stack: 'advertising',
                    data: []
                }]
            }
        };
    },

    methods: {
        onReady: function onReady(instance) {
            this.instances.push(instance);
        }
    },

    created: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
            var _this = this;

            return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return this.$store.dispatch('lga_school_distribution');

                        case 2:
                            // this.ajaxbar_chart.xAxis[0].data = [];
                            this.$store.getters.lga_school_distribution.forEach(function (item) {
                                // this.ajaxbar_chart.xAxis[0].data.push(item.name)
                                _this.ajaxbar_chart.series[0].data.push(item.public.total);
                                _this.ajaxbar_chart.series[1].data.push(item.private.total);
                                _this.ajaxbar_chart.series[2].data.push(item.total.primary);
                                _this.ajaxbar_chart.series[3].data.push(item.total.secondary);
                                _this.ajaxloading = false;
                            });

                        case 3:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function created() {
            return _ref.apply(this, arguments);
        }

        return created;
    }()
});

/***/ }),

/***/ 1332:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-lg-12" },
        [
          _c("b-card", [
            _c("a", {
              staticClass:
                "fa fa-download icon-big btn btn-outline-primary ekiti-btn pull-right mb-2",
              attrs: { type: "button" }
            }),
            _vm._v(" "),
            _c("h5", { staticClass: "ml-3 head_color" }, [
              _vm._v("School Distributions")
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "echarts", staticStyle: { height: "305px" } },
              [
                _c("IEcharts", {
                  ref: "ajaxbar_chart",
                  attrs: {
                    option: _vm.ajaxbar_chart,
                    loading: _vm.ajaxloading
                  },
                  on: { ready: _vm.onReady }
                })
              ],
              1
            )
          ])
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
    require("vue-hot-reload-api")      .rerender("data-v-50800752", module.exports)
  }
}

/***/ }),

/***/ 1333:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("topCard"),
      _vm._v(" "),
      _c("school-lga-distribution"),
      _vm._v(" "),
      _c("school-distribution")
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
    require("vue-hot-reload-api")      .rerender("data-v-d17fcdee", module.exports)
  }
}

/***/ }),

/***/ 944:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(48)
/* script */
var __vue_script__ = __webpack_require__(1320)
/* template */
var __vue_template__ = __webpack_require__(1333)
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
Component.options.__file = "src/components/pages/school/overview.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d17fcdee", Component.options)
  } else {
    hotAPI.reload("data-v-d17fcdee", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 995:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1000);


/***/ })

});