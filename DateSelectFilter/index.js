function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
import "antd/es/row/style";
import _Row from "antd/es/row";
import "antd/es/select/style";
import _Select from "antd/es/select";
var _excluded = ["type", "className", "defaultDateType", "onChange", "defaultValue", "endMoment", "picks"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useImperativeHandle, useMemo, useState } from 'react';
import moment from 'moment';
import { DATE_SELECT_OPTIONS } from "./enum";
import QuickDateSelect from "./components/QuickDateSelect";
var DateSelectFilter = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'default' : _ref$type,
    className = _ref.className,
    defaultDateType = _ref.defaultDateType,
    onChange = _ref.onChange,
    defaultValue = _ref.defaultValue,
    _ref$endMoment = _ref.endMoment,
    endMoment = _ref$endMoment === void 0 ? moment().endOf('day').subtract(1, 'days') : _ref$endMoment,
    _ref$picks = _ref.picks,
    picks = _ref$picks === void 0 ? ['DAY_1', 'DAY_7', 'DAY_30', 'CUSTOM'] : _ref$picks,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var showOptions = useMemo(function () {
    return picks.map(function (pick) {
      return DATE_SELECT_OPTIONS.find(function (item) {
        return item.value === pick;
      });
    });
  }, []);
  var _useState = useState(defaultDateType || showOptions[0].value),
    _useState2 = _slicedToArray(_useState, 2),
    dateType = _useState2[0],
    setDateType = _useState2[1];
  var DateRender = showOptions.find(function (item) {
    return item.value === dateType;
  }).DateRender;
  useImperativeHandle(ref, function () {
    return _objectSpread({
      defaultDateType: dateType,
      defaultValue: defaultValue
    }, restProps);
  });
  var handleDatePickerChange = function handleDatePickerChange(values) {
    onChange(values, values.map(function (m) {
      return m.format('YYYY-MM-DD');
    }), dateType);
  };
  if (type === 'quick') {
    return /*#__PURE__*/React.createElement(QuickDateSelect, {
      onChange: handleDatePickerChange,
      endMoment: endMoment,
      picks: picks,
      defaultValue: defaultValue
    });
  }
  return /*#__PURE__*/React.createElement(_Row, {
    align: "middle",
    className: className
  }, /*#__PURE__*/React.createElement(_Select, {
    defaultValue: dateType,
    value: dateType,
    style: {
      width: 120,
      marginRight: 8
    },
    onChange: setDateType
  }, showOptions.map(function (_ref2) {
    var label = _ref2.label,
      value = _ref2.value;
    return /*#__PURE__*/React.createElement(_Select.Option, {
      key: value,
      value: value
    }, label);
  })), /*#__PURE__*/React.createElement(DateRender, _extends({}, restProps, {
    defaultValue: defaultValue,
    endMoment: endMoment,
    onChange: handleDatePickerChange
  })));
});
export default DateSelectFilter;