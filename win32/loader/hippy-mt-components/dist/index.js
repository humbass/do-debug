/*!
 * @hippy/vue-mt-components v1.0.1
 * (Using Vue v2.6.11 and Hippy-Vue v2.0.3)
 * Build at: Mon Sep 28 2020 15:41:05 GMT+0800 (China Standard Time)
 *
 * Tencent is pleased to support the open source community by making
 * Hippy available.
 *
 * Copyright (C) 2017-2020 THL A29 Limited, a Tencent company.
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol = _root.Symbol;

var _Symbol = Symbol;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */
var Map = _getNative(_root, 'Map');

var _Map = Map;

/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

var defineProperty = (function() {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$3.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$2.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});

var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

var _cloneBuffer = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;
});

/* Built-in method references that are verified to be native. */
var DataView = _getNative(_root, 'DataView');

var _DataView = DataView;

/* Built-in method references that are verified to be native. */
var Promise$1 = _getNative(_root, 'Promise');

var _Promise = Promise$1;

/* Built-in method references that are verified to be native. */
var Set = _getNative(_root, 'Set');

var _Set = Set;

/* Built-in method references that are verified to be native. */
var WeakMap = _getNative(_root, 'WeakMap');

var _WeakMap = WeakMap;

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = _toSource(_DataView),
    mapCtorString = _toSource(_Map),
    promiseCtorString = _toSource(_Promise),
    setCtorString = _toSource(_Set),
    weakMapCtorString = _toSource(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (_Map && getTag(new _Map) != mapTag) ||
    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
    (_Set && getTag(new _Set) != setTag) ||
    (_WeakMap && getTag(new _WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = _baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/** Built-in value references. */
var Uint8Array = _root.Uint8Array;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/* Node.js helper references. */
var nodeIsMap = _nodeUtil && _nodeUtil.isMap;

/* Node.js helper references. */
var nodeIsSet = _nodeUtil && _nodeUtil.isSet;

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.

function isArray(arg) {
  if (Array.isArray) {
    return Array.isArray(arg);
  }
  return objectToString$1(arg) === '[object Array]';
}
var isArray_1 = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
var isBoolean_1 = isBoolean;

function isNumber(arg) {
  return typeof arg === 'number';
}
var isNumber_1 = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
var isString_1 = isString;

function isObject$1(arg) {
  return typeof arg === 'object' && arg !== null;
}
var isObject_1$1 = isObject$1;

function isFunction$1(arg) {
  return typeof arg === 'function';
}
var isFunction_1$1 = isFunction$1;

var isBuffer = Buffer.isBuffer;

function objectToString$1(o) {
  return Object.prototype.toString.call(o);
}

/*
 * @Author: dali.chen
 * @Date: 2020-07-06 16:13:42
 * @Last Modified by: dali.chen
 * @Last Modified time: 2020-09-15 16:45:58
 */

var pageEvents = {
  appActive: 'onAppActive',
  appDeactive: 'onAppDeactive',
  appNetworkChanged: 'onNetworkChanged',
  pageApear: 'onViewDidAppear',
  pageWillDisappear: 'onViewWillDisappear',
  pageDestroy: 'onViewDidDestroy',
  pageTouchBack: 'onPageWillClose',
  unMounted: 'onViewDidDestroy', // alias
};

var pageEventsMap = Object.keys(pageEvents);

var GLOBAL_EVENTS = Object.create(null);
var EventsMakerInstance = null;

var EventsMaker = function EventsMaker(Vue, events) {
  var this$1 = this;

  this.instance = Vue;
  if (!EventsMakerInstance) {
    if (!events || !events.length) { return }
    events.forEach(function (event) {
      this$1.doListener(event);
    });
    EventsMakerInstance = this;
  }
  return EventsMakerInstance
};
EventsMaker.prototype.doDisListener = function doDisListener (instance, event) {
  if (event === 'pageDestroy') {
    pageEventsMap.forEach(function (key) {
      instance.$app.$off(pageEvents[key]);
    });
  }
};
EventsMaker.prototype.doListener = function doListener (event) {
    var this$1 = this;

  var instance = this.instance.prototype;
  instance.$nextTick(function () {
    instance.$app.$on(pageEvents[event], function (options) {
      isArray_1(GLOBAL_EVENTS[event]) &&
        GLOBAL_EVENTS[event].map(function (item) {
          item(options);
          this$1.doDisListener(instance, event);
        });
    });
  });
};

function mtModuleHippyEvent(Vue) {
  Vue.mixin({
    beforeCreate: function beforeCreate() {
      var this$1 = this;

      var events = [];
      pageEventsMap.forEach(function (event) {
        if (this$1.$options[event] && isFunction_1$1(this$1.$options[event])) {
          if (
            event !== 'unMounted' ||
            (event == 'unMounted' && !events.includes('pageDestroy'))
          ) {
            if (!GLOBAL_EVENTS[event]) { GLOBAL_EVENTS[event] = []; }
            GLOBAL_EVENTS[event].push(this$1.$options[event].bind(this$1));
            events.push(event);
          }
        }
      });
      new EventsMaker(Vue, events);
    },
  });
}

/*
 * @Author: dali.chen 
 * @Date: 2020-06-11 10:04:12 
 * @Last Modified by: dali.chen
 * @Last Modified time: 2020-08-21 17:52:41
 */

function mtModuleContants (Vue) {
  var ref = Vue.Native.Dimensions;
  var window = ref.window;
  var screen = ref.screen;
  var ref$1 = Vue.Native;
  var Platform = ref$1.Platform;
  var screenIsVertical = ref$1.screenIsVertical;
  // device infomations
  Vue.prototype.$platform = Platform;
  if (Platform === 'ios') {
    Vue.prototype.$version = Vue.Native.OSVersion;
    Vue.prototype.$isIPhoneX = Vue.Native.isIPhoneX;
  } else {
    Vue.prototype.$version = Vue.Native.APILevel;
  }
  Vue.prototype.$screenIsVertical = screenIsVertical;
  Vue.prototype.$statusBarHeight = screen.statusBarHeight;
  Vue.prototype.$screenHeight = screen.height;
  Vue.prototype.$screenWidth = screen.width;
  Vue.prototype.$windowHeight = window.height;
  Vue.prototype.$windowWidth = window.width;
}

/**
 * Capitalize a word
 *
 * @param {string} s The word input
 * @returns string
 */
function capitalize(str) {
  if (typeof str !== 'string') {
    return '';
  }
  return ("" + (str.charAt(0).toUpperCase()) + (str.slice(1)));
}

/**
 * Get binding events redirector
 *
 * The function should be calld with `getEventRedirector.call(this, [])`
 * for binding this.
 *
 * @param {string[] | string[][]} events events will be redirect
 * @returns Object
 */
function getEventRedirector(events) {
  var this$1 = this;

  var on = {};
  events.forEach(function (event) {
    if (Array.isArray(event)) {
      var exposedEventName = event[0];
      var nativeEventName$1 = event[1];
      if (Object.prototype.hasOwnProperty.call(this$1.$listeners, exposedEventName)) {
        on[event] = this$1[("on" + (capitalize(nativeEventName$1)))];
      }
    } else if (Object.prototype.hasOwnProperty.call(this$1.$listeners, event)) {
      on[event] = this$1[("on" + (capitalize(nativeEventName)))];
    }
  });
  return on;
}

// function throwError(message) {
//   const msg = new Error(message)
//   return Promise.reject(msg)
// }

function throwError(message) {
  console.log(new Error(message));
}

/*
 * @Author: dali.chen
 * @Date: 2020-06-10 22:32:03
 * @Last Modified by: dali.chen
 * @Last Modified time: 2020-09-28 15:39:24
 */

var MODULE_NAME = 'NavigatorModule';
var STATUS_MODE = {
  default: 'Default',
  light: 'LightContent',
};
var ANIMATION_MODE = {
  'slide_t2b': 'slide_t2b',
  'slide_b2t': 'slide_b2t',
  'slide_l2r': 'slide_l2r',
  'slide_r2l': 'slide_r2l',
};
var limitTime = 500;
var lastStamp = 0;
function isMultiClick() {
  var stamp = new Date().getTime();
  if (stamp - lastStamp > limitTime) {
    lastStamp = stamp;
    return false
  }
  return true
}

var Navigator = function Navigator(Vue) {
  this.Vue = Vue;
};
Navigator.prototype.push = function push (obj) {
  if (isMultiClick()) { return throwError(("[navigator] multi click in " + limitTime + " ms")) }
  if (isObject_1$1(obj)) {
    var pageName = obj.pageName;
      var pageData = obj.pageData; if ( pageData === void 0 ) pageData = {};
      var statusBarStyle = obj.statusBarStyle; if ( statusBarStyle === void 0 ) statusBarStyle = STATUS_MODE.default;
      var transparent = obj.transparent; if ( transparent === void 0 ) transparent = false;
      var backgroundColor = obj.backgroundColor; if ( backgroundColor === void 0 ) backgroundColor = '#ffffff';
      var animationMode = obj.animationMode; if ( animationMode === void 0 ) animationMode = ANIMATION_MODE.slide_r2l;
      var translucent = obj.translucent; if ( translucent === void 0 ) translucent = false;
      var loadingViewBackgroundColor = obj.loadingViewBackgroundColor; if ( loadingViewBackgroundColor === void 0 ) loadingViewBackgroundColor = '';
    if (!pageName || !this.Vue.config.pages.hasOwnProperty(pageName)) {
      return throwError("[navigator] pathName no defined in pages")
    }
    var options = {
      pageName: pageName,
      pageData: pageData,
      statusBarStyle: statusBarStyle,
      transparent: transparent,
      backgroundColor: backgroundColor,
      animationMode: animationMode,
      translucent: translucent,
      loadingViewBackgroundColor: loadingViewBackgroundColor,
    };
    this.Vue.Native.callNative(MODULE_NAME, 'push', options);
  }
  else if (isString_1(obj)) {
    if (!obj || !this.Vue.config.pages.hasOwnProperty(obj)) {
      return throwError("[navigator] pathName no defined in pages")
    }
    var options$1 = {
      pageName: obj,
      pageData: {},
      statusBarStyle: STATUS_MODE.default,
      transparent: false,
      backgroundColor: '#ffffff',
      animationMode: ANIMATION_MODE.slide_r2l,
      translucent: false,
    };
    this.Vue.Native.callNative(MODULE_NAME, 'push', options$1);
  }
  else { return throwError("[navigator] push params error.") }
};

Navigator.prototype.pop = function pop (value) {
  if (!value) {
    this.Vue.Native.callNative(MODULE_NAME, 'pop');
  }
  else if (isNumber_1(value)) {
    this.Vue.Native.callNative(MODULE_NAME, 'popCount', value);
  }
  else if (isString_1(value)) {
    this.Vue.Native.callNative(MODULE_NAME, 'popTo', value);
  }
  else { return throwError(("[" + MODULE_NAME + "] params error.")) }
};
  
Navigator.prototype.setStatusBarStyle = function setStatusBarStyle (style) {
    if ( style === void 0 ) style = 'default';

  if (!Object.keys(STATUS_MODE).includes(style)) { return throwError(("[" + MODULE_NAME + "] style error.")) }
  this.Vue.Native.callNative(MODULE_NAME, 'setStatusBarStyle', STATUS_MODE[style]);
};

Navigator.prototype.setBackgroundColor = function setBackgroundColor (color) {
  if (!/^#[a-zA-z0-9]{6}$/.test(color)) { return throwError(("[" + MODULE_NAME + "] color format error.")) }
  this.Vue.Native.callNative(MODULE_NAME, 'setBackgroundColor', color);
};

Navigator.prototype.setCanNotBack = function setCanNotBack (flag) {
  if (!isBoolean_1(flag)) { return throwError(("[" + MODULE_NAME + "] params format error.")) }
  this.Vue.Native.callNative(MODULE_NAME, 'setCanNotBack', flag);
};

function mtModuleNavigator(Vue) {
  Vue.prototype.$navigator = new Navigator(Vue);
}

/*
 * @Author: dali.chen
 * @Date: 2020-06-10 22:32:03
 * @Last Modified by: dali.chen
 * @Last Modified time: 2020-08-22 00:19:54
 */

var Storage = function Storage(Vue) {
  this.Vue = Vue;
  this.module = Vue.Native.Platform === 'ios' ? 'StorageIOSModule' : 'StorageModule';
};
Storage.prototype.set = function set (key, value) {
  if (!key || typeof key !== 'string')
    { return throwError('[storage]  Key does not exist') }
  if (!value) { return throwError('value does not exist') }
  return this.Vue.Native.callNativeWithPromise(this.module, 'multiSet', [
    [key, JSON.stringify([value])] ])
};
Storage.prototype.get = function get (key) {
    var this$1 = this;

  if (!key || !isString_1(key))
    { return throwError('[storage]  Key does not exist') }
  return new Promise(function (resolve, reject) {
    this$1.Vue.Native.callNativeWithPromise(this$1.module, 'multiGet', [key])
      .then(function (event) {
        var array = event.shift();
        if (!array[1]) {
          resolve('');
        } else {
          try {
            var result = JSON.parse(array[1]);
            resolve(result.shift());
          }
          catch(e) {
            resolve('');
          }
        }
      })
      .catch(function (error) {
        resolve('');
      });
  })
};
Storage.prototype.remove = function remove (key) {
  if (!key || typeof key !== 'string')
    { return throwError('[storage]  Key does not exist') }
  return this.Vue.Native.callNativeWithPromise(this.module, 'multiRemove', [key])
};
function mtModuleLocalStorage(Vue) {
  Vue.prototype.$storage = new Storage(Vue);
}

/*
 * @Author: dali.chen 
 * @Date: 2020-06-11 10:04:12 
 * @Last Modified by: dali.chen
 * @Last Modified time: 2020-08-27 13:20:01
 */

var ClipboardModule = function ClipboardModule(Vue) {
  this.Vue = Vue;
};
ClipboardModule.prototype.get = function get () {
  return this.Vue.Native.callNativeWithPromise('ClipboardModule', 'getString')
};
ClipboardModule.prototype.set = function set (content) {
  if (typeof content !== 'string') { return throwError("[clipboard] String format only.") }
  return this.Vue.Native.callNativeWithPromise('ClipboardModule', 'setString', content)
};

function mtModuleClipBoard (Vue) {
  Vue.prototype.$clipboard = new ClipboardModule(Vue);
}

/*
 * @Author: dali.chen
 * @Date: 2020-06-11 20:52:03
 * @Last Modified by: dali.chen
 * @Last Modified time: 2020-09-28 15:04:09
 */

var MODULE_NAME$1 = 'DialogModule';
var POSITION = {
  top: 'top',
  center: 'center',
  bottom: 'bottom',
};

var Dialog = function Dialog(Vue) {
  this.Vue = Vue;
};
Dialog.prototype.alert = function alert () {
  if (!arguments.length) {
    return throwError(("[" + MODULE_NAME$1 + "] alert need params."))
  } else if (arguments.length === 1 && isString_1(arguments[0])) {
    return this.Vue.Native.callNativeWithPromise(MODULE_NAME$1, 'alert', {
      title: '',
      message: arguments[0],
      radius: 5,
      btnText: '好的',
    })
  } else if (
    arguments.length === 2 &&
    isString_1(arguments[0]) &&
    isString_1(arguments[1])
  ) {
    return this.Vue.Native.callNativeWithPromise(MODULE_NAME$1, 'alert', {
      title: arguments[0],
      message: arguments[1],
      radius: 5,
      btnText: '好的',
    })
  } else if (arguments.length === 1 && isObject_1$1(arguments[0])) {
    return this.Vue.Native.callNativeWithPromise(
      MODULE_NAME$1,
      'alert',
      arguments[0]
    )
  } else { return throwError(("[" + MODULE_NAME$1 + "] params error.")) }
};

Dialog.prototype.confirm = function confirm () {
  if (!arguments.length) {
    return throwError(("[" + MODULE_NAME$1 + "] confirm need params."))
  } else if (arguments.length === 1 && isString_1(arguments[0])) {
    return this.Vue.Native.callNativeWithPromise(MODULE_NAME$1, 'confirm', {
      title: '',
      message: arguments[0],
      radius: 5,
    })
  } else if (
    arguments.length === 2 &&
    isString_1(arguments[0]) &&
    isString_1(arguments[1])
  ) {
    return this.Vue.Native.callNativeWithPromise(MODULE_NAME$1, 'confirm', {
      title: arguments[0],
      message: arguments[1],
      radius: 5,
    })
  } else if (
    arguments.length === 4 &&
    isString_1(arguments[0]) &&
    isString_1(arguments[1]) &&
    isString_1(arguments[2]) &&
    isString_1(arguments[3])
  ) {
    return this.Vue.Native.callNativeWithPromise(MODULE_NAME$1, 'confirm', {
      title: arguments[0],
      message: arguments[1],
      radius: 5,
      lBtnText: arguments[2],
      rBtnText: arguments[3],
    })
  } else if (arguments.length === 1 && isObject_1$1(arguments[0])) {
    return this.Vue.Native.callNativeWithPromise(
      MODULE_NAME$1,
      'confirm',
      arguments[0]
    )
  } else { return throwError(("[" + MODULE_NAME$1 + "] params error.")) }
};
Dialog.prototype.prompt = function prompt () {
  if (!arguments.length) {
    return this.Vue.Native.callNativeWithPromise(MODULE_NAME$1, 'prompt', {
      title: '请输入',
      radius: 5,
      inputBorderColor: '#aaaaaa',
      inputBorderWidth: 1,
    })
  } else if (arguments.length === 1 && isString_1(arguments[0])) {
    return this.Vue.Native.callNativeWithPromise(MODULE_NAME$1, 'prompt', {
      title: arguments[0],
      radius: 5,
      inputBorderColor: '#aaaaaa',
      inputBorderWidth: 1,
    })
  } else if (
    arguments.length === 3 &&
    isString_1(arguments[0]) &&
    isString_1(arguments[1]) &&
    isString_1(arguments[2])
  ) {
    return this.Vue.Native.callNativeWithPromise(MODULE_NAME$1, 'prompt', {
      title: arguments[0],
      radius: 5,
      lBtnText: arguments[1],
      rBtnText: arguments[2],
      inputBorderColor: '#aaaaaa',
      inputBorderWidth: 1,
    })
  } else if (arguments.length === 1 && isObject_1$1(arguments[0])) {
    return this.Vue.Native.callNativeWithPromise(
      MODULE_NAME$1,
      'prompt',
      arguments[0]
    )
  } else { return throwError(("[" + MODULE_NAME$1 + "] params error.")) }
};

Dialog.prototype.toast = function toast () {
  if (!arguments.length) {
    return throwError(("[" + MODULE_NAME$1 + "] empty params"))
  }
  if (!arguments[0] || !isString_1(arguments[0])) {
    return throwError(("[" + MODULE_NAME$1 + "] message is required."))
  }
  var options = {
    message: arguments[0],
  };
  if (arguments[1]) {
    options.position = POSITION[arguments[1]] || POSITION[2];
  }
  options.duation = [0, 1].includes(arguments[2]) ? arguments[2] : 0;
  this.Vue.Native.callNativeWithPromise(MODULE_NAME$1, 'toast', options);
};

Dialog.prototype.loading = function loading () {
  if (arguments.length > 0) {
    var arg = arguments[0];
    if (arg && isString_1(arg)) {
      this.Vue.Native.callNative(MODULE_NAME$1, 'openLoading', {
        loadingText: arg,
      });
    } else {
      this.Vue.Native.callNative(MODULE_NAME$1, 'closeLoading');
    }
  } else { this.Vue.Native.callNative(MODULE_NAME$1, 'closeLoading'); }
};

Dialog.prototype.float = function float () {
  if (Object.prototype.toString.call(arguments[0]) === '[object Object]') {
    var ref = arguments[0];
      var url = ref.url;
      var bottom = ref.bottom;
      var right = ref.right;
      var rootViewId = ref.rootViewId;
    if (
      /^(mt|https?:\/\/)/.test(url) &&
      isNumber_1(bottom) &&
      isNumber_1(right)
    ) {
      var params;
      if (
        !arguments[1] ||
        Object.prototype.toString.call(arguments[1]) !== '[object Object]'
      ) {
        params = {};
      } else {
        params = arguments[1];
      }
      this.Vue.Native.callNative(
        MODULE_NAME$1,
        'openFloatWindow',
        {
          imgUrl: url,
          marginBottom: bottom,
          marginRight: right,
          rootViewId: rootViewId,
        },
        params
      );
    }
  } else if (!arguments[0]) {
    this.Vue.Native.callNative(MODULE_NAME$1, 'closeFloatWindow');
  } else {
    throwError(("[" + MODULE_NAME$1 + "] params error."));
  }
};

Dialog.prototype.onFloatClick = function onFloatClick (callback) {
  var instance = this.Vue.prototype;
  instance.$nextTick(function () {
    instance.$app.$on('onFloatWindowClick', function (message) { return callback(Object.assign({ clickType: 'open' }, message)); }
    );
    instance.$app.$on('onFloatWindowClose', function (message) { return callback(Object.assign({ clickType: 'close' }, message)); }
    );
  });
};

function mtModuleDialog(Vue) {
  Vue.prototype.$dialog = new Dialog(Vue);
}

/*
 * @Author: dali.chen
 * @Date: 2020-06-11 22:52:23
 * @Last Modified by: dali.chen
 * @Last Modified time: 2020-09-19 11:47:55
 */

var MODULE_NAME$2 = 'MediaModule';
var COVER_STYLE = {
  circle: 'circle',
  rectangle: 'rectangle',
};

var Media = function Media(Vue) {
  this.Vue = Vue;
};
Media.prototype.camera = function camera (params) {
  // if (!Number.isInteger(size)) return throwError(`[media] size is Number`)
  var options;
  if (!params) {
    options = {
      size: 1024,
      isCrop: false,
      width: 800,
      height: 800,
      coverStyle: COVER_STYLE.rectangle,
    };
  } else if (isNumber_1(params)) {
    options = {
      size: params,
      isCrop: false,
      width: 800,
      height: 800,
      coverStyle: COVER_STYLE.rectangle,
    };
  } else if (isString_1(params)) {
    options = {
      size: 1024,
      isCrop: false,
      width: 800,
      height: 800,
      coverStyle: COVER_STYLE[params] || COVER_STYLE.rectangle,
    };
  } else if (isObject_1$1(params)) {
    options = {
      size: params.size || 1024,
      isCrop: params.isCrop,
      width: params.width || 800,
      height: params.height || 800,
      cropStyle: COVER_STYLE[params.coverStyle] || COVER_STYLE.rectangle,
    };
  }
  if (!options) { return throwError('params error') }
  return this.Vue.Native.callNativeWithPromise(
    MODULE_NAME$2,
    'photograph',
    options
  )
  //{path: "/storage/emulated/0/Android/data/com.mthd.hz52/files/Camera/1591950773943.jpg", imgWidth: 4032, imgSize: 7149268, imgHeight: 3016}
};
Media.prototype.album = function album (params) {
  var options;
  if (!params) {
    options = {
      size: 1024,
      count: 1,
    };
  } else if (isNumber_1(params)) {
    options = {
      count: params,
      size: 1024,
    };
  } else if (isObject_1$1(params)) {
    options = {
      count: params.count || 1,
      size: params.size || 1024,
      isCrop: params.isCrop,
      width: params.width || 800,
      height: params.height || 800,
      cropStyle: COVER_STYLE[params.coverStyle] || COVER_STYLE.rectangle,
      camera: params.camera
    };
  }
  console.log('options => ', options);
  if (!options) { return throwError('params error') }
  return this.Vue.Native.callNativeWithPromise(MODULE_NAME$2, 'album', options)
};

function mtModuleMedia(Vue) {
  Vue.prototype.$media = new Media(Vue);
}

/*
 * @Author: dali.chen
 * @Date: 2020-06-16 18:03:28
 * @Last Modified by: dali.chen
 * @Last Modified time: 2020-09-07 11:07:53
 */

var QOSS = [0, 1, 2];

var MODULE_NAME$3 = 'MqttModule';
var CMD_CONNECT = 'connect';
var CMD_DISCONNECT = 'disConnect';
var CMD_SUBSCRIBE = 'subscribe';
var CMD_UNSUBSCRIBE = 'unSubscribe';
var CMD_PUBLISH = 'send';
var CMD_ISCONNECT = 'isConnect';
var CMD_ONMESSAGE = 'onMqttMessage';
var CMD_ONDISCONNECT = 'onMqttConnectLost';

function mtModuleMqtt(Vue) {
  Vue.prototype.$mqtt = {
    connect: function connect(host, clientId, userName, password) {
      if (!host || !/^(https?|ws):\/\//) {
        return throwError("[mqtt] mqtt host error")
      }
      if (!clientId || !userName || !password) {
        return throwError("[mqtt] clientId, username, password不能为空 host error")
      }
      if (isNumber_1(password)) {
        password = password.toString();
      }
      var options = {
        mqttHost: host,
        clientId: clientId,
        userName: userName,
        password: password,
      };
      return Vue.Native.callNativeWithPromise(MODULE_NAME$3, CMD_CONNECT, options)
    },

    publish: function publish(topic, message, qos) {
      if ( qos === void 0 ) qos = 0;

      if (!topic || !isString_1(topic)) {
        return throwError("[mqtt] topc error.")
      }
      if (!isObject_1$1(message)) {
        return throwError("[mqtt] message error.")
      }
      var options = {
        toTarget: topic,
        content: JSON.stringify(message),
        qos: QOSS.includes(qos) ? qos : 0,
      };
      return Vue.Native.callNativeWithPromise(MODULE_NAME$3, CMD_PUBLISH, options)
    },

    disConnect: function disConnect() {
      Vue.Native.callNative(MODULE_NAME$3, CMD_DISCONNECT);
    },

    subscribe: function subscribe(topic, qos) {
      if (!topic || !isString_1(topic)) {
        return throwError("[mqtt] topc error.")
      }
      var options = {
        toTarget: topic,
        qos: QOSS.includes(qos) ? qos : 0,
      };
      return Vue.Native.callNativeWithPromise(MODULE_NAME$3, CMD_SUBSCRIBE, options)
    },

    unSubscribe: function unSubscribe(topic) {
      if (!topic || !isString_1(topic)) {
        return throwError("[mqtt] topc error.")
      }
      return Vue.Native.callNativeWithPromise(
        MODULE_NAME$3,
        CMD_UNSUBSCRIBE,
        topic
      )
    },

    isConnect: function isConnect() {
      return Vue.Native.callNativeWithPromise(MODULE_NAME$3, CMD_ISCONNECT)
    },

    onMessage: function onMessage(callback) {
      var instance = Vue.prototype;
      instance.$nextTick(function () { return instance.$app.$on(CMD_ONMESSAGE, function (topic, message) {
        callback(topic, message);
      }); });
    },

    onDisconnect: function onDisconnect(callback) {
      var instance = Vue.prototype;
      instance.$nextTick(function () { return instance.$app.$on(CMD_ONDISCONNECT, function (message) { return callback(message); }); });
    },
  };
}

/*
 * @Author: dali.chen
 * @Date: 2020-06-16 18:03:28
 * @Last Modified by: dali.chen
 * @Last Modified time: 2020-08-27 22:21:11
 */

var AliOssModule = function AliOssModule(Vue) {
  this.Vue = Vue;
};
AliOssModule.prototype.upload = function upload (ref) {
    var localPath = ref.localPath;
    var AccessKeyId = ref.AccessKeyId;
    var AccessKeySecret = ref.AccessKeySecret;
    var SecurityToken = ref.SecurityToken;
    var region = ref.region;
    var bucket = ref.bucket;
    var remotePath = ref.remotePath;

  if (!localPath || !AccessKeyId || !AccessKeySecret || !SecurityToken || !remotePath) {
    return throwError("[alioss] param is empty")
  }
  if (!region || !/^oss(\-[\w\d]+)+$/.test(region)) {
    return throwError("[alioss] region error")
  }
  if (!bucket || !/^[\w\-]+$/.test(bucket)) {
    return throwError("[alioss] bucket error")
  }
  var options = { 
    fromFilePath: localPath,
    AccessKeyId: AccessKeyId,
    AccessKeySecret: AccessKeySecret,
    SecurityToken: SecurityToken,
    region: region,
    bucket: bucket,
    toFileName: remotePath,
   };
  return this.Vue.Native.callNativeWithPromise('AliOssModule', 'uploadFile', options)
};
AliOssModule.prototype.cancel = function cancel () {
  this.Vue.Native.callNative('AliOssModule', 'cancel');
};

function mtModuleAliOss(Vue) {
  Vue.prototype.$alioss = new AliOssModule(Vue);
}

/*
 * @Author: dali.chen
 * @Date: 2020-06-19 09:42:25
 * @Last Modified by: dali.chen
 * @Last Modified time: 2020-09-07 11:07:51
 */

var MODULE_NAME$4 = 'MusicModule';
var CMD_SETSRC = 'musicPlay';
var CMD_PLAY = 'musicStart';
var CMD_PAUSE = 'musicPause';
var CMD_RESUME = 'musicResume';
var CMD_STOP = 'musicStop';
var CMD_ISPLAYING = 'isPlaying';
var CMD_ISLOOP = 'isPlayCircle';
var CMD_SETSPEED = 'setSpeed';
var CMD_SETSEEK = 'seek';
var CMD_SETLOOP = 'setPlayCircle';
var CMD_ONPROGRESS = 'onProgress';
var CMD_ONCOMPLETE = 'onComplete';
var CMD_ONLOADING = 'onLoad';
var CMD_ONERROR = 'onError';
var mp3 = {
  status: 0, // 0->stop, 1->play, 2->pause
  total: 0,
  path: '',
};

function mtModuleMusic(Vue) {
  Vue.prototype.$music = {
    play: function play(path) {
      var this$1 = this;

      return new Promise(function (resolve, reject) {
        if (path !== mp3.path) {
          Vue.Native.callNative(MODULE_NAME$4, CMD_STOP);
          Vue.Native.callNativeWithPromise(MODULE_NAME$4, CMD_SETSRC, path).then(function (musicLength) {
            if (musicLength > 0) {
              mp3.path = path;
              mp3.total = musicLength;
              mp3.status = 1;
              Vue.Native.callNative(MODULE_NAME$4, CMD_PLAY);
              resolve(mp3);
            }
            reject("[music] open mp3 resource error");
          });
        }
        else {
          switch(mp3.status) {
            case 1:
              mp3.status = 2;
              this$1.pause();
              resolve(mp3);
              break
            case 2:
              mp3.status = 1;
              this$1.resume();
              resolve(mp3);
              break
            case 0:
              Vue.Native.callNativeWithPromise(MODULE_NAME$4, CMD_SETSRC, path).then(function (musicLength) {
                if (musicLength > 0) {
                  mp3.path = path;
                  mp3.total = musicLength;
                  mp3.status = 1;
                  Vue.Native.callNative(MODULE_NAME$4, CMD_PLAY);
                  resolve(mp3);
                }
                reject("[music] open mp3 resource error");
              });
              break
          }
        }
      })
    },
    pause: function pause() {
      mp3.status = 2;
      Vue.Native.callNative(MODULE_NAME$4, CMD_PAUSE);
    },
    resume: function resume() {
      mp3.status = 1;
      Vue.Native.callNative(MODULE_NAME$4, CMD_RESUME);
    },
    stop: function stop() {
      mp3.status = 0;
      Vue.Native.callNative(MODULE_NAME$4, CMD_STOP);
    },
    isPlaying: function isPlaying() {
      return Vue.Native.callNativeWithPromise(MODULE_NAME$4, CMD_ISPLAYING)
    },
    isLoop: function isLoop() {
      return Vue.Native.callNativeWithPromise(MODULE_NAME$4, CMD_ISLOOP)
    },
    setSeek: function setSeek(process) {
      return new Promise(function (resolve, reject) {
        if (mp3.path) {
          Vue.Native.callNativeWithPromise(MODULE_NAME$4, CMD_SETSRC, mp3.path).then(function (total) {
            if (total > process) {
              Vue.Native.callNative(MODULE_NAME$4, CMD_PLAY);
              Vue.Native.callNative(MODULE_NAME$4, CMD_SETSEEK, process);
              resolve(mp3);
            }
            else { throwError(reject("[music] open mp3 resource error")); }
          });
        } else { rthrowErroreject("[music] mp3 resource path not exist"); }
      })
    },
    setSpeed: function setSpeed(speed) {
      Vue.Native.callNative(MODULE_NAME$4, CMD_SETSPEED, speed);
    },
    setLoop: function setLoop(bool) {
      Vue.Native.callNative(MODULE_NAME$4, CMD_SETLOOP, bool);
    },
    /* event */
    onProgress: function onProgress(callback) {
      var instance = Vue.prototype;
      instance.$nextTick(function () { return instance.$app.$on(CMD_ONPROGRESS, function (message) {
          var totalSecs = message.totalSecs;
          var currSecs = message.currSecs;
          callback({
            total: totalSecs,
            process: currSecs,
          });
        }); }
      );
    },
    onEnd: function onEnd(callback) {
      var instance = Vue.prototype;
      instance.$nextTick(function () { return instance.$app.$on(CMD_ONCOMPLETE, function () { return callback(); }); }
      );
    },
    onLoading: function onLoading(callback) {
      var instance = Vue.prototype;
      instance.$nextTick(function () { return instance.$app.$on(CMD_ONLOADING, function (bool) { return callback(bool); }); }
      );
    },
    onError: function onError(callback) {
      var instance = Vue.prototype;
      instance.$nextTick(function () { return instance.$app.$on(CMD_ONERROR, function (response) { return callback(response); }); }
      );
    },
  };
}

/*
 * @Author: dali.chen
 * @Date: 2020-06-17 14:13:18
 * @Last Modified by: dali.chen
 * @Last Modified time: 2020-09-05 19:58:46
 */

var MODULE_NAME$5 = 'AgoraRtcModule';

function mtModuleAgoraRtc(Vue) {
  var instance = Vue.prototype;
  instance.$agoraRtc = {
    /**
     *  频道管理
     */
    init: function init(appid, title, content) {
      if ( title === void 0 ) title = '52赫兹';
      if ( content === void 0 ) content = '广播中...';

      if (!appid || !isString_1(title) || !isString_1(content)) {
        return throwError("[agoraRtc] init params error")
      }
      var options = {
        appId: appid,
        serviceTitle: title,
        serviceContent: content,
      };
      return Vue.Native.callNativeWithPromise(MODULE_NAME$5, 'init', options)
    },

    setChannelProfile: function setChannelProfile(profile) {
      if ( profile === void 0 ) profile = 1;

      if (![1, 2, 3].includes(profile)) {
        return throwError("[agoraRtc] profile error")
      }
      return Vue.Native.callNativeWithPromise(MODULE_NAME$5, 'setChannelProfile', {
        profile: profile,
      })
    },

    setClientRole: function setClientRole(role) {
      if ( role === void 0 ) role = 2;

      if (![1, 2].includes(role)) {
        return throwError("[agoraRtc] role error")
      }
      Vue.Native.callNativeWithPromise(MODULE_NAME$5, 'setClientRole', {
        role: role,
      });
    },

    joinChannel: function joinChannel(token, channelName, optionalUid, optionalInfo) {
      if ( optionalInfo === void 0 ) optionalInfo = '';

      if (!token) { return throwError("[agoraRtc] token is empty") }
      if (!channelName || typeof channelName != 'string')
        { return throwError("[agoraRtc] channel error") }
      if (!isNumber_1(optionalUid)) { return throwError("[agoraRtc] uid error") }
      var options = {
        token: token,
        channelName: channelName,
        optionalInfo: optionalInfo,
        optionalUid: optionalUid,
      };
      return Vue.Native.callNativeWithPromise(
        MODULE_NAME$5,
        'joinChannel',
        options
      )
    },

    leaveChannel: function leaveChannel() {
      return Vue.Native.callNativeWithPromise(MODULE_NAME$5, 'leaveChannel')
    },

    switchChannel: function switchChannel(token, channelName) {
      if (!isString_1(token) || !isString_1(channelName)) {
        return throwError("[agoraRtc] token and channel is String")
      }
      return Vue.Native.callNativeWithPromise(MODULE_NAME$5, 'switchChannel', {
        token: token,
        channelName: channelName,
      })
    },

    renewToken: function renewToken() {
      return Vue.Native.callNativeWithPromise(MODULE_NAME$5, 'renewToken')
    },

    getConnectionState: function getConnectionState() {
      return Vue.Native.callNativeWithPromise(MODULE_NAME$5, 'getConnectionState')
    },

    /*
     * 音频管理
     */
    enableAudio: function enableAudio() {
      return Vue.Native.callNativeWithPromise(MODULE_NAME$5, 'enableAudio')
    },
    disableAudio: function disableAudio() {
      return Vue.Native.callNativeWithPromise(MODULE_NAME$5, 'disableAudio')
    },
    setAudioProfile: function setAudioProfile(profile, scenario) {
      if (!isNumber_1(profile) || !isNumber_1(scenario)) {
        return throwError("[agoraRtc] profile, scenario is number")
      }
      return Vue.Native.callNativeWithPromise(MODULE_NAME$5, 'setAudioProfile', {
        profile: profile,
        scenario: scenario,
      })
    },
    adjustRecordingSignalVolume: function adjustRecordingSignalVolume(volume) {
      if (!isNumber_1(volume)) {
        return throwError("[agoraRtc] volume is number")
      }
      return Vue.Native.callNativeWithPromise(
        MODULE_NAME$5,
        'adjustRecordingSignalVolume',
        {
          volume: volume,
        }
      )
    },
    adjustUserPlaybackSignalVolume: function adjustUserPlaybackSignalVolume(uid, volume) {
      if (!isNumber_1(uid) || !isNumber_1(volume)) {
        return throwError("[agoraRtc] uid, volume is number")
      }
      return Vue.Native.callNativeWithPromise(
        MODULE_NAME$5,
        'adjustUserPlaybackSignalVolume',
        {
          uid: uid,
          volume: volume,
        }
      )
    },
    adjustPlaybackSignalVolume: function adjustPlaybackSignalVolume(volume) {
      if (!isNumber_1(volume)) {
        return throwError("[agoraRtc] volume is number")
      }
      if (volume < 0 || volume > 400) {
        return throwError("[agoraRtc] volume over range")
      }
      return Vue.Native.callNativeWithPromise(
        MODULE_NAME$5,
        'adjustPlaybackSignalVolume',
        {
          volume: volume,
        }
      )
    },
    enableLocalAudio: function enableLocalAudio(muted) {
      if (!isBoolean_1(muted)) {
        return throwError("[agoraRtc] enabled error")
      }
      return Vue.Native.callNativeWithPromise(MODULE_NAME$5, 'enableLocalAudio', {
        muted: muted,
      })
    },
    muteLocalAudioStream: function muteLocalAudioStream(muted) {
      if (!isBoolean_1(muted)) {
        return throwError("[agoraRtc] muted error")
      }
      return Vue.Native.callNativeWithPromise(
        MODULE_NAME$5,
        'muteLocalAudioStream',
        {
          muted: muted,
        }
      )
    },
    muteRemoteAudioStream: function muteRemoteAudioStream(uid, muted) {
      if (!isNumber_1(uid) || !isBoolean_1(muted)) {
        return throwError("[agoraRtc] uid, muted error")
      }
      return Vue.Native.callNativeWithPromise(
        MODULE_NAME$5,
        'muteRemoteAudioStream',
        {
          uid: uid,
          muted: muted,
        }
      )
    },
    muteAllRemoteAudioStreams: function muteAllRemoteAudioStreams(muted) {
      if (!isBoolean_1(muted)) {
        return throwError("[agoraRtc] muted error")
      }
      return Vue.Native.callNativeWithPromise(
        MODULE_NAME$5,
        'muteAllRemoteAudioStreams',
        {
          muted: muted,
        }
      )
    },
    setDefaultMuteAllRemoteAudioStreams: function setDefaultMuteAllRemoteAudioStreams(muted) {
      if (!isBoolean_1(muted)) {
        return throwError("[agoraRtc] muted error")
      }
      return Vue.Native.callNativeWithPromise(
        MODULE_NAME$5,
        'setDefaultMuteAllRemoteAudioStreams',
        {
          muted: muted,
        }
      )
    },
    /**
     *  音乐文件播放及混音
     */
    startAudioMixing: function startAudioMixing(filePath, loopback, replace, cycle) {
      if ( loopback === void 0 ) loopback = false;
      if ( replace === void 0 ) replace = false;
      if ( cycle === void 0 ) cycle = 1;

      if (!filePath || !isString_1(filePath)) {
        return throwError("[agoraRtc] filePath error")
      }
      var options = {
        filePath: filePath,
        loopback: loopback,
        replace: replace,
        cycle: cycle,
      };
      return Vue.Native.callNativeWithPromise(
        MODULE_NAME$5,
        'startAudioMixing',
        options
      )
    },
    stopAudioMixing: function stopAudioMixing() {
      return Vue.Native.callNativeWithPromise(MODULE_NAME$5, 'stopAudioMixing')
    },
    pauseAudioMixing: function pauseAudioMixing() {
      return Vue.Native.callNativeWithPromise(MODULE_NAME$5, 'pauseAudioMixing')
    },
    resumeAudioMixing: function resumeAudioMixing() {
      return Vue.Native.callNativeWithPromise(MODULE_NAME$5, 'resumeAudioMixing')
    },
    adjustAudioMixingVolume: function adjustAudioMixingVolume(volume) {
      if ( volume === void 0 ) volume = 100;

      if (!isNumber_1(volume)) {
        return throwError("[agoraRtc] volume error")
      }
      return Vue.Native.callNativeWithPromise(
        MODULE_NAME$5,
        'adjustAudioMixingVolume',
        {
          volume: volume,
        }
      )
    },
    adjustAudioMixingPlayoutVolume: function adjustAudioMixingPlayoutVolume(volume) {
      if ( volume === void 0 ) volume = 100;

      if (!isNumber_1(volume)) {
        return throwError("[agoraRtc] volume error")
      }
      return Vue.Native.callNativeWithPromise(
        MODULE_NAME$5,
        'adjustAudioMixingPlayoutVolume',
        {
          volume: volume,
        }
      )
    },
    adjustAudioMixingPublishVolume: function adjustAudioMixingPublishVolume(volume) {
      if ( volume === void 0 ) volume = 100;

      if (!isNumber_1(volume)) {
        return throwError("[agoraRtc] volume error")
      }
      return Vue.Native.callNativeWithPromise(
        MODULE_NAME$5,
        'adjustAudioMixingPublishVolume',
        {
          volume: volume,
        }
      )
    },
    setAudioMixingPitch: function setAudioMixingPitch(pitch) {
      if (!isNumber_1(pitch)) {
        return throwError("[agoraRtc] pitch error")
      }
      return Vue.Native.callNativeWithPromise(
        MODULE_NAME$5,
        'setAudioMixingPitch',
        {
          pitch: pitch,
        }
      )
    },
    getAudioMixingPlayoutVolume: function getAudioMixingPlayoutVolume() {
      return Vue.Native.callNativeWithPromise(
        MODULE_NAME$5,
        'getAudioMixingPlayoutVolume'
      )
    },
    getAudioMixingPublishVolume: function getAudioMixingPublishVolume() {
      return Vue.Native.callNativeWithPromise(
        MODULE_NAME$5,
        'getAudioMixingPublishVolume'
      )
    },
    getAudioMixingDuration: function getAudioMixingDuration() {
      return Vue.Native.callNativeWithPromise(
        MODULE_NAME$5,
        'getAudioMixingDuration'
      )
    },
    getAudioMixingCurrentPosition: function getAudioMixingCurrentPosition() {
      return Vue.Native.callNativeWithPromise(
        MODULE_NAME$5,
        'getAudioMixingCurrentPosition'
      )
    },
    setAudioMixingPosition: function setAudioMixingPosition(pos) {
      if (!isNumber_1(pos)) {
        return throwError("[agoraRtc] pos error")
      }
      return Vue.Native.callNativeWithPromise(
        MODULE_NAME$5,
        'setAudioMixingPosition'
      )
    },
    /*
     * 变声与混响
     */
    setLocalVoiceChanger: function setLocalVoiceChanger(voiceChanger) {
      if (!isNumber_1(voiceChanger)) {
        return throwError("[agoraRtc] voiceChanger error")
      }
      return Vue.Native.callNativeWithPromise(
        MODULE_NAME$5,
        'setLocalVoiceChanger',
        {
          voiceChanger: voiceChanger,
        }
      )
    },
    setLocalVoiceReverbPreset: function setLocalVoiceReverbPreset(preset) {
      if (!isNumber_1(preset)) {
        return throwError("[agoraRtc] preset error")
      }
      return Vue.Native.callNativeWithPromise(
        MODULE_NAME$5,
        'setLocalVoiceReverbPreset',
        {
          preset: preset,
        }
      )
    },
    setLocalVoicePitch: function setLocalVoicePitch(pitch) {
      if (!isNumber_1(pitch)) {
        return throwError("[agoraRtc] pitch error")
      }
      return Vue.Native.callNativeWithPromise(
        MODULE_NAME$5,
        'setLocalVoicePitch',
        {
          pitch: pitch,
        }
      )
    },
    setLocalVoiceEqualization: function setLocalVoiceEqualization(bandFrequency, bandGain) {
      if (!isNumber_1(bandFrequency) || !isNumber_1(bandGain)) {
        return throwError("[agoraRtc] bandFrequency, bandGain error")
      }
      return Vue.Native.callNativeWithPromise(
        MODULE_NAME$5,
        'setLocalVoiceEqualization',
        {
          bandFrequency: bandFrequency,
          bandGain: bandGain,
        }
      )
    },
    setLocalVoiceReverb: function setLocalVoiceReverb(reverbKey, value) {
      if (!isNumber_1(reverbKey) || !isNumber_1(value)) {
        return throwError("[agoraRtc] reverbKey, value error")
      }
      return Vue.Native.callNativeWithPromise(
        MODULE_NAME$5,
        'setLocalVoiceEqualization',
        {
          reverbKey: reverbKey,
          value: value,
        }
      )
    },
    /*
     * 频道事件
     */
    onAgoraEvent: function onAgoraEvent(callback) {
      var instance = Vue.prototype;
      instance.$nextTick(function () { return instance.$app.$on('onAgoraEvent', function (response) { return callback(response); }); }
      );
    },
  };
}

/*
 * @Author: dali.chen 
 * @Date: 2020-06-16 15:05:42 
 * @Last Modified by: dali.chen
 * @Last Modified time: 2020-08-27 13:24:55
 */

var MODULE_NAME$6 = 'DownloadModule';
var DownloadModul = function DownloadModul(Vue) {
  this.Vue = Vue;
};
DownloadModul.prototype.addTask = function addTask (tag, url, folder, filename) {
  if (!tag || !isString_1(tag)) {
    return throwError('params tag error')
  }
  if (!url || !/^https?:\/\//.test(url)) {
    return throwError('params url error')
  }
  if (folder && !isString_1(folder)) {
    return throwError('params folder error')
  }
  if (filename && !isString_1(filename)) {
    return throwError('params filename error')
  }
  var options = {
    tag: tag,
    url: url,
  };
  if (folder) { options.folder = folder; }
  if (filename) { options.fileName = folder; }
  this.Vue.Native.callNative(MODULE_NAME$6, 'addTask', options);
};
DownloadModul.prototype.getTaskList = function getTaskList () {
  return this.Vue.Native.callNativeWithPromise(MODULE_NAME$6, 'getTaskList')
};
DownloadModul.prototype.getDownloadingList = function getDownloadingList () {
  return this.Vue.Native.callNativeWithPromise(MODULE_NAME$6, 'getDownloadingList')
};
DownloadModul.prototype.getFinishedList = function getFinishedList () {
  return this.Vue.Native.callNativeWithPromise(MODULE_NAME$6, 'getDownloadingList')
};
DownloadModul.prototype.startAll = function startAll () {
  return this.Vue.Native.callNative(MODULE_NAME$6, 'startAll')
};
DownloadModul.prototype.pauseAll = function pauseAll () {
  return this.Vue.Native.callNative(MODULE_NAME$6, 'pauseAll')
};
DownloadModul.prototype.removeAll = function removeAll () {
  return this.Vue.Native.callNative(MODULE_NAME$6, 'removeAll', {
    isRemoveFile: true,
  })
};
DownloadModul.prototype.start = function start (tag) {
  if (!tag || !isString_1(tag)) {
    return throwError('params tag error')
  }
  return this.Vue.Native.callNative(MODULE_NAME$6, 'start', tag)
};
DownloadModul.prototype.restart = function restart (tag) {
  if (!tag || !isString_1(tag)) {
    return throwError('params tag error')
  }
  return this.Vue.Native.callNative(MODULE_NAME$6, 'restart', tag)
};
DownloadModul.prototype.pause = function pause (tag) {
  if (!tag || !isString_1(tag)) {
    return throwError('params tag error')
  }
  return this.Vue.Native.callNative(MODULE_NAME$6, 'pause', tag)
};
DownloadModul.prototype.remove = function remove (tag) {
  if (!tag || !isString_1(tag)) {
    return throwError('params tag error')
  }
  return this.Vue.Native.callNative(MODULE_NAME$6, 'pause', {
    tag: tag,
    isRemoveFile: true,
  })
};
DownloadModul.prototype.onDownloadStart = function onDownloadStart (callback) {
  var instance = this.Vue.prototype;
  instance.$nextTick(function () { return instance.$app.$on('onDownloadStart', function (response) { return callback(response); }); }
  );
};
DownloadModul.prototype.onDownloadProgress = function onDownloadProgress (callback) {
  var instance = this.Vue.prototype;
  instance.$nextTick(function () { return instance.$app.$on('onDownloadProgress', function (response) { return callback(response); }); }
  );
};
DownloadModul.prototype.onDownloadError = function onDownloadError (callback) {
  var instance = this.Vue.prototype;
  instance.$nextTick(function () { return instance.$app.$on('onDownloadError', function (response) { return callback(response); }); }
  );
};
DownloadModul.prototype.onDownloadFinish = function onDownloadFinish (callback) {
  var instance = this.Vue.prototype;
  instance.$nextTick(function () { return instance.$app.$on('onDownloadFinish', function (response) { return callback(response); }); }
  );
};
DownloadModul.prototype.onDownloadRemove = function onDownloadRemove (callback) {
  var instance = this.Vue.prototype;
  instance.$nextTick(function () { return instance.$app.$on('onDownloadRemove', function (response) { return callback(response); }); }
  );
};
function mtModuleDownload (Vue) {
  Vue.prototype.$download = new DownloadModul(Vue);
}

/*
 * @Author: dali.chen
 * @Date: 2020-06-16 10:40:54
 * @Last Modified by: dali.chen
 * @Last Modified time: 2020-07-04 15:06:39
 */

var MODULE_NAME$7 = 'DataBaseModule';

function MtDataBaseModule(Vue) {
  Vue.prototype.$database = {
    create: function create(version, sqlList) {
      if (!isNumber_1(version)) {
        return throwError('params version error')
      }
      if (!isArray_1(sqlList)) {
        return throwError('params sqlList error')
      }
      var options = {
        version: version,
        create: sqlList,
      };
      return Vue.Native.callNativeWithPromise(MODULE_NAME$7, 'init', options)
    },
    upgrade: function upgrade(version, sqlList) {
      if (!isNumber_1(version)) {
        return throwError('params version error')
      }
      if (!isArray_1(sqlList)) {
        return throwError('params sqlList error')
      }
      var options = {
        version: version,
        upgrade: sqlList,
      };
      return Vue.Native.callNativeWithPromise(MODULE_NAME$7, 'init', options)
    },
    insert: function insert(table, data) {
      if (!isString_1(table)) {
        return throwError('params table error')
      }
      if (!isObject_1$1(data)) {
        return throwError('params data error')
      }
      var options = {
        tableName: table,
        data: data,
      };
      return Vue.Native.callNativeWithPromise(MODULE_NAME$7, 'insert', options)
    },
    update: function update(table, where, data) {
      if (!isString_1(table)) {
        return throwError('params table error')
      }
      if (!isString_1(where)) {
        return throwError('params where error')
      }
      if (!isObject_1$1(data)) {
        return throwError('params data error')
      }
      var options = {
        tableName: table,
        where: where,
        data: data,
      };
      return Vue.Native.callNativeWithPromise(MODULE_NAME$7, 'update', options)
    },
    delete: function delete$1(table, where) {
      if (!isString_1(table)) {
        return throwError('params table error')
      }
      if (!isString_1(where)) {
        return throwError('params where error')
      }
      var options = {
        tableName: table,
        where: where,
      };
      return Vue.Native.callNativeWithPromise(MODULE_NAME$7, 'delete', options)
    },
    query: function query(sql) {
      if (!isString_1(sql)) {
        return throwError('params sql error')
      }
      return Vue.Native.callNativeWithPromise(MODULE_NAME$7, 'query', sql)
    },
    exec: function exec(sql) {
      if (!isString_1(sql)) {
        return throwError('params sql error')
      }
      return Vue.Native.callNativeWithPromise(MODULE_NAME$7, 'execSQL', sql)
    },
  };
}

/*
 * @Author: dali.chen 
 * @Date: 2020-07-01 11:43:46 
 * @Last Modified by: dali.chen
 * @Last Modified time: 2020-08-27 13:21:42
 */

var BroadcastChannelModule = function BroadcastChannelModule(Vue) {
  this.Vue = Vue;
};
BroadcastChannelModule.prototype.emit = function emit (channel, message) {
    if ( channel === void 0 ) channel = '007';

  var options = {
    channel: channel,
    message: message
  };
  this.Vue.Native.callNative('BroadcastChannelModule', 'notifyAllPage', options);
};
BroadcastChannelModule.prototype.on = function on (channel, callback) {
    if ( channel === void 0 ) channel = '007';

  var instance = this.Vue.prototype;
  instance.$nextTick(function () { return instance.$app.$on('onNotify', function (options) {
    if (options.channel && options.channel === channel) {
      callback(options.message);
    }
  }); });
};

function mtModuleBroadcast(Vue) {
  Vue.prototype.$broadcast = new BroadcastChannelModule(Vue);
}

/*
 * @Author: dali.chen
 * @Date: 2020-07-30 10:28:05
 * @Last Modified by: dali.chen
 * @Last Modified time: 2020-09-07 11:07:59
 */

var UUID_REG = /^[a-zA-Z0-9]{8}(-[a-zA-Z0-9]{4}){3}-[a-zA-Z0-9]{12}$/;
var MODULE_NAME$8 = 'BluetoothModule';

var Ble = function Ble(Vue) {
  this.Vue = Vue;
};
Ble.prototype.check = function check () {
  return this.Vue.Native.callNativeWithPromise(MODULE_NAME$8, 'check')
};
Ble.prototype.enable = function enable () {
  this.Vue.Native.callNative(MODULE_NAME$8, 'enable');
};
Ble.prototype.disable = function disable () {
  this.Vue.Native.callNative(MODULE_NAME$8, 'enable');
};
Ble.prototype.startScan = function startScan () {
  this.Vue.Native.callNative(MODULE_NAME$8, 'startScan');
};
Ble.prototype.stopScan = function stopScan () {
  this.Vue.Native.callNative(MODULE_NAME$8, 'stopScan');
};
Ble.prototype.connect = function connect (mac) {
  if (isString_1(mac)) {
    this.Vue.Native.callNative(MODULE_NAME$8, 'connect', mac);
  }
};
Ble.prototype.disConnect = function disConnect (mac) {
  if (!isString_1(mac)) {
    return throwError(("[" + MODULE_NAME$8 + "] mac required String."))
  }
  this.Vue.Native.callNative(MODULE_NAME$8, 'disConnect', mac);
};
Ble.prototype.notify = function notify (mac, serviceUuid, notifyUuid) {
  if (!isString_1(mac)) {
    return throwError(("[" + MODULE_NAME$8 + "] mac required String."))
  }
  if (!UUID_REG.test(serviceUuid) || !UUID_REG.test(notifyUuid)) {
    return throwError(
      ("[" + MODULE_NAME$8 + "] serviceUuid or notifyUuid required uuid format.")
    )
  }
  this.Vue.Native.callNative(MODULE_NAME$8, 'notify', {
    mac: mac,
    serviceUuid: serviceUuid,
    notifyUuid: notifyUuid,
  });
};
Ble.prototype.unNotify = function unNotify (mac, serviceUuid, notifyUuid) {
  if (!isString_1(mac)) {
    return throwError(("[" + MODULE_NAME$8 + "] mac required String."))
  }
  if (!UUID_REG.test(serviceUuid) || !UUID_REG.test(notifyUuid)) {
    return throwError(
      ("[" + MODULE_NAME$8 + "] serviceUuid or notifyUuid required uuid format.")
    )
  }
  this.Vue.Native.callNative(MODULE_NAME$8, 'unNotify', {
    mac: mac,
    serviceUuid: serviceUuid,
    notifyUuid: notifyUuid,
  });
};
Ble.prototype.write = function write (mac, serviceUuid, writeUuid, data) {
  if (!isString_1(mac)) {
    return throwError(("[" + MODULE_NAME$8 + "] mac required String."))
  }
  if (!UUID_REG.test(serviceUuid) || !UUID_REG.test(writeUuid)) {
    return throwError(
      ("[" + MODULE_NAME$8 + "] serviceUuid or notifyUuid required uuid format.")
    )
  }
  if (!isString_1(data)) {
    return throwError(("[" + MODULE_NAME$8 + "] data required String."))
  }
  return this.Vue.Native.callNativeWithPromise(MODULE_NAME$8, 'write', {
    mac: mac,
    serviceUuid: serviceUuid,
    writeUuid: writeUuid,
    data: data,
  })
};
Ble.prototype.read = function read (mac, serviceUuid, notifyUuid) {
  if (!isString_1(mac)) {
    return throwError(("[" + MODULE_NAME$8 + "] mac required String."))
  }
  if (!UUID_REG.test(serviceUuid) || !UUID_REG.test(notifyUuid)) {
    return throwError(
      ("[" + MODULE_NAME$8 + "] serviceUuid or notifyUuid required uuid format.")
    )
  }
  return this.Vue.Native.callNativeWithPromise(MODULE_NAME$8, 'read', {
    mac: mac,
    serviceUuid: serviceUuid,
    notifyUuid: notifyUuid,
  })
};
Ble.prototype.onBleEvent = function onBleEvent (callback) {
  if (!isFunction_1$1(callback)) {
    return throwError(("[" + MODULE_NAME$8 + "] callback required Function."))
  }
  var instance = this.Vue.prototype;
  instance.$nextTick(function () { return instance.$app.$on('onBleEvent', function (res) {
    callback(res);
  }); });
};

function mtModuleBluetooth(Vue) {
  Vue.prototype.$bluetooth = new Ble(Vue);
}

/*
 * @Author: dali.chen 
 * @Date: 2020-08-20 16:46:54 
 * @Last Modified by: dali.chen
 * @Last Modified time: 2020-08-20 17:12:38
 */
// global.Hippy.bridge.callNative('ConsoleModule', 'log', '[1]')
var Console = function Console () {};

Console.prototype.log = function log () {
    var message = [], len = arguments.length;
    while ( len-- ) message[ len ] = arguments[ len ];

  var array = Array.from(message);
  global.Hippy.bridge.callNative('ConsoleModule', 'log', JSON.stringify(array));
};
function mtModuleConsole(Vue) {
  Vue.prototype.log = new Console().log;
}

var IosModule = function IosModule(Vue) {
  this.Vue = Vue;
};
IosModule.prototype.getPaddingBottomIOS = function getPaddingBottomIOS () {
  return this.Vue.Native.callNativeWithPromise(
    'iOSModule',
    'getPaddingBottomIOS'
  )
};

function mtModuleIos(Vue) {
  Vue.prototype.$ios = new IosModule(Vue);
}

/*
 * @Author: dali.chen 
 * @Date: 2020-08-29 21:50:35 
 * @Last Modified by: dali.chen
 * @Last Modified time: 2020-09-07 11:06:56
 */

var HiProgressView = 'hi-progress-view';


function mtComponentProgress(Vue) {
  Vue.registerElement(HiProgressView, {
    component: {
      name: 'ProgressView',
      processEventData: function processEventData(event, nativeEventName, nativeEventParams) {
        event.nativeEventName = nativeEventName;
        event.nativeEventParams = nativeEventParams;
        return event
      },
    },
  });

  Vue.component('progress', {
    inheritAttrs: false,
    props: {
      initialValue: {
        type: Number,
        defaultValue: 0,
      },
      max: {
        type: Number,
        defaultValue: 100,
      },
      min: {
        type: Number,
        defaultValue: 0,
      },
      enableTouch: {
        type: Boolean,
        defaultValue: true,
      },
      tagName: {
        type: String,
        defaultValue: '',
      }
    },
    data: function data() {
      return {
        timeStamp: 0,
      }
    },
    beforeMount: function beforeMount() {
    },
    methods: {
      onProgressChanged: function onProgressChanged(evt) {
        this.$emit('progressChanged', evt.nativeEventParams);
      },
    },
    render: function render(h) {
      var on = getEventRedirector.call(this, [
        ['progressChanged', 'progressChanged'] ]);
      return h(
        HiProgressView,
        {
          on: on,
          ref: HiProgressView,
          attrs: {
            initialValue: this.initialValue,
            max: this.max,
            min: this.min,
            enableTouch: this.enableTouch,
            tagName: this.tagName,
          },
        },
        this.$slots.default
      )
    },
  });
}

/*
 * @Author: dali.chen
 * @Date: 2020-06-15 13:44:22
 * @Last Modified by: dali.chen
 * @Last Modified time: 2020-07-17 15:33:55
 */

var HiSvgaView = 'hi-svga-view';

function mtComponentSvga(Vue) {
  Vue.registerElement(HiSvgaView, {
    component: {
      name: 'SvgaView',
      processEventData: function processEventData(event, nativeEventName, nativeEventParams) {
        event.nativeEventName = nativeEventName;
        event.nativeEventParams = nativeEventParams;
        return event
      },
    },
  });

  Vue.component('svga', {
    inheritAttrs: false,
    props: {
      src: {
        type: String,
        defaultValue: '',
      },
      loops: {
        type: Number,
        defaultValue: 1,
      },
    },
    data: function data() {
      return {
        timeStamp: 0,
      }
    },
    beforeMount: function beforeMount() {},
    methods: {
      startAnimation: function startAnimation() {
        Vue.Native.callUIFunction(this.$refs[HiSvgaView], 'startAnimation');
      },
      stopAnimation: function stopAnimation() {
        Vue.Native.callUIFunction(this.$refs[HiSvgaView], 'stopAnimation');
      },
      onFinished: function onFinished(evt) {
        if (evt.timeStamp && evt.timeStamp != this.timeStamp) {
          this.timeStamp = evt.timeStamp;
          this.$emit('finished');
        }
      },
      onLoadError: function onLoadError(evt) {
        this.$emit('loadError', evt.nativeEventParams);
      },
    },
    render: function render(h) {
      var on = getEventRedirector.call(this, [
        ['finished', 'finished'],
        ['loadError', 'loadError'] ]);
      return h(
        HiSvgaView,
        {
          on: on,
          ref: HiSvgaView,
          attrs: {
            src: this.src,
            loops: this.loops,
          },
        },
        this.$slots.default
      )
    },
  });
}

/*
 * @Author: dali.chen 
 * @Date: 2020-06-17 21:57:49 
 * @Last Modified by: dali.chen
 * @Last Modified time: 2020-07-02 15:09:25
 */

var HiQrcodeView = 'hi-qrcode-view';
var codeType = {
  oneDimension: 'oneDimension', //所有一维条码格式
  onlyCode128: 'onlyCode128',  // 仅CODE_128
  onlyEan13: 'onlyEan13',  // 仅EAN_13
  twoDimension: 'twoDimension',  // 所有二维条码格式
  onlyQRCode:  'onlyQRCode', // 仅QR_CODE
  higtFrequency: 'higtFrequency',  // 高频率格式，包括 QR_CODE、ISBN13、UPC_A、EAN_13、CODE_128
  all: 'all',  // 所有格式
};

function mtComponentQrcode (Vue) {
  Vue.registerElement(HiQrcodeView, {
    component: {
      name: 'QrCodeScanView',
      processEventData: function processEventData(event, nativeEventName, nativeEventParams) {
        event.nativeEventName = nativeEventName;
        event.nativeEventParams = nativeEventParams;
        return event
      },
    },
  });

  Vue.component('qrcode', {
    inheritAttrs: false,
    props: {
      vibrate: {
        type: Boolean,
        default: false,
      },
      code: {
        type: String,
        default: codeType.onlyQRCode
      },
    },
    beforeMount: function beforeMount() {
    },
    methods: {
      callFunc: function callFunc(name) {
        Vue.Native.callUIFunction(this.$refs[HiQrcodeView], name);
      },
      startCamera: function startCamera() {
        this.callFunc('startCamera');
      },
      stopCamera: function stopCamera() {
        this.callFunc('stopCamera');
      },
      startSpot: function startSpot() {
        this.callFunc('startSpot');
      },
      stopSpot: function stopSpot() {
        this.callFunc('stopSpot');
      },
      openFlashlight: function openFlashlight() {
        this.callFunc('openFlashlight');
      },
      closeFlashlight: function closeFlashlight() {
        this.callFunc('closeFlashlight');
      },
      decodeQRCode: function decodeQRCode(path) {
        Vue.Native.callUIFunction(this.$refs[HiQrcodeView], 'decodeQRCode', [path]);
      },
      onQrCodeSuccess: function onQrCodeSuccess(evt) {
        this.$emit('success', evt.nativeEventParams);
      },
      onQrCodeFail: function onQrCodeFail(evt) {
        this.$emit('fail', evt.nativeEventParams);
      },
      onPermission: function onPermission(evt) {
        this.$emit('permission', evt.nativeEventParams);
      }
    },
    render: function render(h) {
      var on = getEventRedirector.call(this, [
        ['success', 'qrCodeSuccess'],
        ['fail', 'qrCodeFail'],
        ['permission', 'permission'] ]);
      return h(
        HiQrcodeView,
        {
          on: on,
          ref: HiQrcodeView,
          attrs: {
            isVibrator: this.vibrate,
            codetype: this.code,
          }
        },
        this.$slots.default
      )
    },
  });
}

/*
 * @Author: dali.chen
 * @Date: 2020-06-10 23:05:07
 * @Last Modified by: dali.chen
 * @Last Modified time: 2020-09-08 21:16:37
 */

/**
 * Register all of mt components
 */

var HippyMtComponents = {
  install: function install(Vue) {
    // module
    mtModuleHippyEvent(Vue);
    mtModuleContants(Vue);
    mtModuleNavigator(Vue);
    mtModuleLocalStorage(Vue);
    mtModuleClipBoard(Vue);
    mtModuleDialog(Vue);
    mtModuleMedia(Vue);
    mtModuleMqtt(Vue);
    mtModuleAliOss(Vue);
    mtModuleMusic(Vue);
    mtModuleMusic(Vue);
    mtModuleAgoraRtc(Vue);
    mtModuleDownload(Vue);
    MtDataBaseModule(Vue);
    mtModuleBroadcast(Vue);
    mtModuleBluetooth(Vue);
    mtModuleConsole(Vue); 
    mtModuleIos(Vue);
    
    // component
    mtComponentProgress(Vue);
    mtComponentSvga(Vue);
    mtComponentQrcode(Vue);
  },
};

export default HippyMtComponents;
