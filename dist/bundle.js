/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	__webpack_require__(1);

	var alphanumeric = _interopRequire(__webpack_require__(5));

	var expect = __webpack_require__(6).expect;

	describe("alphanumeric basics", function () {
	  it("should exist", function () {
	    expect(typeof alphanumeric).to.equal("function");
	  });

	  it("should return expected length", function () {
	    var rand = alphanumeric(5);
	    expect(rand.length).to.equal(5);
	  });
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel/polyfill is allowed");
	}
	global._babelPolyfill = true;

	__webpack_require__(3);

	__webpack_require__(4);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Core.js 0.6.1
	 * https://github.com/zloirock/core-js
	 * License: http://rock.mit-license.org
	 * © 2015 Denis Pushkarev
	 */
	!(function (global, framework, undefined) {
	  "use strict";

	  /******************************************************************************
	   * Module : common                                                            *
	   ******************************************************************************/

	  // Shortcuts for [[Class]] & property names
	  var OBJECT = "Object",
	      FUNCTION = "Function",
	      ARRAY = "Array",
	      STRING = "String",
	      NUMBER = "Number",
	      REGEXP = "RegExp",
	      DATE = "Date",
	      MAP = "Map",
	      SET = "Set",
	      WEAKMAP = "WeakMap",
	      WEAKSET = "WeakSet",
	      SYMBOL = "Symbol",
	      PROMISE = "Promise",
	      MATH = "Math",
	      ARGUMENTS = "Arguments",
	      PROTOTYPE = "prototype",
	      CONSTRUCTOR = "constructor",
	      TO_STRING = "toString",
	      TO_STRING_TAG = TO_STRING + "Tag",
	      TO_LOCALE = "toLocaleString",
	      HAS_OWN = "hasOwnProperty",
	      FOR_EACH = "forEach",
	      ITERATOR = "iterator",
	      FF_ITERATOR = "@@" + ITERATOR,
	      PROCESS = "process",
	      CREATE_ELEMENT = "createElement"
	  // Aliases global objects and prototypes
	  ,
	      Function = global[FUNCTION],
	      Object = global[OBJECT],
	      Array = global[ARRAY],
	      String = global[STRING],
	      Number = global[NUMBER],
	      RegExp = global[REGEXP],
	      Date = global[DATE],
	      Map = global[MAP],
	      Set = global[SET],
	      WeakMap = global[WEAKMAP],
	      WeakSet = global[WEAKSET],
	      Symbol = global[SYMBOL],
	      Math = global[MATH],
	      TypeError = global.TypeError,
	      RangeError = global.RangeError,
	      setTimeout = global.setTimeout,
	      setImmediate = global.setImmediate,
	      clearImmediate = global.clearImmediate,
	      parseInt = global.parseInt,
	      isFinite = global.isFinite,
	      process = global[PROCESS],
	      nextTick = process && process.nextTick,
	      document = global.document,
	      html = document && document.documentElement,
	      navigator = global.navigator,
	      define = global.define,
	      console = global.console || {},
	      ArrayProto = Array[PROTOTYPE],
	      ObjectProto = Object[PROTOTYPE],
	      FunctionProto = Function[PROTOTYPE],
	      Infinity = 1 / 0,
	      DOT = ".";

	  // http://jsperf.com/core-js-isobject
	  function isObject(it) {
	    return it !== null && (typeof it == "object" || typeof it == "function");
	  }
	  function isFunction(it) {
	    return typeof it == "function";
	  }
	  // Native function?
	  var isNative = ctx(/./.test, /\[native code\]\s*\}\s*$/, 1);

	  // Object internal [[Class]] or toStringTag
	  // http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring
	  var toString = ObjectProto[TO_STRING];
	  function setToStringTag(it, tag, stat) {
	    if (it && !has(it = stat ? it : it[PROTOTYPE], SYMBOL_TAG)) hidden(it, SYMBOL_TAG, tag);
	  }
	  function cof(it) {
	    return toString.call(it).slice(8, -1);
	  }
	  function classof(it) {
	    var O, T;
	    return it == undefined ? it === undefined ? "Undefined" : "Null" : typeof (T = (O = Object(it))[SYMBOL_TAG]) == "string" ? T : cof(O);
	  }

	  // Function
	  var call = FunctionProto.call,
	      apply = FunctionProto.apply,
	      REFERENCE_GET;
	  // Partial apply
	  function part() {
	    var fn = assertFunction(this),
	        length = arguments.length,
	        args = Array(length),
	        i = 0,
	        _ = path._,
	        holder = false;
	    while (length > i) if ((args[i] = arguments[i++]) === _) holder = true;
	    return function () {
	      var that = this,
	          _length = arguments.length,
	          i = 0,
	          j = 0,
	          _args;
	      if (!holder && !_length) return invoke(fn, args, that);
	      _args = args.slice();
	      if (holder) for (; length > i; i++) if (_args[i] === _) _args[i] = arguments[j++];
	      while (_length > j) _args.push(arguments[j++]);
	      return invoke(fn, _args, that);
	    };
	  }
	  // Optional / simple context binding
	  function ctx(fn, that, length) {
	    assertFunction(fn);
	    if (~length && that === undefined) {
	      return fn;
	    }switch (length) {
	      case 1:
	        return function (a) {
	          return fn.call(that, a);
	        };
	      case 2:
	        return function (a, b) {
	          return fn.call(that, a, b);
	        };
	      case 3:
	        return function (a, b, c) {
	          return fn.call(that, a, b, c);
	        };
	    }return function () {
	      return fn.apply(that, arguments);
	    };
	  }
	  // Fast apply
	  // http://jsperf.lnkit.com/fast-apply/5
	  function invoke(fn, args, that) {
	    var un = that === undefined;
	    switch (args.length | 0) {
	      case 0:
	        return un ? fn() : fn.call(that);
	      case 1:
	        return un ? fn(args[0]) : fn.call(that, args[0]);
	      case 2:
	        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
	      case 3:
	        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
	      case 4:
	        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
	      case 5:
	        return un ? fn(args[0], args[1], args[2], args[3], args[4]) : fn.call(that, args[0], args[1], args[2], args[3], args[4]);
	    }return fn.apply(that, args);
	  }

	  // Object:
	  var create = Object.create,
	      getPrototypeOf = Object.getPrototypeOf,
	      setPrototypeOf = Object.setPrototypeOf,
	      defineProperty = Object.defineProperty,
	      defineProperties = Object.defineProperties,
	      getOwnDescriptor = Object.getOwnPropertyDescriptor,
	      getKeys = Object.keys,
	      getNames = Object.getOwnPropertyNames,
	      getSymbols = Object.getOwnPropertySymbols,
	      isFrozen = Object.isFrozen,
	      has = ctx(call, ObjectProto[HAS_OWN], 2)
	  // Dummy, fix for not array-like ES3 string in es5 module
	  ,
	      ES5Object = Object,
	      Dict;
	  function toObject(it) {
	    return ES5Object(assertDefined(it));
	  }
	  function returnIt(it) {
	    return it;
	  }
	  function returnThis() {
	    return this;
	  }
	  function get(object, key) {
	    if (has(object, key)) {
	      return object[key];
	    }
	  }
	  function ownKeys(it) {
	    assertObject(it);
	    return getSymbols ? getNames(it).concat(getSymbols(it)) : getNames(it);
	  }
	  // 19.1.2.1 Object.assign(target, source, ...)
	  var assign = Object.assign || function (target, source) {
	    var T = Object(assertDefined(target)),
	        l = arguments.length,
	        i = 1;
	    while (l > i) {
	      var S = ES5Object(arguments[i++]),
	          keys = getKeys(S),
	          length = keys.length,
	          j = 0,
	          key;
	      while (length > j) T[key = keys[j++]] = S[key];
	    }
	    return T;
	  };
	  function keyOf(object, el) {
	    var O = toObject(object),
	        keys = getKeys(O),
	        length = keys.length,
	        index = 0,
	        key;
	    while (length > index) if (O[key = keys[index++]] === el) {
	      return key;
	    }
	  }

	  // Array
	  // array('str1,str2,str3') => ['str1', 'str2', 'str3']
	  function array(it) {
	    return String(it).split(",");
	  }
	  var push = ArrayProto.push,
	      unshift = ArrayProto.unshift,
	      slice = ArrayProto.slice,
	      splice = ArrayProto.splice,
	      indexOf = ArrayProto.indexOf,
	      forEach = ArrayProto[FOR_EACH];
	  /*
	   * 0 -> forEach
	   * 1 -> map
	   * 2 -> filter
	   * 3 -> some
	   * 4 -> every
	   * 5 -> find
	   * 6 -> findIndex
	   */
	  function createArrayMethod(type) {
	    var isMap = type == 1,
	        isFilter = type == 2,
	        isSome = type == 3,
	        isEvery = type == 4,
	        isFindIndex = type == 6,
	        noholes = type == 5 || isFindIndex;
	    return function (callbackfn /*, that = undefined */) {
	      var O = Object(assertDefined(this)),
	          that = arguments[1],
	          self = ES5Object(O),
	          f = ctx(callbackfn, that, 3),
	          length = toLength(self.length),
	          index = 0,
	          result = isMap ? Array(length) : isFilter ? [] : undefined,
	          val,
	          res;
	      for (; length > index; index++) if (noholes || index in self) {
	        val = self[index];
	        res = f(val, index, O);
	        if (type) {
	          if (isMap) result[index] = res; // map
	          else if (res) switch (type) {
	            case 3:
	              return true; // some
	            case 5:
	              return val; // find
	            case 6:
	              return index; // findIndex
	            case 2:
	              result.push(val); // filter
	          } else if (isEvery) return false; // every
	        }
	      }
	      return isFindIndex ? -1 : isSome || isEvery ? isEvery : result;
	    };
	  }
	  function createArrayContains(isContains) {
	    return function (el /*, fromIndex = 0 */) {
	      var O = toObject(this),
	          length = toLength(O.length),
	          index = toIndex(arguments[1], length);
	      if (isContains && el != el) {
	        for (; length > index; index++) if (sameNaN(O[index])) return isContains || index;
	      } else for (; length > index; index++) if (isContains || index in O) {
	        if (O[index] === el) return isContains || index;
	      }return !isContains && -1;
	    };
	  }
	  function generic(A, B) {
	    // strange IE quirks mode bug -> use typeof vs isFunction
	    return typeof A == "function" ? A : B;
	  }

	  // Math
	  var MAX_SAFE_INTEGER = 9007199254740991 // pow(2, 53) - 1 == 9007199254740991
	  ,
	      pow = Math.pow,
	      abs = Math.abs,
	      ceil = Math.ceil,
	      floor = Math.floor,
	      max = Math.max,
	      min = Math.min,
	      random = Math.random,
	      trunc = Math.trunc || function (it) {
	    return (it > 0 ? floor : ceil)(it);
	  };
	  // 20.1.2.4 Number.isNaN(number)
	  function sameNaN(number) {
	    return number != number;
	  }
	  // 7.1.4 ToInteger
	  function toInteger(it) {
	    return isNaN(it) ? 0 : trunc(it);
	  }
	  // 7.1.15 ToLength
	  function toLength(it) {
	    return it > 0 ? min(toInteger(it), MAX_SAFE_INTEGER) : 0;
	  }
	  function toIndex(index, length) {
	    var index = toInteger(index);
	    return index < 0 ? max(index + length, 0) : min(index, length);
	  }
	  function lz(num) {
	    return num > 9 ? num : "0" + num;
	  }

	  function createReplacer(regExp, replace, isStatic) {
	    var replacer = isObject(replace) ? function (part) {
	      return replace[part];
	    } : replace;
	    return function (it) {
	      return String(isStatic ? it : this).replace(regExp, replacer);
	    };
	  }
	  function createPointAt(toString) {
	    return function (pos) {
	      var s = String(assertDefined(this)),
	          i = toInteger(pos),
	          l = s.length,
	          a,
	          b;
	      if (i < 0 || i >= l) return toString ? "" : undefined;
	      a = s.charCodeAt(i);
	      return a < 55296 || a > 56319 || i + 1 === l || (b = s.charCodeAt(i + 1)) < 56320 || b > 57343 ? toString ? s.charAt(i) : a : toString ? s.slice(i, i + 2) : (a - 55296 << 10) + (b - 56320) + 65536;
	    };
	  }

	  // Assertion & errors
	  var REDUCE_ERROR = "Reduce of empty object with no initial value";
	  function assert(condition, msg1, msg2) {
	    if (!condition) throw TypeError(msg2 ? msg1 + msg2 : msg1);
	  }
	  function assertDefined(it) {
	    if (it == undefined) throw TypeError("Function called on null or undefined");
	    return it;
	  }
	  function assertFunction(it) {
	    assert(isFunction(it), it, " is not a function!");
	    return it;
	  }
	  function assertObject(it) {
	    assert(isObject(it), it, " is not an object!");
	    return it;
	  }
	  function assertInstance(it, Constructor, name) {
	    assert(it instanceof Constructor, name, ": use the 'new' operator!");
	  }

	  // Property descriptors & Symbol
	  function descriptor(bitmap, value) {
	    return {
	      enumerable: !(bitmap & 1),
	      configurable: !(bitmap & 2),
	      writable: !(bitmap & 4),
	      value: value
	    };
	  }
	  function simpleSet(object, key, value) {
	    object[key] = value;
	    return object;
	  }
	  function createDefiner(bitmap) {
	    return DESC ? function (object, key, value) {
	      return defineProperty(object, key, descriptor(bitmap, value));
	    } : simpleSet;
	  }
	  function uid(key) {
	    return SYMBOL + "(" + key + ")_" + (++sid + random())[TO_STRING](36);
	  }
	  function getWellKnownSymbol(name, setter) {
	    return Symbol && Symbol[name] || (setter ? Symbol : safeSymbol)(SYMBOL + DOT + name);
	  }
	  // The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.
	  var DESC = !!(function () {
	    try {
	      return defineProperty({}, "a", { get: function get() {
	          return 2;
	        } }).a == 2;
	    } catch (e) {}
	  })(),
	      sid = 0,
	      hidden = createDefiner(1),
	      set = Symbol ? simpleSet : hidden,
	      safeSymbol = Symbol || uid;
	  function assignHidden(target, src) {
	    for (var key in src) hidden(target, key, src[key]);
	    return target;
	  }

	  var SYMBOL_UNSCOPABLES = getWellKnownSymbol("unscopables"),
	      ArrayUnscopables = ArrayProto[SYMBOL_UNSCOPABLES] || {},
	      SYMBOL_TAG = getWellKnownSymbol(TO_STRING_TAG),
	      SYMBOL_SPECIES = getWellKnownSymbol("species"),
	      SYMBOL_ITERATOR;
	  function setSpecies(C) {
	    if (DESC && (framework || !isNative(C))) defineProperty(C, SYMBOL_SPECIES, {
	      configurable: true,
	      get: returnThis
	    });
	  }

	  /******************************************************************************
	   * Module : common.export                                                     *
	   ******************************************************************************/

	  var NODE = cof(process) == PROCESS,
	      core = {},
	      path = framework ? global : core,
	      old = global.core,
	      exportGlobal
	  // type bitmap
	  ,
	      FORCED = 1,
	      GLOBAL = 2,
	      STATIC = 4,
	      PROTO = 8,
	      BIND = 16,
	      WRAP = 32;
	  function $define(type, name, source) {
	    var key,
	        own,
	        out,
	        exp,
	        isGlobal = type & GLOBAL,
	        target = isGlobal ? global : type & STATIC ? global[name] : (global[name] || ObjectProto)[PROTOTYPE],
	        exports = isGlobal ? core : core[name] || (core[name] = {});
	    if (isGlobal) source = name;
	    for (key in source) {
	      // there is a similar native
	      own = !(type & FORCED) && target && key in target && (!isFunction(target[key]) || isNative(target[key]));
	      // export native or passed
	      out = (own ? target : source)[key];
	      // prevent global pollution for namespaces
	      if (!framework && isGlobal && !isFunction(target[key])) exp = source[key];
	      // bind timers to global for call from export context
	      else if (type & BIND && own) exp = ctx(out, global);
	      // wrap global constructors for prevent change them in library
	      else if (type & WRAP && !framework && target[key] == out) {
	        exp = function (param) {
	          return this instanceof out ? new out(param) : out(param);
	        };
	        exp[PROTOTYPE] = out[PROTOTYPE];
	      } else exp = type & PROTO && isFunction(out) ? ctx(call, out) : out;
	      // extend global
	      if (framework && target && !own) {
	        if (isGlobal) target[key] = out;else delete target[key] && hidden(target, key, out);
	      }
	      // export
	      if (exports[key] != out) hidden(exports, key, exp);
	    }
	  }
	  // CommonJS export
	  if (typeof module != "undefined" && module.exports) module.exports = core;
	  // RequireJS export
	  else if (isFunction(define) && define.amd) define(function () {
	    return core;
	  });
	  // Export to global object
	  else exportGlobal = true;
	  if (exportGlobal || framework) {
	    core.noConflict = function () {
	      global.core = old;
	      return core;
	    };
	    global.core = core;
	  }

	  /******************************************************************************
	   * Module : common.iterators                                                  *
	   ******************************************************************************/

	  SYMBOL_ITERATOR = getWellKnownSymbol(ITERATOR);
	  var ITER = safeSymbol("iter"),
	      KEY = 1,
	      VALUE = 2,
	      Iterators = {},
	      IteratorPrototype = {}
	  // Safari has byggy iterators w/o `next`
	  ,
	      BUGGY_ITERATORS = "keys" in ArrayProto && !("next" in [].keys());
	  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	  setIterator(IteratorPrototype, returnThis);
	  function setIterator(O, value) {
	    hidden(O, SYMBOL_ITERATOR, value);
	    // Add iterator for FF iterator protocol
	    FF_ITERATOR in ArrayProto && hidden(O, FF_ITERATOR, value);
	  }
	  function createIterator(Constructor, NAME, next, proto) {
	    Constructor[PROTOTYPE] = create(proto || IteratorPrototype, { next: descriptor(1, next) });
	    setToStringTag(Constructor, NAME + " Iterator");
	  }
	  function defineIterator(Constructor, NAME, value, DEFAULT) {
	    var proto = Constructor[PROTOTYPE],
	        iter = get(proto, SYMBOL_ITERATOR) || get(proto, FF_ITERATOR) || DEFAULT && get(proto, DEFAULT) || value;
	    if (framework) {
	      // Define iterator
	      setIterator(proto, iter);
	      if (iter !== value) {
	        var iterProto = getPrototypeOf(iter.call(new Constructor()));
	        // Set @@toStringTag to native iterators
	        setToStringTag(iterProto, NAME + " Iterator", true);
	        // FF fix
	        has(proto, FF_ITERATOR) && setIterator(iterProto, returnThis);
	      }
	    }
	    // Plug for library
	    Iterators[NAME] = iter;
	    // FF & v8 fix
	    Iterators[NAME + " Iterator"] = returnThis;
	    return iter;
	  }
	  function defineStdIterators(Base, NAME, Constructor, next, DEFAULT, IS_SET) {
	    function createIter(kind) {
	      return function () {
	        return new Constructor(this, kind);
	      };
	    }
	    createIterator(Constructor, NAME, next);
	    var entries = createIter(KEY + VALUE),
	        values = createIter(VALUE);
	    if (DEFAULT == VALUE) values = defineIterator(Base, NAME, values, "values");else entries = defineIterator(Base, NAME, entries, "entries");
	    if (DEFAULT) {
	      $define(PROTO + FORCED * BUGGY_ITERATORS, NAME, {
	        entries: entries,
	        keys: IS_SET ? values : createIter(KEY),
	        values: values
	      });
	    }
	  }
	  function iterResult(done, value) {
	    return { value: value, done: !!done };
	  }
	  function isIterable(it) {
	    var O = Object(it),
	        Symbol = global[SYMBOL],
	        hasExt = ((Symbol && Symbol[ITERATOR] || FF_ITERATOR) in O);
	    return hasExt || SYMBOL_ITERATOR in O || has(Iterators, classof(O));
	  }
	  function getIterator(it) {
	    var Symbol = global[SYMBOL],
	        ext = it[Symbol && Symbol[ITERATOR] || FF_ITERATOR],
	        getIter = ext || it[SYMBOL_ITERATOR] || Iterators[classof(it)];
	    return assertObject(getIter.call(it));
	  }
	  function stepCall(fn, value, entries) {
	    return entries ? invoke(fn, value) : fn(value);
	  }
	  function checkDangerIterClosing(fn) {
	    var danger = true;
	    var O = {
	      next: function next() {
	        throw 1;
	      },
	      "return": function _return() {
	        danger = false;
	      }
	    };
	    O[SYMBOL_ITERATOR] = returnThis;
	    try {
	      fn(O);
	    } catch (e) {}
	    return danger;
	  }
	  function closeIterator(iterator) {
	    var ret = iterator["return"];
	    if (ret !== undefined) ret.call(iterator);
	  }
	  function safeIterClose(exec, iterator) {
	    try {
	      exec(iterator);
	    } catch (e) {
	      closeIterator(iterator);
	      throw e;
	    }
	  }
	  function forOf(iterable, entries, fn, that) {
	    safeIterClose(function (iterator) {
	      var f = ctx(fn, that, entries ? 2 : 1),
	          step;
	      while (!(step = iterator.next()).done) if (stepCall(f, step.value, entries) === false) {
	        return closeIterator(iterator);
	      }
	    }, getIterator(iterable));
	  }

	  /******************************************************************************
	   * Module : es6.symbol                                                        *
	   ******************************************************************************/

	  // ECMAScript 6 symbols shim
	  !(function (TAG, SymbolRegistry, AllSymbols, setter) {
	    // 19.4.1.1 Symbol([description])
	    if (!isNative(Symbol)) {
	      Symbol = function (description) {
	        assert(!(this instanceof Symbol), SYMBOL + " is not a " + CONSTRUCTOR);
	        var tag = uid(description),
	            sym = set(create(Symbol[PROTOTYPE]), TAG, tag);
	        AllSymbols[tag] = sym;
	        DESC && setter && defineProperty(ObjectProto, tag, {
	          configurable: true,
	          set: function set(value) {
	            hidden(this, tag, value);
	          }
	        });
	        return sym;
	      };
	      hidden(Symbol[PROTOTYPE], TO_STRING, function () {
	        return this[TAG];
	      });
	    }
	    $define(GLOBAL + WRAP, { Symbol: Symbol });

	    var symbolStatics = {
	      // 19.4.2.1 Symbol.for(key)
	      "for": function _for(key) {
	        return has(SymbolRegistry, key += "") ? SymbolRegistry[key] : SymbolRegistry[key] = Symbol(key);
	      },
	      // 19.4.2.4 Symbol.iterator
	      iterator: SYMBOL_ITERATOR || getWellKnownSymbol(ITERATOR),
	      // 19.4.2.5 Symbol.keyFor(sym)
	      keyFor: part.call(keyOf, SymbolRegistry),
	      // 19.4.2.10 Symbol.species
	      species: SYMBOL_SPECIES,
	      // 19.4.2.13 Symbol.toStringTag
	      toStringTag: SYMBOL_TAG = getWellKnownSymbol(TO_STRING_TAG, true),
	      // 19.4.2.14 Symbol.unscopables
	      unscopables: SYMBOL_UNSCOPABLES,
	      pure: safeSymbol,
	      set: set,
	      useSetter: function useSetter() {
	        setter = true;
	      },
	      useSimple: function useSimple() {
	        setter = false;
	      }
	    };
	    // 19.4.2.2 Symbol.hasInstance
	    // 19.4.2.3 Symbol.isConcatSpreadable
	    // 19.4.2.6 Symbol.match
	    // 19.4.2.8 Symbol.replace
	    // 19.4.2.9 Symbol.search
	    // 19.4.2.11 Symbol.split
	    // 19.4.2.12 Symbol.toPrimitive
	    forEach.call(array("hasInstance,isConcatSpreadable,match,replace,search,split,toPrimitive"), function (it) {
	      symbolStatics[it] = getWellKnownSymbol(it);
	    });
	    $define(STATIC, SYMBOL, symbolStatics);

	    setToStringTag(Symbol, SYMBOL);

	    $define(STATIC + FORCED * !isNative(Symbol), OBJECT, {
	      // 19.1.2.7 Object.getOwnPropertyNames(O)
	      getOwnPropertyNames: function getOwnPropertyNames(it) {
	        var names = getNames(toObject(it)),
	            result = [],
	            key,
	            i = 0;
	        while (names.length > i) has(AllSymbols, key = names[i++]) || result.push(key);
	        return result;
	      },
	      // 19.1.2.8 Object.getOwnPropertySymbols(O)
	      getOwnPropertySymbols: function getOwnPropertySymbols(it) {
	        var names = getNames(toObject(it)),
	            result = [],
	            key,
	            i = 0;
	        while (names.length > i) has(AllSymbols, key = names[i++]) && result.push(AllSymbols[key]);
	        return result;
	      }
	    });

	    // 20.2.1.9 Math[@@toStringTag]
	    setToStringTag(Math, MATH, true);
	    // 24.3.3 JSON[@@toStringTag]
	    setToStringTag(global.JSON, "JSON", true);
	  })(safeSymbol("tag"), {}, {}, true);

	  /******************************************************************************
	   * Module : es6.object.statics                                                *
	   ******************************************************************************/

	  !(function () {
	    var objectStatic = {
	      // 19.1.3.1 Object.assign(target, source)
	      assign: assign,
	      // 19.1.3.10 Object.is(value1, value2)
	      is: function is(x, y) {
	        return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	      }
	    };
	    // 19.1.3.19 Object.setPrototypeOf(O, proto)
	    // Works with __proto__ only. Old v8 can't works with null proto objects.
	    "__proto__" in ObjectProto && (function (buggy, set) {
	      try {
	        set = ctx(call, getOwnDescriptor(ObjectProto, "__proto__").set, 2);
	        set({}, ArrayProto);
	      } catch (e) {
	        buggy = true;
	      }
	      objectStatic.setPrototypeOf = setPrototypeOf = setPrototypeOf || function (O, proto) {
	        assertObject(O);
	        assert(proto === null || isObject(proto), proto, ": can't set as prototype!");
	        if (buggy) O.__proto__ = proto;else set(O, proto);
	        return O;
	      };
	    })();
	    $define(STATIC, OBJECT, objectStatic);
	  })();

	  /******************************************************************************
	   * Module : es6.object.prototype                                              *
	   ******************************************************************************/

	  !(function (tmp) {
	    // 19.1.3.6 Object.prototype.toString()
	    tmp[SYMBOL_TAG] = DOT;
	    if (cof(tmp) != DOT) hidden(ObjectProto, TO_STRING, function () {
	      return "[object " + classof(this) + "]";
	    });
	  })({});

	  /******************************************************************************
	   * Module : es6.object.statics-accept-primitives                              *
	   ******************************************************************************/

	  !(function () {
	    // Object static methods accept primitives
	    function wrapObjectMethod(key, MODE) {
	      var fn = Object[key],
	          exp = core[OBJECT][key],
	          f = 0,
	          o = {};
	      if (!exp || isNative(exp)) {
	        o[key] = MODE == 1 ? function (it) {
	          return isObject(it) ? fn(it) : it;
	        } : MODE == 2 ? function (it) {
	          return isObject(it) ? fn(it) : true;
	        } : MODE == 3 ? function (it) {
	          return isObject(it) ? fn(it) : false;
	        } : MODE == 4 ? function (it, key) {
	          return fn(toObject(it), key);
	        } : function (it) {
	          return fn(toObject(it));
	        };
	        try {
	          fn(DOT);
	        } catch (e) {
	          f = 1;
	        }
	        $define(STATIC + FORCED * f, OBJECT, o);
	      }
	    }
	    wrapObjectMethod("freeze", 1);
	    wrapObjectMethod("seal", 1);
	    wrapObjectMethod("preventExtensions", 1);
	    wrapObjectMethod("isFrozen", 2);
	    wrapObjectMethod("isSealed", 2);
	    wrapObjectMethod("isExtensible", 3);
	    wrapObjectMethod("getOwnPropertyDescriptor", 4);
	    wrapObjectMethod("getPrototypeOf");
	    wrapObjectMethod("keys");
	    wrapObjectMethod("getOwnPropertyNames");
	  })();

	  /******************************************************************************
	   * Module : es6.function                                                      *
	   ******************************************************************************/

	  !(function (NAME) {
	    // 19.2.4.2 name
	    NAME in FunctionProto || DESC && defineProperty(FunctionProto, NAME, {
	      configurable: true,
	      get: function get() {
	        var match = String(this).match(/^\s*function ([^ (]*)/),
	            name = match ? match[1] : "";
	        has(this, NAME) || defineProperty(this, NAME, descriptor(5, name));
	        return name;
	      },
	      set: function set(value) {
	        has(this, NAME) || defineProperty(this, NAME, descriptor(0, value));
	      }
	    });
	  })("name");

	  /******************************************************************************
	   * Module : es6.number.constructor                                            *
	   ******************************************************************************/

	  Number("0o1") && Number("0b1") || (function (_Number, NumberProto) {
	    function toNumber(it) {
	      if (isObject(it)) it = toPrimitive(it);
	      if (typeof it == "string" && it.length > 2 && it.charCodeAt(0) == 48) {
	        var binary = false;
	        switch (it.charCodeAt(1)) {
	          case 66:case 98:
	            binary = true;
	          case 79:case 111:
	            return parseInt(it.slice(2), binary ? 2 : 8);
	        }
	      }return +it;
	    }
	    function toPrimitive(it) {
	      var fn, val;
	      if (isFunction(fn = it.valueOf) && !isObject(val = fn.call(it))) {
	        return val;
	      }if (isFunction(fn = it[TO_STRING]) && !isObject(val = fn.call(it))) {
	        return val;
	      }throw TypeError("Can't convert object to number");
	    }
	    Number = function Number(it) {
	      return this instanceof Number ? new _Number(toNumber(it)) : toNumber(it);
	    };
	    forEach.call(DESC ? getNames(_Number) : array("MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY"), function (key) {
	      key in Number || defineProperty(Number, key, getOwnDescriptor(_Number, key));
	    });
	    Number[PROTOTYPE] = NumberProto;
	    NumberProto[CONSTRUCTOR] = Number;
	    hidden(global, NUMBER, Number);
	  })(Number, Number[PROTOTYPE]);

	  /******************************************************************************
	   * Module : es6.number.statics                                                *
	   ******************************************************************************/

	  !(function (isInteger) {
	    $define(STATIC, NUMBER, {
	      // 20.1.2.1 Number.EPSILON
	      EPSILON: pow(2, -52),
	      // 20.1.2.2 Number.isFinite(number)
	      isFinite: (function (_isFinite) {
	        var _isFiniteWrapper = function isFinite(_x) {
	          return _isFinite.apply(this, arguments);
	        };

	        _isFiniteWrapper.toString = function () {
	          return _isFinite.toString();
	        };

	        return _isFiniteWrapper;
	      })(function (it) {
	        return typeof it == "number" && isFinite(it);
	      }),
	      // 20.1.2.3 Number.isInteger(number)
	      isInteger: isInteger,
	      // 20.1.2.4 Number.isNaN(number)
	      isNaN: sameNaN,
	      // 20.1.2.5 Number.isSafeInteger(number)
	      isSafeInteger: function isSafeInteger(number) {
	        return isInteger(number) && abs(number) <= MAX_SAFE_INTEGER;
	      },
	      // 20.1.2.6 Number.MAX_SAFE_INTEGER
	      MAX_SAFE_INTEGER: MAX_SAFE_INTEGER,
	      // 20.1.2.10 Number.MIN_SAFE_INTEGER
	      MIN_SAFE_INTEGER: -MAX_SAFE_INTEGER,
	      // 20.1.2.12 Number.parseFloat(string)
	      parseFloat: parseFloat,
	      // 20.1.2.13 Number.parseInt(string, radix)
	      parseInt: parseInt
	    });
	    // 20.1.2.3 Number.isInteger(number)
	  })(Number.isInteger || function (it) {
	    return !isObject(it) && isFinite(it) && floor(it) === it;
	  });

	  /******************************************************************************
	   * Module : es6.math                                                          *
	   ******************************************************************************/

	  // ECMAScript 6 shim
	  !(function () {
	    // 20.2.2.28 Math.sign(x)
	    var E = Math.E,
	        exp = Math.exp,
	        log = Math.log,
	        sqrt = Math.sqrt,
	        sign = Math.sign || function (x) {
	      return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	    };

	    // 20.2.2.5 Math.asinh(x)
	    function asinh(x) {
	      return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : log(x + sqrt(x * x + 1));
	    }
	    // 20.2.2.14 Math.expm1(x)
	    function expm1(x) {
	      return (x = +x) == 0 ? x : x > -0.000001 && x < 0.000001 ? x + x * x / 2 : exp(x) - 1;
	    }

	    $define(STATIC, MATH, {
	      // 20.2.2.3 Math.acosh(x)
	      acosh: function acosh(x) {
	        return (x = +x) < 1 ? NaN : isFinite(x) ? log(x / E + sqrt(x + 1) * sqrt(x - 1) / E) + 1 : x;
	      },
	      // 20.2.2.5 Math.asinh(x)
	      asinh: asinh,
	      // 20.2.2.7 Math.atanh(x)
	      atanh: function atanh(x) {
	        return (x = +x) == 0 ? x : log((1 + x) / (1 - x)) / 2;
	      },
	      // 20.2.2.9 Math.cbrt(x)
	      cbrt: function cbrt(x) {
	        return sign(x = +x) * pow(abs(x), 1 / 3);
	      },
	      // 20.2.2.11 Math.clz32(x)
	      clz32: function clz32(x) {
	        return (x >>>= 0) ? 32 - x[TO_STRING](2).length : 32;
	      },
	      // 20.2.2.12 Math.cosh(x)
	      cosh: function cosh(x) {
	        return (exp(x = +x) + exp(-x)) / 2;
	      },
	      // 20.2.2.14 Math.expm1(x)
	      expm1: expm1,
	      // 20.2.2.16 Math.fround(x)
	      // TODO: fallback for IE9-
	      fround: function fround(x) {
	        return new Float32Array([x])[0];
	      },
	      // 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	      hypot: function hypot(value1, value2) {
	        var sum = 0,
	            len1 = arguments.length,
	            len2 = len1,
	            args = Array(len1),
	            larg = -Infinity,
	            arg;
	        while (len1--) {
	          arg = args[len1] = +arguments[len1];
	          if (arg == Infinity || arg == -Infinity) {
	            return Infinity;
	          }if (arg > larg) larg = arg;
	        }
	        larg = arg || 1;
	        while (len2--) sum += pow(args[len2] / larg, 2);
	        return larg * sqrt(sum);
	      },
	      // 20.2.2.18 Math.imul(x, y)
	      imul: function imul(x, y) {
	        var UInt16 = 65535,
	            xn = +x,
	            yn = +y,
	            xl = UInt16 & xn,
	            yl = UInt16 & yn;
	        return 0 | xl * yl + ((UInt16 & xn >>> 16) * yl + xl * (UInt16 & yn >>> 16) << 16 >>> 0);
	      },
	      // 20.2.2.20 Math.log1p(x)
	      log1p: function log1p(x) {
	        return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : log(1 + x);
	      },
	      // 20.2.2.21 Math.log10(x)
	      log10: function log10(x) {
	        return log(x) / Math.LN10;
	      },
	      // 20.2.2.22 Math.log2(x)
	      log2: function log2(x) {
	        return log(x) / Math.LN2;
	      },
	      // 20.2.2.28 Math.sign(x)
	      sign: sign,
	      // 20.2.2.30 Math.sinh(x)
	      sinh: function sinh(x) {
	        return abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (E / 2);
	      },
	      // 20.2.2.33 Math.tanh(x)
	      tanh: function tanh(x) {
	        var a = expm1(x = +x),
	            b = expm1(-x);
	        return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	      },
	      // 20.2.2.34 Math.trunc(x)
	      trunc: trunc
	    });
	  })();

	  /******************************************************************************
	   * Module : es6.string                                                        *
	   ******************************************************************************/

	  !(function (fromCharCode) {
	    function assertNotRegExp(it) {
	      if (cof(it) == REGEXP) throw TypeError();
	    }

	    $define(STATIC, STRING, {
	      // 21.1.2.2 String.fromCodePoint(...codePoints)
	      fromCodePoint: function fromCodePoint(x) {
	        var res = [],
	            len = arguments.length,
	            i = 0,
	            code;
	        while (len > i) {
	          code = +arguments[i++];
	          if (toIndex(code, 1114111) !== code) throw RangeError(code + " is not a valid code point");
	          res.push(code < 65536 ? fromCharCode(code) : fromCharCode(((code -= 65536) >> 10) + 55296, code % 1024 + 56320));
	        }return res.join("");
	      },
	      // 21.1.2.4 String.raw(callSite, ...substitutions)
	      raw: (function (_raw) {
	        var _rawWrapper = function raw(_x) {
	          return _raw.apply(this, arguments);
	        };

	        _rawWrapper.toString = function () {
	          return _raw.toString();
	        };

	        return _rawWrapper;
	      })(function (callSite) {
	        var raw = toObject(callSite.raw),
	            len = toLength(raw.length),
	            sln = arguments.length,
	            res = [],
	            i = 0;
	        while (len > i) {
	          res.push(String(raw[i++]));
	          if (i < sln) res.push(String(arguments[i]));
	        }return res.join("");
	      })
	    });

	    $define(PROTO, STRING, {
	      // 21.1.3.3 String.prototype.codePointAt(pos)
	      codePointAt: createPointAt(false),
	      // 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	      endsWith: function endsWith(searchString /*, endPosition = @length */) {
	        assertNotRegExp(searchString);
	        var that = String(assertDefined(this)),
	            endPosition = arguments[1],
	            len = toLength(that.length),
	            end = endPosition === undefined ? len : min(toLength(endPosition), len);
	        searchString += "";
	        return that.slice(end - searchString.length, end) === searchString;
	      },
	      // 21.1.3.7 String.prototype.includes(searchString, position = 0)
	      includes: function includes(searchString /*, position = 0 */) {
	        assertNotRegExp(searchString);
	        return !! ~String(assertDefined(this)).indexOf(searchString, arguments[1]);
	      },
	      // 21.1.3.13 String.prototype.repeat(count)
	      repeat: function repeat(count) {
	        var str = String(assertDefined(this)),
	            res = "",
	            n = toInteger(count);
	        if (0 > n || n == Infinity) throw RangeError("Count can't be negative");
	        for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
	        return res;
	      },
	      // 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	      startsWith: function startsWith(searchString /*, position = 0 */) {
	        assertNotRegExp(searchString);
	        var that = String(assertDefined(this)),
	            index = toLength(min(arguments[1], that.length));
	        searchString += "";
	        return that.slice(index, index + searchString.length) === searchString;
	      }
	    });
	  })(String.fromCharCode);

	  /******************************************************************************
	   * Module : es6.array.statics                                                 *
	   ******************************************************************************/

	  !(function () {
	    $define(STATIC + FORCED * checkDangerIterClosing(Array.from), ARRAY, {
	      // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	      from: function from(arrayLike /*, mapfn = undefined, thisArg = undefined*/) {
	        var O = Object(assertDefined(arrayLike)),
	            mapfn = arguments[1],
	            mapping = mapfn !== undefined,
	            f = mapping ? ctx(mapfn, arguments[2], 2) : undefined,
	            index = 0,
	            length,
	            result,
	            step;
	        if (isIterable(O)) {
	          result = new (generic(this, Array))();
	          safeIterClose(function (iterator) {
	            for (; !(step = iterator.next()).done; index++) {
	              result[index] = mapping ? f(step.value, index) : step.value;
	            }
	          }, getIterator(O));
	        } else {
	          result = new (generic(this, Array))(length = toLength(O.length));
	          for (; length > index; index++) {
	            result[index] = mapping ? f(O[index], index) : O[index];
	          }
	        }
	        result.length = index;
	        return result;
	      }
	    });

	    $define(STATIC, ARRAY, {
	      // 22.1.2.3 Array.of( ...items)
	      of: function of() {
	        var index = 0,
	            length = arguments.length,
	            result = new (generic(this, Array))(length);
	        while (length > index) result[index] = arguments[index++];
	        result.length = length;
	        return result;
	      }
	    });

	    setSpecies(Array);
	  })();

	  /******************************************************************************
	   * Module : es6.array.prototype                                               *
	   ******************************************************************************/

	  !(function () {
	    $define(PROTO, ARRAY, {
	      // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	      copyWithin: function copyWithin(target, /* = 0 */start /* = 0, end = @length */) {
	        var O = Object(assertDefined(this)),
	            len = toLength(O.length),
	            to = toIndex(target, len),
	            from = toIndex(start, len),
	            end = arguments[2],
	            fin = end === undefined ? len : toIndex(end, len),
	            count = min(fin - from, len - to),
	            inc = 1;
	        if (from < to && to < from + count) {
	          inc = -1;
	          from = from + count - 1;
	          to = to + count - 1;
	        }
	        while (count-- > 0) {
	          if (from in O) O[to] = O[from];else delete O[to];
	          to += inc;
	          from += inc;
	        }return O;
	      },
	      // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	      fill: function fill(value /*, start = 0, end = @length */) {
	        var O = Object(assertDefined(this)),
	            length = toLength(O.length),
	            index = toIndex(arguments[1], length),
	            end = arguments[2],
	            endPos = end === undefined ? length : toIndex(end, length);
	        while (endPos > index) O[index++] = value;
	        return O;
	      },
	      // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	      find: createArrayMethod(5),
	      // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	      findIndex: createArrayMethod(6)
	    });

	    if (framework) {
	      // 22.1.3.31 Array.prototype[@@unscopables]
	      forEach.call(array("find,findIndex,fill,copyWithin,entries,keys,values"), function (it) {
	        ArrayUnscopables[it] = true;
	      });
	      SYMBOL_UNSCOPABLES in ArrayProto || hidden(ArrayProto, SYMBOL_UNSCOPABLES, ArrayUnscopables);
	    }
	  })();

	  /******************************************************************************
	   * Module : es6.iterators                                                     *
	   ******************************************************************************/

	  !(function (at) {
	    // 22.1.3.4 Array.prototype.entries()
	    // 22.1.3.13 Array.prototype.keys()
	    // 22.1.3.29 Array.prototype.values()
	    // 22.1.3.30 Array.prototype[@@iterator]()
	    defineStdIterators(Array, ARRAY, function (iterated, kind) {
	      set(this, ITER, { o: toObject(iterated), i: 0, k: kind });
	      // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	    }, function () {
	      var iter = this[ITER],
	          O = iter.o,
	          kind = iter.k,
	          index = iter.i++;
	      if (!O || index >= O.length) {
	        iter.o = undefined;
	        return iterResult(1);
	      }
	      if (kind == KEY) return iterResult(0, index);
	      if (kind == VALUE) return iterResult(0, O[index]);
	      return iterResult(0, [index, O[index]]);
	    }, VALUE);

	    // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	    Iterators[ARGUMENTS] = Iterators[ARRAY];

	    // 21.1.3.27 String.prototype[@@iterator]()
	    defineStdIterators(String, STRING, function (iterated) {
	      set(this, ITER, { o: String(iterated), i: 0 });
	      // 21.1.5.2.1 %StringIteratorPrototype%.next()
	    }, function () {
	      var iter = this[ITER],
	          O = iter.o,
	          index = iter.i,
	          point;
	      if (index >= O.length) return iterResult(1);
	      point = at.call(O, index);
	      iter.i += point.length;
	      return iterResult(0, point);
	    });
	  })(createPointAt(true));

	  /******************************************************************************
	   * Module : es6.regexp                                                        *
	   ******************************************************************************/

	  DESC && !(function (RegExpProto, _RegExp) {
	    // RegExp allows a regex with flags as the pattern
	    if (!(function () {
	      try {
	        return RegExp(/a/g, "i") == "/a/i";
	      } catch (e) {}
	    })()) {
	      RegExp = function RegExp(pattern, flags) {
	        return new _RegExp(cof(pattern) == REGEXP && flags !== undefined ? pattern.source : pattern, flags);
	      };
	      forEach.call(getNames(_RegExp), function (key) {
	        key in RegExp || defineProperty(RegExp, key, {
	          configurable: true,
	          get: function get() {
	            return _RegExp[key];
	          },
	          set: function set(it) {
	            _RegExp[key] = it;
	          }
	        });
	      });
	      RegExpProto[CONSTRUCTOR] = RegExp;
	      RegExp[PROTOTYPE] = RegExpProto;
	      hidden(global, REGEXP, RegExp);
	    }

	    // 21.2.5.3 get RegExp.prototype.flags()
	    if (/./g.flags != "g") defineProperty(RegExpProto, "flags", {
	      configurable: true,
	      get: createReplacer(/^.*\/(\w*)$/, "$1")
	    });

	    setSpecies(RegExp);
	  })(RegExp[PROTOTYPE], RegExp);

	  /******************************************************************************
	   * Module : web.immediate                                                     *
	   ******************************************************************************/

	  // setImmediate shim
	  // Node.js 0.9+ & IE10+ has setImmediate, else:
	  isFunction(setImmediate) && isFunction(clearImmediate) || (function (ONREADYSTATECHANGE) {
	    var postMessage = global.postMessage,
	        addEventListener = global.addEventListener,
	        MessageChannel = global.MessageChannel,
	        counter = 0,
	        queue = {},
	        defer,
	        channel,
	        port;
	    setImmediate = function (fn) {
	      var args = [],
	          i = 1;
	      while (arguments.length > i) args.push(arguments[i++]);
	      queue[++counter] = function () {
	        invoke(isFunction(fn) ? fn : Function(fn), args);
	      };
	      defer(counter);
	      return counter;
	    };
	    clearImmediate = function (id) {
	      delete queue[id];
	    };
	    function run(id) {
	      if (has(queue, id)) {
	        var fn = queue[id];
	        delete queue[id];
	        fn();
	      }
	    }
	    function listner(event) {
	      run(event.data);
	    }
	    // Node.js 0.8-
	    if (NODE) {
	      defer = function (id) {
	        nextTick(part.call(run, id));
	      }
	      // Modern browsers, skip implementation for WebWorkers
	      // IE8 has postMessage, but it's sync & typeof its postMessage is object
	      ;
	    } else if (addEventListener && isFunction(postMessage) && !global.importScripts) {
	      defer = function (id) {
	        postMessage(id, "*");
	      };
	      addEventListener("message", listner, false);
	      // WebWorkers
	    } else if (isFunction(MessageChannel)) {
	      channel = new MessageChannel();
	      port = channel.port2;
	      channel.port1.onmessage = listner;
	      defer = ctx(port.postMessage, port, 1);
	      // IE8-
	    } else if (document && ONREADYSTATECHANGE in document[CREATE_ELEMENT]("script")) {
	      defer = function (id) {
	        html.appendChild(document[CREATE_ELEMENT]("script"))[ONREADYSTATECHANGE] = function () {
	          html.removeChild(this);
	          run(id);
	        };
	      }
	      // Rest old browsers
	      ;
	    } else {
	      defer = function (id) {
	        setTimeout(run, 0, id);
	      };
	    }
	  })("onreadystatechange");
	  $define(GLOBAL + BIND, {
	    setImmediate: setImmediate,
	    clearImmediate: clearImmediate
	  });

	  /******************************************************************************
	   * Module : es6.promise                                                       *
	   ******************************************************************************/

	  // ES6 promises shim
	  // Based on https://github.com/getify/native-promise-only/
	  !(function (Promise, test) {
	    isFunction(Promise) && isFunction(Promise.resolve) && Promise.resolve(test = new Promise(function () {})) == test || (function (asap, RECORD) {
	      function isThenable(it) {
	        var then;
	        if (isObject(it)) then = it.then;
	        return isFunction(then) ? then : false;
	      }
	      function handledRejectionOrHasOnRejected(promise) {
	        var record = promise[RECORD],
	            chain = record.c,
	            i = 0,
	            react;
	        if (record.h) {
	          return true;
	        }while (chain.length > i) {
	          react = chain[i++];
	          if (react.fail || handledRejectionOrHasOnRejected(react.P)) {
	            return true;
	          }
	        }
	      }
	      function notify(record, reject) {
	        var chain = record.c;
	        if (reject || chain.length) asap(function () {
	          var promise = record.p,
	              value = record.v,
	              ok = record.s == 1,
	              i = 0;
	          if (reject && !handledRejectionOrHasOnRejected(promise)) {
	            setTimeout(function () {
	              if (!handledRejectionOrHasOnRejected(promise)) {
	                if (NODE) {
	                  if (!process.emit("unhandledRejection", value, promise)) {}
	                } else if (isFunction(console.error)) {
	                  console.error("Unhandled promise rejection", value);
	                }
	              }
	            }, 1000);
	          } else while (chain.length > i) !(function (react) {
	            var cb = ok ? react.ok : react.fail,
	                ret,
	                then;
	            try {
	              if (cb) {
	                if (!ok) record.h = true;
	                ret = cb === true ? value : cb(value);
	                if (ret === react.P) {
	                  react.rej(TypeError(PROMISE + "-chain cycle"));
	                } else if (then = isThenable(ret)) {
	                  then.call(ret, react.res, react.rej);
	                } else react.res(ret);
	              } else react.rej(value);
	            } catch (err) {
	              react.rej(err);
	            }
	          })(chain[i++]);
	          chain.length = 0;
	        });
	      }
	      function resolve(value) {
	        var record = this,
	            then,
	            wrapper;
	        if (record.d) {
	          return;
	        }record.d = true;
	        record = record.r || record; // unwrap
	        try {
	          if (then = isThenable(value)) {
	            wrapper = { r: record, d: false }; // wrap
	            then.call(value, ctx(resolve, wrapper, 1), ctx(reject, wrapper, 1));
	          } else {
	            record.v = value;
	            record.s = 1;
	            notify(record);
	          }
	        } catch (err) {
	          reject.call(wrapper || { r: record, d: false }, err); // wrap
	        }
	      }
	      function reject(value) {
	        var record = this;
	        if (record.d) {
	          return;
	        }record.d = true;
	        record = record.r || record; // unwrap
	        record.v = value;
	        record.s = 2;
	        notify(record, true);
	      }
	      function getConstructor(C) {
	        var S = assertObject(C)[SYMBOL_SPECIES];
	        return S != undefined ? S : C;
	      }
	      // 25.4.3.1 Promise(executor)
	      Promise = function (executor) {
	        assertFunction(executor);
	        assertInstance(this, Promise, PROMISE);
	        var record = {
	          p: this, // promise
	          c: [], // chain
	          s: 0, // state
	          d: false, // done
	          v: undefined, // value
	          h: false // handled rejection
	        };
	        hidden(this, RECORD, record);
	        try {
	          executor(ctx(resolve, record, 1), ctx(reject, record, 1));
	        } catch (err) {
	          reject.call(record, err);
	        }
	      };
	      assignHidden(Promise[PROTOTYPE], {
	        // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	        then: function then(onFulfilled, onRejected) {
	          var S = assertObject(assertObject(this)[CONSTRUCTOR])[SYMBOL_SPECIES];
	          var react = {
	            ok: isFunction(onFulfilled) ? onFulfilled : true,
	            fail: isFunction(onRejected) ? onRejected : false
	          },
	              P = react.P = new (S != undefined ? S : Promise)(function (resolve, reject) {
	            react.res = assertFunction(resolve);
	            react.rej = assertFunction(reject);
	          }),
	              record = this[RECORD];
	          record.c.push(react);
	          record.s && notify(record);
	          return P;
	        },
	        // 25.4.5.1 Promise.prototype.catch(onRejected)
	        "catch": function _catch(onRejected) {
	          return this.then(undefined, onRejected);
	        }
	      });
	      assignHidden(Promise, {
	        // 25.4.4.1 Promise.all(iterable)
	        all: function all(iterable) {
	          var Promise = getConstructor(this),
	              values = [];
	          return new Promise(function (resolve, reject) {
	            forOf(iterable, false, push, values);
	            var remaining = values.length,
	                results = Array(remaining);
	            if (remaining) forEach.call(values, function (promise, index) {
	              Promise.resolve(promise).then(function (value) {
	                results[index] = value;
	                --remaining || resolve(results);
	              }, reject);
	            });else resolve(results);
	          });
	        },
	        // 25.4.4.4 Promise.race(iterable)
	        race: function race(iterable) {
	          var Promise = getConstructor(this);
	          return new Promise(function (resolve, reject) {
	            forOf(iterable, false, function (promise) {
	              Promise.resolve(promise).then(resolve, reject);
	            });
	          });
	        },
	        // 25.4.4.5 Promise.reject(r)
	        reject: function reject(r) {
	          return new (getConstructor(this))(function (resolve, reject) {
	            reject(r);
	          });
	        },
	        // 25.4.4.6 Promise.resolve(x)
	        resolve: function resolve(x) {
	          return isObject(x) && RECORD in x && getPrototypeOf(x) === this[PROTOTYPE] ? x : new (getConstructor(this))(function (resolve, reject) {
	            resolve(x);
	          });
	        }
	      });
	    })(nextTick || setImmediate, safeSymbol("record"));
	    setToStringTag(Promise, PROMISE);
	    setSpecies(Promise);
	    $define(GLOBAL + FORCED * !isNative(Promise), { Promise: Promise });
	  })(global[PROMISE]);

	  /******************************************************************************
	   * Module : es6.collections                                                   *
	   ******************************************************************************/

	  // ECMAScript 6 collections shim
	  !(function () {
	    var UID = safeSymbol("uid"),
	        O1 = safeSymbol("O1"),
	        WEAK = safeSymbol("weak"),
	        LEAK = safeSymbol("leak"),
	        LAST = safeSymbol("last"),
	        FIRST = safeSymbol("first"),
	        SIZE = DESC ? safeSymbol("size") : "size",
	        uid = 0,
	        tmp = {};

	    function getCollection(C, NAME, methods, commonMethods, isMap, isWeak) {
	      var ADDER = isMap ? "set" : "add",
	          proto = C && C[PROTOTYPE],
	          O = {};
	      function initFromIterable(that, iterable) {
	        if (iterable != undefined) forOf(iterable, isMap, that[ADDER], that);
	        return that;
	      }
	      function fixSVZ(key, chain) {
	        var method = proto[key];
	        if (framework) proto[key] = function (a, b) {
	          var result = method.call(this, a === 0 ? 0 : a, b);
	          return chain ? this : result;
	        };
	      }
	      if (!isNative(C) || !(isWeak || !BUGGY_ITERATORS && has(proto, FOR_EACH) && has(proto, "entries"))) {
	        // create collection constructor
	        C = isWeak ? function (iterable) {
	          assertInstance(this, C, NAME);
	          set(this, UID, uid++);
	          initFromIterable(this, iterable);
	        } : function (iterable) {
	          var that = this;
	          assertInstance(that, C, NAME);
	          set(that, O1, create(null));
	          set(that, SIZE, 0);
	          set(that, LAST, undefined);
	          set(that, FIRST, undefined);
	          initFromIterable(that, iterable);
	        };
	        assignHidden(assignHidden(C[PROTOTYPE], methods), commonMethods);
	        isWeak || !DESC || defineProperty(C[PROTOTYPE], "size", { get: function get() {
	            return assertDefined(this[SIZE]);
	          } });
	      } else {
	        var Native = C,
	            inst = new C(),
	            chain = inst[ADDER](isWeak ? {} : -0, 1),
	            buggyZero;
	        // wrap to init collections from iterable
	        if (checkDangerIterClosing(function (O) {
	          new C(O);
	        })) {
	          C = function (iterable) {
	            assertInstance(this, C, NAME);
	            return initFromIterable(new Native(), iterable);
	          };
	          C[PROTOTYPE] = proto;
	          if (framework) proto[CONSTRUCTOR] = C;
	        }
	        isWeak || inst[FOR_EACH](function (val, key) {
	          buggyZero = 1 / key === -Infinity;
	        });
	        // fix converting -0 key to +0
	        if (buggyZero) {
	          fixSVZ("delete");
	          fixSVZ("has");
	          isMap && fixSVZ("get");
	        }
	        // + fix .add & .set for chaining
	        if (buggyZero || chain !== inst) fixSVZ(ADDER, true);
	      }
	      setToStringTag(C, NAME);
	      setSpecies(C);

	      O[NAME] = C;
	      $define(GLOBAL + WRAP + FORCED * !isNative(C), O);

	      // add .keys, .values, .entries, [@@iterator]
	      // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	      isWeak || defineStdIterators(C, NAME, function (iterated, kind) {
	        set(this, ITER, { o: iterated, k: kind });
	      }, function () {
	        var iter = this[ITER],
	            kind = iter.k,
	            entry = iter.l;
	        // revert to the last existing entry
	        while (entry && entry.r) entry = entry.p;
	        // get next entry
	        if (!iter.o || !(iter.l = entry = entry ? entry.n : iter.o[FIRST])) {
	          // or finish the iteration
	          iter.o = undefined;
	          return iterResult(1);
	        }
	        // return step by kind
	        if (kind == KEY) return iterResult(0, entry.k);
	        if (kind == VALUE) return iterResult(0, entry.v);
	        return iterResult(0, [entry.k, entry.v]);
	      }, isMap ? KEY + VALUE : VALUE, !isMap);

	      return C;
	    }

	    function fastKey(it, create) {
	      // return primitive with prefix
	      if (!isObject(it)) {
	        return (typeof it == "string" ? "S" : "P") + it;
	      } // can't set id to frozen object
	      if (isFrozen(it)) {
	        return "F";
	      }if (!has(it, UID)) {
	        // not necessary to add id
	        if (!create) {
	          return "E";
	        } // add missing object id
	        hidden(it, UID, ++uid);
	        // return object id with prefix
	      }return "O" + it[UID];
	    }
	    function getEntry(that, key) {
	      // fast case
	      var index = fastKey(key),
	          entry;
	      if (index != "F") {
	        return that[O1][index];
	      } // frozen object case
	      for (entry = that[FIRST]; entry; entry = entry.n) {
	        if (entry.k == key) {
	          return entry;
	        }
	      }
	    }
	    function def(that, key, value) {
	      var entry = getEntry(that, key),
	          prev,
	          index;
	      // change existing entry
	      if (entry) entry.v = value;
	      // create new entry
	      else {
	        that[LAST] = entry = {
	          i: index = fastKey(key, true), // <- index
	          k: key, // <- key
	          v: value, // <- value
	          p: prev = that[LAST], // <- previous entry
	          n: undefined, // <- next entry
	          r: false // <- removed
	        };
	        if (!that[FIRST]) that[FIRST] = entry;
	        if (prev) prev.n = entry;
	        that[SIZE]++;
	        // add to index
	        if (index != "F") that[O1][index] = entry;
	      }return that;
	    }

	    var collectionMethods = {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear() {
	        for (var that = this, data = that[O1], entry = that[FIRST]; entry; entry = entry.n) {
	          entry.r = true;
	          if (entry.p) entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that[FIRST] = that[LAST] = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      "delete": function _delete(key) {
	        var that = this,
	            entry = getEntry(that, key);
	        if (entry) {
	          var next = entry.n,
	              prev = entry.p;
	          delete that[O1][entry.i];
	          entry.r = true;
	          if (prev) prev.n = next;
	          if (next) next.p = prev;
	          if (that[FIRST] == entry) that[FIRST] = next;
	          if (that[LAST] == entry) that[LAST] = prev;
	          that[SIZE]--;
	        }return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */) {
	        var f = ctx(callbackfn, arguments[1], 3),
	            entry;
	        while (entry = entry ? entry.n : this[FIRST]) {
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while (entry && entry.r) entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key) {
	        return !!getEntry(this, key);
	      }
	    };

	    // 23.1 Map Objects
	    Map = getCollection(Map, MAP, {
	      // 23.1.3.6 Map.prototype.get(key)
	      get: function get(key) {
	        var entry = getEntry(this, key);
	        return entry && entry.v;
	      },
	      // 23.1.3.9 Map.prototype.set(key, value)
	      set: function set(key, value) {
	        return def(this, key === 0 ? 0 : key, value);
	      }
	    }, collectionMethods, true);

	    // 23.2 Set Objects
	    Set = getCollection(Set, SET, {
	      // 23.2.3.1 Set.prototype.add(value)
	      add: function add(value) {
	        return def(this, value = value === 0 ? 0 : value, value);
	      }
	    }, collectionMethods);

	    function defWeak(that, key, value) {
	      if (isFrozen(assertObject(key))) leakStore(that).set(key, value);else {
	        has(key, WEAK) || hidden(key, WEAK, {});
	        key[WEAK][that[UID]] = value;
	      }return that;
	    }
	    function leakStore(that) {
	      return that[LEAK] || hidden(that, LEAK, new Map())[LEAK];
	    }

	    var weakMethods = {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      "delete": function _delete(key) {
	        if (!isObject(key)) {
	          return false;
	        }if (isFrozen(key)) {
	          return leakStore(this)["delete"](key);
	        }return has(key, WEAK) && has(key[WEAK], this[UID]) && delete key[WEAK][this[UID]];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: (function (_has) {
	        var _hasWrapper = function has(_x) {
	          return _has.apply(this, arguments);
	        };

	        _hasWrapper.toString = function () {
	          return _has.toString();
	        };

	        return _hasWrapper;
	      })(function (key) {
	        if (!isObject(key)) return false;
	        if (isFrozen(key)) return leakStore(this).has(key);
	        return has(key, WEAK) && has(key[WEAK], this[UID]);
	      })
	    };

	    // 23.3 WeakMap Objects
	    WeakMap = getCollection(WeakMap, WEAKMAP, {
	      // 23.3.3.3 WeakMap.prototype.get(key)
	      get: function get(key) {
	        if (isObject(key)) {
	          if (isFrozen(key)) {
	            return leakStore(this).get(key);
	          }if (has(key, WEAK)) {
	            return key[WEAK][this[UID]];
	          }
	        }
	      },
	      // 23.3.3.5 WeakMap.prototype.set(key, value)
	      set: function set(key, value) {
	        return defWeak(this, key, value);
	      }
	    }, weakMethods, true, true);

	    // IE11 WeakMap frozen keys fix
	    if (framework && new WeakMap().set(Object.freeze(tmp), 7).get(tmp) != 7) {
	      forEach.call(array("delete,has,get,set"), function (key) {
	        var method = WeakMap[PROTOTYPE][key];
	        WeakMap[PROTOTYPE][key] = function (a, b) {
	          // store frozen objects on leaky map
	          if (isObject(a) && isFrozen(a)) {
	            var result = leakStore(this)[key](a, b);
	            return key == "set" ? this : result;
	            // store all the rest on native weakmap
	          }return method.call(this, a, b);
	        };
	      });
	    }

	    // 23.4 WeakSet Objects
	    WeakSet = getCollection(WeakSet, WEAKSET, {
	      // 23.4.3.1 WeakSet.prototype.add(value)
	      add: function add(value) {
	        return defWeak(this, value, true);
	      }
	    }, weakMethods, false, true);
	  })();

	  /******************************************************************************
	   * Module : es6.reflect                                                       *
	   ******************************************************************************/

	  !(function () {
	    function Enumerate(iterated) {
	      var keys = [],
	          key;
	      for (key in iterated) keys.push(key);
	      set(this, ITER, { o: iterated, a: keys, i: 0 });
	    }
	    createIterator(Enumerate, OBJECT, function () {
	      var iter = this[ITER],
	          keys = iter.a,
	          key;
	      do {
	        if (iter.i >= keys.length) return iterResult(1);
	      } while (!((key = keys[iter.i++]) in iter.o));
	      return iterResult(0, key);
	    });

	    function wrap(fn) {
	      return function (it) {
	        assertObject(it);
	        try {
	          return (fn.apply(undefined, arguments), true);
	        } catch (e) {
	          return false;
	        }
	      };
	    }

	    function reflectGet(_x, _x2) {
	      var _arguments = arguments;
	      var _again = true;

	      _function: while (_again) {
	        _again = false;
	        var target = _x,
	            propertyKey /*, receiver*/ = _x2;
	        receiver = desc = proto = undefined;

	        var receiver = _arguments.length < 3 ? target : _arguments[2],
	            desc = getOwnDescriptor(assertObject(target), propertyKey),
	            proto;
	        if (desc) {
	          return has(desc, "value") ? desc.value : desc.get === undefined ? undefined : desc.get.call(receiver);
	        }if (isObject(proto = getPrototypeOf(target))) {
	          _arguments = [_x = proto, _x2 = propertyKey, receiver];
	          _again = true;
	          continue _function;
	        } else {
	          return undefined;
	        }
	      }
	    }
	    function reflectSet(_x, _x2, _x3) {
	      var _arguments = arguments;
	      var _again = true;

	      _function: while (_again) {
	        _again = false;
	        var target = _x,
	            propertyKey = _x2,
	            V /*, receiver*/ = _x3;
	        receiver = ownDesc = existingDescriptor = proto = undefined;

	        var receiver = _arguments.length < 4 ? target : _arguments[3],
	            ownDesc = getOwnDescriptor(assertObject(target), propertyKey),
	            existingDescriptor,
	            proto;
	        if (!ownDesc) {
	          if (isObject(proto = getPrototypeOf(target))) {
	            _arguments = [_x = proto, _x2 = propertyKey, _x3 = V, receiver];
	            _again = true;
	            continue _function;
	          }
	          ownDesc = descriptor(0);
	        }
	        if (has(ownDesc, "value")) {
	          if (ownDesc.writable === false || !isObject(receiver)) {
	            return false;
	          }existingDescriptor = getOwnDescriptor(receiver, propertyKey) || descriptor(0);
	          existingDescriptor.value = V;
	          return (defineProperty(receiver, propertyKey, existingDescriptor), true);
	        }
	        return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	      }
	    }
	    var isExtensible = Object.isExtensible || returnIt;

	    var reflect = {
	      // 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	      apply: ctx(call, apply, 3),
	      // 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	      construct: function construct(target, argumentsList /*, newTarget*/) {
	        var proto = assertFunction(arguments.length < 3 ? target : arguments[2])[PROTOTYPE],
	            instance = create(isObject(proto) ? proto : ObjectProto),
	            result = apply.call(target, instance, argumentsList);
	        return isObject(result) ? result : instance;
	      },
	      // 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	      defineProperty: wrap(defineProperty),
	      // 26.1.4 Reflect.deleteProperty(target, propertyKey)
	      deleteProperty: function deleteProperty(target, propertyKey) {
	        var desc = getOwnDescriptor(assertObject(target), propertyKey);
	        return desc && !desc.configurable ? false : delete target[propertyKey];
	      },
	      // 26.1.5 Reflect.enumerate(target)
	      enumerate: function enumerate(target) {
	        return new Enumerate(assertObject(target));
	      },
	      // 26.1.6 Reflect.get(target, propertyKey [, receiver])
	      get: reflectGet,
	      // 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
	        return getOwnDescriptor(assertObject(target), propertyKey);
	      },
	      // 26.1.8 Reflect.getPrototypeOf(target)
	      getPrototypeOf: (function (_getPrototypeOf) {
	        var _getPrototypeOfWrapper = function getPrototypeOf(_x) {
	          return _getPrototypeOf.apply(this, arguments);
	        };

	        _getPrototypeOfWrapper.toString = function () {
	          return _getPrototypeOf.toString();
	        };

	        return _getPrototypeOfWrapper;
	      })(function (target) {
	        return getPrototypeOf(assertObject(target));
	      }),
	      // 26.1.9 Reflect.has(target, propertyKey)
	      has: function has(target, propertyKey) {
	        return propertyKey in target;
	      },
	      // 26.1.10 Reflect.isExtensible(target)
	      isExtensible: (function (_isExtensible) {
	        var _isExtensibleWrapper = function isExtensible(_x) {
	          return _isExtensible.apply(this, arguments);
	        };

	        _isExtensibleWrapper.toString = function () {
	          return _isExtensible.toString();
	        };

	        return _isExtensibleWrapper;
	      })(function (target) {
	        return !!isExtensible(assertObject(target));
	      }),
	      // 26.1.11 Reflect.ownKeys(target)
	      ownKeys: ownKeys,
	      // 26.1.12 Reflect.preventExtensions(target)
	      preventExtensions: wrap(Object.preventExtensions || returnIt),
	      // 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	      set: reflectSet
	    };
	    // 26.1.14 Reflect.setPrototypeOf(target, proto)
	    if (setPrototypeOf) reflect.setPrototypeOf = function (target, proto) {
	      return (setPrototypeOf(assertObject(target), proto), true);
	    };

	    $define(GLOBAL, { Reflect: {} });
	    $define(STATIC, "Reflect", reflect);
	  })();

	  /******************************************************************************
	   * Module : es7.proposals                                                     *
	   ******************************************************************************/

	  !(function () {
	    $define(PROTO, ARRAY, {
	      // https://github.com/domenic/Array.prototype.includes
	      includes: createArrayContains(true)
	    });
	    $define(PROTO, STRING, {
	      // https://github.com/mathiasbynens/String.prototype.at
	      at: createPointAt(true)
	    });

	    function createObjectToArray(isEntries) {
	      return function (object) {
	        var O = toObject(object),
	            keys = getKeys(object),
	            length = keys.length,
	            i = 0,
	            result = Array(length),
	            key;
	        if (isEntries) while (length > i) result[i] = [key = keys[i++], O[key]];else while (length > i) result[i] = O[keys[i++]];
	        return result;
	      };
	    }
	    $define(STATIC, OBJECT, {
	      // https://gist.github.com/WebReflection/9353781
	      getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
	        var O = toObject(object),
	            result = {};
	        forEach.call(ownKeys(O), function (key) {
	          defineProperty(result, key, descriptor(0, getOwnDescriptor(O, key)));
	        });
	        return result;
	      },
	      // https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-04/apr-9.md#51-objectentries-objectvalues
	      values: createObjectToArray(false),
	      entries: createObjectToArray(true)
	    });
	    $define(STATIC, REGEXP, {
	      // https://gist.github.com/kangax/9698100
	      escape: createReplacer(/([\\\-[\]{}()*+?.,^$|])/g, "\\$1", true)
	    });
	  })();

	  /******************************************************************************
	   * Module : es7.abstract-refs                                                 *
	   ******************************************************************************/

	  // https://github.com/zenparsing/es-abstract-refs
	  !(function (REFERENCE) {
	    REFERENCE_GET = getWellKnownSymbol(REFERENCE + "Get", true);
	    var REFERENCE_SET = getWellKnownSymbol(REFERENCE + SET, true),
	        REFERENCE_DELETE = getWellKnownSymbol(REFERENCE + "Delete", true);

	    $define(STATIC, SYMBOL, {
	      referenceGet: REFERENCE_GET,
	      referenceSet: REFERENCE_SET,
	      referenceDelete: REFERENCE_DELETE
	    });

	    hidden(FunctionProto, REFERENCE_GET, returnThis);

	    function setMapMethods(Constructor) {
	      if (Constructor) {
	        var MapProto = Constructor[PROTOTYPE];
	        hidden(MapProto, REFERENCE_GET, MapProto.get);
	        hidden(MapProto, REFERENCE_SET, MapProto.set);
	        hidden(MapProto, REFERENCE_DELETE, MapProto["delete"]);
	      }
	    }
	    setMapMethods(Map);
	    setMapMethods(WeakMap);
	  })("reference");

	  /******************************************************************************
	   * Module : js.array.statics                                                  *
	   ******************************************************************************/

	  // JavaScript 1.6 / Strawman array statics shim
	  !(function (arrayStatics) {
	    function setArrayStatics(keys, length) {
	      forEach.call(array(keys), function (key) {
	        if (key in ArrayProto) arrayStatics[key] = ctx(call, ArrayProto[key], length);
	      });
	    }
	    setArrayStatics("pop,reverse,shift,keys,values,entries", 1);
	    setArrayStatics("indexOf,every,some,forEach,map,filter,find,findIndex,includes", 3);
	    setArrayStatics("join,slice,concat,push,splice,unshift,sort,lastIndexOf," + "reduce,reduceRight,copyWithin,fill,turn");
	    $define(STATIC, ARRAY, arrayStatics);
	  })({});

	  /******************************************************************************
	   * Module : web.dom.itarable                                                  *
	   ******************************************************************************/

	  !(function (NodeList) {
	    if (framework && NodeList && !(SYMBOL_ITERATOR in NodeList[PROTOTYPE])) {
	      hidden(NodeList[PROTOTYPE], SYMBOL_ITERATOR, Iterators[ARRAY]);
	    }
	    Iterators.NodeList = Iterators[ARRAY];
	  })(global.NodeList);
	})(typeof self != "undefined" && self.Math === Math ? self : Function("return this")(), true);
	/* ...args */ /* ...args */ /* ...args */ /* ...args */
	// default node.js behavior

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	!(function (global) {
	  "use strict";

	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var iteratorSymbol = typeof Symbol === "function" && Symbol.iterator || "@@iterator";

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
	    return new Generator(innerFn, outerFn, self || null, tryLocsList || []);
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
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunction.displayName = "GeneratorFunction";

	  runtime.isGeneratorFunction = function (genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor ? ctor === GeneratorFunction ||
	    // For the native GeneratorFunction constructor, the best we can
	    // do is to check its .name property.
	    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
	  };

	  runtime.mark = function (genFun) {
	    genFun.__proto__ = GeneratorFunctionPrototype;
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
	    return new Promise(function (resolve, reject) {
	      var generator = wrap(innerFn, outerFn, self, tryLocsList);
	      var callNext = step.bind(generator.next);
	      var callThrow = step.bind(generator["throw"]);

	      function step(arg) {
	        var record = tryCatch(this, null, arg);
	        if (record.type === "throw") {
	          reject(record.arg);
	          return;
	        }

	        var info = record.arg;
	        if (info.done) {
	          resolve(info.value);
	        } else {
	          Promise.resolve(info.value).then(callNext, callThrow);
	        }
	      }

	      callNext();
	    });
	  };

	  function Generator(innerFn, outerFn, self, tryLocsList) {
	    var generator = outerFn ? Object.create(outerFn.prototype) : this;
	    var context = new Context(tryLocsList);
	    var state = GenStateSuspendedStart;

	    function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);

	          if (record.type === "throw") {
	            context.delegate = null;

	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;

	            continue;
	          }

	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;

	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }

	          context.delegate = null;
	        }

	        if (method === "next") {
	          if (state === GenStateSuspendedStart && typeof arg !== "undefined") {
	            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	            throw new TypeError("attempt to send " + JSON.stringify(arg) + " to newborn generator");
	          }

	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            delete context.sent;
	          }
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }

	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

	          var info = {
	            value: record.arg,
	            done: context.done
	          };

	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;

	          if (method === "next") {
	            context.dispatchException(record.arg);
	          } else {
	            arg = record.arg;
	          }
	        }
	      }
	    }

	    generator.next = invoke.bind(generator, "next");
	    generator["throw"] = invoke.bind(generator, "throw");
	    generator["return"] = invoke.bind(generator, "return");

	    return generator;
	  }

	  Gp[iteratorSymbol] = function () {
	    return this;
	  };

	  Gp.toString = function () {
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
	    this.reset();
	  }

	  runtime.keys = function (object) {
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
	        var i = -1,
	            next = function next() {
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

	    reset: function reset() {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.tryEntries.forEach(resetTryEntry);

	      // Pre-initialize at least 20 temporary variables to enable hidden
	      // class optimizations for simple generators.
	      for (var tempIndex = 0, tempName; hasOwn.call(this, tempName = "t" + tempIndex) || tempIndex < 20; ++tempIndex) {
	        this[tempName] = null;
	      }
	    },

	    stop: function stop() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function dispatchException(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
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

	    abrupt: function abrupt(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg < finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }

	      return ContinueSentinel;
	    },

	    complete: function complete(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" || record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function finish(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          return this.complete(entry.completion, entry.afterLoc);
	        }
	      }
	    },

	    "catch": function _catch(tryLoc) {
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

	    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      return ContinueSentinel;
	    }
	  };
	})(
	// Among the various tricks for obtaining a reference to the global
	// object, this seems to be the most reliable technique that does not
	// use indirect eval (which violates Content Security Policy).
	typeof global === "object" ? global : typeof window === "object" ? window : this);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = alphanumeric;

	function alphanumeric(_x2) {
	  var _arguments = arguments;
	  var _again = true;

	  _function: while (_again) {
	    _again = false;
	    var num = _x2;
	    res = allowed = random = undefined;
	    var res = _arguments[1] === undefined ? "" : _arguments[1];

	    if (!num) {
	      return res;
	    }var allowed = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
	        random = (Math.random() * (allowed.length - 1)).toFixed();

	    _arguments = [_x2 = num - 1, res + allowed[random]];
	    _again = true;
	    continue _function;
	  }
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	;(function(){function require(name){var module=require.modules[name];if(!module)throw new Error("failed to require \"" + name + "\"");if(!("exports" in module) && typeof module.definition === "function"){module.client = module.component = true;module.definition.call(this, module.exports = {}, module);delete module.definition;}return module.exports;}require.loader = "component";require.helper = {};require.helper.semVerSort = function(a, b){var aArray=a.version.split(".");var bArray=b.version.split(".");for(var i=0; i < aArray.length; ++i) {var aInt=parseInt(aArray[i], 10);var bInt=parseInt(bArray[i], 10);if(aInt === bInt){var aLex=aArray[i].substr(("" + aInt).length);var bLex=bArray[i].substr(("" + bInt).length);if(aLex === "" && bLex !== "")return 1;if(aLex !== "" && bLex === "")return -1;if(aLex !== "" && bLex !== "")return aLex > bLex?1:-1;continue;}else if(aInt > bInt){return 1;}else {return -1;}}return 0;};require.latest = function(name, returnPath){function showError(name){throw new Error("failed to find latest module of \"" + name + "\"");}var versionRegexp=/(.*)~(.*)@v?(\d+\.\d+\.\d+[^\/]*)$/;var remoteRegexp=/(.*)~(.*)/;if(!remoteRegexp.test(name))showError(name);var moduleNames=Object.keys(require.modules);var semVerCandidates=[];var otherCandidates=[];for(var i=0; i < moduleNames.length; i++) {var moduleName=moduleNames[i];if(new RegExp(name + "@").test(moduleName)){var version=moduleName.substr(name.length + 1);var semVerMatch=versionRegexp.exec(moduleName);if(semVerMatch != null){semVerCandidates.push({version:version, name:moduleName});}else {otherCandidates.push({version:version, name:moduleName});}}}if(semVerCandidates.concat(otherCandidates).length === 0){showError(name);}if(semVerCandidates.length > 0){var module=semVerCandidates.sort(require.helper.semVerSort).pop().name;if(returnPath === true){return module;}return require(module);}var module=otherCandidates.sort(function(a, b){return a.name > b.name;})[0].name;if(returnPath === true){return module;}return require(module);};require.modules = {};require.register = function(name, definition){require.modules[name] = {definition:definition};};require.define = function(name, exports){require.modules[name] = {exports:exports};};require.register("chaijs~assertion-error@1.0.0", function(exports, module){function exclude(){var excludes=[].slice.call(arguments);function excludeProps(res, obj){Object.keys(obj).forEach(function(key){if(! ~excludes.indexOf(key))res[key] = obj[key];});}return function extendExclude(){var args=[].slice.call(arguments), i=0, res={};for(; i < args.length; i++) {excludeProps(res, args[i]);}return res;};};module.exports = AssertionError;function AssertionError(message, _props, ssf){var extend=exclude("name", "message", "stack", "constructor", "toJSON"), props=extend(_props || {});this.message = message || "Unspecified AssertionError";this.showDiff = false;for(var key in props) {this[key] = props[key];}ssf = ssf || arguments.callee;if(ssf && Error.captureStackTrace){Error.captureStackTrace(this, ssf);}}AssertionError.prototype = Object.create(Error.prototype);AssertionError.prototype.name = "AssertionError";AssertionError.prototype.constructor = AssertionError;AssertionError.prototype.toJSON = function(stack){var extend=exclude("constructor", "toJSON", "stack"), props=extend({name:this.name}, this);if(false !== stack && this.stack){props.stack = this.stack;}return props;};});require.register("chaijs~type-detect@0.1.1", function(exports, module){var exports=module.exports = getType;var natives={"[object Array]":"array", "[object RegExp]":"regexp", "[object Function]":"function", "[object Arguments]":"arguments", "[object Date]":"date"};function getType(obj){var str=Object.prototype.toString.call(obj);if(natives[str]){return natives[str];}if(obj === null){return "null";}if(obj === undefined){return "undefined";}if(obj === Object(obj)){return "object";}return typeof obj;}exports.Library = Library;function Library(){this.tests = {};}Library.prototype.of = getType;Library.prototype.define = function(type, test){if(arguments.length === 1)return this.tests[type];this.tests[type] = test;return this;};Library.prototype.test = function(obj, type){if(type === getType(obj))return true;var test=this.tests[type];if(test && "regexp" === getType(test)){return test.test(obj);}else if(test && "function" === getType(test)){return test(obj);}else {throw new ReferenceError("Type test \"" + type + "\" not defined or invalid.");}};});require.register("chaijs~deep-eql@0.1.3", function(exports, module){var type=require("chaijs~type-detect@0.1.1");var Buffer;try{Buffer = require("buffer").Buffer;}catch(ex) {Buffer = {};Buffer.isBuffer = function(){return false;};}module.exports = deepEqual;function deepEqual(a, b, m){if(sameValue(a, b)){return true;}else if("date" === type(a)){return dateEqual(a, b);}else if("regexp" === type(a)){return regexpEqual(a, b);}else if(Buffer.isBuffer(a)){return bufferEqual(a, b);}else if("arguments" === type(a)){return argumentsEqual(a, b, m);}else if(!typeEqual(a, b)){return false;}else if("object" !== type(a) && "object" !== type(b) && ("array" !== type(a) && "array" !== type(b))){return sameValue(a, b);}else {return objectEqual(a, b, m);}}function sameValue(a, b){if(a === b){return a !== 0 || 1 / a === 1 / b;}return a !== a && b !== b;}function typeEqual(a, b){return type(a) === type(b);}function dateEqual(a, b){if("date" !== type(b)){return false;}return sameValue(a.getTime(), b.getTime());}function regexpEqual(a, b){if("regexp" !== type(b)){return false;}return sameValue(a.toString(), b.toString());}function argumentsEqual(a, b, m){if("arguments" !== type(b)){return false;}a = [].slice.call(a);b = [].slice.call(b);return deepEqual(a, b, m);}function enumerable(a){var res=[];for(var key in a) res.push(key);return res;}function iterableEqual(a, b){if(a.length !== b.length){return false;}var i=0;var match=true;for(; i < a.length; i++) {if(a[i] !== b[i]){match = false;break;}}return match;}function bufferEqual(a, b){if(!Buffer.isBuffer(b)){return false;}return iterableEqual(a, b);}function isValue(a){return a !== null && a !== undefined;}function objectEqual(a, b, m){if(!isValue(a) || !isValue(b)){return false;}if(a.prototype !== b.prototype){return false;}var i;if(m){for(i = 0; i < m.length; i++) {if(m[i][0] === a && m[i][1] === b || m[i][0] === b && m[i][1] === a){return true;}}}else {m = [];}try{var ka=enumerable(a);var kb=enumerable(b);}catch(ex) {return false;}ka.sort();kb.sort();if(!iterableEqual(ka, kb)){return false;}m.push([a, b]);var key;for(i = ka.length - 1; i >= 0; i--) {key = ka[i];if(!deepEqual(a[key], b[key], m)){return false;}}return true;}});require.register("chai", function(exports, module){module.exports = require("chai/lib/chai.js");});require.register("chai/lib/chai.js", function(exports, module){var used=[], exports=module.exports = {};exports.version = "2.1.2";exports.AssertionError = require("chaijs~assertion-error@1.0.0");var util=require("chai/lib/chai/utils/index.js");exports.use = function(fn){if(! ~used.indexOf(fn)){fn(this, util);used.push(fn);}return this;};exports.util = util;var config=require("chai/lib/chai/config.js");exports.config = config;var assertion=require("chai/lib/chai/assertion.js");exports.use(assertion);var core=require("chai/lib/chai/core/assertions.js");exports.use(core);var expect=require("chai/lib/chai/interface/expect.js");exports.use(expect);var should=require("chai/lib/chai/interface/should.js");exports.use(should);var assert=require("chai/lib/chai/interface/assert.js");exports.use(assert);});require.register("chai/lib/chai/assertion.js", function(exports, module){var config=require("chai/lib/chai/config.js");module.exports = function(_chai, util){var AssertionError=_chai.AssertionError, flag=util.flag;_chai.Assertion = Assertion;function Assertion(obj, msg, stack){flag(this, "ssfi", stack || arguments.callee);flag(this, "object", obj);flag(this, "message", msg);}Object.defineProperty(Assertion, "includeStack", {get:function get(){console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead.");return config.includeStack;}, set:function set(value){console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead.");config.includeStack = value;}});Object.defineProperty(Assertion, "showDiff", {get:function get(){console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead.");return config.showDiff;}, set:function set(value){console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead.");config.showDiff = value;}});Assertion.addProperty = function(name, fn){util.addProperty(this.prototype, name, fn);};Assertion.addMethod = function(name, fn){util.addMethod(this.prototype, name, fn);};Assertion.addChainableMethod = function(name, fn, chainingBehavior){util.addChainableMethod(this.prototype, name, fn, chainingBehavior);};Assertion.overwriteProperty = function(name, fn){util.overwriteProperty(this.prototype, name, fn);};Assertion.overwriteMethod = function(name, fn){util.overwriteMethod(this.prototype, name, fn);};Assertion.overwriteChainableMethod = function(name, fn, chainingBehavior){util.overwriteChainableMethod(this.prototype, name, fn, chainingBehavior);};Assertion.prototype.assert = function(expr, msg, negateMsg, expected, _actual, showDiff){var ok=util.test(this, arguments);if(true !== showDiff)showDiff = false;if(true !== config.showDiff)showDiff = false;if(!ok){var msg=util.getMessage(this, arguments), actual=util.getActual(this, arguments);throw new AssertionError(msg, {actual:actual, expected:expected, showDiff:showDiff}, config.includeStack?this.assert:flag(this, "ssfi"));}};Object.defineProperty(Assertion.prototype, "_obj", {get:function get(){return flag(this, "object");}, set:function set(val){flag(this, "object", val);}});};});require.register("chai/lib/chai/config.js", function(exports, module){module.exports = {includeStack:false, showDiff:true, truncateThreshold:40};});require.register("chai/lib/chai/core/assertions.js", function(exports, module){module.exports = function(chai, _){var Assertion=chai.Assertion, toString=Object.prototype.toString, flag=_.flag;["to", "be", "been", "is", "and", "has", "have", "with", "that", "which", "at", "of", "same"].forEach(function(chain){Assertion.addProperty(chain, function(){return this;});});Assertion.addProperty("not", function(){flag(this, "negate", true);});Assertion.addProperty("deep", function(){flag(this, "deep", true);});Assertion.addProperty("any", function(){flag(this, "any", true);flag(this, "all", false);});Assertion.addProperty("all", function(){flag(this, "all", true);flag(this, "any", false);});function an(type, msg){if(msg)flag(this, "message", msg);type = type.toLowerCase();var obj=flag(this, "object"), article=~["a", "e", "i", "o", "u"].indexOf(type.charAt(0))?"an ":"a ";this.assert(type === _.type(obj), "expected #{this} to be " + article + type, "expected #{this} not to be " + article + type);}Assertion.addChainableMethod("an", an);Assertion.addChainableMethod("a", an);function includeChainingBehavior(){flag(this, "contains", true);}function include(val, msg){if(msg)flag(this, "message", msg);var obj=flag(this, "object");var expected=false;if(_.type(obj) === "array" && _.type(val) === "object"){for(var i in obj) {if(_.eql(obj[i], val)){expected = true;break;}}}else if(_.type(val) === "object"){if(!flag(this, "negate")){for(var k in val) new Assertion(obj).property(k, val[k]);return;}var subset={};for(var k in val) subset[k] = obj[k];expected = _.eql(subset, val);}else {expected = obj && ~obj.indexOf(val);}this.assert(expected, "expected #{this} to include " + _.inspect(val), "expected #{this} to not include " + _.inspect(val));}Assertion.addChainableMethod("include", include, includeChainingBehavior);Assertion.addChainableMethod("contain", include, includeChainingBehavior);Assertion.addChainableMethod("contains", include, includeChainingBehavior);Assertion.addChainableMethod("includes", include, includeChainingBehavior);Assertion.addProperty("ok", function(){this.assert(flag(this, "object"), "expected #{this} to be truthy", "expected #{this} to be falsy");});Assertion.addProperty("true", function(){this.assert(true === flag(this, "object"), "expected #{this} to be true", "expected #{this} to be false", this.negate?false:true);});Assertion.addProperty("false", function(){this.assert(false === flag(this, "object"), "expected #{this} to be false", "expected #{this} to be true", this.negate?true:false);});Assertion.addProperty("null", function(){this.assert(null === flag(this, "object"), "expected #{this} to be null", "expected #{this} not to be null");});Assertion.addProperty("undefined", function(){this.assert(undefined === flag(this, "object"), "expected #{this} to be undefined", "expected #{this} not to be undefined");});Assertion.addProperty("exist", function(){this.assert(null != flag(this, "object"), "expected #{this} to exist", "expected #{this} to not exist");});Assertion.addProperty("empty", function(){var obj=flag(this, "object"), expected=obj;if(Array.isArray(obj) || "string" === typeof object){expected = obj.length;}else if(typeof obj === "object"){expected = Object.keys(obj).length;}this.assert(!expected, "expected #{this} to be empty", "expected #{this} not to be empty");});function checkArguments(){var obj=flag(this, "object"), type=Object.prototype.toString.call(obj);this.assert("[object Arguments]" === type, "expected #{this} to be arguments but got " + type, "expected #{this} to not be arguments");}Assertion.addProperty("arguments", checkArguments);Assertion.addProperty("Arguments", checkArguments);function assertEqual(val, msg){if(msg)flag(this, "message", msg);var obj=flag(this, "object");if(flag(this, "deep")){return this.eql(val);}else {this.assert(val === obj, "expected #{this} to equal #{exp}", "expected #{this} to not equal #{exp}", val, this._obj, true);}}Assertion.addMethod("equal", assertEqual);Assertion.addMethod("equals", assertEqual);Assertion.addMethod("eq", assertEqual);function assertEql(obj, msg){if(msg)flag(this, "message", msg);this.assert(_.eql(obj, flag(this, "object")), "expected #{this} to deeply equal #{exp}", "expected #{this} to not deeply equal #{exp}", obj, this._obj, true);}Assertion.addMethod("eql", assertEql);Assertion.addMethod("eqls", assertEql);function assertAbove(n, msg){if(msg)flag(this, "message", msg);var obj=flag(this, "object");if(flag(this, "doLength")){new Assertion(obj, msg).to.have.property("length");var len=obj.length;this.assert(len > n, "expected #{this} to have a length above #{exp} but got #{act}", "expected #{this} to not have a length above #{exp}", n, len);}else {this.assert(obj > n, "expected #{this} to be above " + n, "expected #{this} to be at most " + n);}}Assertion.addMethod("above", assertAbove);Assertion.addMethod("gt", assertAbove);Assertion.addMethod("greaterThan", assertAbove);function assertLeast(n, msg){if(msg)flag(this, "message", msg);var obj=flag(this, "object");if(flag(this, "doLength")){new Assertion(obj, msg).to.have.property("length");var len=obj.length;this.assert(len >= n, "expected #{this} to have a length at least #{exp} but got #{act}", "expected #{this} to have a length below #{exp}", n, len);}else {this.assert(obj >= n, "expected #{this} to be at least " + n, "expected #{this} to be below " + n);}}Assertion.addMethod("least", assertLeast);Assertion.addMethod("gte", assertLeast);function assertBelow(n, msg){if(msg)flag(this, "message", msg);var obj=flag(this, "object");if(flag(this, "doLength")){new Assertion(obj, msg).to.have.property("length");var len=obj.length;this.assert(len < n, "expected #{this} to have a length below #{exp} but got #{act}", "expected #{this} to not have a length below #{exp}", n, len);}else {this.assert(obj < n, "expected #{this} to be below " + n, "expected #{this} to be at least " + n);}}Assertion.addMethod("below", assertBelow);Assertion.addMethod("lt", assertBelow);Assertion.addMethod("lessThan", assertBelow);function assertMost(n, msg){if(msg)flag(this, "message", msg);var obj=flag(this, "object");if(flag(this, "doLength")){new Assertion(obj, msg).to.have.property("length");var len=obj.length;this.assert(len <= n, "expected #{this} to have a length at most #{exp} but got #{act}", "expected #{this} to have a length above #{exp}", n, len);}else {this.assert(obj <= n, "expected #{this} to be at most " + n, "expected #{this} to be above " + n);}}Assertion.addMethod("most", assertMost);Assertion.addMethod("lte", assertMost);Assertion.addMethod("within", function(start, finish, msg){if(msg)flag(this, "message", msg);var obj=flag(this, "object"), range=start + ".." + finish;if(flag(this, "doLength")){new Assertion(obj, msg).to.have.property("length");var len=obj.length;this.assert(len >= start && len <= finish, "expected #{this} to have a length within " + range, "expected #{this} to not have a length within " + range);}else {this.assert(obj >= start && obj <= finish, "expected #{this} to be within " + range, "expected #{this} to not be within " + range);}});function assertInstanceOf(constructor, msg){if(msg)flag(this, "message", msg);var name=_.getName(constructor);this.assert(flag(this, "object") instanceof constructor, "expected #{this} to be an instance of " + name, "expected #{this} to not be an instance of " + name);};Assertion.addMethod("instanceof", assertInstanceOf);Assertion.addMethod("instanceOf", assertInstanceOf);Assertion.addMethod("property", function(name, val, msg){if(msg)flag(this, "message", msg);var isDeep=!!flag(this, "deep"), descriptor=isDeep?"deep property ":"property ", negate=flag(this, "negate"), obj=flag(this, "object"), pathInfo=isDeep?_.getPathInfo(name, obj):null, hasProperty=isDeep?pathInfo.exists:_.hasProperty(name, obj), value=isDeep?pathInfo.value:obj[name];if(negate && undefined !== val){if(undefined === value){msg = msg != null?msg + ": ":"";throw new Error(msg + _.inspect(obj) + " has no " + descriptor + _.inspect(name));}}else {this.assert(hasProperty, "expected #{this} to have a " + descriptor + _.inspect(name), "expected #{this} to not have " + descriptor + _.inspect(name));}if(undefined !== val){this.assert(val === value, "expected #{this} to have a " + descriptor + _.inspect(name) + " of #{exp}, but got #{act}", "expected #{this} to not have a " + descriptor + _.inspect(name) + " of #{act}", val, value);}flag(this, "object", value);});function assertOwnProperty(name, msg){if(msg)flag(this, "message", msg);var obj=flag(this, "object");this.assert(obj.hasOwnProperty(name), "expected #{this} to have own property " + _.inspect(name), "expected #{this} to not have own property " + _.inspect(name));}Assertion.addMethod("ownProperty", assertOwnProperty);Assertion.addMethod("haveOwnProperty", assertOwnProperty);function assertLengthChain(){flag(this, "doLength", true);}function assertLength(n, msg){if(msg)flag(this, "message", msg);var obj=flag(this, "object");new Assertion(obj, msg).to.have.property("length");var len=obj.length;this.assert(len == n, "expected #{this} to have a length of #{exp} but got #{act}", "expected #{this} to not have a length of #{act}", n, len);}Assertion.addChainableMethod("length", assertLength, assertLengthChain);Assertion.addMethod("lengthOf", assertLength);Assertion.addMethod("match", function(re, msg){if(msg)flag(this, "message", msg);var obj=flag(this, "object");this.assert(re.exec(obj), "expected #{this} to match " + re, "expected #{this} not to match " + re);});Assertion.addMethod("string", function(str, msg){if(msg)flag(this, "message", msg);var obj=flag(this, "object");new Assertion(obj, msg).is.a("string");this.assert(~obj.indexOf(str), "expected #{this} to contain " + _.inspect(str), "expected #{this} to not contain " + _.inspect(str));});function assertKeys(keys){var obj=flag(this, "object"), str, ok=true, mixedArgsMsg="keys must be given single argument of Array|Object|String, or multiple String arguments";switch(_.type(keys)){case "array":if(arguments.length > 1)throw new Error(mixedArgsMsg);break;case "object":if(arguments.length > 1)throw new Error(mixedArgsMsg);keys = Object.keys(keys);break;default:keys = Array.prototype.slice.call(arguments);}if(!keys.length)throw new Error("keys required");var actual=Object.keys(obj), expected=keys, len=keys.length, any=flag(this, "any"), all=flag(this, "all");if(!any && !all){all = true;}if(any){var intersection=expected.filter(function(key){return ~actual.indexOf(key);});ok = intersection.length > 0;}if(all){ok = keys.every(function(key){return ~actual.indexOf(key);});if(!flag(this, "negate") && !flag(this, "contains")){ok = ok && keys.length == actual.length;}}if(len > 1){keys = keys.map(function(key){return _.inspect(key);});var last=keys.pop();if(all){str = keys.join(", ") + ", and " + last;}if(any){str = keys.join(", ") + ", or " + last;}}else {str = _.inspect(keys[0]);}str = (len > 1?"keys ":"key ") + str;str = (flag(this, "contains")?"contain ":"have ") + str;this.assert(ok, "expected #{this} to " + str, "expected #{this} to not " + str, expected.slice(0).sort(), actual.sort(), true);}Assertion.addMethod("keys", assertKeys);Assertion.addMethod("key", assertKeys);function assertThrows(constructor, errMsg, msg){if(msg)flag(this, "message", msg);var obj=flag(this, "object");new Assertion(obj, msg).is.a("function");var thrown=false, desiredError=null, name=null, thrownError=null;if(arguments.length === 0){errMsg = null;constructor = null;}else if(constructor && (constructor instanceof RegExp || "string" === typeof constructor)){errMsg = constructor;constructor = null;}else if(constructor && constructor instanceof Error){desiredError = constructor;constructor = null;errMsg = null;}else if(typeof constructor === "function"){name = constructor.prototype.name || constructor.name;if(name === "Error" && constructor !== Error){name = new constructor().name;}}else {constructor = null;}try{obj();}catch(err) {if(desiredError){this.assert(err === desiredError, "expected #{this} to throw #{exp} but #{act} was thrown", "expected #{this} to not throw #{exp}", desiredError instanceof Error?desiredError.toString():desiredError, err instanceof Error?err.toString():err);flag(this, "object", err);return this;}if(constructor){this.assert(err instanceof constructor, "expected #{this} to throw #{exp} but #{act} was thrown", "expected #{this} to not throw #{exp} but #{act} was thrown", name, err instanceof Error?err.toString():err);if(!errMsg){flag(this, "object", err);return this;}}var message="object" === _.type(err) && "message" in err?err.message:"" + err;if(message != null && errMsg && errMsg instanceof RegExp){this.assert(errMsg.exec(message), "expected #{this} to throw error matching #{exp} but got #{act}", "expected #{this} to throw error not matching #{exp}", errMsg, message);flag(this, "object", err);return this;}else if(message != null && errMsg && "string" === typeof errMsg){this.assert(~message.indexOf(errMsg), "expected #{this} to throw error including #{exp} but got #{act}", "expected #{this} to throw error not including #{act}", errMsg, message);flag(this, "object", err);return this;}else {thrown = true;thrownError = err;}}var actuallyGot="", expectedThrown=name !== null?name:desiredError?"#{exp}":"an error";if(thrown){actuallyGot = " but #{act} was thrown";}this.assert(thrown === true, "expected #{this} to throw " + expectedThrown + actuallyGot, "expected #{this} to not throw " + expectedThrown + actuallyGot, desiredError instanceof Error?desiredError.toString():desiredError, thrownError instanceof Error?thrownError.toString():thrownError);flag(this, "object", thrownError);};Assertion.addMethod("throw", assertThrows);Assertion.addMethod("throws", assertThrows);Assertion.addMethod("Throw", assertThrows);Assertion.addMethod("respondTo", function(method, msg){if(msg)flag(this, "message", msg);var obj=flag(this, "object"), itself=flag(this, "itself"), context="function" === _.type(obj) && !itself?obj.prototype[method]:obj[method];this.assert("function" === typeof context, "expected #{this} to respond to " + _.inspect(method), "expected #{this} to not respond to " + _.inspect(method));});Assertion.addProperty("itself", function(){flag(this, "itself", true);});Assertion.addMethod("satisfy", function(matcher, msg){if(msg)flag(this, "message", msg);var obj=flag(this, "object");var result=matcher(obj);this.assert(result, "expected #{this} to satisfy " + _.objDisplay(matcher), "expected #{this} to not satisfy" + _.objDisplay(matcher), this.negate?false:true, result);});Assertion.addMethod("closeTo", function(expected, delta, msg){if(msg)flag(this, "message", msg);var obj=flag(this, "object");new Assertion(obj, msg).is.a("number");if(_.type(expected) !== "number" || _.type(delta) !== "number"){throw new Error("the arguments to closeTo must be numbers");}this.assert(Math.abs(obj - expected) <= delta, "expected #{this} to be close to " + expected + " +/- " + delta, "expected #{this} not to be close to " + expected + " +/- " + delta);});function isSubsetOf(subset, superset, cmp){return subset.every(function(elem){if(!cmp)return superset.indexOf(elem) !== -1;return superset.some(function(elem2){return cmp(elem, elem2);});});}Assertion.addMethod("members", function(subset, msg){if(msg)flag(this, "message", msg);var obj=flag(this, "object");new Assertion(obj).to.be.an("array");new Assertion(subset).to.be.an("array");var cmp=flag(this, "deep")?_.eql:undefined;if(flag(this, "contains")){return this.assert(isSubsetOf(subset, obj, cmp), "expected #{this} to be a superset of #{act}", "expected #{this} to not be a superset of #{act}", obj, subset);}this.assert(isSubsetOf(obj, subset, cmp) && isSubsetOf(subset, obj, cmp), "expected #{this} to have the same members as #{act}", "expected #{this} to not have the same members as #{act}", obj, subset);});function assertChanges(object, prop, msg){if(msg)flag(this, "message", msg);var fn=flag(this, "object");new Assertion(object, msg).to.have.property(prop);new Assertion(fn).is.a("function");var initial=object[prop];fn();this.assert(initial !== object[prop], "expected ." + prop + " to change", "expected ." + prop + " to not change");}Assertion.addChainableMethod("change", assertChanges);Assertion.addChainableMethod("changes", assertChanges);function assertIncreases(object, prop, msg){if(msg)flag(this, "message", msg);var fn=flag(this, "object");new Assertion(object, msg).to.have.property(prop);new Assertion(fn).is.a("function");var initial=object[prop];fn();this.assert(object[prop] - initial > 0, "expected ." + prop + " to increase", "expected ." + prop + " to not increase");}Assertion.addChainableMethod("increase", assertIncreases);Assertion.addChainableMethod("increases", assertIncreases);function assertDecreases(object, prop, msg){if(msg)flag(this, "message", msg);var fn=flag(this, "object");new Assertion(object, msg).to.have.property(prop);new Assertion(fn).is.a("function");var initial=object[prop];fn();this.assert(object[prop] - initial < 0, "expected ." + prop + " to decrease", "expected ." + prop + " to not decrease");}Assertion.addChainableMethod("decrease", assertDecreases);Assertion.addChainableMethod("decreases", assertDecreases);};});require.register("chai/lib/chai/interface/assert.js", function(exports, module){module.exports = function(chai, util){var Assertion=chai.Assertion, flag=util.flag;var assert=chai.assert = function(express, errmsg){var test=new Assertion(null, null, chai.assert);test.assert(express, errmsg, "[ negation message unavailable ]");};assert.fail = function(actual, expected, message, operator){message = message || "assert.fail()";throw new chai.AssertionError(message, {actual:actual, expected:expected, operator:operator}, assert.fail);};assert.ok = function(val, msg){new Assertion(val, msg).is.ok;};assert.notOk = function(val, msg){new Assertion(val, msg).is.not.ok;};assert.equal = function(act, exp, msg){var test=new Assertion(act, msg, assert.equal);test.assert(exp == flag(test, "object"), "expected #{this} to equal #{exp}", "expected #{this} to not equal #{act}", exp, act);};assert.notEqual = function(act, exp, msg){var test=new Assertion(act, msg, assert.notEqual);test.assert(exp != flag(test, "object"), "expected #{this} to not equal #{exp}", "expected #{this} to equal #{act}", exp, act);};assert.strictEqual = function(act, exp, msg){new Assertion(act, msg).to.equal(exp);};assert.notStrictEqual = function(act, exp, msg){new Assertion(act, msg).to.not.equal(exp);};assert.deepEqual = function(act, exp, msg){new Assertion(act, msg).to.eql(exp);};assert.notDeepEqual = function(act, exp, msg){new Assertion(act, msg).to.not.eql(exp);};assert.isAbove = function(val, abv, msg){new Assertion(val, msg).to.be.above(abv);};assert.isBelow = function(val, blw, msg){new Assertion(val, msg).to.be.below(blw);};assert.isTrue = function(val, msg){new Assertion(val, msg).is["true"];};assert.isFalse = function(val, msg){new Assertion(val, msg).is["false"];};assert.isNull = function(val, msg){new Assertion(val, msg).to.equal(null);};assert.isNotNull = function(val, msg){new Assertion(val, msg).to.not.equal(null);};assert.isUndefined = function(val, msg){new Assertion(val, msg).to.equal(undefined);};assert.isDefined = function(val, msg){new Assertion(val, msg).to.not.equal(undefined);};assert.isFunction = function(val, msg){new Assertion(val, msg).to.be.a("function");};assert.isNotFunction = function(val, msg){new Assertion(val, msg).to.not.be.a("function");};assert.isObject = function(val, msg){new Assertion(val, msg).to.be.a("object");};assert.isNotObject = function(val, msg){new Assertion(val, msg).to.not.be.a("object");};assert.isArray = function(val, msg){new Assertion(val, msg).to.be.an("array");};assert.isNotArray = function(val, msg){new Assertion(val, msg).to.not.be.an("array");};assert.isString = function(val, msg){new Assertion(val, msg).to.be.a("string");};assert.isNotString = function(val, msg){new Assertion(val, msg).to.not.be.a("string");};assert.isNumber = function(val, msg){new Assertion(val, msg).to.be.a("number");};assert.isNotNumber = function(val, msg){new Assertion(val, msg).to.not.be.a("number");};assert.isBoolean = function(val, msg){new Assertion(val, msg).to.be.a("boolean");};assert.isNotBoolean = function(val, msg){new Assertion(val, msg).to.not.be.a("boolean");};assert.typeOf = function(val, type, msg){new Assertion(val, msg).to.be.a(type);};assert.notTypeOf = function(val, type, msg){new Assertion(val, msg).to.not.be.a(type);};assert.instanceOf = function(val, type, msg){new Assertion(val, msg).to.be.instanceOf(type);};assert.notInstanceOf = function(val, type, msg){new Assertion(val, msg).to.not.be.instanceOf(type);};assert.include = function(exp, inc, msg){new Assertion(exp, msg, assert.include).include(inc);};assert.notInclude = function(exp, inc, msg){new Assertion(exp, msg, assert.notInclude).not.include(inc);};assert.match = function(exp, re, msg){new Assertion(exp, msg).to.match(re);};assert.notMatch = function(exp, re, msg){new Assertion(exp, msg).to.not.match(re);};assert.property = function(obj, prop, msg){new Assertion(obj, msg).to.have.property(prop);};assert.notProperty = function(obj, prop, msg){new Assertion(obj, msg).to.not.have.property(prop);};assert.deepProperty = function(obj, prop, msg){new Assertion(obj, msg).to.have.deep.property(prop);};assert.notDeepProperty = function(obj, prop, msg){new Assertion(obj, msg).to.not.have.deep.property(prop);};assert.propertyVal = function(obj, prop, val, msg){new Assertion(obj, msg).to.have.property(prop, val);};assert.propertyNotVal = function(obj, prop, val, msg){new Assertion(obj, msg).to.not.have.property(prop, val);};assert.deepPropertyVal = function(obj, prop, val, msg){new Assertion(obj, msg).to.have.deep.property(prop, val);};assert.deepPropertyNotVal = function(obj, prop, val, msg){new Assertion(obj, msg).to.not.have.deep.property(prop, val);};assert.lengthOf = function(exp, len, msg){new Assertion(exp, msg).to.have.length(len);};assert.Throw = function(fn, errt, errs, msg){if("string" === typeof errt || errt instanceof RegExp){errs = errt;errt = null;}var assertErr=new Assertion(fn, msg).to.Throw(errt, errs);return flag(assertErr, "object");};assert.doesNotThrow = function(fn, type, msg){if("string" === typeof type){msg = type;type = null;}new Assertion(fn, msg).to.not.Throw(type);};assert.operator = function(val, operator, val2, msg){if(! ~["==", "===", ">", ">=", "<", "<=", "!=", "!=="].indexOf(operator)){throw new Error("Invalid operator \"" + operator + "\"");}var test=new Assertion(eval(val + operator + val2), msg);test.assert(true === flag(test, "object"), "expected " + util.inspect(val) + " to be " + operator + " " + util.inspect(val2), "expected " + util.inspect(val) + " to not be " + operator + " " + util.inspect(val2));};assert.closeTo = function(act, exp, delta, msg){new Assertion(act, msg).to.be.closeTo(exp, delta);};assert.sameMembers = function(set1, set2, msg){new Assertion(set1, msg).to.have.same.members(set2);};assert.sameDeepMembers = function(set1, set2, msg){new Assertion(set1, msg).to.have.same.deep.members(set2);};assert.includeMembers = function(superset, subset, msg){new Assertion(superset, msg).to.include.members(subset);};assert.changes = function(fn, obj, prop){new Assertion(fn).to.change(obj, prop);};assert.doesNotChange = function(fn, obj, prop){new Assertion(fn).to.not.change(obj, prop);};assert.increases = function(fn, obj, prop){new Assertion(fn).to.increase(obj, prop);};assert.doesNotIncrease = function(fn, obj, prop){new Assertion(fn).to.not.increase(obj, prop);};assert.decreases = function(fn, obj, prop){new Assertion(fn).to.decrease(obj, prop);};assert.doesNotDecrease = function(fn, obj, prop){new Assertion(fn).to.not.decrease(obj, prop);};assert.ifError = function(val, msg){new Assertion(val, msg).to.not.be.ok;};(function alias(name, as){assert[as] = assert[name];return alias;})("Throw", "throw")("Throw", "throws");};});require.register("chai/lib/chai/interface/expect.js", function(exports, module){module.exports = function(chai, util){chai.expect = function(val, message){return new chai.Assertion(val, message);};chai.expect.fail = function(actual, expected, message, operator){message = message || "expect.fail()";throw new chai.AssertionError(message, {actual:actual, expected:expected, operator:operator}, chai.expect.fail);};};});require.register("chai/lib/chai/interface/should.js", function(exports, module){module.exports = function(chai, util){var Assertion=chai.Assertion;function loadShould(){function shouldGetter(){if(this instanceof String || this instanceof Number || this instanceof Boolean){return new Assertion(this.valueOf(), null, shouldGetter);}return new Assertion(this, null, shouldGetter);}function shouldSetter(value){Object.defineProperty(this, "should", {value:value, enumerable:true, configurable:true, writable:true});}Object.defineProperty(Object.prototype, "should", {set:shouldSetter, get:shouldGetter, configurable:true});var should={};should.fail = function(actual, expected, message, operator){message = message || "should.fail()";throw new chai.AssertionError(message, {actual:actual, expected:expected, operator:operator}, should.fail);};should.equal = function(val1, val2, msg){new Assertion(val1, msg).to.equal(val2);};should.Throw = function(fn, errt, errs, msg){new Assertion(fn, msg).to.Throw(errt, errs);};should.exist = function(val, msg){new Assertion(val, msg).to.exist;};should.not = {};should.not.equal = function(val1, val2, msg){new Assertion(val1, msg).to.not.equal(val2);};should.not.Throw = function(fn, errt, errs, msg){new Assertion(fn, msg).to.not.Throw(errt, errs);};should.not.exist = function(val, msg){new Assertion(val, msg).to.not.exist;};should["throw"] = should.Throw;should.not["throw"] = should.not.Throw;return should;};chai.should = loadShould;chai.Should = loadShould;};});require.register("chai/lib/chai/utils/addChainableMethod.js", function(exports, module){var transferFlags=require("chai/lib/chai/utils/transferFlags.js");var flag=require("chai/lib/chai/utils/flag.js");var config=require("chai/lib/chai/config.js");var hasProtoSupport=("__proto__" in Object);var excludeNames=/^(?:length|name|arguments|caller)$/;var call=Function.prototype.call, apply=Function.prototype.apply;module.exports = function(ctx, name, method, chainingBehavior){if(typeof chainingBehavior !== "function"){chainingBehavior = function(){};}var chainableBehavior={method:method, chainingBehavior:chainingBehavior};if(!ctx.__methods){ctx.__methods = {};}ctx.__methods[name] = chainableBehavior;Object.defineProperty(ctx, name, {get:function get(){chainableBehavior.chainingBehavior.call(this);var assert=function assert(){var old_ssfi=flag(this, "ssfi");if(old_ssfi && config.includeStack === false)flag(this, "ssfi", assert);var result=chainableBehavior.method.apply(this, arguments);return result === undefined?this:result;};if(hasProtoSupport){var prototype=assert.__proto__ = Object.create(this);prototype.call = call;prototype.apply = apply;}else {var asserterNames=Object.getOwnPropertyNames(ctx);asserterNames.forEach(function(asserterName){if(!excludeNames.test(asserterName)){var pd=Object.getOwnPropertyDescriptor(ctx, asserterName);Object.defineProperty(assert, asserterName, pd);}});}transferFlags(this, assert);return assert;}, configurable:true});};});require.register("chai/lib/chai/utils/addMethod.js", function(exports, module){var config=require("chai/lib/chai/config.js");var flag=require("chai/lib/chai/utils/flag.js");module.exports = function(ctx, name, method){ctx[name] = function(){var old_ssfi=flag(this, "ssfi");if(old_ssfi && config.includeStack === false)flag(this, "ssfi", ctx[name]);var result=method.apply(this, arguments);return result === undefined?this:result;};};});require.register("chai/lib/chai/utils/addProperty.js", function(exports, module){module.exports = function(ctx, name, getter){Object.defineProperty(ctx, name, {get:function get(){var result=getter.call(this);return result === undefined?this:result;}, configurable:true});};});require.register("chai/lib/chai/utils/flag.js", function(exports, module){module.exports = function(obj, key, value){var flags=obj.__flags || (obj.__flags = Object.create(null));if(arguments.length === 3){flags[key] = value;}else {return flags[key];}};});require.register("chai/lib/chai/utils/getActual.js", function(exports, module){module.exports = function(obj, args){return args.length > 4?args[4]:obj._obj;};});require.register("chai/lib/chai/utils/getEnumerableProperties.js", function(exports, module){module.exports = function getEnumerableProperties(object){var result=[];for(var name in object) {result.push(name);}return result;};});require.register("chai/lib/chai/utils/getMessage.js", function(exports, module){var flag=require("chai/lib/chai/utils/flag.js"), getActual=require("chai/lib/chai/utils/getActual.js"), inspect=require("chai/lib/chai/utils/inspect.js"), objDisplay=require("chai/lib/chai/utils/objDisplay.js");module.exports = function(obj, args){var negate=flag(obj, "negate"), val=flag(obj, "object"), expected=args[3], actual=getActual(obj, args), msg=negate?args[2]:args[1], flagMsg=flag(obj, "message");if(typeof msg === "function")msg = msg();msg = msg || "";msg = msg.replace(/#{this}/g, objDisplay(val)).replace(/#{act}/g, objDisplay(actual)).replace(/#{exp}/g, objDisplay(expected));return flagMsg?flagMsg + ": " + msg:msg;};});require.register("chai/lib/chai/utils/getName.js", function(exports, module){module.exports = function(func){if(func.name)return func.name;var match=/^\s?function ([^(]*)\(/.exec(func);return match && match[1]?match[1]:"";};});require.register("chai/lib/chai/utils/getPathValue.js", function(exports, module){var getPathInfo=require("chai/lib/chai/utils/getPathInfo.js");module.exports = function(path, obj){var info=getPathInfo(path, obj);return info.value;};});require.register("chai/lib/chai/utils/getPathInfo.js", function(exports, module){var hasProperty=require("chai/lib/chai/utils/hasProperty.js");module.exports = function getPathInfo(path, obj){var parsed=parsePath(path), last=parsed[parsed.length - 1];var info={parent:parsed.length > 1?_getPathValue(parsed, obj, parsed.length - 1):obj, name:last.p || last.i, value:_getPathValue(parsed, obj)};info.exists = hasProperty(info.name, info.parent);return info;};function parsePath(path){var str=path.replace(/\[/g, ".["), parts=str.match(/(\\\.|[^.]+?)+/g);return parts.map(function(value){var re=/\[(\d+)\]$/, mArr=re.exec(value);if(mArr)return {i:parseFloat(mArr[1])};else return {p:value};});}function _getPathValue(parsed, obj, index){var tmp=obj, res;index = index === undefined?parsed.length:index;for(var i=0, l=index; i < l; i++) {var part=parsed[i];if(tmp){if("undefined" !== typeof part.p)tmp = tmp[part.p];else if("undefined" !== typeof part.i)tmp = tmp[part.i];if(i == l - 1)res = tmp;}else {res = undefined;}}return res;}});require.register("chai/lib/chai/utils/hasProperty.js", function(exports, module){var type=require("chai/lib/chai/utils/type.js");var literals={number:Number, string:String};module.exports = function hasProperty(name, obj){var ot=type(obj);if(ot === "null" || ot === "undefined"){return false;}if(literals[ot] && typeof obj !== "object")obj = new literals[ot](obj);return name in obj;};});require.register("chai/lib/chai/utils/getProperties.js", function(exports, module){module.exports = function getProperties(object){var result=Object.getOwnPropertyNames(subject);function addProperty(property){if(result.indexOf(property) === -1){result.push(property);}}var proto=Object.getPrototypeOf(subject);while(proto !== null) {Object.getOwnPropertyNames(proto).forEach(addProperty);proto = Object.getPrototypeOf(proto);}return result;};});require.register("chai/lib/chai/utils/index.js", function(exports, module){var exports=module.exports = {};exports.test = require("chai/lib/chai/utils/test.js");exports.type = require("chai/lib/chai/utils/type.js");exports.getMessage = require("chai/lib/chai/utils/getMessage.js");exports.getActual = require("chai/lib/chai/utils/getActual.js");exports.inspect = require("chai/lib/chai/utils/inspect.js");exports.objDisplay = require("chai/lib/chai/utils/objDisplay.js");exports.flag = require("chai/lib/chai/utils/flag.js");exports.transferFlags = require("chai/lib/chai/utils/transferFlags.js");exports.eql = require("chaijs~deep-eql@0.1.3");exports.getPathValue = require("chai/lib/chai/utils/getPathValue.js");exports.getPathInfo = require("chai/lib/chai/utils/getPathInfo.js");exports.hasProperty = require("chai/lib/chai/utils/hasProperty.js");exports.getName = require("chai/lib/chai/utils/getName.js");exports.addProperty = require("chai/lib/chai/utils/addProperty.js");exports.addMethod = require("chai/lib/chai/utils/addMethod.js");exports.overwriteProperty = require("chai/lib/chai/utils/overwriteProperty.js");exports.overwriteMethod = require("chai/lib/chai/utils/overwriteMethod.js");exports.addChainableMethod = require("chai/lib/chai/utils/addChainableMethod.js");exports.overwriteChainableMethod = require("chai/lib/chai/utils/overwriteChainableMethod.js");});require.register("chai/lib/chai/utils/inspect.js", function(exports, module){var getName=require("chai/lib/chai/utils/getName.js");var getProperties=require("chai/lib/chai/utils/getProperties.js");var getEnumerableProperties=require("chai/lib/chai/utils/getEnumerableProperties.js");module.exports = inspect;function inspect(obj, showHidden, depth, colors){var ctx={showHidden:showHidden, seen:[], stylize:function stylize(str){return str;}};return formatValue(ctx, obj, typeof depth === "undefined"?2:depth);}var isDOMElement=function isDOMElement(object){if(typeof HTMLElement === "object"){return object instanceof HTMLElement;}else {return object && typeof object === "object" && object.nodeType === 1 && typeof object.nodeName === "string";}};function formatValue(ctx, value, recurseTimes){if(value && typeof value.inspect === "function" && value.inspect !== exports.inspect && !(value.constructor && value.constructor.prototype === value)){var ret=value.inspect(recurseTimes);if(typeof ret !== "string"){ret = formatValue(ctx, ret, recurseTimes);}return ret;}var primitive=formatPrimitive(ctx, value);if(primitive){return primitive;}if(isDOMElement(value)){if("outerHTML" in value){return value.outerHTML;}else {try{if(document.xmlVersion){var xmlSerializer=new XMLSerializer();return xmlSerializer.serializeToString(value);}else {var ns="http://www.w3.org/1999/xhtml";var container=document.createElementNS(ns, "_");container.appendChild(value.cloneNode(false));html = container.innerHTML.replace("><", ">" + value.innerHTML + "<");container.innerHTML = "";return html;}}catch(err) {}}}var visibleKeys=getEnumerableProperties(value);var keys=ctx.showHidden?getProperties(value):visibleKeys;if(keys.length === 0 || isError(value) && (keys.length === 1 && keys[0] === "stack" || keys.length === 2 && keys[0] === "description" && keys[1] === "stack")){if(typeof value === "function"){var name=getName(value);var nameSuffix=name?": " + name:"";return ctx.stylize("[Function" + nameSuffix + "]", "special");}if(isRegExp(value)){return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");}if(isDate(value)){return ctx.stylize(Date.prototype.toUTCString.call(value), "date");}if(isError(value)){return formatError(value);}}var base="", array=false, braces=["{", "}"];if(isArray(value)){array = true;braces = ["[", "]"];}if(typeof value === "function"){var name=getName(value);var nameSuffix=name?": " + name:"";base = " [Function" + nameSuffix + "]";}if(isRegExp(value)){base = " " + RegExp.prototype.toString.call(value);}if(isDate(value)){base = " " + Date.prototype.toUTCString.call(value);}if(isError(value)){return formatError(value);}if(keys.length === 0 && (!array || value.length == 0)){return braces[0] + base + braces[1];}if(recurseTimes < 0){if(isRegExp(value)){return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");}else {return ctx.stylize("[Object]", "special");}}ctx.seen.push(value);var output;if(array){output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);}else {output = keys.map(function(key){return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);});}ctx.seen.pop();return reduceToSingleString(output, base, braces);}function formatPrimitive(ctx, value){switch(typeof value){case "undefined":return ctx.stylize("undefined", "undefined");case "string":var simple="'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, "\"") + "'";return ctx.stylize(simple, "string");case "number":if(value === 0 && 1 / value === -Infinity){return ctx.stylize("-0", "number");}return ctx.stylize("" + value, "number");case "boolean":return ctx.stylize("" + value, "boolean");}if(value === null){return ctx.stylize("null", "null");}}function formatError(value){return "[" + Error.prototype.toString.call(value) + "]";}function formatArray(ctx, value, recurseTimes, visibleKeys, keys){var output=[];for(var i=0, l=value.length; i < l; ++i) {if(Object.prototype.hasOwnProperty.call(value, String(i))){output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));}else {output.push("");}}keys.forEach(function(key){if(!key.match(/^\d+$/)){output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));}});return output;}function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array){var name, str;if(value.__lookupGetter__){if(value.__lookupGetter__(key)){if(value.__lookupSetter__(key)){str = ctx.stylize("[Getter/Setter]", "special");}else {str = ctx.stylize("[Getter]", "special");}}else {if(value.__lookupSetter__(key)){str = ctx.stylize("[Setter]", "special");}}}if(visibleKeys.indexOf(key) < 0){name = "[" + key + "]";}if(!str){if(ctx.seen.indexOf(value[key]) < 0){if(recurseTimes === null){str = formatValue(ctx, value[key], null);}else {str = formatValue(ctx, value[key], recurseTimes - 1);}if(str.indexOf("\n") > -1){if(array){str = str.split("\n").map(function(line){return "  " + line;}).join("\n").substr(2);}else {str = "\n" + str.split("\n").map(function(line){return "   " + line;}).join("\n");}}}else {str = ctx.stylize("[Circular]", "special");}}if(typeof name === "undefined"){if(array && key.match(/^\d+$/)){return str;}name = JSON.stringify("" + key);if(name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)){name = name.substr(1, name.length - 2);name = ctx.stylize(name, "name");}else {name = name.replace(/'/g, "\\'").replace(/\\"/g, "\"").replace(/(^"|"$)/g, "'");name = ctx.stylize(name, "string");}}return name + ": " + str;}function reduceToSingleString(output, base, braces){var numLinesEst=0;var length=output.reduce(function(prev, cur){numLinesEst++;if(cur.indexOf("\n") >= 0)numLinesEst++;return prev + cur.length + 1;}, 0);if(length > 60){return braces[0] + (base === ""?"":base + "\n ") + " " + output.join(",\n  ") + " " + braces[1];}return braces[0] + base + " " + output.join(", ") + " " + braces[1];}function isArray(ar){return Array.isArray(ar) || typeof ar === "object" && objectToString(ar) === "[object Array]";}function isRegExp(re){return typeof re === "object" && objectToString(re) === "[object RegExp]";}function isDate(d){return typeof d === "object" && objectToString(d) === "[object Date]";}function isError(e){return typeof e === "object" && objectToString(e) === "[object Error]";}function objectToString(o){return Object.prototype.toString.call(o);}});require.register("chai/lib/chai/utils/objDisplay.js", function(exports, module){var inspect=require("chai/lib/chai/utils/inspect.js");var config=require("chai/lib/chai/config.js");module.exports = function(obj){var str=inspect(obj), type=Object.prototype.toString.call(obj);if(config.truncateThreshold && str.length >= config.truncateThreshold){if(type === "[object Function]"){return !obj.name || obj.name === ""?"[Function]":"[Function: " + obj.name + "]";}else if(type === "[object Array]"){return "[ Array(" + obj.length + ") ]";}else if(type === "[object Object]"){var keys=Object.keys(obj), kstr=keys.length > 2?keys.splice(0, 2).join(", ") + ", ...":keys.join(", ");return "{ Object (" + kstr + ") }";}else {return str;}}else {return str;}};});require.register("chai/lib/chai/utils/overwriteMethod.js", function(exports, module){module.exports = function(ctx, name, method){var _method=ctx[name], _super=function _super(){return this;};if(_method && "function" === typeof _method)_super = _method;ctx[name] = function(){var result=method(_super).apply(this, arguments);return result === undefined?this:result;};};});require.register("chai/lib/chai/utils/overwriteProperty.js", function(exports, module){module.exports = function(ctx, name, getter){var _get=Object.getOwnPropertyDescriptor(ctx, name), _super=function _super(){};if(_get && "function" === typeof _get.get)_super = _get.get;Object.defineProperty(ctx, name, {get:function get(){var result=getter(_super).call(this);return result === undefined?this:result;}, configurable:true});};});require.register("chai/lib/chai/utils/overwriteChainableMethod.js", function(exports, module){module.exports = function(ctx, name, method, chainingBehavior){var chainableBehavior=ctx.__methods[name];var _chainingBehavior=chainableBehavior.chainingBehavior;chainableBehavior.chainingBehavior = function(){var result=chainingBehavior(_chainingBehavior).call(this);return result === undefined?this:result;};var _method=chainableBehavior.method;chainableBehavior.method = function(){var result=method(_method).apply(this, arguments);return result === undefined?this:result;};};});require.register("chai/lib/chai/utils/test.js", function(exports, module){var flag=require("chai/lib/chai/utils/flag.js");module.exports = function(obj, args){var negate=flag(obj, "negate"), expr=args[0];return negate?!expr:expr;};});require.register("chai/lib/chai/utils/transferFlags.js", function(exports, module){module.exports = function(assertion, object, includeAll){var flags=assertion.__flags || (assertion.__flags = Object.create(null));if(!object.__flags){object.__flags = Object.create(null);}includeAll = arguments.length === 3?includeAll:true;for(var flag in flags) {if(includeAll || flag !== "object" && flag !== "ssfi" && flag != "message"){object.__flags[flag] = flags[flag];}}};});require.register("chai/lib/chai/utils/type.js", function(exports, module){var natives={"[object Arguments]":"arguments", "[object Array]":"array", "[object Date]":"date", "[object Function]":"function", "[object Number]":"number", "[object RegExp]":"regexp", "[object String]":"string"};module.exports = function(obj){var str=Object.prototype.toString.call(obj);if(natives[str])return natives[str];if(obj === null)return "null";if(obj === undefined)return "undefined";if(obj === Object(obj))return "object";return typeof obj;};});if(true){module.exports = require("chai");}else if(typeof define == "function" && define.amd){define("chai", [], function(){return require("chai");});}else {(this || window).chai = require("chai");}})();

/***/ }
/******/ ]);