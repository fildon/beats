(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/@babel/runtime/helpers/arrayWithHoles.js
  var require_arrayWithHoles = __commonJS({
    "node_modules/@babel/runtime/helpers/arrayWithHoles.js"(exports, module) {
      function _arrayWithHoles(r) {
        if (Array.isArray(r)) return r;
      }
      module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/iterableToArrayLimit.js
  var require_iterableToArrayLimit = __commonJS({
    "node_modules/@babel/runtime/helpers/iterableToArrayLimit.js"(exports, module) {
      function _iterableToArrayLimit(r, l) {
        var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
        if (null != t) {
          var e, n, i, u, a = [], f = true, o = false;
          try {
            if (i = (t = t.call(r)).next, 0 === l) {
              if (Object(t) !== t) return;
              f = false;
            } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
          } catch (r2) {
            o = true, n = r2;
          } finally {
            try {
              if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally {
              if (o) throw n;
            }
          }
          return a;
        }
      }
      module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/arrayLikeToArray.js
  var require_arrayLikeToArray = __commonJS({
    "node_modules/@babel/runtime/helpers/arrayLikeToArray.js"(exports, module) {
      function _arrayLikeToArray(r, a) {
        (null == a || a > r.length) && (a = r.length);
        for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
        return n;
      }
      module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js
  var require_unsupportedIterableToArray = __commonJS({
    "node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js"(exports, module) {
      var arrayLikeToArray = require_arrayLikeToArray();
      function _unsupportedIterableToArray(r, a) {
        if (r) {
          if ("string" == typeof r) return arrayLikeToArray(r, a);
          var t = {}.toString.call(r).slice(8, -1);
          return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? arrayLikeToArray(r, a) : void 0;
        }
      }
      module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/nonIterableRest.js
  var require_nonIterableRest = __commonJS({
    "node_modules/@babel/runtime/helpers/nonIterableRest.js"(exports, module) {
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/slicedToArray.js
  var require_slicedToArray = __commonJS({
    "node_modules/@babel/runtime/helpers/slicedToArray.js"(exports, module) {
      var arrayWithHoles = require_arrayWithHoles();
      var iterableToArrayLimit = require_iterableToArrayLimit();
      var unsupportedIterableToArray = require_unsupportedIterableToArray();
      var nonIterableRest = require_nonIterableRest();
      function _slicedToArray(r, e) {
        return arrayWithHoles(r) || iterableToArrayLimit(r, e) || unsupportedIterableToArray(r, e) || nonIterableRest();
      }
      module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/classCallCheck.js
  var require_classCallCheck = __commonJS({
    "node_modules/@babel/runtime/helpers/classCallCheck.js"(exports, module) {
      function _classCallCheck(a, n) {
        if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
      }
      module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/typeof.js
  var require_typeof = __commonJS({
    "node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
      function _typeof(o) {
        "@babel/helpers - typeof";
        return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
          return typeof o2;
        } : function(o2) {
          return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
        }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
      }
      module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/toPrimitive.js
  var require_toPrimitive = __commonJS({
    "node_modules/@babel/runtime/helpers/toPrimitive.js"(exports, module) {
      var _typeof = require_typeof()["default"];
      function toPrimitive(t, r) {
        if ("object" != _typeof(t) || !t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
          var i = e.call(t, r || "default");
          if ("object" != _typeof(i)) return i;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r ? String : Number)(t);
      }
      module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/toPropertyKey.js
  var require_toPropertyKey = __commonJS({
    "node_modules/@babel/runtime/helpers/toPropertyKey.js"(exports, module) {
      var _typeof = require_typeof()["default"];
      var toPrimitive = require_toPrimitive();
      function toPropertyKey(t) {
        var i = toPrimitive(t, "string");
        return "symbol" == _typeof(i) ? i : i + "";
      }
      module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/createClass.js
  var require_createClass = __commonJS({
    "node_modules/@babel/runtime/helpers/createClass.js"(exports, module) {
      var toPropertyKey = require_toPropertyKey();
      function _defineProperties(e, r) {
        for (var t = 0; t < r.length; t++) {
          var o = r[t];
          o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
        }
      }
      function _createClass(e, r, t) {
        return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
          writable: false
        }), e;
      }
      module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/automation-events/build/es5/bundle.js
  var require_bundle = __commonJS({
    "node_modules/automation-events/build/es5/bundle.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require_slicedToArray(), require_classCallCheck(), require_createClass()) : typeof define === "function" && define.amd ? define(["exports", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.automationEvents = {}, global._slicedToArray, global._classCallCheck, global._createClass));
      })(exports, function(exports2, _slicedToArray, _classCallCheck, _createClass) {
        "use strict";
        var createExtendedExponentialRampToValueAutomationEvent = function createExtendedExponentialRampToValueAutomationEvent2(value, endTime, insertTime) {
          return {
            endTime,
            insertTime,
            type: "exponentialRampToValue",
            value
          };
        };
        var createExtendedLinearRampToValueAutomationEvent = function createExtendedLinearRampToValueAutomationEvent2(value, endTime, insertTime) {
          return {
            endTime,
            insertTime,
            type: "linearRampToValue",
            value
          };
        };
        var createSetValueAutomationEvent2 = function createSetValueAutomationEvent3(value, startTime) {
          return {
            startTime,
            type: "setValue",
            value
          };
        };
        var createSetValueCurveAutomationEvent2 = function createSetValueCurveAutomationEvent3(values, startTime, duration) {
          return {
            duration,
            startTime,
            type: "setValueCurve",
            values
          };
        };
        var getTargetValueAtTime = function getTargetValueAtTime2(time, valueAtStartTime, _ref) {
          var startTime = _ref.startTime, target = _ref.target, timeConstant = _ref.timeConstant;
          return target + (valueAtStartTime - target) * Math.exp((startTime - time) / timeConstant);
        };
        var isExponentialRampToValueAutomationEvent = function isExponentialRampToValueAutomationEvent2(automationEvent) {
          return automationEvent.type === "exponentialRampToValue";
        };
        var isLinearRampToValueAutomationEvent = function isLinearRampToValueAutomationEvent2(automationEvent) {
          return automationEvent.type === "linearRampToValue";
        };
        var isAnyRampToValueAutomationEvent = function isAnyRampToValueAutomationEvent2(automationEvent) {
          return isExponentialRampToValueAutomationEvent(automationEvent) || isLinearRampToValueAutomationEvent(automationEvent);
        };
        var isSetValueAutomationEvent = function isSetValueAutomationEvent2(automationEvent) {
          return automationEvent.type === "setValue";
        };
        var isSetValueCurveAutomationEvent = function isSetValueCurveAutomationEvent2(automationEvent) {
          return automationEvent.type === "setValueCurve";
        };
        var _getValueOfAutomationEventAtIndexAtTime = function getValueOfAutomationEventAtIndexAtTime(automationEvents, index, time, defaultValue) {
          var automationEvent = automationEvents[index];
          return automationEvent === void 0 ? defaultValue : isAnyRampToValueAutomationEvent(automationEvent) || isSetValueAutomationEvent(automationEvent) ? automationEvent.value : isSetValueCurveAutomationEvent(automationEvent) ? automationEvent.values[automationEvent.values.length - 1] : getTargetValueAtTime(time, _getValueOfAutomationEventAtIndexAtTime(automationEvents, index - 1, automationEvent.startTime, defaultValue), automationEvent);
        };
        var getEndTimeAndValueOfPreviousAutomationEvent = function getEndTimeAndValueOfPreviousAutomationEvent2(automationEvents, index, currentAutomationEvent, nextAutomationEvent, defaultValue) {
          return currentAutomationEvent === void 0 ? [nextAutomationEvent.insertTime, defaultValue] : isAnyRampToValueAutomationEvent(currentAutomationEvent) ? [currentAutomationEvent.endTime, currentAutomationEvent.value] : isSetValueAutomationEvent(currentAutomationEvent) ? [currentAutomationEvent.startTime, currentAutomationEvent.value] : isSetValueCurveAutomationEvent(currentAutomationEvent) ? [currentAutomationEvent.startTime + currentAutomationEvent.duration, currentAutomationEvent.values[currentAutomationEvent.values.length - 1]] : [currentAutomationEvent.startTime, _getValueOfAutomationEventAtIndexAtTime(automationEvents, index - 1, currentAutomationEvent.startTime, defaultValue)];
        };
        var isCancelAndHoldAutomationEvent = function isCancelAndHoldAutomationEvent2(automationEvent) {
          return automationEvent.type === "cancelAndHold";
        };
        var isCancelScheduledValuesAutomationEvent = function isCancelScheduledValuesAutomationEvent2(automationEvent) {
          return automationEvent.type === "cancelScheduledValues";
        };
        var getEventTime = function getEventTime2(automationEvent) {
          if (isCancelAndHoldAutomationEvent(automationEvent) || isCancelScheduledValuesAutomationEvent(automationEvent)) {
            return automationEvent.cancelTime;
          }
          if (isExponentialRampToValueAutomationEvent(automationEvent) || isLinearRampToValueAutomationEvent(automationEvent)) {
            return automationEvent.endTime;
          }
          return automationEvent.startTime;
        };
        var getExponentialRampValueAtTime = function getExponentialRampValueAtTime2(time, startTime, valueAtStartTime, _ref) {
          var endTime = _ref.endTime, value = _ref.value;
          if (valueAtStartTime === value) {
            return value;
          }
          if (0 < valueAtStartTime && 0 < value || valueAtStartTime < 0 && value < 0) {
            return valueAtStartTime * Math.pow(value / valueAtStartTime, (time - startTime) / (endTime - startTime));
          }
          return 0;
        };
        var getLinearRampValueAtTime = function getLinearRampValueAtTime2(time, startTime, valueAtStartTime, _ref) {
          var endTime = _ref.endTime, value = _ref.value;
          return valueAtStartTime + (time - startTime) / (endTime - startTime) * (value - valueAtStartTime);
        };
        var interpolateValue = function interpolateValue2(values, theoreticIndex) {
          var lowerIndex = Math.floor(theoreticIndex);
          var upperIndex = Math.ceil(theoreticIndex);
          if (lowerIndex === upperIndex) {
            return values[lowerIndex];
          }
          return (1 - (theoreticIndex - lowerIndex)) * values[lowerIndex] + (1 - (upperIndex - theoreticIndex)) * values[upperIndex];
        };
        var getValueCurveValueAtTime = function getValueCurveValueAtTime2(time, _ref) {
          var duration = _ref.duration, startTime = _ref.startTime, values = _ref.values;
          var theoreticIndex = (time - startTime) / duration * (values.length - 1);
          return interpolateValue(values, theoreticIndex);
        };
        var isSetTargetAutomationEvent = function isSetTargetAutomationEvent2(automationEvent) {
          return automationEvent.type === "setTarget";
        };
        var AutomationEventList2 = /* @__PURE__ */ function() {
          function AutomationEventList3(defaultValue) {
            _classCallCheck(this, AutomationEventList3);
            this._automationEvents = [];
            this._currenTime = 0;
            this._defaultValue = defaultValue;
          }
          return _createClass(AutomationEventList3, [{
            key: Symbol.iterator,
            value: function value() {
              return this._automationEvents[Symbol.iterator]();
            }
          }, {
            key: "add",
            value: function add(automationEvent) {
              var eventTime = getEventTime(automationEvent);
              if (isCancelAndHoldAutomationEvent(automationEvent) || isCancelScheduledValuesAutomationEvent(automationEvent)) {
                var index = this._automationEvents.findIndex(function(currentAutomationEvent) {
                  if (isCancelScheduledValuesAutomationEvent(automationEvent) && isSetValueCurveAutomationEvent(currentAutomationEvent)) {
                    return currentAutomationEvent.startTime + currentAutomationEvent.duration >= eventTime;
                  }
                  return getEventTime(currentAutomationEvent) >= eventTime;
                });
                var removedAutomationEvent = this._automationEvents[index];
                if (index !== -1) {
                  this._automationEvents = this._automationEvents.slice(0, index);
                }
                if (isCancelAndHoldAutomationEvent(automationEvent)) {
                  var lastAutomationEvent = this._automationEvents[this._automationEvents.length - 1];
                  if (removedAutomationEvent !== void 0 && isAnyRampToValueAutomationEvent(removedAutomationEvent)) {
                    if (lastAutomationEvent !== void 0 && isSetTargetAutomationEvent(lastAutomationEvent)) {
                      throw new Error("The internal list is malformed.");
                    }
                    var startTime = lastAutomationEvent === void 0 ? removedAutomationEvent.insertTime : isSetValueCurveAutomationEvent(lastAutomationEvent) ? lastAutomationEvent.startTime + lastAutomationEvent.duration : getEventTime(lastAutomationEvent);
                    var startValue = lastAutomationEvent === void 0 ? this._defaultValue : isSetValueCurveAutomationEvent(lastAutomationEvent) ? lastAutomationEvent.values[lastAutomationEvent.values.length - 1] : lastAutomationEvent.value;
                    var value = isExponentialRampToValueAutomationEvent(removedAutomationEvent) ? getExponentialRampValueAtTime(eventTime, startTime, startValue, removedAutomationEvent) : getLinearRampValueAtTime(eventTime, startTime, startValue, removedAutomationEvent);
                    var truncatedAutomationEvent = isExponentialRampToValueAutomationEvent(removedAutomationEvent) ? createExtendedExponentialRampToValueAutomationEvent(value, eventTime, this._currenTime) : createExtendedLinearRampToValueAutomationEvent(value, eventTime, this._currenTime);
                    this._automationEvents.push(truncatedAutomationEvent);
                  }
                  if (lastAutomationEvent !== void 0 && isSetTargetAutomationEvent(lastAutomationEvent)) {
                    this._automationEvents.push(createSetValueAutomationEvent2(this.getValue(eventTime), eventTime));
                  }
                  if (lastAutomationEvent !== void 0 && isSetValueCurveAutomationEvent(lastAutomationEvent) && lastAutomationEvent.startTime + lastAutomationEvent.duration > eventTime) {
                    var duration = eventTime - lastAutomationEvent.startTime;
                    var ratio = (lastAutomationEvent.values.length - 1) / lastAutomationEvent.duration;
                    var length = Math.max(2, 1 + Math.ceil(duration * ratio));
                    var fraction = duration / (length - 1) * ratio;
                    var values = lastAutomationEvent.values.slice(0, length);
                    if (fraction < 1) {
                      for (var i = 1; i < length; i += 1) {
                        var factor = fraction * i % 1;
                        values[i] = lastAutomationEvent.values[i - 1] * (1 - factor) + lastAutomationEvent.values[i] * factor;
                      }
                    }
                    this._automationEvents[this._automationEvents.length - 1] = createSetValueCurveAutomationEvent2(values, lastAutomationEvent.startTime, duration);
                  }
                }
              } else {
                var _index = this._automationEvents.findIndex(function(currentAutomationEvent) {
                  return getEventTime(currentAutomationEvent) > eventTime;
                });
                var previousAutomationEvent = _index === -1 ? this._automationEvents[this._automationEvents.length - 1] : this._automationEvents[_index - 1];
                if (previousAutomationEvent !== void 0 && isSetValueCurveAutomationEvent(previousAutomationEvent) && getEventTime(previousAutomationEvent) + previousAutomationEvent.duration > eventTime) {
                  return false;
                }
                var persistentAutomationEvent = isExponentialRampToValueAutomationEvent(automationEvent) ? createExtendedExponentialRampToValueAutomationEvent(automationEvent.value, automationEvent.endTime, this._currenTime) : isLinearRampToValueAutomationEvent(automationEvent) ? createExtendedLinearRampToValueAutomationEvent(automationEvent.value, eventTime, this._currenTime) : automationEvent;
                if (_index === -1) {
                  this._automationEvents.push(persistentAutomationEvent);
                } else {
                  if (isSetValueCurveAutomationEvent(automationEvent) && eventTime + automationEvent.duration > getEventTime(this._automationEvents[_index])) {
                    return false;
                  }
                  this._automationEvents.splice(_index, 0, persistentAutomationEvent);
                }
              }
              return true;
            }
          }, {
            key: "flush",
            value: function flush(time) {
              var index = this._automationEvents.findIndex(function(currentAutomationEvent) {
                return getEventTime(currentAutomationEvent) > time;
              });
              if (index > 1) {
                var remainingAutomationEvents = this._automationEvents.slice(index - 1);
                var firstRemainingAutomationEvent = remainingAutomationEvents[0];
                if (isSetTargetAutomationEvent(firstRemainingAutomationEvent)) {
                  remainingAutomationEvents.unshift(createSetValueAutomationEvent2(_getValueOfAutomationEventAtIndexAtTime(this._automationEvents, index - 2, firstRemainingAutomationEvent.startTime, this._defaultValue), firstRemainingAutomationEvent.startTime));
                }
                this._automationEvents = remainingAutomationEvents;
              }
            }
          }, {
            key: "getValue",
            value: function getValue(time) {
              if (this._automationEvents.length === 0) {
                return this._defaultValue;
              }
              var indexOfNextEvent = this._automationEvents.findIndex(function(automationEvent) {
                return getEventTime(automationEvent) > time;
              });
              var nextAutomationEvent = this._automationEvents[indexOfNextEvent];
              var indexOfCurrentEvent = (indexOfNextEvent === -1 ? this._automationEvents.length : indexOfNextEvent) - 1;
              var currentAutomationEvent = this._automationEvents[indexOfCurrentEvent];
              if (currentAutomationEvent !== void 0 && isSetTargetAutomationEvent(currentAutomationEvent) && (nextAutomationEvent === void 0 || !isAnyRampToValueAutomationEvent(nextAutomationEvent) || nextAutomationEvent.insertTime > time)) {
                return getTargetValueAtTime(time, _getValueOfAutomationEventAtIndexAtTime(this._automationEvents, indexOfCurrentEvent - 1, currentAutomationEvent.startTime, this._defaultValue), currentAutomationEvent);
              }
              if (currentAutomationEvent !== void 0 && isSetValueAutomationEvent(currentAutomationEvent) && (nextAutomationEvent === void 0 || !isAnyRampToValueAutomationEvent(nextAutomationEvent))) {
                return currentAutomationEvent.value;
              }
              if (currentAutomationEvent !== void 0 && isSetValueCurveAutomationEvent(currentAutomationEvent) && (nextAutomationEvent === void 0 || !isAnyRampToValueAutomationEvent(nextAutomationEvent) || currentAutomationEvent.startTime + currentAutomationEvent.duration > time)) {
                if (time < currentAutomationEvent.startTime + currentAutomationEvent.duration) {
                  return getValueCurveValueAtTime(time, currentAutomationEvent);
                }
                return currentAutomationEvent.values[currentAutomationEvent.values.length - 1];
              }
              if (currentAutomationEvent !== void 0 && isAnyRampToValueAutomationEvent(currentAutomationEvent) && (nextAutomationEvent === void 0 || !isAnyRampToValueAutomationEvent(nextAutomationEvent))) {
                return currentAutomationEvent.value;
              }
              if (nextAutomationEvent !== void 0 && isExponentialRampToValueAutomationEvent(nextAutomationEvent)) {
                var _getEndTimeAndValueOf = getEndTimeAndValueOfPreviousAutomationEvent(this._automationEvents, indexOfCurrentEvent, currentAutomationEvent, nextAutomationEvent, this._defaultValue), _getEndTimeAndValueOf2 = _slicedToArray(_getEndTimeAndValueOf, 2), startTime = _getEndTimeAndValueOf2[0], value = _getEndTimeAndValueOf2[1];
                return getExponentialRampValueAtTime(time, startTime, value, nextAutomationEvent);
              }
              if (nextAutomationEvent !== void 0 && isLinearRampToValueAutomationEvent(nextAutomationEvent)) {
                var _getEndTimeAndValueOf3 = getEndTimeAndValueOfPreviousAutomationEvent(this._automationEvents, indexOfCurrentEvent, currentAutomationEvent, nextAutomationEvent, this._defaultValue), _getEndTimeAndValueOf4 = _slicedToArray(_getEndTimeAndValueOf3, 2), _startTime = _getEndTimeAndValueOf4[0], _value = _getEndTimeAndValueOf4[1];
                return getLinearRampValueAtTime(time, _startTime, _value, nextAutomationEvent);
              }
              return this._defaultValue;
            }
          }]);
        }();
        var createCancelAndHoldAutomationEvent2 = function createCancelAndHoldAutomationEvent3(cancelTime) {
          return {
            cancelTime,
            type: "cancelAndHold"
          };
        };
        var createCancelScheduledValuesAutomationEvent2 = function createCancelScheduledValuesAutomationEvent3(cancelTime) {
          return {
            cancelTime,
            type: "cancelScheduledValues"
          };
        };
        var createExponentialRampToValueAutomationEvent2 = function createExponentialRampToValueAutomationEvent3(value, endTime) {
          return {
            endTime,
            type: "exponentialRampToValue",
            value
          };
        };
        var createLinearRampToValueAutomationEvent2 = function createLinearRampToValueAutomationEvent3(value, endTime) {
          return {
            endTime,
            type: "linearRampToValue",
            value
          };
        };
        var createSetTargetAutomationEvent2 = function createSetTargetAutomationEvent3(target, startTime, timeConstant) {
          return {
            startTime,
            target,
            timeConstant,
            type: "setTarget"
          };
        };
        exports2.AutomationEventList = AutomationEventList2;
        exports2.createCancelAndHoldAutomationEvent = createCancelAndHoldAutomationEvent2;
        exports2.createCancelScheduledValuesAutomationEvent = createCancelScheduledValuesAutomationEvent2;
        exports2.createExponentialRampToValueAutomationEvent = createExponentialRampToValueAutomationEvent2;
        exports2.createLinearRampToValueAutomationEvent = createLinearRampToValueAutomationEvent2;
        exports2.createSetTargetAutomationEvent = createSetTargetAutomationEvent2;
        exports2.createSetValueAutomationEvent = createSetValueAutomationEvent2;
        exports2.createSetValueCurveAutomationEvent = createSetValueCurveAutomationEvent2;
      });
    }
  });

  // node_modules/tone/build/esm/version.js
  var version = "15.0.4";

  // node_modules/standardized-audio-context/build/es2019/module.js
  var import_automation_events2 = __toESM(require_bundle());

  // node_modules/standardized-audio-context/build/es2019/factories/abort-error.js
  var createAbortError = () => new DOMException("", "AbortError");

  // node_modules/standardized-audio-context/build/es2019/factories/add-active-input-connection-to-audio-node.js
  var createAddActiveInputConnectionToAudioNode = (insertElementInSet2) => {
    return (activeInputs, source, [output, input, eventListener], ignoreDuplicates) => {
      insertElementInSet2(activeInputs[input], [source, output, eventListener], (activeInputConnection) => activeInputConnection[0] === source && activeInputConnection[1] === output, ignoreDuplicates);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/add-audio-node-connections.js
  var createAddAudioNodeConnections = (audioNodeConnectionsStore) => {
    return (audioNode, audioNodeRenderer, nativeAudioNode) => {
      const activeInputs = [];
      for (let i = 0; i < nativeAudioNode.numberOfInputs; i += 1) {
        activeInputs.push(/* @__PURE__ */ new Set());
      }
      audioNodeConnectionsStore.set(audioNode, {
        activeInputs,
        outputs: /* @__PURE__ */ new Set(),
        passiveInputs: /* @__PURE__ */ new WeakMap(),
        renderer: audioNodeRenderer
      });
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/add-audio-param-connections.js
  var createAddAudioParamConnections = (audioParamConnectionsStore) => {
    return (audioParam, audioParamRenderer) => {
      audioParamConnectionsStore.set(audioParam, { activeInputs: /* @__PURE__ */ new Set(), passiveInputs: /* @__PURE__ */ new WeakMap(), renderer: audioParamRenderer });
    };
  };

  // node_modules/standardized-audio-context/build/es2019/globals.js
  var ACTIVE_AUDIO_NODE_STORE = /* @__PURE__ */ new WeakSet();
  var AUDIO_NODE_CONNECTIONS_STORE = /* @__PURE__ */ new WeakMap();
  var AUDIO_NODE_STORE = /* @__PURE__ */ new WeakMap();
  var AUDIO_PARAM_CONNECTIONS_STORE = /* @__PURE__ */ new WeakMap();
  var AUDIO_PARAM_STORE = /* @__PURE__ */ new WeakMap();
  var CONTEXT_STORE = /* @__PURE__ */ new WeakMap();
  var EVENT_LISTENERS = /* @__PURE__ */ new WeakMap();
  var CYCLE_COUNTERS = /* @__PURE__ */ new WeakMap();
  var NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS = /* @__PURE__ */ new WeakMap();
  var NODE_TO_PROCESSOR_MAPS = /* @__PURE__ */ new WeakMap();

  // node_modules/standardized-audio-context/build/es2019/helpers/is-constructible.js
  var handler = {
    construct() {
      return handler;
    }
  };
  var isConstructible = (constructible) => {
    try {
      const proxy = new Proxy(constructible, handler);
      new proxy();
    } catch {
      return false;
    }
    return true;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/split-import-statements.js
  var IMPORT_STATEMENT_REGEX = /^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/;
  var splitImportStatements = (source, url) => {
    const importStatements = [];
    let sourceWithoutImportStatements = source.replace(/^[\s]+/, "");
    let result = sourceWithoutImportStatements.match(IMPORT_STATEMENT_REGEX);
    while (result !== null) {
      const unresolvedUrl = result[1].slice(1, -1);
      const importStatementWithResolvedUrl = result[0].replace(/([\s]+)?;?$/, "").replace(unresolvedUrl, new URL(unresolvedUrl, url).toString());
      importStatements.push(importStatementWithResolvedUrl);
      sourceWithoutImportStatements = sourceWithoutImportStatements.slice(result[0].length).replace(/^[\s]+/, "");
      result = sourceWithoutImportStatements.match(IMPORT_STATEMENT_REGEX);
    }
    return [importStatements.join(";"), sourceWithoutImportStatements];
  };

  // node_modules/standardized-audio-context/build/es2019/factories/add-audio-worklet-module.js
  var verifyParameterDescriptors = (parameterDescriptors) => {
    if (parameterDescriptors !== void 0 && !Array.isArray(parameterDescriptors)) {
      throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.");
    }
  };
  var verifyProcessorCtor = (processorCtor) => {
    if (!isConstructible(processorCtor)) {
      throw new TypeError("The given value for processorCtor should be a constructor.");
    }
    if (processorCtor.prototype === null || typeof processorCtor.prototype !== "object") {
      throw new TypeError("The given value for processorCtor should have a prototype.");
    }
  };
  var createAddAudioWorkletModule = (cacheTestResult2, createNotSupportedError2, evaluateSource, exposeCurrentFrameAndCurrentTime2, fetchSource, getNativeContext2, getOrCreateBackupOfflineAudioContext2, isNativeOfflineAudioContext2, nativeAudioWorkletNodeConstructor2, ongoingRequests, resolvedRequests, testAudioWorkletProcessorPostMessageSupport, window3) => {
    let index = 0;
    return (context2, moduleURL, options = { credentials: "omit" }) => {
      const resolvedRequestsOfContext = resolvedRequests.get(context2);
      if (resolvedRequestsOfContext !== void 0 && resolvedRequestsOfContext.has(moduleURL)) {
        return Promise.resolve();
      }
      const ongoingRequestsOfContext = ongoingRequests.get(context2);
      if (ongoingRequestsOfContext !== void 0) {
        const promiseOfOngoingRequest = ongoingRequestsOfContext.get(moduleURL);
        if (promiseOfOngoingRequest !== void 0) {
          return promiseOfOngoingRequest;
        }
      }
      const nativeContext = getNativeContext2(context2);
      const promise = nativeContext.audioWorklet === void 0 ? fetchSource(moduleURL).then(([source, absoluteUrl]) => {
        const [importStatements, sourceWithoutImportStatements] = splitImportStatements(source, absoluteUrl);
        const wrappedSource = `${importStatements};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${sourceWithoutImportStatements}
})})(window,'_AWGS')`;
        return evaluateSource(wrappedSource);
      }).then(() => {
        const evaluateAudioWorkletGlobalScope = window3._AWGS.pop();
        if (evaluateAudioWorkletGlobalScope === void 0) {
          throw new SyntaxError();
        }
        exposeCurrentFrameAndCurrentTime2(nativeContext.currentTime, nativeContext.sampleRate, () => evaluateAudioWorkletGlobalScope(class AudioWorkletProcessor {
        }, void 0, (name, processorCtor) => {
          if (name.trim() === "") {
            throw createNotSupportedError2();
          }
          const nodeNameToProcessorConstructorMap = NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS.get(nativeContext);
          if (nodeNameToProcessorConstructorMap !== void 0) {
            if (nodeNameToProcessorConstructorMap.has(name)) {
              throw createNotSupportedError2();
            }
            verifyProcessorCtor(processorCtor);
            verifyParameterDescriptors(processorCtor.parameterDescriptors);
            nodeNameToProcessorConstructorMap.set(name, processorCtor);
          } else {
            verifyProcessorCtor(processorCtor);
            verifyParameterDescriptors(processorCtor.parameterDescriptors);
            NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS.set(nativeContext, /* @__PURE__ */ new Map([[name, processorCtor]]));
          }
        }, nativeContext.sampleRate, void 0, void 0));
      }) : Promise.all([
        fetchSource(moduleURL),
        Promise.resolve(cacheTestResult2(testAudioWorkletProcessorPostMessageSupport, testAudioWorkletProcessorPostMessageSupport))
      ]).then(([[source, absoluteUrl], isSupportingPostMessage]) => {
        const currentIndex = index + 1;
        index = currentIndex;
        const [importStatements, sourceWithoutImportStatements] = splitImportStatements(source, absoluteUrl);
        const patchedAudioWorkletProcessor = isSupportingPostMessage ? "AudioWorkletProcessor" : "class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}";
        const memberDefinition = isSupportingPostMessage ? "" : "__c = (a) => a.forEach(e=>this.__b.add(e.buffer));";
        const bufferRegistration = isSupportingPostMessage ? "" : "i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));";
        const wrappedSource = `${importStatements};((AudioWorkletProcessor,registerProcessor)=>{${sourceWithoutImportStatements}
})(${patchedAudioWorkletProcessor},(n,p)=>registerProcessor(n,class extends p{${memberDefinition}process(i,o,p){${bufferRegistration}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${currentIndex}',class extends AudioWorkletProcessor{process(){return !1}})`;
        const blob = new Blob([wrappedSource], { type: "application/javascript; charset=utf-8" });
        const url = URL.createObjectURL(blob);
        return nativeContext.audioWorklet.addModule(url, options).then(() => {
          if (isNativeOfflineAudioContext2(nativeContext)) {
            return nativeContext;
          }
          const backupOfflineAudioContext = getOrCreateBackupOfflineAudioContext2(nativeContext);
          return backupOfflineAudioContext.audioWorklet.addModule(url, options).then(() => backupOfflineAudioContext);
        }).then((nativeContextOrBackupOfflineAudioContext) => {
          if (nativeAudioWorkletNodeConstructor2 === null) {
            throw new SyntaxError();
          }
          try {
            new nativeAudioWorkletNodeConstructor2(nativeContextOrBackupOfflineAudioContext, `__sac${currentIndex}`);
          } catch {
            throw new SyntaxError();
          }
        }).finally(() => URL.revokeObjectURL(url));
      });
      if (ongoingRequestsOfContext === void 0) {
        ongoingRequests.set(context2, /* @__PURE__ */ new Map([[moduleURL, promise]]));
      } else {
        ongoingRequestsOfContext.set(moduleURL, promise);
      }
      promise.then(() => {
        const updatedResolvedRequestsOfContext = resolvedRequests.get(context2);
        if (updatedResolvedRequestsOfContext === void 0) {
          resolvedRequests.set(context2, /* @__PURE__ */ new Set([moduleURL]));
        } else {
          updatedResolvedRequestsOfContext.add(moduleURL);
        }
      }).finally(() => {
        const updatedOngoingRequestsOfContext = ongoingRequests.get(context2);
        if (updatedOngoingRequestsOfContext !== void 0) {
          updatedOngoingRequestsOfContext.delete(moduleURL);
        }
      });
      return promise;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/get-value-for-key.js
  var getValueForKey = (map, key) => {
    const value = map.get(key);
    if (value === void 0) {
      throw new Error("A value with the given key could not be found.");
    }
    return value;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/pick-element-from-set.js
  var pickElementFromSet = (set, predicate) => {
    const matchingElements = Array.from(set).filter(predicate);
    if (matchingElements.length > 1) {
      throw Error("More than one element was found.");
    }
    if (matchingElements.length === 0) {
      throw Error("No element was found.");
    }
    const [matchingElement] = matchingElements;
    set.delete(matchingElement);
    return matchingElement;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/delete-passive-input-connection-to-audio-node.js
  var deletePassiveInputConnectionToAudioNode = (passiveInputs, source, output, input) => {
    const passiveInputConnections = getValueForKey(passiveInputs, source);
    const matchingConnection = pickElementFromSet(passiveInputConnections, (passiveInputConnection) => passiveInputConnection[0] === output && passiveInputConnection[1] === input);
    if (passiveInputConnections.size === 0) {
      passiveInputs.delete(source);
    }
    return matchingConnection;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/get-event-listeners-of-audio-node.js
  var getEventListenersOfAudioNode = (audioNode) => {
    return getValueForKey(EVENT_LISTENERS, audioNode);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/set-internal-state-to-active.js
  var setInternalStateToActive = (audioNode) => {
    if (ACTIVE_AUDIO_NODE_STORE.has(audioNode)) {
      throw new Error("The AudioNode is already stored.");
    }
    ACTIVE_AUDIO_NODE_STORE.add(audioNode);
    getEventListenersOfAudioNode(audioNode).forEach((eventListener) => eventListener(true));
  };

  // node_modules/standardized-audio-context/build/es2019/guards/audio-worklet-node.js
  var isAudioWorkletNode = (audioNode) => {
    return "port" in audioNode;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/set-internal-state-to-passive.js
  var setInternalStateToPassive = (audioNode) => {
    if (!ACTIVE_AUDIO_NODE_STORE.has(audioNode)) {
      throw new Error("The AudioNode is not stored.");
    }
    ACTIVE_AUDIO_NODE_STORE.delete(audioNode);
    getEventListenersOfAudioNode(audioNode).forEach((eventListener) => eventListener(false));
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/set-internal-state-to-passive-when-necessary.js
  var setInternalStateToPassiveWhenNecessary = (audioNode, activeInputs) => {
    if (!isAudioWorkletNode(audioNode) && activeInputs.every((connections) => connections.size === 0)) {
      setInternalStateToPassive(audioNode);
    }
  };

  // node_modules/standardized-audio-context/build/es2019/factories/add-connection-to-audio-node.js
  var createAddConnectionToAudioNode = (addActiveInputConnectionToAudioNode2, addPassiveInputConnectionToAudioNode2, connectNativeAudioNodeToNativeAudioNode2, deleteActiveInputConnectionToAudioNode2, disconnectNativeAudioNodeFromNativeAudioNode2, getAudioNodeConnections2, getAudioNodeTailTime2, getEventListenersOfAudioNode2, getNativeAudioNode2, insertElementInSet2, isActiveAudioNode2, isPartOfACycle2, isPassiveAudioNode2) => {
    const tailTimeTimeoutIds = /* @__PURE__ */ new WeakMap();
    return (source, destination, output, input, isOffline) => {
      const { activeInputs, passiveInputs } = getAudioNodeConnections2(destination);
      const { outputs } = getAudioNodeConnections2(source);
      const eventListeners = getEventListenersOfAudioNode2(source);
      const eventListener = (isActive) => {
        const nativeDestinationAudioNode = getNativeAudioNode2(destination);
        const nativeSourceAudioNode = getNativeAudioNode2(source);
        if (isActive) {
          const partialConnection = deletePassiveInputConnectionToAudioNode(passiveInputs, source, output, input);
          addActiveInputConnectionToAudioNode2(activeInputs, source, partialConnection, false);
          if (!isOffline && !isPartOfACycle2(source)) {
            connectNativeAudioNodeToNativeAudioNode2(nativeSourceAudioNode, nativeDestinationAudioNode, output, input);
          }
          if (isPassiveAudioNode2(destination)) {
            setInternalStateToActive(destination);
          }
        } else {
          const partialConnection = deleteActiveInputConnectionToAudioNode2(activeInputs, source, output, input);
          addPassiveInputConnectionToAudioNode2(passiveInputs, input, partialConnection, false);
          if (!isOffline && !isPartOfACycle2(source)) {
            disconnectNativeAudioNodeFromNativeAudioNode2(nativeSourceAudioNode, nativeDestinationAudioNode, output, input);
          }
          const tailTime = getAudioNodeTailTime2(destination);
          if (tailTime === 0) {
            if (isActiveAudioNode2(destination)) {
              setInternalStateToPassiveWhenNecessary(destination, activeInputs);
            }
          } else {
            const tailTimeTimeoutId = tailTimeTimeoutIds.get(destination);
            if (tailTimeTimeoutId !== void 0) {
              clearTimeout(tailTimeTimeoutId);
            }
            tailTimeTimeoutIds.set(destination, setTimeout(() => {
              if (isActiveAudioNode2(destination)) {
                setInternalStateToPassiveWhenNecessary(destination, activeInputs);
              }
            }, tailTime * 1e3));
          }
        }
      };
      if (insertElementInSet2(outputs, [destination, output, input], (outputConnection) => outputConnection[0] === destination && outputConnection[1] === output && outputConnection[2] === input, true)) {
        eventListeners.add(eventListener);
        if (isActiveAudioNode2(source)) {
          addActiveInputConnectionToAudioNode2(activeInputs, source, [output, input, eventListener], true);
        } else {
          addPassiveInputConnectionToAudioNode2(passiveInputs, input, [source, output, eventListener], true);
        }
        return true;
      }
      return false;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/add-passive-input-connection-to-audio-node.js
  var createAddPassiveInputConnectionToAudioNode = (insertElementInSet2) => {
    return (passiveInputs, input, [source, output, eventListener], ignoreDuplicates) => {
      const passiveInputConnections = passiveInputs.get(source);
      if (passiveInputConnections === void 0) {
        passiveInputs.set(source, /* @__PURE__ */ new Set([[output, input, eventListener]]));
      } else {
        insertElementInSet2(passiveInputConnections, [output, input, eventListener], (passiveInputConnection) => passiveInputConnection[0] === output && passiveInputConnection[1] === input, ignoreDuplicates);
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/add-silent-connection.js
  var createAddSilentConnection = (createNativeGainNode2) => {
    return (nativeContext, nativeAudioScheduledSourceNode) => {
      const nativeGainNode = createNativeGainNode2(nativeContext, {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        gain: 0
      });
      nativeAudioScheduledSourceNode.connect(nativeGainNode).connect(nativeContext.destination);
      const disconnect2 = () => {
        nativeAudioScheduledSourceNode.removeEventListener("ended", disconnect2);
        nativeAudioScheduledSourceNode.disconnect(nativeGainNode);
        nativeGainNode.disconnect();
      };
      nativeAudioScheduledSourceNode.addEventListener("ended", disconnect2);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/add-unrendered-audio-worklet-node.js
  var createAddUnrenderedAudioWorkletNode = (getUnrenderedAudioWorkletNodes2) => {
    return (nativeContext, audioWorkletNode) => {
      getUnrenderedAudioWorkletNodes2(nativeContext).add(audioWorkletNode);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/analyser-node-constructor.js
  var DEFAULT_OPTIONS = {
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    fftSize: 2048,
    maxDecibels: -30,
    minDecibels: -100,
    smoothingTimeConstant: 0.8
  };
  var createAnalyserNodeConstructor = (audionNodeConstructor, createAnalyserNodeRenderer2, createIndexSizeError2, createNativeAnalyserNode2, getNativeContext2, isNativeOfflineAudioContext2) => {
    return class AnalyserNode extends audionNodeConstructor {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
        const nativeAnalyserNode = createNativeAnalyserNode2(nativeContext, mergedOptions);
        const analyserNodeRenderer = isNativeOfflineAudioContext2(nativeContext) ? createAnalyserNodeRenderer2() : null;
        super(context2, false, nativeAnalyserNode, analyserNodeRenderer);
        this._nativeAnalyserNode = nativeAnalyserNode;
      }
      get fftSize() {
        return this._nativeAnalyserNode.fftSize;
      }
      set fftSize(value) {
        this._nativeAnalyserNode.fftSize = value;
      }
      get frequencyBinCount() {
        return this._nativeAnalyserNode.frequencyBinCount;
      }
      get maxDecibels() {
        return this._nativeAnalyserNode.maxDecibels;
      }
      set maxDecibels(value) {
        const maxDecibels = this._nativeAnalyserNode.maxDecibels;
        this._nativeAnalyserNode.maxDecibels = value;
        if (!(value > this._nativeAnalyserNode.minDecibels)) {
          this._nativeAnalyserNode.maxDecibels = maxDecibels;
          throw createIndexSizeError2();
        }
      }
      get minDecibels() {
        return this._nativeAnalyserNode.minDecibels;
      }
      set minDecibels(value) {
        const minDecibels = this._nativeAnalyserNode.minDecibels;
        this._nativeAnalyserNode.minDecibels = value;
        if (!(this._nativeAnalyserNode.maxDecibels > value)) {
          this._nativeAnalyserNode.minDecibels = minDecibels;
          throw createIndexSizeError2();
        }
      }
      get smoothingTimeConstant() {
        return this._nativeAnalyserNode.smoothingTimeConstant;
      }
      set smoothingTimeConstant(value) {
        this._nativeAnalyserNode.smoothingTimeConstant = value;
      }
      getByteFrequencyData(array) {
        this._nativeAnalyserNode.getByteFrequencyData(array);
      }
      getByteTimeDomainData(array) {
        this._nativeAnalyserNode.getByteTimeDomainData(array);
      }
      getFloatFrequencyData(array) {
        this._nativeAnalyserNode.getFloatFrequencyData(array);
      }
      getFloatTimeDomainData(array) {
        this._nativeAnalyserNode.getFloatTimeDomainData(array);
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/is-owned-by-context.js
  var isOwnedByContext = (nativeAudioNode, nativeContext) => {
    return nativeAudioNode.context === nativeContext;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/analyser-node-renderer-factory.js
  var createAnalyserNodeRendererFactory = (createNativeAnalyserNode2, getNativeAudioNode2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeAnalyserNodes = /* @__PURE__ */ new WeakMap();
      const createAnalyserNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeAnalyserNode = getNativeAudioNode2(proxy);
        const nativeAnalyserNodeIsOwnedByContext = isOwnedByContext(nativeAnalyserNode, nativeOfflineAudioContext);
        if (!nativeAnalyserNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeAnalyserNode.channelCount,
            channelCountMode: nativeAnalyserNode.channelCountMode,
            channelInterpretation: nativeAnalyserNode.channelInterpretation,
            fftSize: nativeAnalyserNode.fftSize,
            maxDecibels: nativeAnalyserNode.maxDecibels,
            minDecibels: nativeAnalyserNode.minDecibels,
            smoothingTimeConstant: nativeAnalyserNode.smoothingTimeConstant
          };
          nativeAnalyserNode = createNativeAnalyserNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeAnalyserNodes.set(nativeOfflineAudioContext, nativeAnalyserNode);
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeAnalyserNode);
        return nativeAnalyserNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeAnalyserNode = renderedNativeAnalyserNodes.get(nativeOfflineAudioContext);
          if (renderedNativeAnalyserNode !== void 0) {
            return Promise.resolve(renderedNativeAnalyserNode);
          }
          return createAnalyserNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-audio-buffer-copy-channel-methods-out-of-bounds-support.js
  var testAudioBufferCopyChannelMethodsOutOfBoundsSupport = (nativeAudioBuffer) => {
    try {
      nativeAudioBuffer.copyToChannel(new Float32Array(1), 0, -1);
    } catch {
      return false;
    }
    return true;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/index-size-error.js
  var createIndexSizeError = () => new DOMException("", "IndexSizeError");

  // node_modules/standardized-audio-context/build/es2019/helpers/wrap-audio-buffer-get-channel-data-method.js
  var wrapAudioBufferGetChannelDataMethod = (audioBuffer) => {
    audioBuffer.getChannelData = /* @__PURE__ */ ((getChannelData) => {
      return (channel) => {
        try {
          return getChannelData.call(audioBuffer, channel);
        } catch (err) {
          if (err.code === 12) {
            throw createIndexSizeError();
          }
          throw err;
        }
      };
    })(audioBuffer.getChannelData);
  };

  // node_modules/standardized-audio-context/build/es2019/factories/audio-buffer-constructor.js
  var DEFAULT_OPTIONS2 = {
    numberOfChannels: 1
  };
  var createAudioBufferConstructor = (audioBufferStore2, cacheTestResult2, createNotSupportedError2, nativeAudioBufferConstructor2, nativeOfflineAudioContextConstructor2, testNativeAudioBufferConstructorSupport, wrapAudioBufferCopyChannelMethods2, wrapAudioBufferCopyChannelMethodsOutOfBounds2) => {
    let nativeOfflineAudioContext = null;
    return class AudioBuffer {
      constructor(options) {
        if (nativeOfflineAudioContextConstructor2 === null) {
          throw new Error("Missing the native OfflineAudioContext constructor.");
        }
        const { length, numberOfChannels, sampleRate } = { ...DEFAULT_OPTIONS2, ...options };
        if (nativeOfflineAudioContext === null) {
          nativeOfflineAudioContext = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
        }
        const audioBuffer = nativeAudioBufferConstructor2 !== null && cacheTestResult2(testNativeAudioBufferConstructorSupport, testNativeAudioBufferConstructorSupport) ? new nativeAudioBufferConstructor2({ length, numberOfChannels, sampleRate }) : nativeOfflineAudioContext.createBuffer(numberOfChannels, length, sampleRate);
        if (audioBuffer.numberOfChannels === 0) {
          throw createNotSupportedError2();
        }
        if (typeof audioBuffer.copyFromChannel !== "function") {
          wrapAudioBufferCopyChannelMethods2(audioBuffer);
          wrapAudioBufferGetChannelDataMethod(audioBuffer);
        } else if (!cacheTestResult2(testAudioBufferCopyChannelMethodsOutOfBoundsSupport, () => testAudioBufferCopyChannelMethodsOutOfBoundsSupport(audioBuffer))) {
          wrapAudioBufferCopyChannelMethodsOutOfBounds2(audioBuffer);
        }
        audioBufferStore2.add(audioBuffer);
        return audioBuffer;
      }
      static [Symbol.hasInstance](instance) {
        return instance !== null && typeof instance === "object" && Object.getPrototypeOf(instance) === AudioBuffer.prototype || audioBufferStore2.has(instance);
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/constants.js
  var MOST_NEGATIVE_SINGLE_FLOAT = -34028234663852886e22;
  var MOST_POSITIVE_SINGLE_FLOAT = -MOST_NEGATIVE_SINGLE_FLOAT;

  // node_modules/standardized-audio-context/build/es2019/helpers/is-active-audio-node.js
  var isActiveAudioNode = (audioNode) => ACTIVE_AUDIO_NODE_STORE.has(audioNode);

  // node_modules/standardized-audio-context/build/es2019/factories/audio-buffer-source-node-constructor.js
  var DEFAULT_OPTIONS3 = {
    buffer: null,
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    // Bug #149: Safari does not yet support the detune AudioParam.
    loop: false,
    loopEnd: 0,
    loopStart: 0,
    playbackRate: 1
  };
  var createAudioBufferSourceNodeConstructor = (audioNodeConstructor2, createAudioBufferSourceNodeRenderer2, createAudioParam2, createInvalidStateError2, createNativeAudioBufferSourceNode2, getNativeContext2, isNativeOfflineAudioContext2, wrapEventListener2) => {
    return class AudioBufferSourceNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const mergedOptions = { ...DEFAULT_OPTIONS3, ...options };
        const nativeAudioBufferSourceNode = createNativeAudioBufferSourceNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const audioBufferSourceNodeRenderer = isOffline ? createAudioBufferSourceNodeRenderer2() : null;
        super(context2, false, nativeAudioBufferSourceNode, audioBufferSourceNodeRenderer);
        this._audioBufferSourceNodeRenderer = audioBufferSourceNodeRenderer;
        this._isBufferNullified = false;
        this._isBufferSet = mergedOptions.buffer !== null;
        this._nativeAudioBufferSourceNode = nativeAudioBufferSourceNode;
        this._onended = null;
        this._playbackRate = createAudioParam2(this, isOffline, nativeAudioBufferSourceNode.playbackRate, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
      }
      get buffer() {
        if (this._isBufferNullified) {
          return null;
        }
        return this._nativeAudioBufferSourceNode.buffer;
      }
      set buffer(value) {
        this._nativeAudioBufferSourceNode.buffer = value;
        if (value !== null) {
          if (this._isBufferSet) {
            throw createInvalidStateError2();
          }
          this._isBufferSet = true;
        }
      }
      get loop() {
        return this._nativeAudioBufferSourceNode.loop;
      }
      set loop(value) {
        this._nativeAudioBufferSourceNode.loop = value;
      }
      get loopEnd() {
        return this._nativeAudioBufferSourceNode.loopEnd;
      }
      set loopEnd(value) {
        this._nativeAudioBufferSourceNode.loopEnd = value;
      }
      get loopStart() {
        return this._nativeAudioBufferSourceNode.loopStart;
      }
      set loopStart(value) {
        this._nativeAudioBufferSourceNode.loopStart = value;
      }
      get onended() {
        return this._onended;
      }
      set onended(value) {
        const wrappedListener = typeof value === "function" ? wrapEventListener2(this, value) : null;
        this._nativeAudioBufferSourceNode.onended = wrappedListener;
        const nativeOnEnded = this._nativeAudioBufferSourceNode.onended;
        this._onended = nativeOnEnded !== null && nativeOnEnded === wrappedListener ? value : nativeOnEnded;
      }
      get playbackRate() {
        return this._playbackRate;
      }
      start(when = 0, offset = 0, duration) {
        this._nativeAudioBufferSourceNode.start(when, offset, duration);
        if (this._audioBufferSourceNodeRenderer !== null) {
          this._audioBufferSourceNodeRenderer.start = duration === void 0 ? [when, offset] : [when, offset, duration];
        }
        if (this.context.state !== "closed") {
          setInternalStateToActive(this);
          const resetInternalStateToPassive = () => {
            this._nativeAudioBufferSourceNode.removeEventListener("ended", resetInternalStateToPassive);
            if (isActiveAudioNode(this)) {
              setInternalStateToPassive(this);
            }
          };
          this._nativeAudioBufferSourceNode.addEventListener("ended", resetInternalStateToPassive);
        }
      }
      stop(when = 0) {
        this._nativeAudioBufferSourceNode.stop(when);
        if (this._audioBufferSourceNodeRenderer !== null) {
          this._audioBufferSourceNodeRenderer.stop = when;
        }
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/audio-buffer-source-node-renderer-factory.js
  var createAudioBufferSourceNodeRendererFactory = (connectAudioParam2, createNativeAudioBufferSourceNode2, getNativeAudioNode2, renderAutomation2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeAudioBufferSourceNodes = /* @__PURE__ */ new WeakMap();
      let start2 = null;
      let stop = null;
      const createAudioBufferSourceNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeAudioBufferSourceNode = getNativeAudioNode2(proxy);
        const nativeAudioBufferSourceNodeIsOwnedByContext = isOwnedByContext(nativeAudioBufferSourceNode, nativeOfflineAudioContext);
        if (!nativeAudioBufferSourceNodeIsOwnedByContext) {
          const options = {
            buffer: nativeAudioBufferSourceNode.buffer,
            channelCount: nativeAudioBufferSourceNode.channelCount,
            channelCountMode: nativeAudioBufferSourceNode.channelCountMode,
            channelInterpretation: nativeAudioBufferSourceNode.channelInterpretation,
            // Bug #149: Safari does not yet support the detune AudioParam.
            loop: nativeAudioBufferSourceNode.loop,
            loopEnd: nativeAudioBufferSourceNode.loopEnd,
            loopStart: nativeAudioBufferSourceNode.loopStart,
            playbackRate: nativeAudioBufferSourceNode.playbackRate.value
          };
          nativeAudioBufferSourceNode = createNativeAudioBufferSourceNode2(nativeOfflineAudioContext, options);
          if (start2 !== null) {
            nativeAudioBufferSourceNode.start(...start2);
          }
          if (stop !== null) {
            nativeAudioBufferSourceNode.stop(stop);
          }
        }
        renderedNativeAudioBufferSourceNodes.set(nativeOfflineAudioContext, nativeAudioBufferSourceNode);
        if (!nativeAudioBufferSourceNodeIsOwnedByContext) {
          await renderAutomation2(nativeOfflineAudioContext, proxy.playbackRate, nativeAudioBufferSourceNode.playbackRate);
        } else {
          await connectAudioParam2(nativeOfflineAudioContext, proxy.playbackRate, nativeAudioBufferSourceNode.playbackRate);
        }
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeAudioBufferSourceNode);
        return nativeAudioBufferSourceNode;
      };
      return {
        set start(value) {
          start2 = value;
        },
        set stop(value) {
          stop = value;
        },
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeAudioBufferSourceNode = renderedNativeAudioBufferSourceNodes.get(nativeOfflineAudioContext);
          if (renderedNativeAudioBufferSourceNode !== void 0) {
            return Promise.resolve(renderedNativeAudioBufferSourceNode);
          }
          return createAudioBufferSourceNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/guards/audio-buffer-source-node.js
  var isAudioBufferSourceNode = (audioNode) => {
    return "playbackRate" in audioNode;
  };

  // node_modules/standardized-audio-context/build/es2019/guards/biquad-filter-node.js
  var isBiquadFilterNode = (audioNode) => {
    return "frequency" in audioNode && "gain" in audioNode;
  };

  // node_modules/standardized-audio-context/build/es2019/guards/constant-source-node.js
  var isConstantSourceNode = (audioNode) => {
    return "offset" in audioNode;
  };

  // node_modules/standardized-audio-context/build/es2019/guards/gain-node.js
  var isGainNode = (audioNode) => {
    return !("frequency" in audioNode) && "gain" in audioNode;
  };

  // node_modules/standardized-audio-context/build/es2019/guards/oscillator-node.js
  var isOscillatorNode = (audioNode) => {
    return "detune" in audioNode && "frequency" in audioNode && !("gain" in audioNode);
  };

  // node_modules/standardized-audio-context/build/es2019/guards/stereo-panner-node.js
  var isStereoPannerNode = (audioNode) => {
    return "pan" in audioNode;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/get-audio-node-connections.js
  var getAudioNodeConnections = (audioNode) => {
    return getValueForKey(AUDIO_NODE_CONNECTIONS_STORE, audioNode);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/get-audio-param-connections.js
  var getAudioParamConnections = (audioParam) => {
    return getValueForKey(AUDIO_PARAM_CONNECTIONS_STORE, audioParam);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/deactivate-active-audio-node-input-connections.js
  var deactivateActiveAudioNodeInputConnections = (audioNode, trace) => {
    const { activeInputs } = getAudioNodeConnections(audioNode);
    activeInputs.forEach((connections) => connections.forEach(([source]) => {
      if (!trace.includes(audioNode)) {
        deactivateActiveAudioNodeInputConnections(source, [...trace, audioNode]);
      }
    }));
    const audioParams = isAudioBufferSourceNode(audioNode) ? [
      // Bug #149: Safari does not yet support the detune AudioParam.
      audioNode.playbackRate
    ] : isAudioWorkletNode(audioNode) ? Array.from(audioNode.parameters.values()) : isBiquadFilterNode(audioNode) ? [audioNode.Q, audioNode.detune, audioNode.frequency, audioNode.gain] : isConstantSourceNode(audioNode) ? [audioNode.offset] : isGainNode(audioNode) ? [audioNode.gain] : isOscillatorNode(audioNode) ? [audioNode.detune, audioNode.frequency] : isStereoPannerNode(audioNode) ? [audioNode.pan] : [];
    for (const audioParam of audioParams) {
      const audioParamConnections = getAudioParamConnections(audioParam);
      if (audioParamConnections !== void 0) {
        audioParamConnections.activeInputs.forEach(([source]) => deactivateActiveAudioNodeInputConnections(source, trace));
      }
    }
    if (isActiveAudioNode(audioNode)) {
      setInternalStateToPassive(audioNode);
    }
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/deactivate-audio-graph.js
  var deactivateAudioGraph = (context2) => {
    deactivateActiveAudioNodeInputConnections(context2.destination, []);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/is-valid-latency-hint.js
  var isValidLatencyHint = (latencyHint) => {
    return latencyHint === void 0 || typeof latencyHint === "number" || typeof latencyHint === "string" && (latencyHint === "balanced" || latencyHint === "interactive" || latencyHint === "playback");
  };

  // node_modules/standardized-audio-context/build/es2019/factories/audio-context-constructor.js
  var createAudioContextConstructor = (baseAudioContextConstructor2, createInvalidStateError2, createNotSupportedError2, createUnknownError2, mediaElementAudioSourceNodeConstructor2, mediaStreamAudioDestinationNodeConstructor2, mediaStreamAudioSourceNodeConstructor2, mediaStreamTrackAudioSourceNodeConstructor2, nativeAudioContextConstructor2) => {
    return class AudioContext extends baseAudioContextConstructor2 {
      constructor(options = {}) {
        if (nativeAudioContextConstructor2 === null) {
          throw new Error("Missing the native AudioContext constructor.");
        }
        let nativeAudioContext;
        try {
          nativeAudioContext = new nativeAudioContextConstructor2(options);
        } catch (err) {
          if (err.code === 12 && err.message === "sampleRate is not in range") {
            throw createNotSupportedError2();
          }
          throw err;
        }
        if (nativeAudioContext === null) {
          throw createUnknownError2();
        }
        if (!isValidLatencyHint(options.latencyHint)) {
          throw new TypeError(`The provided value '${options.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);
        }
        if (options.sampleRate !== void 0 && nativeAudioContext.sampleRate !== options.sampleRate) {
          throw createNotSupportedError2();
        }
        super(nativeAudioContext, 2);
        const { latencyHint } = options;
        const { sampleRate } = nativeAudioContext;
        this._baseLatency = typeof nativeAudioContext.baseLatency === "number" ? nativeAudioContext.baseLatency : latencyHint === "balanced" ? 512 / sampleRate : latencyHint === "interactive" || latencyHint === void 0 ? 256 / sampleRate : latencyHint === "playback" ? 1024 / sampleRate : (
          /*
           * @todo The min (256) and max (16384) values are taken from the allowed bufferSize values of a
           * ScriptProcessorNode.
           */
          Math.max(2, Math.min(128, Math.round(latencyHint * sampleRate / 128))) * 128 / sampleRate
        );
        this._nativeAudioContext = nativeAudioContext;
        if (nativeAudioContextConstructor2.name === "webkitAudioContext") {
          this._nativeGainNode = nativeAudioContext.createGain();
          this._nativeOscillatorNode = nativeAudioContext.createOscillator();
          this._nativeGainNode.gain.value = 1e-37;
          this._nativeOscillatorNode.connect(this._nativeGainNode).connect(nativeAudioContext.destination);
          this._nativeOscillatorNode.start();
        } else {
          this._nativeGainNode = null;
          this._nativeOscillatorNode = null;
        }
        this._state = null;
        if (nativeAudioContext.state === "running") {
          this._state = "suspended";
          const revokeState = () => {
            if (this._state === "suspended") {
              this._state = null;
            }
            nativeAudioContext.removeEventListener("statechange", revokeState);
          };
          nativeAudioContext.addEventListener("statechange", revokeState);
        }
      }
      get baseLatency() {
        return this._baseLatency;
      }
      get state() {
        return this._state !== null ? this._state : this._nativeAudioContext.state;
      }
      close() {
        if (this.state === "closed") {
          return this._nativeAudioContext.close().then(() => {
            throw createInvalidStateError2();
          });
        }
        if (this._state === "suspended") {
          this._state = null;
        }
        return this._nativeAudioContext.close().then(() => {
          if (this._nativeGainNode !== null && this._nativeOscillatorNode !== null) {
            this._nativeOscillatorNode.stop();
            this._nativeGainNode.disconnect();
            this._nativeOscillatorNode.disconnect();
          }
          deactivateAudioGraph(this);
        });
      }
      createMediaElementSource(mediaElement) {
        return new mediaElementAudioSourceNodeConstructor2(this, { mediaElement });
      }
      createMediaStreamDestination() {
        return new mediaStreamAudioDestinationNodeConstructor2(this);
      }
      createMediaStreamSource(mediaStream) {
        return new mediaStreamAudioSourceNodeConstructor2(this, { mediaStream });
      }
      createMediaStreamTrackSource(mediaStreamTrack) {
        return new mediaStreamTrackAudioSourceNodeConstructor2(this, { mediaStreamTrack });
      }
      resume() {
        if (this._state === "suspended") {
          return new Promise((resolve, reject) => {
            const resolvePromise = () => {
              this._nativeAudioContext.removeEventListener("statechange", resolvePromise);
              if (this._nativeAudioContext.state === "running") {
                resolve();
              } else {
                this.resume().then(resolve, reject);
              }
            };
            this._nativeAudioContext.addEventListener("statechange", resolvePromise);
          });
        }
        return this._nativeAudioContext.resume().catch((err) => {
          if (err === void 0 || err.code === 15) {
            throw createInvalidStateError2();
          }
          throw err;
        });
      }
      suspend() {
        return this._nativeAudioContext.suspend().catch((err) => {
          if (err === void 0) {
            throw createInvalidStateError2();
          }
          throw err;
        });
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/audio-destination-node-constructor.js
  var createAudioDestinationNodeConstructor = (audioNodeConstructor2, createAudioDestinationNodeRenderer2, createIndexSizeError2, createInvalidStateError2, createNativeAudioDestinationNode, getNativeContext2, isNativeOfflineAudioContext2, renderInputsOfAudioNode2) => {
    return class AudioDestinationNode extends audioNodeConstructor2 {
      constructor(context2, channelCount) {
        const nativeContext = getNativeContext2(context2);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const nativeAudioDestinationNode = createNativeAudioDestinationNode(nativeContext, channelCount, isOffline);
        const audioDestinationNodeRenderer = isOffline ? createAudioDestinationNodeRenderer2(renderInputsOfAudioNode2) : null;
        super(context2, false, nativeAudioDestinationNode, audioDestinationNodeRenderer);
        this._isNodeOfNativeOfflineAudioContext = isOffline;
        this._nativeAudioDestinationNode = nativeAudioDestinationNode;
      }
      get channelCount() {
        return this._nativeAudioDestinationNode.channelCount;
      }
      set channelCount(value) {
        if (this._isNodeOfNativeOfflineAudioContext) {
          throw createInvalidStateError2();
        }
        if (value > this._nativeAudioDestinationNode.maxChannelCount) {
          throw createIndexSizeError2();
        }
        this._nativeAudioDestinationNode.channelCount = value;
      }
      get channelCountMode() {
        return this._nativeAudioDestinationNode.channelCountMode;
      }
      set channelCountMode(value) {
        if (this._isNodeOfNativeOfflineAudioContext) {
          throw createInvalidStateError2();
        }
        this._nativeAudioDestinationNode.channelCountMode = value;
      }
      get maxChannelCount() {
        return this._nativeAudioDestinationNode.maxChannelCount;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/audio-destination-node-renderer-factory.js
  var createAudioDestinationNodeRenderer = (renderInputsOfAudioNode2) => {
    const renderedNativeAudioDestinationNodes = /* @__PURE__ */ new WeakMap();
    const createAudioDestinationNode = async (proxy, nativeOfflineAudioContext) => {
      const nativeAudioDestinationNode = nativeOfflineAudioContext.destination;
      renderedNativeAudioDestinationNodes.set(nativeOfflineAudioContext, nativeAudioDestinationNode);
      await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeAudioDestinationNode);
      return nativeAudioDestinationNode;
    };
    return {
      render(proxy, nativeOfflineAudioContext) {
        const renderedNativeAudioDestinationNode = renderedNativeAudioDestinationNodes.get(nativeOfflineAudioContext);
        if (renderedNativeAudioDestinationNode !== void 0) {
          return Promise.resolve(renderedNativeAudioDestinationNode);
        }
        return createAudioDestinationNode(proxy, nativeOfflineAudioContext);
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/audio-listener-factory.js
  var createAudioListenerFactory = (createAudioParam2, createNativeChannelMergerNode2, createNativeConstantSourceNode2, createNativeScriptProcessorNode2, createNotSupportedError2, getFirstSample2, isNativeOfflineAudioContext2, overwriteAccessors2) => {
    return (context2, nativeContext) => {
      const nativeListener = nativeContext.listener;
      const createFakeAudioParams = () => {
        const buffer = new Float32Array(1);
        const channelMergerNode = createNativeChannelMergerNode2(nativeContext, {
          channelCount: 1,
          channelCountMode: "explicit",
          channelInterpretation: "speakers",
          numberOfInputs: 9
        });
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        let isScriptProcessorNodeCreated = false;
        let lastOrientation = [0, 0, -1, 0, 1, 0];
        let lastPosition = [0, 0, 0];
        const createScriptProcessorNode = () => {
          if (isScriptProcessorNodeCreated) {
            return;
          }
          isScriptProcessorNodeCreated = true;
          const scriptProcessorNode = createNativeScriptProcessorNode2(nativeContext, 256, 9, 0);
          scriptProcessorNode.onaudioprocess = ({ inputBuffer }) => {
            const orientation = [
              getFirstSample2(inputBuffer, buffer, 0),
              getFirstSample2(inputBuffer, buffer, 1),
              getFirstSample2(inputBuffer, buffer, 2),
              getFirstSample2(inputBuffer, buffer, 3),
              getFirstSample2(inputBuffer, buffer, 4),
              getFirstSample2(inputBuffer, buffer, 5)
            ];
            if (orientation.some((value, index) => value !== lastOrientation[index])) {
              nativeListener.setOrientation(...orientation);
              lastOrientation = orientation;
            }
            const positon = [
              getFirstSample2(inputBuffer, buffer, 6),
              getFirstSample2(inputBuffer, buffer, 7),
              getFirstSample2(inputBuffer, buffer, 8)
            ];
            if (positon.some((value, index) => value !== lastPosition[index])) {
              nativeListener.setPosition(...positon);
              lastPosition = positon;
            }
          };
          channelMergerNode.connect(scriptProcessorNode);
        };
        const createSetOrientation = (index) => (value) => {
          if (value !== lastOrientation[index]) {
            lastOrientation[index] = value;
            nativeListener.setOrientation(...lastOrientation);
          }
        };
        const createSetPosition = (index) => (value) => {
          if (value !== lastPosition[index]) {
            lastPosition[index] = value;
            nativeListener.setPosition(...lastPosition);
          }
        };
        const createFakeAudioParam = (input, initialValue, setValue) => {
          const constantSourceNode = createNativeConstantSourceNode2(nativeContext, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            offset: initialValue
          });
          constantSourceNode.connect(channelMergerNode, 0, input);
          constantSourceNode.start();
          Object.defineProperty(constantSourceNode.offset, "defaultValue", {
            get() {
              return initialValue;
            }
          });
          const audioParam = createAudioParam2({ context: context2 }, isOffline, constantSourceNode.offset, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
          overwriteAccessors2(audioParam, "value", (get) => () => get.call(audioParam), (set) => (value) => {
            try {
              set.call(audioParam, value);
            } catch (err) {
              if (err.code !== 9) {
                throw err;
              }
            }
            createScriptProcessorNode();
            if (isOffline) {
              setValue(value);
            }
          });
          audioParam.cancelAndHoldAtTime = ((cancelAndHoldAtTime) => {
            if (isOffline) {
              return () => {
                throw createNotSupportedError2();
              };
            }
            return (...args) => {
              const value = cancelAndHoldAtTime.apply(audioParam, args);
              createScriptProcessorNode();
              return value;
            };
          })(audioParam.cancelAndHoldAtTime);
          audioParam.cancelScheduledValues = ((cancelScheduledValues) => {
            if (isOffline) {
              return () => {
                throw createNotSupportedError2();
              };
            }
            return (...args) => {
              const value = cancelScheduledValues.apply(audioParam, args);
              createScriptProcessorNode();
              return value;
            };
          })(audioParam.cancelScheduledValues);
          audioParam.exponentialRampToValueAtTime = ((exponentialRampToValueAtTime) => {
            if (isOffline) {
              return () => {
                throw createNotSupportedError2();
              };
            }
            return (...args) => {
              const value = exponentialRampToValueAtTime.apply(audioParam, args);
              createScriptProcessorNode();
              return value;
            };
          })(audioParam.exponentialRampToValueAtTime);
          audioParam.linearRampToValueAtTime = ((linearRampToValueAtTime) => {
            if (isOffline) {
              return () => {
                throw createNotSupportedError2();
              };
            }
            return (...args) => {
              const value = linearRampToValueAtTime.apply(audioParam, args);
              createScriptProcessorNode();
              return value;
            };
          })(audioParam.linearRampToValueAtTime);
          audioParam.setTargetAtTime = ((setTargetAtTime) => {
            if (isOffline) {
              return () => {
                throw createNotSupportedError2();
              };
            }
            return (...args) => {
              const value = setTargetAtTime.apply(audioParam, args);
              createScriptProcessorNode();
              return value;
            };
          })(audioParam.setTargetAtTime);
          audioParam.setValueAtTime = ((setValueAtTime) => {
            if (isOffline) {
              return () => {
                throw createNotSupportedError2();
              };
            }
            return (...args) => {
              const value = setValueAtTime.apply(audioParam, args);
              createScriptProcessorNode();
              return value;
            };
          })(audioParam.setValueAtTime);
          audioParam.setValueCurveAtTime = ((setValueCurveAtTime) => {
            if (isOffline) {
              return () => {
                throw createNotSupportedError2();
              };
            }
            return (...args) => {
              const value = setValueCurveAtTime.apply(audioParam, args);
              createScriptProcessorNode();
              return value;
            };
          })(audioParam.setValueCurveAtTime);
          return audioParam;
        };
        return {
          forwardX: createFakeAudioParam(0, 0, createSetOrientation(0)),
          forwardY: createFakeAudioParam(1, 0, createSetOrientation(1)),
          forwardZ: createFakeAudioParam(2, -1, createSetOrientation(2)),
          positionX: createFakeAudioParam(6, 0, createSetPosition(0)),
          positionY: createFakeAudioParam(7, 0, createSetPosition(1)),
          positionZ: createFakeAudioParam(8, 0, createSetPosition(2)),
          upX: createFakeAudioParam(3, 0, createSetOrientation(3)),
          upY: createFakeAudioParam(4, 1, createSetOrientation(4)),
          upZ: createFakeAudioParam(5, 0, createSetOrientation(5))
        };
      };
      const { forwardX, forwardY, forwardZ, positionX, positionY, positionZ, upX, upY, upZ } = nativeListener.forwardX === void 0 ? createFakeAudioParams() : nativeListener;
      return {
        get forwardX() {
          return forwardX;
        },
        get forwardY() {
          return forwardY;
        },
        get forwardZ() {
          return forwardZ;
        },
        get positionX() {
          return positionX;
        },
        get positionY() {
          return positionY;
        },
        get positionZ() {
          return positionZ;
        },
        get upX() {
          return upX;
        },
        get upY() {
          return upY;
        },
        get upZ() {
          return upZ;
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/guards/audio-node.js
  var isAudioNode = (audioNodeOrAudioParam) => {
    return "context" in audioNodeOrAudioParam;
  };

  // node_modules/standardized-audio-context/build/es2019/guards/audio-node-output-connection.js
  var isAudioNodeOutputConnection = (outputConnection) => {
    return isAudioNode(outputConnection[0]);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/insert-element-in-set.js
  var insertElementInSet = (set, element, predicate, ignoreDuplicates) => {
    for (const lmnt of set) {
      if (predicate(lmnt)) {
        if (ignoreDuplicates) {
          return false;
        }
        throw Error("The set contains at least one similar element.");
      }
    }
    set.add(element);
    return true;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/add-active-input-connection-to-audio-param.js
  var addActiveInputConnectionToAudioParam = (activeInputs, source, [output, eventListener], ignoreDuplicates) => {
    insertElementInSet(activeInputs, [source, output, eventListener], (activeInputConnection) => activeInputConnection[0] === source && activeInputConnection[1] === output, ignoreDuplicates);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/add-passive-input-connection-to-audio-param.js
  var addPassiveInputConnectionToAudioParam = (passiveInputs, [source, output, eventListener], ignoreDuplicates) => {
    const passiveInputConnections = passiveInputs.get(source);
    if (passiveInputConnections === void 0) {
      passiveInputs.set(source, /* @__PURE__ */ new Set([[output, eventListener]]));
    } else {
      insertElementInSet(passiveInputConnections, [output, eventListener], (passiveInputConnection) => passiveInputConnection[0] === output, ignoreDuplicates);
    }
  };

  // node_modules/standardized-audio-context/build/es2019/guards/native-audio-node-faker.js
  var isNativeAudioNodeFaker = (nativeAudioNodeOrNativeAudioNodeFaker) => {
    return "inputs" in nativeAudioNodeOrNativeAudioNodeFaker;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/connect-native-audio-node-to-native-audio-node.js
  var connectNativeAudioNodeToNativeAudioNode = (nativeSourceAudioNode, nativeDestinationAudioNode, output, input) => {
    if (isNativeAudioNodeFaker(nativeDestinationAudioNode)) {
      const fakeNativeDestinationAudioNode = nativeDestinationAudioNode.inputs[input];
      nativeSourceAudioNode.connect(fakeNativeDestinationAudioNode, output, 0);
      return [fakeNativeDestinationAudioNode, output, 0];
    }
    nativeSourceAudioNode.connect(nativeDestinationAudioNode, output, input);
    return [nativeDestinationAudioNode, output, input];
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/delete-active-input-connection.js
  var deleteActiveInputConnection = (activeInputConnections, source, output) => {
    for (const activeInputConnection of activeInputConnections) {
      if (activeInputConnection[0] === source && activeInputConnection[1] === output) {
        activeInputConnections.delete(activeInputConnection);
        return activeInputConnection;
      }
    }
    return null;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/delete-active-input-connection-to-audio-param.js
  var deleteActiveInputConnectionToAudioParam = (activeInputs, source, output) => {
    return pickElementFromSet(activeInputs, (activeInputConnection) => activeInputConnection[0] === source && activeInputConnection[1] === output);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/delete-event-listeners-of-audio-node.js
  var deleteEventListenerOfAudioNode = (audioNode, eventListener) => {
    const eventListeners = getEventListenersOfAudioNode(audioNode);
    if (!eventListeners.delete(eventListener)) {
      throw new Error("Missing the expected event listener.");
    }
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/delete-passive-input-connection-to-audio-param.js
  var deletePassiveInputConnectionToAudioParam = (passiveInputs, source, output) => {
    const passiveInputConnections = getValueForKey(passiveInputs, source);
    const matchingConnection = pickElementFromSet(passiveInputConnections, (passiveInputConnection) => passiveInputConnection[0] === output);
    if (passiveInputConnections.size === 0) {
      passiveInputs.delete(source);
    }
    return matchingConnection;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/disconnect-native-audio-node-from-native-audio-node.js
  var disconnectNativeAudioNodeFromNativeAudioNode = (nativeSourceAudioNode, nativeDestinationAudioNode, output, input) => {
    if (isNativeAudioNodeFaker(nativeDestinationAudioNode)) {
      nativeSourceAudioNode.disconnect(nativeDestinationAudioNode.inputs[input], output, 0);
    } else {
      nativeSourceAudioNode.disconnect(nativeDestinationAudioNode, output, input);
    }
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/get-native-audio-node.js
  var getNativeAudioNode = (audioNode) => {
    return getValueForKey(AUDIO_NODE_STORE, audioNode);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/get-native-audio-param.js
  var getNativeAudioParam = (audioParam) => {
    return getValueForKey(AUDIO_PARAM_STORE, audioParam);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/is-part-of-a-cycle.js
  var isPartOfACycle = (audioNode) => {
    return CYCLE_COUNTERS.has(audioNode);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/is-passive-audio-node.js
  var isPassiveAudioNode = (audioNode) => {
    return !ACTIVE_AUDIO_NODE_STORE.has(audioNode);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-audio-node-disconnect-method-support.js
  var testAudioNodeDisconnectMethodSupport = (nativeAudioContext, nativeAudioWorkletNodeConstructor2) => {
    return new Promise((resolve) => {
      if (nativeAudioWorkletNodeConstructor2 !== null) {
        resolve(true);
      } else {
        const analyzer = nativeAudioContext.createScriptProcessor(256, 1, 1);
        const dummy = nativeAudioContext.createGain();
        const ones = nativeAudioContext.createBuffer(1, 2, 44100);
        const channelData = ones.getChannelData(0);
        channelData[0] = 1;
        channelData[1] = 1;
        const source = nativeAudioContext.createBufferSource();
        source.buffer = ones;
        source.loop = true;
        source.connect(analyzer).connect(nativeAudioContext.destination);
        source.connect(dummy);
        source.disconnect(dummy);
        analyzer.onaudioprocess = (event) => {
          const chnnlDt = event.inputBuffer.getChannelData(0);
          if (Array.prototype.some.call(chnnlDt, (sample) => sample === 1)) {
            resolve(true);
          } else {
            resolve(false);
          }
          source.stop();
          analyzer.onaudioprocess = null;
          source.disconnect(analyzer);
          analyzer.disconnect(nativeAudioContext.destination);
        };
        source.start();
      }
    });
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/visit-each-audio-node-once.js
  var visitEachAudioNodeOnce = (cycles, visitor) => {
    const counts = /* @__PURE__ */ new Map();
    for (const cycle of cycles) {
      for (const audioNode of cycle) {
        const count = counts.get(audioNode);
        counts.set(audioNode, count === void 0 ? 1 : count + 1);
      }
    }
    counts.forEach((count, audioNode) => visitor(audioNode, count));
  };

  // node_modules/standardized-audio-context/build/es2019/guards/native-audio-node.js
  var isNativeAudioNode = (nativeAudioNodeOrAudioParam) => {
    return "context" in nativeAudioNodeOrAudioParam;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/wrap-audio-node-disconnect-method.js
  var wrapAudioNodeDisconnectMethod = (nativeAudioNode) => {
    const connections = /* @__PURE__ */ new Map();
    nativeAudioNode.connect = /* @__PURE__ */ ((connect2) => {
      return (destination, output = 0, input = 0) => {
        const returnValue = isNativeAudioNode(destination) ? connect2(destination, output, input) : connect2(destination, output);
        const connectionsToDestination = connections.get(destination);
        if (connectionsToDestination === void 0) {
          connections.set(destination, [{ input, output }]);
        } else {
          if (connectionsToDestination.every((connection) => connection.input !== input || connection.output !== output)) {
            connectionsToDestination.push({ input, output });
          }
        }
        return returnValue;
      };
    })(nativeAudioNode.connect.bind(nativeAudioNode));
    nativeAudioNode.disconnect = /* @__PURE__ */ ((disconnect2) => {
      return (destinationOrOutput, output, input) => {
        disconnect2.apply(nativeAudioNode);
        if (destinationOrOutput === void 0) {
          connections.clear();
        } else if (typeof destinationOrOutput === "number") {
          for (const [destination, connectionsToDestination] of connections) {
            const filteredConnections = connectionsToDestination.filter((connection) => connection.output !== destinationOrOutput);
            if (filteredConnections.length === 0) {
              connections.delete(destination);
            } else {
              connections.set(destination, filteredConnections);
            }
          }
        } else if (connections.has(destinationOrOutput)) {
          if (output === void 0) {
            connections.delete(destinationOrOutput);
          } else {
            const connectionsToDestination = connections.get(destinationOrOutput);
            if (connectionsToDestination !== void 0) {
              const filteredConnections = connectionsToDestination.filter((connection) => connection.output !== output && (connection.input !== input || input === void 0));
              if (filteredConnections.length === 0) {
                connections.delete(destinationOrOutput);
              } else {
                connections.set(destinationOrOutput, filteredConnections);
              }
            }
          }
        }
        for (const [destination, connectionsToDestination] of connections) {
          connectionsToDestination.forEach((connection) => {
            if (isNativeAudioNode(destination)) {
              nativeAudioNode.connect(destination, connection.output, connection.input);
            } else {
              nativeAudioNode.connect(destination, connection.output);
            }
          });
        }
      };
    })(nativeAudioNode.disconnect);
  };

  // node_modules/standardized-audio-context/build/es2019/factories/audio-node-constructor.js
  var addConnectionToAudioParamOfAudioContext = (source, destination, output, isOffline) => {
    const { activeInputs, passiveInputs } = getAudioParamConnections(destination);
    const { outputs } = getAudioNodeConnections(source);
    const eventListeners = getEventListenersOfAudioNode(source);
    const eventListener = (isActive) => {
      const nativeAudioNode = getNativeAudioNode(source);
      const nativeAudioParam = getNativeAudioParam(destination);
      if (isActive) {
        const partialConnection = deletePassiveInputConnectionToAudioParam(passiveInputs, source, output);
        addActiveInputConnectionToAudioParam(activeInputs, source, partialConnection, false);
        if (!isOffline && !isPartOfACycle(source)) {
          nativeAudioNode.connect(nativeAudioParam, output);
        }
      } else {
        const partialConnection = deleteActiveInputConnectionToAudioParam(activeInputs, source, output);
        addPassiveInputConnectionToAudioParam(passiveInputs, partialConnection, false);
        if (!isOffline && !isPartOfACycle(source)) {
          nativeAudioNode.disconnect(nativeAudioParam, output);
        }
      }
    };
    if (insertElementInSet(outputs, [destination, output], (outputConnection) => outputConnection[0] === destination && outputConnection[1] === output, true)) {
      eventListeners.add(eventListener);
      if (isActiveAudioNode(source)) {
        addActiveInputConnectionToAudioParam(activeInputs, source, [output, eventListener], true);
      } else {
        addPassiveInputConnectionToAudioParam(passiveInputs, [source, output, eventListener], true);
      }
      return true;
    }
    return false;
  };
  var deleteInputConnectionOfAudioNode = (source, destination, output, input) => {
    const { activeInputs, passiveInputs } = getAudioNodeConnections(destination);
    const activeInputConnection = deleteActiveInputConnection(activeInputs[input], source, output);
    if (activeInputConnection === null) {
      const passiveInputConnection = deletePassiveInputConnectionToAudioNode(passiveInputs, source, output, input);
      return [passiveInputConnection[2], false];
    }
    return [activeInputConnection[2], true];
  };
  var deleteInputConnectionOfAudioParam = (source, destination, output) => {
    const { activeInputs, passiveInputs } = getAudioParamConnections(destination);
    const activeInputConnection = deleteActiveInputConnection(activeInputs, source, output);
    if (activeInputConnection === null) {
      const passiveInputConnection = deletePassiveInputConnectionToAudioParam(passiveInputs, source, output);
      return [passiveInputConnection[1], false];
    }
    return [activeInputConnection[2], true];
  };
  var deleteInputsOfAudioNode = (source, isOffline, destination, output, input) => {
    const [listener, isActive] = deleteInputConnectionOfAudioNode(source, destination, output, input);
    if (listener !== null) {
      deleteEventListenerOfAudioNode(source, listener);
      if (isActive && !isOffline && !isPartOfACycle(source)) {
        disconnectNativeAudioNodeFromNativeAudioNode(getNativeAudioNode(source), getNativeAudioNode(destination), output, input);
      }
    }
    if (isActiveAudioNode(destination)) {
      const { activeInputs } = getAudioNodeConnections(destination);
      setInternalStateToPassiveWhenNecessary(destination, activeInputs);
    }
  };
  var deleteInputsOfAudioParam = (source, isOffline, destination, output) => {
    const [listener, isActive] = deleteInputConnectionOfAudioParam(source, destination, output);
    if (listener !== null) {
      deleteEventListenerOfAudioNode(source, listener);
      if (isActive && !isOffline && !isPartOfACycle(source)) {
        getNativeAudioNode(source).disconnect(getNativeAudioParam(destination), output);
      }
    }
  };
  var deleteAnyConnection = (source, isOffline) => {
    const audioNodeConnectionsOfSource = getAudioNodeConnections(source);
    const destinations = [];
    for (const outputConnection of audioNodeConnectionsOfSource.outputs) {
      if (isAudioNodeOutputConnection(outputConnection)) {
        deleteInputsOfAudioNode(source, isOffline, ...outputConnection);
      } else {
        deleteInputsOfAudioParam(source, isOffline, ...outputConnection);
      }
      destinations.push(outputConnection[0]);
    }
    audioNodeConnectionsOfSource.outputs.clear();
    return destinations;
  };
  var deleteConnectionAtOutput = (source, isOffline, output) => {
    const audioNodeConnectionsOfSource = getAudioNodeConnections(source);
    const destinations = [];
    for (const outputConnection of audioNodeConnectionsOfSource.outputs) {
      if (outputConnection[1] === output) {
        if (isAudioNodeOutputConnection(outputConnection)) {
          deleteInputsOfAudioNode(source, isOffline, ...outputConnection);
        } else {
          deleteInputsOfAudioParam(source, isOffline, ...outputConnection);
        }
        destinations.push(outputConnection[0]);
        audioNodeConnectionsOfSource.outputs.delete(outputConnection);
      }
    }
    return destinations;
  };
  var deleteConnectionToDestination = (source, isOffline, destination, output, input) => {
    const audioNodeConnectionsOfSource = getAudioNodeConnections(source);
    return Array.from(audioNodeConnectionsOfSource.outputs).filter((outputConnection) => outputConnection[0] === destination && (output === void 0 || outputConnection[1] === output) && (input === void 0 || outputConnection[2] === input)).map((outputConnection) => {
      if (isAudioNodeOutputConnection(outputConnection)) {
        deleteInputsOfAudioNode(source, isOffline, ...outputConnection);
      } else {
        deleteInputsOfAudioParam(source, isOffline, ...outputConnection);
      }
      audioNodeConnectionsOfSource.outputs.delete(outputConnection);
      return outputConnection[0];
    });
  };
  var createAudioNodeConstructor = (addAudioNodeConnections, addConnectionToAudioNode, cacheTestResult2, createIncrementCycleCounter, createIndexSizeError2, createInvalidAccessError2, createNotSupportedError2, decrementCycleCounter, detectCycles, eventTargetConstructor2, getNativeContext2, isNativeAudioContext2, isNativeAudioNode3, isNativeAudioParam2, isNativeOfflineAudioContext2, nativeAudioWorkletNodeConstructor2) => {
    return class AudioNode extends eventTargetConstructor2 {
      constructor(context2, isActive, nativeAudioNode, audioNodeRenderer) {
        super(nativeAudioNode);
        this._context = context2;
        this._nativeAudioNode = nativeAudioNode;
        const nativeContext = getNativeContext2(context2);
        if (isNativeAudioContext2(nativeContext) && true !== cacheTestResult2(testAudioNodeDisconnectMethodSupport, () => {
          return testAudioNodeDisconnectMethodSupport(nativeContext, nativeAudioWorkletNodeConstructor2);
        })) {
          wrapAudioNodeDisconnectMethod(nativeAudioNode);
        }
        AUDIO_NODE_STORE.set(this, nativeAudioNode);
        EVENT_LISTENERS.set(this, /* @__PURE__ */ new Set());
        if (context2.state !== "closed" && isActive) {
          setInternalStateToActive(this);
        }
        addAudioNodeConnections(this, audioNodeRenderer, nativeAudioNode);
      }
      get channelCount() {
        return this._nativeAudioNode.channelCount;
      }
      set channelCount(value) {
        this._nativeAudioNode.channelCount = value;
      }
      get channelCountMode() {
        return this._nativeAudioNode.channelCountMode;
      }
      set channelCountMode(value) {
        this._nativeAudioNode.channelCountMode = value;
      }
      get channelInterpretation() {
        return this._nativeAudioNode.channelInterpretation;
      }
      set channelInterpretation(value) {
        this._nativeAudioNode.channelInterpretation = value;
      }
      get context() {
        return this._context;
      }
      get numberOfInputs() {
        return this._nativeAudioNode.numberOfInputs;
      }
      get numberOfOutputs() {
        return this._nativeAudioNode.numberOfOutputs;
      }
      // tslint:disable-next-line:invalid-void
      connect(destination, output = 0, input = 0) {
        if (output < 0 || output >= this._nativeAudioNode.numberOfOutputs) {
          throw createIndexSizeError2();
        }
        const nativeContext = getNativeContext2(this._context);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        if (isNativeAudioNode3(destination) || isNativeAudioParam2(destination)) {
          throw createInvalidAccessError2();
        }
        if (isAudioNode(destination)) {
          const nativeDestinationAudioNode = getNativeAudioNode(destination);
          try {
            const connection = connectNativeAudioNodeToNativeAudioNode(this._nativeAudioNode, nativeDestinationAudioNode, output, input);
            const isPassive = isPassiveAudioNode(this);
            if (isOffline || isPassive) {
              this._nativeAudioNode.disconnect(...connection);
            }
            if (this.context.state !== "closed" && !isPassive && isPassiveAudioNode(destination)) {
              setInternalStateToActive(destination);
            }
          } catch (err) {
            if (err.code === 12) {
              throw createInvalidAccessError2();
            }
            throw err;
          }
          const isNewConnectionToAudioNode = addConnectionToAudioNode(this, destination, output, input, isOffline);
          if (isNewConnectionToAudioNode) {
            const cycles = detectCycles([this], destination);
            visitEachAudioNodeOnce(cycles, createIncrementCycleCounter(isOffline));
          }
          return destination;
        }
        const nativeAudioParam = getNativeAudioParam(destination);
        if (nativeAudioParam.name === "playbackRate" && nativeAudioParam.maxValue === 1024) {
          throw createNotSupportedError2();
        }
        try {
          this._nativeAudioNode.connect(nativeAudioParam, output);
          if (isOffline || isPassiveAudioNode(this)) {
            this._nativeAudioNode.disconnect(nativeAudioParam, output);
          }
        } catch (err) {
          if (err.code === 12) {
            throw createInvalidAccessError2();
          }
          throw err;
        }
        const isNewConnectionToAudioParam = addConnectionToAudioParamOfAudioContext(this, destination, output, isOffline);
        if (isNewConnectionToAudioParam) {
          const cycles = detectCycles([this], destination);
          visitEachAudioNodeOnce(cycles, createIncrementCycleCounter(isOffline));
        }
      }
      disconnect(destinationOrOutput, output, input) {
        let destinations;
        const nativeContext = getNativeContext2(this._context);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        if (destinationOrOutput === void 0) {
          destinations = deleteAnyConnection(this, isOffline);
        } else if (typeof destinationOrOutput === "number") {
          if (destinationOrOutput < 0 || destinationOrOutput >= this.numberOfOutputs) {
            throw createIndexSizeError2();
          }
          destinations = deleteConnectionAtOutput(this, isOffline, destinationOrOutput);
        } else {
          if (output !== void 0 && (output < 0 || output >= this.numberOfOutputs)) {
            throw createIndexSizeError2();
          }
          if (isAudioNode(destinationOrOutput) && input !== void 0 && (input < 0 || input >= destinationOrOutput.numberOfInputs)) {
            throw createIndexSizeError2();
          }
          destinations = deleteConnectionToDestination(this, isOffline, destinationOrOutput, output, input);
          if (destinations.length === 0) {
            throw createInvalidAccessError2();
          }
        }
        for (const destination of destinations) {
          const cycles = detectCycles([this], destination);
          visitEachAudioNodeOnce(cycles, decrementCycleCounter);
        }
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/audio-param-factory.js
  var import_automation_events = __toESM(require_bundle());
  var createAudioParamFactory = (addAudioParamConnections, audioParamAudioNodeStore2, audioParamStore, createAudioParamRenderer2, createCancelAndHoldAutomationEvent2, createCancelScheduledValuesAutomationEvent2, createExponentialRampToValueAutomationEvent2, createLinearRampToValueAutomationEvent2, createSetTargetAutomationEvent2, createSetValueAutomationEvent2, createSetValueCurveAutomationEvent2, nativeAudioContextConstructor2, setValueAtTimeUntilPossible2) => {
    return (audioNode, isAudioParamOfOfflineAudioContext, nativeAudioParam, maxValue = null, minValue = null) => {
      const defaultValue = nativeAudioParam.value;
      const automationEventList = new import_automation_events.AutomationEventList(defaultValue);
      const audioParamRenderer = isAudioParamOfOfflineAudioContext ? createAudioParamRenderer2(automationEventList) : null;
      const audioParam = {
        get defaultValue() {
          return defaultValue;
        },
        get maxValue() {
          return maxValue === null ? nativeAudioParam.maxValue : maxValue;
        },
        get minValue() {
          return minValue === null ? nativeAudioParam.minValue : minValue;
        },
        get value() {
          return nativeAudioParam.value;
        },
        set value(value) {
          nativeAudioParam.value = value;
          audioParam.setValueAtTime(value, audioNode.context.currentTime);
        },
        cancelAndHoldAtTime(cancelTime) {
          if (typeof nativeAudioParam.cancelAndHoldAtTime === "function") {
            if (audioParamRenderer === null) {
              automationEventList.flush(audioNode.context.currentTime);
            }
            automationEventList.add(createCancelAndHoldAutomationEvent2(cancelTime));
            nativeAudioParam.cancelAndHoldAtTime(cancelTime);
          } else {
            const previousLastEvent = Array.from(automationEventList).pop();
            if (audioParamRenderer === null) {
              automationEventList.flush(audioNode.context.currentTime);
            }
            automationEventList.add(createCancelAndHoldAutomationEvent2(cancelTime));
            const currentLastEvent = Array.from(automationEventList).pop();
            nativeAudioParam.cancelScheduledValues(cancelTime);
            if (previousLastEvent !== currentLastEvent && currentLastEvent !== void 0) {
              if (currentLastEvent.type === "exponentialRampToValue") {
                nativeAudioParam.exponentialRampToValueAtTime(currentLastEvent.value, currentLastEvent.endTime);
              } else if (currentLastEvent.type === "linearRampToValue") {
                nativeAudioParam.linearRampToValueAtTime(currentLastEvent.value, currentLastEvent.endTime);
              } else if (currentLastEvent.type === "setValue") {
                nativeAudioParam.setValueAtTime(currentLastEvent.value, currentLastEvent.startTime);
              } else if (currentLastEvent.type === "setValueCurve") {
                nativeAudioParam.setValueCurveAtTime(currentLastEvent.values, currentLastEvent.startTime, currentLastEvent.duration);
              }
            }
          }
          return audioParam;
        },
        cancelScheduledValues(cancelTime) {
          if (audioParamRenderer === null) {
            automationEventList.flush(audioNode.context.currentTime);
          }
          automationEventList.add(createCancelScheduledValuesAutomationEvent2(cancelTime));
          nativeAudioParam.cancelScheduledValues(cancelTime);
          return audioParam;
        },
        exponentialRampToValueAtTime(value, endTime) {
          if (value === 0) {
            throw new RangeError();
          }
          if (!Number.isFinite(endTime) || endTime < 0) {
            throw new RangeError();
          }
          const currentTime = audioNode.context.currentTime;
          if (audioParamRenderer === null) {
            automationEventList.flush(currentTime);
          }
          if (Array.from(automationEventList).length === 0) {
            automationEventList.add(createSetValueAutomationEvent2(defaultValue, currentTime));
            nativeAudioParam.setValueAtTime(defaultValue, currentTime);
          }
          automationEventList.add(createExponentialRampToValueAutomationEvent2(value, endTime));
          nativeAudioParam.exponentialRampToValueAtTime(value, endTime);
          return audioParam;
        },
        linearRampToValueAtTime(value, endTime) {
          const currentTime = audioNode.context.currentTime;
          if (audioParamRenderer === null) {
            automationEventList.flush(currentTime);
          }
          if (Array.from(automationEventList).length === 0) {
            automationEventList.add(createSetValueAutomationEvent2(defaultValue, currentTime));
            nativeAudioParam.setValueAtTime(defaultValue, currentTime);
          }
          automationEventList.add(createLinearRampToValueAutomationEvent2(value, endTime));
          nativeAudioParam.linearRampToValueAtTime(value, endTime);
          return audioParam;
        },
        setTargetAtTime(target, startTime, timeConstant) {
          if (audioParamRenderer === null) {
            automationEventList.flush(audioNode.context.currentTime);
          }
          automationEventList.add(createSetTargetAutomationEvent2(target, startTime, timeConstant));
          nativeAudioParam.setTargetAtTime(target, startTime, timeConstant);
          return audioParam;
        },
        setValueAtTime(value, startTime) {
          if (audioParamRenderer === null) {
            automationEventList.flush(audioNode.context.currentTime);
          }
          automationEventList.add(createSetValueAutomationEvent2(value, startTime));
          nativeAudioParam.setValueAtTime(value, startTime);
          return audioParam;
        },
        setValueCurveAtTime(values, startTime, duration) {
          const convertedValues = values instanceof Float32Array ? values : new Float32Array(values);
          if (nativeAudioContextConstructor2 !== null && nativeAudioContextConstructor2.name === "webkitAudioContext") {
            const endTime = startTime + duration;
            const sampleRate = audioNode.context.sampleRate;
            const firstSample = Math.ceil(startTime * sampleRate);
            const lastSample = Math.floor(endTime * sampleRate);
            const numberOfInterpolatedValues = lastSample - firstSample;
            const interpolatedValues = new Float32Array(numberOfInterpolatedValues);
            for (let i = 0; i < numberOfInterpolatedValues; i += 1) {
              const theoreticIndex = (convertedValues.length - 1) / duration * ((firstSample + i) / sampleRate - startTime);
              const lowerIndex = Math.floor(theoreticIndex);
              const upperIndex = Math.ceil(theoreticIndex);
              interpolatedValues[i] = lowerIndex === upperIndex ? convertedValues[lowerIndex] : (1 - (theoreticIndex - lowerIndex)) * convertedValues[lowerIndex] + (1 - (upperIndex - theoreticIndex)) * convertedValues[upperIndex];
            }
            if (audioParamRenderer === null) {
              automationEventList.flush(audioNode.context.currentTime);
            }
            automationEventList.add(createSetValueCurveAutomationEvent2(interpolatedValues, startTime, duration));
            nativeAudioParam.setValueCurveAtTime(interpolatedValues, startTime, duration);
            const timeOfLastSample = lastSample / sampleRate;
            if (timeOfLastSample < endTime) {
              setValueAtTimeUntilPossible2(audioParam, interpolatedValues[interpolatedValues.length - 1], timeOfLastSample);
            }
            setValueAtTimeUntilPossible2(audioParam, convertedValues[convertedValues.length - 1], endTime);
          } else {
            if (audioParamRenderer === null) {
              automationEventList.flush(audioNode.context.currentTime);
            }
            automationEventList.add(createSetValueCurveAutomationEvent2(convertedValues, startTime, duration));
            nativeAudioParam.setValueCurveAtTime(convertedValues, startTime, duration);
          }
          return audioParam;
        }
      };
      audioParamStore.set(audioParam, nativeAudioParam);
      audioParamAudioNodeStore2.set(audioParam, audioNode);
      addAudioParamConnections(audioParam, audioParamRenderer);
      return audioParam;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/audio-param-renderer.js
  var createAudioParamRenderer = (automationEventList) => {
    return {
      replay(audioParam) {
        for (const automationEvent of automationEventList) {
          if (automationEvent.type === "exponentialRampToValue") {
            const { endTime, value } = automationEvent;
            audioParam.exponentialRampToValueAtTime(value, endTime);
          } else if (automationEvent.type === "linearRampToValue") {
            const { endTime, value } = automationEvent;
            audioParam.linearRampToValueAtTime(value, endTime);
          } else if (automationEvent.type === "setTarget") {
            const { startTime, target, timeConstant } = automationEvent;
            audioParam.setTargetAtTime(target, startTime, timeConstant);
          } else if (automationEvent.type === "setValue") {
            const { startTime, value } = automationEvent;
            audioParam.setValueAtTime(value, startTime);
          } else if (automationEvent.type === "setValueCurve") {
            const { duration, startTime, values } = automationEvent;
            audioParam.setValueCurveAtTime(values, startTime, duration);
          } else {
            throw new Error("Can't apply an unknown automation.");
          }
        }
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/read-only-map.js
  var ReadOnlyMap = class {
    constructor(parameters) {
      this._map = new Map(parameters);
    }
    get size() {
      return this._map.size;
    }
    entries() {
      return this._map.entries();
    }
    forEach(callback, thisArg = null) {
      return this._map.forEach((value, key) => callback.call(thisArg, value, key, this));
    }
    get(name) {
      return this._map.get(name);
    }
    has(name) {
      return this._map.has(name);
    }
    keys() {
      return this._map.keys();
    }
    values() {
      return this._map.values();
    }
  };

  // node_modules/standardized-audio-context/build/es2019/factories/audio-worklet-node-constructor.js
  var DEFAULT_OPTIONS4 = {
    channelCount: 2,
    // Bug #61: The channelCountMode should be 'max' according to the spec but is set to 'explicit' to achieve consistent behavior.
    channelCountMode: "explicit",
    channelInterpretation: "speakers",
    numberOfInputs: 1,
    numberOfOutputs: 1,
    parameterData: {},
    processorOptions: {}
  };
  var createAudioWorkletNodeConstructor = (addUnrenderedAudioWorkletNode2, audioNodeConstructor2, createAudioParam2, createAudioWorkletNodeRenderer2, createNativeAudioWorkletNode2, getAudioNodeConnections2, getBackupOfflineAudioContext2, getNativeContext2, isNativeOfflineAudioContext2, nativeAudioWorkletNodeConstructor2, sanitizeAudioWorkletNodeOptions2, setActiveAudioWorkletNodeInputs2, testAudioWorkletNodeOptionsClonability2, wrapEventListener2) => {
    return class AudioWorkletNode extends audioNodeConstructor2 {
      constructor(context2, name, options) {
        var _a;
        const nativeContext = getNativeContext2(context2);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const mergedOptions = sanitizeAudioWorkletNodeOptions2({ ...DEFAULT_OPTIONS4, ...options });
        testAudioWorkletNodeOptionsClonability2(mergedOptions);
        const nodeNameToProcessorConstructorMap = NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS.get(nativeContext);
        const processorConstructor = nodeNameToProcessorConstructorMap === null || nodeNameToProcessorConstructorMap === void 0 ? void 0 : nodeNameToProcessorConstructorMap.get(name);
        const nativeContextOrBackupOfflineAudioContext = isOffline || nativeContext.state !== "closed" ? nativeContext : (_a = getBackupOfflineAudioContext2(nativeContext)) !== null && _a !== void 0 ? _a : nativeContext;
        const nativeAudioWorkletNode = createNativeAudioWorkletNode2(nativeContextOrBackupOfflineAudioContext, isOffline ? null : context2.baseLatency, nativeAudioWorkletNodeConstructor2, name, processorConstructor, mergedOptions);
        const audioWorkletNodeRenderer = isOffline ? createAudioWorkletNodeRenderer2(name, mergedOptions, processorConstructor) : null;
        super(context2, true, nativeAudioWorkletNode, audioWorkletNodeRenderer);
        const parameters = [];
        nativeAudioWorkletNode.parameters.forEach((nativeAudioParam, nm) => {
          const audioParam = createAudioParam2(this, isOffline, nativeAudioParam);
          parameters.push([nm, audioParam]);
        });
        this._nativeAudioWorkletNode = nativeAudioWorkletNode;
        this._onprocessorerror = null;
        this._parameters = new ReadOnlyMap(parameters);
        if (isOffline) {
          addUnrenderedAudioWorkletNode2(nativeContext, this);
        }
        const { activeInputs } = getAudioNodeConnections2(this);
        setActiveAudioWorkletNodeInputs2(nativeAudioWorkletNode, activeInputs);
      }
      get onprocessorerror() {
        return this._onprocessorerror;
      }
      set onprocessorerror(value) {
        const wrappedListener = typeof value === "function" ? wrapEventListener2(this, value) : null;
        this._nativeAudioWorkletNode.onprocessorerror = wrappedListener;
        const nativeOnProcessorError = this._nativeAudioWorkletNode.onprocessorerror;
        this._onprocessorerror = nativeOnProcessorError !== null && nativeOnProcessorError === wrappedListener ? value : nativeOnProcessorError;
      }
      get parameters() {
        if (this._parameters === null) {
          return this._nativeAudioWorkletNode.parameters;
        }
        return this._parameters;
      }
      get port() {
        return this._nativeAudioWorkletNode.port;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/copy-from-channel.js
  function copyFromChannel(audioBuffer, parent, key, channelNumber, bufferOffset) {
    if (typeof audioBuffer.copyFromChannel === "function") {
      if (parent[key].byteLength === 0) {
        parent[key] = new Float32Array(128);
      }
      audioBuffer.copyFromChannel(parent[key], channelNumber, bufferOffset);
    } else {
      const channelData = audioBuffer.getChannelData(channelNumber);
      if (parent[key].byteLength === 0) {
        parent[key] = channelData.slice(bufferOffset, bufferOffset + 128);
      } else {
        const slicedInput = new Float32Array(channelData.buffer, bufferOffset * Float32Array.BYTES_PER_ELEMENT, 128);
        parent[key].set(slicedInput);
      }
    }
  }

  // node_modules/standardized-audio-context/build/es2019/helpers/copy-to-channel.js
  var copyToChannel = (audioBuffer, parent, key, channelNumber, bufferOffset) => {
    if (typeof audioBuffer.copyToChannel === "function") {
      if (parent[key].byteLength !== 0) {
        audioBuffer.copyToChannel(parent[key], channelNumber, bufferOffset);
      }
    } else {
      if (parent[key].byteLength !== 0) {
        audioBuffer.getChannelData(channelNumber).set(parent[key], bufferOffset);
      }
    }
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/create-nested-arrays.js
  var createNestedArrays = (x, y) => {
    const arrays = [];
    for (let i = 0; i < x; i += 1) {
      const array = [];
      const length = typeof y === "number" ? y : y[i];
      for (let j = 0; j < length; j += 1) {
        array.push(new Float32Array(128));
      }
      arrays.push(array);
    }
    return arrays;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/get-audio-worklet-processor.js
  var getAudioWorkletProcessor = (nativeOfflineAudioContext, proxy) => {
    const nodeToProcessorMap = getValueForKey(NODE_TO_PROCESSOR_MAPS, nativeOfflineAudioContext);
    const nativeAudioWorkletNode = getNativeAudioNode(proxy);
    return getValueForKey(nodeToProcessorMap, nativeAudioWorkletNode);
  };

  // node_modules/standardized-audio-context/build/es2019/factories/audio-worklet-node-renderer-factory.js
  var processBuffer = async (proxy, renderedBuffer, nativeOfflineAudioContext, options, outputChannelCount, processorConstructor, exposeCurrentFrameAndCurrentTime2) => {
    const length = renderedBuffer === null ? Math.ceil(proxy.context.length / 128) * 128 : renderedBuffer.length;
    const numberOfInputChannels = options.channelCount * options.numberOfInputs;
    const numberOfOutputChannels = outputChannelCount.reduce((sum, value) => sum + value, 0);
    const processedBuffer = numberOfOutputChannels === 0 ? null : nativeOfflineAudioContext.createBuffer(numberOfOutputChannels, length, nativeOfflineAudioContext.sampleRate);
    if (processorConstructor === void 0) {
      throw new Error("Missing the processor constructor.");
    }
    const audioNodeConnections = getAudioNodeConnections(proxy);
    const audioWorkletProcessor = await getAudioWorkletProcessor(nativeOfflineAudioContext, proxy);
    const inputs = createNestedArrays(options.numberOfInputs, options.channelCount);
    const outputs = createNestedArrays(options.numberOfOutputs, outputChannelCount);
    const parameters = Array.from(proxy.parameters.keys()).reduce((prmtrs, name) => ({ ...prmtrs, [name]: new Float32Array(128) }), {});
    for (let i = 0; i < length; i += 128) {
      if (options.numberOfInputs > 0 && renderedBuffer !== null) {
        for (let j = 0; j < options.numberOfInputs; j += 1) {
          for (let k = 0; k < options.channelCount; k += 1) {
            copyFromChannel(renderedBuffer, inputs[j], k, k, i);
          }
        }
      }
      if (processorConstructor.parameterDescriptors !== void 0 && renderedBuffer !== null) {
        processorConstructor.parameterDescriptors.forEach(({ name }, index) => {
          copyFromChannel(renderedBuffer, parameters, name, numberOfInputChannels + index, i);
        });
      }
      for (let j = 0; j < options.numberOfInputs; j += 1) {
        for (let k = 0; k < outputChannelCount[j]; k += 1) {
          if (outputs[j][k].byteLength === 0) {
            outputs[j][k] = new Float32Array(128);
          }
        }
      }
      try {
        const potentiallyEmptyInputs = inputs.map((input, index) => {
          if (audioNodeConnections.activeInputs[index].size === 0) {
            return [];
          }
          return input;
        });
        const activeSourceFlag = exposeCurrentFrameAndCurrentTime2(i / nativeOfflineAudioContext.sampleRate, nativeOfflineAudioContext.sampleRate, () => audioWorkletProcessor.process(potentiallyEmptyInputs, outputs, parameters));
        if (processedBuffer !== null) {
          for (let j = 0, outputChannelSplitterNodeOutput = 0; j < options.numberOfOutputs; j += 1) {
            for (let k = 0; k < outputChannelCount[j]; k += 1) {
              copyToChannel(processedBuffer, outputs[j], k, outputChannelSplitterNodeOutput + k, i);
            }
            outputChannelSplitterNodeOutput += outputChannelCount[j];
          }
        }
        if (!activeSourceFlag) {
          break;
        }
      } catch (error) {
        proxy.dispatchEvent(new ErrorEvent("processorerror", {
          colno: error.colno,
          filename: error.filename,
          lineno: error.lineno,
          message: error.message
        }));
        break;
      }
    }
    return processedBuffer;
  };
  var createAudioWorkletNodeRendererFactory = (connectAudioParam2, connectMultipleOutputs2, createNativeAudioBufferSourceNode2, createNativeChannelMergerNode2, createNativeChannelSplitterNode2, createNativeConstantSourceNode2, createNativeGainNode2, deleteUnrenderedAudioWorkletNode2, disconnectMultipleOutputs2, exposeCurrentFrameAndCurrentTime2, getNativeAudioNode2, nativeAudioWorkletNodeConstructor2, nativeOfflineAudioContextConstructor2, renderAutomation2, renderInputsOfAudioNode2, renderNativeOfflineAudioContext2) => {
    return (name, options, processorConstructor) => {
      const renderedNativeAudioNodes = /* @__PURE__ */ new WeakMap();
      let processedBufferPromise = null;
      const createAudioNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeAudioWorkletNode = getNativeAudioNode2(proxy);
        let nativeOutputNodes = null;
        const nativeAudioWorkletNodeIsOwnedByContext = isOwnedByContext(nativeAudioWorkletNode, nativeOfflineAudioContext);
        const outputChannelCount = Array.isArray(options.outputChannelCount) ? options.outputChannelCount : Array.from(options.outputChannelCount);
        if (nativeAudioWorkletNodeConstructor2 === null) {
          const numberOfOutputChannels = outputChannelCount.reduce((sum, value) => sum + value, 0);
          const outputChannelSplitterNode = createNativeChannelSplitterNode2(nativeOfflineAudioContext, {
            channelCount: Math.max(1, numberOfOutputChannels),
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            numberOfOutputs: Math.max(1, numberOfOutputChannels)
          });
          const outputChannelMergerNodes = [];
          for (let i = 0; i < proxy.numberOfOutputs; i += 1) {
            outputChannelMergerNodes.push(createNativeChannelMergerNode2(nativeOfflineAudioContext, {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "speakers",
              numberOfInputs: outputChannelCount[i]
            }));
          }
          const outputGainNode = createNativeGainNode2(nativeOfflineAudioContext, {
            channelCount: options.channelCount,
            channelCountMode: options.channelCountMode,
            channelInterpretation: options.channelInterpretation,
            gain: 1
          });
          outputGainNode.connect = connectMultipleOutputs2.bind(null, outputChannelMergerNodes);
          outputGainNode.disconnect = disconnectMultipleOutputs2.bind(null, outputChannelMergerNodes);
          nativeOutputNodes = [outputChannelSplitterNode, outputChannelMergerNodes, outputGainNode];
        } else if (!nativeAudioWorkletNodeIsOwnedByContext) {
          nativeAudioWorkletNode = new nativeAudioWorkletNodeConstructor2(nativeOfflineAudioContext, name);
        }
        renderedNativeAudioNodes.set(nativeOfflineAudioContext, nativeOutputNodes === null ? nativeAudioWorkletNode : nativeOutputNodes[2]);
        if (nativeOutputNodes !== null) {
          if (processedBufferPromise === null) {
            if (processorConstructor === void 0) {
              throw new Error("Missing the processor constructor.");
            }
            if (nativeOfflineAudioContextConstructor2 === null) {
              throw new Error("Missing the native OfflineAudioContext constructor.");
            }
            const numberOfInputChannels = proxy.channelCount * proxy.numberOfInputs;
            const numberOfParameters = processorConstructor.parameterDescriptors === void 0 ? 0 : processorConstructor.parameterDescriptors.length;
            const numberOfChannels = numberOfInputChannels + numberOfParameters;
            const renderBuffer = async () => {
              const partialOfflineAudioContext = new nativeOfflineAudioContextConstructor2(
                numberOfChannels,
                // Ceil the length to the next full render quantum.
                // Bug #17: Safari does not yet expose the length.
                Math.ceil(proxy.context.length / 128) * 128,
                nativeOfflineAudioContext.sampleRate
              );
              const gainNodes = [];
              const inputChannelSplitterNodes = [];
              for (let i = 0; i < options.numberOfInputs; i += 1) {
                gainNodes.push(createNativeGainNode2(partialOfflineAudioContext, {
                  channelCount: options.channelCount,
                  channelCountMode: options.channelCountMode,
                  channelInterpretation: options.channelInterpretation,
                  gain: 1
                }));
                inputChannelSplitterNodes.push(createNativeChannelSplitterNode2(partialOfflineAudioContext, {
                  channelCount: options.channelCount,
                  channelCountMode: "explicit",
                  channelInterpretation: "discrete",
                  numberOfOutputs: options.channelCount
                }));
              }
              const constantSourceNodes = await Promise.all(Array.from(proxy.parameters.values()).map(async (audioParam) => {
                const constantSourceNode = createNativeConstantSourceNode2(partialOfflineAudioContext, {
                  channelCount: 1,
                  channelCountMode: "explicit",
                  channelInterpretation: "discrete",
                  offset: audioParam.value
                });
                await renderAutomation2(partialOfflineAudioContext, audioParam, constantSourceNode.offset);
                return constantSourceNode;
              }));
              const inputChannelMergerNode = createNativeChannelMergerNode2(partialOfflineAudioContext, {
                channelCount: 1,
                channelCountMode: "explicit",
                channelInterpretation: "speakers",
                numberOfInputs: Math.max(1, numberOfInputChannels + numberOfParameters)
              });
              for (let i = 0; i < options.numberOfInputs; i += 1) {
                gainNodes[i].connect(inputChannelSplitterNodes[i]);
                for (let j = 0; j < options.channelCount; j += 1) {
                  inputChannelSplitterNodes[i].connect(inputChannelMergerNode, j, i * options.channelCount + j);
                }
              }
              for (const [index, constantSourceNode] of constantSourceNodes.entries()) {
                constantSourceNode.connect(inputChannelMergerNode, 0, numberOfInputChannels + index);
                constantSourceNode.start(0);
              }
              inputChannelMergerNode.connect(partialOfflineAudioContext.destination);
              await Promise.all(gainNodes.map((gainNode) => renderInputsOfAudioNode2(proxy, partialOfflineAudioContext, gainNode)));
              return renderNativeOfflineAudioContext2(partialOfflineAudioContext);
            };
            processedBufferPromise = processBuffer(proxy, numberOfChannels === 0 ? null : await renderBuffer(), nativeOfflineAudioContext, options, outputChannelCount, processorConstructor, exposeCurrentFrameAndCurrentTime2);
          }
          const processedBuffer = await processedBufferPromise;
          const audioBufferSourceNode = createNativeAudioBufferSourceNode2(nativeOfflineAudioContext, {
            buffer: null,
            channelCount: 2,
            channelCountMode: "max",
            channelInterpretation: "speakers",
            loop: false,
            loopEnd: 0,
            loopStart: 0,
            playbackRate: 1
          });
          const [outputChannelSplitterNode, outputChannelMergerNodes, outputGainNode] = nativeOutputNodes;
          if (processedBuffer !== null) {
            audioBufferSourceNode.buffer = processedBuffer;
            audioBufferSourceNode.start(0);
          }
          audioBufferSourceNode.connect(outputChannelSplitterNode);
          for (let i = 0, outputChannelSplitterNodeOutput = 0; i < proxy.numberOfOutputs; i += 1) {
            const outputChannelMergerNode = outputChannelMergerNodes[i];
            for (let j = 0; j < outputChannelCount[i]; j += 1) {
              outputChannelSplitterNode.connect(outputChannelMergerNode, outputChannelSplitterNodeOutput + j, j);
            }
            outputChannelSplitterNodeOutput += outputChannelCount[i];
          }
          return outputGainNode;
        }
        if (!nativeAudioWorkletNodeIsOwnedByContext) {
          for (const [nm, audioParam] of proxy.parameters.entries()) {
            await renderAutomation2(
              nativeOfflineAudioContext,
              audioParam,
              // @todo The definition that TypeScript uses of the AudioParamMap is lacking many methods.
              nativeAudioWorkletNode.parameters.get(nm)
            );
          }
        } else {
          for (const [nm, audioParam] of proxy.parameters.entries()) {
            await connectAudioParam2(
              nativeOfflineAudioContext,
              audioParam,
              // @todo The definition that TypeScript uses of the AudioParamMap is lacking many methods.
              nativeAudioWorkletNode.parameters.get(nm)
            );
          }
        }
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeAudioWorkletNode);
        return nativeAudioWorkletNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          deleteUnrenderedAudioWorkletNode2(nativeOfflineAudioContext, proxy);
          const renderedNativeAudioWorkletNodeOrGainNode = renderedNativeAudioNodes.get(nativeOfflineAudioContext);
          if (renderedNativeAudioWorkletNodeOrGainNode !== void 0) {
            return Promise.resolve(renderedNativeAudioWorkletNodeOrGainNode);
          }
          return createAudioNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/base-audio-context-constructor.js
  var createBaseAudioContextConstructor = (addAudioWorkletModule2, analyserNodeConstructor2, audioBufferConstructor2, audioBufferSourceNodeConstructor2, biquadFilterNodeConstructor2, channelMergerNodeConstructor2, channelSplitterNodeConstructor2, constantSourceNodeConstructor2, convolverNodeConstructor2, decodeAudioData2, delayNodeConstructor2, dynamicsCompressorNodeConstructor2, gainNodeConstructor2, iIRFilterNodeConstructor2, minimalBaseAudioContextConstructor2, oscillatorNodeConstructor2, pannerNodeConstructor2, periodicWaveConstructor2, stereoPannerNodeConstructor2, waveShaperNodeConstructor2) => {
    return class BaseAudioContext extends minimalBaseAudioContextConstructor2 {
      constructor(_nativeContext, numberOfChannels) {
        super(_nativeContext, numberOfChannels);
        this._nativeContext = _nativeContext;
        this._audioWorklet = addAudioWorkletModule2 === void 0 ? void 0 : {
          addModule: (moduleURL, options) => {
            return addAudioWorkletModule2(this, moduleURL, options);
          }
        };
      }
      get audioWorklet() {
        return this._audioWorklet;
      }
      createAnalyser() {
        return new analyserNodeConstructor2(this);
      }
      createBiquadFilter() {
        return new biquadFilterNodeConstructor2(this);
      }
      createBuffer(numberOfChannels, length, sampleRate) {
        return new audioBufferConstructor2({ length, numberOfChannels, sampleRate });
      }
      createBufferSource() {
        return new audioBufferSourceNodeConstructor2(this);
      }
      createChannelMerger(numberOfInputs = 6) {
        return new channelMergerNodeConstructor2(this, { numberOfInputs });
      }
      createChannelSplitter(numberOfOutputs = 6) {
        return new channelSplitterNodeConstructor2(this, { numberOfOutputs });
      }
      createConstantSource() {
        return new constantSourceNodeConstructor2(this);
      }
      createConvolver() {
        return new convolverNodeConstructor2(this);
      }
      createDelay(maxDelayTime = 1) {
        return new delayNodeConstructor2(this, { maxDelayTime });
      }
      createDynamicsCompressor() {
        return new dynamicsCompressorNodeConstructor2(this);
      }
      createGain() {
        return new gainNodeConstructor2(this);
      }
      createIIRFilter(feedforward, feedback) {
        return new iIRFilterNodeConstructor2(this, { feedback, feedforward });
      }
      createOscillator() {
        return new oscillatorNodeConstructor2(this);
      }
      createPanner() {
        return new pannerNodeConstructor2(this);
      }
      createPeriodicWave(real, imag, constraints = { disableNormalization: false }) {
        return new periodicWaveConstructor2(this, { ...constraints, imag, real });
      }
      createStereoPanner() {
        return new stereoPannerNodeConstructor2(this);
      }
      createWaveShaper() {
        return new waveShaperNodeConstructor2(this);
      }
      decodeAudioData(audioData, successCallback, errorCallback) {
        return decodeAudioData2(this._nativeContext, audioData).then((audioBuffer) => {
          if (typeof successCallback === "function") {
            successCallback(audioBuffer);
          }
          return audioBuffer;
        }, (err) => {
          if (typeof errorCallback === "function") {
            errorCallback(err);
          }
          throw err;
        });
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/biquad-filter-node-constructor.js
  var DEFAULT_OPTIONS5 = {
    Q: 1,
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    detune: 0,
    frequency: 350,
    gain: 0,
    type: "lowpass"
  };
  var createBiquadFilterNodeConstructor = (audioNodeConstructor2, createAudioParam2, createBiquadFilterNodeRenderer2, createInvalidAccessError2, createNativeBiquadFilterNode2, getNativeContext2, isNativeOfflineAudioContext2, setAudioNodeTailTime2) => {
    return class BiquadFilterNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const mergedOptions = { ...DEFAULT_OPTIONS5, ...options };
        const nativeBiquadFilterNode = createNativeBiquadFilterNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const biquadFilterNodeRenderer = isOffline ? createBiquadFilterNodeRenderer2() : null;
        super(context2, false, nativeBiquadFilterNode, biquadFilterNodeRenderer);
        this._Q = createAudioParam2(this, isOffline, nativeBiquadFilterNode.Q, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
        this._detune = createAudioParam2(this, isOffline, nativeBiquadFilterNode.detune, 1200 * Math.log2(MOST_POSITIVE_SINGLE_FLOAT), -1200 * Math.log2(MOST_POSITIVE_SINGLE_FLOAT));
        this._frequency = createAudioParam2(this, isOffline, nativeBiquadFilterNode.frequency, context2.sampleRate / 2, 0);
        this._gain = createAudioParam2(this, isOffline, nativeBiquadFilterNode.gain, 40 * Math.log10(MOST_POSITIVE_SINGLE_FLOAT), MOST_NEGATIVE_SINGLE_FLOAT);
        this._nativeBiquadFilterNode = nativeBiquadFilterNode;
        setAudioNodeTailTime2(this, 1);
      }
      get detune() {
        return this._detune;
      }
      get frequency() {
        return this._frequency;
      }
      get gain() {
        return this._gain;
      }
      get Q() {
        return this._Q;
      }
      get type() {
        return this._nativeBiquadFilterNode.type;
      }
      set type(value) {
        this._nativeBiquadFilterNode.type = value;
      }
      getFrequencyResponse(frequencyHz, magResponse, phaseResponse) {
        try {
          this._nativeBiquadFilterNode.getFrequencyResponse(frequencyHz, magResponse, phaseResponse);
        } catch (err) {
          if (err.code === 11) {
            throw createInvalidAccessError2();
          }
          throw err;
        }
        if (frequencyHz.length !== magResponse.length || magResponse.length !== phaseResponse.length) {
          throw createInvalidAccessError2();
        }
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/biquad-filter-node-renderer-factory.js
  var createBiquadFilterNodeRendererFactory = (connectAudioParam2, createNativeBiquadFilterNode2, getNativeAudioNode2, renderAutomation2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeBiquadFilterNodes = /* @__PURE__ */ new WeakMap();
      const createBiquadFilterNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeBiquadFilterNode = getNativeAudioNode2(proxy);
        const nativeBiquadFilterNodeIsOwnedByContext = isOwnedByContext(nativeBiquadFilterNode, nativeOfflineAudioContext);
        if (!nativeBiquadFilterNodeIsOwnedByContext) {
          const options = {
            Q: nativeBiquadFilterNode.Q.value,
            channelCount: nativeBiquadFilterNode.channelCount,
            channelCountMode: nativeBiquadFilterNode.channelCountMode,
            channelInterpretation: nativeBiquadFilterNode.channelInterpretation,
            detune: nativeBiquadFilterNode.detune.value,
            frequency: nativeBiquadFilterNode.frequency.value,
            gain: nativeBiquadFilterNode.gain.value,
            type: nativeBiquadFilterNode.type
          };
          nativeBiquadFilterNode = createNativeBiquadFilterNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeBiquadFilterNodes.set(nativeOfflineAudioContext, nativeBiquadFilterNode);
        if (!nativeBiquadFilterNodeIsOwnedByContext) {
          await renderAutomation2(nativeOfflineAudioContext, proxy.Q, nativeBiquadFilterNode.Q);
          await renderAutomation2(nativeOfflineAudioContext, proxy.detune, nativeBiquadFilterNode.detune);
          await renderAutomation2(nativeOfflineAudioContext, proxy.frequency, nativeBiquadFilterNode.frequency);
          await renderAutomation2(nativeOfflineAudioContext, proxy.gain, nativeBiquadFilterNode.gain);
        } else {
          await connectAudioParam2(nativeOfflineAudioContext, proxy.Q, nativeBiquadFilterNode.Q);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.detune, nativeBiquadFilterNode.detune);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.frequency, nativeBiquadFilterNode.frequency);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.gain, nativeBiquadFilterNode.gain);
        }
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeBiquadFilterNode);
        return nativeBiquadFilterNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeBiquadFilterNode = renderedNativeBiquadFilterNodes.get(nativeOfflineAudioContext);
          if (renderedNativeBiquadFilterNode !== void 0) {
            return Promise.resolve(renderedNativeBiquadFilterNode);
          }
          return createBiquadFilterNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/cache-test-result.js
  var createCacheTestResult = (ongoingTests, testResults) => {
    return (tester, test) => {
      const cachedTestResult = testResults.get(tester);
      if (cachedTestResult !== void 0) {
        return cachedTestResult;
      }
      const ongoingTest = ongoingTests.get(tester);
      if (ongoingTest !== void 0) {
        return ongoingTest;
      }
      try {
        const synchronousTestResult = test();
        if (synchronousTestResult instanceof Promise) {
          ongoingTests.set(tester, synchronousTestResult);
          return synchronousTestResult.catch(() => false).then((finalTestResult) => {
            ongoingTests.delete(tester);
            testResults.set(tester, finalTestResult);
            return finalTestResult;
          });
        }
        testResults.set(tester, synchronousTestResult);
        return synchronousTestResult;
      } catch {
        testResults.set(tester, false);
        return false;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/channel-merger-node-constructor.js
  var DEFAULT_OPTIONS6 = {
    channelCount: 1,
    channelCountMode: "explicit",
    channelInterpretation: "speakers",
    numberOfInputs: 6
  };
  var createChannelMergerNodeConstructor = (audioNodeConstructor2, createChannelMergerNodeRenderer2, createNativeChannelMergerNode2, getNativeContext2, isNativeOfflineAudioContext2) => {
    return class ChannelMergerNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const mergedOptions = { ...DEFAULT_OPTIONS6, ...options };
        const nativeChannelMergerNode = createNativeChannelMergerNode2(nativeContext, mergedOptions);
        const channelMergerNodeRenderer = isNativeOfflineAudioContext2(nativeContext) ? createChannelMergerNodeRenderer2() : null;
        super(context2, false, nativeChannelMergerNode, channelMergerNodeRenderer);
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/channel-merger-node-renderer-factory.js
  var createChannelMergerNodeRendererFactory = (createNativeChannelMergerNode2, getNativeAudioNode2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeAudioNodes = /* @__PURE__ */ new WeakMap();
      const createAudioNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeAudioNode = getNativeAudioNode2(proxy);
        const nativeAudioNodeIsOwnedByContext = isOwnedByContext(nativeAudioNode, nativeOfflineAudioContext);
        if (!nativeAudioNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeAudioNode.channelCount,
            channelCountMode: nativeAudioNode.channelCountMode,
            channelInterpretation: nativeAudioNode.channelInterpretation,
            numberOfInputs: nativeAudioNode.numberOfInputs
          };
          nativeAudioNode = createNativeChannelMergerNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeAudioNodes.set(nativeOfflineAudioContext, nativeAudioNode);
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeAudioNode);
        return nativeAudioNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeAudioNode = renderedNativeAudioNodes.get(nativeOfflineAudioContext);
          if (renderedNativeAudioNode !== void 0) {
            return Promise.resolve(renderedNativeAudioNode);
          }
          return createAudioNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/channel-splitter-node-constructor.js
  var DEFAULT_OPTIONS7 = {
    channelCount: 6,
    channelCountMode: "explicit",
    channelInterpretation: "discrete",
    numberOfOutputs: 6
  };
  var createChannelSplitterNodeConstructor = (audioNodeConstructor2, createChannelSplitterNodeRenderer2, createNativeChannelSplitterNode2, getNativeContext2, isNativeOfflineAudioContext2, sanitizeChannelSplitterOptions2) => {
    return class ChannelSplitterNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const mergedOptions = sanitizeChannelSplitterOptions2({ ...DEFAULT_OPTIONS7, ...options });
        const nativeChannelSplitterNode = createNativeChannelSplitterNode2(nativeContext, mergedOptions);
        const channelSplitterNodeRenderer = isNativeOfflineAudioContext2(nativeContext) ? createChannelSplitterNodeRenderer2() : null;
        super(context2, false, nativeChannelSplitterNode, channelSplitterNodeRenderer);
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/channel-splitter-node-renderer-factory.js
  var createChannelSplitterNodeRendererFactory = (createNativeChannelSplitterNode2, getNativeAudioNode2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeAudioNodes = /* @__PURE__ */ new WeakMap();
      const createAudioNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeAudioNode = getNativeAudioNode2(proxy);
        const nativeAudioNodeIsOwnedByContext = isOwnedByContext(nativeAudioNode, nativeOfflineAudioContext);
        if (!nativeAudioNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeAudioNode.channelCount,
            channelCountMode: nativeAudioNode.channelCountMode,
            channelInterpretation: nativeAudioNode.channelInterpretation,
            numberOfOutputs: nativeAudioNode.numberOfOutputs
          };
          nativeAudioNode = createNativeChannelSplitterNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeAudioNodes.set(nativeOfflineAudioContext, nativeAudioNode);
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeAudioNode);
        return nativeAudioNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeAudioNode = renderedNativeAudioNodes.get(nativeOfflineAudioContext);
          if (renderedNativeAudioNode !== void 0) {
            return Promise.resolve(renderedNativeAudioNode);
          }
          return createAudioNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/connect-audio-param.js
  var createConnectAudioParam = (renderInputsOfAudioParam2) => {
    return (nativeOfflineAudioContext, audioParam, nativeAudioParam) => {
      return renderInputsOfAudioParam2(audioParam, nativeOfflineAudioContext, nativeAudioParam);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/connect-multiple-outputs.js
  var createConnectMultipleOutputs = (createIndexSizeError2) => {
    return (outputAudioNodes, destination, output = 0, input = 0) => {
      const outputAudioNode = outputAudioNodes[output];
      if (outputAudioNode === void 0) {
        throw createIndexSizeError2();
      }
      if (isNativeAudioNode(destination)) {
        return outputAudioNode.connect(destination, 0, input);
      }
      return outputAudioNode.connect(destination, 0);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/connected-native-audio-buffer-source-node-factory.js
  var createConnectedNativeAudioBufferSourceNodeFactory = (createNativeAudioBufferSourceNode2) => {
    return (nativeContext, nativeAudioNode) => {
      const nativeAudioBufferSourceNode = createNativeAudioBufferSourceNode2(nativeContext, {
        buffer: null,
        channelCount: 2,
        channelCountMode: "max",
        channelInterpretation: "speakers",
        loop: false,
        loopEnd: 0,
        loopStart: 0,
        playbackRate: 1
      });
      const nativeAudioBuffer = nativeContext.createBuffer(1, 2, 44100);
      nativeAudioBufferSourceNode.buffer = nativeAudioBuffer;
      nativeAudioBufferSourceNode.loop = true;
      nativeAudioBufferSourceNode.connect(nativeAudioNode);
      nativeAudioBufferSourceNode.start();
      return () => {
        nativeAudioBufferSourceNode.stop();
        nativeAudioBufferSourceNode.disconnect(nativeAudioNode);
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/constant-source-node-constructor.js
  var DEFAULT_OPTIONS8 = {
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    offset: 1
  };
  var createConstantSourceNodeConstructor = (audioNodeConstructor2, createAudioParam2, createConstantSourceNodeRendererFactory2, createNativeConstantSourceNode2, getNativeContext2, isNativeOfflineAudioContext2, wrapEventListener2) => {
    return class ConstantSourceNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const mergedOptions = { ...DEFAULT_OPTIONS8, ...options };
        const nativeConstantSourceNode = createNativeConstantSourceNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const constantSourceNodeRenderer = isOffline ? createConstantSourceNodeRendererFactory2() : null;
        super(context2, false, nativeConstantSourceNode, constantSourceNodeRenderer);
        this._constantSourceNodeRenderer = constantSourceNodeRenderer;
        this._nativeConstantSourceNode = nativeConstantSourceNode;
        this._offset = createAudioParam2(this, isOffline, nativeConstantSourceNode.offset, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
        this._onended = null;
      }
      get offset() {
        return this._offset;
      }
      get onended() {
        return this._onended;
      }
      set onended(value) {
        const wrappedListener = typeof value === "function" ? wrapEventListener2(this, value) : null;
        this._nativeConstantSourceNode.onended = wrappedListener;
        const nativeOnEnded = this._nativeConstantSourceNode.onended;
        this._onended = nativeOnEnded !== null && nativeOnEnded === wrappedListener ? value : nativeOnEnded;
      }
      start(when = 0) {
        this._nativeConstantSourceNode.start(when);
        if (this._constantSourceNodeRenderer !== null) {
          this._constantSourceNodeRenderer.start = when;
        }
        if (this.context.state !== "closed") {
          setInternalStateToActive(this);
          const resetInternalStateToPassive = () => {
            this._nativeConstantSourceNode.removeEventListener("ended", resetInternalStateToPassive);
            if (isActiveAudioNode(this)) {
              setInternalStateToPassive(this);
            }
          };
          this._nativeConstantSourceNode.addEventListener("ended", resetInternalStateToPassive);
        }
      }
      stop(when = 0) {
        this._nativeConstantSourceNode.stop(when);
        if (this._constantSourceNodeRenderer !== null) {
          this._constantSourceNodeRenderer.stop = when;
        }
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/constant-source-node-renderer-factory.js
  var createConstantSourceNodeRendererFactory = (connectAudioParam2, createNativeConstantSourceNode2, getNativeAudioNode2, renderAutomation2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeConstantSourceNodes = /* @__PURE__ */ new WeakMap();
      let start2 = null;
      let stop = null;
      const createConstantSourceNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeConstantSourceNode = getNativeAudioNode2(proxy);
        const nativeConstantSourceNodeIsOwnedByContext = isOwnedByContext(nativeConstantSourceNode, nativeOfflineAudioContext);
        if (!nativeConstantSourceNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeConstantSourceNode.channelCount,
            channelCountMode: nativeConstantSourceNode.channelCountMode,
            channelInterpretation: nativeConstantSourceNode.channelInterpretation,
            offset: nativeConstantSourceNode.offset.value
          };
          nativeConstantSourceNode = createNativeConstantSourceNode2(nativeOfflineAudioContext, options);
          if (start2 !== null) {
            nativeConstantSourceNode.start(start2);
          }
          if (stop !== null) {
            nativeConstantSourceNode.stop(stop);
          }
        }
        renderedNativeConstantSourceNodes.set(nativeOfflineAudioContext, nativeConstantSourceNode);
        if (!nativeConstantSourceNodeIsOwnedByContext) {
          await renderAutomation2(nativeOfflineAudioContext, proxy.offset, nativeConstantSourceNode.offset);
        } else {
          await connectAudioParam2(nativeOfflineAudioContext, proxy.offset, nativeConstantSourceNode.offset);
        }
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeConstantSourceNode);
        return nativeConstantSourceNode;
      };
      return {
        set start(value) {
          start2 = value;
        },
        set stop(value) {
          stop = value;
        },
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeConstantSourceNode = renderedNativeConstantSourceNodes.get(nativeOfflineAudioContext);
          if (renderedNativeConstantSourceNode !== void 0) {
            return Promise.resolve(renderedNativeConstantSourceNode);
          }
          return createConstantSourceNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/convert-number-to-unsigned-long.js
  var createConvertNumberToUnsignedLong = (unit32Array) => {
    return (value) => {
      unit32Array[0] = value;
      return unit32Array[0];
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/convolver-node-constructor.js
  var DEFAULT_OPTIONS9 = {
    buffer: null,
    channelCount: 2,
    channelCountMode: "clamped-max",
    channelInterpretation: "speakers",
    disableNormalization: false
  };
  var createConvolverNodeConstructor = (audioNodeConstructor2, createConvolverNodeRenderer2, createNativeConvolverNode2, getNativeContext2, isNativeOfflineAudioContext2, setAudioNodeTailTime2) => {
    return class ConvolverNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const mergedOptions = { ...DEFAULT_OPTIONS9, ...options };
        const nativeConvolverNode = createNativeConvolverNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const convolverNodeRenderer = isOffline ? createConvolverNodeRenderer2() : null;
        super(context2, false, nativeConvolverNode, convolverNodeRenderer);
        this._isBufferNullified = false;
        this._nativeConvolverNode = nativeConvolverNode;
        if (mergedOptions.buffer !== null) {
          setAudioNodeTailTime2(this, mergedOptions.buffer.duration);
        }
      }
      get buffer() {
        if (this._isBufferNullified) {
          return null;
        }
        return this._nativeConvolverNode.buffer;
      }
      set buffer(value) {
        this._nativeConvolverNode.buffer = value;
        if (value === null && this._nativeConvolverNode.buffer !== null) {
          const nativeContext = this._nativeConvolverNode.context;
          this._nativeConvolverNode.buffer = nativeContext.createBuffer(1, 1, nativeContext.sampleRate);
          this._isBufferNullified = true;
          setAudioNodeTailTime2(this, 0);
        } else {
          this._isBufferNullified = false;
          setAudioNodeTailTime2(this, this._nativeConvolverNode.buffer === null ? 0 : this._nativeConvolverNode.buffer.duration);
        }
      }
      get normalize() {
        return this._nativeConvolverNode.normalize;
      }
      set normalize(value) {
        this._nativeConvolverNode.normalize = value;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/convolver-node-renderer-factory.js
  var createConvolverNodeRendererFactory = (createNativeConvolverNode2, getNativeAudioNode2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeConvolverNodes = /* @__PURE__ */ new WeakMap();
      const createConvolverNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeConvolverNode = getNativeAudioNode2(proxy);
        const nativeConvolverNodeIsOwnedByContext = isOwnedByContext(nativeConvolverNode, nativeOfflineAudioContext);
        if (!nativeConvolverNodeIsOwnedByContext) {
          const options = {
            buffer: nativeConvolverNode.buffer,
            channelCount: nativeConvolverNode.channelCount,
            channelCountMode: nativeConvolverNode.channelCountMode,
            channelInterpretation: nativeConvolverNode.channelInterpretation,
            disableNormalization: !nativeConvolverNode.normalize
          };
          nativeConvolverNode = createNativeConvolverNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeConvolverNodes.set(nativeOfflineAudioContext, nativeConvolverNode);
        if (isNativeAudioNodeFaker(nativeConvolverNode)) {
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeConvolverNode.inputs[0]);
        } else {
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeConvolverNode);
        }
        return nativeConvolverNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeConvolverNode = renderedNativeConvolverNodes.get(nativeOfflineAudioContext);
          if (renderedNativeConvolverNode !== void 0) {
            return Promise.resolve(renderedNativeConvolverNode);
          }
          return createConvolverNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/create-native-offline-audio-context.js
  var createCreateNativeOfflineAudioContext = (createNotSupportedError2, nativeOfflineAudioContextConstructor2) => {
    return (numberOfChannels, length, sampleRate) => {
      if (nativeOfflineAudioContextConstructor2 === null) {
        throw new Error("Missing the native OfflineAudioContext constructor.");
      }
      try {
        return new nativeOfflineAudioContextConstructor2(numberOfChannels, length, sampleRate);
      } catch (err) {
        if (err.name === "SyntaxError") {
          throw createNotSupportedError2();
        }
        throw err;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/data-clone-error.js
  var createDataCloneError = () => new DOMException("", "DataCloneError");

  // node_modules/standardized-audio-context/build/es2019/helpers/detach-array-buffer.js
  var detachArrayBuffer = (arrayBuffer) => {
    const { port1, port2 } = new MessageChannel();
    return new Promise((resolve) => {
      const closeAndResolve = () => {
        port2.onmessage = null;
        port1.close();
        port2.close();
        resolve();
      };
      port2.onmessage = () => closeAndResolve();
      try {
        port1.postMessage(arrayBuffer, [arrayBuffer]);
      } catch {
      } finally {
        closeAndResolve();
      }
    });
  };

  // node_modules/standardized-audio-context/build/es2019/factories/decode-audio-data.js
  var createDecodeAudioData = (audioBufferStore2, cacheTestResult2, createDataCloneError2, createEncodingError2, detachedArrayBuffers, getNativeContext2, isNativeContext2, testAudioBufferCopyChannelMethodsOutOfBoundsSupport2, testPromiseSupport2, wrapAudioBufferCopyChannelMethods2, wrapAudioBufferCopyChannelMethodsOutOfBounds2) => {
    return (anyContext, audioData) => {
      const nativeContext = isNativeContext2(anyContext) ? anyContext : getNativeContext2(anyContext);
      if (detachedArrayBuffers.has(audioData)) {
        const err = createDataCloneError2();
        return Promise.reject(err);
      }
      try {
        detachedArrayBuffers.add(audioData);
      } catch {
      }
      if (cacheTestResult2(testPromiseSupport2, () => testPromiseSupport2(nativeContext))) {
        return nativeContext.decodeAudioData(audioData).then((audioBuffer) => {
          detachArrayBuffer(audioData).catch(() => {
          });
          if (!cacheTestResult2(testAudioBufferCopyChannelMethodsOutOfBoundsSupport2, () => testAudioBufferCopyChannelMethodsOutOfBoundsSupport2(audioBuffer))) {
            wrapAudioBufferCopyChannelMethodsOutOfBounds2(audioBuffer);
          }
          audioBufferStore2.add(audioBuffer);
          return audioBuffer;
        });
      }
      return new Promise((resolve, reject) => {
        const complete = async () => {
          try {
            await detachArrayBuffer(audioData);
          } catch {
          }
        };
        const fail = (err) => {
          reject(err);
          complete();
        };
        try {
          nativeContext.decodeAudioData(audioData, (audioBuffer) => {
            if (typeof audioBuffer.copyFromChannel !== "function") {
              wrapAudioBufferCopyChannelMethods2(audioBuffer);
              wrapAudioBufferGetChannelDataMethod(audioBuffer);
            }
            audioBufferStore2.add(audioBuffer);
            complete().then(() => resolve(audioBuffer));
          }, (err) => {
            if (err === null) {
              fail(createEncodingError2());
            } else {
              fail(err);
            }
          });
        } catch (err) {
          fail(err);
        }
      });
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/decrement-cycle-counter.js
  var createDecrementCycleCounter = (connectNativeAudioNodeToNativeAudioNode2, cycleCounters, getAudioNodeConnections2, getNativeAudioNode2, getNativeAudioParam2, getNativeContext2, isActiveAudioNode2, isNativeOfflineAudioContext2) => {
    return (audioNode, count) => {
      const cycleCounter = cycleCounters.get(audioNode);
      if (cycleCounter === void 0) {
        throw new Error("Missing the expected cycle count.");
      }
      const nativeContext = getNativeContext2(audioNode.context);
      const isOffline = isNativeOfflineAudioContext2(nativeContext);
      if (cycleCounter === count) {
        cycleCounters.delete(audioNode);
        if (!isOffline && isActiveAudioNode2(audioNode)) {
          const nativeSourceAudioNode = getNativeAudioNode2(audioNode);
          const { outputs } = getAudioNodeConnections2(audioNode);
          for (const output of outputs) {
            if (isAudioNodeOutputConnection(output)) {
              const nativeDestinationAudioNode = getNativeAudioNode2(output[0]);
              connectNativeAudioNodeToNativeAudioNode2(nativeSourceAudioNode, nativeDestinationAudioNode, output[1], output[2]);
            } else {
              const nativeDestinationAudioParam = getNativeAudioParam2(output[0]);
              nativeSourceAudioNode.connect(nativeDestinationAudioParam, output[1]);
            }
          }
        }
      } else {
        cycleCounters.set(audioNode, cycleCounter - count);
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/delay-node-constructor.js
  var DEFAULT_OPTIONS10 = {
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    delayTime: 0,
    maxDelayTime: 1
  };
  var createDelayNodeConstructor = (audioNodeConstructor2, createAudioParam2, createDelayNodeRenderer2, createNativeDelayNode2, getNativeContext2, isNativeOfflineAudioContext2, setAudioNodeTailTime2) => {
    return class DelayNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const mergedOptions = { ...DEFAULT_OPTIONS10, ...options };
        const nativeDelayNode = createNativeDelayNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const delayNodeRenderer = isOffline ? createDelayNodeRenderer2(mergedOptions.maxDelayTime) : null;
        super(context2, false, nativeDelayNode, delayNodeRenderer);
        this._delayTime = createAudioParam2(this, isOffline, nativeDelayNode.delayTime);
        setAudioNodeTailTime2(this, mergedOptions.maxDelayTime);
      }
      get delayTime() {
        return this._delayTime;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/delay-node-renderer-factory.js
  var createDelayNodeRendererFactory = (connectAudioParam2, createNativeDelayNode2, getNativeAudioNode2, renderAutomation2, renderInputsOfAudioNode2) => {
    return (maxDelayTime) => {
      const renderedNativeDelayNodes = /* @__PURE__ */ new WeakMap();
      const createDelayNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeDelayNode = getNativeAudioNode2(proxy);
        const nativeDelayNodeIsOwnedByContext = isOwnedByContext(nativeDelayNode, nativeOfflineAudioContext);
        if (!nativeDelayNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeDelayNode.channelCount,
            channelCountMode: nativeDelayNode.channelCountMode,
            channelInterpretation: nativeDelayNode.channelInterpretation,
            delayTime: nativeDelayNode.delayTime.value,
            maxDelayTime
          };
          nativeDelayNode = createNativeDelayNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeDelayNodes.set(nativeOfflineAudioContext, nativeDelayNode);
        if (!nativeDelayNodeIsOwnedByContext) {
          await renderAutomation2(nativeOfflineAudioContext, proxy.delayTime, nativeDelayNode.delayTime);
        } else {
          await connectAudioParam2(nativeOfflineAudioContext, proxy.delayTime, nativeDelayNode.delayTime);
        }
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeDelayNode);
        return nativeDelayNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeDelayNode = renderedNativeDelayNodes.get(nativeOfflineAudioContext);
          if (renderedNativeDelayNode !== void 0) {
            return Promise.resolve(renderedNativeDelayNode);
          }
          return createDelayNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/delete-active-input-connection-to-audio-node.js
  var createDeleteActiveInputConnectionToAudioNode = (pickElementFromSet2) => {
    return (activeInputs, source, output, input) => {
      return pickElementFromSet2(activeInputs[input], (activeInputConnection) => activeInputConnection[0] === source && activeInputConnection[1] === output);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/delete-unrendered-audio-worklet-node.js
  var createDeleteUnrenderedAudioWorkletNode = (getUnrenderedAudioWorkletNodes2) => {
    return (nativeContext, audioWorkletNode) => {
      getUnrenderedAudioWorkletNodes2(nativeContext).delete(audioWorkletNode);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/guards/delay-node.js
  var isDelayNode = (audioNode) => {
    return "delayTime" in audioNode;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/detect-cycles.js
  var createDetectCycles = (audioParamAudioNodeStore2, getAudioNodeConnections2, getValueForKey2) => {
    return function detectCycles(chain, nextLink) {
      const audioNode = isAudioNode(nextLink) ? nextLink : getValueForKey2(audioParamAudioNodeStore2, nextLink);
      if (isDelayNode(audioNode)) {
        return [];
      }
      if (chain[0] === audioNode) {
        return [chain];
      }
      if (chain.includes(audioNode)) {
        return [];
      }
      const { outputs } = getAudioNodeConnections2(audioNode);
      return Array.from(outputs).map((outputConnection) => detectCycles([...chain, audioNode], outputConnection[0])).reduce((mergedCycles, nestedCycles) => mergedCycles.concat(nestedCycles), []);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/disconnect-multiple-outputs.js
  var getOutputAudioNodeAtIndex = (createIndexSizeError2, outputAudioNodes, output) => {
    const outputAudioNode = outputAudioNodes[output];
    if (outputAudioNode === void 0) {
      throw createIndexSizeError2();
    }
    return outputAudioNode;
  };
  var createDisconnectMultipleOutputs = (createIndexSizeError2) => {
    return (outputAudioNodes, destinationOrOutput = void 0, output = void 0, input = 0) => {
      if (destinationOrOutput === void 0) {
        return outputAudioNodes.forEach((outputAudioNode) => outputAudioNode.disconnect());
      }
      if (typeof destinationOrOutput === "number") {
        return getOutputAudioNodeAtIndex(createIndexSizeError2, outputAudioNodes, destinationOrOutput).disconnect();
      }
      if (isNativeAudioNode(destinationOrOutput)) {
        if (output === void 0) {
          return outputAudioNodes.forEach((outputAudioNode) => outputAudioNode.disconnect(destinationOrOutput));
        }
        if (input === void 0) {
          return getOutputAudioNodeAtIndex(createIndexSizeError2, outputAudioNodes, output).disconnect(destinationOrOutput, 0);
        }
        return getOutputAudioNodeAtIndex(createIndexSizeError2, outputAudioNodes, output).disconnect(destinationOrOutput, 0, input);
      }
      if (output === void 0) {
        return outputAudioNodes.forEach((outputAudioNode) => outputAudioNode.disconnect(destinationOrOutput));
      }
      return getOutputAudioNodeAtIndex(createIndexSizeError2, outputAudioNodes, output).disconnect(destinationOrOutput, 0);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/dynamics-compressor-node-constructor.js
  var DEFAULT_OPTIONS11 = {
    attack: 3e-3,
    channelCount: 2,
    channelCountMode: "clamped-max",
    channelInterpretation: "speakers",
    knee: 30,
    ratio: 12,
    release: 0.25,
    threshold: -24
  };
  var createDynamicsCompressorNodeConstructor = (audioNodeConstructor2, createAudioParam2, createDynamicsCompressorNodeRenderer2, createNativeDynamicsCompressorNode2, createNotSupportedError2, getNativeContext2, isNativeOfflineAudioContext2, setAudioNodeTailTime2) => {
    return class DynamicsCompressorNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const mergedOptions = { ...DEFAULT_OPTIONS11, ...options };
        const nativeDynamicsCompressorNode = createNativeDynamicsCompressorNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const dynamicsCompressorNodeRenderer = isOffline ? createDynamicsCompressorNodeRenderer2() : null;
        super(context2, false, nativeDynamicsCompressorNode, dynamicsCompressorNodeRenderer);
        this._attack = createAudioParam2(this, isOffline, nativeDynamicsCompressorNode.attack);
        this._knee = createAudioParam2(this, isOffline, nativeDynamicsCompressorNode.knee);
        this._nativeDynamicsCompressorNode = nativeDynamicsCompressorNode;
        this._ratio = createAudioParam2(this, isOffline, nativeDynamicsCompressorNode.ratio);
        this._release = createAudioParam2(this, isOffline, nativeDynamicsCompressorNode.release);
        this._threshold = createAudioParam2(this, isOffline, nativeDynamicsCompressorNode.threshold);
        setAudioNodeTailTime2(this, 6e-3);
      }
      get attack() {
        return this._attack;
      }
      // Bug #108: Safari allows a channelCount of three and above which is why the getter and setter needs to be overwritten here.
      get channelCount() {
        return this._nativeDynamicsCompressorNode.channelCount;
      }
      set channelCount(value) {
        const previousChannelCount = this._nativeDynamicsCompressorNode.channelCount;
        this._nativeDynamicsCompressorNode.channelCount = value;
        if (value > 2) {
          this._nativeDynamicsCompressorNode.channelCount = previousChannelCount;
          throw createNotSupportedError2();
        }
      }
      /*
       * Bug #109: Only Chrome and Firefox disallow a channelCountMode of 'max' yet which is why the getter and setter needs to be
       * overwritten here.
       */
      get channelCountMode() {
        return this._nativeDynamicsCompressorNode.channelCountMode;
      }
      set channelCountMode(value) {
        const previousChannelCount = this._nativeDynamicsCompressorNode.channelCountMode;
        this._nativeDynamicsCompressorNode.channelCountMode = value;
        if (value === "max") {
          this._nativeDynamicsCompressorNode.channelCountMode = previousChannelCount;
          throw createNotSupportedError2();
        }
      }
      get knee() {
        return this._knee;
      }
      get ratio() {
        return this._ratio;
      }
      get reduction() {
        if (typeof this._nativeDynamicsCompressorNode.reduction.value === "number") {
          return this._nativeDynamicsCompressorNode.reduction.value;
        }
        return this._nativeDynamicsCompressorNode.reduction;
      }
      get release() {
        return this._release;
      }
      get threshold() {
        return this._threshold;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/dynamics-compressor-node-renderer-factory.js
  var createDynamicsCompressorNodeRendererFactory = (connectAudioParam2, createNativeDynamicsCompressorNode2, getNativeAudioNode2, renderAutomation2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeDynamicsCompressorNodes = /* @__PURE__ */ new WeakMap();
      const createDynamicsCompressorNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeDynamicsCompressorNode = getNativeAudioNode2(proxy);
        const nativeDynamicsCompressorNodeIsOwnedByContext = isOwnedByContext(nativeDynamicsCompressorNode, nativeOfflineAudioContext);
        if (!nativeDynamicsCompressorNodeIsOwnedByContext) {
          const options = {
            attack: nativeDynamicsCompressorNode.attack.value,
            channelCount: nativeDynamicsCompressorNode.channelCount,
            channelCountMode: nativeDynamicsCompressorNode.channelCountMode,
            channelInterpretation: nativeDynamicsCompressorNode.channelInterpretation,
            knee: nativeDynamicsCompressorNode.knee.value,
            ratio: nativeDynamicsCompressorNode.ratio.value,
            release: nativeDynamicsCompressorNode.release.value,
            threshold: nativeDynamicsCompressorNode.threshold.value
          };
          nativeDynamicsCompressorNode = createNativeDynamicsCompressorNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeDynamicsCompressorNodes.set(nativeOfflineAudioContext, nativeDynamicsCompressorNode);
        if (!nativeDynamicsCompressorNodeIsOwnedByContext) {
          await renderAutomation2(nativeOfflineAudioContext, proxy.attack, nativeDynamicsCompressorNode.attack);
          await renderAutomation2(nativeOfflineAudioContext, proxy.knee, nativeDynamicsCompressorNode.knee);
          await renderAutomation2(nativeOfflineAudioContext, proxy.ratio, nativeDynamicsCompressorNode.ratio);
          await renderAutomation2(nativeOfflineAudioContext, proxy.release, nativeDynamicsCompressorNode.release);
          await renderAutomation2(nativeOfflineAudioContext, proxy.threshold, nativeDynamicsCompressorNode.threshold);
        } else {
          await connectAudioParam2(nativeOfflineAudioContext, proxy.attack, nativeDynamicsCompressorNode.attack);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.knee, nativeDynamicsCompressorNode.knee);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.ratio, nativeDynamicsCompressorNode.ratio);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.release, nativeDynamicsCompressorNode.release);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.threshold, nativeDynamicsCompressorNode.threshold);
        }
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeDynamicsCompressorNode);
        return nativeDynamicsCompressorNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeDynamicsCompressorNode = renderedNativeDynamicsCompressorNodes.get(nativeOfflineAudioContext);
          if (renderedNativeDynamicsCompressorNode !== void 0) {
            return Promise.resolve(renderedNativeDynamicsCompressorNode);
          }
          return createDynamicsCompressorNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/encoding-error.js
  var createEncodingError = () => new DOMException("", "EncodingError");

  // node_modules/standardized-audio-context/build/es2019/factories/evaluate-source.js
  var createEvaluateSource = (window3) => {
    return (source) => new Promise((resolve, reject) => {
      if (window3 === null) {
        reject(new SyntaxError());
        return;
      }
      const head = window3.document.head;
      if (head === null) {
        reject(new SyntaxError());
      } else {
        const script = window3.document.createElement("script");
        const blob = new Blob([source], { type: "application/javascript" });
        const url = URL.createObjectURL(blob);
        const originalOnErrorHandler = window3.onerror;
        const removeErrorEventListenerAndRevokeUrl = () => {
          window3.onerror = originalOnErrorHandler;
          URL.revokeObjectURL(url);
        };
        window3.onerror = (message, src, lineno, colno, error) => {
          if (src === url || src === window3.location.href && lineno === 1 && colno === 1) {
            removeErrorEventListenerAndRevokeUrl();
            reject(error);
            return false;
          }
          if (originalOnErrorHandler !== null) {
            return originalOnErrorHandler(message, src, lineno, colno, error);
          }
        };
        script.onerror = () => {
          removeErrorEventListenerAndRevokeUrl();
          reject(new SyntaxError());
        };
        script.onload = () => {
          removeErrorEventListenerAndRevokeUrl();
          resolve();
        };
        script.src = url;
        script.type = "module";
        head.appendChild(script);
      }
    });
  };

  // node_modules/standardized-audio-context/build/es2019/factories/event-target-constructor.js
  var createEventTargetConstructor = (wrapEventListener2) => {
    return class EventTarget {
      constructor(_nativeEventTarget) {
        this._nativeEventTarget = _nativeEventTarget;
        this._listeners = /* @__PURE__ */ new WeakMap();
      }
      addEventListener(type, listener, options) {
        if (listener !== null) {
          let wrappedEventListener = this._listeners.get(listener);
          if (wrappedEventListener === void 0) {
            wrappedEventListener = wrapEventListener2(this, listener);
            if (typeof listener === "function") {
              this._listeners.set(listener, wrappedEventListener);
            }
          }
          this._nativeEventTarget.addEventListener(type, wrappedEventListener, options);
        }
      }
      dispatchEvent(event) {
        return this._nativeEventTarget.dispatchEvent(event);
      }
      removeEventListener(type, listener, options) {
        const wrappedEventListener = listener === null ? void 0 : this._listeners.get(listener);
        this._nativeEventTarget.removeEventListener(type, wrappedEventListener === void 0 ? null : wrappedEventListener, options);
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/expose-current-frame-and-current-time.js
  var createExposeCurrentFrameAndCurrentTime = (window3) => {
    return (currentTime, sampleRate, fn) => {
      Object.defineProperties(window3, {
        currentFrame: {
          configurable: true,
          get() {
            return Math.round(currentTime * sampleRate);
          }
        },
        currentTime: {
          configurable: true,
          get() {
            return currentTime;
          }
        }
      });
      try {
        return fn();
      } finally {
        if (window3 !== null) {
          delete window3.currentFrame;
          delete window3.currentTime;
        }
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/fetch-source.js
  var createFetchSource = (createAbortError2) => {
    return async (url) => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          return [await response.text(), response.url];
        }
      } catch {
      }
      throw createAbortError2();
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/gain-node-constructor.js
  var DEFAULT_OPTIONS12 = {
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    gain: 1
  };
  var createGainNodeConstructor = (audioNodeConstructor2, createAudioParam2, createGainNodeRenderer2, createNativeGainNode2, getNativeContext2, isNativeOfflineAudioContext2) => {
    return class GainNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const mergedOptions = { ...DEFAULT_OPTIONS12, ...options };
        const nativeGainNode = createNativeGainNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const gainNodeRenderer = isOffline ? createGainNodeRenderer2() : null;
        super(context2, false, nativeGainNode, gainNodeRenderer);
        this._gain = createAudioParam2(this, isOffline, nativeGainNode.gain, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
      }
      get gain() {
        return this._gain;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/gain-node-renderer-factory.js
  var createGainNodeRendererFactory = (connectAudioParam2, createNativeGainNode2, getNativeAudioNode2, renderAutomation2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeGainNodes = /* @__PURE__ */ new WeakMap();
      const createGainNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeGainNode = getNativeAudioNode2(proxy);
        const nativeGainNodeIsOwnedByContext = isOwnedByContext(nativeGainNode, nativeOfflineAudioContext);
        if (!nativeGainNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeGainNode.channelCount,
            channelCountMode: nativeGainNode.channelCountMode,
            channelInterpretation: nativeGainNode.channelInterpretation,
            gain: nativeGainNode.gain.value
          };
          nativeGainNode = createNativeGainNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeGainNodes.set(nativeOfflineAudioContext, nativeGainNode);
        if (!nativeGainNodeIsOwnedByContext) {
          await renderAutomation2(nativeOfflineAudioContext, proxy.gain, nativeGainNode.gain);
        } else {
          await connectAudioParam2(nativeOfflineAudioContext, proxy.gain, nativeGainNode.gain);
        }
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeGainNode);
        return nativeGainNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeGainNode = renderedNativeGainNodes.get(nativeOfflineAudioContext);
          if (renderedNativeGainNode !== void 0) {
            return Promise.resolve(renderedNativeGainNode);
          }
          return createGainNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/get-active-audio-worklet-node-inputs.js
  var createGetActiveAudioWorkletNodeInputs = (activeAudioWorkletNodeInputsStore2, getValueForKey2) => {
    return (nativeAudioWorkletNode) => getValueForKey2(activeAudioWorkletNodeInputsStore2, nativeAudioWorkletNode);
  };

  // node_modules/standardized-audio-context/build/es2019/factories/get-audio-node-renderer.js
  var createGetAudioNodeRenderer = (getAudioNodeConnections2) => {
    return (audioNode) => {
      const audioNodeConnections = getAudioNodeConnections2(audioNode);
      if (audioNodeConnections.renderer === null) {
        throw new Error("Missing the renderer of the given AudioNode in the audio graph.");
      }
      return audioNodeConnections.renderer;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/get-audio-node-tail-time.js
  var createGetAudioNodeTailTime = (audioNodeTailTimeStore2) => {
    return (audioNode) => {
      var _a;
      return (_a = audioNodeTailTimeStore2.get(audioNode)) !== null && _a !== void 0 ? _a : 0;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/get-audio-param-renderer.js
  var createGetAudioParamRenderer = (getAudioParamConnections2) => {
    return (audioParam) => {
      const audioParamConnections = getAudioParamConnections2(audioParam);
      if (audioParamConnections.renderer === null) {
        throw new Error("Missing the renderer of the given AudioParam in the audio graph.");
      }
      return audioParamConnections.renderer;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/get-backup-offline-audio-context.js
  var createGetBackupOfflineAudioContext = (backupOfflineAudioContextStore2) => {
    return (nativeContext) => {
      return backupOfflineAudioContextStore2.get(nativeContext);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/invalid-state-error.js
  var createInvalidStateError = () => new DOMException("", "InvalidStateError");

  // node_modules/standardized-audio-context/build/es2019/factories/get-native-context.js
  var createGetNativeContext = (contextStore) => {
    return (context2) => {
      const nativeContext = contextStore.get(context2);
      if (nativeContext === void 0) {
        throw createInvalidStateError();
      }
      return nativeContext;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/get-or-create-backup-offline-audio-context.js
  var createGetOrCreateBackupOfflineAudioContext = (backupOfflineAudioContextStore2, nativeOfflineAudioContextConstructor2) => {
    return (nativeContext) => {
      let backupOfflineAudioContext = backupOfflineAudioContextStore2.get(nativeContext);
      if (backupOfflineAudioContext !== void 0) {
        return backupOfflineAudioContext;
      }
      if (nativeOfflineAudioContextConstructor2 === null) {
        throw new Error("Missing the native OfflineAudioContext constructor.");
      }
      backupOfflineAudioContext = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
      backupOfflineAudioContextStore2.set(nativeContext, backupOfflineAudioContext);
      return backupOfflineAudioContext;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/get-unrendered-audio-worklet-nodes.js
  var createGetUnrenderedAudioWorkletNodes = (unrenderedAudioWorkletNodeStore2) => {
    return (nativeContext) => {
      const unrenderedAudioWorkletNodes = unrenderedAudioWorkletNodeStore2.get(nativeContext);
      if (unrenderedAudioWorkletNodes === void 0) {
        throw new Error("The context has no set of AudioWorkletNodes.");
      }
      return unrenderedAudioWorkletNodes;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/invalid-access-error.js
  var createInvalidAccessError = () => new DOMException("", "InvalidAccessError");

  // node_modules/standardized-audio-context/build/es2019/helpers/wrap-iir-filter-node-get-frequency-response-method.js
  var wrapIIRFilterNodeGetFrequencyResponseMethod = (nativeIIRFilterNode) => {
    nativeIIRFilterNode.getFrequencyResponse = /* @__PURE__ */ ((getFrequencyResponse) => {
      return (frequencyHz, magResponse, phaseResponse) => {
        if (frequencyHz.length !== magResponse.length || magResponse.length !== phaseResponse.length) {
          throw createInvalidAccessError();
        }
        return getFrequencyResponse.call(nativeIIRFilterNode, frequencyHz, magResponse, phaseResponse);
      };
    })(nativeIIRFilterNode.getFrequencyResponse);
  };

  // node_modules/standardized-audio-context/build/es2019/factories/iir-filter-node-constructor.js
  var DEFAULT_OPTIONS13 = {
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers"
  };
  var createIIRFilterNodeConstructor = (audioNodeConstructor2, createNativeIIRFilterNode2, createIIRFilterNodeRenderer2, getNativeContext2, isNativeOfflineAudioContext2, setAudioNodeTailTime2) => {
    return class IIRFilterNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const mergedOptions = { ...DEFAULT_OPTIONS13, ...options };
        const nativeIIRFilterNode = createNativeIIRFilterNode2(nativeContext, isOffline ? null : context2.baseLatency, mergedOptions);
        const iirFilterNodeRenderer = isOffline ? createIIRFilterNodeRenderer2(mergedOptions.feedback, mergedOptions.feedforward) : null;
        super(context2, false, nativeIIRFilterNode, iirFilterNodeRenderer);
        wrapIIRFilterNodeGetFrequencyResponseMethod(nativeIIRFilterNode);
        this._nativeIIRFilterNode = nativeIIRFilterNode;
        setAudioNodeTailTime2(this, 1);
      }
      getFrequencyResponse(frequencyHz, magResponse, phaseResponse) {
        return this._nativeIIRFilterNode.getFrequencyResponse(frequencyHz, magResponse, phaseResponse);
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/filter-buffer.js
  var filterBuffer = (feedback, feedbackLength, feedforward, feedforwardLength, minLength, xBuffer, yBuffer, bufferIndex, bufferLength, input, output) => {
    const inputLength = input.length;
    let i = bufferIndex;
    for (let j = 0; j < inputLength; j += 1) {
      let y = feedforward[0] * input[j];
      for (let k = 1; k < minLength; k += 1) {
        const x = i - k & bufferLength - 1;
        y += feedforward[k] * xBuffer[x];
        y -= feedback[k] * yBuffer[x];
      }
      for (let k = minLength; k < feedforwardLength; k += 1) {
        y += feedforward[k] * xBuffer[i - k & bufferLength - 1];
      }
      for (let k = minLength; k < feedbackLength; k += 1) {
        y -= feedback[k] * yBuffer[i - k & bufferLength - 1];
      }
      xBuffer[i] = input[j];
      yBuffer[i] = y;
      i = i + 1 & bufferLength - 1;
      output[j] = y;
    }
    return i;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/iir-filter-node-renderer-factory.js
  var filterFullBuffer = (renderedBuffer, nativeOfflineAudioContext, feedback, feedforward) => {
    const convertedFeedback = feedback instanceof Float64Array ? feedback : new Float64Array(feedback);
    const convertedFeedforward = feedforward instanceof Float64Array ? feedforward : new Float64Array(feedforward);
    const feedbackLength = convertedFeedback.length;
    const feedforwardLength = convertedFeedforward.length;
    const minLength = Math.min(feedbackLength, feedforwardLength);
    if (convertedFeedback[0] !== 1) {
      for (let i = 0; i < feedbackLength; i += 1) {
        convertedFeedforward[i] /= convertedFeedback[0];
      }
      for (let i = 1; i < feedforwardLength; i += 1) {
        convertedFeedback[i] /= convertedFeedback[0];
      }
    }
    const bufferLength = 32;
    const xBuffer = new Float32Array(bufferLength);
    const yBuffer = new Float32Array(bufferLength);
    const filteredBuffer = nativeOfflineAudioContext.createBuffer(renderedBuffer.numberOfChannels, renderedBuffer.length, renderedBuffer.sampleRate);
    const numberOfChannels = renderedBuffer.numberOfChannels;
    for (let i = 0; i < numberOfChannels; i += 1) {
      const input = renderedBuffer.getChannelData(i);
      const output = filteredBuffer.getChannelData(i);
      xBuffer.fill(0);
      yBuffer.fill(0);
      filterBuffer(convertedFeedback, feedbackLength, convertedFeedforward, feedforwardLength, minLength, xBuffer, yBuffer, 0, bufferLength, input, output);
    }
    return filteredBuffer;
  };
  var createIIRFilterNodeRendererFactory = (createNativeAudioBufferSourceNode2, getNativeAudioNode2, nativeOfflineAudioContextConstructor2, renderInputsOfAudioNode2, renderNativeOfflineAudioContext2) => {
    return (feedback, feedforward) => {
      const renderedNativeAudioNodes = /* @__PURE__ */ new WeakMap();
      let filteredBufferPromise = null;
      const createAudioNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeAudioBufferSourceNode = null;
        let nativeIIRFilterNode = getNativeAudioNode2(proxy);
        const nativeIIRFilterNodeIsOwnedByContext = isOwnedByContext(nativeIIRFilterNode, nativeOfflineAudioContext);
        if (nativeOfflineAudioContext.createIIRFilter === void 0) {
          nativeAudioBufferSourceNode = createNativeAudioBufferSourceNode2(nativeOfflineAudioContext, {
            buffer: null,
            channelCount: 2,
            channelCountMode: "max",
            channelInterpretation: "speakers",
            loop: false,
            loopEnd: 0,
            loopStart: 0,
            playbackRate: 1
          });
        } else if (!nativeIIRFilterNodeIsOwnedByContext) {
          nativeIIRFilterNode = nativeOfflineAudioContext.createIIRFilter(feedforward, feedback);
        }
        renderedNativeAudioNodes.set(nativeOfflineAudioContext, nativeAudioBufferSourceNode === null ? nativeIIRFilterNode : nativeAudioBufferSourceNode);
        if (nativeAudioBufferSourceNode !== null) {
          if (filteredBufferPromise === null) {
            if (nativeOfflineAudioContextConstructor2 === null) {
              throw new Error("Missing the native OfflineAudioContext constructor.");
            }
            const partialOfflineAudioContext = new nativeOfflineAudioContextConstructor2(
              // Bug #47: The AudioDestinationNode in Safari gets not initialized correctly.
              proxy.context.destination.channelCount,
              // Bug #17: Safari does not yet expose the length.
              proxy.context.length,
              nativeOfflineAudioContext.sampleRate
            );
            filteredBufferPromise = (async () => {
              await renderInputsOfAudioNode2(proxy, partialOfflineAudioContext, partialOfflineAudioContext.destination);
              const renderedBuffer = await renderNativeOfflineAudioContext2(partialOfflineAudioContext);
              return filterFullBuffer(renderedBuffer, nativeOfflineAudioContext, feedback, feedforward);
            })();
          }
          const filteredBuffer = await filteredBufferPromise;
          nativeAudioBufferSourceNode.buffer = filteredBuffer;
          nativeAudioBufferSourceNode.start(0);
          return nativeAudioBufferSourceNode;
        }
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeIIRFilterNode);
        return nativeIIRFilterNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeAudioNode = renderedNativeAudioNodes.get(nativeOfflineAudioContext);
          if (renderedNativeAudioNode !== void 0) {
            return Promise.resolve(renderedNativeAudioNode);
          }
          return createAudioNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/increment-cycle-counter-factory.js
  var createIncrementCycleCounterFactory = (cycleCounters, disconnectNativeAudioNodeFromNativeAudioNode2, getAudioNodeConnections2, getNativeAudioNode2, getNativeAudioParam2, isActiveAudioNode2) => {
    return (isOffline) => {
      return (audioNode, count) => {
        const cycleCounter = cycleCounters.get(audioNode);
        if (cycleCounter === void 0) {
          if (!isOffline && isActiveAudioNode2(audioNode)) {
            const nativeSourceAudioNode = getNativeAudioNode2(audioNode);
            const { outputs } = getAudioNodeConnections2(audioNode);
            for (const output of outputs) {
              if (isAudioNodeOutputConnection(output)) {
                const nativeDestinationAudioNode = getNativeAudioNode2(output[0]);
                disconnectNativeAudioNodeFromNativeAudioNode2(nativeSourceAudioNode, nativeDestinationAudioNode, output[1], output[2]);
              } else {
                const nativeDestinationAudioParam = getNativeAudioParam2(output[0]);
                nativeSourceAudioNode.disconnect(nativeDestinationAudioParam, output[1]);
              }
            }
          }
          cycleCounters.set(audioNode, count);
        } else {
          cycleCounters.set(audioNode, cycleCounter + count);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/is-any-audio-context.js
  var createIsAnyAudioContext = (contextStore, isNativeAudioContext2) => {
    return (anything) => {
      const nativeContext = contextStore.get(anything);
      return isNativeAudioContext2(nativeContext) || isNativeAudioContext2(anything);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/is-any-audio-node.js
  var createIsAnyAudioNode = (audioNodeStore, isNativeAudioNode3) => {
    return (anything) => audioNodeStore.has(anything) || isNativeAudioNode3(anything);
  };

  // node_modules/standardized-audio-context/build/es2019/factories/is-any-audio-param.js
  var createIsAnyAudioParam = (audioParamStore, isNativeAudioParam2) => {
    return (anything) => audioParamStore.has(anything) || isNativeAudioParam2(anything);
  };

  // node_modules/standardized-audio-context/build/es2019/factories/is-any-offline-audio-context.js
  var createIsAnyOfflineAudioContext = (contextStore, isNativeOfflineAudioContext2) => {
    return (anything) => {
      const nativeContext = contextStore.get(anything);
      return isNativeOfflineAudioContext2(nativeContext) || isNativeOfflineAudioContext2(anything);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/is-native-audio-context.js
  var createIsNativeAudioContext = (nativeAudioContextConstructor2) => {
    return (anything) => {
      return nativeAudioContextConstructor2 !== null && anything instanceof nativeAudioContextConstructor2;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/is-native-audio-node.js
  var createIsNativeAudioNode = (window3) => {
    return (anything) => {
      return window3 !== null && typeof window3.AudioNode === "function" && anything instanceof window3.AudioNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/is-native-audio-param.js
  var createIsNativeAudioParam = (window3) => {
    return (anything) => {
      return window3 !== null && typeof window3.AudioParam === "function" && anything instanceof window3.AudioParam;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/is-native-context.js
  var createIsNativeContext = (isNativeAudioContext2, isNativeOfflineAudioContext2) => {
    return (anything) => {
      return isNativeAudioContext2(anything) || isNativeOfflineAudioContext2(anything);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/is-native-offline-audio-context.js
  var createIsNativeOfflineAudioContext = (nativeOfflineAudioContextConstructor2) => {
    return (anything) => {
      return nativeOfflineAudioContextConstructor2 !== null && anything instanceof nativeOfflineAudioContextConstructor2;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/is-secure-context.js
  var createIsSecureContext = (window3) => window3 !== null && window3.isSecureContext;

  // node_modules/standardized-audio-context/build/es2019/factories/media-element-audio-source-node-constructor.js
  var createMediaElementAudioSourceNodeConstructor = (audioNodeConstructor2, createNativeMediaElementAudioSourceNode2, getNativeContext2, isNativeOfflineAudioContext2) => {
    return class MediaElementAudioSourceNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const nativeMediaElementAudioSourceNode = createNativeMediaElementAudioSourceNode2(nativeContext, options);
        if (isNativeOfflineAudioContext2(nativeContext)) {
          throw TypeError();
        }
        super(context2, true, nativeMediaElementAudioSourceNode, null);
        this._nativeMediaElementAudioSourceNode = nativeMediaElementAudioSourceNode;
      }
      get mediaElement() {
        return this._nativeMediaElementAudioSourceNode.mediaElement;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/media-stream-audio-destination-node-constructor.js
  var DEFAULT_OPTIONS14 = {
    channelCount: 2,
    channelCountMode: "explicit",
    channelInterpretation: "speakers"
  };
  var createMediaStreamAudioDestinationNodeConstructor = (audioNodeConstructor2, createNativeMediaStreamAudioDestinationNode2, getNativeContext2, isNativeOfflineAudioContext2) => {
    return class MediaStreamAudioDestinationNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        if (isNativeOfflineAudioContext2(nativeContext)) {
          throw new TypeError();
        }
        const mergedOptions = { ...DEFAULT_OPTIONS14, ...options };
        const nativeMediaStreamAudioDestinationNode = createNativeMediaStreamAudioDestinationNode2(nativeContext, mergedOptions);
        super(context2, false, nativeMediaStreamAudioDestinationNode, null);
        this._nativeMediaStreamAudioDestinationNode = nativeMediaStreamAudioDestinationNode;
      }
      get stream() {
        return this._nativeMediaStreamAudioDestinationNode.stream;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/media-stream-audio-source-node-constructor.js
  var createMediaStreamAudioSourceNodeConstructor = (audioNodeConstructor2, createNativeMediaStreamAudioSourceNode2, getNativeContext2, isNativeOfflineAudioContext2) => {
    return class MediaStreamAudioSourceNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const nativeMediaStreamAudioSourceNode = createNativeMediaStreamAudioSourceNode2(nativeContext, options);
        if (isNativeOfflineAudioContext2(nativeContext)) {
          throw new TypeError();
        }
        super(context2, true, nativeMediaStreamAudioSourceNode, null);
        this._nativeMediaStreamAudioSourceNode = nativeMediaStreamAudioSourceNode;
      }
      get mediaStream() {
        return this._nativeMediaStreamAudioSourceNode.mediaStream;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/media-stream-track-audio-source-node-constructor.js
  var createMediaStreamTrackAudioSourceNodeConstructor = (audioNodeConstructor2, createNativeMediaStreamTrackAudioSourceNode2, getNativeContext2) => {
    return class MediaStreamTrackAudioSourceNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const nativeMediaStreamTrackAudioSourceNode = createNativeMediaStreamTrackAudioSourceNode2(nativeContext, options);
        super(context2, true, nativeMediaStreamTrackAudioSourceNode, null);
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/minimal-audio-context-constructor.js
  var createMinimalAudioContextConstructor = (createInvalidStateError2, createNotSupportedError2, createUnknownError2, minimalBaseAudioContextConstructor2, nativeAudioContextConstructor2) => {
    return class MinimalAudioContext extends minimalBaseAudioContextConstructor2 {
      constructor(options = {}) {
        if (nativeAudioContextConstructor2 === null) {
          throw new Error("Missing the native AudioContext constructor.");
        }
        let nativeAudioContext;
        try {
          nativeAudioContext = new nativeAudioContextConstructor2(options);
        } catch (err) {
          if (err.code === 12 && err.message === "sampleRate is not in range") {
            throw createNotSupportedError2();
          }
          throw err;
        }
        if (nativeAudioContext === null) {
          throw createUnknownError2();
        }
        if (!isValidLatencyHint(options.latencyHint)) {
          throw new TypeError(`The provided value '${options.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);
        }
        if (options.sampleRate !== void 0 && nativeAudioContext.sampleRate !== options.sampleRate) {
          throw createNotSupportedError2();
        }
        super(nativeAudioContext, 2);
        const { latencyHint } = options;
        const { sampleRate } = nativeAudioContext;
        this._baseLatency = typeof nativeAudioContext.baseLatency === "number" ? nativeAudioContext.baseLatency : latencyHint === "balanced" ? 512 / sampleRate : latencyHint === "interactive" || latencyHint === void 0 ? 256 / sampleRate : latencyHint === "playback" ? 1024 / sampleRate : (
          /*
           * @todo The min (256) and max (16384) values are taken from the allowed bufferSize values of a
           * ScriptProcessorNode.
           */
          Math.max(2, Math.min(128, Math.round(latencyHint * sampleRate / 128))) * 128 / sampleRate
        );
        this._nativeAudioContext = nativeAudioContext;
        if (nativeAudioContextConstructor2.name === "webkitAudioContext") {
          this._nativeGainNode = nativeAudioContext.createGain();
          this._nativeOscillatorNode = nativeAudioContext.createOscillator();
          this._nativeGainNode.gain.value = 1e-37;
          this._nativeOscillatorNode.connect(this._nativeGainNode).connect(nativeAudioContext.destination);
          this._nativeOscillatorNode.start();
        } else {
          this._nativeGainNode = null;
          this._nativeOscillatorNode = null;
        }
        this._state = null;
        if (nativeAudioContext.state === "running") {
          this._state = "suspended";
          const revokeState = () => {
            if (this._state === "suspended") {
              this._state = null;
            }
            nativeAudioContext.removeEventListener("statechange", revokeState);
          };
          nativeAudioContext.addEventListener("statechange", revokeState);
        }
      }
      get baseLatency() {
        return this._baseLatency;
      }
      get state() {
        return this._state !== null ? this._state : this._nativeAudioContext.state;
      }
      close() {
        if (this.state === "closed") {
          return this._nativeAudioContext.close().then(() => {
            throw createInvalidStateError2();
          });
        }
        if (this._state === "suspended") {
          this._state = null;
        }
        return this._nativeAudioContext.close().then(() => {
          if (this._nativeGainNode !== null && this._nativeOscillatorNode !== null) {
            this._nativeOscillatorNode.stop();
            this._nativeGainNode.disconnect();
            this._nativeOscillatorNode.disconnect();
          }
          deactivateAudioGraph(this);
        });
      }
      resume() {
        if (this._state === "suspended") {
          return new Promise((resolve, reject) => {
            const resolvePromise = () => {
              this._nativeAudioContext.removeEventListener("statechange", resolvePromise);
              if (this._nativeAudioContext.state === "running") {
                resolve();
              } else {
                this.resume().then(resolve, reject);
              }
            };
            this._nativeAudioContext.addEventListener("statechange", resolvePromise);
          });
        }
        return this._nativeAudioContext.resume().catch((err) => {
          if (err === void 0 || err.code === 15) {
            throw createInvalidStateError2();
          }
          throw err;
        });
      }
      suspend() {
        return this._nativeAudioContext.suspend().catch((err) => {
          if (err === void 0) {
            throw createInvalidStateError2();
          }
          throw err;
        });
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/minimal-base-audio-context-constructor.js
  var createMinimalBaseAudioContextConstructor = (audioDestinationNodeConstructor2, createAudioListener2, eventTargetConstructor2, isNativeOfflineAudioContext2, unrenderedAudioWorkletNodeStore2, wrapEventListener2) => {
    return class MinimalBaseAudioContext extends eventTargetConstructor2 {
      constructor(_nativeContext, numberOfChannels) {
        super(_nativeContext);
        this._nativeContext = _nativeContext;
        CONTEXT_STORE.set(this, _nativeContext);
        if (isNativeOfflineAudioContext2(_nativeContext)) {
          unrenderedAudioWorkletNodeStore2.set(_nativeContext, /* @__PURE__ */ new Set());
        }
        this._destination = new audioDestinationNodeConstructor2(this, numberOfChannels);
        this._listener = createAudioListener2(this, _nativeContext);
        this._onstatechange = null;
      }
      get currentTime() {
        return this._nativeContext.currentTime;
      }
      get destination() {
        return this._destination;
      }
      get listener() {
        return this._listener;
      }
      get onstatechange() {
        return this._onstatechange;
      }
      set onstatechange(value) {
        const wrappedListener = typeof value === "function" ? wrapEventListener2(this, value) : null;
        this._nativeContext.onstatechange = wrappedListener;
        const nativeOnStateChange = this._nativeContext.onstatechange;
        this._onstatechange = nativeOnStateChange !== null && nativeOnStateChange === wrappedListener ? value : nativeOnStateChange;
      }
      get sampleRate() {
        return this._nativeContext.sampleRate;
      }
      get state() {
        return this._nativeContext.state;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-promise-support.js
  var testPromiseSupport = (nativeContext) => {
    const uint32Array = new Uint32Array([1179011410, 40, 1163280727, 544501094, 16, 131073, 44100, 176400, 1048580, 1635017060, 4, 0]);
    try {
      const promise = nativeContext.decodeAudioData(uint32Array.buffer, () => {
      });
      if (promise === void 0) {
        return false;
      }
      promise.catch(() => {
      });
      return true;
    } catch {
    }
    return false;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/minimal-offline-audio-context-constructor.js
  var DEFAULT_OPTIONS15 = {
    numberOfChannels: 1
  };
  var createMinimalOfflineAudioContextConstructor = (cacheTestResult2, createInvalidStateError2, createNativeOfflineAudioContext2, minimalBaseAudioContextConstructor2, startRendering2) => {
    return class MinimalOfflineAudioContext extends minimalBaseAudioContextConstructor2 {
      constructor(options) {
        const { length, numberOfChannels, sampleRate } = { ...DEFAULT_OPTIONS15, ...options };
        const nativeOfflineAudioContext = createNativeOfflineAudioContext2(numberOfChannels, length, sampleRate);
        if (!cacheTestResult2(testPromiseSupport, () => testPromiseSupport(nativeOfflineAudioContext))) {
          nativeOfflineAudioContext.addEventListener("statechange", /* @__PURE__ */ (() => {
            let i = 0;
            const delayStateChangeEvent = (event) => {
              if (this._state === "running") {
                if (i > 0) {
                  nativeOfflineAudioContext.removeEventListener("statechange", delayStateChangeEvent);
                  event.stopImmediatePropagation();
                  this._waitForThePromiseToSettle(event);
                } else {
                  i += 1;
                }
              }
            };
            return delayStateChangeEvent;
          })());
        }
        super(nativeOfflineAudioContext, numberOfChannels);
        this._length = length;
        this._nativeOfflineAudioContext = nativeOfflineAudioContext;
        this._state = null;
      }
      get length() {
        if (this._nativeOfflineAudioContext.length === void 0) {
          return this._length;
        }
        return this._nativeOfflineAudioContext.length;
      }
      get state() {
        return this._state === null ? this._nativeOfflineAudioContext.state : this._state;
      }
      startRendering() {
        if (this._state === "running") {
          return Promise.reject(createInvalidStateError2());
        }
        this._state = "running";
        return startRendering2(this.destination, this._nativeOfflineAudioContext).finally(() => {
          this._state = null;
          deactivateAudioGraph(this);
        });
      }
      _waitForThePromiseToSettle(event) {
        if (this._state === null) {
          this._nativeOfflineAudioContext.dispatchEvent(event);
        } else {
          setTimeout(() => this._waitForThePromiseToSettle(event));
        }
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/monitor-connections.js
  var createMonitorConnections = (insertElementInSet2, isNativeAudioNode3) => {
    return (nativeAudioNode, whenConnected, whenDisconnected) => {
      const connections = /* @__PURE__ */ new Set();
      nativeAudioNode.connect = /* @__PURE__ */ ((connect2) => {
        return (destination, output = 0, input = 0) => {
          const wasDisconnected = connections.size === 0;
          if (isNativeAudioNode3(destination)) {
            connect2.call(nativeAudioNode, destination, output, input);
            insertElementInSet2(connections, [destination, output, input], (connection) => connection[0] === destination && connection[1] === output && connection[2] === input, true);
            if (wasDisconnected) {
              whenConnected();
            }
            return destination;
          }
          connect2.call(nativeAudioNode, destination, output);
          insertElementInSet2(connections, [destination, output], (connection) => connection[0] === destination && connection[1] === output, true);
          if (wasDisconnected) {
            whenConnected();
          }
          return;
        };
      })(nativeAudioNode.connect);
      nativeAudioNode.disconnect = /* @__PURE__ */ ((disconnect2) => {
        return (destinationOrOutput, output, input) => {
          const wasConnected = connections.size > 0;
          if (destinationOrOutput === void 0) {
            disconnect2.apply(nativeAudioNode);
            connections.clear();
          } else if (typeof destinationOrOutput === "number") {
            disconnect2.call(nativeAudioNode, destinationOrOutput);
            for (const connection of connections) {
              if (connection[1] === destinationOrOutput) {
                connections.delete(connection);
              }
            }
          } else {
            if (isNativeAudioNode3(destinationOrOutput)) {
              disconnect2.call(nativeAudioNode, destinationOrOutput, output, input);
            } else {
              disconnect2.call(nativeAudioNode, destinationOrOutput, output);
            }
            for (const connection of connections) {
              if (connection[0] === destinationOrOutput && (output === void 0 || connection[1] === output) && (input === void 0 || connection[2] === input)) {
                connections.delete(connection);
              }
            }
          }
          const isDisconnected = connections.size === 0;
          if (wasConnected && isDisconnected) {
            whenDisconnected();
          }
        };
      })(nativeAudioNode.disconnect);
      return nativeAudioNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/assign-native-audio-node-option.js
  var assignNativeAudioNodeOption = (nativeAudioNode, options, option) => {
    const value = options[option];
    if (value !== void 0 && value !== nativeAudioNode[option]) {
      nativeAudioNode[option] = value;
    }
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/assign-native-audio-node-options.js
  var assignNativeAudioNodeOptions = (nativeAudioNode, options) => {
    assignNativeAudioNodeOption(nativeAudioNode, options, "channelCount");
    assignNativeAudioNodeOption(nativeAudioNode, options, "channelCountMode");
    assignNativeAudioNodeOption(nativeAudioNode, options, "channelInterpretation");
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-analyser-node-get-float-time-domain-data-method-support.js
  var testAnalyserNodeGetFloatTimeDomainDataMethodSupport = (nativeAnalyserNode) => {
    return typeof nativeAnalyserNode.getFloatTimeDomainData === "function";
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/wrap-analyser-node-get-float-time-domain-data-method.js
  var wrapAnalyserNodeGetFloatTimeDomainDataMethod = (nativeAnalyserNode) => {
    nativeAnalyserNode.getFloatTimeDomainData = (array) => {
      const byteTimeDomainData = new Uint8Array(array.length);
      nativeAnalyserNode.getByteTimeDomainData(byteTimeDomainData);
      const length = Math.max(byteTimeDomainData.length, nativeAnalyserNode.fftSize);
      for (let i = 0; i < length; i += 1) {
        array[i] = (byteTimeDomainData[i] - 128) * 78125e-7;
      }
      return array;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-analyser-node-factory.js
  var createNativeAnalyserNodeFactory = (cacheTestResult2, createIndexSizeError2) => {
    return (nativeContext, options) => {
      const nativeAnalyserNode = nativeContext.createAnalyser();
      assignNativeAudioNodeOptions(nativeAnalyserNode, options);
      if (!(options.maxDecibels > options.minDecibels)) {
        throw createIndexSizeError2();
      }
      assignNativeAudioNodeOption(nativeAnalyserNode, options, "fftSize");
      assignNativeAudioNodeOption(nativeAnalyserNode, options, "maxDecibels");
      assignNativeAudioNodeOption(nativeAnalyserNode, options, "minDecibels");
      assignNativeAudioNodeOption(nativeAnalyserNode, options, "smoothingTimeConstant");
      if (!cacheTestResult2(testAnalyserNodeGetFloatTimeDomainDataMethodSupport, () => testAnalyserNodeGetFloatTimeDomainDataMethodSupport(nativeAnalyserNode))) {
        wrapAnalyserNodeGetFloatTimeDomainDataMethod(nativeAnalyserNode);
      }
      return nativeAnalyserNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-audio-buffer-constructor.js
  var createNativeAudioBufferConstructor = (window3) => {
    if (window3 === null) {
      return null;
    }
    if (window3.hasOwnProperty("AudioBuffer")) {
      return window3.AudioBuffer;
    }
    return null;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/assign-native-audio-node-audio-param-value.js
  var assignNativeAudioNodeAudioParamValue = (nativeAudioNode, options, audioParam) => {
    const value = options[audioParam];
    if (value !== void 0 && value !== nativeAudioNode[audioParam].value) {
      nativeAudioNode[audioParam].value = value;
    }
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/wrap-audio-buffer-source-node-start-method-consecutive-calls.js
  var wrapAudioBufferSourceNodeStartMethodConsecutiveCalls = (nativeAudioBufferSourceNode) => {
    nativeAudioBufferSourceNode.start = /* @__PURE__ */ ((start2) => {
      let isScheduled = false;
      return (when = 0, offset = 0, duration) => {
        if (isScheduled) {
          throw createInvalidStateError();
        }
        start2.call(nativeAudioBufferSourceNode, when, offset, duration);
        isScheduled = true;
      };
    })(nativeAudioBufferSourceNode.start);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/wrap-audio-scheduled-source-node-start-method-negative-parameters.js
  var wrapAudioScheduledSourceNodeStartMethodNegativeParameters = (nativeAudioScheduledSourceNode) => {
    nativeAudioScheduledSourceNode.start = /* @__PURE__ */ ((start2) => {
      return (when = 0, offset = 0, duration) => {
        if (typeof duration === "number" && duration < 0 || offset < 0 || when < 0) {
          throw new RangeError("The parameters can't be negative.");
        }
        start2.call(nativeAudioScheduledSourceNode, when, offset, duration);
      };
    })(nativeAudioScheduledSourceNode.start);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/wrap-audio-scheduled-source-node-stop-method-negative-parameters.js
  var wrapAudioScheduledSourceNodeStopMethodNegativeParameters = (nativeAudioScheduledSourceNode) => {
    nativeAudioScheduledSourceNode.stop = /* @__PURE__ */ ((stop) => {
      return (when = 0) => {
        if (when < 0) {
          throw new RangeError("The parameter can't be negative.");
        }
        stop.call(nativeAudioScheduledSourceNode, when);
      };
    })(nativeAudioScheduledSourceNode.stop);
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-audio-buffer-source-node-factory.js
  var createNativeAudioBufferSourceNodeFactory = (addSilentConnection2, cacheTestResult2, testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport2, testAudioBufferSourceNodeStartMethodOffsetClampingSupport2, testAudioBufferSourceNodeStopMethodNullifiedBufferSupport2, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2, testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport2, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2, wrapAudioBufferSourceNodeStartMethodOffsetClampling, wrapAudioBufferSourceNodeStopMethodNullifiedBuffer, wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls2) => {
    return (nativeContext, options) => {
      const nativeAudioBufferSourceNode = nativeContext.createBufferSource();
      assignNativeAudioNodeOptions(nativeAudioBufferSourceNode, options);
      assignNativeAudioNodeAudioParamValue(nativeAudioBufferSourceNode, options, "playbackRate");
      assignNativeAudioNodeOption(nativeAudioBufferSourceNode, options, "buffer");
      assignNativeAudioNodeOption(nativeAudioBufferSourceNode, options, "loop");
      assignNativeAudioNodeOption(nativeAudioBufferSourceNode, options, "loopEnd");
      assignNativeAudioNodeOption(nativeAudioBufferSourceNode, options, "loopStart");
      if (!cacheTestResult2(testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport2, () => testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport2(nativeContext))) {
        wrapAudioBufferSourceNodeStartMethodConsecutiveCalls(nativeAudioBufferSourceNode);
      }
      if (!cacheTestResult2(testAudioBufferSourceNodeStartMethodOffsetClampingSupport2, () => testAudioBufferSourceNodeStartMethodOffsetClampingSupport2(nativeContext))) {
        wrapAudioBufferSourceNodeStartMethodOffsetClampling(nativeAudioBufferSourceNode);
      }
      if (!cacheTestResult2(testAudioBufferSourceNodeStopMethodNullifiedBufferSupport2, () => testAudioBufferSourceNodeStopMethodNullifiedBufferSupport2(nativeContext))) {
        wrapAudioBufferSourceNodeStopMethodNullifiedBuffer(nativeAudioBufferSourceNode, nativeContext);
      }
      if (!cacheTestResult2(testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2, () => testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2(nativeContext))) {
        wrapAudioScheduledSourceNodeStartMethodNegativeParameters(nativeAudioBufferSourceNode);
      }
      if (!cacheTestResult2(testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport2, () => testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport2(nativeContext))) {
        wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls2(nativeAudioBufferSourceNode, nativeContext);
      }
      if (!cacheTestResult2(testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2, () => testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2(nativeContext))) {
        wrapAudioScheduledSourceNodeStopMethodNegativeParameters(nativeAudioBufferSourceNode);
      }
      addSilentConnection2(nativeContext, nativeAudioBufferSourceNode);
      return nativeAudioBufferSourceNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-audio-context-constructor.js
  var createNativeAudioContextConstructor = (window3) => {
    if (window3 === null) {
      return null;
    }
    if (window3.hasOwnProperty("AudioContext")) {
      return window3.AudioContext;
    }
    return window3.hasOwnProperty("webkitAudioContext") ? window3.webkitAudioContext : null;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-audio-destination-node.js
  var createNativeAudioDestinationNodeFactory = (createNativeGainNode2, overwriteAccessors2) => {
    return (nativeContext, channelCount, isNodeOfNativeOfflineAudioContext) => {
      const nativeAudioDestinationNode = nativeContext.destination;
      if (nativeAudioDestinationNode.channelCount !== channelCount) {
        try {
          nativeAudioDestinationNode.channelCount = channelCount;
        } catch {
        }
      }
      if (isNodeOfNativeOfflineAudioContext && nativeAudioDestinationNode.channelCountMode !== "explicit") {
        nativeAudioDestinationNode.channelCountMode = "explicit";
      }
      if (nativeAudioDestinationNode.maxChannelCount === 0) {
        Object.defineProperty(nativeAudioDestinationNode, "maxChannelCount", {
          value: channelCount
        });
      }
      const gainNode = createNativeGainNode2(nativeContext, {
        channelCount,
        channelCountMode: nativeAudioDestinationNode.channelCountMode,
        channelInterpretation: nativeAudioDestinationNode.channelInterpretation,
        gain: 1
      });
      overwriteAccessors2(gainNode, "channelCount", (get) => () => get.call(gainNode), (set) => (value) => {
        set.call(gainNode, value);
        try {
          nativeAudioDestinationNode.channelCount = value;
        } catch (err) {
          if (value > nativeAudioDestinationNode.maxChannelCount) {
            throw err;
          }
        }
      });
      overwriteAccessors2(gainNode, "channelCountMode", (get) => () => get.call(gainNode), (set) => (value) => {
        set.call(gainNode, value);
        nativeAudioDestinationNode.channelCountMode = value;
      });
      overwriteAccessors2(gainNode, "channelInterpretation", (get) => () => get.call(gainNode), (set) => (value) => {
        set.call(gainNode, value);
        nativeAudioDestinationNode.channelInterpretation = value;
      });
      Object.defineProperty(gainNode, "maxChannelCount", {
        get: () => nativeAudioDestinationNode.maxChannelCount
      });
      gainNode.connect(nativeAudioDestinationNode);
      return gainNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-audio-worklet-node-constructor.js
  var createNativeAudioWorkletNodeConstructor = (window3) => {
    if (window3 === null) {
      return null;
    }
    return window3.hasOwnProperty("AudioWorkletNode") ? window3.AudioWorkletNode : null;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-clonability-of-audio-worklet-node-options.js
  var testClonabilityOfAudioWorkletNodeOptions = (audioWorkletNodeOptions) => {
    const { port1 } = new MessageChannel();
    try {
      port1.postMessage(audioWorkletNodeOptions);
    } finally {
      port1.close();
    }
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-audio-worklet-node-factory.js
  var createNativeAudioWorkletNodeFactory = (createInvalidStateError2, createNativeAudioWorkletNodeFaker2, createNativeGainNode2, createNotSupportedError2, monitorConnections2) => {
    return (nativeContext, baseLatency, nativeAudioWorkletNodeConstructor2, name, processorConstructor, options) => {
      if (nativeAudioWorkletNodeConstructor2 !== null) {
        try {
          const nativeAudioWorkletNode = new nativeAudioWorkletNodeConstructor2(nativeContext, name, options);
          const patchedEventListeners = /* @__PURE__ */ new Map();
          let onprocessorerror = null;
          Object.defineProperties(nativeAudioWorkletNode, {
            /*
             * Bug #61: Overwriting the property accessors for channelCount and channelCountMode is necessary as long as some
             * browsers have no native implementation to achieve a consistent behavior.
             */
            channelCount: {
              get: () => options.channelCount,
              set: () => {
                throw createInvalidStateError2();
              }
            },
            channelCountMode: {
              get: () => "explicit",
              set: () => {
                throw createInvalidStateError2();
              }
            },
            // Bug #156: Chrome and Edge do not yet fire an ErrorEvent.
            onprocessorerror: {
              get: () => onprocessorerror,
              set: (value) => {
                if (typeof onprocessorerror === "function") {
                  nativeAudioWorkletNode.removeEventListener("processorerror", onprocessorerror);
                }
                onprocessorerror = typeof value === "function" ? value : null;
                if (typeof onprocessorerror === "function") {
                  nativeAudioWorkletNode.addEventListener("processorerror", onprocessorerror);
                }
              }
            }
          });
          nativeAudioWorkletNode.addEventListener = /* @__PURE__ */ ((addEventListener) => {
            return (...args) => {
              if (args[0] === "processorerror") {
                const unpatchedEventListener = typeof args[1] === "function" ? args[1] : typeof args[1] === "object" && args[1] !== null && typeof args[1].handleEvent === "function" ? args[1].handleEvent : null;
                if (unpatchedEventListener !== null) {
                  const patchedEventListener = patchedEventListeners.get(args[1]);
                  if (patchedEventListener !== void 0) {
                    args[1] = patchedEventListener;
                  } else {
                    args[1] = (event) => {
                      if (event.type === "error") {
                        Object.defineProperties(event, {
                          type: { value: "processorerror" }
                        });
                        unpatchedEventListener(event);
                      } else {
                        unpatchedEventListener(new ErrorEvent(args[0], { ...event }));
                      }
                    };
                    patchedEventListeners.set(unpatchedEventListener, args[1]);
                  }
                }
              }
              addEventListener.call(nativeAudioWorkletNode, "error", args[1], args[2]);
              return addEventListener.call(nativeAudioWorkletNode, ...args);
            };
          })(nativeAudioWorkletNode.addEventListener);
          nativeAudioWorkletNode.removeEventListener = /* @__PURE__ */ ((removeEventListener) => {
            return (...args) => {
              if (args[0] === "processorerror") {
                const patchedEventListener = patchedEventListeners.get(args[1]);
                if (patchedEventListener !== void 0) {
                  patchedEventListeners.delete(args[1]);
                  args[1] = patchedEventListener;
                }
              }
              removeEventListener.call(nativeAudioWorkletNode, "error", args[1], args[2]);
              return removeEventListener.call(nativeAudioWorkletNode, args[0], args[1], args[2]);
            };
          })(nativeAudioWorkletNode.removeEventListener);
          if (options.numberOfOutputs !== 0) {
            const nativeGainNode = createNativeGainNode2(nativeContext, {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "discrete",
              gain: 0
            });
            nativeAudioWorkletNode.connect(nativeGainNode).connect(nativeContext.destination);
            const whenConnected = () => nativeGainNode.disconnect();
            const whenDisconnected = () => nativeGainNode.connect(nativeContext.destination);
            return monitorConnections2(nativeAudioWorkletNode, whenConnected, whenDisconnected);
          }
          return nativeAudioWorkletNode;
        } catch (err) {
          if (err.code === 11) {
            throw createNotSupportedError2();
          }
          throw err;
        }
      }
      if (processorConstructor === void 0) {
        throw createNotSupportedError2();
      }
      testClonabilityOfAudioWorkletNodeOptions(options);
      return createNativeAudioWorkletNodeFaker2(nativeContext, baseLatency, processorConstructor, options);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/compute-buffer-size.js
  var computeBufferSize = (baseLatency, sampleRate) => {
    if (baseLatency === null) {
      return 512;
    }
    return Math.max(512, Math.min(16384, Math.pow(2, Math.round(Math.log2(baseLatency * sampleRate)))));
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/clone-audio-worklet-node-options.js
  var cloneAudioWorkletNodeOptions = (audioWorkletNodeOptions) => {
    return new Promise((resolve, reject) => {
      const { port1, port2 } = new MessageChannel();
      port1.onmessage = ({ data }) => {
        port1.close();
        port2.close();
        resolve(data);
      };
      port1.onmessageerror = ({ data }) => {
        port1.close();
        port2.close();
        reject(data);
      };
      port2.postMessage(audioWorkletNodeOptions);
    });
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/create-audio-worklet-processor-promise.js
  var createAudioWorkletProcessorPromise = async (processorConstructor, audioWorkletNodeOptions) => {
    const clonedAudioWorkletNodeOptions = await cloneAudioWorkletNodeOptions(audioWorkletNodeOptions);
    return new processorConstructor(clonedAudioWorkletNodeOptions);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/create-audio-worklet-processor.js
  var createAudioWorkletProcessor = (nativeContext, nativeAudioWorkletNode, processorConstructor, audioWorkletNodeOptions) => {
    let nodeToProcessorMap = NODE_TO_PROCESSOR_MAPS.get(nativeContext);
    if (nodeToProcessorMap === void 0) {
      nodeToProcessorMap = /* @__PURE__ */ new WeakMap();
      NODE_TO_PROCESSOR_MAPS.set(nativeContext, nodeToProcessorMap);
    }
    const audioWorkletProcessorPromise = createAudioWorkletProcessorPromise(processorConstructor, audioWorkletNodeOptions);
    nodeToProcessorMap.set(nativeAudioWorkletNode, audioWorkletProcessorPromise);
    return audioWorkletProcessorPromise;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-audio-worklet-node-faker-factory.js
  var createNativeAudioWorkletNodeFakerFactory = (connectMultipleOutputs2, createIndexSizeError2, createInvalidStateError2, createNativeChannelMergerNode2, createNativeChannelSplitterNode2, createNativeConstantSourceNode2, createNativeGainNode2, createNativeScriptProcessorNode2, createNotSupportedError2, disconnectMultipleOutputs2, exposeCurrentFrameAndCurrentTime2, getActiveAudioWorkletNodeInputs2, monitorConnections2) => {
    return (nativeContext, baseLatency, processorConstructor, options) => {
      if (options.numberOfInputs === 0 && options.numberOfOutputs === 0) {
        throw createNotSupportedError2();
      }
      const outputChannelCount = Array.isArray(options.outputChannelCount) ? options.outputChannelCount : Array.from(options.outputChannelCount);
      if (outputChannelCount.some((channelCount) => channelCount < 1)) {
        throw createNotSupportedError2();
      }
      if (outputChannelCount.length !== options.numberOfOutputs) {
        throw createIndexSizeError2();
      }
      if (options.channelCountMode !== "explicit") {
        throw createNotSupportedError2();
      }
      const numberOfInputChannels = options.channelCount * options.numberOfInputs;
      const numberOfOutputChannels = outputChannelCount.reduce((sum, value) => sum + value, 0);
      const numberOfParameters = processorConstructor.parameterDescriptors === void 0 ? 0 : processorConstructor.parameterDescriptors.length;
      if (numberOfInputChannels + numberOfParameters > 6 || numberOfOutputChannels > 6) {
        throw createNotSupportedError2();
      }
      const messageChannel = new MessageChannel();
      const gainNodes = [];
      const inputChannelSplitterNodes = [];
      for (let i = 0; i < options.numberOfInputs; i += 1) {
        gainNodes.push(createNativeGainNode2(nativeContext, {
          channelCount: options.channelCount,
          channelCountMode: options.channelCountMode,
          channelInterpretation: options.channelInterpretation,
          gain: 1
        }));
        inputChannelSplitterNodes.push(createNativeChannelSplitterNode2(nativeContext, {
          channelCount: options.channelCount,
          channelCountMode: "explicit",
          channelInterpretation: "discrete",
          numberOfOutputs: options.channelCount
        }));
      }
      const constantSourceNodes = [];
      if (processorConstructor.parameterDescriptors !== void 0) {
        for (const { defaultValue, maxValue, minValue, name } of processorConstructor.parameterDescriptors) {
          const constantSourceNode = createNativeConstantSourceNode2(nativeContext, {
            channelCount: 1,
            channelCountMode: "explicit",
            channelInterpretation: "discrete",
            offset: options.parameterData[name] !== void 0 ? options.parameterData[name] : defaultValue === void 0 ? 0 : defaultValue
          });
          Object.defineProperties(constantSourceNode.offset, {
            defaultValue: {
              get: () => defaultValue === void 0 ? 0 : defaultValue
            },
            maxValue: {
              get: () => maxValue === void 0 ? MOST_POSITIVE_SINGLE_FLOAT : maxValue
            },
            minValue: {
              get: () => minValue === void 0 ? MOST_NEGATIVE_SINGLE_FLOAT : minValue
            }
          });
          constantSourceNodes.push(constantSourceNode);
        }
      }
      const inputChannelMergerNode = createNativeChannelMergerNode2(nativeContext, {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "speakers",
        numberOfInputs: Math.max(1, numberOfInputChannels + numberOfParameters)
      });
      const bufferSize = computeBufferSize(baseLatency, nativeContext.sampleRate);
      const scriptProcessorNode = createNativeScriptProcessorNode2(
        nativeContext,
        bufferSize,
        numberOfInputChannels + numberOfParameters,
        // Bug #87: Only Firefox will fire an AudioProcessingEvent if there is no connected output.
        Math.max(1, numberOfOutputChannels)
      );
      const outputChannelSplitterNode = createNativeChannelSplitterNode2(nativeContext, {
        channelCount: Math.max(1, numberOfOutputChannels),
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        numberOfOutputs: Math.max(1, numberOfOutputChannels)
      });
      const outputChannelMergerNodes = [];
      for (let i = 0; i < options.numberOfOutputs; i += 1) {
        outputChannelMergerNodes.push(createNativeChannelMergerNode2(nativeContext, {
          channelCount: 1,
          channelCountMode: "explicit",
          channelInterpretation: "speakers",
          numberOfInputs: outputChannelCount[i]
        }));
      }
      for (let i = 0; i < options.numberOfInputs; i += 1) {
        gainNodes[i].connect(inputChannelSplitterNodes[i]);
        for (let j = 0; j < options.channelCount; j += 1) {
          inputChannelSplitterNodes[i].connect(inputChannelMergerNode, j, i * options.channelCount + j);
        }
      }
      const parameterMap = new ReadOnlyMap(processorConstructor.parameterDescriptors === void 0 ? [] : processorConstructor.parameterDescriptors.map(({ name }, index) => {
        const constantSourceNode = constantSourceNodes[index];
        constantSourceNode.connect(inputChannelMergerNode, 0, numberOfInputChannels + index);
        constantSourceNode.start(0);
        return [name, constantSourceNode.offset];
      }));
      inputChannelMergerNode.connect(scriptProcessorNode);
      let channelInterpretation = options.channelInterpretation;
      let onprocessorerror = null;
      const outputAudioNodes = options.numberOfOutputs === 0 ? [scriptProcessorNode] : outputChannelMergerNodes;
      const nativeAudioWorkletNodeFaker = {
        get bufferSize() {
          return bufferSize;
        },
        get channelCount() {
          return options.channelCount;
        },
        set channelCount(_) {
          throw createInvalidStateError2();
        },
        get channelCountMode() {
          return options.channelCountMode;
        },
        set channelCountMode(_) {
          throw createInvalidStateError2();
        },
        get channelInterpretation() {
          return channelInterpretation;
        },
        set channelInterpretation(value) {
          for (const gainNode of gainNodes) {
            gainNode.channelInterpretation = value;
          }
          channelInterpretation = value;
        },
        get context() {
          return scriptProcessorNode.context;
        },
        get inputs() {
          return gainNodes;
        },
        get numberOfInputs() {
          return options.numberOfInputs;
        },
        get numberOfOutputs() {
          return options.numberOfOutputs;
        },
        get onprocessorerror() {
          return onprocessorerror;
        },
        set onprocessorerror(value) {
          if (typeof onprocessorerror === "function") {
            nativeAudioWorkletNodeFaker.removeEventListener("processorerror", onprocessorerror);
          }
          onprocessorerror = typeof value === "function" ? value : null;
          if (typeof onprocessorerror === "function") {
            nativeAudioWorkletNodeFaker.addEventListener("processorerror", onprocessorerror);
          }
        },
        get parameters() {
          return parameterMap;
        },
        get port() {
          return messageChannel.port2;
        },
        addEventListener(...args) {
          return scriptProcessorNode.addEventListener(args[0], args[1], args[2]);
        },
        connect: connectMultipleOutputs2.bind(null, outputAudioNodes),
        disconnect: disconnectMultipleOutputs2.bind(null, outputAudioNodes),
        dispatchEvent(...args) {
          return scriptProcessorNode.dispatchEvent(args[0]);
        },
        removeEventListener(...args) {
          return scriptProcessorNode.removeEventListener(args[0], args[1], args[2]);
        }
      };
      const patchedEventListeners = /* @__PURE__ */ new Map();
      messageChannel.port1.addEventListener = /* @__PURE__ */ ((addEventListener) => {
        return (...args) => {
          if (args[0] === "message") {
            const unpatchedEventListener = typeof args[1] === "function" ? args[1] : typeof args[1] === "object" && args[1] !== null && typeof args[1].handleEvent === "function" ? args[1].handleEvent : null;
            if (unpatchedEventListener !== null) {
              const patchedEventListener = patchedEventListeners.get(args[1]);
              if (patchedEventListener !== void 0) {
                args[1] = patchedEventListener;
              } else {
                args[1] = (event) => {
                  exposeCurrentFrameAndCurrentTime2(nativeContext.currentTime, nativeContext.sampleRate, () => unpatchedEventListener(event));
                };
                patchedEventListeners.set(unpatchedEventListener, args[1]);
              }
            }
          }
          return addEventListener.call(messageChannel.port1, args[0], args[1], args[2]);
        };
      })(messageChannel.port1.addEventListener);
      messageChannel.port1.removeEventListener = /* @__PURE__ */ ((removeEventListener) => {
        return (...args) => {
          if (args[0] === "message") {
            const patchedEventListener = patchedEventListeners.get(args[1]);
            if (patchedEventListener !== void 0) {
              patchedEventListeners.delete(args[1]);
              args[1] = patchedEventListener;
            }
          }
          return removeEventListener.call(messageChannel.port1, args[0], args[1], args[2]);
        };
      })(messageChannel.port1.removeEventListener);
      let onmessage = null;
      Object.defineProperty(messageChannel.port1, "onmessage", {
        get: () => onmessage,
        set: (value) => {
          if (typeof onmessage === "function") {
            messageChannel.port1.removeEventListener("message", onmessage);
          }
          onmessage = typeof value === "function" ? value : null;
          if (typeof onmessage === "function") {
            messageChannel.port1.addEventListener("message", onmessage);
            messageChannel.port1.start();
          }
        }
      });
      processorConstructor.prototype.port = messageChannel.port1;
      let audioWorkletProcessor = null;
      const audioWorkletProcessorPromise = createAudioWorkletProcessor(nativeContext, nativeAudioWorkletNodeFaker, processorConstructor, options);
      audioWorkletProcessorPromise.then((dWrkltPrcssr) => audioWorkletProcessor = dWrkltPrcssr);
      const inputs = createNestedArrays(options.numberOfInputs, options.channelCount);
      const outputs = createNestedArrays(options.numberOfOutputs, outputChannelCount);
      const parameters = processorConstructor.parameterDescriptors === void 0 ? [] : processorConstructor.parameterDescriptors.reduce((prmtrs, { name }) => ({ ...prmtrs, [name]: new Float32Array(128) }), {});
      let isActive = true;
      const disconnectOutputsGraph = () => {
        if (options.numberOfOutputs > 0) {
          scriptProcessorNode.disconnect(outputChannelSplitterNode);
        }
        for (let i = 0, outputChannelSplitterNodeOutput = 0; i < options.numberOfOutputs; i += 1) {
          const outputChannelMergerNode = outputChannelMergerNodes[i];
          for (let j = 0; j < outputChannelCount[i]; j += 1) {
            outputChannelSplitterNode.disconnect(outputChannelMergerNode, outputChannelSplitterNodeOutput + j, j);
          }
          outputChannelSplitterNodeOutput += outputChannelCount[i];
        }
      };
      const activeInputIndexes = /* @__PURE__ */ new Map();
      scriptProcessorNode.onaudioprocess = ({ inputBuffer, outputBuffer }) => {
        if (audioWorkletProcessor !== null) {
          const activeInputs = getActiveAudioWorkletNodeInputs2(nativeAudioWorkletNodeFaker);
          for (let i = 0; i < bufferSize; i += 128) {
            for (let j = 0; j < options.numberOfInputs; j += 1) {
              for (let k = 0; k < options.channelCount; k += 1) {
                copyFromChannel(inputBuffer, inputs[j], k, k, i);
              }
            }
            if (processorConstructor.parameterDescriptors !== void 0) {
              processorConstructor.parameterDescriptors.forEach(({ name }, index) => {
                copyFromChannel(inputBuffer, parameters, name, numberOfInputChannels + index, i);
              });
            }
            for (let j = 0; j < options.numberOfInputs; j += 1) {
              for (let k = 0; k < outputChannelCount[j]; k += 1) {
                if (outputs[j][k].byteLength === 0) {
                  outputs[j][k] = new Float32Array(128);
                }
              }
            }
            try {
              const potentiallyEmptyInputs = inputs.map((input, index) => {
                const activeInput = activeInputs[index];
                if (activeInput.size > 0) {
                  activeInputIndexes.set(index, bufferSize / 128);
                  return input;
                }
                const count = activeInputIndexes.get(index);
                if (count === void 0) {
                  return [];
                }
                if (input.every((channelData) => channelData.every((sample) => sample === 0))) {
                  if (count === 1) {
                    activeInputIndexes.delete(index);
                  } else {
                    activeInputIndexes.set(index, count - 1);
                  }
                }
                return input;
              });
              const activeSourceFlag = exposeCurrentFrameAndCurrentTime2(nativeContext.currentTime + i / nativeContext.sampleRate, nativeContext.sampleRate, () => audioWorkletProcessor.process(potentiallyEmptyInputs, outputs, parameters));
              isActive = activeSourceFlag;
              for (let j = 0, outputChannelSplitterNodeOutput = 0; j < options.numberOfOutputs; j += 1) {
                for (let k = 0; k < outputChannelCount[j]; k += 1) {
                  copyToChannel(outputBuffer, outputs[j], k, outputChannelSplitterNodeOutput + k, i);
                }
                outputChannelSplitterNodeOutput += outputChannelCount[j];
              }
            } catch (error) {
              isActive = false;
              nativeAudioWorkletNodeFaker.dispatchEvent(new ErrorEvent("processorerror", {
                colno: error.colno,
                filename: error.filename,
                lineno: error.lineno,
                message: error.message
              }));
            }
            if (!isActive) {
              for (let j = 0; j < options.numberOfInputs; j += 1) {
                gainNodes[j].disconnect(inputChannelSplitterNodes[j]);
                for (let k = 0; k < options.channelCount; k += 1) {
                  inputChannelSplitterNodes[i].disconnect(inputChannelMergerNode, k, j * options.channelCount + k);
                }
              }
              if (processorConstructor.parameterDescriptors !== void 0) {
                const length = processorConstructor.parameterDescriptors.length;
                for (let j = 0; j < length; j += 1) {
                  const constantSourceNode = constantSourceNodes[j];
                  constantSourceNode.disconnect(inputChannelMergerNode, 0, numberOfInputChannels + j);
                  constantSourceNode.stop();
                }
              }
              inputChannelMergerNode.disconnect(scriptProcessorNode);
              scriptProcessorNode.onaudioprocess = null;
              if (isConnected) {
                disconnectOutputsGraph();
              } else {
                disconnectFakeGraph();
              }
              break;
            }
          }
        }
      };
      let isConnected = false;
      const nativeGainNode = createNativeGainNode2(nativeContext, {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        gain: 0
      });
      const connectFakeGraph = () => scriptProcessorNode.connect(nativeGainNode).connect(nativeContext.destination);
      const disconnectFakeGraph = () => {
        scriptProcessorNode.disconnect(nativeGainNode);
        nativeGainNode.disconnect();
      };
      const whenConnected = () => {
        if (isActive) {
          disconnectFakeGraph();
          if (options.numberOfOutputs > 0) {
            scriptProcessorNode.connect(outputChannelSplitterNode);
          }
          for (let i = 0, outputChannelSplitterNodeOutput = 0; i < options.numberOfOutputs; i += 1) {
            const outputChannelMergerNode = outputChannelMergerNodes[i];
            for (let j = 0; j < outputChannelCount[i]; j += 1) {
              outputChannelSplitterNode.connect(outputChannelMergerNode, outputChannelSplitterNodeOutput + j, j);
            }
            outputChannelSplitterNodeOutput += outputChannelCount[i];
          }
        }
        isConnected = true;
      };
      const whenDisconnected = () => {
        if (isActive) {
          connectFakeGraph();
          disconnectOutputsGraph();
        }
        isConnected = false;
      };
      connectFakeGraph();
      return monitorConnections2(nativeAudioWorkletNodeFaker, whenConnected, whenDisconnected);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-biquad-filter-node.js
  var createNativeBiquadFilterNode = (nativeContext, options) => {
    const nativeBiquadFilterNode = nativeContext.createBiquadFilter();
    assignNativeAudioNodeOptions(nativeBiquadFilterNode, options);
    assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, "Q");
    assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, "detune");
    assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, "frequency");
    assignNativeAudioNodeAudioParamValue(nativeBiquadFilterNode, options, "gain");
    assignNativeAudioNodeOption(nativeBiquadFilterNode, options, "type");
    return nativeBiquadFilterNode;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-channel-merger-node-factory.js
  var createNativeChannelMergerNodeFactory = (nativeAudioContextConstructor2, wrapChannelMergerNode2) => {
    return (nativeContext, options) => {
      const nativeChannelMergerNode = nativeContext.createChannelMerger(options.numberOfInputs);
      if (nativeAudioContextConstructor2 !== null && nativeAudioContextConstructor2.name === "webkitAudioContext") {
        wrapChannelMergerNode2(nativeContext, nativeChannelMergerNode);
      }
      assignNativeAudioNodeOptions(nativeChannelMergerNode, options);
      return nativeChannelMergerNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/wrap-channel-splitter-node.js
  var wrapChannelSplitterNode = (channelSplitterNode) => {
    const channelCount = channelSplitterNode.numberOfOutputs;
    Object.defineProperty(channelSplitterNode, "channelCount", {
      get: () => channelCount,
      set: (value) => {
        if (value !== channelCount) {
          throw createInvalidStateError();
        }
      }
    });
    Object.defineProperty(channelSplitterNode, "channelCountMode", {
      get: () => "explicit",
      set: (value) => {
        if (value !== "explicit") {
          throw createInvalidStateError();
        }
      }
    });
    Object.defineProperty(channelSplitterNode, "channelInterpretation", {
      get: () => "discrete",
      set: (value) => {
        if (value !== "discrete") {
          throw createInvalidStateError();
        }
      }
    });
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-channel-splitter-node.js
  var createNativeChannelSplitterNode = (nativeContext, options) => {
    const nativeChannelSplitterNode = nativeContext.createChannelSplitter(options.numberOfOutputs);
    assignNativeAudioNodeOptions(nativeChannelSplitterNode, options);
    wrapChannelSplitterNode(nativeChannelSplitterNode);
    return nativeChannelSplitterNode;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-constant-source-node-factory.js
  var createNativeConstantSourceNodeFactory = (addSilentConnection2, cacheTestResult2, createNativeConstantSourceNodeFaker2, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2) => {
    return (nativeContext, options) => {
      if (nativeContext.createConstantSource === void 0) {
        return createNativeConstantSourceNodeFaker2(nativeContext, options);
      }
      const nativeConstantSourceNode = nativeContext.createConstantSource();
      assignNativeAudioNodeOptions(nativeConstantSourceNode, options);
      assignNativeAudioNodeAudioParamValue(nativeConstantSourceNode, options, "offset");
      if (!cacheTestResult2(testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2, () => testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2(nativeContext))) {
        wrapAudioScheduledSourceNodeStartMethodNegativeParameters(nativeConstantSourceNode);
      }
      if (!cacheTestResult2(testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2, () => testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2(nativeContext))) {
        wrapAudioScheduledSourceNodeStopMethodNegativeParameters(nativeConstantSourceNode);
      }
      addSilentConnection2(nativeContext, nativeConstantSourceNode);
      return nativeConstantSourceNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/intercept-connections.js
  var interceptConnections = (original, interceptor) => {
    original.connect = interceptor.connect.bind(interceptor);
    original.disconnect = interceptor.disconnect.bind(interceptor);
    return original;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-constant-source-node-faker-factory.js
  var createNativeConstantSourceNodeFakerFactory = (addSilentConnection2, createNativeAudioBufferSourceNode2, createNativeGainNode2, monitorConnections2) => {
    return (nativeContext, { offset, ...audioNodeOptions }) => {
      const audioBuffer = nativeContext.createBuffer(1, 2, 44100);
      const audioBufferSourceNode = createNativeAudioBufferSourceNode2(nativeContext, {
        buffer: null,
        channelCount: 2,
        channelCountMode: "max",
        channelInterpretation: "speakers",
        loop: false,
        loopEnd: 0,
        loopStart: 0,
        playbackRate: 1
      });
      const gainNode = createNativeGainNode2(nativeContext, { ...audioNodeOptions, gain: offset });
      const channelData = audioBuffer.getChannelData(0);
      channelData[0] = 1;
      channelData[1] = 1;
      audioBufferSourceNode.buffer = audioBuffer;
      audioBufferSourceNode.loop = true;
      const nativeConstantSourceNodeFaker = {
        get bufferSize() {
          return void 0;
        },
        get channelCount() {
          return gainNode.channelCount;
        },
        set channelCount(value) {
          gainNode.channelCount = value;
        },
        get channelCountMode() {
          return gainNode.channelCountMode;
        },
        set channelCountMode(value) {
          gainNode.channelCountMode = value;
        },
        get channelInterpretation() {
          return gainNode.channelInterpretation;
        },
        set channelInterpretation(value) {
          gainNode.channelInterpretation = value;
        },
        get context() {
          return gainNode.context;
        },
        get inputs() {
          return [];
        },
        get numberOfInputs() {
          return audioBufferSourceNode.numberOfInputs;
        },
        get numberOfOutputs() {
          return gainNode.numberOfOutputs;
        },
        get offset() {
          return gainNode.gain;
        },
        get onended() {
          return audioBufferSourceNode.onended;
        },
        set onended(value) {
          audioBufferSourceNode.onended = value;
        },
        addEventListener(...args) {
          return audioBufferSourceNode.addEventListener(args[0], args[1], args[2]);
        },
        dispatchEvent(...args) {
          return audioBufferSourceNode.dispatchEvent(args[0]);
        },
        removeEventListener(...args) {
          return audioBufferSourceNode.removeEventListener(args[0], args[1], args[2]);
        },
        start(when = 0) {
          audioBufferSourceNode.start.call(audioBufferSourceNode, when);
        },
        stop(when = 0) {
          audioBufferSourceNode.stop.call(audioBufferSourceNode, when);
        }
      };
      const whenConnected = () => audioBufferSourceNode.connect(gainNode);
      const whenDisconnected = () => audioBufferSourceNode.disconnect(gainNode);
      addSilentConnection2(nativeContext, audioBufferSourceNode);
      return monitorConnections2(interceptConnections(nativeConstantSourceNodeFaker, gainNode), whenConnected, whenDisconnected);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-convolver-node-factory.js
  var createNativeConvolverNodeFactory = (createNotSupportedError2, overwriteAccessors2) => {
    return (nativeContext, options) => {
      const nativeConvolverNode = nativeContext.createConvolver();
      assignNativeAudioNodeOptions(nativeConvolverNode, options);
      if (options.disableNormalization === nativeConvolverNode.normalize) {
        nativeConvolverNode.normalize = !options.disableNormalization;
      }
      assignNativeAudioNodeOption(nativeConvolverNode, options, "buffer");
      if (options.channelCount > 2) {
        throw createNotSupportedError2();
      }
      overwriteAccessors2(nativeConvolverNode, "channelCount", (get) => () => get.call(nativeConvolverNode), (set) => (value) => {
        if (value > 2) {
          throw createNotSupportedError2();
        }
        return set.call(nativeConvolverNode, value);
      });
      if (options.channelCountMode === "max") {
        throw createNotSupportedError2();
      }
      overwriteAccessors2(nativeConvolverNode, "channelCountMode", (get) => () => get.call(nativeConvolverNode), (set) => (value) => {
        if (value === "max") {
          throw createNotSupportedError2();
        }
        return set.call(nativeConvolverNode, value);
      });
      return nativeConvolverNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-delay-node.js
  var createNativeDelayNode = (nativeContext, options) => {
    const nativeDelayNode = nativeContext.createDelay(options.maxDelayTime);
    assignNativeAudioNodeOptions(nativeDelayNode, options);
    assignNativeAudioNodeAudioParamValue(nativeDelayNode, options, "delayTime");
    return nativeDelayNode;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-dynamics-compressor-node-factory.js
  var createNativeDynamicsCompressorNodeFactory = (createNotSupportedError2) => {
    return (nativeContext, options) => {
      const nativeDynamicsCompressorNode = nativeContext.createDynamicsCompressor();
      assignNativeAudioNodeOptions(nativeDynamicsCompressorNode, options);
      if (options.channelCount > 2) {
        throw createNotSupportedError2();
      }
      if (options.channelCountMode === "max") {
        throw createNotSupportedError2();
      }
      assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, "attack");
      assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, "knee");
      assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, "ratio");
      assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, "release");
      assignNativeAudioNodeAudioParamValue(nativeDynamicsCompressorNode, options, "threshold");
      return nativeDynamicsCompressorNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-gain-node.js
  var createNativeGainNode = (nativeContext, options) => {
    const nativeGainNode = nativeContext.createGain();
    assignNativeAudioNodeOptions(nativeGainNode, options);
    assignNativeAudioNodeAudioParamValue(nativeGainNode, options, "gain");
    return nativeGainNode;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-iir-filter-node-factory.js
  var createNativeIIRFilterNodeFactory = (createNativeIIRFilterNodeFaker2) => {
    return (nativeContext, baseLatency, options) => {
      if (nativeContext.createIIRFilter === void 0) {
        return createNativeIIRFilterNodeFaker2(nativeContext, baseLatency, options);
      }
      const nativeIIRFilterNode = nativeContext.createIIRFilter(options.feedforward, options.feedback);
      assignNativeAudioNodeOptions(nativeIIRFilterNode, options);
      return nativeIIRFilterNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-iir-filter-node-faker-factory.js
  function divide(a, b) {
    const denominator = b[0] * b[0] + b[1] * b[1];
    return [(a[0] * b[0] + a[1] * b[1]) / denominator, (a[1] * b[0] - a[0] * b[1]) / denominator];
  }
  function multiply(a, b) {
    return [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
  }
  function evaluatePolynomial(coefficient, z) {
    let result = [0, 0];
    for (let i = coefficient.length - 1; i >= 0; i -= 1) {
      result = multiply(result, z);
      result[0] += coefficient[i];
    }
    return result;
  }
  var createNativeIIRFilterNodeFakerFactory = (createInvalidAccessError2, createInvalidStateError2, createNativeScriptProcessorNode2, createNotSupportedError2) => {
    return (nativeContext, baseLatency, { channelCount, channelCountMode, channelInterpretation, feedback, feedforward }) => {
      const bufferSize = computeBufferSize(baseLatency, nativeContext.sampleRate);
      const convertedFeedback = feedback instanceof Float64Array ? feedback : new Float64Array(feedback);
      const convertedFeedforward = feedforward instanceof Float64Array ? feedforward : new Float64Array(feedforward);
      const feedbackLength = convertedFeedback.length;
      const feedforwardLength = convertedFeedforward.length;
      const minLength = Math.min(feedbackLength, feedforwardLength);
      if (feedbackLength === 0 || feedbackLength > 20) {
        throw createNotSupportedError2();
      }
      if (convertedFeedback[0] === 0) {
        throw createInvalidStateError2();
      }
      if (feedforwardLength === 0 || feedforwardLength > 20) {
        throw createNotSupportedError2();
      }
      if (convertedFeedforward[0] === 0) {
        throw createInvalidStateError2();
      }
      if (convertedFeedback[0] !== 1) {
        for (let i = 0; i < feedforwardLength; i += 1) {
          convertedFeedforward[i] /= convertedFeedback[0];
        }
        for (let i = 1; i < feedbackLength; i += 1) {
          convertedFeedback[i] /= convertedFeedback[0];
        }
      }
      const scriptProcessorNode = createNativeScriptProcessorNode2(nativeContext, bufferSize, channelCount, channelCount);
      scriptProcessorNode.channelCount = channelCount;
      scriptProcessorNode.channelCountMode = channelCountMode;
      scriptProcessorNode.channelInterpretation = channelInterpretation;
      const bufferLength = 32;
      const bufferIndexes = [];
      const xBuffers = [];
      const yBuffers = [];
      for (let i = 0; i < channelCount; i += 1) {
        bufferIndexes.push(0);
        const xBuffer = new Float32Array(bufferLength);
        const yBuffer = new Float32Array(bufferLength);
        xBuffer.fill(0);
        yBuffer.fill(0);
        xBuffers.push(xBuffer);
        yBuffers.push(yBuffer);
      }
      scriptProcessorNode.onaudioprocess = (event) => {
        const inputBuffer = event.inputBuffer;
        const outputBuffer = event.outputBuffer;
        const numberOfChannels = inputBuffer.numberOfChannels;
        for (let i = 0; i < numberOfChannels; i += 1) {
          const input = inputBuffer.getChannelData(i);
          const output = outputBuffer.getChannelData(i);
          bufferIndexes[i] = filterBuffer(convertedFeedback, feedbackLength, convertedFeedforward, feedforwardLength, minLength, xBuffers[i], yBuffers[i], bufferIndexes[i], bufferLength, input, output);
        }
      };
      const nyquist = nativeContext.sampleRate / 2;
      const nativeIIRFilterNodeFaker = {
        get bufferSize() {
          return bufferSize;
        },
        get channelCount() {
          return scriptProcessorNode.channelCount;
        },
        set channelCount(value) {
          scriptProcessorNode.channelCount = value;
        },
        get channelCountMode() {
          return scriptProcessorNode.channelCountMode;
        },
        set channelCountMode(value) {
          scriptProcessorNode.channelCountMode = value;
        },
        get channelInterpretation() {
          return scriptProcessorNode.channelInterpretation;
        },
        set channelInterpretation(value) {
          scriptProcessorNode.channelInterpretation = value;
        },
        get context() {
          return scriptProcessorNode.context;
        },
        get inputs() {
          return [scriptProcessorNode];
        },
        get numberOfInputs() {
          return scriptProcessorNode.numberOfInputs;
        },
        get numberOfOutputs() {
          return scriptProcessorNode.numberOfOutputs;
        },
        addEventListener(...args) {
          return scriptProcessorNode.addEventListener(args[0], args[1], args[2]);
        },
        dispatchEvent(...args) {
          return scriptProcessorNode.dispatchEvent(args[0]);
        },
        getFrequencyResponse(frequencyHz, magResponse, phaseResponse) {
          if (frequencyHz.length !== magResponse.length || magResponse.length !== phaseResponse.length) {
            throw createInvalidAccessError2();
          }
          const length = frequencyHz.length;
          for (let i = 0; i < length; i += 1) {
            const omega = -Math.PI * (frequencyHz[i] / nyquist);
            const z = [Math.cos(omega), Math.sin(omega)];
            const numerator = evaluatePolynomial(convertedFeedforward, z);
            const denominator = evaluatePolynomial(convertedFeedback, z);
            const response = divide(numerator, denominator);
            magResponse[i] = Math.sqrt(response[0] * response[0] + response[1] * response[1]);
            phaseResponse[i] = Math.atan2(response[1], response[0]);
          }
        },
        removeEventListener(...args) {
          return scriptProcessorNode.removeEventListener(args[0], args[1], args[2]);
        }
      };
      return interceptConnections(nativeIIRFilterNodeFaker, scriptProcessorNode);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-media-element-audio-source-node.js
  var createNativeMediaElementAudioSourceNode = (nativeAudioContext, options) => {
    return nativeAudioContext.createMediaElementSource(options.mediaElement);
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-media-stream-audio-destination-node.js
  var createNativeMediaStreamAudioDestinationNode = (nativeAudioContext, options) => {
    const nativeMediaStreamAudioDestinationNode = nativeAudioContext.createMediaStreamDestination();
    assignNativeAudioNodeOptions(nativeMediaStreamAudioDestinationNode, options);
    if (nativeMediaStreamAudioDestinationNode.numberOfOutputs === 1) {
      Object.defineProperty(nativeMediaStreamAudioDestinationNode, "numberOfOutputs", { get: () => 0 });
    }
    return nativeMediaStreamAudioDestinationNode;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-media-stream-audio-source-node.js
  var createNativeMediaStreamAudioSourceNode = (nativeAudioContext, { mediaStream }) => {
    const audioStreamTracks = mediaStream.getAudioTracks();
    audioStreamTracks.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
    const filteredAudioStreamTracks = audioStreamTracks.slice(0, 1);
    const nativeMediaStreamAudioSourceNode = nativeAudioContext.createMediaStreamSource(new MediaStream(filteredAudioStreamTracks));
    Object.defineProperty(nativeMediaStreamAudioSourceNode, "mediaStream", { value: mediaStream });
    return nativeMediaStreamAudioSourceNode;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-media-stream-track-audio-source-node-factory.js
  var createNativeMediaStreamTrackAudioSourceNodeFactory = (createInvalidStateError2, isNativeOfflineAudioContext2) => {
    return (nativeAudioContext, { mediaStreamTrack }) => {
      if (typeof nativeAudioContext.createMediaStreamTrackSource === "function") {
        return nativeAudioContext.createMediaStreamTrackSource(mediaStreamTrack);
      }
      const mediaStream = new MediaStream([mediaStreamTrack]);
      const nativeMediaStreamAudioSourceNode = nativeAudioContext.createMediaStreamSource(mediaStream);
      if (mediaStreamTrack.kind !== "audio") {
        throw createInvalidStateError2();
      }
      if (isNativeOfflineAudioContext2(nativeAudioContext)) {
        throw new TypeError();
      }
      return nativeMediaStreamAudioSourceNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-offline-audio-context-constructor.js
  var createNativeOfflineAudioContextConstructor = (window3) => {
    if (window3 === null) {
      return null;
    }
    if (window3.hasOwnProperty("OfflineAudioContext")) {
      return window3.OfflineAudioContext;
    }
    return window3.hasOwnProperty("webkitOfflineAudioContext") ? window3.webkitOfflineAudioContext : null;
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-oscillator-node-factory.js
  var createNativeOscillatorNodeFactory = (addSilentConnection2, cacheTestResult2, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2, testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport2, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2, wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls2) => {
    return (nativeContext, options) => {
      const nativeOscillatorNode = nativeContext.createOscillator();
      assignNativeAudioNodeOptions(nativeOscillatorNode, options);
      assignNativeAudioNodeAudioParamValue(nativeOscillatorNode, options, "detune");
      assignNativeAudioNodeAudioParamValue(nativeOscillatorNode, options, "frequency");
      if (options.periodicWave !== void 0) {
        nativeOscillatorNode.setPeriodicWave(options.periodicWave);
      } else {
        assignNativeAudioNodeOption(nativeOscillatorNode, options, "type");
      }
      if (!cacheTestResult2(testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2, () => testAudioScheduledSourceNodeStartMethodNegativeParametersSupport2(nativeContext))) {
        wrapAudioScheduledSourceNodeStartMethodNegativeParameters(nativeOscillatorNode);
      }
      if (!cacheTestResult2(testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport2, () => testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport2(nativeContext))) {
        wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls2(nativeOscillatorNode, nativeContext);
      }
      if (!cacheTestResult2(testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2, () => testAudioScheduledSourceNodeStopMethodNegativeParametersSupport2(nativeContext))) {
        wrapAudioScheduledSourceNodeStopMethodNegativeParameters(nativeOscillatorNode);
      }
      addSilentConnection2(nativeContext, nativeOscillatorNode);
      return nativeOscillatorNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-panner-node-factory.js
  var createNativePannerNodeFactory = (createNativePannerNodeFaker2) => {
    return (nativeContext, options) => {
      const nativePannerNode = nativeContext.createPanner();
      if (nativePannerNode.orientationX === void 0) {
        return createNativePannerNodeFaker2(nativeContext, options);
      }
      assignNativeAudioNodeOptions(nativePannerNode, options);
      assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "orientationX");
      assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "orientationY");
      assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "orientationZ");
      assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "positionX");
      assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "positionY");
      assignNativeAudioNodeAudioParamValue(nativePannerNode, options, "positionZ");
      assignNativeAudioNodeOption(nativePannerNode, options, "coneInnerAngle");
      assignNativeAudioNodeOption(nativePannerNode, options, "coneOuterAngle");
      assignNativeAudioNodeOption(nativePannerNode, options, "coneOuterGain");
      assignNativeAudioNodeOption(nativePannerNode, options, "distanceModel");
      assignNativeAudioNodeOption(nativePannerNode, options, "maxDistance");
      assignNativeAudioNodeOption(nativePannerNode, options, "panningModel");
      assignNativeAudioNodeOption(nativePannerNode, options, "refDistance");
      assignNativeAudioNodeOption(nativePannerNode, options, "rolloffFactor");
      return nativePannerNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-panner-node-faker-factory.js
  var createNativePannerNodeFakerFactory = (connectNativeAudioNodeToNativeAudioNode2, createInvalidStateError2, createNativeChannelMergerNode2, createNativeGainNode2, createNativeScriptProcessorNode2, createNativeWaveShaperNode2, createNotSupportedError2, disconnectNativeAudioNodeFromNativeAudioNode2, getFirstSample2, monitorConnections2) => {
    return (nativeContext, { coneInnerAngle, coneOuterAngle, coneOuterGain, distanceModel, maxDistance, orientationX, orientationY, orientationZ, panningModel, positionX, positionY, positionZ, refDistance, rolloffFactor, ...audioNodeOptions }) => {
      const pannerNode = nativeContext.createPanner();
      if (audioNodeOptions.channelCount > 2) {
        throw createNotSupportedError2();
      }
      if (audioNodeOptions.channelCountMode === "max") {
        throw createNotSupportedError2();
      }
      assignNativeAudioNodeOptions(pannerNode, audioNodeOptions);
      const SINGLE_CHANNEL_OPTIONS = {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "discrete"
      };
      const channelMergerNode = createNativeChannelMergerNode2(nativeContext, {
        ...SINGLE_CHANNEL_OPTIONS,
        channelInterpretation: "speakers",
        numberOfInputs: 6
      });
      const inputGainNode = createNativeGainNode2(nativeContext, { ...audioNodeOptions, gain: 1 });
      const orientationXGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 1 });
      const orientationYGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
      const orientationZGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
      const positionXGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
      const positionYGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
      const positionZGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
      const scriptProcessorNode = createNativeScriptProcessorNode2(nativeContext, 256, 6, 1);
      const waveShaperNode = createNativeWaveShaperNode2(nativeContext, {
        ...SINGLE_CHANNEL_OPTIONS,
        curve: new Float32Array([1, 1]),
        oversample: "none"
      });
      let lastOrientation = [orientationX, orientationY, orientationZ];
      let lastPosition = [positionX, positionY, positionZ];
      const buffer = new Float32Array(1);
      scriptProcessorNode.onaudioprocess = ({ inputBuffer }) => {
        const orientation = [
          getFirstSample2(inputBuffer, buffer, 0),
          getFirstSample2(inputBuffer, buffer, 1),
          getFirstSample2(inputBuffer, buffer, 2)
        ];
        if (orientation.some((value, index) => value !== lastOrientation[index])) {
          pannerNode.setOrientation(...orientation);
          lastOrientation = orientation;
        }
        const positon = [
          getFirstSample2(inputBuffer, buffer, 3),
          getFirstSample2(inputBuffer, buffer, 4),
          getFirstSample2(inputBuffer, buffer, 5)
        ];
        if (positon.some((value, index) => value !== lastPosition[index])) {
          pannerNode.setPosition(...positon);
          lastPosition = positon;
        }
      };
      Object.defineProperty(orientationYGainNode.gain, "defaultValue", { get: () => 0 });
      Object.defineProperty(orientationZGainNode.gain, "defaultValue", { get: () => 0 });
      Object.defineProperty(positionXGainNode.gain, "defaultValue", { get: () => 0 });
      Object.defineProperty(positionYGainNode.gain, "defaultValue", { get: () => 0 });
      Object.defineProperty(positionZGainNode.gain, "defaultValue", { get: () => 0 });
      const nativePannerNodeFaker = {
        get bufferSize() {
          return void 0;
        },
        get channelCount() {
          return pannerNode.channelCount;
        },
        set channelCount(value) {
          if (value > 2) {
            throw createNotSupportedError2();
          }
          inputGainNode.channelCount = value;
          pannerNode.channelCount = value;
        },
        get channelCountMode() {
          return pannerNode.channelCountMode;
        },
        set channelCountMode(value) {
          if (value === "max") {
            throw createNotSupportedError2();
          }
          inputGainNode.channelCountMode = value;
          pannerNode.channelCountMode = value;
        },
        get channelInterpretation() {
          return pannerNode.channelInterpretation;
        },
        set channelInterpretation(value) {
          inputGainNode.channelInterpretation = value;
          pannerNode.channelInterpretation = value;
        },
        get coneInnerAngle() {
          return pannerNode.coneInnerAngle;
        },
        set coneInnerAngle(value) {
          pannerNode.coneInnerAngle = value;
        },
        get coneOuterAngle() {
          return pannerNode.coneOuterAngle;
        },
        set coneOuterAngle(value) {
          pannerNode.coneOuterAngle = value;
        },
        get coneOuterGain() {
          return pannerNode.coneOuterGain;
        },
        set coneOuterGain(value) {
          if (value < 0 || value > 1) {
            throw createInvalidStateError2();
          }
          pannerNode.coneOuterGain = value;
        },
        get context() {
          return pannerNode.context;
        },
        get distanceModel() {
          return pannerNode.distanceModel;
        },
        set distanceModel(value) {
          pannerNode.distanceModel = value;
        },
        get inputs() {
          return [inputGainNode];
        },
        get maxDistance() {
          return pannerNode.maxDistance;
        },
        set maxDistance(value) {
          if (value < 0) {
            throw new RangeError();
          }
          pannerNode.maxDistance = value;
        },
        get numberOfInputs() {
          return pannerNode.numberOfInputs;
        },
        get numberOfOutputs() {
          return pannerNode.numberOfOutputs;
        },
        get orientationX() {
          return orientationXGainNode.gain;
        },
        get orientationY() {
          return orientationYGainNode.gain;
        },
        get orientationZ() {
          return orientationZGainNode.gain;
        },
        get panningModel() {
          return pannerNode.panningModel;
        },
        set panningModel(value) {
          pannerNode.panningModel = value;
        },
        get positionX() {
          return positionXGainNode.gain;
        },
        get positionY() {
          return positionYGainNode.gain;
        },
        get positionZ() {
          return positionZGainNode.gain;
        },
        get refDistance() {
          return pannerNode.refDistance;
        },
        set refDistance(value) {
          if (value < 0) {
            throw new RangeError();
          }
          pannerNode.refDistance = value;
        },
        get rolloffFactor() {
          return pannerNode.rolloffFactor;
        },
        set rolloffFactor(value) {
          if (value < 0) {
            throw new RangeError();
          }
          pannerNode.rolloffFactor = value;
        },
        addEventListener(...args) {
          return inputGainNode.addEventListener(args[0], args[1], args[2]);
        },
        dispatchEvent(...args) {
          return inputGainNode.dispatchEvent(args[0]);
        },
        removeEventListener(...args) {
          return inputGainNode.removeEventListener(args[0], args[1], args[2]);
        }
      };
      if (coneInnerAngle !== nativePannerNodeFaker.coneInnerAngle) {
        nativePannerNodeFaker.coneInnerAngle = coneInnerAngle;
      }
      if (coneOuterAngle !== nativePannerNodeFaker.coneOuterAngle) {
        nativePannerNodeFaker.coneOuterAngle = coneOuterAngle;
      }
      if (coneOuterGain !== nativePannerNodeFaker.coneOuterGain) {
        nativePannerNodeFaker.coneOuterGain = coneOuterGain;
      }
      if (distanceModel !== nativePannerNodeFaker.distanceModel) {
        nativePannerNodeFaker.distanceModel = distanceModel;
      }
      if (maxDistance !== nativePannerNodeFaker.maxDistance) {
        nativePannerNodeFaker.maxDistance = maxDistance;
      }
      if (orientationX !== nativePannerNodeFaker.orientationX.value) {
        nativePannerNodeFaker.orientationX.value = orientationX;
      }
      if (orientationY !== nativePannerNodeFaker.orientationY.value) {
        nativePannerNodeFaker.orientationY.value = orientationY;
      }
      if (orientationZ !== nativePannerNodeFaker.orientationZ.value) {
        nativePannerNodeFaker.orientationZ.value = orientationZ;
      }
      if (panningModel !== nativePannerNodeFaker.panningModel) {
        nativePannerNodeFaker.panningModel = panningModel;
      }
      if (positionX !== nativePannerNodeFaker.positionX.value) {
        nativePannerNodeFaker.positionX.value = positionX;
      }
      if (positionY !== nativePannerNodeFaker.positionY.value) {
        nativePannerNodeFaker.positionY.value = positionY;
      }
      if (positionZ !== nativePannerNodeFaker.positionZ.value) {
        nativePannerNodeFaker.positionZ.value = positionZ;
      }
      if (refDistance !== nativePannerNodeFaker.refDistance) {
        nativePannerNodeFaker.refDistance = refDistance;
      }
      if (rolloffFactor !== nativePannerNodeFaker.rolloffFactor) {
        nativePannerNodeFaker.rolloffFactor = rolloffFactor;
      }
      if (lastOrientation[0] !== 1 || lastOrientation[1] !== 0 || lastOrientation[2] !== 0) {
        pannerNode.setOrientation(...lastOrientation);
      }
      if (lastPosition[0] !== 0 || lastPosition[1] !== 0 || lastPosition[2] !== 0) {
        pannerNode.setPosition(...lastPosition);
      }
      const whenConnected = () => {
        inputGainNode.connect(pannerNode);
        connectNativeAudioNodeToNativeAudioNode2(inputGainNode, waveShaperNode, 0, 0);
        waveShaperNode.connect(orientationXGainNode).connect(channelMergerNode, 0, 0);
        waveShaperNode.connect(orientationYGainNode).connect(channelMergerNode, 0, 1);
        waveShaperNode.connect(orientationZGainNode).connect(channelMergerNode, 0, 2);
        waveShaperNode.connect(positionXGainNode).connect(channelMergerNode, 0, 3);
        waveShaperNode.connect(positionYGainNode).connect(channelMergerNode, 0, 4);
        waveShaperNode.connect(positionZGainNode).connect(channelMergerNode, 0, 5);
        channelMergerNode.connect(scriptProcessorNode).connect(nativeContext.destination);
      };
      const whenDisconnected = () => {
        inputGainNode.disconnect(pannerNode);
        disconnectNativeAudioNodeFromNativeAudioNode2(inputGainNode, waveShaperNode, 0, 0);
        waveShaperNode.disconnect(orientationXGainNode);
        orientationXGainNode.disconnect(channelMergerNode);
        waveShaperNode.disconnect(orientationYGainNode);
        orientationYGainNode.disconnect(channelMergerNode);
        waveShaperNode.disconnect(orientationZGainNode);
        orientationZGainNode.disconnect(channelMergerNode);
        waveShaperNode.disconnect(positionXGainNode);
        positionXGainNode.disconnect(channelMergerNode);
        waveShaperNode.disconnect(positionYGainNode);
        positionYGainNode.disconnect(channelMergerNode);
        waveShaperNode.disconnect(positionZGainNode);
        positionZGainNode.disconnect(channelMergerNode);
        channelMergerNode.disconnect(scriptProcessorNode);
        scriptProcessorNode.disconnect(nativeContext.destination);
      };
      return monitorConnections2(interceptConnections(nativePannerNodeFaker, pannerNode), whenConnected, whenDisconnected);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-periodic-wave-factory.js
  var createNativePeriodicWaveFactory = (createIndexSizeError2) => {
    return (nativeContext, { disableNormalization, imag, real }) => {
      const convertedImag = imag instanceof Float32Array ? imag : new Float32Array(imag);
      const convertedReal = real instanceof Float32Array ? real : new Float32Array(real);
      const nativePeriodicWave = nativeContext.createPeriodicWave(convertedReal, convertedImag, { disableNormalization });
      if (Array.from(imag).length < 2) {
        throw createIndexSizeError2();
      }
      return nativePeriodicWave;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-script-processor-node.js
  var createNativeScriptProcessorNode = (nativeContext, bufferSize, numberOfInputChannels, numberOfOutputChannels) => {
    return nativeContext.createScriptProcessor(bufferSize, numberOfInputChannels, numberOfOutputChannels);
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-stereo-panner-node-factory.js
  var createNativeStereoPannerNodeFactory = (createNativeStereoPannerNodeFaker, createNotSupportedError2) => {
    return (nativeContext, options) => {
      const channelCountMode = options.channelCountMode;
      if (channelCountMode === "clamped-max") {
        throw createNotSupportedError2();
      }
      if (nativeContext.createStereoPanner === void 0) {
        return createNativeStereoPannerNodeFaker(nativeContext, options);
      }
      const nativeStereoPannerNode = nativeContext.createStereoPanner();
      assignNativeAudioNodeOptions(nativeStereoPannerNode, options);
      assignNativeAudioNodeAudioParamValue(nativeStereoPannerNode, options, "pan");
      Object.defineProperty(nativeStereoPannerNode, "channelCountMode", {
        get: () => channelCountMode,
        set: (value) => {
          if (value !== channelCountMode) {
            throw createNotSupportedError2();
          }
        }
      });
      return nativeStereoPannerNode;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-stereo-panner-node-faker-factory.js
  var createNativeStereoPannerNodeFakerFactory = (createNativeChannelMergerNode2, createNativeChannelSplitterNode2, createNativeGainNode2, createNativeWaveShaperNode2, createNotSupportedError2, monitorConnections2) => {
    const CURVE_SIZE = 16385;
    const DC_CURVE = new Float32Array([1, 1]);
    const HALF_PI = Math.PI / 2;
    const SINGLE_CHANNEL_OPTIONS = { channelCount: 1, channelCountMode: "explicit", channelInterpretation: "discrete" };
    const SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS = { ...SINGLE_CHANNEL_OPTIONS, oversample: "none" };
    const buildInternalGraphForMono = (nativeContext, inputGainNode, panGainNode, channelMergerNode) => {
      const leftWaveShaperCurve = new Float32Array(CURVE_SIZE);
      const rightWaveShaperCurve = new Float32Array(CURVE_SIZE);
      for (let i = 0; i < CURVE_SIZE; i += 1) {
        const x = i / (CURVE_SIZE - 1) * HALF_PI;
        leftWaveShaperCurve[i] = Math.cos(x);
        rightWaveShaperCurve[i] = Math.sin(x);
      }
      const leftGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
      const leftWaveShaperNode = createNativeWaveShaperNode2(nativeContext, { ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, curve: leftWaveShaperCurve });
      const panWaveShaperNode = createNativeWaveShaperNode2(nativeContext, { ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, curve: DC_CURVE });
      const rightGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
      const rightWaveShaperNode = createNativeWaveShaperNode2(nativeContext, { ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, curve: rightWaveShaperCurve });
      return {
        connectGraph() {
          inputGainNode.connect(leftGainNode);
          inputGainNode.connect(panWaveShaperNode.inputs === void 0 ? panWaveShaperNode : panWaveShaperNode.inputs[0]);
          inputGainNode.connect(rightGainNode);
          panWaveShaperNode.connect(panGainNode);
          panGainNode.connect(leftWaveShaperNode.inputs === void 0 ? leftWaveShaperNode : leftWaveShaperNode.inputs[0]);
          panGainNode.connect(rightWaveShaperNode.inputs === void 0 ? rightWaveShaperNode : rightWaveShaperNode.inputs[0]);
          leftWaveShaperNode.connect(leftGainNode.gain);
          rightWaveShaperNode.connect(rightGainNode.gain);
          leftGainNode.connect(channelMergerNode, 0, 0);
          rightGainNode.connect(channelMergerNode, 0, 1);
        },
        disconnectGraph() {
          inputGainNode.disconnect(leftGainNode);
          inputGainNode.disconnect(panWaveShaperNode.inputs === void 0 ? panWaveShaperNode : panWaveShaperNode.inputs[0]);
          inputGainNode.disconnect(rightGainNode);
          panWaveShaperNode.disconnect(panGainNode);
          panGainNode.disconnect(leftWaveShaperNode.inputs === void 0 ? leftWaveShaperNode : leftWaveShaperNode.inputs[0]);
          panGainNode.disconnect(rightWaveShaperNode.inputs === void 0 ? rightWaveShaperNode : rightWaveShaperNode.inputs[0]);
          leftWaveShaperNode.disconnect(leftGainNode.gain);
          rightWaveShaperNode.disconnect(rightGainNode.gain);
          leftGainNode.disconnect(channelMergerNode, 0, 0);
          rightGainNode.disconnect(channelMergerNode, 0, 1);
        }
      };
    };
    const buildInternalGraphForStereo = (nativeContext, inputGainNode, panGainNode, channelMergerNode) => {
      const leftInputForLeftOutputWaveShaperCurve = new Float32Array(CURVE_SIZE);
      const leftInputForRightOutputWaveShaperCurve = new Float32Array(CURVE_SIZE);
      const rightInputForLeftOutputWaveShaperCurve = new Float32Array(CURVE_SIZE);
      const rightInputForRightOutputWaveShaperCurve = new Float32Array(CURVE_SIZE);
      const centerIndex = Math.floor(CURVE_SIZE / 2);
      for (let i = 0; i < CURVE_SIZE; i += 1) {
        if (i > centerIndex) {
          const x = (i - centerIndex) / (CURVE_SIZE - 1 - centerIndex) * HALF_PI;
          leftInputForLeftOutputWaveShaperCurve[i] = Math.cos(x);
          leftInputForRightOutputWaveShaperCurve[i] = Math.sin(x);
          rightInputForLeftOutputWaveShaperCurve[i] = 0;
          rightInputForRightOutputWaveShaperCurve[i] = 1;
        } else {
          const x = i / (CURVE_SIZE - 1 - centerIndex) * HALF_PI;
          leftInputForLeftOutputWaveShaperCurve[i] = 1;
          leftInputForRightOutputWaveShaperCurve[i] = 0;
          rightInputForLeftOutputWaveShaperCurve[i] = Math.cos(x);
          rightInputForRightOutputWaveShaperCurve[i] = Math.sin(x);
        }
      }
      const channelSplitterNode = createNativeChannelSplitterNode2(nativeContext, {
        channelCount: 2,
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        numberOfOutputs: 2
      });
      const leftInputForLeftOutputGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
      const leftInputForLeftOutputWaveShaperNode = createNativeWaveShaperNode2(nativeContext, {
        ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS,
        curve: leftInputForLeftOutputWaveShaperCurve
      });
      const leftInputForRightOutputGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
      const leftInputForRightOutputWaveShaperNode = createNativeWaveShaperNode2(nativeContext, {
        ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS,
        curve: leftInputForRightOutputWaveShaperCurve
      });
      const panWaveShaperNode = createNativeWaveShaperNode2(nativeContext, { ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS, curve: DC_CURVE });
      const rightInputForLeftOutputGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
      const rightInputForLeftOutputWaveShaperNode = createNativeWaveShaperNode2(nativeContext, {
        ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS,
        curve: rightInputForLeftOutputWaveShaperCurve
      });
      const rightInputForRightOutputGainNode = createNativeGainNode2(nativeContext, { ...SINGLE_CHANNEL_OPTIONS, gain: 0 });
      const rightInputForRightOutputWaveShaperNode = createNativeWaveShaperNode2(nativeContext, {
        ...SINGLE_CHANNEL_WAVE_SHAPER_OPTIONS,
        curve: rightInputForRightOutputWaveShaperCurve
      });
      return {
        connectGraph() {
          inputGainNode.connect(channelSplitterNode);
          inputGainNode.connect(panWaveShaperNode.inputs === void 0 ? panWaveShaperNode : panWaveShaperNode.inputs[0]);
          channelSplitterNode.connect(leftInputForLeftOutputGainNode, 0);
          channelSplitterNode.connect(leftInputForRightOutputGainNode, 0);
          channelSplitterNode.connect(rightInputForLeftOutputGainNode, 1);
          channelSplitterNode.connect(rightInputForRightOutputGainNode, 1);
          panWaveShaperNode.connect(panGainNode);
          panGainNode.connect(leftInputForLeftOutputWaveShaperNode.inputs === void 0 ? leftInputForLeftOutputWaveShaperNode : leftInputForLeftOutputWaveShaperNode.inputs[0]);
          panGainNode.connect(leftInputForRightOutputWaveShaperNode.inputs === void 0 ? leftInputForRightOutputWaveShaperNode : leftInputForRightOutputWaveShaperNode.inputs[0]);
          panGainNode.connect(rightInputForLeftOutputWaveShaperNode.inputs === void 0 ? rightInputForLeftOutputWaveShaperNode : rightInputForLeftOutputWaveShaperNode.inputs[0]);
          panGainNode.connect(rightInputForRightOutputWaveShaperNode.inputs === void 0 ? rightInputForRightOutputWaveShaperNode : rightInputForRightOutputWaveShaperNode.inputs[0]);
          leftInputForLeftOutputWaveShaperNode.connect(leftInputForLeftOutputGainNode.gain);
          leftInputForRightOutputWaveShaperNode.connect(leftInputForRightOutputGainNode.gain);
          rightInputForLeftOutputWaveShaperNode.connect(rightInputForLeftOutputGainNode.gain);
          rightInputForRightOutputWaveShaperNode.connect(rightInputForRightOutputGainNode.gain);
          leftInputForLeftOutputGainNode.connect(channelMergerNode, 0, 0);
          rightInputForLeftOutputGainNode.connect(channelMergerNode, 0, 0);
          leftInputForRightOutputGainNode.connect(channelMergerNode, 0, 1);
          rightInputForRightOutputGainNode.connect(channelMergerNode, 0, 1);
        },
        disconnectGraph() {
          inputGainNode.disconnect(channelSplitterNode);
          inputGainNode.disconnect(panWaveShaperNode.inputs === void 0 ? panWaveShaperNode : panWaveShaperNode.inputs[0]);
          channelSplitterNode.disconnect(leftInputForLeftOutputGainNode, 0);
          channelSplitterNode.disconnect(leftInputForRightOutputGainNode, 0);
          channelSplitterNode.disconnect(rightInputForLeftOutputGainNode, 1);
          channelSplitterNode.disconnect(rightInputForRightOutputGainNode, 1);
          panWaveShaperNode.disconnect(panGainNode);
          panGainNode.disconnect(leftInputForLeftOutputWaveShaperNode.inputs === void 0 ? leftInputForLeftOutputWaveShaperNode : leftInputForLeftOutputWaveShaperNode.inputs[0]);
          panGainNode.disconnect(leftInputForRightOutputWaveShaperNode.inputs === void 0 ? leftInputForRightOutputWaveShaperNode : leftInputForRightOutputWaveShaperNode.inputs[0]);
          panGainNode.disconnect(rightInputForLeftOutputWaveShaperNode.inputs === void 0 ? rightInputForLeftOutputWaveShaperNode : rightInputForLeftOutputWaveShaperNode.inputs[0]);
          panGainNode.disconnect(rightInputForRightOutputWaveShaperNode.inputs === void 0 ? rightInputForRightOutputWaveShaperNode : rightInputForRightOutputWaveShaperNode.inputs[0]);
          leftInputForLeftOutputWaveShaperNode.disconnect(leftInputForLeftOutputGainNode.gain);
          leftInputForRightOutputWaveShaperNode.disconnect(leftInputForRightOutputGainNode.gain);
          rightInputForLeftOutputWaveShaperNode.disconnect(rightInputForLeftOutputGainNode.gain);
          rightInputForRightOutputWaveShaperNode.disconnect(rightInputForRightOutputGainNode.gain);
          leftInputForLeftOutputGainNode.disconnect(channelMergerNode, 0, 0);
          rightInputForLeftOutputGainNode.disconnect(channelMergerNode, 0, 0);
          leftInputForRightOutputGainNode.disconnect(channelMergerNode, 0, 1);
          rightInputForRightOutputGainNode.disconnect(channelMergerNode, 0, 1);
        }
      };
    };
    const buildInternalGraph = (nativeContext, channelCount, inputGainNode, panGainNode, channelMergerNode) => {
      if (channelCount === 1) {
        return buildInternalGraphForMono(nativeContext, inputGainNode, panGainNode, channelMergerNode);
      }
      if (channelCount === 2) {
        return buildInternalGraphForStereo(nativeContext, inputGainNode, panGainNode, channelMergerNode);
      }
      throw createNotSupportedError2();
    };
    return (nativeContext, { channelCount, channelCountMode, pan, ...audioNodeOptions }) => {
      if (channelCountMode === "max") {
        throw createNotSupportedError2();
      }
      const channelMergerNode = createNativeChannelMergerNode2(nativeContext, {
        ...audioNodeOptions,
        channelCount: 1,
        channelCountMode,
        numberOfInputs: 2
      });
      const inputGainNode = createNativeGainNode2(nativeContext, { ...audioNodeOptions, channelCount, channelCountMode, gain: 1 });
      const panGainNode = createNativeGainNode2(nativeContext, {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        gain: pan
      });
      let { connectGraph, disconnectGraph } = buildInternalGraph(nativeContext, channelCount, inputGainNode, panGainNode, channelMergerNode);
      Object.defineProperty(panGainNode.gain, "defaultValue", { get: () => 0 });
      Object.defineProperty(panGainNode.gain, "maxValue", { get: () => 1 });
      Object.defineProperty(panGainNode.gain, "minValue", { get: () => -1 });
      const nativeStereoPannerNodeFakerFactory2 = {
        get bufferSize() {
          return void 0;
        },
        get channelCount() {
          return inputGainNode.channelCount;
        },
        set channelCount(value) {
          if (inputGainNode.channelCount !== value) {
            if (isConnected) {
              disconnectGraph();
            }
            ({ connectGraph, disconnectGraph } = buildInternalGraph(nativeContext, value, inputGainNode, panGainNode, channelMergerNode));
            if (isConnected) {
              connectGraph();
            }
          }
          inputGainNode.channelCount = value;
        },
        get channelCountMode() {
          return inputGainNode.channelCountMode;
        },
        set channelCountMode(value) {
          if (value === "clamped-max" || value === "max") {
            throw createNotSupportedError2();
          }
          inputGainNode.channelCountMode = value;
        },
        get channelInterpretation() {
          return inputGainNode.channelInterpretation;
        },
        set channelInterpretation(value) {
          inputGainNode.channelInterpretation = value;
        },
        get context() {
          return inputGainNode.context;
        },
        get inputs() {
          return [inputGainNode];
        },
        get numberOfInputs() {
          return inputGainNode.numberOfInputs;
        },
        get numberOfOutputs() {
          return inputGainNode.numberOfOutputs;
        },
        get pan() {
          return panGainNode.gain;
        },
        addEventListener(...args) {
          return inputGainNode.addEventListener(args[0], args[1], args[2]);
        },
        dispatchEvent(...args) {
          return inputGainNode.dispatchEvent(args[0]);
        },
        removeEventListener(...args) {
          return inputGainNode.removeEventListener(args[0], args[1], args[2]);
        }
      };
      let isConnected = false;
      const whenConnected = () => {
        connectGraph();
        isConnected = true;
      };
      const whenDisconnected = () => {
        disconnectGraph();
        isConnected = false;
      };
      return monitorConnections2(interceptConnections(nativeStereoPannerNodeFakerFactory2, channelMergerNode), whenConnected, whenDisconnected);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-wave-shaper-node-factory.js
  var createNativeWaveShaperNodeFactory = (createConnectedNativeAudioBufferSourceNode2, createInvalidStateError2, createNativeWaveShaperNodeFaker2, isDCCurve2, monitorConnections2, nativeAudioContextConstructor2, overwriteAccessors2) => {
    return (nativeContext, options) => {
      const nativeWaveShaperNode = nativeContext.createWaveShaper();
      if (nativeAudioContextConstructor2 !== null && nativeAudioContextConstructor2.name === "webkitAudioContext" && nativeContext.createGain().gain.automationRate === void 0) {
        return createNativeWaveShaperNodeFaker2(nativeContext, options);
      }
      assignNativeAudioNodeOptions(nativeWaveShaperNode, options);
      const curve = options.curve === null || options.curve instanceof Float32Array ? options.curve : new Float32Array(options.curve);
      if (curve !== null && curve.length < 2) {
        throw createInvalidStateError2();
      }
      assignNativeAudioNodeOption(nativeWaveShaperNode, { curve }, "curve");
      assignNativeAudioNodeOption(nativeWaveShaperNode, options, "oversample");
      let disconnectNativeAudioBufferSourceNode = null;
      let isConnected = false;
      overwriteAccessors2(nativeWaveShaperNode, "curve", (get) => () => get.call(nativeWaveShaperNode), (set) => (value) => {
        set.call(nativeWaveShaperNode, value);
        if (isConnected) {
          if (isDCCurve2(value) && disconnectNativeAudioBufferSourceNode === null) {
            disconnectNativeAudioBufferSourceNode = createConnectedNativeAudioBufferSourceNode2(nativeContext, nativeWaveShaperNode);
          } else if (!isDCCurve2(value) && disconnectNativeAudioBufferSourceNode !== null) {
            disconnectNativeAudioBufferSourceNode();
            disconnectNativeAudioBufferSourceNode = null;
          }
        }
        return value;
      });
      const whenConnected = () => {
        isConnected = true;
        if (isDCCurve2(nativeWaveShaperNode.curve)) {
          disconnectNativeAudioBufferSourceNode = createConnectedNativeAudioBufferSourceNode2(nativeContext, nativeWaveShaperNode);
        }
      };
      const whenDisconnected = () => {
        isConnected = false;
        if (disconnectNativeAudioBufferSourceNode !== null) {
          disconnectNativeAudioBufferSourceNode();
          disconnectNativeAudioBufferSourceNode = null;
        }
      };
      return monitorConnections2(nativeWaveShaperNode, whenConnected, whenDisconnected);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/native-wave-shaper-node-faker-factory.js
  var createNativeWaveShaperNodeFakerFactory = (createConnectedNativeAudioBufferSourceNode2, createInvalidStateError2, createNativeGainNode2, isDCCurve2, monitorConnections2) => {
    return (nativeContext, { curve, oversample, ...audioNodeOptions }) => {
      const negativeWaveShaperNode = nativeContext.createWaveShaper();
      const positiveWaveShaperNode = nativeContext.createWaveShaper();
      assignNativeAudioNodeOptions(negativeWaveShaperNode, audioNodeOptions);
      assignNativeAudioNodeOptions(positiveWaveShaperNode, audioNodeOptions);
      const inputGainNode = createNativeGainNode2(nativeContext, { ...audioNodeOptions, gain: 1 });
      const invertGainNode = createNativeGainNode2(nativeContext, { ...audioNodeOptions, gain: -1 });
      const outputGainNode = createNativeGainNode2(nativeContext, { ...audioNodeOptions, gain: 1 });
      const revertGainNode = createNativeGainNode2(nativeContext, { ...audioNodeOptions, gain: -1 });
      let disconnectNativeAudioBufferSourceNode = null;
      let isConnected = false;
      let unmodifiedCurve = null;
      const nativeWaveShaperNodeFaker = {
        get bufferSize() {
          return void 0;
        },
        get channelCount() {
          return negativeWaveShaperNode.channelCount;
        },
        set channelCount(value) {
          inputGainNode.channelCount = value;
          invertGainNode.channelCount = value;
          negativeWaveShaperNode.channelCount = value;
          outputGainNode.channelCount = value;
          positiveWaveShaperNode.channelCount = value;
          revertGainNode.channelCount = value;
        },
        get channelCountMode() {
          return negativeWaveShaperNode.channelCountMode;
        },
        set channelCountMode(value) {
          inputGainNode.channelCountMode = value;
          invertGainNode.channelCountMode = value;
          negativeWaveShaperNode.channelCountMode = value;
          outputGainNode.channelCountMode = value;
          positiveWaveShaperNode.channelCountMode = value;
          revertGainNode.channelCountMode = value;
        },
        get channelInterpretation() {
          return negativeWaveShaperNode.channelInterpretation;
        },
        set channelInterpretation(value) {
          inputGainNode.channelInterpretation = value;
          invertGainNode.channelInterpretation = value;
          negativeWaveShaperNode.channelInterpretation = value;
          outputGainNode.channelInterpretation = value;
          positiveWaveShaperNode.channelInterpretation = value;
          revertGainNode.channelInterpretation = value;
        },
        get context() {
          return negativeWaveShaperNode.context;
        },
        get curve() {
          return unmodifiedCurve;
        },
        set curve(value) {
          if (value !== null && value.length < 2) {
            throw createInvalidStateError2();
          }
          if (value === null) {
            negativeWaveShaperNode.curve = value;
            positiveWaveShaperNode.curve = value;
          } else {
            const curveLength = value.length;
            const negativeCurve = new Float32Array(curveLength + 2 - curveLength % 2);
            const positiveCurve = new Float32Array(curveLength + 2 - curveLength % 2);
            negativeCurve[0] = value[0];
            positiveCurve[0] = -value[curveLength - 1];
            const length = Math.ceil((curveLength + 1) / 2);
            const centerIndex = (curveLength + 1) / 2 - 1;
            for (let i = 1; i < length; i += 1) {
              const theoreticIndex = i / length * centerIndex;
              const lowerIndex = Math.floor(theoreticIndex);
              const upperIndex = Math.ceil(theoreticIndex);
              negativeCurve[i] = lowerIndex === upperIndex ? value[lowerIndex] : (1 - (theoreticIndex - lowerIndex)) * value[lowerIndex] + (1 - (upperIndex - theoreticIndex)) * value[upperIndex];
              positiveCurve[i] = lowerIndex === upperIndex ? -value[curveLength - 1 - lowerIndex] : -((1 - (theoreticIndex - lowerIndex)) * value[curveLength - 1 - lowerIndex]) - (1 - (upperIndex - theoreticIndex)) * value[curveLength - 1 - upperIndex];
            }
            negativeCurve[length] = curveLength % 2 === 1 ? value[length - 1] : (value[length - 2] + value[length - 1]) / 2;
            negativeWaveShaperNode.curve = negativeCurve;
            positiveWaveShaperNode.curve = positiveCurve;
          }
          unmodifiedCurve = value;
          if (isConnected) {
            if (isDCCurve2(unmodifiedCurve) && disconnectNativeAudioBufferSourceNode === null) {
              disconnectNativeAudioBufferSourceNode = createConnectedNativeAudioBufferSourceNode2(nativeContext, inputGainNode);
            } else if (disconnectNativeAudioBufferSourceNode !== null) {
              disconnectNativeAudioBufferSourceNode();
              disconnectNativeAudioBufferSourceNode = null;
            }
          }
        },
        get inputs() {
          return [inputGainNode];
        },
        get numberOfInputs() {
          return negativeWaveShaperNode.numberOfInputs;
        },
        get numberOfOutputs() {
          return negativeWaveShaperNode.numberOfOutputs;
        },
        get oversample() {
          return negativeWaveShaperNode.oversample;
        },
        set oversample(value) {
          negativeWaveShaperNode.oversample = value;
          positiveWaveShaperNode.oversample = value;
        },
        addEventListener(...args) {
          return inputGainNode.addEventListener(args[0], args[1], args[2]);
        },
        dispatchEvent(...args) {
          return inputGainNode.dispatchEvent(args[0]);
        },
        removeEventListener(...args) {
          return inputGainNode.removeEventListener(args[0], args[1], args[2]);
        }
      };
      if (curve !== null) {
        nativeWaveShaperNodeFaker.curve = curve instanceof Float32Array ? curve : new Float32Array(curve);
      }
      if (oversample !== nativeWaveShaperNodeFaker.oversample) {
        nativeWaveShaperNodeFaker.oversample = oversample;
      }
      const whenConnected = () => {
        inputGainNode.connect(negativeWaveShaperNode).connect(outputGainNode);
        inputGainNode.connect(invertGainNode).connect(positiveWaveShaperNode).connect(revertGainNode).connect(outputGainNode);
        isConnected = true;
        if (isDCCurve2(unmodifiedCurve)) {
          disconnectNativeAudioBufferSourceNode = createConnectedNativeAudioBufferSourceNode2(nativeContext, inputGainNode);
        }
      };
      const whenDisconnected = () => {
        inputGainNode.disconnect(negativeWaveShaperNode);
        negativeWaveShaperNode.disconnect(outputGainNode);
        inputGainNode.disconnect(invertGainNode);
        invertGainNode.disconnect(positiveWaveShaperNode);
        positiveWaveShaperNode.disconnect(revertGainNode);
        revertGainNode.disconnect(outputGainNode);
        isConnected = false;
        if (disconnectNativeAudioBufferSourceNode !== null) {
          disconnectNativeAudioBufferSourceNode();
          disconnectNativeAudioBufferSourceNode = null;
        }
      };
      return monitorConnections2(interceptConnections(nativeWaveShaperNodeFaker, outputGainNode), whenConnected, whenDisconnected);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/not-supported-error.js
  var createNotSupportedError = () => new DOMException("", "NotSupportedError");

  // node_modules/standardized-audio-context/build/es2019/factories/offline-audio-context-constructor.js
  var DEFAULT_OPTIONS16 = {
    numberOfChannels: 1
  };
  var createOfflineAudioContextConstructor = (baseAudioContextConstructor2, cacheTestResult2, createInvalidStateError2, createNativeOfflineAudioContext2, startRendering2) => {
    return class OfflineAudioContext extends baseAudioContextConstructor2 {
      constructor(a, b, c) {
        let options;
        if (typeof a === "number" && b !== void 0 && c !== void 0) {
          options = { length: b, numberOfChannels: a, sampleRate: c };
        } else if (typeof a === "object") {
          options = a;
        } else {
          throw new Error("The given parameters are not valid.");
        }
        const { length, numberOfChannels, sampleRate } = { ...DEFAULT_OPTIONS16, ...options };
        const nativeOfflineAudioContext = createNativeOfflineAudioContext2(numberOfChannels, length, sampleRate);
        if (!cacheTestResult2(testPromiseSupport, () => testPromiseSupport(nativeOfflineAudioContext))) {
          nativeOfflineAudioContext.addEventListener("statechange", /* @__PURE__ */ (() => {
            let i = 0;
            const delayStateChangeEvent = (event) => {
              if (this._state === "running") {
                if (i > 0) {
                  nativeOfflineAudioContext.removeEventListener("statechange", delayStateChangeEvent);
                  event.stopImmediatePropagation();
                  this._waitForThePromiseToSettle(event);
                } else {
                  i += 1;
                }
              }
            };
            return delayStateChangeEvent;
          })());
        }
        super(nativeOfflineAudioContext, numberOfChannels);
        this._length = length;
        this._nativeOfflineAudioContext = nativeOfflineAudioContext;
        this._state = null;
      }
      get length() {
        if (this._nativeOfflineAudioContext.length === void 0) {
          return this._length;
        }
        return this._nativeOfflineAudioContext.length;
      }
      get state() {
        return this._state === null ? this._nativeOfflineAudioContext.state : this._state;
      }
      startRendering() {
        if (this._state === "running") {
          return Promise.reject(createInvalidStateError2());
        }
        this._state = "running";
        return startRendering2(this.destination, this._nativeOfflineAudioContext).finally(() => {
          this._state = null;
          deactivateAudioGraph(this);
        });
      }
      _waitForThePromiseToSettle(event) {
        if (this._state === null) {
          this._nativeOfflineAudioContext.dispatchEvent(event);
        } else {
          setTimeout(() => this._waitForThePromiseToSettle(event));
        }
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/oscillator-node-constructor.js
  var DEFAULT_OPTIONS17 = {
    channelCount: 2,
    channelCountMode: "max",
    // This attribute has no effect for nodes with no inputs.
    channelInterpretation: "speakers",
    // This attribute has no effect for nodes with no inputs.
    detune: 0,
    frequency: 440,
    periodicWave: void 0,
    type: "sine"
  };
  var createOscillatorNodeConstructor = (audioNodeConstructor2, createAudioParam2, createNativeOscillatorNode2, createOscillatorNodeRenderer2, getNativeContext2, isNativeOfflineAudioContext2, wrapEventListener2) => {
    return class OscillatorNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const mergedOptions = { ...DEFAULT_OPTIONS17, ...options };
        const nativeOscillatorNode = createNativeOscillatorNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const oscillatorNodeRenderer = isOffline ? createOscillatorNodeRenderer2() : null;
        const nyquist = context2.sampleRate / 2;
        super(context2, false, nativeOscillatorNode, oscillatorNodeRenderer);
        this._detune = createAudioParam2(this, isOffline, nativeOscillatorNode.detune, 153600, -153600);
        this._frequency = createAudioParam2(this, isOffline, nativeOscillatorNode.frequency, nyquist, -nyquist);
        this._nativeOscillatorNode = nativeOscillatorNode;
        this._onended = null;
        this._oscillatorNodeRenderer = oscillatorNodeRenderer;
        if (this._oscillatorNodeRenderer !== null && mergedOptions.periodicWave !== void 0) {
          this._oscillatorNodeRenderer.periodicWave = mergedOptions.periodicWave;
        }
      }
      get detune() {
        return this._detune;
      }
      get frequency() {
        return this._frequency;
      }
      get onended() {
        return this._onended;
      }
      set onended(value) {
        const wrappedListener = typeof value === "function" ? wrapEventListener2(this, value) : null;
        this._nativeOscillatorNode.onended = wrappedListener;
        const nativeOnEnded = this._nativeOscillatorNode.onended;
        this._onended = nativeOnEnded !== null && nativeOnEnded === wrappedListener ? value : nativeOnEnded;
      }
      get type() {
        return this._nativeOscillatorNode.type;
      }
      set type(value) {
        this._nativeOscillatorNode.type = value;
        if (this._oscillatorNodeRenderer !== null) {
          this._oscillatorNodeRenderer.periodicWave = null;
        }
      }
      setPeriodicWave(periodicWave) {
        this._nativeOscillatorNode.setPeriodicWave(periodicWave);
        if (this._oscillatorNodeRenderer !== null) {
          this._oscillatorNodeRenderer.periodicWave = periodicWave;
        }
      }
      start(when = 0) {
        this._nativeOscillatorNode.start(when);
        if (this._oscillatorNodeRenderer !== null) {
          this._oscillatorNodeRenderer.start = when;
        }
        if (this.context.state !== "closed") {
          setInternalStateToActive(this);
          const resetInternalStateToPassive = () => {
            this._nativeOscillatorNode.removeEventListener("ended", resetInternalStateToPassive);
            if (isActiveAudioNode(this)) {
              setInternalStateToPassive(this);
            }
          };
          this._nativeOscillatorNode.addEventListener("ended", resetInternalStateToPassive);
        }
      }
      stop(when = 0) {
        this._nativeOscillatorNode.stop(when);
        if (this._oscillatorNodeRenderer !== null) {
          this._oscillatorNodeRenderer.stop = when;
        }
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/oscillator-node-renderer-factory.js
  var createOscillatorNodeRendererFactory = (connectAudioParam2, createNativeOscillatorNode2, getNativeAudioNode2, renderAutomation2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeOscillatorNodes = /* @__PURE__ */ new WeakMap();
      let periodicWave = null;
      let start2 = null;
      let stop = null;
      const createOscillatorNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeOscillatorNode = getNativeAudioNode2(proxy);
        const nativeOscillatorNodeIsOwnedByContext = isOwnedByContext(nativeOscillatorNode, nativeOfflineAudioContext);
        if (!nativeOscillatorNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeOscillatorNode.channelCount,
            channelCountMode: nativeOscillatorNode.channelCountMode,
            channelInterpretation: nativeOscillatorNode.channelInterpretation,
            detune: nativeOscillatorNode.detune.value,
            frequency: nativeOscillatorNode.frequency.value,
            periodicWave: periodicWave === null ? void 0 : periodicWave,
            type: nativeOscillatorNode.type
          };
          nativeOscillatorNode = createNativeOscillatorNode2(nativeOfflineAudioContext, options);
          if (start2 !== null) {
            nativeOscillatorNode.start(start2);
          }
          if (stop !== null) {
            nativeOscillatorNode.stop(stop);
          }
        }
        renderedNativeOscillatorNodes.set(nativeOfflineAudioContext, nativeOscillatorNode);
        if (!nativeOscillatorNodeIsOwnedByContext) {
          await renderAutomation2(nativeOfflineAudioContext, proxy.detune, nativeOscillatorNode.detune);
          await renderAutomation2(nativeOfflineAudioContext, proxy.frequency, nativeOscillatorNode.frequency);
        } else {
          await connectAudioParam2(nativeOfflineAudioContext, proxy.detune, nativeOscillatorNode.detune);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.frequency, nativeOscillatorNode.frequency);
        }
        await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeOscillatorNode);
        return nativeOscillatorNode;
      };
      return {
        set periodicWave(value) {
          periodicWave = value;
        },
        set start(value) {
          start2 = value;
        },
        set stop(value) {
          stop = value;
        },
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeOscillatorNode = renderedNativeOscillatorNodes.get(nativeOfflineAudioContext);
          if (renderedNativeOscillatorNode !== void 0) {
            return Promise.resolve(renderedNativeOscillatorNode);
          }
          return createOscillatorNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/panner-node-constructor.js
  var DEFAULT_OPTIONS18 = {
    channelCount: 2,
    channelCountMode: "clamped-max",
    channelInterpretation: "speakers",
    coneInnerAngle: 360,
    coneOuterAngle: 360,
    coneOuterGain: 0,
    distanceModel: "inverse",
    maxDistance: 1e4,
    orientationX: 1,
    orientationY: 0,
    orientationZ: 0,
    panningModel: "equalpower",
    positionX: 0,
    positionY: 0,
    positionZ: 0,
    refDistance: 1,
    rolloffFactor: 1
  };
  var createPannerNodeConstructor = (audioNodeConstructor2, createAudioParam2, createNativePannerNode2, createPannerNodeRenderer2, getNativeContext2, isNativeOfflineAudioContext2, setAudioNodeTailTime2) => {
    return class PannerNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const mergedOptions = { ...DEFAULT_OPTIONS18, ...options };
        const nativePannerNode = createNativePannerNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const pannerNodeRenderer = isOffline ? createPannerNodeRenderer2() : null;
        super(context2, false, nativePannerNode, pannerNodeRenderer);
        this._nativePannerNode = nativePannerNode;
        this._orientationX = createAudioParam2(this, isOffline, nativePannerNode.orientationX, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
        this._orientationY = createAudioParam2(this, isOffline, nativePannerNode.orientationY, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
        this._orientationZ = createAudioParam2(this, isOffline, nativePannerNode.orientationZ, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
        this._positionX = createAudioParam2(this, isOffline, nativePannerNode.positionX, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
        this._positionY = createAudioParam2(this, isOffline, nativePannerNode.positionY, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
        this._positionZ = createAudioParam2(this, isOffline, nativePannerNode.positionZ, MOST_POSITIVE_SINGLE_FLOAT, MOST_NEGATIVE_SINGLE_FLOAT);
        setAudioNodeTailTime2(this, 1);
      }
      get coneInnerAngle() {
        return this._nativePannerNode.coneInnerAngle;
      }
      set coneInnerAngle(value) {
        this._nativePannerNode.coneInnerAngle = value;
      }
      get coneOuterAngle() {
        return this._nativePannerNode.coneOuterAngle;
      }
      set coneOuterAngle(value) {
        this._nativePannerNode.coneOuterAngle = value;
      }
      get coneOuterGain() {
        return this._nativePannerNode.coneOuterGain;
      }
      set coneOuterGain(value) {
        this._nativePannerNode.coneOuterGain = value;
      }
      get distanceModel() {
        return this._nativePannerNode.distanceModel;
      }
      set distanceModel(value) {
        this._nativePannerNode.distanceModel = value;
      }
      get maxDistance() {
        return this._nativePannerNode.maxDistance;
      }
      set maxDistance(value) {
        this._nativePannerNode.maxDistance = value;
      }
      get orientationX() {
        return this._orientationX;
      }
      get orientationY() {
        return this._orientationY;
      }
      get orientationZ() {
        return this._orientationZ;
      }
      get panningModel() {
        return this._nativePannerNode.panningModel;
      }
      set panningModel(value) {
        this._nativePannerNode.panningModel = value;
      }
      get positionX() {
        return this._positionX;
      }
      get positionY() {
        return this._positionY;
      }
      get positionZ() {
        return this._positionZ;
      }
      get refDistance() {
        return this._nativePannerNode.refDistance;
      }
      set refDistance(value) {
        this._nativePannerNode.refDistance = value;
      }
      get rolloffFactor() {
        return this._nativePannerNode.rolloffFactor;
      }
      set rolloffFactor(value) {
        this._nativePannerNode.rolloffFactor = value;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/panner-node-renderer-factory.js
  var createPannerNodeRendererFactory = (connectAudioParam2, createNativeChannelMergerNode2, createNativeConstantSourceNode2, createNativeGainNode2, createNativePannerNode2, getNativeAudioNode2, nativeOfflineAudioContextConstructor2, renderAutomation2, renderInputsOfAudioNode2, renderNativeOfflineAudioContext2) => {
    return () => {
      const renderedNativeAudioNodes = /* @__PURE__ */ new WeakMap();
      let renderedBufferPromise = null;
      const createAudioNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeGainNode = null;
        let nativePannerNode = getNativeAudioNode2(proxy);
        const commonAudioNodeOptions = {
          channelCount: nativePannerNode.channelCount,
          channelCountMode: nativePannerNode.channelCountMode,
          channelInterpretation: nativePannerNode.channelInterpretation
        };
        const commonNativePannerNodeOptions = {
          ...commonAudioNodeOptions,
          coneInnerAngle: nativePannerNode.coneInnerAngle,
          coneOuterAngle: nativePannerNode.coneOuterAngle,
          coneOuterGain: nativePannerNode.coneOuterGain,
          distanceModel: nativePannerNode.distanceModel,
          maxDistance: nativePannerNode.maxDistance,
          panningModel: nativePannerNode.panningModel,
          refDistance: nativePannerNode.refDistance,
          rolloffFactor: nativePannerNode.rolloffFactor
        };
        const nativePannerNodeIsOwnedByContext = isOwnedByContext(nativePannerNode, nativeOfflineAudioContext);
        if ("bufferSize" in nativePannerNode) {
          nativeGainNode = createNativeGainNode2(nativeOfflineAudioContext, { ...commonAudioNodeOptions, gain: 1 });
        } else if (!nativePannerNodeIsOwnedByContext) {
          const options = {
            ...commonNativePannerNodeOptions,
            orientationX: nativePannerNode.orientationX.value,
            orientationY: nativePannerNode.orientationY.value,
            orientationZ: nativePannerNode.orientationZ.value,
            positionX: nativePannerNode.positionX.value,
            positionY: nativePannerNode.positionY.value,
            positionZ: nativePannerNode.positionZ.value
          };
          nativePannerNode = createNativePannerNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeAudioNodes.set(nativeOfflineAudioContext, nativeGainNode === null ? nativePannerNode : nativeGainNode);
        if (nativeGainNode !== null) {
          if (renderedBufferPromise === null) {
            if (nativeOfflineAudioContextConstructor2 === null) {
              throw new Error("Missing the native OfflineAudioContext constructor.");
            }
            const partialOfflineAudioContext = new nativeOfflineAudioContextConstructor2(
              6,
              // Bug #17: Safari does not yet expose the length.
              proxy.context.length,
              nativeOfflineAudioContext.sampleRate
            );
            const nativeChannelMergerNode = createNativeChannelMergerNode2(partialOfflineAudioContext, {
              channelCount: 1,
              channelCountMode: "explicit",
              channelInterpretation: "speakers",
              numberOfInputs: 6
            });
            nativeChannelMergerNode.connect(partialOfflineAudioContext.destination);
            renderedBufferPromise = (async () => {
              const nativeConstantSourceNodes = await Promise.all([
                proxy.orientationX,
                proxy.orientationY,
                proxy.orientationZ,
                proxy.positionX,
                proxy.positionY,
                proxy.positionZ
              ].map(async (audioParam, index) => {
                const nativeConstantSourceNode = createNativeConstantSourceNode2(partialOfflineAudioContext, {
                  channelCount: 1,
                  channelCountMode: "explicit",
                  channelInterpretation: "discrete",
                  offset: index === 0 ? 1 : 0
                });
                await renderAutomation2(partialOfflineAudioContext, audioParam, nativeConstantSourceNode.offset);
                return nativeConstantSourceNode;
              }));
              for (let i = 0; i < 6; i += 1) {
                nativeConstantSourceNodes[i].connect(nativeChannelMergerNode, 0, i);
                nativeConstantSourceNodes[i].start(0);
              }
              return renderNativeOfflineAudioContext2(partialOfflineAudioContext);
            })();
          }
          const renderedBuffer = await renderedBufferPromise;
          const inputGainNode = createNativeGainNode2(nativeOfflineAudioContext, { ...commonAudioNodeOptions, gain: 1 });
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, inputGainNode);
          const channelDatas = [];
          for (let i = 0; i < renderedBuffer.numberOfChannels; i += 1) {
            channelDatas.push(renderedBuffer.getChannelData(i));
          }
          let lastOrientation = [channelDatas[0][0], channelDatas[1][0], channelDatas[2][0]];
          let lastPosition = [channelDatas[3][0], channelDatas[4][0], channelDatas[5][0]];
          let gateGainNode = createNativeGainNode2(nativeOfflineAudioContext, { ...commonAudioNodeOptions, gain: 1 });
          let partialPannerNode = createNativePannerNode2(nativeOfflineAudioContext, {
            ...commonNativePannerNodeOptions,
            orientationX: lastOrientation[0],
            orientationY: lastOrientation[1],
            orientationZ: lastOrientation[2],
            positionX: lastPosition[0],
            positionY: lastPosition[1],
            positionZ: lastPosition[2]
          });
          inputGainNode.connect(gateGainNode).connect(partialPannerNode.inputs[0]);
          partialPannerNode.connect(nativeGainNode);
          for (let i = 128; i < renderedBuffer.length; i += 128) {
            const orientation = [channelDatas[0][i], channelDatas[1][i], channelDatas[2][i]];
            const positon = [channelDatas[3][i], channelDatas[4][i], channelDatas[5][i]];
            if (orientation.some((value, index) => value !== lastOrientation[index]) || positon.some((value, index) => value !== lastPosition[index])) {
              lastOrientation = orientation;
              lastPosition = positon;
              const currentTime = i / nativeOfflineAudioContext.sampleRate;
              gateGainNode.gain.setValueAtTime(0, currentTime);
              gateGainNode = createNativeGainNode2(nativeOfflineAudioContext, { ...commonAudioNodeOptions, gain: 0 });
              partialPannerNode = createNativePannerNode2(nativeOfflineAudioContext, {
                ...commonNativePannerNodeOptions,
                orientationX: lastOrientation[0],
                orientationY: lastOrientation[1],
                orientationZ: lastOrientation[2],
                positionX: lastPosition[0],
                positionY: lastPosition[1],
                positionZ: lastPosition[2]
              });
              gateGainNode.gain.setValueAtTime(1, currentTime);
              inputGainNode.connect(gateGainNode).connect(partialPannerNode.inputs[0]);
              partialPannerNode.connect(nativeGainNode);
            }
          }
          return nativeGainNode;
        }
        if (!nativePannerNodeIsOwnedByContext) {
          await renderAutomation2(nativeOfflineAudioContext, proxy.orientationX, nativePannerNode.orientationX);
          await renderAutomation2(nativeOfflineAudioContext, proxy.orientationY, nativePannerNode.orientationY);
          await renderAutomation2(nativeOfflineAudioContext, proxy.orientationZ, nativePannerNode.orientationZ);
          await renderAutomation2(nativeOfflineAudioContext, proxy.positionX, nativePannerNode.positionX);
          await renderAutomation2(nativeOfflineAudioContext, proxy.positionY, nativePannerNode.positionY);
          await renderAutomation2(nativeOfflineAudioContext, proxy.positionZ, nativePannerNode.positionZ);
        } else {
          await connectAudioParam2(nativeOfflineAudioContext, proxy.orientationX, nativePannerNode.orientationX);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.orientationY, nativePannerNode.orientationY);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.orientationZ, nativePannerNode.orientationZ);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.positionX, nativePannerNode.positionX);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.positionY, nativePannerNode.positionY);
          await connectAudioParam2(nativeOfflineAudioContext, proxy.positionZ, nativePannerNode.positionZ);
        }
        if (isNativeAudioNodeFaker(nativePannerNode)) {
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativePannerNode.inputs[0]);
        } else {
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativePannerNode);
        }
        return nativePannerNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeGainNodeOrNativePannerNode = renderedNativeAudioNodes.get(nativeOfflineAudioContext);
          if (renderedNativeGainNodeOrNativePannerNode !== void 0) {
            return Promise.resolve(renderedNativeGainNodeOrNativePannerNode);
          }
          return createAudioNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/periodic-wave-constructor.js
  var DEFAULT_OPTIONS19 = {
    disableNormalization: false
  };
  var createPeriodicWaveConstructor = (createNativePeriodicWave2, getNativeContext2, periodicWaveStore, sanitizePeriodicWaveOptions2) => {
    return class PeriodicWave {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const mergedOptions = sanitizePeriodicWaveOptions2({ ...DEFAULT_OPTIONS19, ...options });
        const periodicWave = createNativePeriodicWave2(nativeContext, mergedOptions);
        periodicWaveStore.add(periodicWave);
        return periodicWave;
      }
      static [Symbol.hasInstance](instance) {
        return instance !== null && typeof instance === "object" && Object.getPrototypeOf(instance) === PeriodicWave.prototype || periodicWaveStore.has(instance);
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/render-automation.js
  var createRenderAutomation = (getAudioParamRenderer, renderInputsOfAudioParam2) => {
    return (nativeOfflineAudioContext, audioParam, nativeAudioParam) => {
      const audioParamRenderer = getAudioParamRenderer(audioParam);
      audioParamRenderer.replay(nativeAudioParam);
      return renderInputsOfAudioParam2(audioParam, nativeOfflineAudioContext, nativeAudioParam);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/render-inputs-of-audio-node.js
  var createRenderInputsOfAudioNode = (getAudioNodeConnections2, getAudioNodeRenderer2, isPartOfACycle2) => {
    return async (audioNode, nativeOfflineAudioContext, nativeAudioNode) => {
      const audioNodeConnections = getAudioNodeConnections2(audioNode);
      await Promise.all(audioNodeConnections.activeInputs.map((connections, input) => Array.from(connections).map(async ([source, output]) => {
        const audioNodeRenderer = getAudioNodeRenderer2(source);
        const renderedNativeAudioNode = await audioNodeRenderer.render(source, nativeOfflineAudioContext);
        const destination = audioNode.context.destination;
        if (!isPartOfACycle2(source) && (audioNode !== destination || !isPartOfACycle2(audioNode))) {
          renderedNativeAudioNode.connect(nativeAudioNode, output, input);
        }
      })).reduce((allRenderingPromises, renderingPromises) => [...allRenderingPromises, ...renderingPromises], []));
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/render-inputs-of-audio-param.js
  var createRenderInputsOfAudioParam = (getAudioNodeRenderer2, getAudioParamConnections2, isPartOfACycle2) => {
    return async (audioParam, nativeOfflineAudioContext, nativeAudioParam) => {
      const audioParamConnections = getAudioParamConnections2(audioParam);
      await Promise.all(Array.from(audioParamConnections.activeInputs).map(async ([source, output]) => {
        const audioNodeRenderer = getAudioNodeRenderer2(source);
        const renderedNativeAudioNode = await audioNodeRenderer.render(source, nativeOfflineAudioContext);
        if (!isPartOfACycle2(source)) {
          renderedNativeAudioNode.connect(nativeAudioParam, output);
        }
      }));
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/render-native-offline-audio-context.js
  var createRenderNativeOfflineAudioContext = (cacheTestResult2, createNativeGainNode2, createNativeScriptProcessorNode2, testOfflineAudioContextCurrentTimeSupport) => {
    return (nativeOfflineAudioContext) => {
      if (cacheTestResult2(testPromiseSupport, () => testPromiseSupport(nativeOfflineAudioContext))) {
        return Promise.resolve(cacheTestResult2(testOfflineAudioContextCurrentTimeSupport, testOfflineAudioContextCurrentTimeSupport)).then((isOfflineAudioContextCurrentTimeSupported) => {
          if (!isOfflineAudioContextCurrentTimeSupported) {
            const scriptProcessorNode = createNativeScriptProcessorNode2(nativeOfflineAudioContext, 512, 0, 1);
            nativeOfflineAudioContext.oncomplete = () => {
              scriptProcessorNode.onaudioprocess = null;
              scriptProcessorNode.disconnect();
            };
            scriptProcessorNode.onaudioprocess = () => nativeOfflineAudioContext.currentTime;
            scriptProcessorNode.connect(nativeOfflineAudioContext.destination);
          }
          return nativeOfflineAudioContext.startRendering();
        });
      }
      return new Promise((resolve) => {
        const gainNode = createNativeGainNode2(nativeOfflineAudioContext, {
          channelCount: 1,
          channelCountMode: "explicit",
          channelInterpretation: "discrete",
          gain: 0
        });
        nativeOfflineAudioContext.oncomplete = (event) => {
          gainNode.disconnect();
          resolve(event.renderedBuffer);
        };
        gainNode.connect(nativeOfflineAudioContext.destination);
        nativeOfflineAudioContext.startRendering();
      });
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/set-active-audio-worklet-node-inputs.js
  var createSetActiveAudioWorkletNodeInputs = (activeAudioWorkletNodeInputsStore2) => {
    return (nativeAudioWorkletNode, activeInputs) => {
      activeAudioWorkletNodeInputsStore2.set(nativeAudioWorkletNode, activeInputs);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/set-audio-node-tail-time.js
  var createSetAudioNodeTailTime = (audioNodeTailTimeStore2) => {
    return (audioNode, tailTime) => audioNodeTailTimeStore2.set(audioNode, tailTime);
  };

  // node_modules/standardized-audio-context/build/es2019/factories/start-rendering.js
  var createStartRendering = (audioBufferStore2, cacheTestResult2, getAudioNodeRenderer2, getUnrenderedAudioWorkletNodes2, renderNativeOfflineAudioContext2, testAudioBufferCopyChannelMethodsOutOfBoundsSupport2, wrapAudioBufferCopyChannelMethods2, wrapAudioBufferCopyChannelMethodsOutOfBounds2) => {
    return (destination, nativeOfflineAudioContext) => getAudioNodeRenderer2(destination).render(destination, nativeOfflineAudioContext).then(() => Promise.all(Array.from(getUnrenderedAudioWorkletNodes2(nativeOfflineAudioContext)).map((audioWorkletNode) => getAudioNodeRenderer2(audioWorkletNode).render(audioWorkletNode, nativeOfflineAudioContext)))).then(() => renderNativeOfflineAudioContext2(nativeOfflineAudioContext)).then((audioBuffer) => {
      if (typeof audioBuffer.copyFromChannel !== "function") {
        wrapAudioBufferCopyChannelMethods2(audioBuffer);
        wrapAudioBufferGetChannelDataMethod(audioBuffer);
      } else if (!cacheTestResult2(testAudioBufferCopyChannelMethodsOutOfBoundsSupport2, () => testAudioBufferCopyChannelMethodsOutOfBoundsSupport2(audioBuffer))) {
        wrapAudioBufferCopyChannelMethodsOutOfBounds2(audioBuffer);
      }
      audioBufferStore2.add(audioBuffer);
      return audioBuffer;
    });
  };

  // node_modules/standardized-audio-context/build/es2019/factories/stereo-panner-node-constructor.js
  var DEFAULT_OPTIONS20 = {
    channelCount: 2,
    /*
     * Bug #105: The channelCountMode should be 'clamped-max' according to the spec but is set to 'explicit' to achieve consistent
     * behavior.
     */
    channelCountMode: "explicit",
    channelInterpretation: "speakers",
    pan: 0
  };
  var createStereoPannerNodeConstructor = (audioNodeConstructor2, createAudioParam2, createNativeStereoPannerNode2, createStereoPannerNodeRenderer2, getNativeContext2, isNativeOfflineAudioContext2) => {
    return class StereoPannerNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const mergedOptions = { ...DEFAULT_OPTIONS20, ...options };
        const nativeStereoPannerNode = createNativeStereoPannerNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const stereoPannerNodeRenderer = isOffline ? createStereoPannerNodeRenderer2() : null;
        super(context2, false, nativeStereoPannerNode, stereoPannerNodeRenderer);
        this._pan = createAudioParam2(this, isOffline, nativeStereoPannerNode.pan);
      }
      get pan() {
        return this._pan;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/stereo-panner-node-renderer-factory.js
  var createStereoPannerNodeRendererFactory = (connectAudioParam2, createNativeStereoPannerNode2, getNativeAudioNode2, renderAutomation2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeStereoPannerNodes = /* @__PURE__ */ new WeakMap();
      const createStereoPannerNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeStereoPannerNode = getNativeAudioNode2(proxy);
        const nativeStereoPannerNodeIsOwnedByContext = isOwnedByContext(nativeStereoPannerNode, nativeOfflineAudioContext);
        if (!nativeStereoPannerNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeStereoPannerNode.channelCount,
            channelCountMode: nativeStereoPannerNode.channelCountMode,
            channelInterpretation: nativeStereoPannerNode.channelInterpretation,
            pan: nativeStereoPannerNode.pan.value
          };
          nativeStereoPannerNode = createNativeStereoPannerNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeStereoPannerNodes.set(nativeOfflineAudioContext, nativeStereoPannerNode);
        if (!nativeStereoPannerNodeIsOwnedByContext) {
          await renderAutomation2(nativeOfflineAudioContext, proxy.pan, nativeStereoPannerNode.pan);
        } else {
          await connectAudioParam2(nativeOfflineAudioContext, proxy.pan, nativeStereoPannerNode.pan);
        }
        if (isNativeAudioNodeFaker(nativeStereoPannerNode)) {
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeStereoPannerNode.inputs[0]);
        } else {
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeStereoPannerNode);
        }
        return nativeStereoPannerNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeStereoPannerNode = renderedNativeStereoPannerNodes.get(nativeOfflineAudioContext);
          if (renderedNativeStereoPannerNode !== void 0) {
            return Promise.resolve(renderedNativeStereoPannerNode);
          }
          return createStereoPannerNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/test-audio-buffer-constructor-support.js
  var createTestAudioBufferConstructorSupport = (nativeAudioBufferConstructor2) => {
    return () => {
      if (nativeAudioBufferConstructor2 === null) {
        return false;
      }
      try {
        new nativeAudioBufferConstructor2({ length: 1, sampleRate: 44100 });
      } catch {
        return false;
      }
      return true;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/test-audio-worklet-processor-post-message-support.js
  var createTestAudioWorkletProcessorPostMessageSupport = (nativeAudioWorkletNodeConstructor2, nativeOfflineAudioContextConstructor2) => {
    return async () => {
      if (nativeAudioWorkletNodeConstructor2 === null) {
        return true;
      }
      if (nativeOfflineAudioContextConstructor2 === null) {
        return false;
      }
      const blob = new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'], {
        type: "application/javascript; charset=utf-8"
      });
      const offlineAudioContext = new nativeOfflineAudioContextConstructor2(1, 128, 44100);
      const url = URL.createObjectURL(blob);
      let isEmittingMessageEvents = false;
      let isEmittingProcessorErrorEvents = false;
      try {
        await offlineAudioContext.audioWorklet.addModule(url);
        const audioWorkletNode = new nativeAudioWorkletNodeConstructor2(offlineAudioContext, "a", { numberOfOutputs: 0 });
        const oscillator = offlineAudioContext.createOscillator();
        audioWorkletNode.port.onmessage = () => isEmittingMessageEvents = true;
        audioWorkletNode.onprocessorerror = () => isEmittingProcessorErrorEvents = true;
        oscillator.connect(audioWorkletNode);
        oscillator.start(0);
        await offlineAudioContext.startRendering();
        await new Promise((resolve) => setTimeout(resolve));
      } catch {
      } finally {
        URL.revokeObjectURL(url);
      }
      return isEmittingMessageEvents && !isEmittingProcessorErrorEvents;
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/test-offline-audio-context-current-time-support.js
  var createTestOfflineAudioContextCurrentTimeSupport = (createNativeGainNode2, nativeOfflineAudioContextConstructor2) => {
    return () => {
      if (nativeOfflineAudioContextConstructor2 === null) {
        return Promise.resolve(false);
      }
      const nativeOfflineAudioContext = new nativeOfflineAudioContextConstructor2(1, 1, 44100);
      const gainNode = createNativeGainNode2(nativeOfflineAudioContext, {
        channelCount: 1,
        channelCountMode: "explicit",
        channelInterpretation: "discrete",
        gain: 0
      });
      return new Promise((resolve) => {
        nativeOfflineAudioContext.oncomplete = () => {
          gainNode.disconnect();
          resolve(nativeOfflineAudioContext.currentTime !== 0);
        };
        nativeOfflineAudioContext.startRendering();
      });
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/unknown-error.js
  var createUnknownError = () => new DOMException("", "UnknownError");

  // node_modules/standardized-audio-context/build/es2019/factories/wave-shaper-node-constructor.js
  var DEFAULT_OPTIONS21 = {
    channelCount: 2,
    channelCountMode: "max",
    channelInterpretation: "speakers",
    curve: null,
    oversample: "none"
  };
  var createWaveShaperNodeConstructor = (audioNodeConstructor2, createInvalidStateError2, createNativeWaveShaperNode2, createWaveShaperNodeRenderer2, getNativeContext2, isNativeOfflineAudioContext2, setAudioNodeTailTime2) => {
    return class WaveShaperNode extends audioNodeConstructor2 {
      constructor(context2, options) {
        const nativeContext = getNativeContext2(context2);
        const mergedOptions = { ...DEFAULT_OPTIONS21, ...options };
        const nativeWaveShaperNode = createNativeWaveShaperNode2(nativeContext, mergedOptions);
        const isOffline = isNativeOfflineAudioContext2(nativeContext);
        const waveShaperNodeRenderer = isOffline ? createWaveShaperNodeRenderer2() : null;
        super(context2, true, nativeWaveShaperNode, waveShaperNodeRenderer);
        this._isCurveNullified = false;
        this._nativeWaveShaperNode = nativeWaveShaperNode;
        setAudioNodeTailTime2(this, 1);
      }
      get curve() {
        if (this._isCurveNullified) {
          return null;
        }
        return this._nativeWaveShaperNode.curve;
      }
      set curve(value) {
        if (value === null) {
          this._isCurveNullified = true;
          this._nativeWaveShaperNode.curve = new Float32Array([0, 0]);
        } else {
          if (value.length < 2) {
            throw createInvalidStateError2();
          }
          this._isCurveNullified = false;
          this._nativeWaveShaperNode.curve = value;
        }
      }
      get oversample() {
        return this._nativeWaveShaperNode.oversample;
      }
      set oversample(value) {
        this._nativeWaveShaperNode.oversample = value;
      }
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/wave-shaper-node-renderer-factory.js
  var createWaveShaperNodeRendererFactory = (createNativeWaveShaperNode2, getNativeAudioNode2, renderInputsOfAudioNode2) => {
    return () => {
      const renderedNativeWaveShaperNodes = /* @__PURE__ */ new WeakMap();
      const createWaveShaperNode = async (proxy, nativeOfflineAudioContext) => {
        let nativeWaveShaperNode = getNativeAudioNode2(proxy);
        const nativeWaveShaperNodeIsOwnedByContext = isOwnedByContext(nativeWaveShaperNode, nativeOfflineAudioContext);
        if (!nativeWaveShaperNodeIsOwnedByContext) {
          const options = {
            channelCount: nativeWaveShaperNode.channelCount,
            channelCountMode: nativeWaveShaperNode.channelCountMode,
            channelInterpretation: nativeWaveShaperNode.channelInterpretation,
            curve: nativeWaveShaperNode.curve,
            oversample: nativeWaveShaperNode.oversample
          };
          nativeWaveShaperNode = createNativeWaveShaperNode2(nativeOfflineAudioContext, options);
        }
        renderedNativeWaveShaperNodes.set(nativeOfflineAudioContext, nativeWaveShaperNode);
        if (isNativeAudioNodeFaker(nativeWaveShaperNode)) {
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeWaveShaperNode.inputs[0]);
        } else {
          await renderInputsOfAudioNode2(proxy, nativeOfflineAudioContext, nativeWaveShaperNode);
        }
        return nativeWaveShaperNode;
      };
      return {
        render(proxy, nativeOfflineAudioContext) {
          const renderedNativeWaveShaperNode = renderedNativeWaveShaperNodes.get(nativeOfflineAudioContext);
          if (renderedNativeWaveShaperNode !== void 0) {
            return Promise.resolve(renderedNativeWaveShaperNode);
          }
          return createWaveShaperNode(proxy, nativeOfflineAudioContext);
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/window.js
  var createWindow = () => typeof window === "undefined" ? null : window;

  // node_modules/standardized-audio-context/build/es2019/factories/wrap-audio-buffer-copy-channel-methods.js
  var createWrapAudioBufferCopyChannelMethods = (convertNumberToUnsignedLong2, createIndexSizeError2) => {
    return (audioBuffer) => {
      audioBuffer.copyFromChannel = (destination, channelNumberAsNumber, bufferOffsetAsNumber = 0) => {
        const bufferOffset = convertNumberToUnsignedLong2(bufferOffsetAsNumber);
        const channelNumber = convertNumberToUnsignedLong2(channelNumberAsNumber);
        if (channelNumber >= audioBuffer.numberOfChannels) {
          throw createIndexSizeError2();
        }
        const audioBufferLength = audioBuffer.length;
        const channelData = audioBuffer.getChannelData(channelNumber);
        const destinationLength = destination.length;
        for (let i = bufferOffset < 0 ? -bufferOffset : 0; i + bufferOffset < audioBufferLength && i < destinationLength; i += 1) {
          destination[i] = channelData[i + bufferOffset];
        }
      };
      audioBuffer.copyToChannel = (source, channelNumberAsNumber, bufferOffsetAsNumber = 0) => {
        const bufferOffset = convertNumberToUnsignedLong2(bufferOffsetAsNumber);
        const channelNumber = convertNumberToUnsignedLong2(channelNumberAsNumber);
        if (channelNumber >= audioBuffer.numberOfChannels) {
          throw createIndexSizeError2();
        }
        const audioBufferLength = audioBuffer.length;
        const channelData = audioBuffer.getChannelData(channelNumber);
        const sourceLength = source.length;
        for (let i = bufferOffset < 0 ? -bufferOffset : 0; i + bufferOffset < audioBufferLength && i < sourceLength; i += 1) {
          channelData[i + bufferOffset] = source[i];
        }
      };
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/wrap-audio-buffer-copy-channel-methods-out-of-bounds.js
  var createWrapAudioBufferCopyChannelMethodsOutOfBounds = (convertNumberToUnsignedLong2) => {
    return (audioBuffer) => {
      audioBuffer.copyFromChannel = /* @__PURE__ */ ((copyFromChannel2) => {
        return (destination, channelNumberAsNumber, bufferOffsetAsNumber = 0) => {
          const bufferOffset = convertNumberToUnsignedLong2(bufferOffsetAsNumber);
          const channelNumber = convertNumberToUnsignedLong2(channelNumberAsNumber);
          if (bufferOffset < audioBuffer.length) {
            return copyFromChannel2.call(audioBuffer, destination, channelNumber, bufferOffset);
          }
        };
      })(audioBuffer.copyFromChannel);
      audioBuffer.copyToChannel = /* @__PURE__ */ ((copyToChannel2) => {
        return (source, channelNumberAsNumber, bufferOffsetAsNumber = 0) => {
          const bufferOffset = convertNumberToUnsignedLong2(bufferOffsetAsNumber);
          const channelNumber = convertNumberToUnsignedLong2(channelNumberAsNumber);
          if (bufferOffset < audioBuffer.length) {
            return copyToChannel2.call(audioBuffer, source, channelNumber, bufferOffset);
          }
        };
      })(audioBuffer.copyToChannel);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/wrap-audio-buffer-source-node-stop-method-nullified-buffer.js
  var createWrapAudioBufferSourceNodeStopMethodNullifiedBuffer = (overwriteAccessors2) => {
    return (nativeAudioBufferSourceNode, nativeContext) => {
      const nullifiedBuffer = nativeContext.createBuffer(1, 1, 44100);
      if (nativeAudioBufferSourceNode.buffer === null) {
        nativeAudioBufferSourceNode.buffer = nullifiedBuffer;
      }
      overwriteAccessors2(nativeAudioBufferSourceNode, "buffer", (get) => () => {
        const value = get.call(nativeAudioBufferSourceNode);
        return value === nullifiedBuffer ? null : value;
      }, (set) => (value) => {
        return set.call(nativeAudioBufferSourceNode, value === null ? nullifiedBuffer : value);
      });
    };
  };

  // node_modules/standardized-audio-context/build/es2019/factories/wrap-channel-merger-node.js
  var createWrapChannelMergerNode = (createInvalidStateError2, monitorConnections2) => {
    return (nativeContext, channelMergerNode) => {
      channelMergerNode.channelCount = 1;
      channelMergerNode.channelCountMode = "explicit";
      Object.defineProperty(channelMergerNode, "channelCount", {
        get: () => 1,
        set: () => {
          throw createInvalidStateError2();
        }
      });
      Object.defineProperty(channelMergerNode, "channelCountMode", {
        get: () => "explicit",
        set: () => {
          throw createInvalidStateError2();
        }
      });
      const audioBufferSourceNode = nativeContext.createBufferSource();
      const whenConnected = () => {
        const length = channelMergerNode.numberOfInputs;
        for (let i = 0; i < length; i += 1) {
          audioBufferSourceNode.connect(channelMergerNode, 0, i);
        }
      };
      const whenDisconnected = () => audioBufferSourceNode.disconnect(channelMergerNode);
      monitorConnections2(channelMergerNode, whenConnected, whenDisconnected);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/get-first-sample.js
  var getFirstSample = (audioBuffer, buffer, channelNumber) => {
    if (audioBuffer.copyFromChannel === void 0) {
      return audioBuffer.getChannelData(channelNumber)[0];
    }
    audioBuffer.copyFromChannel(buffer, channelNumber);
    return buffer[0];
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/is-dc-curve.js
  var isDCCurve = (curve) => {
    if (curve === null) {
      return false;
    }
    const length = curve.length;
    if (length % 2 !== 0) {
      return curve[Math.floor(length / 2)] !== 0;
    }
    return curve[length / 2 - 1] + curve[length / 2] !== 0;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/overwrite-accessors.js
  var overwriteAccessors = (object, property, createGetter, createSetter) => {
    let prototype = object;
    while (!prototype.hasOwnProperty(property)) {
      prototype = Object.getPrototypeOf(prototype);
    }
    const { get, set } = Object.getOwnPropertyDescriptor(prototype, property);
    Object.defineProperty(object, property, { get: createGetter(get), set: createSetter(set) });
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/sanitize-audio-worklet-node-options.js
  var sanitizeAudioWorkletNodeOptions = (options) => {
    return {
      ...options,
      outputChannelCount: options.outputChannelCount !== void 0 ? options.outputChannelCount : options.numberOfInputs === 1 && options.numberOfOutputs === 1 ? (
        /*
         * Bug #61: This should be the computedNumberOfChannels, but unfortunately that is almost impossible to fake. That's why
         * the channelCountMode is required to be 'explicit' as long as there is not a native implementation in every browser. That
         * makes sure the computedNumberOfChannels is equivilant to the channelCount which makes it much easier to compute.
         */
        [options.channelCount]
      ) : Array.from({ length: options.numberOfOutputs }, () => 1)
    };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/sanitize-channel-splitter-options.js
  var sanitizeChannelSplitterOptions = (options) => {
    return { ...options, channelCount: options.numberOfOutputs };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/sanitize-periodic-wave-options.js
  var sanitizePeriodicWaveOptions = (options) => {
    const { imag, real } = options;
    if (imag === void 0) {
      if (real === void 0) {
        return { ...options, imag: [0, 0], real: [0, 0] };
      }
      return { ...options, imag: Array.from(real, () => 0), real };
    }
    if (real === void 0) {
      return { ...options, imag, real: Array.from(imag, () => 0) };
    }
    return { ...options, imag, real };
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/set-value-at-time-until-possible.js
  var setValueAtTimeUntilPossible = (audioParam, value, startTime) => {
    try {
      audioParam.setValueAtTime(value, startTime);
    } catch (err) {
      if (err.code !== 9) {
        throw err;
      }
      setValueAtTimeUntilPossible(audioParam, value, startTime + 1e-7);
    }
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-audio-buffer-source-node-start-method-consecutive-calls-support.js
  var testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport = (nativeContext) => {
    const nativeAudioBufferSourceNode = nativeContext.createBufferSource();
    nativeAudioBufferSourceNode.start();
    try {
      nativeAudioBufferSourceNode.start();
    } catch {
      return true;
    }
    return false;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-audio-buffer-source-node-start-method-offset-clamping-support.js
  var testAudioBufferSourceNodeStartMethodOffsetClampingSupport = (nativeContext) => {
    const nativeAudioBufferSourceNode = nativeContext.createBufferSource();
    const nativeAudioBuffer = nativeContext.createBuffer(1, 1, 44100);
    nativeAudioBufferSourceNode.buffer = nativeAudioBuffer;
    try {
      nativeAudioBufferSourceNode.start(0, 1);
    } catch {
      return false;
    }
    return true;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-audio-buffer-source-node-stop-method-nullified-buffer-support.js
  var testAudioBufferSourceNodeStopMethodNullifiedBufferSupport = (nativeContext) => {
    const nativeAudioBufferSourceNode = nativeContext.createBufferSource();
    nativeAudioBufferSourceNode.start();
    try {
      nativeAudioBufferSourceNode.stop();
    } catch {
      return false;
    }
    return true;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-audio-scheduled-source-node-start-method-negative-parameters-support.js
  var testAudioScheduledSourceNodeStartMethodNegativeParametersSupport = (nativeContext) => {
    const nativeAudioBufferSourceNode = nativeContext.createOscillator();
    try {
      nativeAudioBufferSourceNode.start(-1);
    } catch (err) {
      return err instanceof RangeError;
    }
    return false;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-audio-scheduled-source-node-stop-method-consecutive-calls-support.js
  var testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport = (nativeContext) => {
    const nativeAudioBuffer = nativeContext.createBuffer(1, 1, 44100);
    const nativeAudioBufferSourceNode = nativeContext.createBufferSource();
    nativeAudioBufferSourceNode.buffer = nativeAudioBuffer;
    nativeAudioBufferSourceNode.start();
    nativeAudioBufferSourceNode.stop();
    try {
      nativeAudioBufferSourceNode.stop();
      return true;
    } catch {
      return false;
    }
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-audio-scheduled-source-node-stop-method-negative-parameters-support.js
  var testAudioScheduledSourceNodeStopMethodNegativeParametersSupport = (nativeContext) => {
    const nativeAudioBufferSourceNode = nativeContext.createOscillator();
    try {
      nativeAudioBufferSourceNode.stop(-1);
    } catch (err) {
      return err instanceof RangeError;
    }
    return false;
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/test-audio-worklet-node-options-clonability.js
  var testAudioWorkletNodeOptionsClonability = (audioWorkletNodeOptions) => {
    const { port1, port2 } = new MessageChannel();
    try {
      port1.postMessage(audioWorkletNodeOptions);
    } finally {
      port1.close();
      port2.close();
    }
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/wrap-audio-buffer-source-node-start-method-offset-clamping.js
  var wrapAudioBufferSourceNodeStartMethodOffsetClamping = (nativeAudioBufferSourceNode) => {
    nativeAudioBufferSourceNode.start = /* @__PURE__ */ ((start2) => {
      return (when = 0, offset = 0, duration) => {
        const buffer = nativeAudioBufferSourceNode.buffer;
        const clampedOffset = buffer === null ? offset : Math.min(buffer.duration, offset);
        if (buffer !== null && clampedOffset > buffer.duration - 0.5 / nativeAudioBufferSourceNode.context.sampleRate) {
          start2.call(nativeAudioBufferSourceNode, when, 0, 0);
        } else {
          start2.call(nativeAudioBufferSourceNode, when, clampedOffset, duration);
        }
      };
    })(nativeAudioBufferSourceNode.start);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/wrap-audio-scheduled-source-node-stop-method-consecutive-calls.js
  var wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls = (nativeAudioScheduledSourceNode, nativeContext) => {
    const nativeGainNode = nativeContext.createGain();
    nativeAudioScheduledSourceNode.connect(nativeGainNode);
    const disconnectGainNode = /* @__PURE__ */ ((disconnect2) => {
      return () => {
        disconnect2.call(nativeAudioScheduledSourceNode, nativeGainNode);
        nativeAudioScheduledSourceNode.removeEventListener("ended", disconnectGainNode);
      };
    })(nativeAudioScheduledSourceNode.disconnect);
    nativeAudioScheduledSourceNode.addEventListener("ended", disconnectGainNode);
    interceptConnections(nativeAudioScheduledSourceNode, nativeGainNode);
    nativeAudioScheduledSourceNode.stop = /* @__PURE__ */ ((stop) => {
      let isStopped = false;
      return (when = 0) => {
        if (isStopped) {
          try {
            stop.call(nativeAudioScheduledSourceNode, when);
          } catch {
            nativeGainNode.gain.setValueAtTime(0, when);
          }
        } else {
          stop.call(nativeAudioScheduledSourceNode, when);
          isStopped = true;
        }
      };
    })(nativeAudioScheduledSourceNode.stop);
  };

  // node_modules/standardized-audio-context/build/es2019/helpers/wrap-event-listener.js
  var wrapEventListener = (target, eventListener) => {
    return (event) => {
      const descriptor = { value: target };
      Object.defineProperties(event, {
        currentTarget: descriptor,
        target: descriptor
      });
      if (typeof eventListener === "function") {
        return eventListener.call(target, event);
      }
      return eventListener.handleEvent.call(target, event);
    };
  };

  // node_modules/standardized-audio-context/build/es2019/module.js
  var addActiveInputConnectionToAudioNode = createAddActiveInputConnectionToAudioNode(insertElementInSet);
  var addPassiveInputConnectionToAudioNode = createAddPassiveInputConnectionToAudioNode(insertElementInSet);
  var deleteActiveInputConnectionToAudioNode = createDeleteActiveInputConnectionToAudioNode(pickElementFromSet);
  var audioNodeTailTimeStore = /* @__PURE__ */ new WeakMap();
  var getAudioNodeTailTime = createGetAudioNodeTailTime(audioNodeTailTimeStore);
  var cacheTestResult = createCacheTestResult(/* @__PURE__ */ new Map(), /* @__PURE__ */ new WeakMap());
  var window2 = createWindow();
  var createNativeAnalyserNode = createNativeAnalyserNodeFactory(cacheTestResult, createIndexSizeError);
  var getAudioNodeRenderer = createGetAudioNodeRenderer(getAudioNodeConnections);
  var renderInputsOfAudioNode = createRenderInputsOfAudioNode(getAudioNodeConnections, getAudioNodeRenderer, isPartOfACycle);
  var createAnalyserNodeRenderer = createAnalyserNodeRendererFactory(createNativeAnalyserNode, getNativeAudioNode, renderInputsOfAudioNode);
  var getNativeContext = createGetNativeContext(CONTEXT_STORE);
  var nativeOfflineAudioContextConstructor = createNativeOfflineAudioContextConstructor(window2);
  var isNativeOfflineAudioContext = createIsNativeOfflineAudioContext(nativeOfflineAudioContextConstructor);
  var audioParamAudioNodeStore = /* @__PURE__ */ new WeakMap();
  var eventTargetConstructor = createEventTargetConstructor(wrapEventListener);
  var nativeAudioContextConstructor = createNativeAudioContextConstructor(window2);
  var isNativeAudioContext = createIsNativeAudioContext(nativeAudioContextConstructor);
  var isNativeAudioNode2 = createIsNativeAudioNode(window2);
  var isNativeAudioParam = createIsNativeAudioParam(window2);
  var nativeAudioWorkletNodeConstructor = createNativeAudioWorkletNodeConstructor(window2);
  var audioNodeConstructor = createAudioNodeConstructor(createAddAudioNodeConnections(AUDIO_NODE_CONNECTIONS_STORE), createAddConnectionToAudioNode(addActiveInputConnectionToAudioNode, addPassiveInputConnectionToAudioNode, connectNativeAudioNodeToNativeAudioNode, deleteActiveInputConnectionToAudioNode, disconnectNativeAudioNodeFromNativeAudioNode, getAudioNodeConnections, getAudioNodeTailTime, getEventListenersOfAudioNode, getNativeAudioNode, insertElementInSet, isActiveAudioNode, isPartOfACycle, isPassiveAudioNode), cacheTestResult, createIncrementCycleCounterFactory(CYCLE_COUNTERS, disconnectNativeAudioNodeFromNativeAudioNode, getAudioNodeConnections, getNativeAudioNode, getNativeAudioParam, isActiveAudioNode), createIndexSizeError, createInvalidAccessError, createNotSupportedError, createDecrementCycleCounter(connectNativeAudioNodeToNativeAudioNode, CYCLE_COUNTERS, getAudioNodeConnections, getNativeAudioNode, getNativeAudioParam, getNativeContext, isActiveAudioNode, isNativeOfflineAudioContext), createDetectCycles(audioParamAudioNodeStore, getAudioNodeConnections, getValueForKey), eventTargetConstructor, getNativeContext, isNativeAudioContext, isNativeAudioNode2, isNativeAudioParam, isNativeOfflineAudioContext, nativeAudioWorkletNodeConstructor);
  var analyserNodeConstructor = createAnalyserNodeConstructor(audioNodeConstructor, createAnalyserNodeRenderer, createIndexSizeError, createNativeAnalyserNode, getNativeContext, isNativeOfflineAudioContext);
  var audioBufferStore = /* @__PURE__ */ new WeakSet();
  var nativeAudioBufferConstructor = createNativeAudioBufferConstructor(window2);
  var convertNumberToUnsignedLong = createConvertNumberToUnsignedLong(new Uint32Array(1));
  var wrapAudioBufferCopyChannelMethods = createWrapAudioBufferCopyChannelMethods(convertNumberToUnsignedLong, createIndexSizeError);
  var wrapAudioBufferCopyChannelMethodsOutOfBounds = createWrapAudioBufferCopyChannelMethodsOutOfBounds(convertNumberToUnsignedLong);
  var audioBufferConstructor = createAudioBufferConstructor(audioBufferStore, cacheTestResult, createNotSupportedError, nativeAudioBufferConstructor, nativeOfflineAudioContextConstructor, createTestAudioBufferConstructorSupport(nativeAudioBufferConstructor), wrapAudioBufferCopyChannelMethods, wrapAudioBufferCopyChannelMethodsOutOfBounds);
  var addSilentConnection = createAddSilentConnection(createNativeGainNode);
  var renderInputsOfAudioParam = createRenderInputsOfAudioParam(getAudioNodeRenderer, getAudioParamConnections, isPartOfACycle);
  var connectAudioParam = createConnectAudioParam(renderInputsOfAudioParam);
  var createNativeAudioBufferSourceNode = createNativeAudioBufferSourceNodeFactory(addSilentConnection, cacheTestResult, testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport, testAudioBufferSourceNodeStartMethodOffsetClampingSupport, testAudioBufferSourceNodeStopMethodNullifiedBufferSupport, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, wrapAudioBufferSourceNodeStartMethodOffsetClamping, createWrapAudioBufferSourceNodeStopMethodNullifiedBuffer(overwriteAccessors), wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls);
  var renderAutomation = createRenderAutomation(createGetAudioParamRenderer(getAudioParamConnections), renderInputsOfAudioParam);
  var createAudioBufferSourceNodeRenderer = createAudioBufferSourceNodeRendererFactory(connectAudioParam, createNativeAudioBufferSourceNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
  var createAudioParam = createAudioParamFactory(createAddAudioParamConnections(AUDIO_PARAM_CONNECTIONS_STORE), audioParamAudioNodeStore, AUDIO_PARAM_STORE, createAudioParamRenderer, import_automation_events2.createCancelAndHoldAutomationEvent, import_automation_events2.createCancelScheduledValuesAutomationEvent, import_automation_events2.createExponentialRampToValueAutomationEvent, import_automation_events2.createLinearRampToValueAutomationEvent, import_automation_events2.createSetTargetAutomationEvent, import_automation_events2.createSetValueAutomationEvent, import_automation_events2.createSetValueCurveAutomationEvent, nativeAudioContextConstructor, setValueAtTimeUntilPossible);
  var audioBufferSourceNodeConstructor = createAudioBufferSourceNodeConstructor(audioNodeConstructor, createAudioBufferSourceNodeRenderer, createAudioParam, createInvalidStateError, createNativeAudioBufferSourceNode, getNativeContext, isNativeOfflineAudioContext, wrapEventListener);
  var audioDestinationNodeConstructor = createAudioDestinationNodeConstructor(audioNodeConstructor, createAudioDestinationNodeRenderer, createIndexSizeError, createInvalidStateError, createNativeAudioDestinationNodeFactory(createNativeGainNode, overwriteAccessors), getNativeContext, isNativeOfflineAudioContext, renderInputsOfAudioNode);
  var createBiquadFilterNodeRenderer = createBiquadFilterNodeRendererFactory(connectAudioParam, createNativeBiquadFilterNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
  var setAudioNodeTailTime = createSetAudioNodeTailTime(audioNodeTailTimeStore);
  var biquadFilterNodeConstructor = createBiquadFilterNodeConstructor(audioNodeConstructor, createAudioParam, createBiquadFilterNodeRenderer, createInvalidAccessError, createNativeBiquadFilterNode, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime);
  var monitorConnections = createMonitorConnections(insertElementInSet, isNativeAudioNode2);
  var wrapChannelMergerNode = createWrapChannelMergerNode(createInvalidStateError, monitorConnections);
  var createNativeChannelMergerNode = createNativeChannelMergerNodeFactory(nativeAudioContextConstructor, wrapChannelMergerNode);
  var createChannelMergerNodeRenderer = createChannelMergerNodeRendererFactory(createNativeChannelMergerNode, getNativeAudioNode, renderInputsOfAudioNode);
  var channelMergerNodeConstructor = createChannelMergerNodeConstructor(audioNodeConstructor, createChannelMergerNodeRenderer, createNativeChannelMergerNode, getNativeContext, isNativeOfflineAudioContext);
  var createChannelSplitterNodeRenderer = createChannelSplitterNodeRendererFactory(createNativeChannelSplitterNode, getNativeAudioNode, renderInputsOfAudioNode);
  var channelSplitterNodeConstructor = createChannelSplitterNodeConstructor(audioNodeConstructor, createChannelSplitterNodeRenderer, createNativeChannelSplitterNode, getNativeContext, isNativeOfflineAudioContext, sanitizeChannelSplitterOptions);
  var createNativeConstantSourceNodeFaker = createNativeConstantSourceNodeFakerFactory(addSilentConnection, createNativeAudioBufferSourceNode, createNativeGainNode, monitorConnections);
  var createNativeConstantSourceNode = createNativeConstantSourceNodeFactory(addSilentConnection, cacheTestResult, createNativeConstantSourceNodeFaker, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport);
  var createConstantSourceNodeRenderer = createConstantSourceNodeRendererFactory(connectAudioParam, createNativeConstantSourceNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
  var constantSourceNodeConstructor = createConstantSourceNodeConstructor(audioNodeConstructor, createAudioParam, createConstantSourceNodeRenderer, createNativeConstantSourceNode, getNativeContext, isNativeOfflineAudioContext, wrapEventListener);
  var createNativeConvolverNode = createNativeConvolverNodeFactory(createNotSupportedError, overwriteAccessors);
  var createConvolverNodeRenderer = createConvolverNodeRendererFactory(createNativeConvolverNode, getNativeAudioNode, renderInputsOfAudioNode);
  var convolverNodeConstructor = createConvolverNodeConstructor(audioNodeConstructor, createConvolverNodeRenderer, createNativeConvolverNode, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime);
  var createDelayNodeRenderer = createDelayNodeRendererFactory(connectAudioParam, createNativeDelayNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
  var delayNodeConstructor = createDelayNodeConstructor(audioNodeConstructor, createAudioParam, createDelayNodeRenderer, createNativeDelayNode, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime);
  var createNativeDynamicsCompressorNode = createNativeDynamicsCompressorNodeFactory(createNotSupportedError);
  var createDynamicsCompressorNodeRenderer = createDynamicsCompressorNodeRendererFactory(connectAudioParam, createNativeDynamicsCompressorNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
  var dynamicsCompressorNodeConstructor = createDynamicsCompressorNodeConstructor(audioNodeConstructor, createAudioParam, createDynamicsCompressorNodeRenderer, createNativeDynamicsCompressorNode, createNotSupportedError, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime);
  var createGainNodeRenderer = createGainNodeRendererFactory(connectAudioParam, createNativeGainNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
  var gainNodeConstructor = createGainNodeConstructor(audioNodeConstructor, createAudioParam, createGainNodeRenderer, createNativeGainNode, getNativeContext, isNativeOfflineAudioContext);
  var createNativeIIRFilterNodeFaker = createNativeIIRFilterNodeFakerFactory(createInvalidAccessError, createInvalidStateError, createNativeScriptProcessorNode, createNotSupportedError);
  var renderNativeOfflineAudioContext = createRenderNativeOfflineAudioContext(cacheTestResult, createNativeGainNode, createNativeScriptProcessorNode, createTestOfflineAudioContextCurrentTimeSupport(createNativeGainNode, nativeOfflineAudioContextConstructor));
  var createIIRFilterNodeRenderer = createIIRFilterNodeRendererFactory(createNativeAudioBufferSourceNode, getNativeAudioNode, nativeOfflineAudioContextConstructor, renderInputsOfAudioNode, renderNativeOfflineAudioContext);
  var createNativeIIRFilterNode = createNativeIIRFilterNodeFactory(createNativeIIRFilterNodeFaker);
  var iIRFilterNodeConstructor = createIIRFilterNodeConstructor(audioNodeConstructor, createNativeIIRFilterNode, createIIRFilterNodeRenderer, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime);
  var createAudioListener = createAudioListenerFactory(createAudioParam, createNativeChannelMergerNode, createNativeConstantSourceNode, createNativeScriptProcessorNode, createNotSupportedError, getFirstSample, isNativeOfflineAudioContext, overwriteAccessors);
  var unrenderedAudioWorkletNodeStore = /* @__PURE__ */ new WeakMap();
  var minimalBaseAudioContextConstructor = createMinimalBaseAudioContextConstructor(audioDestinationNodeConstructor, createAudioListener, eventTargetConstructor, isNativeOfflineAudioContext, unrenderedAudioWorkletNodeStore, wrapEventListener);
  var createNativeOscillatorNode = createNativeOscillatorNodeFactory(addSilentConnection, cacheTestResult, testAudioScheduledSourceNodeStartMethodNegativeParametersSupport, testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport, testAudioScheduledSourceNodeStopMethodNegativeParametersSupport, wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls);
  var createOscillatorNodeRenderer = createOscillatorNodeRendererFactory(connectAudioParam, createNativeOscillatorNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
  var oscillatorNodeConstructor = createOscillatorNodeConstructor(audioNodeConstructor, createAudioParam, createNativeOscillatorNode, createOscillatorNodeRenderer, getNativeContext, isNativeOfflineAudioContext, wrapEventListener);
  var createConnectedNativeAudioBufferSourceNode = createConnectedNativeAudioBufferSourceNodeFactory(createNativeAudioBufferSourceNode);
  var createNativeWaveShaperNodeFaker = createNativeWaveShaperNodeFakerFactory(createConnectedNativeAudioBufferSourceNode, createInvalidStateError, createNativeGainNode, isDCCurve, monitorConnections);
  var createNativeWaveShaperNode = createNativeWaveShaperNodeFactory(createConnectedNativeAudioBufferSourceNode, createInvalidStateError, createNativeWaveShaperNodeFaker, isDCCurve, monitorConnections, nativeAudioContextConstructor, overwriteAccessors);
  var createNativePannerNodeFaker = createNativePannerNodeFakerFactory(connectNativeAudioNodeToNativeAudioNode, createInvalidStateError, createNativeChannelMergerNode, createNativeGainNode, createNativeScriptProcessorNode, createNativeWaveShaperNode, createNotSupportedError, disconnectNativeAudioNodeFromNativeAudioNode, getFirstSample, monitorConnections);
  var createNativePannerNode = createNativePannerNodeFactory(createNativePannerNodeFaker);
  var createPannerNodeRenderer = createPannerNodeRendererFactory(connectAudioParam, createNativeChannelMergerNode, createNativeConstantSourceNode, createNativeGainNode, createNativePannerNode, getNativeAudioNode, nativeOfflineAudioContextConstructor, renderAutomation, renderInputsOfAudioNode, renderNativeOfflineAudioContext);
  var pannerNodeConstructor = createPannerNodeConstructor(audioNodeConstructor, createAudioParam, createNativePannerNode, createPannerNodeRenderer, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime);
  var createNativePeriodicWave = createNativePeriodicWaveFactory(createIndexSizeError);
  var periodicWaveConstructor = createPeriodicWaveConstructor(createNativePeriodicWave, getNativeContext, /* @__PURE__ */ new WeakSet(), sanitizePeriodicWaveOptions);
  var nativeStereoPannerNodeFakerFactory = createNativeStereoPannerNodeFakerFactory(createNativeChannelMergerNode, createNativeChannelSplitterNode, createNativeGainNode, createNativeWaveShaperNode, createNotSupportedError, monitorConnections);
  var createNativeStereoPannerNode = createNativeStereoPannerNodeFactory(nativeStereoPannerNodeFakerFactory, createNotSupportedError);
  var createStereoPannerNodeRenderer = createStereoPannerNodeRendererFactory(connectAudioParam, createNativeStereoPannerNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode);
  var stereoPannerNodeConstructor = createStereoPannerNodeConstructor(audioNodeConstructor, createAudioParam, createNativeStereoPannerNode, createStereoPannerNodeRenderer, getNativeContext, isNativeOfflineAudioContext);
  var createWaveShaperNodeRenderer = createWaveShaperNodeRendererFactory(createNativeWaveShaperNode, getNativeAudioNode, renderInputsOfAudioNode);
  var waveShaperNodeConstructor = createWaveShaperNodeConstructor(audioNodeConstructor, createInvalidStateError, createNativeWaveShaperNode, createWaveShaperNodeRenderer, getNativeContext, isNativeOfflineAudioContext, setAudioNodeTailTime);
  var isSecureContext = createIsSecureContext(window2);
  var exposeCurrentFrameAndCurrentTime = createExposeCurrentFrameAndCurrentTime(window2);
  var backupOfflineAudioContextStore = /* @__PURE__ */ new WeakMap();
  var getOrCreateBackupOfflineAudioContext = createGetOrCreateBackupOfflineAudioContext(backupOfflineAudioContextStore, nativeOfflineAudioContextConstructor);
  var addAudioWorkletModule = isSecureContext ? createAddAudioWorkletModule(
    cacheTestResult,
    createNotSupportedError,
    createEvaluateSource(window2),
    exposeCurrentFrameAndCurrentTime,
    createFetchSource(createAbortError),
    getNativeContext,
    getOrCreateBackupOfflineAudioContext,
    isNativeOfflineAudioContext,
    nativeAudioWorkletNodeConstructor,
    /* @__PURE__ */ new WeakMap(),
    /* @__PURE__ */ new WeakMap(),
    createTestAudioWorkletProcessorPostMessageSupport(nativeAudioWorkletNodeConstructor, nativeOfflineAudioContextConstructor),
    // @todo window is guaranteed to be defined because isSecureContext checks that as well.
    window2
  ) : void 0;
  var isNativeContext = createIsNativeContext(isNativeAudioContext, isNativeOfflineAudioContext);
  var decodeAudioData = createDecodeAudioData(audioBufferStore, cacheTestResult, createDataCloneError, createEncodingError, /* @__PURE__ */ new WeakSet(), getNativeContext, isNativeContext, testAudioBufferCopyChannelMethodsOutOfBoundsSupport, testPromiseSupport, wrapAudioBufferCopyChannelMethods, wrapAudioBufferCopyChannelMethodsOutOfBounds);
  var baseAudioContextConstructor = createBaseAudioContextConstructor(addAudioWorkletModule, analyserNodeConstructor, audioBufferConstructor, audioBufferSourceNodeConstructor, biquadFilterNodeConstructor, channelMergerNodeConstructor, channelSplitterNodeConstructor, constantSourceNodeConstructor, convolverNodeConstructor, decodeAudioData, delayNodeConstructor, dynamicsCompressorNodeConstructor, gainNodeConstructor, iIRFilterNodeConstructor, minimalBaseAudioContextConstructor, oscillatorNodeConstructor, pannerNodeConstructor, periodicWaveConstructor, stereoPannerNodeConstructor, waveShaperNodeConstructor);
  var mediaElementAudioSourceNodeConstructor = createMediaElementAudioSourceNodeConstructor(audioNodeConstructor, createNativeMediaElementAudioSourceNode, getNativeContext, isNativeOfflineAudioContext);
  var mediaStreamAudioDestinationNodeConstructor = createMediaStreamAudioDestinationNodeConstructor(audioNodeConstructor, createNativeMediaStreamAudioDestinationNode, getNativeContext, isNativeOfflineAudioContext);
  var mediaStreamAudioSourceNodeConstructor = createMediaStreamAudioSourceNodeConstructor(audioNodeConstructor, createNativeMediaStreamAudioSourceNode, getNativeContext, isNativeOfflineAudioContext);
  var createNativeMediaStreamTrackAudioSourceNode = createNativeMediaStreamTrackAudioSourceNodeFactory(createInvalidStateError, isNativeOfflineAudioContext);
  var mediaStreamTrackAudioSourceNodeConstructor = createMediaStreamTrackAudioSourceNodeConstructor(audioNodeConstructor, createNativeMediaStreamTrackAudioSourceNode, getNativeContext);
  var audioContextConstructor = createAudioContextConstructor(baseAudioContextConstructor, createInvalidStateError, createNotSupportedError, createUnknownError, mediaElementAudioSourceNodeConstructor, mediaStreamAudioDestinationNodeConstructor, mediaStreamAudioSourceNodeConstructor, mediaStreamTrackAudioSourceNodeConstructor, nativeAudioContextConstructor);
  var getUnrenderedAudioWorkletNodes = createGetUnrenderedAudioWorkletNodes(unrenderedAudioWorkletNodeStore);
  var addUnrenderedAudioWorkletNode = createAddUnrenderedAudioWorkletNode(getUnrenderedAudioWorkletNodes);
  var connectMultipleOutputs = createConnectMultipleOutputs(createIndexSizeError);
  var deleteUnrenderedAudioWorkletNode = createDeleteUnrenderedAudioWorkletNode(getUnrenderedAudioWorkletNodes);
  var disconnectMultipleOutputs = createDisconnectMultipleOutputs(createIndexSizeError);
  var activeAudioWorkletNodeInputsStore = /* @__PURE__ */ new WeakMap();
  var getActiveAudioWorkletNodeInputs = createGetActiveAudioWorkletNodeInputs(activeAudioWorkletNodeInputsStore, getValueForKey);
  var createNativeAudioWorkletNodeFaker = createNativeAudioWorkletNodeFakerFactory(connectMultipleOutputs, createIndexSizeError, createInvalidStateError, createNativeChannelMergerNode, createNativeChannelSplitterNode, createNativeConstantSourceNode, createNativeGainNode, createNativeScriptProcessorNode, createNotSupportedError, disconnectMultipleOutputs, exposeCurrentFrameAndCurrentTime, getActiveAudioWorkletNodeInputs, monitorConnections);
  var createNativeAudioWorkletNode = createNativeAudioWorkletNodeFactory(createInvalidStateError, createNativeAudioWorkletNodeFaker, createNativeGainNode, createNotSupportedError, monitorConnections);
  var createAudioWorkletNodeRenderer = createAudioWorkletNodeRendererFactory(connectAudioParam, connectMultipleOutputs, createNativeAudioBufferSourceNode, createNativeChannelMergerNode, createNativeChannelSplitterNode, createNativeConstantSourceNode, createNativeGainNode, deleteUnrenderedAudioWorkletNode, disconnectMultipleOutputs, exposeCurrentFrameAndCurrentTime, getNativeAudioNode, nativeAudioWorkletNodeConstructor, nativeOfflineAudioContextConstructor, renderAutomation, renderInputsOfAudioNode, renderNativeOfflineAudioContext);
  var getBackupOfflineAudioContext = createGetBackupOfflineAudioContext(backupOfflineAudioContextStore);
  var setActiveAudioWorkletNodeInputs = createSetActiveAudioWorkletNodeInputs(activeAudioWorkletNodeInputsStore);
  var audioWorkletNodeConstructor = isSecureContext ? createAudioWorkletNodeConstructor(addUnrenderedAudioWorkletNode, audioNodeConstructor, createAudioParam, createAudioWorkletNodeRenderer, createNativeAudioWorkletNode, getAudioNodeConnections, getBackupOfflineAudioContext, getNativeContext, isNativeOfflineAudioContext, nativeAudioWorkletNodeConstructor, sanitizeAudioWorkletNodeOptions, setActiveAudioWorkletNodeInputs, testAudioWorkletNodeOptionsClonability, wrapEventListener) : void 0;
  var minimalAudioContextConstructor = createMinimalAudioContextConstructor(createInvalidStateError, createNotSupportedError, createUnknownError, minimalBaseAudioContextConstructor, nativeAudioContextConstructor);
  var createNativeOfflineAudioContext = createCreateNativeOfflineAudioContext(createNotSupportedError, nativeOfflineAudioContextConstructor);
  var startRendering = createStartRendering(audioBufferStore, cacheTestResult, getAudioNodeRenderer, getUnrenderedAudioWorkletNodes, renderNativeOfflineAudioContext, testAudioBufferCopyChannelMethodsOutOfBoundsSupport, wrapAudioBufferCopyChannelMethods, wrapAudioBufferCopyChannelMethodsOutOfBounds);
  var minimalOfflineAudioContextConstructor = createMinimalOfflineAudioContextConstructor(cacheTestResult, createInvalidStateError, createNativeOfflineAudioContext, minimalBaseAudioContextConstructor, startRendering);
  var offlineAudioContextConstructor = createOfflineAudioContextConstructor(baseAudioContextConstructor, cacheTestResult, createInvalidStateError, createNativeOfflineAudioContext, startRendering);
  var isAnyAudioContext = createIsAnyAudioContext(CONTEXT_STORE, isNativeAudioContext);
  var isAnyAudioNode = createIsAnyAudioNode(AUDIO_NODE_STORE, isNativeAudioNode2);
  var isAnyAudioParam = createIsAnyAudioParam(AUDIO_PARAM_STORE, isNativeAudioParam);
  var isAnyOfflineAudioContext = createIsAnyOfflineAudioContext(CONTEXT_STORE, isNativeOfflineAudioContext);

  // node_modules/tone/build/esm/core/util/TypeCheck.js
  function isUndef(arg) {
    return arg === void 0;
  }
  function isDefined(arg) {
    return arg !== void 0;
  }
  function isFunction(arg) {
    return typeof arg === "function";
  }
  function isNumber(arg) {
    return typeof arg === "number";
  }
  function isObject(arg) {
    return Object.prototype.toString.call(arg) === "[object Object]" && arg.constructor === Object;
  }
  function isBoolean(arg) {
    return typeof arg === "boolean";
  }
  function isArray(arg) {
    return Array.isArray(arg);
  }
  function isString(arg) {
    return typeof arg === "string";
  }
  function isNote(arg) {
    return isString(arg) && /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(arg);
  }

  // node_modules/tone/build/esm/core/util/Debug.js
  function assert(statement, error) {
    if (!statement) {
      throw new Error(error);
    }
  }
  function assertRange(value, gte, lte = Infinity) {
    if (!(gte <= value && value <= lte)) {
      throw new RangeError(`Value must be within [${gte}, ${lte}], got: ${value}`);
    }
  }
  function assertContextRunning(context2) {
    if (!context2.isOffline && context2.state !== "running") {
      warn('The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.');
    }
  }
  var isInsideScheduledCallback = false;
  var printedScheduledWarning = false;
  function enterScheduledCallback(insideCallback) {
    isInsideScheduledCallback = insideCallback;
  }
  function assertUsedScheduleTime(time) {
    if (isUndef(time) && isInsideScheduledCallback && !printedScheduledWarning) {
      printedScheduledWarning = true;
      warn("Events scheduled inside of scheduled callbacks should use the passed in scheduling time. See https://github.com/Tonejs/Tone.js/wiki/Accurate-Timing");
    }
  }
  var defaultLogger = console;
  function log(...args) {
    defaultLogger.log(...args);
  }
  function warn(...args) {
    defaultLogger.warn(...args);
  }

  // node_modules/tone/build/esm/core/context/AudioContext.js
  function createAudioContext(options) {
    return new audioContextConstructor(options);
  }
  function createOfflineAudioContext(channels, length, sampleRate) {
    return new offlineAudioContextConstructor(channels, length, sampleRate);
  }
  var theWindow = typeof self === "object" ? self : null;
  var hasAudioContext = theWindow && (theWindow.hasOwnProperty("AudioContext") || theWindow.hasOwnProperty("webkitAudioContext"));
  function createAudioWorkletNode(context2, name, options) {
    assert(isDefined(audioWorkletNodeConstructor), "AudioWorkletNode only works in a secure context (https or localhost)");
    return new (context2 instanceof (theWindow === null || theWindow === void 0 ? void 0 : theWindow.BaseAudioContext) ? theWindow === null || theWindow === void 0 ? void 0 : theWindow.AudioWorkletNode : audioWorkletNodeConstructor)(context2, name, options);
  }

  // node_modules/tslib/tslib.es6.mjs
  function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  }
  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }

  // node_modules/tone/build/esm/core/clock/Ticker.js
  var Ticker = class {
    constructor(callback, type, updateInterval, contextSampleRate) {
      this._callback = callback;
      this._type = type;
      this._minimumUpdateInterval = Math.max(128 / (contextSampleRate || 44100), 1e-3);
      this.updateInterval = updateInterval;
      this._createClock();
    }
    /**
     * Generate a web worker
     */
    _createWorker() {
      const blob = new Blob([
        /* javascript */
        `
			// the initial timeout time
			let timeoutTime =  ${(this._updateInterval * 1e3).toFixed(1)};
			// onmessage callback
			self.onmessage = function(msg){
				timeoutTime = parseInt(msg.data);
			};
			// the tick function which posts a message
			// and schedules a new tick
			function tick(){
				setTimeout(tick, timeoutTime);
				self.postMessage('tick');
			}
			// call tick initially
			tick();
			`
      ], { type: "text/javascript" });
      const blobUrl = URL.createObjectURL(blob);
      const worker = new Worker(blobUrl);
      worker.onmessage = this._callback.bind(this);
      this._worker = worker;
    }
    /**
     * Create a timeout loop
     */
    _createTimeout() {
      this._timeout = setTimeout(() => {
        this._createTimeout();
        this._callback();
      }, this._updateInterval * 1e3);
    }
    /**
     * Create the clock source.
     */
    _createClock() {
      if (this._type === "worker") {
        try {
          this._createWorker();
        } catch (e) {
          this._type = "timeout";
          this._createClock();
        }
      } else if (this._type === "timeout") {
        this._createTimeout();
      }
    }
    /**
     * Clean up the current clock source
     */
    _disposeClock() {
      if (this._timeout) {
        clearTimeout(this._timeout);
      }
      if (this._worker) {
        this._worker.terminate();
        this._worker.onmessage = null;
      }
    }
    /**
     * The rate in seconds the ticker will update
     */
    get updateInterval() {
      return this._updateInterval;
    }
    set updateInterval(interval) {
      var _a;
      this._updateInterval = Math.max(interval, this._minimumUpdateInterval);
      if (this._type === "worker") {
        (_a = this._worker) === null || _a === void 0 ? void 0 : _a.postMessage(this._updateInterval * 1e3);
      }
    }
    /**
     * The type of the ticker, either a worker or a timeout
     */
    get type() {
      return this._type;
    }
    set type(type) {
      this._disposeClock();
      this._type = type;
      this._createClock();
    }
    /**
     * Clean up
     */
    dispose() {
      this._disposeClock();
    }
  };

  // node_modules/tone/build/esm/core/util/AdvancedTypeCheck.js
  function isAudioParam(arg) {
    return isAnyAudioParam(arg);
  }
  function isAudioNode2(arg) {
    return isAnyAudioNode(arg);
  }
  function isOfflineAudioContext(arg) {
    return isAnyOfflineAudioContext(arg);
  }
  function isAudioContext(arg) {
    return isAnyAudioContext(arg);
  }
  function isAudioBuffer(arg) {
    return arg instanceof audioBufferConstructor;
  }

  // node_modules/tone/build/esm/core/util/Defaults.js
  function noCopy(key, arg) {
    return key === "value" || isAudioParam(arg) || isAudioNode2(arg) || isAudioBuffer(arg);
  }
  function deepMerge(target, ...sources) {
    if (!sources.length) {
      return target;
    }
    const source = sources.shift();
    if (isObject(target) && isObject(source)) {
      for (const key in source) {
        if (noCopy(key, source[key])) {
          target[key] = source[key];
        } else if (isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, { [key]: {} });
          }
          deepMerge(target[key], source[key]);
        } else {
          Object.assign(target, { [key]: source[key] });
        }
      }
    }
    return deepMerge(target, ...sources);
  }
  function deepEquals(arrayA, arrayB) {
    return arrayA.length === arrayB.length && arrayA.every((element, index) => arrayB[index] === element);
  }
  function optionsFromArguments(defaults, argsArray, keys = [], objKey) {
    const opts = {};
    const args = Array.from(argsArray);
    if (isObject(args[0]) && objKey && !Reflect.has(args[0], objKey)) {
      const partOfDefaults = Object.keys(args[0]).some((key) => Reflect.has(defaults, key));
      if (!partOfDefaults) {
        deepMerge(opts, { [objKey]: args[0] });
        keys.splice(keys.indexOf(objKey), 1);
        args.shift();
      }
    }
    if (args.length === 1 && isObject(args[0])) {
      deepMerge(opts, args[0]);
    } else {
      for (let i = 0; i < keys.length; i++) {
        if (isDefined(args[i])) {
          opts[keys[i]] = args[i];
        }
      }
    }
    return deepMerge(defaults, opts);
  }
  function getDefaultsFromInstance(instance) {
    return instance.constructor.getDefaults();
  }
  function defaultArg(given, fallback) {
    if (isUndef(given)) {
      return fallback;
    } else {
      return given;
    }
  }
  function omitFromObject(obj, omit) {
    omit.forEach((prop) => {
      if (Reflect.has(obj, prop)) {
        delete obj[prop];
      }
    });
    return obj;
  }

  // node_modules/tone/build/esm/core/Tone.js
  var Tone = class {
    constructor() {
      this.debug = false;
      this._wasDisposed = false;
    }
    /**
     * Returns all of the default options belonging to the class.
     */
    static getDefaults() {
      return {};
    }
    /**
     * Prints the outputs to the console log for debugging purposes.
     * Prints the contents only if either the object has a property
     * called `debug` set to true, or a variable called TONE_DEBUG_CLASS
     * is set to the name of the class.
     * @example
     * const osc = new Tone.Oscillator();
     * // prints all logs originating from this oscillator
     * osc.debug = true;
     * // calls to start/stop will print in the console
     * osc.start();
     */
    log(...args) {
      if (this.debug || theWindow && this.toString() === theWindow.TONE_DEBUG_CLASS) {
        log(this, ...args);
      }
    }
    /**
     * disconnect and dispose.
     */
    dispose() {
      this._wasDisposed = true;
      return this;
    }
    /**
     * Indicates if the instance was disposed. 'Disposing' an
     * instance means that all of the Web Audio nodes that were
     * created for the instance are disconnected and freed for garbage collection.
     */
    get disposed() {
      return this._wasDisposed;
    }
    /**
     * Convert the class to a string
     * @example
     * const osc = new Tone.Oscillator();
     * console.log(osc.toString());
     */
    toString() {
      return this.name;
    }
  };
  Tone.version = version;

  // node_modules/tone/build/esm/core/util/Math.js
  var EPSILON = 1e-6;
  function GT(a, b) {
    return a > b + EPSILON;
  }
  function GTE(a, b) {
    return GT(a, b) || EQ(a, b);
  }
  function LT(a, b) {
    return a + EPSILON < b;
  }
  function EQ(a, b) {
    return Math.abs(a - b) < EPSILON;
  }
  function clamp(value, min, max) {
    return Math.max(Math.min(value, max), min);
  }

  // node_modules/tone/build/esm/core/util/Timeline.js
  var Timeline = class _Timeline extends Tone {
    constructor() {
      super();
      this.name = "Timeline";
      this._timeline = [];
      const options = optionsFromArguments(_Timeline.getDefaults(), arguments, ["memory"]);
      this.memory = options.memory;
      this.increasing = options.increasing;
    }
    static getDefaults() {
      return {
        memory: Infinity,
        increasing: false
      };
    }
    /**
     * The number of items in the timeline.
     */
    get length() {
      return this._timeline.length;
    }
    /**
     * Insert an event object onto the timeline. Events must have a "time" attribute.
     * @param event  The event object to insert into the timeline.
     */
    add(event) {
      assert(Reflect.has(event, "time"), "Timeline: events must have a time attribute");
      event.time = event.time.valueOf();
      if (this.increasing && this.length) {
        const lastValue = this._timeline[this.length - 1];
        assert(GTE(event.time, lastValue.time), "The time must be greater than or equal to the last scheduled time");
        this._timeline.push(event);
      } else {
        const index = this._search(event.time);
        this._timeline.splice(index + 1, 0, event);
      }
      if (this.length > this.memory) {
        const diff = this.length - this.memory;
        this._timeline.splice(0, diff);
      }
      return this;
    }
    /**
     * Remove an event from the timeline.
     * @param  {Object}  event  The event object to remove from the list.
     * @returns {Timeline} this
     */
    remove(event) {
      const index = this._timeline.indexOf(event);
      if (index !== -1) {
        this._timeline.splice(index, 1);
      }
      return this;
    }
    /**
     * Get the nearest event whose time is less than or equal to the given time.
     * @param  time  The time to query.
     */
    get(time, param = "time") {
      const index = this._search(time, param);
      if (index !== -1) {
        return this._timeline[index];
      } else {
        return null;
      }
    }
    /**
     * Return the first event in the timeline without removing it
     * @returns {Object} The first event object
     */
    peek() {
      return this._timeline[0];
    }
    /**
     * Return the first event in the timeline and remove it
     */
    shift() {
      return this._timeline.shift();
    }
    /**
     * Get the event which is scheduled after the given time.
     * @param  time  The time to query.
     */
    getAfter(time, param = "time") {
      const index = this._search(time, param);
      if (index + 1 < this._timeline.length) {
        return this._timeline[index + 1];
      } else {
        return null;
      }
    }
    /**
     * Get the event before the event at the given time.
     * @param  time  The time to query.
     */
    getBefore(time) {
      const len = this._timeline.length;
      if (len > 0 && this._timeline[len - 1].time < time) {
        return this._timeline[len - 1];
      }
      const index = this._search(time);
      if (index - 1 >= 0) {
        return this._timeline[index - 1];
      } else {
        return null;
      }
    }
    /**
     * Cancel events at and after the given time
     * @param  after  The time to query.
     */
    cancel(after) {
      if (this._timeline.length > 1) {
        let index = this._search(after);
        if (index >= 0) {
          if (EQ(this._timeline[index].time, after)) {
            for (let i = index; i >= 0; i--) {
              if (EQ(this._timeline[i].time, after)) {
                index = i;
              } else {
                break;
              }
            }
            this._timeline = this._timeline.slice(0, index);
          } else {
            this._timeline = this._timeline.slice(0, index + 1);
          }
        } else {
          this._timeline = [];
        }
      } else if (this._timeline.length === 1) {
        if (GTE(this._timeline[0].time, after)) {
          this._timeline = [];
        }
      }
      return this;
    }
    /**
     * Cancel events before or equal to the given time.
     * @param  time  The time to cancel before.
     */
    cancelBefore(time) {
      const index = this._search(time);
      if (index >= 0) {
        this._timeline = this._timeline.slice(index + 1);
      }
      return this;
    }
    /**
     * Returns the previous event if there is one. null otherwise
     * @param  event The event to find the previous one of
     * @return The event right before the given event
     */
    previousEvent(event) {
      const index = this._timeline.indexOf(event);
      if (index > 0) {
        return this._timeline[index - 1];
      } else {
        return null;
      }
    }
    /**
     * Does a binary search on the timeline array and returns the
     * nearest event index whose time is after or equal to the given time.
     * If a time is searched before the first index in the timeline, -1 is returned.
     * If the time is after the end, the index of the last item is returned.
     */
    _search(time, param = "time") {
      if (this._timeline.length === 0) {
        return -1;
      }
      let beginning = 0;
      const len = this._timeline.length;
      let end = len;
      if (len > 0 && this._timeline[len - 1][param] <= time) {
        return len - 1;
      }
      while (beginning < end) {
        let midPoint = Math.floor(beginning + (end - beginning) / 2);
        const event = this._timeline[midPoint];
        const nextEvent = this._timeline[midPoint + 1];
        if (EQ(event[param], time)) {
          for (let i = midPoint; i < this._timeline.length; i++) {
            const testEvent = this._timeline[i];
            if (EQ(testEvent[param], time)) {
              midPoint = i;
            } else {
              break;
            }
          }
          return midPoint;
        } else if (LT(event[param], time) && GT(nextEvent[param], time)) {
          return midPoint;
        } else if (GT(event[param], time)) {
          end = midPoint;
        } else {
          beginning = midPoint + 1;
        }
      }
      return -1;
    }
    /**
     * Internal iterator. Applies extra safety checks for
     * removing items from the array.
     */
    _iterate(callback, lowerBound = 0, upperBound = this._timeline.length - 1) {
      this._timeline.slice(lowerBound, upperBound + 1).forEach(callback);
    }
    /**
     * Iterate over everything in the array
     * @param  callback The callback to invoke with every item
     */
    forEach(callback) {
      this._iterate(callback);
      return this;
    }
    /**
     * Iterate over everything in the array at or before the given time.
     * @param  time The time to check if items are before
     * @param  callback The callback to invoke with every item
     */
    forEachBefore(time, callback) {
      const upperBound = this._search(time);
      if (upperBound !== -1) {
        this._iterate(callback, 0, upperBound);
      }
      return this;
    }
    /**
     * Iterate over everything in the array after the given time.
     * @param  time The time to check if items are before
     * @param  callback The callback to invoke with every item
     */
    forEachAfter(time, callback) {
      const lowerBound = this._search(time);
      this._iterate(callback, lowerBound + 1);
      return this;
    }
    /**
     * Iterate over everything in the array between the startTime and endTime.
     * The timerange is inclusive of the startTime, but exclusive of the endTime.
     * range = [startTime, endTime).
     * @param  startTime The time to check if items are before
     * @param  endTime The end of the test interval.
     * @param  callback The callback to invoke with every item
     */
    forEachBetween(startTime, endTime, callback) {
      let lowerBound = this._search(startTime);
      let upperBound = this._search(endTime);
      if (lowerBound !== -1 && upperBound !== -1) {
        if (this._timeline[lowerBound].time !== startTime) {
          lowerBound += 1;
        }
        if (this._timeline[upperBound].time === endTime) {
          upperBound -= 1;
        }
        this._iterate(callback, lowerBound, upperBound);
      } else if (lowerBound === -1) {
        this._iterate(callback, 0, upperBound);
      }
      return this;
    }
    /**
     * Iterate over everything in the array at or after the given time. Similar to
     * forEachAfter, but includes the item(s) at the given time.
     * @param  time The time to check if items are before
     * @param  callback The callback to invoke with every item
     */
    forEachFrom(time, callback) {
      let lowerBound = this._search(time);
      while (lowerBound >= 0 && this._timeline[lowerBound].time >= time) {
        lowerBound--;
      }
      this._iterate(callback, lowerBound + 1);
      return this;
    }
    /**
     * Iterate over everything in the array at the given time
     * @param  time The time to check if items are before
     * @param  callback The callback to invoke with every item
     */
    forEachAtTime(time, callback) {
      const upperBound = this._search(time);
      if (upperBound !== -1 && EQ(this._timeline[upperBound].time, time)) {
        let lowerBound = upperBound;
        for (let i = upperBound; i >= 0; i--) {
          if (EQ(this._timeline[i].time, time)) {
            lowerBound = i;
          } else {
            break;
          }
        }
        this._iterate((event) => {
          callback(event);
        }, lowerBound, upperBound);
      }
      return this;
    }
    /**
     * Clean up.
     */
    dispose() {
      super.dispose();
      this._timeline = [];
      return this;
    }
  };

  // node_modules/tone/build/esm/core/context/ContextInitialization.js
  var notifyNewContext = [];
  function onContextInit(cb) {
    notifyNewContext.push(cb);
  }
  function initializeContext(ctx) {
    notifyNewContext.forEach((cb) => cb(ctx));
  }
  var notifyCloseContext = [];
  function onContextClose(cb) {
    notifyCloseContext.push(cb);
  }
  function closeContext(ctx) {
    notifyCloseContext.forEach((cb) => cb(ctx));
  }

  // node_modules/tone/build/esm/core/util/Emitter.js
  var Emitter = class _Emitter extends Tone {
    constructor() {
      super(...arguments);
      this.name = "Emitter";
    }
    /**
     * Bind a callback to a specific event.
     * @param  event     The name of the event to listen for.
     * @param  callback  The callback to invoke when the event is emitted
     */
    on(event, callback) {
      const events = event.split(/\W+/);
      events.forEach((eventName) => {
        if (isUndef(this._events)) {
          this._events = {};
        }
        if (!this._events.hasOwnProperty(eventName)) {
          this._events[eventName] = [];
        }
        this._events[eventName].push(callback);
      });
      return this;
    }
    /**
     * Bind a callback which is only invoked once
     * @param  event     The name of the event to listen for.
     * @param  callback  The callback to invoke when the event is emitted
     */
    once(event, callback) {
      const boundCallback = (...args) => {
        callback(...args);
        this.off(event, boundCallback);
      };
      this.on(event, boundCallback);
      return this;
    }
    /**
     * Remove the event listener.
     * @param  event     The event to stop listening to.
     * @param  callback  The callback which was bound to the event with Emitter.on.
     *                   If no callback is given, all callbacks events are removed.
     */
    off(event, callback) {
      const events = event.split(/\W+/);
      events.forEach((eventName) => {
        if (isUndef(this._events)) {
          this._events = {};
        }
        if (this._events.hasOwnProperty(eventName)) {
          if (isUndef(callback)) {
            this._events[eventName] = [];
          } else {
            const eventList = this._events[eventName];
            for (let i = eventList.length - 1; i >= 0; i--) {
              if (eventList[i] === callback) {
                eventList.splice(i, 1);
              }
            }
          }
        }
      });
      return this;
    }
    /**
     * Invoke all of the callbacks bound to the event
     * with any arguments passed in.
     * @param  event  The name of the event.
     * @param args The arguments to pass to the functions listening.
     */
    emit(event, ...args) {
      if (this._events) {
        if (this._events.hasOwnProperty(event)) {
          const eventList = this._events[event].slice(0);
          for (let i = 0, len = eventList.length; i < len; i++) {
            eventList[i].apply(this, args);
          }
        }
      }
      return this;
    }
    /**
     * Add Emitter functions (on/off/emit) to the object
     */
    static mixin(constr) {
      ["on", "once", "off", "emit"].forEach((name) => {
        const property = Object.getOwnPropertyDescriptor(_Emitter.prototype, name);
        Object.defineProperty(constr.prototype, name, property);
      });
    }
    /**
     * Clean up
     */
    dispose() {
      super.dispose();
      this._events = void 0;
      return this;
    }
  };

  // node_modules/tone/build/esm/core/context/BaseContext.js
  var BaseContext = class extends Emitter {
    constructor() {
      super(...arguments);
      this.isOffline = false;
    }
    /*
     * This is a placeholder so that JSON.stringify does not throw an error
     * This matches what JSON.stringify(audioContext) returns on a native
     * audioContext instance.
     */
    toJSON() {
      return {};
    }
  };

  // node_modules/tone/build/esm/core/context/Context.js
  var Context = class _Context extends BaseContext {
    constructor() {
      var _a, _b;
      super();
      this.name = "Context";
      this._constants = /* @__PURE__ */ new Map();
      this._timeouts = new Timeline();
      this._timeoutIds = 0;
      this._initialized = false;
      this._closeStarted = false;
      this.isOffline = false;
      this._workletPromise = null;
      const options = optionsFromArguments(_Context.getDefaults(), arguments, [
        "context"
      ]);
      if (options.context) {
        this._context = options.context;
        this._latencyHint = ((_a = arguments[0]) === null || _a === void 0 ? void 0 : _a.latencyHint) || "";
      } else {
        this._context = createAudioContext({
          latencyHint: options.latencyHint
        });
        this._latencyHint = options.latencyHint;
      }
      this._ticker = new Ticker(this.emit.bind(this, "tick"), options.clockSource, options.updateInterval, this._context.sampleRate);
      this.on("tick", this._timeoutLoop.bind(this));
      this._context.onstatechange = () => {
        this.emit("statechange", this.state);
      };
      this[((_b = arguments[0]) === null || _b === void 0 ? void 0 : _b.hasOwnProperty("updateInterval")) ? "_lookAhead" : "lookAhead"] = options.lookAhead;
    }
    static getDefaults() {
      return {
        clockSource: "worker",
        latencyHint: "interactive",
        lookAhead: 0.1,
        updateInterval: 0.05
      };
    }
    /**
     * Finish setting up the context. **You usually do not need to do this manually.**
     */
    initialize() {
      if (!this._initialized) {
        initializeContext(this);
        this._initialized = true;
      }
      return this;
    }
    //---------------------------
    // BASE AUDIO CONTEXT METHODS
    //---------------------------
    createAnalyser() {
      return this._context.createAnalyser();
    }
    createOscillator() {
      return this._context.createOscillator();
    }
    createBufferSource() {
      return this._context.createBufferSource();
    }
    createBiquadFilter() {
      return this._context.createBiquadFilter();
    }
    createBuffer(numberOfChannels, length, sampleRate) {
      return this._context.createBuffer(numberOfChannels, length, sampleRate);
    }
    createChannelMerger(numberOfInputs) {
      return this._context.createChannelMerger(numberOfInputs);
    }
    createChannelSplitter(numberOfOutputs) {
      return this._context.createChannelSplitter(numberOfOutputs);
    }
    createConstantSource() {
      return this._context.createConstantSource();
    }
    createConvolver() {
      return this._context.createConvolver();
    }
    createDelay(maxDelayTime) {
      return this._context.createDelay(maxDelayTime);
    }
    createDynamicsCompressor() {
      return this._context.createDynamicsCompressor();
    }
    createGain() {
      return this._context.createGain();
    }
    createIIRFilter(feedForward, feedback) {
      return this._context.createIIRFilter(feedForward, feedback);
    }
    createPanner() {
      return this._context.createPanner();
    }
    createPeriodicWave(real, imag, constraints) {
      return this._context.createPeriodicWave(real, imag, constraints);
    }
    createStereoPanner() {
      return this._context.createStereoPanner();
    }
    createWaveShaper() {
      return this._context.createWaveShaper();
    }
    createMediaStreamSource(stream) {
      assert(isAudioContext(this._context), "Not available if OfflineAudioContext");
      const context2 = this._context;
      return context2.createMediaStreamSource(stream);
    }
    createMediaElementSource(element) {
      assert(isAudioContext(this._context), "Not available if OfflineAudioContext");
      const context2 = this._context;
      return context2.createMediaElementSource(element);
    }
    createMediaStreamDestination() {
      assert(isAudioContext(this._context), "Not available if OfflineAudioContext");
      const context2 = this._context;
      return context2.createMediaStreamDestination();
    }
    decodeAudioData(audioData) {
      return this._context.decodeAudioData(audioData);
    }
    /**
     * The current time in seconds of the AudioContext.
     */
    get currentTime() {
      return this._context.currentTime;
    }
    /**
     * The current time in seconds of the AudioContext.
     */
    get state() {
      return this._context.state;
    }
    /**
     * The current time in seconds of the AudioContext.
     */
    get sampleRate() {
      return this._context.sampleRate;
    }
    /**
     * The listener
     */
    get listener() {
      this.initialize();
      return this._listener;
    }
    set listener(l) {
      assert(!this._initialized, "The listener cannot be set after initialization.");
      this._listener = l;
    }
    /**
     * There is only one Transport per Context. It is created on initialization.
     */
    get transport() {
      this.initialize();
      return this._transport;
    }
    set transport(t) {
      assert(!this._initialized, "The transport cannot be set after initialization.");
      this._transport = t;
    }
    /**
     * This is the Draw object for the context which is useful for synchronizing the draw frame with the Tone.js clock.
     */
    get draw() {
      this.initialize();
      return this._draw;
    }
    set draw(d) {
      assert(!this._initialized, "Draw cannot be set after initialization.");
      this._draw = d;
    }
    /**
     * A reference to the Context's destination node.
     */
    get destination() {
      this.initialize();
      return this._destination;
    }
    set destination(d) {
      assert(!this._initialized, "The destination cannot be set after initialization.");
      this._destination = d;
    }
    /**
     * Create an audio worklet node from a name and options. The module
     * must first be loaded using {@link addAudioWorkletModule}.
     */
    createAudioWorkletNode(name, options) {
      return createAudioWorkletNode(this.rawContext, name, options);
    }
    /**
     * Add an AudioWorkletProcessor module
     * @param url The url of the module
     */
    addAudioWorkletModule(url) {
      return __awaiter(this, void 0, void 0, function* () {
        assert(isDefined(this.rawContext.audioWorklet), "AudioWorkletNode is only available in a secure context (https or localhost)");
        if (!this._workletPromise) {
          this._workletPromise = this.rawContext.audioWorklet.addModule(url);
        }
        yield this._workletPromise;
      });
    }
    /**
     * Returns a promise which resolves when all of the worklets have been loaded on this context
     */
    workletsAreReady() {
      return __awaiter(this, void 0, void 0, function* () {
        (yield this._workletPromise) ? this._workletPromise : Promise.resolve();
      });
    }
    //---------------------------
    // TICKER
    //---------------------------
    /**
     * How often the interval callback is invoked.
     * This number corresponds to how responsive the scheduling
     * can be. Setting to 0 will result in the lowest practial interval
     * based on context properties. context.updateInterval + context.lookAhead
     * gives you the total latency between scheduling an event and hearing it.
     */
    get updateInterval() {
      return this._ticker.updateInterval;
    }
    set updateInterval(interval) {
      this._ticker.updateInterval = interval;
    }
    /**
     * What the source of the clock is, either "worker" (default),
     * "timeout", or "offline" (none).
     */
    get clockSource() {
      return this._ticker.type;
    }
    set clockSource(type) {
      this._ticker.type = type;
    }
    /**
     * The amount of time into the future events are scheduled. Giving Web Audio
     * a short amount of time into the future to schedule events can reduce clicks and
     * improve performance. This value can be set to 0 to get the lowest latency.
     * Adjusting this value also affects the {@link updateInterval}.
     */
    get lookAhead() {
      return this._lookAhead;
    }
    set lookAhead(time) {
      this._lookAhead = time;
      this.updateInterval = time ? time / 2 : 0.01;
    }
    /**
     * The type of playback, which affects tradeoffs between audio
     * output latency and responsiveness.
     * In addition to setting the value in seconds, the latencyHint also
     * accepts the strings "interactive" (prioritizes low latency),
     * "playback" (prioritizes sustained playback), "balanced" (balances
     * latency and performance).
     * @example
     * // prioritize sustained playback
     * const context = new Tone.Context({ latencyHint: "playback" });
     * // set this context as the global Context
     * Tone.setContext(context);
     * // the global context is gettable with Tone.getContext()
     * console.log(Tone.getContext().latencyHint);
     */
    get latencyHint() {
      return this._latencyHint;
    }
    /**
     * The unwrapped AudioContext or OfflineAudioContext
     */
    get rawContext() {
      return this._context;
    }
    /**
     * The current audio context time plus a short {@link lookAhead}.
     * @example
     * setInterval(() => {
     * 	console.log("now", Tone.now());
     * }, 100);
     */
    now() {
      return this._context.currentTime + this._lookAhead;
    }
    /**
     * The current audio context time without the {@link lookAhead}.
     * In most cases it is better to use {@link now} instead of {@link immediate} since
     * with {@link now} the {@link lookAhead} is applied equally to _all_ components including internal components,
     * to making sure that everything is scheduled in sync. Mixing {@link now} and {@link immediate}
     * can cause some timing issues. If no lookAhead is desired, you can set the {@link lookAhead} to `0`.
     */
    immediate() {
      return this._context.currentTime;
    }
    /**
     * Starts the audio context from a suspended state. This is required
     * to initially start the AudioContext.
     * @see {@link start}
     */
    resume() {
      if (isAudioContext(this._context)) {
        return this._context.resume();
      } else {
        return Promise.resolve();
      }
    }
    /**
     * Close the context. Once closed, the context can no longer be used and
     * any AudioNodes created from the context will be silent.
     */
    close() {
      return __awaiter(this, void 0, void 0, function* () {
        if (isAudioContext(this._context) && this.state !== "closed" && !this._closeStarted) {
          this._closeStarted = true;
          yield this._context.close();
        }
        if (this._initialized) {
          closeContext(this);
        }
      });
    }
    /**
     * **Internal** Generate a looped buffer at some constant value.
     */
    getConstant(val) {
      if (this._constants.has(val)) {
        return this._constants.get(val);
      } else {
        const buffer = this._context.createBuffer(1, 128, this._context.sampleRate);
        const arr = buffer.getChannelData(0);
        for (let i = 0; i < arr.length; i++) {
          arr[i] = val;
        }
        const constant = this._context.createBufferSource();
        constant.channelCount = 1;
        constant.channelCountMode = "explicit";
        constant.buffer = buffer;
        constant.loop = true;
        constant.start(0);
        this._constants.set(val, constant);
        return constant;
      }
    }
    /**
     * Clean up. Also closes the audio context.
     */
    dispose() {
      super.dispose();
      this._ticker.dispose();
      this._timeouts.dispose();
      Object.keys(this._constants).map((val) => this._constants[val].disconnect());
      this.close();
      return this;
    }
    //---------------------------
    // TIMEOUTS
    //---------------------------
    /**
     * The private loop which keeps track of the context scheduled timeouts
     * Is invoked from the clock source
     */
    _timeoutLoop() {
      const now = this.now();
      let firstEvent = this._timeouts.peek();
      while (this._timeouts.length && firstEvent && firstEvent.time <= now) {
        firstEvent.callback();
        this._timeouts.shift();
        firstEvent = this._timeouts.peek();
      }
    }
    /**
     * A setTimeout which is guaranteed by the clock source.
     * Also runs in the offline context.
     * @param  fn       The callback to invoke
     * @param  timeout  The timeout in seconds
     * @returns ID to use when invoking Context.clearTimeout
     */
    setTimeout(fn, timeout) {
      this._timeoutIds++;
      const now = this.now();
      this._timeouts.add({
        callback: fn,
        id: this._timeoutIds,
        time: now + timeout
      });
      return this._timeoutIds;
    }
    /**
     * Clears a previously scheduled timeout with Tone.context.setTimeout
     * @param  id  The ID returned from setTimeout
     */
    clearTimeout(id) {
      this._timeouts.forEach((event) => {
        if (event.id === id) {
          this._timeouts.remove(event);
        }
      });
      return this;
    }
    /**
     * Clear the function scheduled by {@link setInterval}
     */
    clearInterval(id) {
      return this.clearTimeout(id);
    }
    /**
     * Adds a repeating event to the context's callback clock
     */
    setInterval(fn, interval) {
      const id = ++this._timeoutIds;
      const intervalFn = () => {
        const now = this.now();
        this._timeouts.add({
          callback: () => {
            fn();
            intervalFn();
          },
          id,
          time: now + interval
        });
      };
      intervalFn();
      return id;
    }
  };

  // node_modules/tone/build/esm/core/context/DummyContext.js
  var DummyContext = class extends BaseContext {
    constructor() {
      super(...arguments);
      this.lookAhead = 0;
      this.latencyHint = 0;
      this.isOffline = false;
    }
    //---------------------------
    // BASE AUDIO CONTEXT METHODS
    //---------------------------
    createAnalyser() {
      return {};
    }
    createOscillator() {
      return {};
    }
    createBufferSource() {
      return {};
    }
    createBiquadFilter() {
      return {};
    }
    createBuffer(_numberOfChannels, _length, _sampleRate) {
      return {};
    }
    createChannelMerger(_numberOfInputs) {
      return {};
    }
    createChannelSplitter(_numberOfOutputs) {
      return {};
    }
    createConstantSource() {
      return {};
    }
    createConvolver() {
      return {};
    }
    createDelay(_maxDelayTime) {
      return {};
    }
    createDynamicsCompressor() {
      return {};
    }
    createGain() {
      return {};
    }
    createIIRFilter(_feedForward, _feedback) {
      return {};
    }
    createPanner() {
      return {};
    }
    createPeriodicWave(_real, _imag, _constraints) {
      return {};
    }
    createStereoPanner() {
      return {};
    }
    createWaveShaper() {
      return {};
    }
    createMediaStreamSource(_stream) {
      return {};
    }
    createMediaElementSource(_element) {
      return {};
    }
    createMediaStreamDestination() {
      return {};
    }
    decodeAudioData(_audioData) {
      return Promise.resolve({});
    }
    //---------------------------
    // TONE AUDIO CONTEXT METHODS
    //---------------------------
    createAudioWorkletNode(_name, _options) {
      return {};
    }
    get rawContext() {
      return {};
    }
    addAudioWorkletModule(_url) {
      return __awaiter(this, void 0, void 0, function* () {
        return Promise.resolve();
      });
    }
    resume() {
      return Promise.resolve();
    }
    setTimeout(_fn, _timeout) {
      return 0;
    }
    clearTimeout(_id) {
      return this;
    }
    setInterval(_fn, _interval) {
      return 0;
    }
    clearInterval(_id) {
      return this;
    }
    getConstant(_val) {
      return {};
    }
    get currentTime() {
      return 0;
    }
    get state() {
      return {};
    }
    get sampleRate() {
      return 0;
    }
    get listener() {
      return {};
    }
    get transport() {
      return {};
    }
    get draw() {
      return {};
    }
    set draw(_d) {
    }
    get destination() {
      return {};
    }
    set destination(_d) {
    }
    now() {
      return 0;
    }
    immediate() {
      return 0;
    }
  };

  // node_modules/tone/build/esm/core/util/Interface.js
  function readOnly(target, property) {
    if (isArray(property)) {
      property.forEach((str) => readOnly(target, str));
    } else {
      Object.defineProperty(target, property, {
        enumerable: true,
        writable: false
      });
    }
  }
  function writable(target, property) {
    if (isArray(property)) {
      property.forEach((str) => writable(target, str));
    } else {
      Object.defineProperty(target, property, {
        writable: true
      });
    }
  }
  var noOp = () => {
  };

  // node_modules/tone/build/esm/core/context/ToneAudioBuffer.js
  var ToneAudioBuffer = class _ToneAudioBuffer extends Tone {
    constructor() {
      super();
      this.name = "ToneAudioBuffer";
      this.onload = noOp;
      const options = optionsFromArguments(_ToneAudioBuffer.getDefaults(), arguments, ["url", "onload", "onerror"]);
      this.reverse = options.reverse;
      this.onload = options.onload;
      if (isString(options.url)) {
        this.load(options.url).catch(options.onerror);
      } else if (options.url) {
        this.set(options.url);
      }
    }
    static getDefaults() {
      return {
        onerror: noOp,
        onload: noOp,
        reverse: false
      };
    }
    /**
     * The sample rate of the AudioBuffer
     */
    get sampleRate() {
      if (this._buffer) {
        return this._buffer.sampleRate;
      } else {
        return getContext().sampleRate;
      }
    }
    /**
     * Pass in an AudioBuffer or ToneAudioBuffer to set the value of this buffer.
     */
    set(buffer) {
      if (buffer instanceof _ToneAudioBuffer) {
        if (buffer.loaded) {
          this._buffer = buffer.get();
        } else {
          buffer.onload = () => {
            this.set(buffer);
            this.onload(this);
          };
        }
      } else {
        this._buffer = buffer;
      }
      if (this._reversed) {
        this._reverse();
      }
      return this;
    }
    /**
     * The audio buffer stored in the object.
     */
    get() {
      return this._buffer;
    }
    /**
     * Makes an fetch request for the selected url then decodes the file as an audio buffer.
     * Invokes the callback once the audio buffer loads.
     * @param url The url of the buffer to load. filetype support depends on the browser.
     * @returns A Promise which resolves with this ToneAudioBuffer
     */
    load(url) {
      return __awaiter(this, void 0, void 0, function* () {
        const doneLoading = _ToneAudioBuffer.load(url).then((audioBuffer) => {
          this.set(audioBuffer);
          this.onload(this);
        });
        _ToneAudioBuffer.downloads.push(doneLoading);
        try {
          yield doneLoading;
        } finally {
          const index = _ToneAudioBuffer.downloads.indexOf(doneLoading);
          _ToneAudioBuffer.downloads.splice(index, 1);
        }
        return this;
      });
    }
    /**
     * clean up
     */
    dispose() {
      super.dispose();
      this._buffer = void 0;
      return this;
    }
    /**
     * Set the audio buffer from the array.
     * To create a multichannel AudioBuffer, pass in a multidimensional array.
     * @param array The array to fill the audio buffer
     */
    fromArray(array) {
      const isMultidimensional = isArray(array) && array[0].length > 0;
      const channels = isMultidimensional ? array.length : 1;
      const len = isMultidimensional ? array[0].length : array.length;
      const context2 = getContext();
      const buffer = context2.createBuffer(channels, len, context2.sampleRate);
      const multiChannelArray = !isMultidimensional && channels === 1 ? [array] : array;
      for (let c = 0; c < channels; c++) {
        buffer.copyToChannel(multiChannelArray[c], c);
      }
      this._buffer = buffer;
      return this;
    }
    /**
     * Sums multiple channels into 1 channel
     * @param chanNum Optionally only copy a single channel from the array.
     */
    toMono(chanNum) {
      if (isNumber(chanNum)) {
        this.fromArray(this.toArray(chanNum));
      } else {
        let outputArray = new Float32Array(this.length);
        const numChannels = this.numberOfChannels;
        for (let channel = 0; channel < numChannels; channel++) {
          const channelArray = this.toArray(channel);
          for (let i = 0; i < channelArray.length; i++) {
            outputArray[i] += channelArray[i];
          }
        }
        outputArray = outputArray.map((sample) => sample / numChannels);
        this.fromArray(outputArray);
      }
      return this;
    }
    /**
     * Get the buffer as an array. Single channel buffers will return a 1-dimensional
     * Float32Array, and multichannel buffers will return multidimensional arrays.
     * @param channel Optionally only copy a single channel from the array.
     */
    toArray(channel) {
      if (isNumber(channel)) {
        return this.getChannelData(channel);
      } else if (this.numberOfChannels === 1) {
        return this.toArray(0);
      } else {
        const ret = [];
        for (let c = 0; c < this.numberOfChannels; c++) {
          ret[c] = this.getChannelData(c);
        }
        return ret;
      }
    }
    /**
     * Returns the Float32Array representing the PCM audio data for the specific channel.
     * @param  channel  The channel number to return
     * @return The audio as a TypedArray
     */
    getChannelData(channel) {
      if (this._buffer) {
        return this._buffer.getChannelData(channel);
      } else {
        return new Float32Array(0);
      }
    }
    /**
     * Cut a subsection of the array and return a buffer of the
     * subsection. Does not modify the original buffer
     * @param start The time to start the slice
     * @param end The end time to slice. If none is given will default to the end of the buffer
     */
    slice(start2, end = this.duration) {
      assert(this.loaded, "Buffer is not loaded");
      const startSamples = Math.floor(start2 * this.sampleRate);
      const endSamples = Math.floor(end * this.sampleRate);
      assert(startSamples < endSamples, "The start time must be less than the end time");
      const length = endSamples - startSamples;
      const retBuffer = getContext().createBuffer(this.numberOfChannels, length, this.sampleRate);
      for (let channel = 0; channel < this.numberOfChannels; channel++) {
        retBuffer.copyToChannel(this.getChannelData(channel).subarray(startSamples, endSamples), channel);
      }
      return new _ToneAudioBuffer(retBuffer);
    }
    /**
     * Reverse the buffer.
     */
    _reverse() {
      if (this.loaded) {
        for (let i = 0; i < this.numberOfChannels; i++) {
          this.getChannelData(i).reverse();
        }
      }
      return this;
    }
    /**
     * If the buffer is loaded or not
     */
    get loaded() {
      return this.length > 0;
    }
    /**
     * The duration of the buffer in seconds.
     */
    get duration() {
      if (this._buffer) {
        return this._buffer.duration;
      } else {
        return 0;
      }
    }
    /**
     * The length of the buffer in samples
     */
    get length() {
      if (this._buffer) {
        return this._buffer.length;
      } else {
        return 0;
      }
    }
    /**
     * The number of discrete audio channels. Returns 0 if no buffer is loaded.
     */
    get numberOfChannels() {
      if (this._buffer) {
        return this._buffer.numberOfChannels;
      } else {
        return 0;
      }
    }
    /**
     * Reverse the buffer.
     */
    get reverse() {
      return this._reversed;
    }
    set reverse(rev) {
      if (this._reversed !== rev) {
        this._reversed = rev;
        this._reverse();
      }
    }
    /**
     * Create a ToneAudioBuffer from the array. To create a multichannel AudioBuffer,
     * pass in a multidimensional array.
     * @param array The array to fill the audio buffer
     * @return A ToneAudioBuffer created from the array
     */
    static fromArray(array) {
      return new _ToneAudioBuffer().fromArray(array);
    }
    /**
     * Creates a ToneAudioBuffer from a URL, returns a promise which resolves to a ToneAudioBuffer
     * @param  url The url to load.
     * @return A promise which resolves to a ToneAudioBuffer
     */
    static fromUrl(url) {
      return __awaiter(this, void 0, void 0, function* () {
        const buffer = new _ToneAudioBuffer();
        return yield buffer.load(url);
      });
    }
    /**
     * Loads a url using fetch and returns the AudioBuffer.
     */
    static load(url) {
      return __awaiter(this, void 0, void 0, function* () {
        const matches = url.match(/\[([^\]\[]+\|.+)\]$/);
        if (matches) {
          const extensions = matches[1].split("|");
          let extension = extensions[0];
          for (const ext of extensions) {
            if (_ToneAudioBuffer.supportsType(ext)) {
              extension = ext;
              break;
            }
          }
          url = url.replace(matches[0], extension);
        }
        const baseUrl = _ToneAudioBuffer.baseUrl === "" || _ToneAudioBuffer.baseUrl.endsWith("/") ? _ToneAudioBuffer.baseUrl : _ToneAudioBuffer.baseUrl + "/";
        const location = document.createElement("a");
        location.href = baseUrl + url;
        location.pathname = (location.pathname + location.hash).split("/").map(encodeURIComponent).join("/");
        const response = yield fetch(location.href);
        if (!response.ok) {
          throw new Error(`could not load url: ${url}`);
        }
        const arrayBuffer = yield response.arrayBuffer();
        const audioBuffer = yield getContext().decodeAudioData(arrayBuffer);
        return audioBuffer;
      });
    }
    /**
     * Checks a url's extension to see if the current browser can play that file type.
     * @param url The url/extension to test
     * @return If the file extension can be played
     * @static
     * @example
     * Tone.ToneAudioBuffer.supportsType("wav"); // returns true
     * Tone.ToneAudioBuffer.supportsType("path/to/file.wav"); // returns true
     */
    static supportsType(url) {
      const extensions = url.split(".");
      const extension = extensions[extensions.length - 1];
      const response = document.createElement("audio").canPlayType("audio/" + extension);
      return response !== "";
    }
    /**
     * Returns a Promise which resolves when all of the buffers have loaded
     */
    static loaded() {
      return __awaiter(this, void 0, void 0, function* () {
        yield Promise.resolve();
        while (_ToneAudioBuffer.downloads.length) {
          yield _ToneAudioBuffer.downloads[0];
        }
      });
    }
  };
  ToneAudioBuffer.baseUrl = "";
  ToneAudioBuffer.downloads = [];

  // node_modules/tone/build/esm/core/context/OfflineContext.js
  var OfflineContext = class extends Context {
    constructor() {
      super({
        clockSource: "offline",
        context: isOfflineAudioContext(arguments[0]) ? arguments[0] : createOfflineAudioContext(arguments[0], arguments[1] * arguments[2], arguments[2]),
        lookAhead: 0,
        updateInterval: isOfflineAudioContext(arguments[0]) ? 128 / arguments[0].sampleRate : 128 / arguments[2]
      });
      this.name = "OfflineContext";
      this._currentTime = 0;
      this.isOffline = true;
      this._duration = isOfflineAudioContext(arguments[0]) ? arguments[0].length / arguments[0].sampleRate : arguments[1];
    }
    /**
     * Override the now method to point to the internal clock time
     */
    now() {
      return this._currentTime;
    }
    /**
     * Same as this.now()
     */
    get currentTime() {
      return this._currentTime;
    }
    /**
     * Render just the clock portion of the audio context.
     */
    _renderClock(asynchronous) {
      return __awaiter(this, void 0, void 0, function* () {
        let index = 0;
        while (this._duration - this._currentTime >= 0) {
          this.emit("tick");
          this._currentTime += 128 / this.sampleRate;
          index++;
          const yieldEvery = Math.floor(this.sampleRate / 128);
          if (asynchronous && index % yieldEvery === 0) {
            yield new Promise((done) => setTimeout(done, 1));
          }
        }
      });
    }
    /**
     * Render the output of the OfflineContext
     * @param asynchronous If the clock should be rendered asynchronously, which will not block the main thread, but be slightly slower.
     */
    render() {
      return __awaiter(this, arguments, void 0, function* (asynchronous = true) {
        yield this.workletsAreReady();
        yield this._renderClock(asynchronous);
        const buffer = yield this._context.startRendering();
        return new ToneAudioBuffer(buffer);
      });
    }
    /**
     * Close the context
     */
    close() {
      return Promise.resolve();
    }
  };

  // node_modules/tone/build/esm/core/Global.js
  var dummyContext = new DummyContext();
  var globalContext = dummyContext;
  function getContext() {
    if (globalContext === dummyContext && hasAudioContext) {
      setContext(new Context());
    }
    return globalContext;
  }
  function setContext(context2, disposeOld = false) {
    if (disposeOld) {
      globalContext.dispose();
    }
    if (isAudioContext(context2)) {
      globalContext = new Context(context2);
    } else if (isOfflineAudioContext(context2)) {
      globalContext = new OfflineContext(context2);
    } else {
      globalContext = context2;
    }
  }
  if (theWindow && !theWindow.TONE_SILENCE_LOGGING) {
    let prefix = "v";
    if (version === "dev") {
      prefix = "";
    }
    const printString = ` * Tone.js ${prefix}${version} * `;
    console.log(`%c${printString}`, "background: #000; color: #fff");
  }

  // node_modules/tone/build/esm/core/type/Conversions.js
  function dbToGain(db) {
    return Math.pow(10, db / 20);
  }
  function gainToDb(gain) {
    return 20 * (Math.log(gain) / Math.LN10);
  }
  function intervalToFrequencyRatio(interval) {
    return Math.pow(2, interval / 12);
  }
  var A4 = 440;
  function getA4() {
    return A4;
  }
  function setA4(freq) {
    A4 = freq;
  }
  function ftom(frequency) {
    return Math.round(ftomf(frequency));
  }
  function ftomf(frequency) {
    return 69 + 12 * Math.log2(frequency / A4);
  }
  function mtof(midi) {
    return A4 * Math.pow(2, (midi - 69) / 12);
  }

  // node_modules/tone/build/esm/core/type/TimeBase.js
  var TimeBaseClass = class _TimeBaseClass extends Tone {
    /**
     * @param context The context associated with the time value. Used to compute
     * Transport and context-relative timing.
     * @param  value  The time value as a number, string or object
     * @param  units  Unit values
     */
    constructor(context2, value, units) {
      super();
      this.defaultUnits = "s";
      this._val = value;
      this._units = units;
      this.context = context2;
      this._expressions = this._getExpressions();
    }
    /**
     * All of the time encoding expressions
     */
    _getExpressions() {
      return {
        hz: {
          method: (value) => {
            return this._frequencyToUnits(parseFloat(value));
          },
          regexp: /^(\d+(?:\.\d+)?)hz$/i
        },
        i: {
          method: (value) => {
            return this._ticksToUnits(parseInt(value, 10));
          },
          regexp: /^(\d+)i$/i
        },
        m: {
          method: (value) => {
            return this._beatsToUnits(parseInt(value, 10) * this._getTimeSignature());
          },
          regexp: /^(\d+)m$/i
        },
        n: {
          method: (value, dot) => {
            const numericValue = parseInt(value, 10);
            const scalar = dot === "." ? 1.5 : 1;
            if (numericValue === 1) {
              return this._beatsToUnits(this._getTimeSignature()) * scalar;
            } else {
              return this._beatsToUnits(4 / numericValue) * scalar;
            }
          },
          regexp: /^(\d+)n(\.?)$/i
        },
        number: {
          method: (value) => {
            return this._expressions[this.defaultUnits].method.call(this, value);
          },
          regexp: /^(\d+(?:\.\d+)?)$/
        },
        s: {
          method: (value) => {
            return this._secondsToUnits(parseFloat(value));
          },
          regexp: /^(\d+(?:\.\d+)?)s$/
        },
        samples: {
          method: (value) => {
            return parseInt(value, 10) / this.context.sampleRate;
          },
          regexp: /^(\d+)samples$/
        },
        t: {
          method: (value) => {
            const numericValue = parseInt(value, 10);
            return this._beatsToUnits(8 / (Math.floor(numericValue) * 3));
          },
          regexp: /^(\d+)t$/i
        },
        tr: {
          method: (m, q, s) => {
            let total = 0;
            if (m && m !== "0") {
              total += this._beatsToUnits(this._getTimeSignature() * parseFloat(m));
            }
            if (q && q !== "0") {
              total += this._beatsToUnits(parseFloat(q));
            }
            if (s && s !== "0") {
              total += this._beatsToUnits(parseFloat(s) / 4);
            }
            return total;
          },
          regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/
        }
      };
    }
    //-------------------------------------
    // 	VALUE OF
    //-------------------------------------
    /**
     * Evaluate the time value. Returns the time in seconds.
     */
    valueOf() {
      if (this._val instanceof _TimeBaseClass) {
        this.fromType(this._val);
      }
      if (isUndef(this._val)) {
        return this._noArg();
      } else if (isString(this._val) && isUndef(this._units)) {
        for (const units in this._expressions) {
          if (this._expressions[units].regexp.test(this._val.trim())) {
            this._units = units;
            break;
          }
        }
      } else if (isObject(this._val)) {
        let total = 0;
        for (const typeName in this._val) {
          if (isDefined(this._val[typeName])) {
            const quantity = this._val[typeName];
            const time = (
              // @ts-ignore
              new this.constructor(this.context, typeName).valueOf() * quantity
            );
            total += time;
          }
        }
        return total;
      }
      if (isDefined(this._units)) {
        const expr = this._expressions[this._units];
        const matching = this._val.toString().trim().match(expr.regexp);
        if (matching) {
          return expr.method.apply(this, matching.slice(1));
        } else {
          return expr.method.call(this, this._val);
        }
      } else if (isString(this._val)) {
        return parseFloat(this._val);
      } else {
        return this._val;
      }
    }
    //-------------------------------------
    // 	UNIT CONVERSIONS
    //-------------------------------------
    /**
     * Returns the value of a frequency in the current units
     */
    _frequencyToUnits(freq) {
      return 1 / freq;
    }
    /**
     * Return the value of the beats in the current units
     */
    _beatsToUnits(beats) {
      return 60 / this._getBpm() * beats;
    }
    /**
     * Returns the value of a second in the current units
     */
    _secondsToUnits(seconds) {
      return seconds;
    }
    /**
     * Returns the value of a tick in the current time units
     */
    _ticksToUnits(ticks) {
      return ticks * this._beatsToUnits(1) / this._getPPQ();
    }
    /**
     * With no arguments, return 'now'
     */
    _noArg() {
      return this._now();
    }
    //-------------------------------------
    // 	TEMPO CONVERSIONS
    //-------------------------------------
    /**
     * Return the bpm
     */
    _getBpm() {
      return this.context.transport.bpm.value;
    }
    /**
     * Return the timeSignature
     */
    _getTimeSignature() {
      return this.context.transport.timeSignature;
    }
    /**
     * Return the PPQ or 192 if Transport is not available
     */
    _getPPQ() {
      return this.context.transport.PPQ;
    }
    //-------------------------------------
    // 	CONVERSION INTERFACE
    //-------------------------------------
    /**
     * Coerce a time type into this units type.
     * @param type Any time type units
     */
    fromType(type) {
      this._units = void 0;
      switch (this.defaultUnits) {
        case "s":
          this._val = type.toSeconds();
          break;
        case "i":
          this._val = type.toTicks();
          break;
        case "hz":
          this._val = type.toFrequency();
          break;
        case "midi":
          this._val = type.toMidi();
          break;
      }
      return this;
    }
    /**
     * Return the value in hertz
     */
    toFrequency() {
      return 1 / this.toSeconds();
    }
    /**
     * Return the time in samples
     */
    toSamples() {
      return this.toSeconds() * this.context.sampleRate;
    }
    /**
     * Return the time in milliseconds.
     */
    toMilliseconds() {
      return this.toSeconds() * 1e3;
    }
  };

  // node_modules/tone/build/esm/core/type/Time.js
  var TimeClass = class _TimeClass extends TimeBaseClass {
    constructor() {
      super(...arguments);
      this.name = "TimeClass";
    }
    _getExpressions() {
      return Object.assign(super._getExpressions(), {
        now: {
          method: (capture) => {
            return this._now() + new this.constructor(this.context, capture).valueOf();
          },
          regexp: /^\+(.+)/
        },
        quantize: {
          method: (capture) => {
            const quantTo = new _TimeClass(this.context, capture).valueOf();
            return this._secondsToUnits(this.context.transport.nextSubdivision(quantTo));
          },
          regexp: /^@(.+)/
        }
      });
    }
    /**
     * Quantize the time by the given subdivision. Optionally add a
     * percentage which will move the time value towards the ideal
     * quantized value by that percentage.
     * @param  subdiv    The subdivision to quantize to
     * @param  percent  Move the time value towards the quantized value by a percentage.
     * @example
     * Tone.Time(21).quantize(2); // returns 22
     * Tone.Time(0.6).quantize("4n", 0.5); // returns 0.55
     */
    quantize(subdiv, percent = 1) {
      const subdivision = new this.constructor(this.context, subdiv).valueOf();
      const value = this.valueOf();
      const multiple = Math.round(value / subdivision);
      const ideal = multiple * subdivision;
      const diff = ideal - value;
      return value + diff * percent;
    }
    //-------------------------------------
    // CONVERSIONS
    //-------------------------------------
    /**
     * Convert a Time to Notation. The notation values are will be the
     * closest representation between 1m to 128th note.
     * @return {Notation}
     * @example
     * // if the Transport is at 120bpm:
     * Tone.Time(2).toNotation(); // returns "1m"
     */
    toNotation() {
      const time = this.toSeconds();
      const testNotations = ["1m"];
      for (let power = 1; power < 9; power++) {
        const subdiv = Math.pow(2, power);
        testNotations.push(subdiv + "n.");
        testNotations.push(subdiv + "n");
        testNotations.push(subdiv + "t");
      }
      testNotations.push("0");
      let closest = testNotations[0];
      let closestSeconds = new _TimeClass(this.context, testNotations[0]).toSeconds();
      testNotations.forEach((notation) => {
        const notationSeconds = new _TimeClass(this.context, notation).toSeconds();
        if (Math.abs(notationSeconds - time) < Math.abs(closestSeconds - time)) {
          closest = notation;
          closestSeconds = notationSeconds;
        }
      });
      return closest;
    }
    /**
     * Return the time encoded as Bars:Beats:Sixteenths.
     */
    toBarsBeatsSixteenths() {
      const quarterTime = this._beatsToUnits(1);
      let quarters = this.valueOf() / quarterTime;
      quarters = parseFloat(quarters.toFixed(4));
      const measures = Math.floor(quarters / this._getTimeSignature());
      let sixteenths = quarters % 1 * 4;
      quarters = Math.floor(quarters) % this._getTimeSignature();
      const sixteenthString = sixteenths.toString();
      if (sixteenthString.length > 3) {
        sixteenths = parseFloat(parseFloat(sixteenthString).toFixed(3));
      }
      const progress = [measures, quarters, sixteenths];
      return progress.join(":");
    }
    /**
     * Return the time in ticks.
     */
    toTicks() {
      const quarterTime = this._beatsToUnits(1);
      const quarters = this.valueOf() / quarterTime;
      return quarters * this._getPPQ();
    }
    /**
     * Return the time in seconds.
     */
    toSeconds() {
      return this.valueOf();
    }
    /**
     * Return the value as a midi note.
     */
    toMidi() {
      return ftom(this.toFrequency());
    }
    _now() {
      return this.context.now();
    }
  };

  // node_modules/tone/build/esm/core/type/Frequency.js
  var FrequencyClass = class _FrequencyClass extends TimeClass {
    constructor() {
      super(...arguments);
      this.name = "Frequency";
      this.defaultUnits = "hz";
    }
    /**
     * The [concert tuning pitch](https://en.wikipedia.org/wiki/Concert_pitch) which is used
     * to generate all the other pitch values from notes. A4's values in Hertz.
     */
    static get A4() {
      return getA4();
    }
    static set A4(freq) {
      setA4(freq);
    }
    //-------------------------------------
    // 	AUGMENT BASE EXPRESSIONS
    //-------------------------------------
    _getExpressions() {
      return Object.assign({}, super._getExpressions(), {
        midi: {
          regexp: /^(\d+(?:\.\d+)?midi)/,
          method(value) {
            if (this.defaultUnits === "midi") {
              return value;
            } else {
              return _FrequencyClass.mtof(value);
            }
          }
        },
        note: {
          regexp: /^([a-g]{1}(?:b|#|##|x|bb|###|#x|x#|bbb)?)(-?[0-9]+)/i,
          method(pitch, octave) {
            const index = noteToScaleIndex[pitch.toLowerCase()];
            const noteNumber = index + (parseInt(octave, 10) + 1) * 12;
            if (this.defaultUnits === "midi") {
              return noteNumber;
            } else {
              return _FrequencyClass.mtof(noteNumber);
            }
          }
        },
        tr: {
          regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,
          method(m, q, s) {
            let total = 1;
            if (m && m !== "0") {
              total *= this._beatsToUnits(this._getTimeSignature() * parseFloat(m));
            }
            if (q && q !== "0") {
              total *= this._beatsToUnits(parseFloat(q));
            }
            if (s && s !== "0") {
              total *= this._beatsToUnits(parseFloat(s) / 4);
            }
            return total;
          }
        }
      });
    }
    //-------------------------------------
    // 	EXPRESSIONS
    //-------------------------------------
    /**
     * Transposes the frequency by the given number of semitones.
     * @return  A new transposed frequency
     * @example
     * Tone.Frequency("A4").transpose(3); // "C5"
     */
    transpose(interval) {
      return new _FrequencyClass(this.context, this.valueOf() * intervalToFrequencyRatio(interval));
    }
    /**
     * Takes an array of semitone intervals and returns
     * an array of frequencies transposed by those intervals.
     * @return  Returns an array of Frequencies
     * @example
     * Tone.Frequency("A4").harmonize([0, 3, 7]); // ["A4", "C5", "E5"]
     */
    harmonize(intervals) {
      return intervals.map((interval) => {
        return this.transpose(interval);
      });
    }
    //-------------------------------------
    // 	UNIT CONVERSIONS
    //-------------------------------------
    /**
     * Return the value of the frequency as a MIDI note
     * @example
     * Tone.Frequency("C4").toMidi(); // 60
     */
    toMidi() {
      return ftom(this.valueOf());
    }
    /**
     * Return the value of the frequency in Scientific Pitch Notation
     * @example
     * Tone.Frequency(69, "midi").toNote(); // "A4"
     */
    toNote() {
      const freq = this.toFrequency();
      const log2 = Math.log2(freq / _FrequencyClass.A4);
      let noteNumber = Math.round(12 * log2) + 57;
      const octave = Math.floor(noteNumber / 12);
      if (octave < 0) {
        noteNumber += -12 * octave;
      }
      const noteName = scaleIndexToNote[noteNumber % 12];
      return noteName + octave.toString();
    }
    /**
     * Return the duration of one cycle in seconds.
     */
    toSeconds() {
      return 1 / super.toSeconds();
    }
    /**
     * Return the duration of one cycle in ticks
     */
    toTicks() {
      const quarterTime = this._beatsToUnits(1);
      const quarters = this.valueOf() / quarterTime;
      return Math.floor(quarters * this._getPPQ());
    }
    //-------------------------------------
    // 	UNIT CONVERSIONS HELPERS
    //-------------------------------------
    /**
     * With no arguments, return 0
     */
    _noArg() {
      return 0;
    }
    /**
     * Returns the value of a frequency in the current units
     */
    _frequencyToUnits(freq) {
      return freq;
    }
    /**
     * Returns the value of a tick in the current time units
     */
    _ticksToUnits(ticks) {
      return 1 / (ticks * 60 / (this._getBpm() * this._getPPQ()));
    }
    /**
     * Return the value of the beats in the current units
     */
    _beatsToUnits(beats) {
      return 1 / super._beatsToUnits(beats);
    }
    /**
     * Returns the value of a second in the current units
     */
    _secondsToUnits(seconds) {
      return 1 / seconds;
    }
    /**
     * Convert a MIDI note to frequency value.
     * @param  midi The midi number to convert.
     * @return The corresponding frequency value
     */
    static mtof(midi) {
      return mtof(midi);
    }
    /**
     * Convert a frequency value to a MIDI note.
     * @param frequency The value to frequency value to convert.
     */
    static ftom(frequency) {
      return ftom(frequency);
    }
  };
  var noteToScaleIndex = {
    cbbb: -3,
    cbb: -2,
    cb: -1,
    c: 0,
    "c#": 1,
    cx: 2,
    "c##": 2,
    "c###": 3,
    "cx#": 3,
    "c#x": 3,
    dbbb: -1,
    dbb: 0,
    db: 1,
    d: 2,
    "d#": 3,
    dx: 4,
    "d##": 4,
    "d###": 5,
    "dx#": 5,
    "d#x": 5,
    ebbb: 1,
    ebb: 2,
    eb: 3,
    e: 4,
    "e#": 5,
    ex: 6,
    "e##": 6,
    "e###": 7,
    "ex#": 7,
    "e#x": 7,
    fbbb: 2,
    fbb: 3,
    fb: 4,
    f: 5,
    "f#": 6,
    fx: 7,
    "f##": 7,
    "f###": 8,
    "fx#": 8,
    "f#x": 8,
    gbbb: 4,
    gbb: 5,
    gb: 6,
    g: 7,
    "g#": 8,
    gx: 9,
    "g##": 9,
    "g###": 10,
    "gx#": 10,
    "g#x": 10,
    abbb: 6,
    abb: 7,
    ab: 8,
    a: 9,
    "a#": 10,
    ax: 11,
    "a##": 11,
    "a###": 12,
    "ax#": 12,
    "a#x": 12,
    bbbb: 8,
    bbb: 9,
    bb: 10,
    b: 11,
    "b#": 12,
    bx: 13,
    "b##": 13,
    "b###": 14,
    "bx#": 14,
    "b#x": 14
  };
  var scaleIndexToNote = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B"
  ];

  // node_modules/tone/build/esm/core/type/TransportTime.js
  var TransportTimeClass = class extends TimeClass {
    constructor() {
      super(...arguments);
      this.name = "TransportTime";
    }
    /**
     * Return the current time in whichever context is relevant
     */
    _now() {
      return this.context.transport.seconds;
    }
  };

  // node_modules/tone/build/esm/core/context/ToneWithContext.js
  var ToneWithContext = class _ToneWithContext extends Tone {
    constructor() {
      super();
      const options = optionsFromArguments(_ToneWithContext.getDefaults(), arguments, ["context"]);
      if (this.defaultContext) {
        this.context = this.defaultContext;
      } else {
        this.context = options.context;
      }
    }
    static getDefaults() {
      return {
        context: getContext()
      };
    }
    /**
     * Return the current time of the Context clock plus the lookAhead.
     * @example
     * setInterval(() => {
     * 	console.log(Tone.now());
     * }, 100);
     */
    now() {
      return this.context.currentTime + this.context.lookAhead;
    }
    /**
     * Return the current time of the Context clock without any lookAhead.
     * @example
     * setInterval(() => {
     * 	console.log(Tone.immediate());
     * }, 100);
     */
    immediate() {
      return this.context.currentTime;
    }
    /**
     * The duration in seconds of one sample.
     */
    get sampleTime() {
      return 1 / this.context.sampleRate;
    }
    /**
     * The number of seconds of 1 processing block (128 samples)
     * @example
     * console.log(Tone.Destination.blockTime);
     */
    get blockTime() {
      return 128 / this.context.sampleRate;
    }
    /**
     * Convert the incoming time to seconds.
     * This is calculated against the current {@link TransportClass} bpm
     * @example
     * const gain = new Tone.Gain();
     * setInterval(() => console.log(gain.toSeconds("4n")), 100);
     * // ramp the tempo to 60 bpm over 30 seconds
     * Tone.getTransport().bpm.rampTo(60, 30);
     */
    toSeconds(time) {
      assertUsedScheduleTime(time);
      return new TimeClass(this.context, time).toSeconds();
    }
    /**
     * Convert the input to a frequency number
     * @example
     * const gain = new Tone.Gain();
     * console.log(gain.toFrequency("4n"));
     */
    toFrequency(freq) {
      return new FrequencyClass(this.context, freq).toFrequency();
    }
    /**
     * Convert the input time into ticks
     * @example
     * const gain = new Tone.Gain();
     * console.log(gain.toTicks("4n"));
     */
    toTicks(time) {
      return new TransportTimeClass(this.context, time).toTicks();
    }
    //-------------------------------------
    // 	GET/SET
    //-------------------------------------
    /**
     * Get a subset of the properties which are in the partial props
     */
    _getPartialProperties(props) {
      const options = this.get();
      Object.keys(options).forEach((name) => {
        if (isUndef(props[name])) {
          delete options[name];
        }
      });
      return options;
    }
    /**
     * Get the object's attributes.
     * @example
     * const osc = new Tone.Oscillator();
     * console.log(osc.get());
     */
    get() {
      const defaults = getDefaultsFromInstance(this);
      Object.keys(defaults).forEach((attribute) => {
        if (Reflect.has(this, attribute)) {
          const member = this[attribute];
          if (isDefined(member) && isDefined(member.value) && isDefined(member.setValueAtTime)) {
            defaults[attribute] = member.value;
          } else if (member instanceof _ToneWithContext) {
            defaults[attribute] = member._getPartialProperties(defaults[attribute]);
          } else if (isArray(member) || isNumber(member) || isString(member) || isBoolean(member)) {
            defaults[attribute] = member;
          } else {
            delete defaults[attribute];
          }
        }
      });
      return defaults;
    }
    /**
     * Set multiple properties at once with an object.
     * @example
     * const filter = new Tone.Filter().toDestination();
     * // set values using an object
     * filter.set({
     * 	frequency: "C6",
     * 	type: "highpass"
     * });
     * const player = new Tone.Player("https://tonejs.github.io/audio/berklee/Analogsynth_octaves_highmid.mp3").connect(filter);
     * player.autostart = true;
     */
    set(props) {
      Object.keys(props).forEach((attribute) => {
        if (Reflect.has(this, attribute) && isDefined(this[attribute])) {
          if (this[attribute] && isDefined(this[attribute].value) && isDefined(this[attribute].setValueAtTime)) {
            if (this[attribute].value !== props[attribute]) {
              this[attribute].value = props[attribute];
            }
          } else if (this[attribute] instanceof _ToneWithContext) {
            this[attribute].set(props[attribute]);
          } else {
            this[attribute] = props[attribute];
          }
        }
      });
      return this;
    }
  };

  // node_modules/tone/build/esm/core/util/StateTimeline.js
  var StateTimeline = class extends Timeline {
    constructor(initial = "stopped") {
      super();
      this.name = "StateTimeline";
      this._initial = initial;
      this.setStateAtTime(this._initial, 0);
    }
    /**
     * Returns the scheduled state scheduled before or at
     * the given time.
     * @param  time  The time to query.
     * @return  The name of the state input in setStateAtTime.
     */
    getValueAtTime(time) {
      const event = this.get(time);
      if (event !== null) {
        return event.state;
      } else {
        return this._initial;
      }
    }
    /**
     * Add a state to the timeline.
     * @param  state The name of the state to set.
     * @param  time  The time to query.
     * @param options Any additional options that are needed in the timeline.
     */
    setStateAtTime(state2, time, options) {
      assertRange(time, 0);
      this.add(Object.assign({}, options, {
        state: state2,
        time
      }));
      return this;
    }
    /**
     * Return the event before the time with the given state
     * @param  state The state to look for
     * @param  time  When to check before
     * @return  The event with the given state before the time
     */
    getLastState(state2, time) {
      const index = this._search(time);
      for (let i = index; i >= 0; i--) {
        const event = this._timeline[i];
        if (event.state === state2) {
          return event;
        }
      }
    }
    /**
     * Return the event after the time with the given state
     * @param  state The state to look for
     * @param  time  When to check from
     * @return  The event with the given state after the time
     */
    getNextState(state2, time) {
      const index = this._search(time);
      if (index !== -1) {
        for (let i = index; i < this._timeline.length; i++) {
          const event = this._timeline[i];
          if (event.state === state2) {
            return event;
          }
        }
      }
    }
  };

  // node_modules/tone/build/esm/core/context/Param.js
  var Param = class _Param extends ToneWithContext {
    constructor() {
      const options = optionsFromArguments(_Param.getDefaults(), arguments, [
        "param",
        "units",
        "convert"
      ]);
      super(options);
      this.name = "Param";
      this.overridden = false;
      this._minOutput = 1e-7;
      assert(isDefined(options.param) && (isAudioParam(options.param) || options.param instanceof _Param), "param must be an AudioParam");
      while (!isAudioParam(options.param)) {
        options.param = options.param._param;
      }
      this._swappable = isDefined(options.swappable) ? options.swappable : false;
      if (this._swappable) {
        this.input = this.context.createGain();
        this._param = options.param;
        this.input.connect(this._param);
      } else {
        this._param = this.input = options.param;
      }
      this._events = new Timeline(1e3);
      this._initialValue = this._param.defaultValue;
      this.units = options.units;
      this.convert = options.convert;
      this._minValue = options.minValue;
      this._maxValue = options.maxValue;
      if (isDefined(options.value) && options.value !== this._toType(this._initialValue)) {
        this.setValueAtTime(options.value, 0);
      }
    }
    static getDefaults() {
      return Object.assign(ToneWithContext.getDefaults(), {
        convert: true,
        units: "number"
      });
    }
    get value() {
      const now = this.now();
      return this.getValueAtTime(now);
    }
    set value(value) {
      this.cancelScheduledValues(this.now());
      this.setValueAtTime(value, this.now());
    }
    get minValue() {
      if (isDefined(this._minValue)) {
        return this._minValue;
      } else if (this.units === "time" || this.units === "frequency" || this.units === "normalRange" || this.units === "positive" || this.units === "transportTime" || this.units === "ticks" || this.units === "bpm" || this.units === "hertz" || this.units === "samples") {
        return 0;
      } else if (this.units === "audioRange") {
        return -1;
      } else if (this.units === "decibels") {
        return -Infinity;
      } else {
        return this._param.minValue;
      }
    }
    get maxValue() {
      if (isDefined(this._maxValue)) {
        return this._maxValue;
      } else if (this.units === "normalRange" || this.units === "audioRange") {
        return 1;
      } else {
        return this._param.maxValue;
      }
    }
    /**
     * Type guard based on the unit name
     */
    _is(arg, type) {
      return this.units === type;
    }
    /**
     * Make sure the value is always in the defined range
     */
    _assertRange(value) {
      if (isDefined(this.maxValue) && isDefined(this.minValue)) {
        assertRange(value, this._fromType(this.minValue), this._fromType(this.maxValue));
      }
      return value;
    }
    /**
     * Convert the given value from the type specified by Param.units
     * into the destination value (such as Gain or Frequency).
     */
    _fromType(val) {
      if (this.convert && !this.overridden) {
        if (this._is(val, "time")) {
          return this.toSeconds(val);
        } else if (this._is(val, "decibels")) {
          return dbToGain(val);
        } else if (this._is(val, "frequency")) {
          return this.toFrequency(val);
        } else {
          return val;
        }
      } else if (this.overridden) {
        return 0;
      } else {
        return val;
      }
    }
    /**
     * Convert the parameters value into the units specified by Param.units.
     */
    _toType(val) {
      if (this.convert && this.units === "decibels") {
        return gainToDb(val);
      } else {
        return val;
      }
    }
    //-------------------------------------
    // ABSTRACT PARAM INTERFACE
    // all docs are generated from ParamInterface.ts
    //-------------------------------------
    setValueAtTime(value, time) {
      const computedTime = this.toSeconds(time);
      const numericValue = this._fromType(value);
      assert(isFinite(numericValue) && isFinite(computedTime), `Invalid argument(s) to setValueAtTime: ${JSON.stringify(value)}, ${JSON.stringify(time)}`);
      this._assertRange(numericValue);
      this.log(this.units, "setValueAtTime", value, computedTime);
      this._events.add({
        time: computedTime,
        type: "setValueAtTime",
        value: numericValue
      });
      this._param.setValueAtTime(numericValue, computedTime);
      return this;
    }
    getValueAtTime(time) {
      const computedTime = Math.max(this.toSeconds(time), 0);
      const after = this._events.getAfter(computedTime);
      const before = this._events.get(computedTime);
      let value = this._initialValue;
      if (before === null) {
        value = this._initialValue;
      } else if (before.type === "setTargetAtTime" && (after === null || after.type === "setValueAtTime")) {
        const previous = this._events.getBefore(before.time);
        let previousVal;
        if (previous === null) {
          previousVal = this._initialValue;
        } else {
          previousVal = previous.value;
        }
        if (before.type === "setTargetAtTime") {
          value = this._exponentialApproach(before.time, previousVal, before.value, before.constant, computedTime);
        }
      } else if (after === null) {
        value = before.value;
      } else if (after.type === "linearRampToValueAtTime" || after.type === "exponentialRampToValueAtTime") {
        let beforeValue = before.value;
        if (before.type === "setTargetAtTime") {
          const previous = this._events.getBefore(before.time);
          if (previous === null) {
            beforeValue = this._initialValue;
          } else {
            beforeValue = previous.value;
          }
        }
        if (after.type === "linearRampToValueAtTime") {
          value = this._linearInterpolate(before.time, beforeValue, after.time, after.value, computedTime);
        } else {
          value = this._exponentialInterpolate(before.time, beforeValue, after.time, after.value, computedTime);
        }
      } else {
        value = before.value;
      }
      return this._toType(value);
    }
    setRampPoint(time) {
      time = this.toSeconds(time);
      let currentVal = this.getValueAtTime(time);
      this.cancelAndHoldAtTime(time);
      if (this._fromType(currentVal) === 0) {
        currentVal = this._toType(this._minOutput);
      }
      this.setValueAtTime(currentVal, time);
      return this;
    }
    linearRampToValueAtTime(value, endTime) {
      const numericValue = this._fromType(value);
      const computedTime = this.toSeconds(endTime);
      assert(isFinite(numericValue) && isFinite(computedTime), `Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(value)}, ${JSON.stringify(endTime)}`);
      this._assertRange(numericValue);
      this._events.add({
        time: computedTime,
        type: "linearRampToValueAtTime",
        value: numericValue
      });
      this.log(this.units, "linearRampToValueAtTime", value, computedTime);
      this._param.linearRampToValueAtTime(numericValue, computedTime);
      return this;
    }
    exponentialRampToValueAtTime(value, endTime) {
      let numericValue = this._fromType(value);
      numericValue = EQ(numericValue, 0) ? this._minOutput : numericValue;
      this._assertRange(numericValue);
      const computedTime = this.toSeconds(endTime);
      assert(isFinite(numericValue) && isFinite(computedTime), `Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(value)}, ${JSON.stringify(endTime)}`);
      this._events.add({
        time: computedTime,
        type: "exponentialRampToValueAtTime",
        value: numericValue
      });
      this.log(this.units, "exponentialRampToValueAtTime", value, computedTime);
      this._param.exponentialRampToValueAtTime(numericValue, computedTime);
      return this;
    }
    exponentialRampTo(value, rampTime, startTime) {
      startTime = this.toSeconds(startTime);
      this.setRampPoint(startTime);
      this.exponentialRampToValueAtTime(value, startTime + this.toSeconds(rampTime));
      return this;
    }
    linearRampTo(value, rampTime, startTime) {
      startTime = this.toSeconds(startTime);
      this.setRampPoint(startTime);
      this.linearRampToValueAtTime(value, startTime + this.toSeconds(rampTime));
      return this;
    }
    targetRampTo(value, rampTime, startTime) {
      startTime = this.toSeconds(startTime);
      this.setRampPoint(startTime);
      this.exponentialApproachValueAtTime(value, startTime, rampTime);
      return this;
    }
    exponentialApproachValueAtTime(value, time, rampTime) {
      time = this.toSeconds(time);
      rampTime = this.toSeconds(rampTime);
      const timeConstant = Math.log(rampTime + 1) / Math.log(200);
      this.setTargetAtTime(value, time, timeConstant);
      this.cancelAndHoldAtTime(time + rampTime * 0.9);
      this.linearRampToValueAtTime(value, time + rampTime);
      return this;
    }
    setTargetAtTime(value, startTime, timeConstant) {
      const numericValue = this._fromType(value);
      assert(isFinite(timeConstant) && timeConstant > 0, "timeConstant must be a number greater than 0");
      const computedTime = this.toSeconds(startTime);
      this._assertRange(numericValue);
      assert(isFinite(numericValue) && isFinite(computedTime), `Invalid argument(s) to setTargetAtTime: ${JSON.stringify(value)}, ${JSON.stringify(startTime)}`);
      this._events.add({
        constant: timeConstant,
        time: computedTime,
        type: "setTargetAtTime",
        value: numericValue
      });
      this.log(this.units, "setTargetAtTime", value, computedTime, timeConstant);
      this._param.setTargetAtTime(numericValue, computedTime, timeConstant);
      return this;
    }
    setValueCurveAtTime(values, startTime, duration, scaling = 1) {
      duration = this.toSeconds(duration);
      startTime = this.toSeconds(startTime);
      const startingValue = this._fromType(values[0]) * scaling;
      this.setValueAtTime(this._toType(startingValue), startTime);
      const segTime = duration / (values.length - 1);
      for (let i = 1; i < values.length; i++) {
        const numericValue = this._fromType(values[i]) * scaling;
        this.linearRampToValueAtTime(this._toType(numericValue), startTime + i * segTime);
      }
      return this;
    }
    cancelScheduledValues(time) {
      const computedTime = this.toSeconds(time);
      assert(isFinite(computedTime), `Invalid argument to cancelScheduledValues: ${JSON.stringify(time)}`);
      this._events.cancel(computedTime);
      this._param.cancelScheduledValues(computedTime);
      this.log(this.units, "cancelScheduledValues", computedTime);
      return this;
    }
    cancelAndHoldAtTime(time) {
      const computedTime = this.toSeconds(time);
      const valueAtTime = this._fromType(this.getValueAtTime(computedTime));
      assert(isFinite(computedTime), `Invalid argument to cancelAndHoldAtTime: ${JSON.stringify(time)}`);
      this.log(this.units, "cancelAndHoldAtTime", computedTime, "value=" + valueAtTime);
      const before = this._events.get(computedTime);
      const after = this._events.getAfter(computedTime);
      if (before && EQ(before.time, computedTime)) {
        if (after) {
          this._param.cancelScheduledValues(after.time);
          this._events.cancel(after.time);
        } else {
          this._param.cancelAndHoldAtTime(computedTime);
          this._events.cancel(computedTime + this.sampleTime);
        }
      } else if (after) {
        this._param.cancelScheduledValues(after.time);
        this._events.cancel(after.time);
        if (after.type === "linearRampToValueAtTime") {
          this.linearRampToValueAtTime(this._toType(valueAtTime), computedTime);
        } else if (after.type === "exponentialRampToValueAtTime") {
          this.exponentialRampToValueAtTime(this._toType(valueAtTime), computedTime);
        }
      }
      this._events.add({
        time: computedTime,
        type: "setValueAtTime",
        value: valueAtTime
      });
      this._param.setValueAtTime(valueAtTime, computedTime);
      return this;
    }
    rampTo(value, rampTime = 0.1, startTime) {
      if (this.units === "frequency" || this.units === "bpm" || this.units === "decibels") {
        this.exponentialRampTo(value, rampTime, startTime);
      } else {
        this.linearRampTo(value, rampTime, startTime);
      }
      return this;
    }
    /**
     * Apply all of the previously scheduled events to the passed in Param or AudioParam.
     * The applied values will start at the context's current time and schedule
     * all of the events which are scheduled on this Param onto the passed in param.
     */
    apply(param) {
      const now = this.context.currentTime;
      param.setValueAtTime(this.getValueAtTime(now), now);
      const previousEvent = this._events.get(now);
      if (previousEvent && previousEvent.type === "setTargetAtTime") {
        const nextEvent = this._events.getAfter(previousEvent.time);
        const endTime = nextEvent ? nextEvent.time : now + 2;
        const subdivisions = (endTime - now) / 10;
        for (let i = now; i < endTime; i += subdivisions) {
          param.linearRampToValueAtTime(this.getValueAtTime(i), i);
        }
      }
      this._events.forEachAfter(this.context.currentTime, (event) => {
        if (event.type === "cancelScheduledValues") {
          param.cancelScheduledValues(event.time);
        } else if (event.type === "setTargetAtTime") {
          param.setTargetAtTime(event.value, event.time, event.constant);
        } else {
          param[event.type](event.value, event.time);
        }
      });
      return this;
    }
    /**
     * Replace the Param's internal AudioParam. Will apply scheduled curves
     * onto the parameter and replace the connections.
     */
    setParam(param) {
      assert(this._swappable, "The Param must be assigned as 'swappable' in the constructor");
      const input = this.input;
      input.disconnect(this._param);
      this.apply(param);
      this._param = param;
      input.connect(this._param);
      return this;
    }
    dispose() {
      super.dispose();
      this._events.dispose();
      return this;
    }
    get defaultValue() {
      return this._toType(this._param.defaultValue);
    }
    //-------------------------------------
    // 	AUTOMATION CURVE CALCULATIONS
    // 	MIT License, copyright (c) 2014 Jordan Santell
    //-------------------------------------
    // Calculates the the value along the curve produced by setTargetAtTime
    _exponentialApproach(t0, v0, v1, timeConstant, t) {
      return v1 + (v0 - v1) * Math.exp(-(t - t0) / timeConstant);
    }
    // Calculates the the value along the curve produced by linearRampToValueAtTime
    _linearInterpolate(t0, v0, t1, v1, t) {
      return v0 + (v1 - v0) * ((t - t0) / (t1 - t0));
    }
    // Calculates the the value along the curve produced by exponentialRampToValueAtTime
    _exponentialInterpolate(t0, v0, t1, v1, t) {
      return v0 * Math.pow(v1 / v0, (t - t0) / (t1 - t0));
    }
  };

  // node_modules/tone/build/esm/core/context/ToneAudioNode.js
  var ToneAudioNode = class _ToneAudioNode extends ToneWithContext {
    constructor() {
      super(...arguments);
      this._internalChannels = [];
    }
    /**
     * The number of inputs feeding into the AudioNode.
     * For source nodes, this will be 0.
     * @example
     * const node = new Tone.Gain();
     * console.log(node.numberOfInputs);
     */
    get numberOfInputs() {
      if (isDefined(this.input)) {
        if (isAudioParam(this.input) || this.input instanceof Param) {
          return 1;
        } else {
          return this.input.numberOfInputs;
        }
      } else {
        return 0;
      }
    }
    /**
     * The number of outputs of the AudioNode.
     * @example
     * const node = new Tone.Gain();
     * console.log(node.numberOfOutputs);
     */
    get numberOfOutputs() {
      if (isDefined(this.output)) {
        return this.output.numberOfOutputs;
      } else {
        return 0;
      }
    }
    //-------------------------------------
    // AUDIO PROPERTIES
    //-------------------------------------
    /**
     * Used to decide which nodes to get/set properties on
     */
    _isAudioNode(node) {
      return isDefined(node) && (node instanceof _ToneAudioNode || isAudioNode2(node));
    }
    /**
     * Get all of the audio nodes (either internal or input/output) which together
     * make up how the class node responds to channel input/output
     */
    _getInternalNodes() {
      const nodeList = this._internalChannels.slice(0);
      if (this._isAudioNode(this.input)) {
        nodeList.push(this.input);
      }
      if (this._isAudioNode(this.output)) {
        if (this.input !== this.output) {
          nodeList.push(this.output);
        }
      }
      return nodeList;
    }
    /**
     * Set the audio options for this node such as channelInterpretation
     * channelCount, etc.
     * @param options
     */
    _setChannelProperties(options) {
      const nodeList = this._getInternalNodes();
      nodeList.forEach((node) => {
        node.channelCount = options.channelCount;
        node.channelCountMode = options.channelCountMode;
        node.channelInterpretation = options.channelInterpretation;
      });
    }
    /**
     * Get the current audio options for this node such as channelInterpretation
     * channelCount, etc.
     */
    _getChannelProperties() {
      const nodeList = this._getInternalNodes();
      assert(nodeList.length > 0, "ToneAudioNode does not have any internal nodes");
      const node = nodeList[0];
      return {
        channelCount: node.channelCount,
        channelCountMode: node.channelCountMode,
        channelInterpretation: node.channelInterpretation
      };
    }
    /**
     * channelCount is the number of channels used when up-mixing and down-mixing
     * connections to any inputs to the node. The default value is 2 except for
     * specific nodes where its value is specially determined.
     */
    get channelCount() {
      return this._getChannelProperties().channelCount;
    }
    set channelCount(channelCount) {
      const props = this._getChannelProperties();
      this._setChannelProperties(Object.assign(props, { channelCount }));
    }
    /**
     * channelCountMode determines how channels will be counted when up-mixing and
     * down-mixing connections to any inputs to the node.
     * The default value is "max". This attribute has no effect for nodes with no inputs.
     * * "max" - computedNumberOfChannels is the maximum of the number of channels of all connections to an input. In this mode channelCount is ignored.
     * * "clamped-max" - computedNumberOfChannels is determined as for "max" and then clamped to a maximum value of the given channelCount.
     * * "explicit" - computedNumberOfChannels is the exact value as specified by the channelCount.
     */
    get channelCountMode() {
      return this._getChannelProperties().channelCountMode;
    }
    set channelCountMode(channelCountMode) {
      const props = this._getChannelProperties();
      this._setChannelProperties(Object.assign(props, { channelCountMode }));
    }
    /**
     * channelInterpretation determines how individual channels will be treated
     * when up-mixing and down-mixing connections to any inputs to the node.
     * The default value is "speakers".
     */
    get channelInterpretation() {
      return this._getChannelProperties().channelInterpretation;
    }
    set channelInterpretation(channelInterpretation) {
      const props = this._getChannelProperties();
      this._setChannelProperties(Object.assign(props, { channelInterpretation }));
    }
    //-------------------------------------
    // CONNECTIONS
    //-------------------------------------
    /**
     * connect the output of a ToneAudioNode to an AudioParam, AudioNode, or ToneAudioNode
     * @param destination The output to connect to
     * @param outputNum The output to connect from
     * @param inputNum The input to connect to
     */
    connect(destination, outputNum = 0, inputNum = 0) {
      connect(this, destination, outputNum, inputNum);
      return this;
    }
    /**
     * Connect the output to the context's destination node.
     * @example
     * const osc = new Tone.Oscillator("C2").start();
     * osc.toDestination();
     */
    toDestination() {
      this.connect(this.context.destination);
      return this;
    }
    /**
     * Connect the output to the context's destination node.
     * @see {@link toDestination}
     * @deprecated
     */
    toMaster() {
      warn("toMaster() has been renamed toDestination()");
      return this.toDestination();
    }
    /**
     * disconnect the output
     */
    disconnect(destination, outputNum = 0, inputNum = 0) {
      disconnect(this, destination, outputNum, inputNum);
      return this;
    }
    /**
     * Connect the output of this node to the rest of the nodes in series.
     * @example
     * const player = new Tone.Player("https://tonejs.github.io/audio/drum-samples/handdrum-loop.mp3");
     * player.autostart = true;
     * const filter = new Tone.AutoFilter(4).start();
     * const distortion = new Tone.Distortion(0.5);
     * // connect the player to the filter, distortion and then to the master output
     * player.chain(filter, distortion, Tone.Destination);
     */
    chain(...nodes) {
      connectSeries(this, ...nodes);
      return this;
    }
    /**
     * connect the output of this node to the rest of the nodes in parallel.
     * @example
     * const player = new Tone.Player("https://tonejs.github.io/audio/drum-samples/conga-rhythm.mp3");
     * player.autostart = true;
     * const pitchShift = new Tone.PitchShift(4).toDestination();
     * const filter = new Tone.Filter("G5").toDestination();
     * // connect a node to the pitch shift and filter in parallel
     * player.fan(pitchShift, filter);
     */
    fan(...nodes) {
      nodes.forEach((node) => this.connect(node));
      return this;
    }
    /**
     * Dispose and disconnect
     */
    dispose() {
      super.dispose();
      if (isDefined(this.input)) {
        if (this.input instanceof _ToneAudioNode) {
          this.input.dispose();
        } else if (isAudioNode2(this.input)) {
          this.input.disconnect();
        }
      }
      if (isDefined(this.output)) {
        if (this.output instanceof _ToneAudioNode) {
          this.output.dispose();
        } else if (isAudioNode2(this.output)) {
          this.output.disconnect();
        }
      }
      this._internalChannels = [];
      return this;
    }
  };
  function connectSeries(...nodes) {
    const first = nodes.shift();
    nodes.reduce((prev, current) => {
      if (prev instanceof ToneAudioNode) {
        prev.connect(current);
      } else if (isAudioNode2(prev)) {
        connect(prev, current);
      }
      return current;
    }, first);
  }
  function connect(srcNode, dstNode, outputNumber = 0, inputNumber = 0) {
    assert(isDefined(srcNode), "Cannot connect from undefined node");
    assert(isDefined(dstNode), "Cannot connect to undefined node");
    if (dstNode instanceof ToneAudioNode || isAudioNode2(dstNode)) {
      assert(dstNode.numberOfInputs > 0, "Cannot connect to node with no inputs");
    }
    assert(srcNode.numberOfOutputs > 0, "Cannot connect from node with no outputs");
    while (dstNode instanceof ToneAudioNode || dstNode instanceof Param) {
      if (isDefined(dstNode.input)) {
        dstNode = dstNode.input;
      }
    }
    while (srcNode instanceof ToneAudioNode) {
      if (isDefined(srcNode.output)) {
        srcNode = srcNode.output;
      }
    }
    if (isAudioParam(dstNode)) {
      srcNode.connect(dstNode, outputNumber);
    } else {
      srcNode.connect(dstNode, outputNumber, inputNumber);
    }
  }
  function disconnect(srcNode, dstNode, outputNumber = 0, inputNumber = 0) {
    if (isDefined(dstNode)) {
      while (dstNode instanceof ToneAudioNode) {
        dstNode = dstNode.input;
      }
    }
    while (!isAudioNode2(srcNode)) {
      if (isDefined(srcNode.output)) {
        srcNode = srcNode.output;
      }
    }
    if (isAudioParam(dstNode)) {
      srcNode.disconnect(dstNode, outputNumber);
    } else if (isAudioNode2(dstNode)) {
      srcNode.disconnect(dstNode, outputNumber, inputNumber);
    } else {
      srcNode.disconnect();
    }
  }

  // node_modules/tone/build/esm/core/context/Gain.js
  var Gain = class _Gain extends ToneAudioNode {
    constructor() {
      const options = optionsFromArguments(_Gain.getDefaults(), arguments, [
        "gain",
        "units"
      ]);
      super(options);
      this.name = "Gain";
      this._gainNode = this.context.createGain();
      this.input = this._gainNode;
      this.output = this._gainNode;
      this.gain = new Param({
        context: this.context,
        convert: options.convert,
        param: this._gainNode.gain,
        units: options.units,
        value: options.gain,
        minValue: options.minValue,
        maxValue: options.maxValue
      });
      readOnly(this, "gain");
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        convert: true,
        gain: 1,
        units: "gain"
      });
    }
    /**
     * Clean up.
     */
    dispose() {
      super.dispose();
      this._gainNode.disconnect();
      this.gain.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/source/OneShotSource.js
  var OneShotSource = class extends ToneAudioNode {
    constructor(options) {
      super(options);
      this.onended = noOp;
      this._startTime = -1;
      this._stopTime = -1;
      this._timeout = -1;
      this.output = new Gain({
        context: this.context,
        gain: 0
      });
      this._gainNode = this.output;
      this.getStateAtTime = function(time) {
        const computedTime = this.toSeconds(time);
        if (this._startTime !== -1 && computedTime >= this._startTime && (this._stopTime === -1 || computedTime <= this._stopTime)) {
          return "started";
        } else {
          return "stopped";
        }
      };
      this._fadeIn = options.fadeIn;
      this._fadeOut = options.fadeOut;
      this._curve = options.curve;
      this.onended = options.onended;
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        curve: "linear",
        fadeIn: 0,
        fadeOut: 0,
        onended: noOp
      });
    }
    /**
     * Start the source at the given time
     * @param  time When to start the source
     */
    _startGain(time, gain = 1) {
      assert(this._startTime === -1, "Source cannot be started more than once");
      const fadeInTime = this.toSeconds(this._fadeIn);
      this._startTime = time + fadeInTime;
      this._startTime = Math.max(this._startTime, this.context.currentTime);
      if (fadeInTime > 0) {
        this._gainNode.gain.setValueAtTime(0, time);
        if (this._curve === "linear") {
          this._gainNode.gain.linearRampToValueAtTime(gain, time + fadeInTime);
        } else {
          this._gainNode.gain.exponentialApproachValueAtTime(gain, time, fadeInTime);
        }
      } else {
        this._gainNode.gain.setValueAtTime(gain, time);
      }
      return this;
    }
    /**
     * Stop the source node at the given time.
     * @param time When to stop the source
     */
    stop(time) {
      this.log("stop", time);
      this._stopGain(this.toSeconds(time));
      return this;
    }
    /**
     * Stop the source at the given time
     * @param  time When to stop the source
     */
    _stopGain(time) {
      assert(this._startTime !== -1, "'start' must be called before 'stop'");
      this.cancelStop();
      const fadeOutTime = this.toSeconds(this._fadeOut);
      this._stopTime = this.toSeconds(time) + fadeOutTime;
      this._stopTime = Math.max(this._stopTime, this.now());
      if (fadeOutTime > 0) {
        if (this._curve === "linear") {
          this._gainNode.gain.linearRampTo(0, fadeOutTime, time);
        } else {
          this._gainNode.gain.targetRampTo(0, fadeOutTime, time);
        }
      } else {
        this._gainNode.gain.cancelAndHoldAtTime(time);
        this._gainNode.gain.setValueAtTime(0, time);
      }
      this.context.clearTimeout(this._timeout);
      this._timeout = this.context.setTimeout(() => {
        const additionalTail = this._curve === "exponential" ? fadeOutTime * 2 : 0;
        this._stopSource(this.now() + additionalTail);
        this._onended();
      }, this._stopTime - this.context.currentTime);
      return this;
    }
    /**
     * Invoke the onended callback
     */
    _onended() {
      if (this.onended !== noOp) {
        this.onended(this);
        this.onended = noOp;
        if (!this.context.isOffline) {
          const disposeCallback = () => this.dispose();
          if (typeof window.requestIdleCallback !== "undefined") {
            window.requestIdleCallback(disposeCallback);
          } else {
            setTimeout(disposeCallback, 1e3);
          }
        }
      }
    }
    /**
     * Get the playback state at the current time
     */
    get state() {
      return this.getStateAtTime(this.now());
    }
    /**
     * Cancel a scheduled stop event
     */
    cancelStop() {
      this.log("cancelStop");
      assert(this._startTime !== -1, "Source is not started");
      this._gainNode.gain.cancelScheduledValues(this._startTime + this.sampleTime);
      this.context.clearTimeout(this._timeout);
      this._stopTime = -1;
      return this;
    }
    dispose() {
      super.dispose();
      this._gainNode.dispose();
      this.onended = noOp;
      return this;
    }
  };

  // node_modules/tone/build/esm/signal/ToneConstantSource.js
  var ToneConstantSource = class _ToneConstantSource extends OneShotSource {
    constructor() {
      const options = optionsFromArguments(_ToneConstantSource.getDefaults(), arguments, ["offset"]);
      super(options);
      this.name = "ToneConstantSource";
      this._source = this.context.createConstantSource();
      connect(this._source, this._gainNode);
      this.offset = new Param({
        context: this.context,
        convert: options.convert,
        param: this._source.offset,
        units: options.units,
        value: options.offset,
        minValue: options.minValue,
        maxValue: options.maxValue
      });
    }
    static getDefaults() {
      return Object.assign(OneShotSource.getDefaults(), {
        convert: true,
        offset: 1,
        units: "number"
      });
    }
    /**
     * Start the source node at the given time
     * @param  time When to start the source
     */
    start(time) {
      const computedTime = this.toSeconds(time);
      this.log("start", computedTime);
      this._startGain(computedTime);
      this._source.start(computedTime);
      return this;
    }
    _stopSource(time) {
      this._source.stop(time);
    }
    dispose() {
      super.dispose();
      if (this.state === "started") {
        this.stop();
      }
      this._source.disconnect();
      this.offset.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/signal/Signal.js
  var Signal = class _Signal extends ToneAudioNode {
    constructor() {
      const options = optionsFromArguments(_Signal.getDefaults(), arguments, [
        "value",
        "units"
      ]);
      super(options);
      this.name = "Signal";
      this.override = true;
      this.output = this._constantSource = new ToneConstantSource({
        context: this.context,
        convert: options.convert,
        offset: options.value,
        units: options.units,
        minValue: options.minValue,
        maxValue: options.maxValue
      });
      this._constantSource.start(0);
      this.input = this._param = this._constantSource.offset;
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        convert: true,
        units: "number",
        value: 0
      });
    }
    connect(destination, outputNum = 0, inputNum = 0) {
      connectSignal(this, destination, outputNum, inputNum);
      return this;
    }
    dispose() {
      super.dispose();
      this._param.dispose();
      this._constantSource.dispose();
      return this;
    }
    //-------------------------------------
    // ABSTRACT PARAM INTERFACE
    // just a proxy for the ConstantSourceNode's offset AudioParam
    // all docs are generated from AbstractParam.ts
    //-------------------------------------
    setValueAtTime(value, time) {
      this._param.setValueAtTime(value, time);
      return this;
    }
    getValueAtTime(time) {
      return this._param.getValueAtTime(time);
    }
    setRampPoint(time) {
      this._param.setRampPoint(time);
      return this;
    }
    linearRampToValueAtTime(value, time) {
      this._param.linearRampToValueAtTime(value, time);
      return this;
    }
    exponentialRampToValueAtTime(value, time) {
      this._param.exponentialRampToValueAtTime(value, time);
      return this;
    }
    exponentialRampTo(value, rampTime, startTime) {
      this._param.exponentialRampTo(value, rampTime, startTime);
      return this;
    }
    linearRampTo(value, rampTime, startTime) {
      this._param.linearRampTo(value, rampTime, startTime);
      return this;
    }
    targetRampTo(value, rampTime, startTime) {
      this._param.targetRampTo(value, rampTime, startTime);
      return this;
    }
    exponentialApproachValueAtTime(value, time, rampTime) {
      this._param.exponentialApproachValueAtTime(value, time, rampTime);
      return this;
    }
    setTargetAtTime(value, startTime, timeConstant) {
      this._param.setTargetAtTime(value, startTime, timeConstant);
      return this;
    }
    setValueCurveAtTime(values, startTime, duration, scaling) {
      this._param.setValueCurveAtTime(values, startTime, duration, scaling);
      return this;
    }
    cancelScheduledValues(time) {
      this._param.cancelScheduledValues(time);
      return this;
    }
    cancelAndHoldAtTime(time) {
      this._param.cancelAndHoldAtTime(time);
      return this;
    }
    rampTo(value, rampTime, startTime) {
      this._param.rampTo(value, rampTime, startTime);
      return this;
    }
    get value() {
      return this._param.value;
    }
    set value(value) {
      this._param.value = value;
    }
    get convert() {
      return this._param.convert;
    }
    set convert(convert) {
      this._param.convert = convert;
    }
    get units() {
      return this._param.units;
    }
    get overridden() {
      return this._param.overridden;
    }
    set overridden(overridden) {
      this._param.overridden = overridden;
    }
    get maxValue() {
      return this._param.maxValue;
    }
    get minValue() {
      return this._param.minValue;
    }
    /**
     * @see {@link Param.apply}.
     */
    apply(param) {
      this._param.apply(param);
      return this;
    }
  };
  function connectSignal(signal, destination, outputNum, inputNum) {
    if (destination instanceof Param || isAudioParam(destination) || destination instanceof Signal && destination.override) {
      destination.cancelScheduledValues(0);
      destination.setValueAtTime(0, 0);
      if (destination instanceof Signal) {
        destination.overridden = true;
      }
    }
    connect(signal, destination, outputNum, inputNum);
  }

  // node_modules/tone/build/esm/core/clock/TickParam.js
  var TickParam = class _TickParam extends Param {
    constructor() {
      const options = optionsFromArguments(_TickParam.getDefaults(), arguments, ["value"]);
      super(options);
      this.name = "TickParam";
      this._events = new Timeline(Infinity);
      this._multiplier = 1;
      this._multiplier = options.multiplier;
      this._events.cancel(0);
      this._events.add({
        ticks: 0,
        time: 0,
        type: "setValueAtTime",
        value: this._fromType(options.value)
      });
      this.setValueAtTime(options.value, 0);
    }
    static getDefaults() {
      return Object.assign(Param.getDefaults(), {
        multiplier: 1,
        units: "hertz",
        value: 1
      });
    }
    setTargetAtTime(value, time, constant) {
      time = this.toSeconds(time);
      this.setRampPoint(time);
      const computedValue = this._fromType(value);
      const prevEvent = this._events.get(time);
      const segments = Math.round(Math.max(1 / constant, 1));
      for (let i = 0; i <= segments; i++) {
        const segTime = constant * i + time;
        const rampVal = this._exponentialApproach(prevEvent.time, prevEvent.value, computedValue, constant, segTime);
        this.linearRampToValueAtTime(this._toType(rampVal), segTime);
      }
      return this;
    }
    setValueAtTime(value, time) {
      const computedTime = this.toSeconds(time);
      super.setValueAtTime(value, time);
      const event = this._events.get(computedTime);
      const previousEvent = this._events.previousEvent(event);
      const ticksUntilTime = this._getTicksUntilEvent(previousEvent, computedTime);
      event.ticks = Math.max(ticksUntilTime, 0);
      return this;
    }
    linearRampToValueAtTime(value, time) {
      const computedTime = this.toSeconds(time);
      super.linearRampToValueAtTime(value, time);
      const event = this._events.get(computedTime);
      const previousEvent = this._events.previousEvent(event);
      const ticksUntilTime = this._getTicksUntilEvent(previousEvent, computedTime);
      event.ticks = Math.max(ticksUntilTime, 0);
      return this;
    }
    exponentialRampToValueAtTime(value, time) {
      time = this.toSeconds(time);
      const computedVal = this._fromType(value);
      const prevEvent = this._events.get(time);
      const segments = Math.round(Math.max((time - prevEvent.time) * 10, 1));
      const segmentDur = (time - prevEvent.time) / segments;
      for (let i = 0; i <= segments; i++) {
        const segTime = segmentDur * i + prevEvent.time;
        const rampVal = this._exponentialInterpolate(prevEvent.time, prevEvent.value, time, computedVal, segTime);
        this.linearRampToValueAtTime(this._toType(rampVal), segTime);
      }
      return this;
    }
    /**
     * Returns the tick value at the time. Takes into account
     * any automation curves scheduled on the signal.
     * @param  event The time to get the tick count at
     * @return The number of ticks which have elapsed at the time given any automations.
     */
    _getTicksUntilEvent(event, time) {
      if (event === null) {
        event = {
          ticks: 0,
          time: 0,
          type: "setValueAtTime",
          value: 0
        };
      } else if (isUndef(event.ticks)) {
        const previousEvent = this._events.previousEvent(event);
        event.ticks = this._getTicksUntilEvent(previousEvent, event.time);
      }
      const val0 = this._fromType(this.getValueAtTime(event.time));
      let val1 = this._fromType(this.getValueAtTime(time));
      const onTheLineEvent = this._events.get(time);
      if (onTheLineEvent && onTheLineEvent.time === time && onTheLineEvent.type === "setValueAtTime") {
        val1 = this._fromType(this.getValueAtTime(time - this.sampleTime));
      }
      return 0.5 * (time - event.time) * (val0 + val1) + event.ticks;
    }
    /**
     * Returns the tick value at the time. Takes into account
     * any automation curves scheduled on the signal.
     * @param  time The time to get the tick count at
     * @return The number of ticks which have elapsed at the time given any automations.
     */
    getTicksAtTime(time) {
      const computedTime = this.toSeconds(time);
      const event = this._events.get(computedTime);
      return Math.max(this._getTicksUntilEvent(event, computedTime), 0);
    }
    /**
     * Return the elapsed time of the number of ticks from the given time
     * @param ticks The number of ticks to calculate
     * @param  time The time to get the next tick from
     * @return The duration of the number of ticks from the given time in seconds
     */
    getDurationOfTicks(ticks, time) {
      const computedTime = this.toSeconds(time);
      const currentTick = this.getTicksAtTime(time);
      return this.getTimeOfTick(currentTick + ticks) - computedTime;
    }
    /**
     * Given a tick, returns the time that tick occurs at.
     * @return The time that the tick occurs.
     */
    getTimeOfTick(tick) {
      const before = this._events.get(tick, "ticks");
      const after = this._events.getAfter(tick, "ticks");
      if (before && before.ticks === tick) {
        return before.time;
      } else if (before && after && after.type === "linearRampToValueAtTime" && before.value !== after.value) {
        const val0 = this._fromType(this.getValueAtTime(before.time));
        const val1 = this._fromType(this.getValueAtTime(after.time));
        const delta = (val1 - val0) / (after.time - before.time);
        const k = Math.sqrt(Math.pow(val0, 2) - 2 * delta * (before.ticks - tick));
        const sol1 = (-val0 + k) / delta;
        const sol2 = (-val0 - k) / delta;
        return (sol1 > 0 ? sol1 : sol2) + before.time;
      } else if (before) {
        if (before.value === 0) {
          return Infinity;
        } else {
          return before.time + (tick - before.ticks) / before.value;
        }
      } else {
        return tick / this._initialValue;
      }
    }
    /**
     * Convert some number of ticks their the duration in seconds accounting
     * for any automation curves starting at the given time.
     * @param  ticks The number of ticks to convert to seconds.
     * @param  when  When along the automation timeline to convert the ticks.
     * @return The duration in seconds of the ticks.
     */
    ticksToTime(ticks, when) {
      return this.getDurationOfTicks(ticks, when);
    }
    /**
     * The inverse of {@link ticksToTime}. Convert a duration in
     * seconds to the corresponding number of ticks accounting for any
     * automation curves starting at the given time.
     * @param  duration The time interval to convert to ticks.
     * @param  when When along the automation timeline to convert the ticks.
     * @return The duration in ticks.
     */
    timeToTicks(duration, when) {
      const computedTime = this.toSeconds(when);
      const computedDuration = this.toSeconds(duration);
      const startTicks = this.getTicksAtTime(computedTime);
      const endTicks = this.getTicksAtTime(computedTime + computedDuration);
      return endTicks - startTicks;
    }
    /**
     * Convert from the type when the unit value is BPM
     */
    _fromType(val) {
      if (this.units === "bpm" && this.multiplier) {
        return 1 / (60 / val / this.multiplier);
      } else {
        return super._fromType(val);
      }
    }
    /**
     * Special case of type conversion where the units === "bpm"
     */
    _toType(val) {
      if (this.units === "bpm" && this.multiplier) {
        return val / this.multiplier * 60;
      } else {
        return super._toType(val);
      }
    }
    /**
     * A multiplier on the bpm value. Useful for setting a PPQ relative to the base frequency value.
     */
    get multiplier() {
      return this._multiplier;
    }
    set multiplier(m) {
      const currentVal = this.value;
      this._multiplier = m;
      this.cancelScheduledValues(0);
      this.setValueAtTime(currentVal, 0);
    }
  };

  // node_modules/tone/build/esm/core/clock/TickSignal.js
  var TickSignal = class _TickSignal extends Signal {
    constructor() {
      const options = optionsFromArguments(_TickSignal.getDefaults(), arguments, ["value"]);
      super(options);
      this.name = "TickSignal";
      this.input = this._param = new TickParam({
        context: this.context,
        convert: options.convert,
        multiplier: options.multiplier,
        param: this._constantSource.offset,
        units: options.units,
        value: options.value
      });
    }
    static getDefaults() {
      return Object.assign(Signal.getDefaults(), {
        multiplier: 1,
        units: "hertz",
        value: 1
      });
    }
    ticksToTime(ticks, when) {
      return this._param.ticksToTime(ticks, when);
    }
    timeToTicks(duration, when) {
      return this._param.timeToTicks(duration, when);
    }
    getTimeOfTick(tick) {
      return this._param.getTimeOfTick(tick);
    }
    getDurationOfTicks(ticks, time) {
      return this._param.getDurationOfTicks(ticks, time);
    }
    getTicksAtTime(time) {
      return this._param.getTicksAtTime(time);
    }
    /**
     * A multiplier on the bpm value. Useful for setting a PPQ relative to the base frequency value.
     */
    get multiplier() {
      return this._param.multiplier;
    }
    set multiplier(m) {
      this._param.multiplier = m;
    }
    dispose() {
      super.dispose();
      this._param.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/core/clock/TickSource.js
  var TickSource = class _TickSource extends ToneWithContext {
    constructor() {
      const options = optionsFromArguments(_TickSource.getDefaults(), arguments, ["frequency"]);
      super(options);
      this.name = "TickSource";
      this._state = new StateTimeline();
      this._tickOffset = new Timeline();
      this._ticksAtTime = new Timeline();
      this._secondsAtTime = new Timeline();
      this.frequency = new TickSignal({
        context: this.context,
        units: options.units,
        value: options.frequency
      });
      readOnly(this, "frequency");
      this._state.setStateAtTime("stopped", 0);
      this.setTicksAtTime(0, 0);
    }
    static getDefaults() {
      return Object.assign({
        frequency: 1,
        units: "hertz"
      }, ToneWithContext.getDefaults());
    }
    /**
     * Returns the playback state of the source, either "started", "stopped" or "paused".
     */
    get state() {
      return this.getStateAtTime(this.now());
    }
    /**
     * Start the clock at the given time. Optionally pass in an offset
     * of where to start the tick counter from.
     * @param  time    The time the clock should start
     * @param offset The number of ticks to start the source at
     */
    start(time, offset) {
      const computedTime = this.toSeconds(time);
      if (this._state.getValueAtTime(computedTime) !== "started") {
        this._state.setStateAtTime("started", computedTime);
        if (isDefined(offset)) {
          this.setTicksAtTime(offset, computedTime);
        }
        this._ticksAtTime.cancel(computedTime);
        this._secondsAtTime.cancel(computedTime);
      }
      return this;
    }
    /**
     * Stop the clock. Stopping the clock resets the tick counter to 0.
     * @param time The time when the clock should stop.
     */
    stop(time) {
      const computedTime = this.toSeconds(time);
      if (this._state.getValueAtTime(computedTime) === "stopped") {
        const event = this._state.get(computedTime);
        if (event && event.time > 0) {
          this._tickOffset.cancel(event.time);
          this._state.cancel(event.time);
        }
      }
      this._state.cancel(computedTime);
      this._state.setStateAtTime("stopped", computedTime);
      this.setTicksAtTime(0, computedTime);
      this._ticksAtTime.cancel(computedTime);
      this._secondsAtTime.cancel(computedTime);
      return this;
    }
    /**
     * Pause the clock. Pausing does not reset the tick counter.
     * @param time The time when the clock should stop.
     */
    pause(time) {
      const computedTime = this.toSeconds(time);
      if (this._state.getValueAtTime(computedTime) === "started") {
        this._state.setStateAtTime("paused", computedTime);
        this._ticksAtTime.cancel(computedTime);
        this._secondsAtTime.cancel(computedTime);
      }
      return this;
    }
    /**
     * Cancel start/stop/pause and setTickAtTime events scheduled after the given time.
     * @param time When to clear the events after
     */
    cancel(time) {
      time = this.toSeconds(time);
      this._state.cancel(time);
      this._tickOffset.cancel(time);
      this._ticksAtTime.cancel(time);
      this._secondsAtTime.cancel(time);
      return this;
    }
    /**
     * Get the elapsed ticks at the given time
     * @param  time  When to get the tick value
     * @return The number of ticks
     */
    getTicksAtTime(time) {
      const computedTime = this.toSeconds(time);
      const stopEvent = this._state.getLastState("stopped", computedTime);
      const memoizedEvent = this._ticksAtTime.get(computedTime);
      const tmpEvent = {
        state: "paused",
        time: computedTime
      };
      this._state.add(tmpEvent);
      let lastState = memoizedEvent ? memoizedEvent : stopEvent;
      let elapsedTicks = memoizedEvent ? memoizedEvent.ticks : 0;
      let eventToMemoize = null;
      this._state.forEachBetween(lastState.time, computedTime + this.sampleTime, (e) => {
        let periodStartTime = lastState.time;
        const offsetEvent = this._tickOffset.get(e.time);
        if (offsetEvent && offsetEvent.time >= lastState.time) {
          elapsedTicks = offsetEvent.ticks;
          periodStartTime = offsetEvent.time;
        }
        if (lastState.state === "started" && e.state !== "started") {
          elapsedTicks += this.frequency.getTicksAtTime(e.time) - this.frequency.getTicksAtTime(periodStartTime);
          if (e.time !== tmpEvent.time) {
            eventToMemoize = {
              state: e.state,
              time: e.time,
              ticks: elapsedTicks
            };
          }
        }
        lastState = e;
      });
      this._state.remove(tmpEvent);
      if (eventToMemoize) {
        this._ticksAtTime.add(eventToMemoize);
      }
      return elapsedTicks;
    }
    /**
     * The number of times the callback was invoked. Starts counting at 0
     * and increments after the callback was invoked. Returns -1 when stopped.
     */
    get ticks() {
      return this.getTicksAtTime(this.now());
    }
    set ticks(t) {
      this.setTicksAtTime(t, this.now());
    }
    /**
     * The time since ticks=0 that the TickSource has been running. Accounts
     * for tempo curves
     */
    get seconds() {
      return this.getSecondsAtTime(this.now());
    }
    set seconds(s) {
      const now = this.now();
      const ticks = this.frequency.timeToTicks(s, now);
      this.setTicksAtTime(ticks, now);
    }
    /**
     * Return the elapsed seconds at the given time.
     * @param  time  When to get the elapsed seconds
     * @return  The number of elapsed seconds
     */
    getSecondsAtTime(time) {
      time = this.toSeconds(time);
      const stopEvent = this._state.getLastState("stopped", time);
      const tmpEvent = { state: "paused", time };
      this._state.add(tmpEvent);
      const memoizedEvent = this._secondsAtTime.get(time);
      let lastState = memoizedEvent ? memoizedEvent : stopEvent;
      let elapsedSeconds = memoizedEvent ? memoizedEvent.seconds : 0;
      let eventToMemoize = null;
      this._state.forEachBetween(lastState.time, time + this.sampleTime, (e) => {
        let periodStartTime = lastState.time;
        const offsetEvent = this._tickOffset.get(e.time);
        if (offsetEvent && offsetEvent.time >= lastState.time) {
          elapsedSeconds = offsetEvent.seconds;
          periodStartTime = offsetEvent.time;
        }
        if (lastState.state === "started" && e.state !== "started") {
          elapsedSeconds += e.time - periodStartTime;
          if (e.time !== tmpEvent.time) {
            eventToMemoize = {
              state: e.state,
              time: e.time,
              seconds: elapsedSeconds
            };
          }
        }
        lastState = e;
      });
      this._state.remove(tmpEvent);
      if (eventToMemoize) {
        this._secondsAtTime.add(eventToMemoize);
      }
      return elapsedSeconds;
    }
    /**
     * Set the clock's ticks at the given time.
     * @param  ticks The tick value to set
     * @param  time  When to set the tick value
     */
    setTicksAtTime(ticks, time) {
      time = this.toSeconds(time);
      this._tickOffset.cancel(time);
      this._tickOffset.add({
        seconds: this.frequency.getDurationOfTicks(ticks, time),
        ticks,
        time
      });
      this._ticksAtTime.cancel(time);
      this._secondsAtTime.cancel(time);
      return this;
    }
    /**
     * Returns the scheduled state at the given time.
     * @param  time  The time to query.
     */
    getStateAtTime(time) {
      time = this.toSeconds(time);
      return this._state.getValueAtTime(time);
    }
    /**
     * Get the time of the given tick. The second argument
     * is when to test before. Since ticks can be set (with setTicksAtTime)
     * there may be multiple times for a given tick value.
     * @param  tick The tick number.
     * @param  before When to measure the tick value from.
     * @return The time of the tick
     */
    getTimeOfTick(tick, before = this.now()) {
      const offset = this._tickOffset.get(before);
      const event = this._state.get(before);
      const startTime = Math.max(offset.time, event.time);
      const absoluteTicks = this.frequency.getTicksAtTime(startTime) + tick - offset.ticks;
      return this.frequency.getTimeOfTick(absoluteTicks);
    }
    /**
     * Invoke the callback event at all scheduled ticks between the
     * start time and the end time
     * @param  startTime  The beginning of the search range
     * @param  endTime    The end of the search range
     * @param  callback   The callback to invoke with each tick
     */
    forEachTickBetween(startTime, endTime, callback) {
      let lastStateEvent = this._state.get(startTime);
      this._state.forEachBetween(startTime, endTime, (event) => {
        if (lastStateEvent && lastStateEvent.state === "started" && event.state !== "started") {
          this.forEachTickBetween(Math.max(lastStateEvent.time, startTime), event.time - this.sampleTime, callback);
        }
        lastStateEvent = event;
      });
      let error = null;
      if (lastStateEvent && lastStateEvent.state === "started") {
        const maxStartTime = Math.max(lastStateEvent.time, startTime);
        const startTicks = this.frequency.getTicksAtTime(maxStartTime);
        const ticksAtStart = this.frequency.getTicksAtTime(lastStateEvent.time);
        const diff = startTicks - ticksAtStart;
        let offset = Math.ceil(diff) - diff;
        offset = EQ(offset, 1) ? 0 : offset;
        let nextTickTime = this.frequency.getTimeOfTick(startTicks + offset);
        while (nextTickTime < endTime) {
          try {
            callback(nextTickTime, Math.round(this.getTicksAtTime(nextTickTime)));
          } catch (e) {
            error = e;
            break;
          }
          nextTickTime += this.frequency.getDurationOfTicks(1, nextTickTime);
        }
      }
      if (error) {
        throw error;
      }
      return this;
    }
    /**
     * Clean up
     */
    dispose() {
      super.dispose();
      this._state.dispose();
      this._tickOffset.dispose();
      this._ticksAtTime.dispose();
      this._secondsAtTime.dispose();
      this.frequency.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/core/clock/Clock.js
  var Clock = class _Clock extends ToneWithContext {
    constructor() {
      const options = optionsFromArguments(_Clock.getDefaults(), arguments, [
        "callback",
        "frequency"
      ]);
      super(options);
      this.name = "Clock";
      this.callback = noOp;
      this._lastUpdate = 0;
      this._state = new StateTimeline("stopped");
      this._boundLoop = this._loop.bind(this);
      this.callback = options.callback;
      this._tickSource = new TickSource({
        context: this.context,
        frequency: options.frequency,
        units: options.units
      });
      this._lastUpdate = 0;
      this.frequency = this._tickSource.frequency;
      readOnly(this, "frequency");
      this._state.setStateAtTime("stopped", 0);
      this.context.on("tick", this._boundLoop);
    }
    static getDefaults() {
      return Object.assign(ToneWithContext.getDefaults(), {
        callback: noOp,
        frequency: 1,
        units: "hertz"
      });
    }
    /**
     * Returns the playback state of the source, either "started", "stopped" or "paused".
     */
    get state() {
      return this._state.getValueAtTime(this.now());
    }
    /**
     * Start the clock at the given time. Optionally pass in an offset
     * of where to start the tick counter from.
     * @param  time    The time the clock should start
     * @param offset  Where the tick counter starts counting from.
     */
    start(time, offset) {
      assertContextRunning(this.context);
      const computedTime = this.toSeconds(time);
      this.log("start", computedTime);
      if (this._state.getValueAtTime(computedTime) !== "started") {
        this._state.setStateAtTime("started", computedTime);
        this._tickSource.start(computedTime, offset);
        if (computedTime < this._lastUpdate) {
          this.emit("start", computedTime, offset);
        }
      }
      return this;
    }
    /**
     * Stop the clock. Stopping the clock resets the tick counter to 0.
     * @param time The time when the clock should stop.
     * @example
     * const clock = new Tone.Clock(time => {
     * 	console.log(time);
     * }, 1);
     * clock.start();
     * // stop the clock after 10 seconds
     * clock.stop("+10");
     */
    stop(time) {
      const computedTime = this.toSeconds(time);
      this.log("stop", computedTime);
      this._state.cancel(computedTime);
      this._state.setStateAtTime("stopped", computedTime);
      this._tickSource.stop(computedTime);
      if (computedTime < this._lastUpdate) {
        this.emit("stop", computedTime);
      }
      return this;
    }
    /**
     * Pause the clock. Pausing does not reset the tick counter.
     * @param time The time when the clock should stop.
     */
    pause(time) {
      const computedTime = this.toSeconds(time);
      if (this._state.getValueAtTime(computedTime) === "started") {
        this._state.setStateAtTime("paused", computedTime);
        this._tickSource.pause(computedTime);
        if (computedTime < this._lastUpdate) {
          this.emit("pause", computedTime);
        }
      }
      return this;
    }
    /**
     * The number of times the callback was invoked. Starts counting at 0
     * and increments after the callback was invoked.
     */
    get ticks() {
      return Math.ceil(this.getTicksAtTime(this.now()));
    }
    set ticks(t) {
      this._tickSource.ticks = t;
    }
    /**
     * The time since ticks=0 that the Clock has been running. Accounts for tempo curves
     */
    get seconds() {
      return this._tickSource.seconds;
    }
    set seconds(s) {
      this._tickSource.seconds = s;
    }
    /**
     * Return the elapsed seconds at the given time.
     * @param  time  When to get the elapsed seconds
     * @return  The number of elapsed seconds
     */
    getSecondsAtTime(time) {
      return this._tickSource.getSecondsAtTime(time);
    }
    /**
     * Set the clock's ticks at the given time.
     * @param  ticks The tick value to set
     * @param  time  When to set the tick value
     */
    setTicksAtTime(ticks, time) {
      this._tickSource.setTicksAtTime(ticks, time);
      return this;
    }
    /**
     * Get the time of the given tick. The second argument
     * is when to test before. Since ticks can be set (with setTicksAtTime)
     * there may be multiple times for a given tick value.
     * @param  tick The tick number.
     * @param  before When to measure the tick value from.
     * @return The time of the tick
     */
    getTimeOfTick(tick, before = this.now()) {
      return this._tickSource.getTimeOfTick(tick, before);
    }
    /**
     * Get the clock's ticks at the given time.
     * @param  time  When to get the tick value
     * @return The tick value at the given time.
     */
    getTicksAtTime(time) {
      return this._tickSource.getTicksAtTime(time);
    }
    /**
     * Get the time of the next tick
     * @param  offset The tick number.
     */
    nextTickTime(offset, when) {
      const computedTime = this.toSeconds(when);
      const currentTick = this.getTicksAtTime(computedTime);
      return this._tickSource.getTimeOfTick(currentTick + offset, computedTime);
    }
    /**
     * The scheduling loop.
     */
    _loop() {
      const startTime = this._lastUpdate;
      const endTime = this.now();
      this._lastUpdate = endTime;
      this.log("loop", startTime, endTime);
      if (startTime !== endTime) {
        this._state.forEachBetween(startTime, endTime, (e) => {
          switch (e.state) {
            case "started":
              const offset = this._tickSource.getTicksAtTime(e.time);
              this.emit("start", e.time, offset);
              break;
            case "stopped":
              if (e.time !== 0) {
                this.emit("stop", e.time);
              }
              break;
            case "paused":
              this.emit("pause", e.time);
              break;
          }
        });
        this._tickSource.forEachTickBetween(startTime, endTime, (time, ticks) => {
          this.callback(time, ticks);
        });
      }
    }
    /**
     * Returns the scheduled state at the given time.
     * @param  time  The time to query.
     * @return  The name of the state input in setStateAtTime.
     * @example
     * const clock = new Tone.Clock();
     * clock.start("+0.1");
     * clock.getStateAtTime("+0.1"); // returns "started"
     */
    getStateAtTime(time) {
      const computedTime = this.toSeconds(time);
      return this._state.getValueAtTime(computedTime);
    }
    /**
     * Clean up
     */
    dispose() {
      super.dispose();
      this.context.off("tick", this._boundLoop);
      this._tickSource.dispose();
      this._state.dispose();
      return this;
    }
  };
  Emitter.mixin(Clock);

  // node_modules/tone/build/esm/component/channel/Volume.js
  var Volume = class _Volume extends ToneAudioNode {
    constructor() {
      const options = optionsFromArguments(_Volume.getDefaults(), arguments, [
        "volume"
      ]);
      super(options);
      this.name = "Volume";
      this.input = this.output = new Gain({
        context: this.context,
        gain: options.volume,
        units: "decibels"
      });
      this.volume = this.output.gain;
      readOnly(this, "volume");
      this._unmutedVolume = options.volume;
      this.mute = options.mute;
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        mute: false,
        volume: 0
      });
    }
    /**
     * Mute the output.
     * @example
     * const vol = new Tone.Volume(-12).toDestination();
     * const osc = new Tone.Oscillator().connect(vol).start();
     * // mute the output
     * vol.mute = true;
     */
    get mute() {
      return this.volume.value === -Infinity;
    }
    set mute(mute) {
      if (!this.mute && mute) {
        this._unmutedVolume = this.volume.value;
        this.volume.value = -Infinity;
      } else if (this.mute && !mute) {
        this.volume.value = this._unmutedVolume;
      }
    }
    /**
     * clean up
     */
    dispose() {
      super.dispose();
      this.input.dispose();
      this.volume.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/core/context/Destination.js
  var DestinationClass = class _DestinationClass extends ToneAudioNode {
    constructor() {
      const options = optionsFromArguments(_DestinationClass.getDefaults(), arguments);
      super(options);
      this.name = "Destination";
      this.input = new Volume({ context: this.context });
      this.output = new Gain({ context: this.context });
      this.volume = this.input.volume;
      connectSeries(this.input, this.output, this.context.rawContext.destination);
      this.mute = options.mute;
      this._internalChannels = [
        this.input,
        this.context.rawContext.destination,
        this.output
      ];
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        mute: false,
        volume: 0
      });
    }
    /**
     * Mute the output.
     * @example
     * const oscillator = new Tone.Oscillator().start().toDestination();
     * setTimeout(() => {
     * 	// mute the output
     * 	Tone.Destination.mute = true;
     * }, 1000);
     */
    get mute() {
      return this.input.mute;
    }
    set mute(mute) {
      this.input.mute = mute;
    }
    /**
     * Add a master effects chain. NOTE: this will disconnect any nodes which were previously
     * chained in the master effects chain.
     * @param args All arguments will be connected in a row and the Master will be routed through it.
     * @example
     * // route all audio through a filter and compressor
     * const lowpass = new Tone.Filter(800, "lowpass");
     * const compressor = new Tone.Compressor(-18);
     * Tone.Destination.chain(lowpass, compressor);
     */
    chain(...args) {
      this.input.disconnect();
      args.unshift(this.input);
      args.push(this.output);
      connectSeries(...args);
      return this;
    }
    /**
     * The maximum number of channels the system can output
     * @example
     * console.log(Tone.Destination.maxChannelCount);
     */
    get maxChannelCount() {
      return this.context.rawContext.destination.maxChannelCount;
    }
    /**
     * Clean up
     */
    dispose() {
      super.dispose();
      this.volume.dispose();
      return this;
    }
  };
  onContextInit((context2) => {
    context2.destination = new DestinationClass({ context: context2 });
  });
  onContextClose((context2) => {
    context2.destination.dispose();
  });

  // node_modules/tone/build/esm/core/context/Listener.js
  var ListenerClass = class extends ToneAudioNode {
    constructor() {
      super(...arguments);
      this.name = "Listener";
      this.positionX = new Param({
        context: this.context,
        param: this.context.rawContext.listener.positionX
      });
      this.positionY = new Param({
        context: this.context,
        param: this.context.rawContext.listener.positionY
      });
      this.positionZ = new Param({
        context: this.context,
        param: this.context.rawContext.listener.positionZ
      });
      this.forwardX = new Param({
        context: this.context,
        param: this.context.rawContext.listener.forwardX
      });
      this.forwardY = new Param({
        context: this.context,
        param: this.context.rawContext.listener.forwardY
      });
      this.forwardZ = new Param({
        context: this.context,
        param: this.context.rawContext.listener.forwardZ
      });
      this.upX = new Param({
        context: this.context,
        param: this.context.rawContext.listener.upX
      });
      this.upY = new Param({
        context: this.context,
        param: this.context.rawContext.listener.upY
      });
      this.upZ = new Param({
        context: this.context,
        param: this.context.rawContext.listener.upZ
      });
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        forwardX: 0,
        forwardY: 0,
        forwardZ: -1,
        upX: 0,
        upY: 1,
        upZ: 0
      });
    }
    dispose() {
      super.dispose();
      this.positionX.dispose();
      this.positionY.dispose();
      this.positionZ.dispose();
      this.forwardX.dispose();
      this.forwardY.dispose();
      this.forwardZ.dispose();
      this.upX.dispose();
      this.upY.dispose();
      this.upZ.dispose();
      return this;
    }
  };
  onContextInit((context2) => {
    context2.listener = new ListenerClass({ context: context2 });
  });
  onContextClose((context2) => {
    context2.listener.dispose();
  });

  // node_modules/tone/build/esm/core/context/ToneAudioBuffers.js
  var ToneAudioBuffers = class _ToneAudioBuffers extends Tone {
    constructor() {
      super();
      this.name = "ToneAudioBuffers";
      this._buffers = /* @__PURE__ */ new Map();
      this._loadingCount = 0;
      const options = optionsFromArguments(_ToneAudioBuffers.getDefaults(), arguments, ["urls", "onload", "baseUrl"], "urls");
      this.baseUrl = options.baseUrl;
      Object.keys(options.urls).forEach((name) => {
        this._loadingCount++;
        const url = options.urls[name];
        this.add(name, url, this._bufferLoaded.bind(this, options.onload), options.onerror);
      });
    }
    static getDefaults() {
      return {
        baseUrl: "",
        onerror: noOp,
        onload: noOp,
        urls: {}
      };
    }
    /**
     * True if the buffers object has a buffer by that name.
     * @param  name  The key or index of the buffer.
     */
    has(name) {
      return this._buffers.has(name.toString());
    }
    /**
     * Get a buffer by name. If an array was loaded,
     * then use the array index.
     * @param  name  The key or index of the buffer.
     */
    get(name) {
      assert(this.has(name), `ToneAudioBuffers has no buffer named: ${name}`);
      return this._buffers.get(name.toString());
    }
    /**
     * A buffer was loaded. decrement the counter.
     */
    _bufferLoaded(callback) {
      this._loadingCount--;
      if (this._loadingCount === 0 && callback) {
        callback();
      }
    }
    /**
     * If the buffers are loaded or not
     */
    get loaded() {
      return Array.from(this._buffers).every(([_, buffer]) => buffer.loaded);
    }
    /**
     * Add a buffer by name and url to the Buffers
     * @param  name      A unique name to give the buffer
     * @param  url  Either the url of the bufer, or a buffer which will be added with the given name.
     * @param  callback  The callback to invoke when the url is loaded.
     * @param  onerror  Invoked if the buffer can't be loaded
     */
    add(name, url, callback = noOp, onerror = noOp) {
      if (isString(url)) {
        if (this.baseUrl && url.trim().substring(0, 11).toLowerCase() === "data:audio/") {
          this.baseUrl = "";
        }
        this._buffers.set(name.toString(), new ToneAudioBuffer(this.baseUrl + url, callback, onerror));
      } else {
        this._buffers.set(name.toString(), new ToneAudioBuffer(url, callback, onerror));
      }
      return this;
    }
    dispose() {
      super.dispose();
      this._buffers.forEach((buffer) => buffer.dispose());
      this._buffers.clear();
      return this;
    }
  };

  // node_modules/tone/build/esm/core/type/Ticks.js
  var TicksClass = class extends TransportTimeClass {
    constructor() {
      super(...arguments);
      this.name = "Ticks";
      this.defaultUnits = "i";
    }
    /**
     * Get the current time in the given units
     */
    _now() {
      return this.context.transport.ticks;
    }
    /**
     * Return the value of the beats in the current units
     */
    _beatsToUnits(beats) {
      return this._getPPQ() * beats;
    }
    /**
     * Returns the value of a second in the current units
     */
    _secondsToUnits(seconds) {
      return Math.floor(seconds / (60 / this._getBpm()) * this._getPPQ());
    }
    /**
     * Returns the value of a tick in the current time units
     */
    _ticksToUnits(ticks) {
      return ticks;
    }
    /**
     * Return the time in ticks
     */
    toTicks() {
      return this.valueOf();
    }
    /**
     * Return the time in seconds
     */
    toSeconds() {
      return this.valueOf() / this._getPPQ() * (60 / this._getBpm());
    }
  };

  // node_modules/tone/build/esm/core/util/Draw.js
  var DrawClass = class extends ToneWithContext {
    constructor() {
      super(...arguments);
      this.name = "Draw";
      this.expiration = 0.25;
      this.anticipation = 8e-3;
      this._events = new Timeline();
      this._boundDrawLoop = this._drawLoop.bind(this);
      this._animationFrame = -1;
    }
    /**
     * Schedule a function at the given time to be invoked
     * on the nearest animation frame.
     * @param  callback  Callback is invoked at the given time.
     * @param  time      The time relative to the AudioContext time to invoke the callback.
     * @example
     * Tone.Transport.scheduleRepeat(time => {
     * 	Tone.Draw.schedule(() => console.log(time), time);
     * }, 1);
     * Tone.Transport.start();
     */
    schedule(callback, time) {
      this._events.add({
        callback,
        time: this.toSeconds(time)
      });
      if (this._events.length === 1) {
        this._animationFrame = requestAnimationFrame(this._boundDrawLoop);
      }
      return this;
    }
    /**
     * Cancel events scheduled after the given time
     * @param  after  Time after which scheduled events will be removed from the scheduling timeline.
     */
    cancel(after) {
      this._events.cancel(this.toSeconds(after));
      return this;
    }
    /**
     * The draw loop
     */
    _drawLoop() {
      const now = this.context.currentTime;
      while (this._events.length && this._events.peek().time - this.anticipation <= now) {
        const event = this._events.shift();
        if (event && now - event.time <= this.expiration) {
          event.callback();
        }
      }
      if (this._events.length > 0) {
        this._animationFrame = requestAnimationFrame(this._boundDrawLoop);
      }
    }
    dispose() {
      super.dispose();
      this._events.dispose();
      cancelAnimationFrame(this._animationFrame);
      return this;
    }
  };
  onContextInit((context2) => {
    context2.draw = new DrawClass({ context: context2 });
  });
  onContextClose((context2) => {
    context2.draw.dispose();
  });

  // node_modules/tone/build/esm/core/util/IntervalTimeline.js
  var IntervalTimeline = class extends Tone {
    constructor() {
      super(...arguments);
      this.name = "IntervalTimeline";
      this._root = null;
      this._length = 0;
    }
    /**
     * The event to add to the timeline. All events must
     * have a time and duration value
     * @param  event  The event to add to the timeline
     */
    add(event) {
      assert(isDefined(event.time), "Events must have a time property");
      assert(isDefined(event.duration), "Events must have a duration parameter");
      event.time = event.time.valueOf();
      let node = new IntervalNode(event.time, event.time + event.duration, event);
      if (this._root === null) {
        this._root = node;
      } else {
        this._root.insert(node);
      }
      this._length++;
      while (node !== null) {
        node.updateHeight();
        node.updateMax();
        this._rebalance(node);
        node = node.parent;
      }
      return this;
    }
    /**
     * Remove an event from the timeline.
     * @param  event  The event to remove from the timeline
     */
    remove(event) {
      if (this._root !== null) {
        const results = [];
        this._root.search(event.time, results);
        for (const node of results) {
          if (node.event === event) {
            this._removeNode(node);
            this._length--;
            break;
          }
        }
      }
      return this;
    }
    /**
     * The number of items in the timeline.
     * @readOnly
     */
    get length() {
      return this._length;
    }
    /**
     * Remove events whose time time is after the given time
     * @param  after  The time to query.
     */
    cancel(after) {
      this.forEachFrom(after, (event) => this.remove(event));
      return this;
    }
    /**
     * Set the root node as the given node
     */
    _setRoot(node) {
      this._root = node;
      if (this._root !== null) {
        this._root.parent = null;
      }
    }
    /**
     * Replace the references to the node in the node's parent
     * with the replacement node.
     */
    _replaceNodeInParent(node, replacement) {
      if (node.parent !== null) {
        if (node.isLeftChild()) {
          node.parent.left = replacement;
        } else {
          node.parent.right = replacement;
        }
        this._rebalance(node.parent);
      } else {
        this._setRoot(replacement);
      }
    }
    /**
     * Remove the node from the tree and replace it with
     * a successor which follows the schema.
     */
    _removeNode(node) {
      if (node.left === null && node.right === null) {
        this._replaceNodeInParent(node, null);
      } else if (node.right === null) {
        this._replaceNodeInParent(node, node.left);
      } else if (node.left === null) {
        this._replaceNodeInParent(node, node.right);
      } else {
        const balance = node.getBalance();
        let replacement;
        let temp = null;
        if (balance > 0) {
          if (node.left.right === null) {
            replacement = node.left;
            replacement.right = node.right;
            temp = replacement;
          } else {
            replacement = node.left.right;
            while (replacement.right !== null) {
              replacement = replacement.right;
            }
            if (replacement.parent) {
              replacement.parent.right = replacement.left;
              temp = replacement.parent;
              replacement.left = node.left;
              replacement.right = node.right;
            }
          }
        } else if (node.right.left === null) {
          replacement = node.right;
          replacement.left = node.left;
          temp = replacement;
        } else {
          replacement = node.right.left;
          while (replacement.left !== null) {
            replacement = replacement.left;
          }
          if (replacement.parent) {
            replacement.parent.left = replacement.right;
            temp = replacement.parent;
            replacement.left = node.left;
            replacement.right = node.right;
          }
        }
        if (node.parent !== null) {
          if (node.isLeftChild()) {
            node.parent.left = replacement;
          } else {
            node.parent.right = replacement;
          }
        } else {
          this._setRoot(replacement);
        }
        if (temp) {
          this._rebalance(temp);
        }
      }
      node.dispose();
    }
    /**
     * Rotate the tree to the left
     */
    _rotateLeft(node) {
      const parent = node.parent;
      const isLeftChild = node.isLeftChild();
      const pivotNode = node.right;
      if (pivotNode) {
        node.right = pivotNode.left;
        pivotNode.left = node;
      }
      if (parent !== null) {
        if (isLeftChild) {
          parent.left = pivotNode;
        } else {
          parent.right = pivotNode;
        }
      } else {
        this._setRoot(pivotNode);
      }
    }
    /**
     * Rotate the tree to the right
     */
    _rotateRight(node) {
      const parent = node.parent;
      const isLeftChild = node.isLeftChild();
      const pivotNode = node.left;
      if (pivotNode) {
        node.left = pivotNode.right;
        pivotNode.right = node;
      }
      if (parent !== null) {
        if (isLeftChild) {
          parent.left = pivotNode;
        } else {
          parent.right = pivotNode;
        }
      } else {
        this._setRoot(pivotNode);
      }
    }
    /**
     * Balance the BST
     */
    _rebalance(node) {
      const balance = node.getBalance();
      if (balance > 1 && node.left) {
        if (node.left.getBalance() < 0) {
          this._rotateLeft(node.left);
        } else {
          this._rotateRight(node);
        }
      } else if (balance < -1 && node.right) {
        if (node.right.getBalance() > 0) {
          this._rotateRight(node.right);
        } else {
          this._rotateLeft(node);
        }
      }
    }
    /**
     * Get an event whose time and duration span the give time. Will
     * return the match whose "time" value is closest to the given time.
     * @return  The event which spans the desired time
     */
    get(time) {
      if (this._root !== null) {
        const results = [];
        this._root.search(time, results);
        if (results.length > 0) {
          let max = results[0];
          for (let i = 1; i < results.length; i++) {
            if (results[i].low > max.low) {
              max = results[i];
            }
          }
          return max.event;
        }
      }
      return null;
    }
    /**
     * Iterate over everything in the timeline.
     * @param  callback The callback to invoke with every item
     */
    forEach(callback) {
      if (this._root !== null) {
        const allNodes = [];
        this._root.traverse((node) => allNodes.push(node));
        allNodes.forEach((node) => {
          if (node.event) {
            callback(node.event);
          }
        });
      }
      return this;
    }
    /**
     * Iterate over everything in the array in which the given time
     * overlaps with the time and duration time of the event.
     * @param  time The time to check if items are overlapping
     * @param  callback The callback to invoke with every item
     */
    forEachAtTime(time, callback) {
      if (this._root !== null) {
        const results = [];
        this._root.search(time, results);
        results.forEach((node) => {
          if (node.event) {
            callback(node.event);
          }
        });
      }
      return this;
    }
    /**
     * Iterate over everything in the array in which the time is greater
     * than or equal to the given time.
     * @param  time The time to check if items are before
     * @param  callback The callback to invoke with every item
     */
    forEachFrom(time, callback) {
      if (this._root !== null) {
        const results = [];
        this._root.searchAfter(time, results);
        results.forEach((node) => {
          if (node.event) {
            callback(node.event);
          }
        });
      }
      return this;
    }
    /**
     * Clean up
     */
    dispose() {
      super.dispose();
      if (this._root !== null) {
        this._root.traverse((node) => node.dispose());
      }
      this._root = null;
      return this;
    }
  };
  var IntervalNode = class {
    constructor(low, high, event) {
      this._left = null;
      this._right = null;
      this.parent = null;
      this.height = 0;
      this.event = event;
      this.low = low;
      this.high = high;
      this.max = this.high;
    }
    /**
     * Insert a node into the correct spot in the tree
     */
    insert(node) {
      if (node.low <= this.low) {
        if (this.left === null) {
          this.left = node;
        } else {
          this.left.insert(node);
        }
      } else if (this.right === null) {
        this.right = node;
      } else {
        this.right.insert(node);
      }
    }
    /**
     * Search the tree for nodes which overlap
     * with the given point
     * @param  point  The point to query
     * @param  results  The array to put the results
     */
    search(point, results) {
      if (point > this.max) {
        return;
      }
      if (this.left !== null) {
        this.left.search(point, results);
      }
      if (this.low <= point && this.high > point) {
        results.push(this);
      }
      if (this.low > point) {
        return;
      }
      if (this.right !== null) {
        this.right.search(point, results);
      }
    }
    /**
     * Search the tree for nodes which are less
     * than the given point
     * @param  point  The point to query
     * @param  results  The array to put the results
     */
    searchAfter(point, results) {
      if (this.low >= point) {
        results.push(this);
        if (this.left !== null) {
          this.left.searchAfter(point, results);
        }
      }
      if (this.right !== null) {
        this.right.searchAfter(point, results);
      }
    }
    /**
     * Invoke the callback on this element and both it's branches
     * @param  {Function}  callback
     */
    traverse(callback) {
      callback(this);
      if (this.left !== null) {
        this.left.traverse(callback);
      }
      if (this.right !== null) {
        this.right.traverse(callback);
      }
    }
    /**
     * Update the height of the node
     */
    updateHeight() {
      if (this.left !== null && this.right !== null) {
        this.height = Math.max(this.left.height, this.right.height) + 1;
      } else if (this.right !== null) {
        this.height = this.right.height + 1;
      } else if (this.left !== null) {
        this.height = this.left.height + 1;
      } else {
        this.height = 0;
      }
    }
    /**
     * Update the height of the node
     */
    updateMax() {
      this.max = this.high;
      if (this.left !== null) {
        this.max = Math.max(this.max, this.left.max);
      }
      if (this.right !== null) {
        this.max = Math.max(this.max, this.right.max);
      }
    }
    /**
     * The balance is how the leafs are distributed on the node
     * @return  Negative numbers are balanced to the right
     */
    getBalance() {
      let balance = 0;
      if (this.left !== null && this.right !== null) {
        balance = this.left.height - this.right.height;
      } else if (this.left !== null) {
        balance = this.left.height + 1;
      } else if (this.right !== null) {
        balance = -(this.right.height + 1);
      }
      return balance;
    }
    /**
     * @returns true if this node is the left child of its parent
     */
    isLeftChild() {
      return this.parent !== null && this.parent.left === this;
    }
    /**
     * get/set the left node
     */
    get left() {
      return this._left;
    }
    set left(node) {
      this._left = node;
      if (node !== null) {
        node.parent = this;
      }
      this.updateHeight();
      this.updateMax();
    }
    /**
     * get/set the right node
     */
    get right() {
      return this._right;
    }
    set right(node) {
      this._right = node;
      if (node !== null) {
        node.parent = this;
      }
      this.updateHeight();
      this.updateMax();
    }
    /**
     * null out references.
     */
    dispose() {
      this.parent = null;
      this._left = null;
      this._right = null;
      this.event = null;
    }
  };

  // node_modules/tone/build/esm/core/util/TimelineValue.js
  var TimelineValue = class extends Tone {
    /**
     * @param initialValue The value to return if there is no scheduled values
     */
    constructor(initialValue) {
      super();
      this.name = "TimelineValue";
      this._timeline = new Timeline({
        memory: 10
      });
      this._initialValue = initialValue;
    }
    /**
     * Set the value at the given time
     */
    set(value, time) {
      this._timeline.add({
        value,
        time
      });
      return this;
    }
    /**
     * Get the value at the given time
     */
    get(time) {
      const event = this._timeline.get(time);
      if (event) {
        return event.value;
      } else {
        return this._initialValue;
      }
    }
  };

  // node_modules/tone/build/esm/signal/SignalOperator.js
  var SignalOperator = class _SignalOperator extends ToneAudioNode {
    constructor() {
      super(optionsFromArguments(_SignalOperator.getDefaults(), arguments, [
        "context"
      ]));
    }
    connect(destination, outputNum = 0, inputNum = 0) {
      connectSignal(this, destination, outputNum, inputNum);
      return this;
    }
  };

  // node_modules/tone/build/esm/signal/WaveShaper.js
  var WaveShaper = class _WaveShaper extends SignalOperator {
    constructor() {
      const options = optionsFromArguments(_WaveShaper.getDefaults(), arguments, ["mapping", "length"]);
      super(options);
      this.name = "WaveShaper";
      this._shaper = this.context.createWaveShaper();
      this.input = this._shaper;
      this.output = this._shaper;
      if (isArray(options.mapping) || options.mapping instanceof Float32Array) {
        this.curve = Float32Array.from(options.mapping);
      } else if (isFunction(options.mapping)) {
        this.setMap(options.mapping, options.length);
      }
    }
    static getDefaults() {
      return Object.assign(Signal.getDefaults(), {
        length: 1024
      });
    }
    /**
     * Uses a mapping function to set the value of the curve.
     * @param mapping The function used to define the values.
     *                The mapping function take two arguments:
     *                the first is the value at the current position
     *                which goes from -1 to 1 over the number of elements
     *                in the curve array. The second argument is the array position.
     * @example
     * const shaper = new Tone.WaveShaper();
     * // map the input signal from [-1, 1] to [0, 10]
     * shaper.setMap((val, index) => (val + 1) * 5);
     */
    setMap(mapping, length = 1024) {
      const array = new Float32Array(length);
      for (let i = 0, len = length; i < len; i++) {
        const normalized = i / (len - 1) * 2 - 1;
        array[i] = mapping(normalized, i);
      }
      this.curve = array;
      return this;
    }
    /**
     * The array to set as the waveshaper curve. For linear curves
     * array length does not make much difference, but for complex curves
     * longer arrays will provide smoother interpolation.
     */
    get curve() {
      return this._shaper.curve;
    }
    set curve(mapping) {
      this._shaper.curve = mapping;
    }
    /**
     * Specifies what type of oversampling (if any) should be used when
     * applying the shaping curve. Can either be "none", "2x" or "4x".
     */
    get oversample() {
      return this._shaper.oversample;
    }
    set oversample(oversampling) {
      const isOverSampleType = ["none", "2x", "4x"].some((str) => str.includes(oversampling));
      assert(isOverSampleType, "oversampling must be either 'none', '2x', or '4x'");
      this._shaper.oversample = oversampling;
    }
    /**
     * Clean up.
     */
    dispose() {
      super.dispose();
      this._shaper.disconnect();
      return this;
    }
  };

  // node_modules/tone/build/esm/signal/Pow.js
  var Pow = class _Pow extends SignalOperator {
    constructor() {
      const options = optionsFromArguments(_Pow.getDefaults(), arguments, [
        "value"
      ]);
      super(options);
      this.name = "Pow";
      this._exponentScaler = this.input = this.output = new WaveShaper({
        context: this.context,
        mapping: this._expFunc(options.value),
        length: 8192
      });
      this._exponent = options.value;
    }
    static getDefaults() {
      return Object.assign(SignalOperator.getDefaults(), {
        value: 1
      });
    }
    /**
     * the function which maps the waveshaper
     * @param exponent exponent value
     */
    _expFunc(exponent) {
      return (val) => {
        return Math.pow(Math.abs(val), exponent);
      };
    }
    /**
     * The value of the exponent.
     */
    get value() {
      return this._exponent;
    }
    set value(exponent) {
      this._exponent = exponent;
      this._exponentScaler.setMap(this._expFunc(this._exponent));
    }
    /**
     * Clean up.
     */
    dispose() {
      super.dispose();
      this._exponentScaler.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/core/clock/TransportEvent.js
  var TransportEvent = class _TransportEvent {
    /**
     * @param transport The transport object which the event belongs to
     */
    constructor(transport, opts) {
      this.id = _TransportEvent._eventId++;
      this._remainderTime = 0;
      const options = Object.assign(_TransportEvent.getDefaults(), opts);
      this.transport = transport;
      this.callback = options.callback;
      this._once = options.once;
      this.time = Math.floor(options.time);
      this._remainderTime = options.time - this.time;
    }
    static getDefaults() {
      return {
        callback: noOp,
        once: false,
        time: 0
      };
    }
    /**
     * Get the time and remainder time.
     */
    get floatTime() {
      return this.time + this._remainderTime;
    }
    /**
     * Invoke the event callback.
     * @param  time  The AudioContext time in seconds of the event
     */
    invoke(time) {
      if (this.callback) {
        const tickDuration = this.transport.bpm.getDurationOfTicks(1, time);
        this.callback(time + this._remainderTime * tickDuration);
        if (this._once) {
          this.transport.clear(this.id);
        }
      }
    }
    /**
     * Clean up
     */
    dispose() {
      this.callback = void 0;
      return this;
    }
  };
  TransportEvent._eventId = 0;

  // node_modules/tone/build/esm/core/clock/TransportRepeatEvent.js
  var TransportRepeatEvent = class _TransportRepeatEvent extends TransportEvent {
    /**
     * @param transport The transport object which the event belongs to
     */
    constructor(transport, opts) {
      super(transport, opts);
      this._currentId = -1;
      this._nextId = -1;
      this._nextTick = this.time;
      this._boundRestart = this._restart.bind(this);
      const options = Object.assign(_TransportRepeatEvent.getDefaults(), opts);
      this.duration = options.duration;
      this._interval = options.interval;
      this._nextTick = options.time;
      this.transport.on("start", this._boundRestart);
      this.transport.on("loopStart", this._boundRestart);
      this.transport.on("ticks", this._boundRestart);
      this.context = this.transport.context;
      this._restart();
    }
    static getDefaults() {
      return Object.assign({}, TransportEvent.getDefaults(), {
        duration: Infinity,
        interval: 1,
        once: false
      });
    }
    /**
     * Invoke the callback. Returns the tick time which
     * the next event should be scheduled at.
     * @param  time  The AudioContext time in seconds of the event
     */
    invoke(time) {
      this._createEvents(time);
      super.invoke(time);
    }
    /**
     * Create an event on the transport on the nextTick
     */
    _createEvent() {
      if (LT(this._nextTick, this.floatTime + this.duration)) {
        return this.transport.scheduleOnce(this.invoke.bind(this), new TicksClass(this.context, this._nextTick).toSeconds());
      }
      return -1;
    }
    /**
     * Push more events onto the timeline to keep up with the position of the timeline
     */
    _createEvents(time) {
      if (LT(this._nextTick + this._interval, this.floatTime + this.duration)) {
        this._nextTick += this._interval;
        this._currentId = this._nextId;
        this._nextId = this.transport.scheduleOnce(this.invoke.bind(this), new TicksClass(this.context, this._nextTick).toSeconds());
      }
    }
    /**
     * Re-compute the events when the transport time has changed from a start/ticks/loopStart event
     */
    _restart(time) {
      this.transport.clear(this._currentId);
      this.transport.clear(this._nextId);
      this._nextTick = this.floatTime;
      const ticks = this.transport.getTicksAtTime(time);
      if (GT(ticks, this.time)) {
        this._nextTick = this.floatTime + Math.ceil((ticks - this.floatTime) / this._interval) * this._interval;
      }
      this._currentId = this._createEvent();
      this._nextTick += this._interval;
      this._nextId = this._createEvent();
    }
    /**
     * Clean up
     */
    dispose() {
      super.dispose();
      this.transport.clear(this._currentId);
      this.transport.clear(this._nextId);
      this.transport.off("start", this._boundRestart);
      this.transport.off("loopStart", this._boundRestart);
      this.transport.off("ticks", this._boundRestart);
      return this;
    }
  };

  // node_modules/tone/build/esm/core/clock/Transport.js
  var TransportClass = class _TransportClass extends ToneWithContext {
    constructor() {
      const options = optionsFromArguments(_TransportClass.getDefaults(), arguments);
      super(options);
      this.name = "Transport";
      this._loop = new TimelineValue(false);
      this._loopStart = 0;
      this._loopEnd = 0;
      this._scheduledEvents = {};
      this._timeline = new Timeline();
      this._repeatedEvents = new IntervalTimeline();
      this._syncedSignals = [];
      this._swingAmount = 0;
      this._ppq = options.ppq;
      this._clock = new Clock({
        callback: this._processTick.bind(this),
        context: this.context,
        frequency: 0,
        units: "bpm"
      });
      this._bindClockEvents();
      this.bpm = this._clock.frequency;
      this._clock.frequency.multiplier = options.ppq;
      this.bpm.setValueAtTime(options.bpm, 0);
      readOnly(this, "bpm");
      this._timeSignature = options.timeSignature;
      this._swingTicks = options.ppq / 2;
    }
    static getDefaults() {
      return Object.assign(ToneWithContext.getDefaults(), {
        bpm: 120,
        loopEnd: "4m",
        loopStart: 0,
        ppq: 192,
        swing: 0,
        swingSubdivision: "8n",
        timeSignature: 4
      });
    }
    //-------------------------------------
    // 	TICKS
    //-------------------------------------
    /**
     * called on every tick
     * @param  tickTime clock relative tick time
     */
    _processTick(tickTime, ticks) {
      if (this._loop.get(tickTime)) {
        if (ticks >= this._loopEnd) {
          this.emit("loopEnd", tickTime);
          this._clock.setTicksAtTime(this._loopStart, tickTime);
          ticks = this._loopStart;
          this.emit("loopStart", tickTime, this._clock.getSecondsAtTime(tickTime));
          this.emit("loop", tickTime);
        }
      }
      if (this._swingAmount > 0 && ticks % this._ppq !== 0 && // not on a downbeat
      ticks % (this._swingTicks * 2) !== 0) {
        const progress = ticks % (this._swingTicks * 2) / (this._swingTicks * 2);
        const amount = Math.sin(progress * Math.PI) * this._swingAmount;
        tickTime += new TicksClass(this.context, this._swingTicks * 2 / 3).toSeconds() * amount;
      }
      enterScheduledCallback(true);
      this._timeline.forEachAtTime(ticks, (event) => event.invoke(tickTime));
      enterScheduledCallback(false);
    }
    //-------------------------------------
    // 	SCHEDULABLE EVENTS
    //-------------------------------------
    /**
     * Schedule an event along the timeline.
     * @param callback The callback to be invoked at the time.
     * @param time The time to invoke the callback at.
     * @return The id of the event which can be used for canceling the event.
     * @example
     * // schedule an event on the 16th measure
     * Tone.getTransport().schedule((time) => {
     * 	// invoked on measure 16
     * 	console.log("measure 16!");
     * }, "16:0:0");
     */
    schedule(callback, time) {
      const event = new TransportEvent(this, {
        callback,
        time: new TransportTimeClass(this.context, time).toTicks()
      });
      return this._addEvent(event, this._timeline);
    }
    /**
     * Schedule a repeated event along the timeline. The event will fire
     * at the `interval` starting at the `startTime` and for the specified
     * `duration`.
     * @param  callback   The callback to invoke.
     * @param  interval   The duration between successive callbacks. Must be a positive number.
     * @param  startTime  When along the timeline the events should start being invoked.
     * @param  duration How long the event should repeat.
     * @return  The ID of the scheduled event. Use this to cancel the event.
     * @example
     * const osc = new Tone.Oscillator().toDestination().start();
     * // a callback invoked every eighth note after the first measure
     * Tone.getTransport().scheduleRepeat((time) => {
     * 	osc.start(time).stop(time + 0.1);
     * }, "8n", "1m");
     */
    scheduleRepeat(callback, interval, startTime, duration = Infinity) {
      const event = new TransportRepeatEvent(this, {
        callback,
        duration: new TimeClass(this.context, duration).toTicks(),
        interval: new TimeClass(this.context, interval).toTicks(),
        time: new TransportTimeClass(this.context, startTime).toTicks()
      });
      return this._addEvent(event, this._repeatedEvents);
    }
    /**
     * Schedule an event that will be removed after it is invoked.
     * @param callback The callback to invoke once.
     * @param time The time the callback should be invoked.
     * @returns The ID of the scheduled event.
     */
    scheduleOnce(callback, time) {
      const event = new TransportEvent(this, {
        callback,
        once: true,
        time: new TransportTimeClass(this.context, time).toTicks()
      });
      return this._addEvent(event, this._timeline);
    }
    /**
     * Clear the passed in event id from the timeline
     * @param eventId The id of the event.
     */
    clear(eventId) {
      if (this._scheduledEvents.hasOwnProperty(eventId)) {
        const item = this._scheduledEvents[eventId.toString()];
        item.timeline.remove(item.event);
        item.event.dispose();
        delete this._scheduledEvents[eventId.toString()];
      }
      return this;
    }
    /**
     * Add an event to the correct timeline. Keep track of the
     * timeline it was added to.
     * @returns the event id which was just added
     */
    _addEvent(event, timeline) {
      this._scheduledEvents[event.id.toString()] = {
        event,
        timeline
      };
      timeline.add(event);
      return event.id;
    }
    /**
     * Remove scheduled events from the timeline after
     * the given time. Repeated events will be removed
     * if their startTime is after the given time
     * @param after Clear all events after this time.
     */
    cancel(after = 0) {
      const computedAfter = this.toTicks(after);
      this._timeline.forEachFrom(computedAfter, (event) => this.clear(event.id));
      this._repeatedEvents.forEachFrom(computedAfter, (event) => this.clear(event.id));
      return this;
    }
    //-------------------------------------
    // 	START/STOP/PAUSE
    //-------------------------------------
    /**
     * Bind start/stop/pause events from the clock and emit them.
     */
    _bindClockEvents() {
      this._clock.on("start", (time, offset) => {
        offset = new TicksClass(this.context, offset).toSeconds();
        this.emit("start", time, offset);
      });
      this._clock.on("stop", (time) => {
        this.emit("stop", time);
      });
      this._clock.on("pause", (time) => {
        this.emit("pause", time);
      });
    }
    /**
     * Returns the playback state of the source, either "started", "stopped", or "paused"
     */
    get state() {
      return this._clock.getStateAtTime(this.now());
    }
    /**
     * Start the transport and all sources synced to the transport.
     * @param  time The time when the transport should start.
     * @param  offset The timeline offset to start the transport.
     * @example
     * // start the transport in one second starting at beginning of the 5th measure.
     * Tone.getTransport().start("+1", "4:0:0");
     */
    start(time, offset) {
      this.context.resume();
      let offsetTicks;
      if (isDefined(offset)) {
        offsetTicks = this.toTicks(offset);
      }
      this._clock.start(time, offsetTicks);
      return this;
    }
    /**
     * Stop the transport and all sources synced to the transport.
     * @param time The time when the transport should stop.
     * @example
     * Tone.getTransport().stop();
     */
    stop(time) {
      this._clock.stop(time);
      return this;
    }
    /**
     * Pause the transport and all sources synced to the transport.
     */
    pause(time) {
      this._clock.pause(time);
      return this;
    }
    /**
     * Toggle the current state of the transport. If it is
     * started, it will stop it, otherwise it will start the Transport.
     * @param  time The time of the event
     */
    toggle(time) {
      time = this.toSeconds(time);
      if (this._clock.getStateAtTime(time) !== "started") {
        this.start(time);
      } else {
        this.stop(time);
      }
      return this;
    }
    //-------------------------------------
    // 	SETTERS/GETTERS
    //-------------------------------------
    /**
     * The time signature as just the numerator over 4.
     * For example 4/4 would be just 4 and 6/8 would be 3.
     * @example
     * // common time
     * Tone.getTransport().timeSignature = 4;
     * // 7/8
     * Tone.getTransport().timeSignature = [7, 8];
     * // this will be reduced to a single number
     * Tone.getTransport().timeSignature; // returns 3.5
     */
    get timeSignature() {
      return this._timeSignature;
    }
    set timeSignature(timeSig) {
      if (isArray(timeSig)) {
        timeSig = timeSig[0] / timeSig[1] * 4;
      }
      this._timeSignature = timeSig;
    }
    /**
     * When the Transport.loop = true, this is the starting position of the loop.
     */
    get loopStart() {
      return new TimeClass(this.context, this._loopStart, "i").toSeconds();
    }
    set loopStart(startPosition) {
      this._loopStart = this.toTicks(startPosition);
    }
    /**
     * When the Transport.loop = true, this is the ending position of the loop.
     */
    get loopEnd() {
      return new TimeClass(this.context, this._loopEnd, "i").toSeconds();
    }
    set loopEnd(endPosition) {
      this._loopEnd = this.toTicks(endPosition);
    }
    /**
     * If the transport loops or not.
     */
    get loop() {
      return this._loop.get(this.now());
    }
    set loop(loop) {
      this._loop.set(loop, this.now());
    }
    /**
     * Set the loop start and stop at the same time.
     * @example
     * // loop over the first measure
     * Tone.getTransport().setLoopPoints(0, "1m");
     * Tone.getTransport().loop = true;
     */
    setLoopPoints(startPosition, endPosition) {
      this.loopStart = startPosition;
      this.loopEnd = endPosition;
      return this;
    }
    /**
     * The swing value. Between 0-1 where 1 equal to the note + half the subdivision.
     */
    get swing() {
      return this._swingAmount;
    }
    set swing(amount) {
      this._swingAmount = amount;
    }
    /**
     * Set the subdivision which the swing will be applied to.
     * The default value is an 8th note. Value must be less
     * than a quarter note.
     */
    get swingSubdivision() {
      return new TicksClass(this.context, this._swingTicks).toNotation();
    }
    set swingSubdivision(subdivision) {
      this._swingTicks = this.toTicks(subdivision);
    }
    /**
     * The Transport's position in Bars:Beats:Sixteenths.
     * Setting the value will jump to that position right away.
     */
    get position() {
      const now = this.now();
      const ticks = this._clock.getTicksAtTime(now);
      return new TicksClass(this.context, ticks).toBarsBeatsSixteenths();
    }
    set position(progress) {
      const ticks = this.toTicks(progress);
      this.ticks = ticks;
    }
    /**
     * The Transport's position in seconds.
     * Setting the value will jump to that position right away.
     */
    get seconds() {
      return this._clock.seconds;
    }
    set seconds(s) {
      const now = this.now();
      const ticks = this._clock.frequency.timeToTicks(s, now);
      this.ticks = ticks;
    }
    /**
     * The Transport's loop position as a normalized value. Always
     * returns 0 if the Transport.loop = false.
     */
    get progress() {
      if (this.loop) {
        const now = this.now();
        const ticks = this._clock.getTicksAtTime(now);
        return (ticks - this._loopStart) / (this._loopEnd - this._loopStart);
      } else {
        return 0;
      }
    }
    /**
     * The Transport's current tick position.
     */
    get ticks() {
      return this._clock.ticks;
    }
    set ticks(t) {
      if (this._clock.ticks !== t) {
        const now = this.now();
        if (this.state === "started") {
          const ticks = this._clock.getTicksAtTime(now);
          const remainingTick = this._clock.frequency.getDurationOfTicks(Math.ceil(ticks) - ticks, now);
          const time = now + remainingTick;
          this.emit("stop", time);
          this._clock.setTicksAtTime(t, time);
          this.emit("start", time, this._clock.getSecondsAtTime(time));
        } else {
          this.emit("ticks", now);
          this._clock.setTicksAtTime(t, now);
        }
      }
    }
    /**
     * Get the clock's ticks at the given time.
     * @param  time  When to get the tick value
     * @return The tick value at the given time.
     */
    getTicksAtTime(time) {
      return this._clock.getTicksAtTime(time);
    }
    /**
     * Return the elapsed seconds at the given time.
     * @param  time  When to get the elapsed seconds
     * @return  The number of elapsed seconds
     */
    getSecondsAtTime(time) {
      return this._clock.getSecondsAtTime(time);
    }
    /**
     * Pulses Per Quarter note. This is the smallest resolution
     * the Transport timing supports. This should be set once
     * on initialization and not set again. Changing this value
     * after other objects have been created can cause problems.
     */
    get PPQ() {
      return this._clock.frequency.multiplier;
    }
    set PPQ(ppq) {
      this._clock.frequency.multiplier = ppq;
    }
    //-------------------------------------
    // 	SYNCING
    //-------------------------------------
    /**
     * Returns the time aligned to the next subdivision
     * of the Transport. If the Transport is not started,
     * it will return 0.
     * Note: this will not work precisely during tempo ramps.
     * @param  subdivision  The subdivision to quantize to
     * @return  The context time of the next subdivision.
     * @example
     * // the transport must be started, otherwise returns 0
     * Tone.getTransport().start();
     * Tone.getTransport().nextSubdivision("4n");
     */
    nextSubdivision(subdivision) {
      subdivision = this.toTicks(subdivision);
      if (this.state !== "started") {
        return 0;
      } else {
        const now = this.now();
        const transportPos = this.getTicksAtTime(now);
        const remainingTicks = subdivision - transportPos % subdivision;
        return this._clock.nextTickTime(remainingTicks, now);
      }
    }
    /**
     * Attaches the signal to the tempo control signal so that
     * any changes in the tempo will change the signal in the same
     * ratio.
     *
     * @param signal
     * @param ratio Optionally pass in the ratio between the two signals.
     * 			Otherwise it will be computed based on their current values.
     */
    syncSignal(signal, ratio) {
      const now = this.now();
      let source = this.bpm;
      let sourceValue = 1 / (60 / source.getValueAtTime(now) / this.PPQ);
      let nodes = [];
      if (signal.units === "time") {
        const scaleFactor = 1 / 64 / sourceValue;
        const scaleBefore = new Gain(scaleFactor);
        const reciprocal = new Pow(-1);
        const scaleAfter = new Gain(scaleFactor);
        source.chain(scaleBefore, reciprocal, scaleAfter);
        source = scaleAfter;
        sourceValue = 1 / sourceValue;
        nodes = [scaleBefore, reciprocal, scaleAfter];
      }
      if (!ratio) {
        if (signal.getValueAtTime(now) !== 0) {
          ratio = signal.getValueAtTime(now) / sourceValue;
        } else {
          ratio = 0;
        }
      }
      const ratioSignal = new Gain(ratio);
      source.connect(ratioSignal);
      ratioSignal.connect(signal._param);
      nodes.push(ratioSignal);
      this._syncedSignals.push({
        initial: signal.value,
        nodes,
        signal
      });
      signal.value = 0;
      return this;
    }
    /**
     * Unsyncs a previously synced signal from the transport's control.
     * @see {@link syncSignal}.
     */
    unsyncSignal(signal) {
      for (let i = this._syncedSignals.length - 1; i >= 0; i--) {
        const syncedSignal = this._syncedSignals[i];
        if (syncedSignal.signal === signal) {
          syncedSignal.nodes.forEach((node) => node.dispose());
          syncedSignal.signal.value = syncedSignal.initial;
          this._syncedSignals.splice(i, 1);
        }
      }
      return this;
    }
    /**
     * Clean up.
     */
    dispose() {
      super.dispose();
      this._clock.dispose();
      writable(this, "bpm");
      this._timeline.dispose();
      this._repeatedEvents.dispose();
      return this;
    }
  };
  Emitter.mixin(TransportClass);
  onContextInit((context2) => {
    context2.transport = new TransportClass({ context: context2 });
  });
  onContextClose((context2) => {
    context2.transport.dispose();
  });

  // node_modules/tone/build/esm/source/Source.js
  var Source = class extends ToneAudioNode {
    constructor(options) {
      super(options);
      this.input = void 0;
      this._state = new StateTimeline("stopped");
      this._synced = false;
      this._scheduled = [];
      this._syncedStart = noOp;
      this._syncedStop = noOp;
      this._state.memory = 100;
      this._state.increasing = true;
      this._volume = this.output = new Volume({
        context: this.context,
        mute: options.mute,
        volume: options.volume
      });
      this.volume = this._volume.volume;
      readOnly(this, "volume");
      this.onstop = options.onstop;
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        mute: false,
        onstop: noOp,
        volume: 0
      });
    }
    /**
     * Returns the playback state of the source, either "started" or "stopped".
     * @example
     * const player = new Tone.Player("https://tonejs.github.io/audio/berklee/ahntone_c3.mp3", () => {
     * 	player.start();
     * 	console.log(player.state);
     * }).toDestination();
     */
    get state() {
      if (this._synced) {
        if (this.context.transport.state === "started") {
          return this._state.getValueAtTime(this.context.transport.seconds);
        } else {
          return "stopped";
        }
      } else {
        return this._state.getValueAtTime(this.now());
      }
    }
    /**
     * Mute the output.
     * @example
     * const osc = new Tone.Oscillator().toDestination().start();
     * // mute the output
     * osc.mute = true;
     */
    get mute() {
      return this._volume.mute;
    }
    set mute(mute) {
      this._volume.mute = mute;
    }
    /**
     * Ensure that the scheduled time is not before the current time.
     * Should only be used when scheduled unsynced.
     */
    _clampToCurrentTime(time) {
      if (this._synced) {
        return time;
      } else {
        return Math.max(time, this.context.currentTime);
      }
    }
    /**
     * Start the source at the specified time. If no time is given,
     * start the source now.
     * @param  time When the source should be started.
     * @example
     * const source = new Tone.Oscillator().toDestination();
     * source.start("+0.5"); // starts the source 0.5 seconds from now
     */
    start(time, offset, duration) {
      let computedTime = isUndef(time) && this._synced ? this.context.transport.seconds : this.toSeconds(time);
      computedTime = this._clampToCurrentTime(computedTime);
      if (!this._synced && this._state.getValueAtTime(computedTime) === "started") {
        assert(GT(computedTime, this._state.get(computedTime).time), "Start time must be strictly greater than previous start time");
        this._state.cancel(computedTime);
        this._state.setStateAtTime("started", computedTime);
        this.log("restart", computedTime);
        this.restart(computedTime, offset, duration);
      } else {
        this.log("start", computedTime);
        this._state.setStateAtTime("started", computedTime);
        if (this._synced) {
          const event = this._state.get(computedTime);
          if (event) {
            event.offset = this.toSeconds(defaultArg(offset, 0));
            event.duration = duration ? this.toSeconds(duration) : void 0;
          }
          const sched = this.context.transport.schedule((t) => {
            this._start(t, offset, duration);
          }, computedTime);
          this._scheduled.push(sched);
          if (this.context.transport.state === "started" && this.context.transport.getSecondsAtTime(this.immediate()) > computedTime) {
            this._syncedStart(this.now(), this.context.transport.seconds);
          }
        } else {
          assertContextRunning(this.context);
          this._start(computedTime, offset, duration);
        }
      }
      return this;
    }
    /**
     * Stop the source at the specified time. If no time is given,
     * stop the source now.
     * @param  time When the source should be stopped.
     * @example
     * const source = new Tone.Oscillator().toDestination();
     * source.start();
     * source.stop("+0.5"); // stops the source 0.5 seconds from now
     */
    stop(time) {
      let computedTime = isUndef(time) && this._synced ? this.context.transport.seconds : this.toSeconds(time);
      computedTime = this._clampToCurrentTime(computedTime);
      if (this._state.getValueAtTime(computedTime) === "started" || isDefined(this._state.getNextState("started", computedTime))) {
        this.log("stop", computedTime);
        if (!this._synced) {
          this._stop(computedTime);
        } else {
          const sched = this.context.transport.schedule(this._stop.bind(this), computedTime);
          this._scheduled.push(sched);
        }
        this._state.cancel(computedTime);
        this._state.setStateAtTime("stopped", computedTime);
      }
      return this;
    }
    /**
     * Restart the source.
     */
    restart(time, offset, duration) {
      time = this.toSeconds(time);
      if (this._state.getValueAtTime(time) === "started") {
        this._state.cancel(time);
        this._restart(time, offset, duration);
      }
      return this;
    }
    /**
     * Sync the source to the Transport so that all subsequent
     * calls to `start` and `stop` are synced to the TransportTime
     * instead of the AudioContext time.
     *
     * @example
     * const osc = new Tone.Oscillator().toDestination();
     * // sync the source so that it plays between 0 and 0.3 on the Transport's timeline
     * osc.sync().start(0).stop(0.3);
     * // start the transport.
     * Tone.Transport.start();
     * // set it to loop once a second
     * Tone.Transport.loop = true;
     * Tone.Transport.loopEnd = 1;
     */
    sync() {
      if (!this._synced) {
        this._synced = true;
        this._syncedStart = (time, offset) => {
          if (GT(offset, 0)) {
            const stateEvent = this._state.get(offset);
            if (stateEvent && stateEvent.state === "started" && stateEvent.time !== offset) {
              const startOffset = offset - this.toSeconds(stateEvent.time);
              let duration;
              if (stateEvent.duration) {
                duration = this.toSeconds(stateEvent.duration) - startOffset;
              }
              this._start(time, this.toSeconds(stateEvent.offset) + startOffset, duration);
            }
          }
        };
        this._syncedStop = (time) => {
          const seconds = this.context.transport.getSecondsAtTime(Math.max(time - this.sampleTime, 0));
          if (this._state.getValueAtTime(seconds) === "started") {
            this._stop(time);
          }
        };
        this.context.transport.on("start", this._syncedStart);
        this.context.transport.on("loopStart", this._syncedStart);
        this.context.transport.on("stop", this._syncedStop);
        this.context.transport.on("pause", this._syncedStop);
        this.context.transport.on("loopEnd", this._syncedStop);
      }
      return this;
    }
    /**
     * Unsync the source to the Transport.
     * @see {@link sync}
     */
    unsync() {
      if (this._synced) {
        this.context.transport.off("stop", this._syncedStop);
        this.context.transport.off("pause", this._syncedStop);
        this.context.transport.off("loopEnd", this._syncedStop);
        this.context.transport.off("start", this._syncedStart);
        this.context.transport.off("loopStart", this._syncedStart);
      }
      this._synced = false;
      this._scheduled.forEach((id) => this.context.transport.clear(id));
      this._scheduled = [];
      this._state.cancel(0);
      this._stop(0);
      return this;
    }
    /**
     * Clean up.
     */
    dispose() {
      super.dispose();
      this.onstop = noOp;
      this.unsync();
      this._volume.dispose();
      this._state.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/source/buffer/ToneBufferSource.js
  var ToneBufferSource = class _ToneBufferSource extends OneShotSource {
    constructor() {
      const options = optionsFromArguments(_ToneBufferSource.getDefaults(), arguments, ["url", "onload"]);
      super(options);
      this.name = "ToneBufferSource";
      this._source = this.context.createBufferSource();
      this._internalChannels = [this._source];
      this._sourceStarted = false;
      this._sourceStopped = false;
      connect(this._source, this._gainNode);
      this._source.onended = () => this._stopSource();
      this.playbackRate = new Param({
        context: this.context,
        param: this._source.playbackRate,
        units: "positive",
        value: options.playbackRate
      });
      this.loop = options.loop;
      this.loopStart = options.loopStart;
      this.loopEnd = options.loopEnd;
      this._buffer = new ToneAudioBuffer(options.url, options.onload, options.onerror);
      this._internalChannels.push(this._source);
    }
    static getDefaults() {
      return Object.assign(OneShotSource.getDefaults(), {
        url: new ToneAudioBuffer(),
        loop: false,
        loopEnd: 0,
        loopStart: 0,
        onload: noOp,
        onerror: noOp,
        playbackRate: 1
      });
    }
    /**
     * The fadeIn time of the amplitude envelope.
     */
    get fadeIn() {
      return this._fadeIn;
    }
    set fadeIn(t) {
      this._fadeIn = t;
    }
    /**
     * The fadeOut time of the amplitude envelope.
     */
    get fadeOut() {
      return this._fadeOut;
    }
    set fadeOut(t) {
      this._fadeOut = t;
    }
    /**
     * The curve applied to the fades, either "linear" or "exponential"
     */
    get curve() {
      return this._curve;
    }
    set curve(t) {
      this._curve = t;
    }
    /**
     * Start the buffer
     * @param  time When the player should start.
     * @param  offset The offset from the beginning of the sample to start at.
     * @param  duration How long the sample should play. If no duration is given, it will default to the full length of the sample (minus any offset)
     * @param  gain  The gain to play the buffer back at.
     */
    start(time, offset, duration, gain = 1) {
      assert(this.buffer.loaded, "buffer is either not set or not loaded");
      const computedTime = this.toSeconds(time);
      this._startGain(computedTime, gain);
      if (this.loop) {
        offset = defaultArg(offset, this.loopStart);
      } else {
        offset = defaultArg(offset, 0);
      }
      let computedOffset = Math.max(this.toSeconds(offset), 0);
      if (this.loop) {
        const loopEnd = this.toSeconds(this.loopEnd) || this.buffer.duration;
        const loopStart = this.toSeconds(this.loopStart);
        const loopDuration = loopEnd - loopStart;
        if (GTE(computedOffset, loopEnd)) {
          computedOffset = (computedOffset - loopStart) % loopDuration + loopStart;
        }
        if (EQ(computedOffset, this.buffer.duration)) {
          computedOffset = 0;
        }
      }
      this._source.buffer = this.buffer.get();
      this._source.loopEnd = this.toSeconds(this.loopEnd) || this.buffer.duration;
      if (LT(computedOffset, this.buffer.duration)) {
        this._sourceStarted = true;
        this._source.start(computedTime, computedOffset);
      }
      if (isDefined(duration)) {
        let computedDur = this.toSeconds(duration);
        computedDur = Math.max(computedDur, 0);
        this.stop(computedTime + computedDur);
      }
      return this;
    }
    _stopSource(time) {
      if (!this._sourceStopped && this._sourceStarted) {
        this._sourceStopped = true;
        this._source.stop(this.toSeconds(time));
        this._onended();
      }
    }
    /**
     * If loop is true, the loop will start at this position.
     */
    get loopStart() {
      return this._source.loopStart;
    }
    set loopStart(loopStart) {
      this._source.loopStart = this.toSeconds(loopStart);
    }
    /**
     * If loop is true, the loop will end at this position.
     */
    get loopEnd() {
      return this._source.loopEnd;
    }
    set loopEnd(loopEnd) {
      this._source.loopEnd = this.toSeconds(loopEnd);
    }
    /**
     * The audio buffer belonging to the player.
     */
    get buffer() {
      return this._buffer;
    }
    set buffer(buffer) {
      this._buffer.set(buffer);
    }
    /**
     * If the buffer should loop once it's over.
     */
    get loop() {
      return this._source.loop;
    }
    set loop(loop) {
      this._source.loop = loop;
      if (this._sourceStarted) {
        this.cancelStop();
      }
    }
    /**
     * Clean up.
     */
    dispose() {
      super.dispose();
      this._source.onended = null;
      this._source.disconnect();
      this._buffer.dispose();
      this.playbackRate.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/source/Noise.js
  var BUFFER_LENGTH = 44100 * 5;

  // node_modules/tone/build/esm/source/oscillator/OscillatorInterface.js
  function generateWaveform(instance, length) {
    return __awaiter(this, void 0, void 0, function* () {
      const duration = length / instance.context.sampleRate;
      const context2 = new OfflineContext(1, duration, instance.context.sampleRate);
      const clone = new instance.constructor(Object.assign(instance.get(), {
        // should do 2 iterations
        frequency: 2 / duration,
        // zero out the detune
        detune: 0,
        context: context2
      })).toDestination();
      clone.start(0);
      const buffer = yield context2.render();
      return buffer.getChannelData(0);
    });
  }

  // node_modules/tone/build/esm/source/oscillator/ToneOscillatorNode.js
  var ToneOscillatorNode = class _ToneOscillatorNode extends OneShotSource {
    constructor() {
      const options = optionsFromArguments(_ToneOscillatorNode.getDefaults(), arguments, ["frequency", "type"]);
      super(options);
      this.name = "ToneOscillatorNode";
      this._oscillator = this.context.createOscillator();
      this._internalChannels = [this._oscillator];
      connect(this._oscillator, this._gainNode);
      this.type = options.type;
      this.frequency = new Param({
        context: this.context,
        param: this._oscillator.frequency,
        units: "frequency",
        value: options.frequency
      });
      this.detune = new Param({
        context: this.context,
        param: this._oscillator.detune,
        units: "cents",
        value: options.detune
      });
      readOnly(this, ["frequency", "detune"]);
    }
    static getDefaults() {
      return Object.assign(OneShotSource.getDefaults(), {
        detune: 0,
        frequency: 440,
        type: "sine"
      });
    }
    /**
     * Start the oscillator node at the given time
     * @param  time When to start the oscillator
     */
    start(time) {
      const computedTime = this.toSeconds(time);
      this.log("start", computedTime);
      this._startGain(computedTime);
      this._oscillator.start(computedTime);
      return this;
    }
    _stopSource(time) {
      this._oscillator.stop(time);
    }
    /**
     * Sets an arbitrary custom periodic waveform given a PeriodicWave.
     * @param  periodicWave PeriodicWave should be created with context.createPeriodicWave
     */
    setPeriodicWave(periodicWave) {
      this._oscillator.setPeriodicWave(periodicWave);
      return this;
    }
    /**
     * The oscillator type. Either 'sine', 'sawtooth', 'square', or 'triangle'
     */
    get type() {
      return this._oscillator.type;
    }
    set type(type) {
      this._oscillator.type = type;
    }
    /**
     * Clean up.
     */
    dispose() {
      super.dispose();
      if (this.state === "started") {
        this.stop();
      }
      this._oscillator.disconnect();
      this.frequency.dispose();
      this.detune.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/source/oscillator/Oscillator.js
  var Oscillator = class _Oscillator extends Source {
    constructor() {
      const options = optionsFromArguments(_Oscillator.getDefaults(), arguments, ["frequency", "type"]);
      super(options);
      this.name = "Oscillator";
      this._oscillator = null;
      this.frequency = new Signal({
        context: this.context,
        units: "frequency",
        value: options.frequency
      });
      readOnly(this, "frequency");
      this.detune = new Signal({
        context: this.context,
        units: "cents",
        value: options.detune
      });
      readOnly(this, "detune");
      this._partials = options.partials;
      this._partialCount = options.partialCount;
      this._type = options.type;
      if (options.partialCount && options.type !== "custom") {
        this._type = this.baseType + options.partialCount.toString();
      }
      this.phase = options.phase;
    }
    static getDefaults() {
      return Object.assign(Source.getDefaults(), {
        detune: 0,
        frequency: 440,
        partialCount: 0,
        partials: [],
        phase: 0,
        type: "sine"
      });
    }
    /**
     * start the oscillator
     */
    _start(time) {
      const computedTime = this.toSeconds(time);
      const oscillator = new ToneOscillatorNode({
        context: this.context,
        onended: () => this.onstop(this)
      });
      this._oscillator = oscillator;
      if (this._wave) {
        this._oscillator.setPeriodicWave(this._wave);
      } else {
        this._oscillator.type = this._type;
      }
      this._oscillator.connect(this.output);
      this.frequency.connect(this._oscillator.frequency);
      this.detune.connect(this._oscillator.detune);
      this._oscillator.start(computedTime);
    }
    /**
     * stop the oscillator
     */
    _stop(time) {
      const computedTime = this.toSeconds(time);
      if (this._oscillator) {
        this._oscillator.stop(computedTime);
      }
    }
    /**
     * Restart the oscillator. Does not stop the oscillator, but instead
     * just cancels any scheduled 'stop' from being invoked.
     */
    _restart(time) {
      const computedTime = this.toSeconds(time);
      this.log("restart", computedTime);
      if (this._oscillator) {
        this._oscillator.cancelStop();
      }
      this._state.cancel(computedTime);
      return this;
    }
    /**
     * Sync the signal to the Transport's bpm. Any changes to the transports bpm,
     * will also affect the oscillators frequency.
     * @example
     * const osc = new Tone.Oscillator().toDestination().start();
     * osc.frequency.value = 440;
     * // the ratio between the bpm and the frequency will be maintained
     * osc.syncFrequency();
     * // double the tempo
     * Tone.Transport.bpm.value *= 2;
     * // the frequency of the oscillator is doubled to 880
     */
    syncFrequency() {
      this.context.transport.syncSignal(this.frequency);
      return this;
    }
    /**
     * Unsync the oscillator's frequency from the Transport.
     * @see {@link syncFrequency}
     */
    unsyncFrequency() {
      this.context.transport.unsyncSignal(this.frequency);
      return this;
    }
    /**
     * Get a cached periodic wave. Avoids having to recompute
     * the oscillator values when they have already been computed
     * with the same values.
     */
    _getCachedPeriodicWave() {
      if (this._type === "custom") {
        const oscProps = _Oscillator._periodicWaveCache.find((description) => {
          return description.phase === this._phase && deepEquals(description.partials, this._partials);
        });
        return oscProps;
      } else {
        const oscProps = _Oscillator._periodicWaveCache.find((description) => {
          return description.type === this._type && description.phase === this._phase;
        });
        this._partialCount = oscProps ? oscProps.partialCount : this._partialCount;
        return oscProps;
      }
    }
    get type() {
      return this._type;
    }
    set type(type) {
      this._type = type;
      const isBasicType = ["sine", "square", "sawtooth", "triangle"].indexOf(type) !== -1;
      if (this._phase === 0 && isBasicType) {
        this._wave = void 0;
        this._partialCount = 0;
        if (this._oscillator !== null) {
          this._oscillator.type = type;
        }
      } else {
        const cache = this._getCachedPeriodicWave();
        if (isDefined(cache)) {
          const { partials, wave } = cache;
          this._wave = wave;
          this._partials = partials;
          if (this._oscillator !== null) {
            this._oscillator.setPeriodicWave(this._wave);
          }
        } else {
          const [real, imag] = this._getRealImaginary(type, this._phase);
          const periodicWave = this.context.createPeriodicWave(real, imag);
          this._wave = periodicWave;
          if (this._oscillator !== null) {
            this._oscillator.setPeriodicWave(this._wave);
          }
          _Oscillator._periodicWaveCache.push({
            imag,
            partialCount: this._partialCount,
            partials: this._partials,
            phase: this._phase,
            real,
            type: this._type,
            wave: this._wave
          });
          if (_Oscillator._periodicWaveCache.length > 100) {
            _Oscillator._periodicWaveCache.shift();
          }
        }
      }
    }
    get baseType() {
      return this._type.replace(this.partialCount.toString(), "");
    }
    set baseType(baseType) {
      if (this.partialCount && this._type !== "custom" && baseType !== "custom") {
        this.type = baseType + this.partialCount;
      } else {
        this.type = baseType;
      }
    }
    get partialCount() {
      return this._partialCount;
    }
    set partialCount(p) {
      assertRange(p, 0);
      let type = this._type;
      const partial = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);
      if (partial) {
        type = partial[1];
      }
      if (this._type !== "custom") {
        if (p === 0) {
          this.type = type;
        } else {
          this.type = type + p.toString();
        }
      } else {
        const fullPartials = new Float32Array(p);
        this._partials.forEach((v, i) => fullPartials[i] = v);
        this._partials = Array.from(fullPartials);
        this.type = this._type;
      }
    }
    /**
     * Returns the real and imaginary components based
     * on the oscillator type.
     * @returns [real: Float32Array, imaginary: Float32Array]
     */
    _getRealImaginary(type, phase) {
      const fftSize = 4096;
      let periodicWaveSize = fftSize / 2;
      const real = new Float32Array(periodicWaveSize);
      const imag = new Float32Array(periodicWaveSize);
      let partialCount = 1;
      if (type === "custom") {
        partialCount = this._partials.length + 1;
        this._partialCount = this._partials.length;
        periodicWaveSize = partialCount;
        if (this._partials.length === 0) {
          return [real, imag];
        }
      } else {
        const partial = /^(sine|triangle|square|sawtooth)(\d+)$/.exec(type);
        if (partial) {
          partialCount = parseInt(partial[2], 10) + 1;
          this._partialCount = parseInt(partial[2], 10);
          type = partial[1];
          partialCount = Math.max(partialCount, 2);
          periodicWaveSize = partialCount;
        } else {
          this._partialCount = 0;
        }
        this._partials = [];
      }
      for (let n = 1; n < periodicWaveSize; ++n) {
        const piFactor = 2 / (n * Math.PI);
        let b;
        switch (type) {
          case "sine":
            b = n <= partialCount ? 1 : 0;
            this._partials[n - 1] = b;
            break;
          case "square":
            b = n & 1 ? 2 * piFactor : 0;
            this._partials[n - 1] = b;
            break;
          case "sawtooth":
            b = piFactor * (n & 1 ? 1 : -1);
            this._partials[n - 1] = b;
            break;
          case "triangle":
            if (n & 1) {
              b = 2 * (piFactor * piFactor) * (n - 1 >> 1 & 1 ? -1 : 1);
            } else {
              b = 0;
            }
            this._partials[n - 1] = b;
            break;
          case "custom":
            b = this._partials[n - 1];
            break;
          default:
            throw new TypeError("Oscillator: invalid type: " + type);
        }
        if (b !== 0) {
          real[n] = -b * Math.sin(phase * n);
          imag[n] = b * Math.cos(phase * n);
        } else {
          real[n] = 0;
          imag[n] = 0;
        }
      }
      return [real, imag];
    }
    /**
     * Compute the inverse FFT for a given phase.
     */
    _inverseFFT(real, imag, phase) {
      let sum = 0;
      const len = real.length;
      for (let i = 0; i < len; i++) {
        sum += real[i] * Math.cos(i * phase) + imag[i] * Math.sin(i * phase);
      }
      return sum;
    }
    /**
     * Returns the initial value of the oscillator when stopped.
     * E.g. a "sine" oscillator with phase = 90 would return an initial value of -1.
     */
    getInitialValue() {
      const [real, imag] = this._getRealImaginary(this._type, 0);
      let maxValue = 0;
      const twoPi = Math.PI * 2;
      const testPositions = 32;
      for (let i = 0; i < testPositions; i++) {
        maxValue = Math.max(this._inverseFFT(real, imag, i / testPositions * twoPi), maxValue);
      }
      return clamp(-this._inverseFFT(real, imag, this._phase) / maxValue, -1, 1);
    }
    get partials() {
      return this._partials.slice(0, this.partialCount);
    }
    set partials(partials) {
      this._partials = partials;
      this._partialCount = this._partials.length;
      if (partials.length) {
        this.type = "custom";
      }
    }
    get phase() {
      return this._phase * (180 / Math.PI);
    }
    set phase(phase) {
      this._phase = phase * Math.PI / 180;
      this.type = this._type;
    }
    asArray() {
      return __awaiter(this, arguments, void 0, function* (length = 1024) {
        return generateWaveform(this, length);
      });
    }
    dispose() {
      super.dispose();
      if (this._oscillator !== null) {
        this._oscillator.dispose();
      }
      this._wave = void 0;
      this.frequency.dispose();
      this.detune.dispose();
      return this;
    }
  };
  Oscillator._periodicWaveCache = [];

  // node_modules/tone/build/esm/signal/AudioToGain.js
  var AudioToGain = class extends SignalOperator {
    constructor() {
      super(...arguments);
      this.name = "AudioToGain";
      this._norm = new WaveShaper({
        context: this.context,
        mapping: (x) => (x + 1) / 2
      });
      this.input = this._norm;
      this.output = this._norm;
    }
    /**
     * clean up
     */
    dispose() {
      super.dispose();
      this._norm.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/signal/Multiply.js
  var Multiply = class _Multiply extends Signal {
    constructor() {
      const options = optionsFromArguments(_Multiply.getDefaults(), arguments, ["value"]);
      super(options);
      this.name = "Multiply";
      this.override = false;
      this._mult = this.input = this.output = new Gain({
        context: this.context,
        minValue: options.minValue,
        maxValue: options.maxValue
      });
      this.factor = this._param = this._mult.gain;
      this.factor.setValueAtTime(options.value, 0);
    }
    static getDefaults() {
      return Object.assign(Signal.getDefaults(), {
        value: 0
      });
    }
    dispose() {
      super.dispose();
      this._mult.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/source/oscillator/AMOscillator.js
  var AMOscillator = class _AMOscillator extends Source {
    constructor() {
      const options = optionsFromArguments(_AMOscillator.getDefaults(), arguments, ["frequency", "type", "modulationType"]);
      super(options);
      this.name = "AMOscillator";
      this._modulationScale = new AudioToGain({ context: this.context });
      this._modulationNode = new Gain({
        context: this.context
      });
      this._carrier = new Oscillator({
        context: this.context,
        detune: options.detune,
        frequency: options.frequency,
        onstop: () => this.onstop(this),
        phase: options.phase,
        type: options.type
      });
      this.frequency = this._carrier.frequency, this.detune = this._carrier.detune;
      this._modulator = new Oscillator({
        context: this.context,
        phase: options.phase,
        type: options.modulationType
      });
      this.harmonicity = new Multiply({
        context: this.context,
        units: "positive",
        value: options.harmonicity
      });
      this.frequency.chain(this.harmonicity, this._modulator.frequency);
      this._modulator.chain(this._modulationScale, this._modulationNode.gain);
      this._carrier.chain(this._modulationNode, this.output);
      readOnly(this, ["frequency", "detune", "harmonicity"]);
    }
    static getDefaults() {
      return Object.assign(Oscillator.getDefaults(), {
        harmonicity: 1,
        modulationType: "square"
      });
    }
    /**
     * start the oscillator
     */
    _start(time) {
      this._modulator.start(time);
      this._carrier.start(time);
    }
    /**
     * stop the oscillator
     */
    _stop(time) {
      this._modulator.stop(time);
      this._carrier.stop(time);
    }
    _restart(time) {
      this._modulator.restart(time);
      this._carrier.restart(time);
    }
    /**
     * The type of the carrier oscillator
     */
    get type() {
      return this._carrier.type;
    }
    set type(type) {
      this._carrier.type = type;
    }
    get baseType() {
      return this._carrier.baseType;
    }
    set baseType(baseType) {
      this._carrier.baseType = baseType;
    }
    get partialCount() {
      return this._carrier.partialCount;
    }
    set partialCount(partialCount) {
      this._carrier.partialCount = partialCount;
    }
    /**
     * The type of the modulator oscillator
     */
    get modulationType() {
      return this._modulator.type;
    }
    set modulationType(type) {
      this._modulator.type = type;
    }
    get phase() {
      return this._carrier.phase;
    }
    set phase(phase) {
      this._carrier.phase = phase;
      this._modulator.phase = phase;
    }
    get partials() {
      return this._carrier.partials;
    }
    set partials(partials) {
      this._carrier.partials = partials;
    }
    asArray() {
      return __awaiter(this, arguments, void 0, function* (length = 1024) {
        return generateWaveform(this, length);
      });
    }
    /**
     * Clean up.
     */
    dispose() {
      super.dispose();
      this.frequency.dispose();
      this.detune.dispose();
      this.harmonicity.dispose();
      this._carrier.dispose();
      this._modulator.dispose();
      this._modulationNode.dispose();
      this._modulationScale.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/source/oscillator/FMOscillator.js
  var FMOscillator = class _FMOscillator extends Source {
    constructor() {
      const options = optionsFromArguments(_FMOscillator.getDefaults(), arguments, ["frequency", "type", "modulationType"]);
      super(options);
      this.name = "FMOscillator";
      this._modulationNode = new Gain({
        context: this.context,
        gain: 0
      });
      this._carrier = new Oscillator({
        context: this.context,
        detune: options.detune,
        frequency: 0,
        onstop: () => this.onstop(this),
        phase: options.phase,
        type: options.type
      });
      this.detune = this._carrier.detune;
      this.frequency = new Signal({
        context: this.context,
        units: "frequency",
        value: options.frequency
      });
      this._modulator = new Oscillator({
        context: this.context,
        phase: options.phase,
        type: options.modulationType
      });
      this.harmonicity = new Multiply({
        context: this.context,
        units: "positive",
        value: options.harmonicity
      });
      this.modulationIndex = new Multiply({
        context: this.context,
        units: "positive",
        value: options.modulationIndex
      });
      this.frequency.connect(this._carrier.frequency);
      this.frequency.chain(this.harmonicity, this._modulator.frequency);
      this.frequency.chain(this.modulationIndex, this._modulationNode);
      this._modulator.connect(this._modulationNode.gain);
      this._modulationNode.connect(this._carrier.frequency);
      this._carrier.connect(this.output);
      this.detune.connect(this._modulator.detune);
      readOnly(this, [
        "modulationIndex",
        "frequency",
        "detune",
        "harmonicity"
      ]);
    }
    static getDefaults() {
      return Object.assign(Oscillator.getDefaults(), {
        harmonicity: 1,
        modulationIndex: 2,
        modulationType: "square"
      });
    }
    /**
     * start the oscillator
     */
    _start(time) {
      this._modulator.start(time);
      this._carrier.start(time);
    }
    /**
     * stop the oscillator
     */
    _stop(time) {
      this._modulator.stop(time);
      this._carrier.stop(time);
    }
    _restart(time) {
      this._modulator.restart(time);
      this._carrier.restart(time);
      return this;
    }
    get type() {
      return this._carrier.type;
    }
    set type(type) {
      this._carrier.type = type;
    }
    get baseType() {
      return this._carrier.baseType;
    }
    set baseType(baseType) {
      this._carrier.baseType = baseType;
    }
    get partialCount() {
      return this._carrier.partialCount;
    }
    set partialCount(partialCount) {
      this._carrier.partialCount = partialCount;
    }
    /**
     * The type of the modulator oscillator
     */
    get modulationType() {
      return this._modulator.type;
    }
    set modulationType(type) {
      this._modulator.type = type;
    }
    get phase() {
      return this._carrier.phase;
    }
    set phase(phase) {
      this._carrier.phase = phase;
      this._modulator.phase = phase;
    }
    get partials() {
      return this._carrier.partials;
    }
    set partials(partials) {
      this._carrier.partials = partials;
    }
    asArray() {
      return __awaiter(this, arguments, void 0, function* (length = 1024) {
        return generateWaveform(this, length);
      });
    }
    /**
     * Clean up.
     */
    dispose() {
      super.dispose();
      this.frequency.dispose();
      this.harmonicity.dispose();
      this._carrier.dispose();
      this._modulator.dispose();
      this._modulationNode.dispose();
      this.modulationIndex.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/source/oscillator/PulseOscillator.js
  var PulseOscillator = class _PulseOscillator extends Source {
    constructor() {
      const options = optionsFromArguments(_PulseOscillator.getDefaults(), arguments, ["frequency", "width"]);
      super(options);
      this.name = "PulseOscillator";
      this._widthGate = new Gain({
        context: this.context,
        gain: 0
      });
      this._thresh = new WaveShaper({
        context: this.context,
        mapping: (val) => val <= 0 ? -1 : 1
      });
      this.width = new Signal({
        context: this.context,
        units: "audioRange",
        value: options.width
      });
      this._triangle = new Oscillator({
        context: this.context,
        detune: options.detune,
        frequency: options.frequency,
        onstop: () => this.onstop(this),
        phase: options.phase,
        type: "triangle"
      });
      this.frequency = this._triangle.frequency;
      this.detune = this._triangle.detune;
      this._triangle.chain(this._thresh, this.output);
      this.width.chain(this._widthGate, this._thresh);
      readOnly(this, ["width", "frequency", "detune"]);
    }
    static getDefaults() {
      return Object.assign(Source.getDefaults(), {
        detune: 0,
        frequency: 440,
        phase: 0,
        type: "pulse",
        width: 0.2
      });
    }
    /**
     * start the oscillator
     */
    _start(time) {
      time = this.toSeconds(time);
      this._triangle.start(time);
      this._widthGate.gain.setValueAtTime(1, time);
    }
    /**
     * stop the oscillator
     */
    _stop(time) {
      time = this.toSeconds(time);
      this._triangle.stop(time);
      this._widthGate.gain.cancelScheduledValues(time);
      this._widthGate.gain.setValueAtTime(0, time);
    }
    _restart(time) {
      this._triangle.restart(time);
      this._widthGate.gain.cancelScheduledValues(time);
      this._widthGate.gain.setValueAtTime(1, time);
    }
    /**
     * The phase of the oscillator in degrees.
     */
    get phase() {
      return this._triangle.phase;
    }
    set phase(phase) {
      this._triangle.phase = phase;
    }
    /**
     * The type of the oscillator. Always returns "pulse".
     */
    get type() {
      return "pulse";
    }
    /**
     * The baseType of the oscillator. Always returns "pulse".
     */
    get baseType() {
      return "pulse";
    }
    /**
     * The partials of the waveform. Cannot set partials for this waveform type
     */
    get partials() {
      return [];
    }
    /**
     * No partials for this waveform type.
     */
    get partialCount() {
      return 0;
    }
    /**
     * *Internal use* The carrier oscillator type is fed through the
     * waveshaper node to create the pulse. Using different carrier oscillators
     * changes oscillator's behavior.
     */
    set carrierType(type) {
      this._triangle.type = type;
    }
    asArray() {
      return __awaiter(this, arguments, void 0, function* (length = 1024) {
        return generateWaveform(this, length);
      });
    }
    /**
     * Clean up method.
     */
    dispose() {
      super.dispose();
      this._triangle.dispose();
      this.width.dispose();
      this._widthGate.dispose();
      this._thresh.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/source/oscillator/FatOscillator.js
  var FatOscillator = class _FatOscillator extends Source {
    constructor() {
      const options = optionsFromArguments(_FatOscillator.getDefaults(), arguments, ["frequency", "type", "spread"]);
      super(options);
      this.name = "FatOscillator";
      this._oscillators = [];
      this.frequency = new Signal({
        context: this.context,
        units: "frequency",
        value: options.frequency
      });
      this.detune = new Signal({
        context: this.context,
        units: "cents",
        value: options.detune
      });
      this._spread = options.spread;
      this._type = options.type;
      this._phase = options.phase;
      this._partials = options.partials;
      this._partialCount = options.partialCount;
      this.count = options.count;
      readOnly(this, ["frequency", "detune"]);
    }
    static getDefaults() {
      return Object.assign(Oscillator.getDefaults(), {
        count: 3,
        spread: 20,
        type: "sawtooth"
      });
    }
    /**
     * start the oscillator
     */
    _start(time) {
      time = this.toSeconds(time);
      this._forEach((osc) => osc.start(time));
    }
    /**
     * stop the oscillator
     */
    _stop(time) {
      time = this.toSeconds(time);
      this._forEach((osc) => osc.stop(time));
    }
    _restart(time) {
      this._forEach((osc) => osc.restart(time));
    }
    /**
     * Iterate over all of the oscillators
     */
    _forEach(iterator) {
      for (let i = 0; i < this._oscillators.length; i++) {
        iterator(this._oscillators[i], i);
      }
    }
    /**
     * The type of the oscillator
     */
    get type() {
      return this._type;
    }
    set type(type) {
      this._type = type;
      this._forEach((osc) => osc.type = type);
    }
    /**
     * The detune spread between the oscillators. If "count" is
     * set to 3 oscillators and the "spread" is set to 40,
     * the three oscillators would be detuned like this: [-20, 0, 20]
     * for a total detune spread of 40 cents.
     * @example
     * const fatOsc = new Tone.FatOscillator().toDestination().start();
     * fatOsc.spread = 70;
     */
    get spread() {
      return this._spread;
    }
    set spread(spread) {
      this._spread = spread;
      if (this._oscillators.length > 1) {
        const start2 = -spread / 2;
        const step = spread / (this._oscillators.length - 1);
        this._forEach((osc, i) => osc.detune.value = start2 + step * i);
      }
    }
    /**
     * The number of detuned oscillators. Must be an integer greater than 1.
     * @example
     * const fatOsc = new Tone.FatOscillator("C#3", "sawtooth").toDestination().start();
     * // use 4 sawtooth oscillators
     * fatOsc.count = 4;
     */
    get count() {
      return this._oscillators.length;
    }
    set count(count) {
      assertRange(count, 1);
      if (this._oscillators.length !== count) {
        this._forEach((osc) => osc.dispose());
        this._oscillators = [];
        for (let i = 0; i < count; i++) {
          const osc = new Oscillator({
            context: this.context,
            volume: -6 - count * 1.1,
            type: this._type,
            phase: this._phase + i / count * 360,
            partialCount: this._partialCount,
            onstop: i === 0 ? () => this.onstop(this) : noOp
          });
          if (this.type === "custom") {
            osc.partials = this._partials;
          }
          this.frequency.connect(osc.frequency);
          this.detune.connect(osc.detune);
          osc.detune.overridden = false;
          osc.connect(this.output);
          this._oscillators[i] = osc;
        }
        this.spread = this._spread;
        if (this.state === "started") {
          this._forEach((osc) => osc.start());
        }
      }
    }
    get phase() {
      return this._phase;
    }
    set phase(phase) {
      this._phase = phase;
      this._forEach((osc, i) => osc.phase = this._phase + i / this.count * 360);
    }
    get baseType() {
      return this._oscillators[0].baseType;
    }
    set baseType(baseType) {
      this._forEach((osc) => osc.baseType = baseType);
      this._type = this._oscillators[0].type;
    }
    get partials() {
      return this._oscillators[0].partials;
    }
    set partials(partials) {
      this._partials = partials;
      this._partialCount = this._partials.length;
      if (partials.length) {
        this._type = "custom";
        this._forEach((osc) => osc.partials = partials);
      }
    }
    get partialCount() {
      return this._oscillators[0].partialCount;
    }
    set partialCount(partialCount) {
      this._partialCount = partialCount;
      this._forEach((osc) => osc.partialCount = partialCount);
      this._type = this._oscillators[0].type;
    }
    asArray() {
      return __awaiter(this, arguments, void 0, function* (length = 1024) {
        return generateWaveform(this, length);
      });
    }
    /**
     * Clean up.
     */
    dispose() {
      super.dispose();
      this.frequency.dispose();
      this.detune.dispose();
      this._forEach((osc) => osc.dispose());
      return this;
    }
  };

  // node_modules/tone/build/esm/source/oscillator/PWMOscillator.js
  var PWMOscillator = class _PWMOscillator extends Source {
    constructor() {
      const options = optionsFromArguments(_PWMOscillator.getDefaults(), arguments, ["frequency", "modulationFrequency"]);
      super(options);
      this.name = "PWMOscillator";
      this.sourceType = "pwm";
      this._scale = new Multiply({
        context: this.context,
        value: 2
      });
      this._pulse = new PulseOscillator({
        context: this.context,
        frequency: options.modulationFrequency
      });
      this._pulse.carrierType = "sine";
      this.modulationFrequency = this._pulse.frequency;
      this._modulator = new Oscillator({
        context: this.context,
        detune: options.detune,
        frequency: options.frequency,
        onstop: () => this.onstop(this),
        phase: options.phase
      });
      this.frequency = this._modulator.frequency;
      this.detune = this._modulator.detune;
      this._modulator.chain(this._scale, this._pulse.width);
      this._pulse.connect(this.output);
      readOnly(this, ["modulationFrequency", "frequency", "detune"]);
    }
    static getDefaults() {
      return Object.assign(Source.getDefaults(), {
        detune: 0,
        frequency: 440,
        modulationFrequency: 0.4,
        phase: 0,
        type: "pwm"
      });
    }
    /**
     * start the oscillator
     */
    _start(time) {
      time = this.toSeconds(time);
      this._modulator.start(time);
      this._pulse.start(time);
    }
    /**
     * stop the oscillator
     */
    _stop(time) {
      time = this.toSeconds(time);
      this._modulator.stop(time);
      this._pulse.stop(time);
    }
    /**
     * restart the oscillator
     */
    _restart(time) {
      this._modulator.restart(time);
      this._pulse.restart(time);
    }
    /**
     * The type of the oscillator. Always returns "pwm".
     */
    get type() {
      return "pwm";
    }
    /**
     * The baseType of the oscillator. Always returns "pwm".
     */
    get baseType() {
      return "pwm";
    }
    /**
     * The partials of the waveform. Cannot set partials for this waveform type
     */
    get partials() {
      return [];
    }
    /**
     * No partials for this waveform type.
     */
    get partialCount() {
      return 0;
    }
    /**
     * The phase of the oscillator in degrees.
     */
    get phase() {
      return this._modulator.phase;
    }
    set phase(phase) {
      this._modulator.phase = phase;
    }
    asArray() {
      return __awaiter(this, arguments, void 0, function* (length = 1024) {
        return generateWaveform(this, length);
      });
    }
    /**
     * Clean up.
     */
    dispose() {
      super.dispose();
      this._pulse.dispose();
      this._scale.dispose();
      this._modulator.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/source/oscillator/OmniOscillator.js
  var OmniOscillatorSourceMap = {
    am: AMOscillator,
    fat: FatOscillator,
    fm: FMOscillator,
    oscillator: Oscillator,
    pulse: PulseOscillator,
    pwm: PWMOscillator
  };
  var OmniOscillator = class _OmniOscillator extends Source {
    constructor() {
      const options = optionsFromArguments(_OmniOscillator.getDefaults(), arguments, ["frequency", "type"]);
      super(options);
      this.name = "OmniOscillator";
      this.frequency = new Signal({
        context: this.context,
        units: "frequency",
        value: options.frequency
      });
      this.detune = new Signal({
        context: this.context,
        units: "cents",
        value: options.detune
      });
      readOnly(this, ["frequency", "detune"]);
      this.set(options);
    }
    static getDefaults() {
      return Object.assign(Oscillator.getDefaults(), FMOscillator.getDefaults(), AMOscillator.getDefaults(), FatOscillator.getDefaults(), PulseOscillator.getDefaults(), PWMOscillator.getDefaults());
    }
    /**
     * start the oscillator
     */
    _start(time) {
      this._oscillator.start(time);
    }
    /**
     * start the oscillator
     */
    _stop(time) {
      this._oscillator.stop(time);
    }
    _restart(time) {
      this._oscillator.restart(time);
      return this;
    }
    /**
     * The type of the oscillator. Can be any of the basic types: sine, square, triangle, sawtooth. Or
     * prefix the basic types with "fm", "am", or "fat" to use the FMOscillator, AMOscillator or FatOscillator
     * types. The oscillator could also be set to "pwm" or "pulse". All of the parameters of the
     * oscillator's class are accessible when the oscillator is set to that type, but throws an error
     * when it's not.
     * @example
     * const omniOsc = new Tone.OmniOscillator().toDestination().start();
     * omniOsc.type = "pwm";
     * // modulationFrequency is parameter which is available
     * // only when the type is "pwm".
     * omniOsc.modulationFrequency.value = 0.5;
     */
    get type() {
      let prefix = "";
      if (["am", "fm", "fat"].some((p) => this._sourceType === p)) {
        prefix = this._sourceType;
      }
      return prefix + this._oscillator.type;
    }
    set type(type) {
      if (type.substr(0, 2) === "fm") {
        this._createNewOscillator("fm");
        this._oscillator = this._oscillator;
        this._oscillator.type = type.substr(2);
      } else if (type.substr(0, 2) === "am") {
        this._createNewOscillator("am");
        this._oscillator = this._oscillator;
        this._oscillator.type = type.substr(2);
      } else if (type.substr(0, 3) === "fat") {
        this._createNewOscillator("fat");
        this._oscillator = this._oscillator;
        this._oscillator.type = type.substr(3);
      } else if (type === "pwm") {
        this._createNewOscillator("pwm");
        this._oscillator = this._oscillator;
      } else if (type === "pulse") {
        this._createNewOscillator("pulse");
      } else {
        this._createNewOscillator("oscillator");
        this._oscillator = this._oscillator;
        this._oscillator.type = type;
      }
    }
    /**
     * The value is an empty array when the type is not "custom".
     * This is not available on "pwm" and "pulse" oscillator types.
     * @see {@link Oscillator.partials}
     */
    get partials() {
      return this._oscillator.partials;
    }
    set partials(partials) {
      if (!this._getOscType(this._oscillator, "pulse") && !this._getOscType(this._oscillator, "pwm")) {
        this._oscillator.partials = partials;
      }
    }
    get partialCount() {
      return this._oscillator.partialCount;
    }
    set partialCount(partialCount) {
      if (!this._getOscType(this._oscillator, "pulse") && !this._getOscType(this._oscillator, "pwm")) {
        this._oscillator.partialCount = partialCount;
      }
    }
    set(props) {
      if (Reflect.has(props, "type") && props.type) {
        this.type = props.type;
      }
      super.set(props);
      return this;
    }
    /**
     * connect the oscillator to the frequency and detune signals
     */
    _createNewOscillator(oscType) {
      if (oscType !== this._sourceType) {
        this._sourceType = oscType;
        const OscConstructor = OmniOscillatorSourceMap[oscType];
        const now = this.now();
        if (this._oscillator) {
          const oldOsc = this._oscillator;
          oldOsc.stop(now);
          this.context.setTimeout(() => oldOsc.dispose(), this.blockTime);
        }
        this._oscillator = new OscConstructor({
          context: this.context
        });
        this.frequency.connect(this._oscillator.frequency);
        this.detune.connect(this._oscillator.detune);
        this._oscillator.connect(this.output);
        this._oscillator.onstop = () => this.onstop(this);
        if (this.state === "started") {
          this._oscillator.start(now);
        }
      }
    }
    get phase() {
      return this._oscillator.phase;
    }
    set phase(phase) {
      this._oscillator.phase = phase;
    }
    /**
     * The source type of the oscillator.
     * @example
     * const omniOsc = new Tone.OmniOscillator(440, "fmsquare");
     * console.log(omniOsc.sourceType); // 'fm'
     */
    get sourceType() {
      return this._sourceType;
    }
    set sourceType(sType) {
      let baseType = "sine";
      if (this._oscillator.type !== "pwm" && this._oscillator.type !== "pulse") {
        baseType = this._oscillator.type;
      }
      if (sType === "fm") {
        this.type = "fm" + baseType;
      } else if (sType === "am") {
        this.type = "am" + baseType;
      } else if (sType === "fat") {
        this.type = "fat" + baseType;
      } else if (sType === "oscillator") {
        this.type = baseType;
      } else if (sType === "pulse") {
        this.type = "pulse";
      } else if (sType === "pwm") {
        this.type = "pwm";
      }
    }
    _getOscType(osc, sourceType) {
      return osc instanceof OmniOscillatorSourceMap[sourceType];
    }
    /**
     * The base type of the oscillator.
     * @see {@link Oscillator.baseType}
     * @example
     * const omniOsc = new Tone.OmniOscillator(440, "fmsquare4");
     * console.log(omniOsc.sourceType, omniOsc.baseType, omniOsc.partialCount);
     */
    get baseType() {
      return this._oscillator.baseType;
    }
    set baseType(baseType) {
      if (!this._getOscType(this._oscillator, "pulse") && !this._getOscType(this._oscillator, "pwm") && baseType !== "pulse" && baseType !== "pwm") {
        this._oscillator.baseType = baseType;
      }
    }
    /**
     * The width of the oscillator when sourceType === "pulse".
     * @see {@link PWMOscillator}
     */
    get width() {
      if (this._getOscType(this._oscillator, "pulse")) {
        return this._oscillator.width;
      } else {
        return void 0;
      }
    }
    /**
     * The number of detuned oscillators when sourceType === "fat".
     * @see {@link FatOscillator.count}
     */
    get count() {
      if (this._getOscType(this._oscillator, "fat")) {
        return this._oscillator.count;
      } else {
        return void 0;
      }
    }
    set count(count) {
      if (this._getOscType(this._oscillator, "fat") && isNumber(count)) {
        this._oscillator.count = count;
      }
    }
    /**
     * The detune spread between the oscillators when sourceType === "fat".
     * @see {@link FatOscillator.count}
     */
    get spread() {
      if (this._getOscType(this._oscillator, "fat")) {
        return this._oscillator.spread;
      } else {
        return void 0;
      }
    }
    set spread(spread) {
      if (this._getOscType(this._oscillator, "fat") && isNumber(spread)) {
        this._oscillator.spread = spread;
      }
    }
    /**
     * The type of the modulator oscillator. Only if the oscillator is set to "am" or "fm" types.
     * @see {@link AMOscillator} or {@link FMOscillator}
     */
    get modulationType() {
      if (this._getOscType(this._oscillator, "fm") || this._getOscType(this._oscillator, "am")) {
        return this._oscillator.modulationType;
      } else {
        return void 0;
      }
    }
    set modulationType(mType) {
      if ((this._getOscType(this._oscillator, "fm") || this._getOscType(this._oscillator, "am")) && isString(mType)) {
        this._oscillator.modulationType = mType;
      }
    }
    /**
     * The modulation index when the sourceType === "fm"
     * @see {@link FMOscillator}.
     */
    get modulationIndex() {
      if (this._getOscType(this._oscillator, "fm")) {
        return this._oscillator.modulationIndex;
      } else {
        return void 0;
      }
    }
    /**
     * Harmonicity is the frequency ratio between the carrier and the modulator oscillators.
     * @see {@link AMOscillator} or {@link FMOscillator}
     */
    get harmonicity() {
      if (this._getOscType(this._oscillator, "fm") || this._getOscType(this._oscillator, "am")) {
        return this._oscillator.harmonicity;
      } else {
        return void 0;
      }
    }
    /**
     * The modulationFrequency Signal of the oscillator when sourceType === "pwm"
     * see {@link PWMOscillator}
     * @min 0.1
     * @max 5
     */
    get modulationFrequency() {
      if (this._getOscType(this._oscillator, "pwm")) {
        return this._oscillator.modulationFrequency;
      } else {
        return void 0;
      }
    }
    asArray() {
      return __awaiter(this, arguments, void 0, function* (length = 1024) {
        return generateWaveform(this, length);
      });
    }
    dispose() {
      super.dispose();
      this.detune.dispose();
      this.frequency.dispose();
      this._oscillator.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/core/util/Decorator.js
  function range(min, max = Infinity) {
    const valueMap = /* @__PURE__ */ new WeakMap();
    return function(target, propertyKey) {
      Reflect.defineProperty(target, propertyKey, {
        configurable: true,
        enumerable: true,
        get: function() {
          return valueMap.get(this);
        },
        set: function(newValue) {
          assertRange(newValue, min, max);
          valueMap.set(this, newValue);
        }
      });
    };
  }
  function timeRange(min, max = Infinity) {
    const valueMap = /* @__PURE__ */ new WeakMap();
    return function(target, propertyKey) {
      Reflect.defineProperty(target, propertyKey, {
        configurable: true,
        enumerable: true,
        get: function() {
          return valueMap.get(this);
        },
        set: function(newValue) {
          assertRange(this.toSeconds(newValue), min, max);
          valueMap.set(this, newValue);
        }
      });
    };
  }

  // node_modules/tone/build/esm/source/buffer/Player.js
  var Player = class _Player extends Source {
    constructor() {
      const options = optionsFromArguments(_Player.getDefaults(), arguments, [
        "url",
        "onload"
      ]);
      super(options);
      this.name = "Player";
      this._activeSources = /* @__PURE__ */ new Set();
      this._buffer = new ToneAudioBuffer({
        onload: this._onload.bind(this, options.onload),
        onerror: options.onerror,
        reverse: options.reverse,
        url: options.url
      });
      this.autostart = options.autostart;
      this._loop = options.loop;
      this._loopStart = options.loopStart;
      this._loopEnd = options.loopEnd;
      this._playbackRate = options.playbackRate;
      this.fadeIn = options.fadeIn;
      this.fadeOut = options.fadeOut;
    }
    static getDefaults() {
      return Object.assign(Source.getDefaults(), {
        autostart: false,
        fadeIn: 0,
        fadeOut: 0,
        loop: false,
        loopEnd: 0,
        loopStart: 0,
        onload: noOp,
        onerror: noOp,
        playbackRate: 1,
        reverse: false
      });
    }
    /**
     * Load the audio file as an audio buffer.
     * Decodes the audio asynchronously and invokes
     * the callback once the audio buffer loads.
     * Note: this does not need to be called if a url
     * was passed in to the constructor. Only use this
     * if you want to manually load a new url.
     * @param url The url of the buffer to load. Filetype support depends on the browser.
     */
    load(url) {
      return __awaiter(this, void 0, void 0, function* () {
        yield this._buffer.load(url);
        this._onload();
        return this;
      });
    }
    /**
     * Internal callback when the buffer is loaded.
     */
    _onload(callback = noOp) {
      callback();
      if (this.autostart) {
        this.start();
      }
    }
    /**
     * Internal callback when the buffer is done playing.
     */
    _onSourceEnd(source) {
      this.onstop(this);
      this._activeSources.delete(source);
      if (this._activeSources.size === 0 && !this._synced && this._state.getValueAtTime(this.now()) === "started") {
        this._state.cancel(this.now());
        this._state.setStateAtTime("stopped", this.now());
      }
    }
    /**
     * Play the buffer at the given startTime. Optionally add an offset
     * and/or duration which will play the buffer from a position
     * within the buffer for the given duration.
     *
     * @param  time When the player should start.
     * @param  offset The offset from the beginning of the sample to start at.
     * @param  duration How long the sample should play. If no duration is given, it will default to the full length of the sample (minus any offset)
     */
    start(time, offset, duration) {
      super.start(time, offset, duration);
      return this;
    }
    /**
     * Internal start method
     */
    _start(startTime, offset, duration) {
      if (this._loop) {
        offset = defaultArg(offset, this._loopStart);
      } else {
        offset = defaultArg(offset, 0);
      }
      const computedOffset = this.toSeconds(offset);
      const origDuration = duration;
      duration = defaultArg(duration, Math.max(this._buffer.duration - computedOffset, 0));
      let computedDuration = this.toSeconds(duration);
      computedDuration = computedDuration / this._playbackRate;
      startTime = this.toSeconds(startTime);
      const source = new ToneBufferSource({
        url: this._buffer,
        context: this.context,
        fadeIn: this.fadeIn,
        fadeOut: this.fadeOut,
        loop: this._loop,
        loopEnd: this._loopEnd,
        loopStart: this._loopStart,
        onended: this._onSourceEnd.bind(this),
        playbackRate: this._playbackRate
      }).connect(this.output);
      if (!this._loop && !this._synced) {
        this._state.cancel(startTime + computedDuration);
        this._state.setStateAtTime("stopped", startTime + computedDuration, {
          implicitEnd: true
        });
      }
      this._activeSources.add(source);
      if (this._loop && isUndef(origDuration)) {
        source.start(startTime, computedOffset);
      } else {
        source.start(startTime, computedOffset, computedDuration - this.toSeconds(this.fadeOut));
      }
    }
    /**
     * Stop playback.
     */
    _stop(time) {
      const computedTime = this.toSeconds(time);
      this._activeSources.forEach((source) => source.stop(computedTime));
    }
    /**
     * Stop and then restart the player from the beginning (or offset)
     * @param  time When the player should start.
     * @param  offset The offset from the beginning of the sample to start at.
     * @param  duration How long the sample should play. If no duration is given,
     * 					it will default to the full length of the sample (minus any offset)
     */
    restart(time, offset, duration) {
      super.restart(time, offset, duration);
      return this;
    }
    _restart(time, offset, duration) {
      var _a;
      (_a = [...this._activeSources].pop()) === null || _a === void 0 ? void 0 : _a.stop(time);
      this._start(time, offset, duration);
    }
    /**
     * Seek to a specific time in the player's buffer. If the
     * source is no longer playing at that time, it will stop.
     * @param offset The time to seek to.
     * @param when The time for the seek event to occur.
     * @example
     * const player = new Tone.Player("https://tonejs.github.io/audio/berklee/gurgling_theremin_1.mp3", () => {
     * 	player.start();
     * 	// seek to the offset in 1 second from now
     * 	player.seek(0.4, "+1");
     * }).toDestination();
     */
    seek(offset, when) {
      const computedTime = this.toSeconds(when);
      if (this._state.getValueAtTime(computedTime) === "started") {
        const computedOffset = this.toSeconds(offset);
        this._stop(computedTime);
        this._start(computedTime, computedOffset);
      }
      return this;
    }
    /**
     * Set the loop start and end. Will only loop if loop is set to true.
     * @param loopStart The loop start time
     * @param loopEnd The loop end time
     * @example
     * const player = new Tone.Player("https://tonejs.github.io/audio/berklee/malevoices_aa2_F3.mp3").toDestination();
     * // loop between the given points
     * player.setLoopPoints(0.2, 0.3);
     * player.loop = true;
     * player.autostart = true;
     */
    setLoopPoints(loopStart, loopEnd) {
      this.loopStart = loopStart;
      this.loopEnd = loopEnd;
      return this;
    }
    /**
     * If loop is true, the loop will start at this position.
     */
    get loopStart() {
      return this._loopStart;
    }
    set loopStart(loopStart) {
      this._loopStart = loopStart;
      if (this.buffer.loaded) {
        assertRange(this.toSeconds(loopStart), 0, this.buffer.duration);
      }
      this._activeSources.forEach((source) => {
        source.loopStart = loopStart;
      });
    }
    /**
     * If loop is true, the loop will end at this position.
     */
    get loopEnd() {
      return this._loopEnd;
    }
    set loopEnd(loopEnd) {
      this._loopEnd = loopEnd;
      if (this.buffer.loaded) {
        assertRange(this.toSeconds(loopEnd), 0, this.buffer.duration);
      }
      this._activeSources.forEach((source) => {
        source.loopEnd = loopEnd;
      });
    }
    /**
     * The audio buffer belonging to the player.
     */
    get buffer() {
      return this._buffer;
    }
    set buffer(buffer) {
      this._buffer.set(buffer);
    }
    /**
     * If the buffer should loop once it's over.
     * @example
     * const player = new Tone.Player("https://tonejs.github.io/audio/drum-samples/breakbeat.mp3").toDestination();
     * player.loop = true;
     * player.autostart = true;
     */
    get loop() {
      return this._loop;
    }
    set loop(loop) {
      if (this._loop === loop) {
        return;
      }
      this._loop = loop;
      this._activeSources.forEach((source) => {
        source.loop = loop;
      });
      if (loop) {
        const stopEvent = this._state.getNextState("stopped", this.now());
        if (stopEvent) {
          this._state.cancel(stopEvent.time);
        }
      }
    }
    /**
     * Normal speed is 1. The pitch will change with the playback rate.
     * @example
     * const player = new Tone.Player("https://tonejs.github.io/audio/berklee/femalevoices_aa2_A5.mp3").toDestination();
     * // play at 1/4 speed
     * player.playbackRate = 0.25;
     * // play as soon as the buffer is loaded
     * player.autostart = true;
     */
    get playbackRate() {
      return this._playbackRate;
    }
    set playbackRate(rate) {
      this._playbackRate = rate;
      const now = this.now();
      const stopEvent = this._state.getNextState("stopped", now);
      if (stopEvent && stopEvent.implicitEnd) {
        this._state.cancel(stopEvent.time);
        this._activeSources.forEach((source) => source.cancelStop());
      }
      this._activeSources.forEach((source) => {
        source.playbackRate.setValueAtTime(rate, now);
      });
    }
    /**
     * If the buffer should be reversed. Note that this sets the underlying {@link ToneAudioBuffer.reverse}, so
     * if multiple players are pointing at the same ToneAudioBuffer, they will all be reversed.
     * @example
     * const player = new Tone.Player("https://tonejs.github.io/audio/berklee/chime_1.mp3").toDestination();
     * player.autostart = true;
     * player.reverse = true;
     */
    get reverse() {
      return this._buffer.reverse;
    }
    set reverse(rev) {
      this._buffer.reverse = rev;
    }
    /**
     * If the buffer is loaded
     */
    get loaded() {
      return this._buffer.loaded;
    }
    dispose() {
      super.dispose();
      this._activeSources.forEach((source) => source.dispose());
      this._activeSources.clear();
      this._buffer.dispose();
      return this;
    }
  };
  __decorate([
    timeRange(0)
  ], Player.prototype, "fadeIn", void 0);
  __decorate([
    timeRange(0)
  ], Player.prototype, "fadeOut", void 0);

  // node_modules/tone/build/esm/component/envelope/Envelope.js
  var Envelope = class _Envelope extends ToneAudioNode {
    constructor() {
      const options = optionsFromArguments(_Envelope.getDefaults(), arguments, ["attack", "decay", "sustain", "release"]);
      super(options);
      this.name = "Envelope";
      this._sig = new Signal({
        context: this.context,
        value: 0
      });
      this.output = this._sig;
      this.input = void 0;
      this.attack = options.attack;
      this.decay = options.decay;
      this.sustain = options.sustain;
      this.release = options.release;
      this.attackCurve = options.attackCurve;
      this.releaseCurve = options.releaseCurve;
      this.decayCurve = options.decayCurve;
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        attack: 0.01,
        attackCurve: "linear",
        decay: 0.1,
        decayCurve: "exponential",
        release: 1,
        releaseCurve: "exponential",
        sustain: 0.5
      });
    }
    /**
     * Read the current value of the envelope. Useful for
     * synchronizing visual output to the envelope.
     */
    get value() {
      return this.getValueAtTime(this.now());
    }
    /**
     * Get the curve
     * @param  curve
     * @param  direction  In/Out
     * @return The curve name
     */
    _getCurve(curve, direction) {
      if (isString(curve)) {
        return curve;
      } else {
        let curveName;
        for (curveName in EnvelopeCurves) {
          if (EnvelopeCurves[curveName][direction] === curve) {
            return curveName;
          }
        }
        return curve;
      }
    }
    /**
     * Assign a the curve to the given name using the direction
     * @param  name
     * @param  direction In/Out
     * @param  curve
     */
    _setCurve(name, direction, curve) {
      if (isString(curve) && Reflect.has(EnvelopeCurves, curve)) {
        const curveDef = EnvelopeCurves[curve];
        if (isObject(curveDef)) {
          if (name !== "_decayCurve") {
            this[name] = curveDef[direction];
          }
        } else {
          this[name] = curveDef;
        }
      } else if (isArray(curve) && name !== "_decayCurve") {
        this[name] = curve;
      } else {
        throw new Error("Envelope: invalid curve: " + curve);
      }
    }
    /**
     * The shape of the attack.
     * Can be any of these strings:
     * * "linear"
     * * "exponential"
     * * "sine"
     * * "cosine"
     * * "bounce"
     * * "ripple"
     * * "step"
     *
     * Can also be an array which describes the curve. Values
     * in the array are evenly subdivided and linearly
     * interpolated over the duration of the attack.
     * @example
     * return Tone.Offline(() => {
     * 	const env = new Tone.Envelope(0.4).toDestination();
     * 	env.attackCurve = "linear";
     * 	env.triggerAttack();
     * }, 1, 1);
     */
    get attackCurve() {
      return this._getCurve(this._attackCurve, "In");
    }
    set attackCurve(curve) {
      this._setCurve("_attackCurve", "In", curve);
    }
    /**
     * The shape of the release. See the attack curve types.
     * @example
     * return Tone.Offline(() => {
     * 	const env = new Tone.Envelope({
     * 		release: 0.8
     * 	}).toDestination();
     * 	env.triggerAttack();
     * 	// release curve could also be defined by an array
     * 	env.releaseCurve = [1, 0.3, 0.4, 0.2, 0.7, 0];
     * 	env.triggerRelease(0.2);
     * }, 1, 1);
     */
    get releaseCurve() {
      return this._getCurve(this._releaseCurve, "Out");
    }
    set releaseCurve(curve) {
      this._setCurve("_releaseCurve", "Out", curve);
    }
    /**
     * The shape of the decay either "linear" or "exponential"
     * @example
     * return Tone.Offline(() => {
     * 	const env = new Tone.Envelope({
     * 		sustain: 0.1,
     * 		decay: 0.5
     * 	}).toDestination();
     * 	env.decayCurve = "linear";
     * 	env.triggerAttack();
     * }, 1, 1);
     */
    get decayCurve() {
      return this._getCurve(this._decayCurve, "Out");
    }
    set decayCurve(curve) {
      this._setCurve("_decayCurve", "Out", curve);
    }
    /**
     * Trigger the attack/decay portion of the ADSR envelope.
     * @param  time When the attack should start.
     * @param velocity The velocity of the envelope scales the vales.
     *                             number between 0-1
     * @example
     * const env = new Tone.AmplitudeEnvelope().toDestination();
     * const osc = new Tone.Oscillator().connect(env).start();
     * // trigger the attack 0.5 seconds from now with a velocity of 0.2
     * env.triggerAttack("+0.5", 0.2);
     */
    triggerAttack(time, velocity = 1) {
      this.log("triggerAttack", time, velocity);
      time = this.toSeconds(time);
      const originalAttack = this.toSeconds(this.attack);
      let attack = originalAttack;
      const decay = this.toSeconds(this.decay);
      const currentValue = this.getValueAtTime(time);
      if (currentValue > 0) {
        const attackRate = 1 / attack;
        const remainingDistance = 1 - currentValue;
        attack = remainingDistance / attackRate;
      }
      if (attack < this.sampleTime) {
        this._sig.cancelScheduledValues(time);
        this._sig.setValueAtTime(velocity, time);
      } else if (this._attackCurve === "linear") {
        this._sig.linearRampTo(velocity, attack, time);
      } else if (this._attackCurve === "exponential") {
        this._sig.targetRampTo(velocity, attack, time);
      } else {
        this._sig.cancelAndHoldAtTime(time);
        let curve = this._attackCurve;
        for (let i = 1; i < curve.length; i++) {
          if (curve[i - 1] <= currentValue && currentValue <= curve[i]) {
            curve = this._attackCurve.slice(i);
            curve[0] = currentValue;
            break;
          }
        }
        this._sig.setValueCurveAtTime(curve, time, attack, velocity);
      }
      if (decay && this.sustain < 1) {
        const decayValue = velocity * this.sustain;
        const decayStart = time + attack;
        this.log("decay", decayStart);
        if (this._decayCurve === "linear") {
          this._sig.linearRampToValueAtTime(decayValue, decay + decayStart);
        } else {
          this._sig.exponentialApproachValueAtTime(decayValue, decayStart, decay);
        }
      }
      return this;
    }
    /**
     * Triggers the release of the envelope.
     * @param  time When the release portion of the envelope should start.
     * @example
     * const env = new Tone.AmplitudeEnvelope().toDestination();
     * const osc = new Tone.Oscillator({
     * 	type: "sawtooth"
     * }).connect(env).start();
     * env.triggerAttack();
     * // trigger the release half a second after the attack
     * env.triggerRelease("+0.5");
     */
    triggerRelease(time) {
      this.log("triggerRelease", time);
      time = this.toSeconds(time);
      const currentValue = this.getValueAtTime(time);
      if (currentValue > 0) {
        const release = this.toSeconds(this.release);
        if (release < this.sampleTime) {
          this._sig.setValueAtTime(0, time);
        } else if (this._releaseCurve === "linear") {
          this._sig.linearRampTo(0, release, time);
        } else if (this._releaseCurve === "exponential") {
          this._sig.targetRampTo(0, release, time);
        } else {
          assert(isArray(this._releaseCurve), "releaseCurve must be either 'linear', 'exponential' or an array");
          this._sig.cancelAndHoldAtTime(time);
          this._sig.setValueCurveAtTime(this._releaseCurve, time, release, currentValue);
        }
      }
      return this;
    }
    /**
     * Get the scheduled value at the given time. This will
     * return the unconverted (raw) value.
     * @example
     * const env = new Tone.Envelope(0.5, 1, 0.4, 2);
     * env.triggerAttackRelease(2);
     * setInterval(() => console.log(env.getValueAtTime(Tone.now())), 100);
     */
    getValueAtTime(time) {
      return this._sig.getValueAtTime(time);
    }
    /**
     * triggerAttackRelease is shorthand for triggerAttack, then waiting
     * some duration, then triggerRelease.
     * @param duration The duration of the sustain.
     * @param time When the attack should be triggered.
     * @param velocity The velocity of the envelope.
     * @example
     * const env = new Tone.AmplitudeEnvelope().toDestination();
     * const osc = new Tone.Oscillator().connect(env).start();
     * // trigger the release 0.5 seconds after the attack
     * env.triggerAttackRelease(0.5);
     */
    triggerAttackRelease(duration, time, velocity = 1) {
      time = this.toSeconds(time);
      this.triggerAttack(time, velocity);
      this.triggerRelease(time + this.toSeconds(duration));
      return this;
    }
    /**
     * Cancels all scheduled envelope changes after the given time.
     */
    cancel(after) {
      this._sig.cancelScheduledValues(this.toSeconds(after));
      return this;
    }
    /**
     * Connect the envelope to a destination node.
     */
    connect(destination, outputNumber = 0, inputNumber = 0) {
      connectSignal(this, destination, outputNumber, inputNumber);
      return this;
    }
    /**
     * Render the envelope curve to an array of the given length.
     * Good for visualizing the envelope curve. Rescales the duration of the
     * envelope to fit the length.
     */
    asArray() {
      return __awaiter(this, arguments, void 0, function* (length = 1024) {
        const duration = length / this.context.sampleRate;
        const context2 = new OfflineContext(1, duration, this.context.sampleRate);
        const attackPortion = this.toSeconds(this.attack) + this.toSeconds(this.decay);
        const envelopeDuration = attackPortion + this.toSeconds(this.release);
        const sustainTime = envelopeDuration * 0.1;
        const totalDuration = envelopeDuration + sustainTime;
        const clone = new this.constructor(Object.assign(this.get(), {
          attack: duration * this.toSeconds(this.attack) / totalDuration,
          decay: duration * this.toSeconds(this.decay) / totalDuration,
          release: duration * this.toSeconds(this.release) / totalDuration,
          context: context2
        }));
        clone._sig.toDestination();
        clone.triggerAttackRelease(duration * (attackPortion + sustainTime) / totalDuration, 0);
        const buffer = yield context2.render();
        return buffer.getChannelData(0);
      });
    }
    dispose() {
      super.dispose();
      this._sig.dispose();
      return this;
    }
  };
  __decorate([
    timeRange(0)
  ], Envelope.prototype, "attack", void 0);
  __decorate([
    timeRange(0)
  ], Envelope.prototype, "decay", void 0);
  __decorate([
    range(0, 1)
  ], Envelope.prototype, "sustain", void 0);
  __decorate([
    timeRange(0)
  ], Envelope.prototype, "release", void 0);
  var EnvelopeCurves = (() => {
    const curveLen = 128;
    let i;
    let k;
    const cosineCurve = [];
    for (i = 0; i < curveLen; i++) {
      cosineCurve[i] = Math.sin(i / (curveLen - 1) * (Math.PI / 2));
    }
    const rippleCurve = [];
    const rippleCurveFreq = 6.4;
    for (i = 0; i < curveLen - 1; i++) {
      k = i / (curveLen - 1);
      const sineWave = Math.sin(k * (Math.PI * 2) * rippleCurveFreq - Math.PI / 2) + 1;
      rippleCurve[i] = sineWave / 10 + k * 0.83;
    }
    rippleCurve[curveLen - 1] = 1;
    const stairsCurve = [];
    const steps = 5;
    for (i = 0; i < curveLen; i++) {
      stairsCurve[i] = Math.ceil(i / (curveLen - 1) * steps) / steps;
    }
    const sineCurve = [];
    for (i = 0; i < curveLen; i++) {
      k = i / (curveLen - 1);
      sineCurve[i] = 0.5 * (1 - Math.cos(Math.PI * k));
    }
    const bounceCurve = [];
    for (i = 0; i < curveLen; i++) {
      k = i / (curveLen - 1);
      const freq = Math.pow(k, 3) * 4 + 0.2;
      const val = Math.cos(freq * Math.PI * 2 * k);
      bounceCurve[i] = Math.abs(val * (1 - k));
    }
    function invertCurve(curve) {
      const out = new Array(curve.length);
      for (let j = 0; j < curve.length; j++) {
        out[j] = 1 - curve[j];
      }
      return out;
    }
    function reverseCurve(curve) {
      return curve.slice(0).reverse();
    }
    return {
      bounce: {
        In: invertCurve(bounceCurve),
        Out: bounceCurve
      },
      cosine: {
        In: cosineCurve,
        Out: reverseCurve(cosineCurve)
      },
      exponential: "exponential",
      linear: "linear",
      ripple: {
        In: rippleCurve,
        Out: invertCurve(rippleCurve)
      },
      sine: {
        In: sineCurve,
        Out: invertCurve(sineCurve)
      },
      step: {
        In: stairsCurve,
        Out: invertCurve(stairsCurve)
      }
    };
  })();

  // node_modules/tone/build/esm/instrument/Instrument.js
  var Instrument = class _Instrument extends ToneAudioNode {
    constructor() {
      const options = optionsFromArguments(_Instrument.getDefaults(), arguments);
      super(options);
      this._scheduledEvents = [];
      this._synced = false;
      this._original_triggerAttack = this.triggerAttack;
      this._original_triggerRelease = this.triggerRelease;
      this._syncedRelease = (time) => this._original_triggerRelease(time);
      this._volume = this.output = new Volume({
        context: this.context,
        volume: options.volume
      });
      this.volume = this._volume.volume;
      readOnly(this, "volume");
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        volume: 0
      });
    }
    /**
     * Sync the instrument to the Transport. All subsequent calls of
     * {@link triggerAttack} and {@link triggerRelease} will be scheduled along the transport.
     * @example
     * const fmSynth = new Tone.FMSynth().toDestination();
     * fmSynth.volume.value = -6;
     * fmSynth.sync();
     * // schedule 3 notes when the transport first starts
     * fmSynth.triggerAttackRelease("C4", "8n", 0);
     * fmSynth.triggerAttackRelease("E4", "8n", "8n");
     * fmSynth.triggerAttackRelease("G4", "8n", "4n");
     * // start the transport to hear the notes
     * Tone.Transport.start();
     */
    sync() {
      if (this._syncState()) {
        this._syncMethod("triggerAttack", 1);
        this._syncMethod("triggerRelease", 0);
        this.context.transport.on("stop", this._syncedRelease);
        this.context.transport.on("pause", this._syncedRelease);
        this.context.transport.on("loopEnd", this._syncedRelease);
      }
      return this;
    }
    /**
     * set _sync
     */
    _syncState() {
      let changed = false;
      if (!this._synced) {
        this._synced = true;
        changed = true;
      }
      return changed;
    }
    /**
     * Wrap the given method so that it can be synchronized
     * @param method Which method to wrap and sync
     * @param  timePosition What position the time argument appears in
     */
    _syncMethod(method, timePosition) {
      const originalMethod = this["_original_" + method] = this[method];
      this[method] = (...args) => {
        const time = args[timePosition];
        const id = this.context.transport.schedule((t) => {
          args[timePosition] = t;
          originalMethod.apply(this, args);
        }, time);
        this._scheduledEvents.push(id);
      };
    }
    /**
     * Unsync the instrument from the Transport
     */
    unsync() {
      this._scheduledEvents.forEach((id) => this.context.transport.clear(id));
      this._scheduledEvents = [];
      if (this._synced) {
        this._synced = false;
        this.triggerAttack = this._original_triggerAttack;
        this.triggerRelease = this._original_triggerRelease;
        this.context.transport.off("stop", this._syncedRelease);
        this.context.transport.off("pause", this._syncedRelease);
        this.context.transport.off("loopEnd", this._syncedRelease);
      }
      return this;
    }
    /**
     * Trigger the attack and then the release after the duration.
     * @param  note     The note to trigger.
     * @param  duration How long the note should be held for before
     *                         triggering the release. This value must be greater than 0.
     * @param time  When the note should be triggered.
     * @param  velocity The velocity the note should be triggered at.
     * @example
     * const synth = new Tone.Synth().toDestination();
     * // trigger "C4" for the duration of an 8th note
     * synth.triggerAttackRelease("C4", "8n");
     */
    triggerAttackRelease(note, duration, time, velocity) {
      const computedTime = this.toSeconds(time);
      const computedDuration = this.toSeconds(duration);
      this.triggerAttack(note, computedTime, velocity);
      this.triggerRelease(computedTime + computedDuration);
      return this;
    }
    /**
     * clean up
     * @returns {Instrument} this
     */
    dispose() {
      super.dispose();
      this._volume.dispose();
      this.unsync();
      this._scheduledEvents = [];
      return this;
    }
  };

  // node_modules/tone/build/esm/instrument/Monophonic.js
  var Monophonic = class _Monophonic extends Instrument {
    constructor() {
      const options = optionsFromArguments(_Monophonic.getDefaults(), arguments);
      super(options);
      this.portamento = options.portamento;
      this.onsilence = options.onsilence;
    }
    static getDefaults() {
      return Object.assign(Instrument.getDefaults(), {
        detune: 0,
        onsilence: noOp,
        portamento: 0
      });
    }
    /**
     * Trigger the attack of the note optionally with a given velocity.
     * @param  note The note to trigger.
     * @param  time When the note should start.
     * @param  velocity The velocity determines how "loud" the note will be.
     * @example
     * const synth = new Tone.Synth().toDestination();
     * // trigger the note a half second from now at half velocity
     * synth.triggerAttack("C4", "+0.5", 0.5);
     */
    triggerAttack(note, time, velocity = 1) {
      this.log("triggerAttack", note, time, velocity);
      const seconds = this.toSeconds(time);
      this._triggerEnvelopeAttack(seconds, velocity);
      this.setNote(note, seconds);
      return this;
    }
    /**
     * Trigger the release portion of the envelope.
     * @param  time If no time is given, the release happens immediately.
     * @example
     * const synth = new Tone.Synth().toDestination();
     * synth.triggerAttack("C4");
     * // trigger the release a second from now
     * synth.triggerRelease("+1");
     */
    triggerRelease(time) {
      this.log("triggerRelease", time);
      const seconds = this.toSeconds(time);
      this._triggerEnvelopeRelease(seconds);
      return this;
    }
    /**
     * Set the note at the given time. If no time is given, the note
     * will set immediately.
     * @param note The note to change to.
     * @param  time The time when the note should be set.
     * @example
     * const synth = new Tone.Synth().toDestination();
     * synth.triggerAttack("C4");
     * // change to F#6 in one quarter note from now.
     * synth.setNote("F#6", "+4n");
     */
    setNote(note, time) {
      const computedTime = this.toSeconds(time);
      const computedFrequency = note instanceof FrequencyClass ? note.toFrequency() : note;
      if (this.portamento > 0 && this.getLevelAtTime(computedTime) > 0.05) {
        const portTime = this.toSeconds(this.portamento);
        this.frequency.exponentialRampTo(computedFrequency, portTime, computedTime);
      } else {
        this.frequency.setValueAtTime(computedFrequency, computedTime);
      }
      return this;
    }
  };
  __decorate([
    timeRange(0)
  ], Monophonic.prototype, "portamento", void 0);

  // node_modules/tone/build/esm/component/envelope/AmplitudeEnvelope.js
  var AmplitudeEnvelope = class _AmplitudeEnvelope extends Envelope {
    constructor() {
      super(optionsFromArguments(_AmplitudeEnvelope.getDefaults(), arguments, [
        "attack",
        "decay",
        "sustain",
        "release"
      ]));
      this.name = "AmplitudeEnvelope";
      this._gainNode = new Gain({
        context: this.context,
        gain: 0
      });
      this.output = this._gainNode;
      this.input = this._gainNode;
      this._sig.connect(this._gainNode.gain);
      this.output = this._gainNode;
      this.input = this._gainNode;
    }
    /**
     * Clean up
     */
    dispose() {
      super.dispose();
      this._gainNode.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/instrument/Synth.js
  var Synth = class _Synth extends Monophonic {
    constructor() {
      const options = optionsFromArguments(_Synth.getDefaults(), arguments);
      super(options);
      this.name = "Synth";
      this.oscillator = new OmniOscillator(Object.assign({
        context: this.context,
        detune: options.detune,
        onstop: () => this.onsilence(this)
      }, options.oscillator));
      this.frequency = this.oscillator.frequency;
      this.detune = this.oscillator.detune;
      this.envelope = new AmplitudeEnvelope(Object.assign({
        context: this.context
      }, options.envelope));
      this.oscillator.chain(this.envelope, this.output);
      readOnly(this, ["oscillator", "frequency", "detune", "envelope"]);
    }
    static getDefaults() {
      return Object.assign(Monophonic.getDefaults(), {
        envelope: Object.assign(omitFromObject(Envelope.getDefaults(), Object.keys(ToneAudioNode.getDefaults())), {
          attack: 5e-3,
          decay: 0.1,
          release: 1,
          sustain: 0.3
        }),
        oscillator: Object.assign(omitFromObject(OmniOscillator.getDefaults(), [
          ...Object.keys(Source.getDefaults()),
          "frequency",
          "detune"
        ]), {
          type: "triangle"
        })
      });
    }
    /**
     * start the attack portion of the envelope
     * @param time the time the attack should start
     * @param velocity the velocity of the note (0-1)
     */
    _triggerEnvelopeAttack(time, velocity) {
      this.envelope.triggerAttack(time, velocity);
      this.oscillator.start(time);
      if (this.envelope.sustain === 0) {
        const computedAttack = this.toSeconds(this.envelope.attack);
        const computedDecay = this.toSeconds(this.envelope.decay);
        this.oscillator.stop(time + computedAttack + computedDecay);
      }
    }
    /**
     * start the release portion of the envelope
     * @param time the time the release should start
     */
    _triggerEnvelopeRelease(time) {
      this.envelope.triggerRelease(time);
      this.oscillator.stop(time + this.toSeconds(this.envelope.release));
    }
    getLevelAtTime(time) {
      time = this.toSeconds(time);
      return this.envelope.getValueAtTime(time);
    }
    /**
     * clean up
     */
    dispose() {
      super.dispose();
      this.oscillator.dispose();
      this.envelope.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/instrument/MembraneSynth.js
  var MembraneSynth = class _MembraneSynth extends Synth {
    constructor() {
      const options = optionsFromArguments(_MembraneSynth.getDefaults(), arguments);
      super(options);
      this.name = "MembraneSynth";
      this.portamento = 0;
      this.pitchDecay = options.pitchDecay;
      this.octaves = options.octaves;
      readOnly(this, ["oscillator", "envelope"]);
    }
    static getDefaults() {
      return deepMerge(Monophonic.getDefaults(), Synth.getDefaults(), {
        envelope: {
          attack: 1e-3,
          attackCurve: "exponential",
          decay: 0.4,
          release: 1.4,
          sustain: 0.01
        },
        octaves: 10,
        oscillator: {
          type: "sine"
        },
        pitchDecay: 0.05
      });
    }
    setNote(note, time) {
      const seconds = this.toSeconds(time);
      const hertz = this.toFrequency(note instanceof FrequencyClass ? note.toFrequency() : note);
      const maxNote = hertz * this.octaves;
      this.oscillator.frequency.setValueAtTime(maxNote, seconds);
      this.oscillator.frequency.exponentialRampToValueAtTime(hertz, seconds + this.toSeconds(this.pitchDecay));
      return this;
    }
    dispose() {
      super.dispose();
      return this;
    }
  };
  __decorate([
    range(0)
  ], MembraneSynth.prototype, "octaves", void 0);
  __decorate([
    timeRange(0)
  ], MembraneSynth.prototype, "pitchDecay", void 0);

  // node_modules/tone/build/esm/core/worklet/WorkletGlobalScope.js
  var workletContext = /* @__PURE__ */ new Set();
  function addToWorklet(classOrFunction) {
    workletContext.add(classOrFunction);
  }
  function registerProcessor(name, classDesc) {
    const processor = (
      /* javascript */
      `registerProcessor("${name}", ${classDesc})`
    );
    workletContext.add(processor);
  }

  // node_modules/tone/build/esm/core/worklet/ToneAudioWorkletProcessor.worklet.js
  var toneAudioWorkletProcessor = (
    /* javascript */
    `
	/**
	 * The base AudioWorkletProcessor for use in Tone.js. Works with the {@link ToneAudioWorklet}. 
	 */
	class ToneAudioWorkletProcessor extends AudioWorkletProcessor {

		constructor(options) {
			
			super(options);
			/**
			 * If the processor was disposed or not. Keep alive until it's disposed.
			 */
			this.disposed = false;
		   	/** 
			 * The number of samples in the processing block
			 */
			this.blockSize = 128;
			/**
			 * the sample rate
			 */
			this.sampleRate = sampleRate;

			this.port.onmessage = (event) => {
				// when it receives a dispose 
				if (event.data === "dispose") {
					this.disposed = true;
				}
			};
		}
	}
`
  );
  addToWorklet(toneAudioWorkletProcessor);

  // node_modules/tone/build/esm/core/worklet/SingleIOProcessor.worklet.js
  var singleIOProcess = (
    /* javascript */
    `
	/**
	 * Abstract class for a single input/output processor. 
	 * has a 'generate' function which processes one sample at a time
	 */
	class SingleIOProcessor extends ToneAudioWorkletProcessor {

		constructor(options) {
			super(Object.assign(options, {
				numberOfInputs: 1,
				numberOfOutputs: 1
			}));
			/**
			 * Holds the name of the parameter and a single value of that
			 * parameter at the current sample
			 * @type { [name: string]: number }
			 */
			this.params = {}
		}

		/**
		 * Generate an output sample from the input sample and parameters
		 * @abstract
		 * @param input number
		 * @param channel number
		 * @param parameters { [name: string]: number }
		 * @returns number
		 */
		generate(){}

		/**
		 * Update the private params object with the 
		 * values of the parameters at the given index
		 * @param parameters { [name: string]: Float32Array },
		 * @param index number
		 */
		updateParams(parameters, index) {
			for (const paramName in parameters) {
				const param = parameters[paramName];
				if (param.length > 1) {
					this.params[paramName] = parameters[paramName][index];
				} else {
					this.params[paramName] = parameters[paramName][0];
				}
			}
		}

		/**
		 * Process a single frame of the audio
		 * @param inputs Float32Array[][]
		 * @param outputs Float32Array[][]
		 */
		process(inputs, outputs, parameters) {
			const input = inputs[0];
			const output = outputs[0];
			// get the parameter values
			const channelCount = Math.max(input && input.length || 0, output.length);
			for (let sample = 0; sample < this.blockSize; sample++) {
				this.updateParams(parameters, sample);
				for (let channel = 0; channel < channelCount; channel++) {
					const inputSample = input && input.length ? input[channel][sample] : 0;
					output[channel][sample] = this.generate(inputSample, channel, this.params);
				}
			}
			return !this.disposed;
		}
	};
`
  );
  addToWorklet(singleIOProcess);

  // node_modules/tone/build/esm/core/worklet/DelayLine.worklet.js
  var delayLine = (
    /* javascript */
    `
	/**
	 * A multichannel buffer for use within an AudioWorkletProcessor as a delay line
	 */
	class DelayLine {
		
		constructor(size, channels) {
			this.buffer = [];
			this.writeHead = []
			this.size = size;

			// create the empty channels
			for (let i = 0; i < channels; i++) {
				this.buffer[i] = new Float32Array(this.size);
				this.writeHead[i] = 0;
			}
		}

		/**
		 * Push a value onto the end
		 * @param channel number
		 * @param value number
		 */
		push(channel, value) {
			this.writeHead[channel] += 1;
			if (this.writeHead[channel] > this.size) {
				this.writeHead[channel] = 0;
			}
			this.buffer[channel][this.writeHead[channel]] = value;
		}

		/**
		 * Get the recorded value of the channel given the delay
		 * @param channel number
		 * @param delay number delay samples
		 */
		get(channel, delay) {
			let readHead = this.writeHead[channel] - Math.floor(delay);
			if (readHead < 0) {
				readHead += this.size;
			}
			return this.buffer[channel][readHead];
		}
	}
`
  );
  addToWorklet(delayLine);

  // node_modules/tone/build/esm/component/filter/FeedbackCombFilter.worklet.js
  var workletName = "feedback-comb-filter";
  var feedbackCombFilter = (
    /* javascript */
    `
	class FeedbackCombFilterWorklet extends SingleIOProcessor {

		constructor(options) {
			super(options);
			this.delayLine = new DelayLine(this.sampleRate, options.channelCount || 2);
		}

		static get parameterDescriptors() {
			return [{
				name: "delayTime",
				defaultValue: 0.1,
				minValue: 0,
				maxValue: 1,
				automationRate: "k-rate"
			}, {
				name: "feedback",
				defaultValue: 0.5,
				minValue: 0,
				maxValue: 0.9999,
				automationRate: "k-rate"
			}];
		}

		generate(input, channel, parameters) {
			const delayedSample = this.delayLine.get(channel, parameters.delayTime * this.sampleRate);
			this.delayLine.push(channel, input + delayedSample * parameters.feedback);
			return delayedSample;
		}
	}
`
  );
  registerProcessor(workletName, feedbackCombFilter);

  // node_modules/tone/build/esm/instrument/Sampler.js
  var Sampler = class _Sampler extends Instrument {
    constructor() {
      const options = optionsFromArguments(_Sampler.getDefaults(), arguments, ["urls", "onload", "baseUrl"], "urls");
      super(options);
      this.name = "Sampler";
      this._activeSources = /* @__PURE__ */ new Map();
      const urlMap = {};
      Object.keys(options.urls).forEach((note) => {
        const noteNumber = parseInt(note, 10);
        assert(isNote(note) || isNumber(noteNumber) && isFinite(noteNumber), `url key is neither a note or midi pitch: ${note}`);
        if (isNote(note)) {
          const mid = new FrequencyClass(this.context, note).toMidi();
          urlMap[mid] = options.urls[note];
        } else if (isNumber(noteNumber) && isFinite(noteNumber)) {
          urlMap[noteNumber] = options.urls[noteNumber];
        }
      });
      this._buffers = new ToneAudioBuffers({
        urls: urlMap,
        onload: options.onload,
        baseUrl: options.baseUrl,
        onerror: options.onerror
      });
      this.attack = options.attack;
      this.release = options.release;
      this.curve = options.curve;
      if (this._buffers.loaded) {
        Promise.resolve().then(options.onload);
      }
    }
    static getDefaults() {
      return Object.assign(Instrument.getDefaults(), {
        attack: 0,
        baseUrl: "",
        curve: "exponential",
        onload: noOp,
        onerror: noOp,
        release: 0.1,
        urls: {}
      });
    }
    /**
     * Returns the difference in steps between the given midi note at the closets sample.
     */
    _findClosest(midi) {
      const MAX_INTERVAL = 96;
      let interval = 0;
      while (interval < MAX_INTERVAL) {
        if (this._buffers.has(midi + interval)) {
          return -interval;
        } else if (this._buffers.has(midi - interval)) {
          return interval;
        }
        interval++;
      }
      throw new Error(`No available buffers for note: ${midi}`);
    }
    /**
     * @param  notes	The note to play, or an array of notes.
     * @param  time     When to play the note
     * @param  velocity The velocity to play the sample back.
     */
    triggerAttack(notes, time, velocity = 1) {
      this.log("triggerAttack", notes, time, velocity);
      if (!Array.isArray(notes)) {
        notes = [notes];
      }
      notes.forEach((note) => {
        const midiFloat = ftomf(new FrequencyClass(this.context, note).toFrequency());
        const midi = Math.round(midiFloat);
        const remainder = midiFloat - midi;
        const difference = this._findClosest(midi);
        const closestNote = midi - difference;
        const buffer = this._buffers.get(closestNote);
        const playbackRate = intervalToFrequencyRatio(difference + remainder);
        const source = new ToneBufferSource({
          url: buffer,
          context: this.context,
          curve: this.curve,
          fadeIn: this.attack,
          fadeOut: this.release,
          playbackRate
        }).connect(this.output);
        source.start(time, 0, buffer.duration / playbackRate, velocity);
        if (!isArray(this._activeSources.get(midi))) {
          this._activeSources.set(midi, []);
        }
        this._activeSources.get(midi).push(source);
        source.onended = () => {
          if (this._activeSources && this._activeSources.has(midi)) {
            const sources = this._activeSources.get(midi);
            const index = sources.indexOf(source);
            if (index !== -1) {
              sources.splice(index, 1);
            }
          }
        };
      });
      return this;
    }
    /**
     * @param  notes	The note to release, or an array of notes.
     * @param  time     	When to release the note.
     */
    triggerRelease(notes, time) {
      this.log("triggerRelease", notes, time);
      if (!Array.isArray(notes)) {
        notes = [notes];
      }
      notes.forEach((note) => {
        const midi = new FrequencyClass(this.context, note).toMidi();
        if (this._activeSources.has(midi) && this._activeSources.get(midi).length) {
          const sources = this._activeSources.get(midi);
          time = this.toSeconds(time);
          sources.forEach((source) => {
            source.stop(time);
          });
          this._activeSources.set(midi, []);
        }
      });
      return this;
    }
    /**
     * Release all currently active notes.
     * @param  time     	When to release the notes.
     */
    releaseAll(time) {
      const computedTime = this.toSeconds(time);
      this._activeSources.forEach((sources) => {
        while (sources.length) {
          const source = sources.shift();
          source.stop(computedTime);
        }
      });
      return this;
    }
    sync() {
      if (this._syncState()) {
        this._syncMethod("triggerAttack", 1);
        this._syncMethod("triggerRelease", 1);
      }
      return this;
    }
    /**
     * Invoke the attack phase, then after the duration, invoke the release.
     * @param  notes	The note to play and release, or an array of notes.
     * @param  duration The time the note should be held
     * @param  time     When to start the attack
     * @param  velocity The velocity of the attack
     */
    triggerAttackRelease(notes, duration, time, velocity = 1) {
      const computedTime = this.toSeconds(time);
      this.triggerAttack(notes, computedTime, velocity);
      if (isArray(duration)) {
        assert(isArray(notes), "notes must be an array when duration is array");
        notes.forEach((note, index) => {
          const d = duration[Math.min(index, duration.length - 1)];
          this.triggerRelease(note, computedTime + this.toSeconds(d));
        });
      } else {
        this.triggerRelease(notes, computedTime + this.toSeconds(duration));
      }
      return this;
    }
    /**
     * Add a note to the sampler.
     * @param  note      The buffer's pitch.
     * @param  url  Either the url of the buffer, or a buffer which will be added with the given name.
     * @param  callback  The callback to invoke when the url is loaded.
     */
    add(note, url, callback) {
      assert(isNote(note) || isFinite(note), `note must be a pitch or midi: ${note}`);
      if (isNote(note)) {
        const mid = new FrequencyClass(this.context, note).toMidi();
        this._buffers.add(mid, url, callback);
      } else {
        this._buffers.add(note, url, callback);
      }
      return this;
    }
    /**
     * If the buffers are loaded or not
     */
    get loaded() {
      return this._buffers.loaded;
    }
    /**
     * Clean up
     */
    dispose() {
      super.dispose();
      this._buffers.dispose();
      this._activeSources.forEach((sources) => {
        sources.forEach((source) => source.dispose());
      });
      this._activeSources.clear();
      return this;
    }
  };
  __decorate([
    timeRange(0)
  ], Sampler.prototype, "attack", void 0);
  __decorate([
    timeRange(0)
  ], Sampler.prototype, "release", void 0);

  // node_modules/tone/build/esm/component/channel/Panner.js
  var Panner = class _Panner extends ToneAudioNode {
    constructor() {
      const options = optionsFromArguments(_Panner.getDefaults(), arguments, [
        "pan"
      ]);
      super(options);
      this.name = "Panner";
      this._panner = this.context.createStereoPanner();
      this.input = this._panner;
      this.output = this._panner;
      this.pan = new Param({
        context: this.context,
        param: this._panner.pan,
        value: options.pan,
        minValue: -1,
        maxValue: 1
      });
      this._panner.channelCount = options.channelCount;
      this._panner.channelCountMode = "explicit";
      readOnly(this, "pan");
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        pan: 0,
        channelCount: 1
      });
    }
    dispose() {
      super.dispose();
      this._panner.disconnect();
      this.pan.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/effect/BitCrusher.worklet.js
  var workletName2 = "bit-crusher";
  var bitCrusherWorklet = (
    /* javascript */
    `
	class BitCrusherWorklet extends SingleIOProcessor {

		static get parameterDescriptors() {
			return [{
				name: "bits",
				defaultValue: 12,
				minValue: 1,
				maxValue: 16,
				automationRate: 'k-rate'
			}];
		}

		generate(input, _channel, parameters) {
			const step = Math.pow(0.5, parameters.bits - 1);
			const val = step * Math.floor(input / step + 0.5);
			return val;
		}
	}
`
  );
  registerProcessor(workletName2, bitCrusherWorklet);

  // node_modules/tone/build/esm/effect/Freeverb.js
  var combFilterTunings = [
    1557 / 44100,
    1617 / 44100,
    1491 / 44100,
    1422 / 44100,
    1277 / 44100,
    1356 / 44100,
    1188 / 44100,
    1116 / 44100
  ];

  // node_modules/tone/build/esm/effect/JCReverb.js
  var combFilterDelayTimes = [
    1687 / 25e3,
    1601 / 25e3,
    2053 / 25e3,
    2251 / 25e3
  ];

  // node_modules/tone/build/esm/component/channel/Solo.js
  var Solo = class _Solo extends ToneAudioNode {
    constructor() {
      const options = optionsFromArguments(_Solo.getDefaults(), arguments, [
        "solo"
      ]);
      super(options);
      this.name = "Solo";
      this.input = this.output = new Gain({
        context: this.context
      });
      if (!_Solo._allSolos.has(this.context)) {
        _Solo._allSolos.set(this.context, /* @__PURE__ */ new Set());
      }
      _Solo._allSolos.get(this.context).add(this);
      this.solo = options.solo;
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        solo: false
      });
    }
    /**
     * Isolates this instance and mutes all other instances of Solo.
     * Only one instance can be soloed at a time. A soloed
     * instance will report `solo=false` when another instance is soloed.
     */
    get solo() {
      return this._isSoloed();
    }
    set solo(solo) {
      if (solo) {
        this._addSolo();
      } else {
        this._removeSolo();
      }
      _Solo._allSolos.get(this.context).forEach((instance) => instance._updateSolo());
    }
    /**
     * If the current instance is muted, i.e. another instance is soloed
     */
    get muted() {
      return this.input.gain.value === 0;
    }
    /**
     * Add this to the soloed array
     */
    _addSolo() {
      if (!_Solo._soloed.has(this.context)) {
        _Solo._soloed.set(this.context, /* @__PURE__ */ new Set());
      }
      _Solo._soloed.get(this.context).add(this);
    }
    /**
     * Remove this from the soloed array
     */
    _removeSolo() {
      if (_Solo._soloed.has(this.context)) {
        _Solo._soloed.get(this.context).delete(this);
      }
    }
    /**
     * Is this on the soloed array
     */
    _isSoloed() {
      return _Solo._soloed.has(this.context) && _Solo._soloed.get(this.context).has(this);
    }
    /**
     * Returns true if no one is soloed
     */
    _noSolos() {
      return !_Solo._soloed.has(this.context) || // or has a solo set but doesn't include any items
      _Solo._soloed.has(this.context) && _Solo._soloed.get(this.context).size === 0;
    }
    /**
     * Solo the current instance and unsolo all other instances.
     */
    _updateSolo() {
      if (this._isSoloed()) {
        this.input.gain.value = 1;
      } else if (this._noSolos()) {
        this.input.gain.value = 1;
      } else {
        this.input.gain.value = 0;
      }
    }
    dispose() {
      super.dispose();
      _Solo._allSolos.get(this.context).delete(this);
      this._removeSolo();
      return this;
    }
  };
  Solo._allSolos = /* @__PURE__ */ new Map();
  Solo._soloed = /* @__PURE__ */ new Map();

  // node_modules/tone/build/esm/component/channel/PanVol.js
  var PanVol = class _PanVol extends ToneAudioNode {
    constructor() {
      const options = optionsFromArguments(_PanVol.getDefaults(), arguments, [
        "pan",
        "volume"
      ]);
      super(options);
      this.name = "PanVol";
      this._panner = this.input = new Panner({
        context: this.context,
        pan: options.pan,
        channelCount: options.channelCount
      });
      this.pan = this._panner.pan;
      this._volume = this.output = new Volume({
        context: this.context,
        volume: options.volume
      });
      this.volume = this._volume.volume;
      this._panner.connect(this._volume);
      this.mute = options.mute;
      readOnly(this, ["pan", "volume"]);
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        mute: false,
        pan: 0,
        volume: 0,
        channelCount: 1
      });
    }
    /**
     * Mute/unmute the volume
     */
    get mute() {
      return this._volume.mute;
    }
    set mute(mute) {
      this._volume.mute = mute;
    }
    dispose() {
      super.dispose();
      this._panner.dispose();
      this.pan.dispose();
      this._volume.dispose();
      this.volume.dispose();
      return this;
    }
  };

  // node_modules/tone/build/esm/component/channel/Channel.js
  var Channel = class _Channel extends ToneAudioNode {
    constructor() {
      const options = optionsFromArguments(_Channel.getDefaults(), arguments, [
        "volume",
        "pan"
      ]);
      super(options);
      this.name = "Channel";
      this._solo = this.input = new Solo({
        solo: options.solo,
        context: this.context
      });
      this._panVol = this.output = new PanVol({
        context: this.context,
        pan: options.pan,
        volume: options.volume,
        mute: options.mute,
        channelCount: options.channelCount
      });
      this.pan = this._panVol.pan;
      this.volume = this._panVol.volume;
      this._solo.connect(this._panVol);
      readOnly(this, ["pan", "volume"]);
    }
    static getDefaults() {
      return Object.assign(ToneAudioNode.getDefaults(), {
        pan: 0,
        volume: 0,
        mute: false,
        solo: false,
        channelCount: 1
      });
    }
    /**
     * Solo/unsolo the channel. Soloing is only relative to other {@link Channel}s and {@link Solo} instances
     */
    get solo() {
      return this._solo.solo;
    }
    set solo(solo) {
      this._solo.solo = solo;
    }
    /**
     * If the current instance is muted, i.e. another instance is soloed,
     * or the channel is muted
     */
    get muted() {
      return this._solo.muted || this.mute;
    }
    /**
     * Mute/unmute the volume
     */
    get mute() {
      return this._panVol.mute;
    }
    set mute(mute) {
      this._panVol.mute = mute;
    }
    /**
     * Get the gain node belonging to the bus name. Create it if
     * it doesn't exist
     * @param name The bus name
     */
    _getBus(name) {
      if (!_Channel.buses.has(name)) {
        _Channel.buses.set(name, new Gain({ context: this.context }));
      }
      return _Channel.buses.get(name);
    }
    /**
     * Send audio to another channel using a string. `send` is a lot like
     * {@link connect}, except it uses a string instead of an object. This can
     * be useful in large applications to decouple sections since {@link send}
     * and {@link receive} can be invoked separately in order to connect an object
     * @param name The channel name to send the audio
     * @param volume The amount of the signal to send.
     * 	Defaults to 0db, i.e. send the entire signal
     * @returns Returns the gain node of this connection.
     */
    send(name, volume = 0) {
      const bus = this._getBus(name);
      const sendKnob = new Gain({
        context: this.context,
        units: "decibels",
        gain: volume
      });
      this.connect(sendKnob);
      sendKnob.connect(bus);
      return sendKnob;
    }
    /**
     * Receive audio from a channel which was connected with {@link send}.
     * @param name The channel name to receive audio from.
     */
    receive(name) {
      const bus = this._getBus(name);
      bus.connect(this);
      return this;
    }
    dispose() {
      super.dispose();
      this._panVol.dispose();
      this.pan.dispose();
      this.volume.dispose();
      this._solo.dispose();
      return this;
    }
  };
  Channel.buses = /* @__PURE__ */ new Map();

  // node_modules/tone/build/esm/index.js
  var Transport = getContext().transport;
  var Destination = getContext().destination;
  var Master = getContext().destination;
  var Listener = getContext().listener;
  var Draw = getContext().draw;
  var context = getContext();

  // src/index.ts
  var textAreaEditor = document.querySelector("#drum-tab");
  var buttonReset = document.querySelector("#button-reset");
  var buttonStartStop = document.querySelector("#button-start-stop");
  var DEFAULT_INPUT = `HH|x-x-x-x-x-x-x-x-||
 S|----o-------o---||
 B|o-------o-------||
   1 + 2 + 3 + 4 +`;
  buttonReset.addEventListener(
    "click",
    () => textAreaEditor.value = DEFAULT_INPUT
  );
  var state = "paused";
  buttonStartStop.addEventListener("click", () => {
    if (state === "paused") {
      state = "playing";
      buttonStartStop.textContent = "Stop";
      const player = new Player(
        "./drum-samples_acoustic-kit_kick.mp3"
      ).toDestination();
      player.autostart = true;
    } else {
      state = "paused";
      buttonStartStop.textContent = "Start";
    }
  });
})();
/*! Bundled license information:

tone/build/esm/core/Tone.js:
  (**
   * Tone.js
   * @author Yotam Mann
   * @license http://opensource.org/licenses/MIT MIT License
   * @copyright 2014-2024 Yotam Mann
   *)
*/
