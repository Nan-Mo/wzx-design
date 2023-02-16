function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import * as React from 'react';
import classNames from "classnames";
import moment from "moment";
import { useState } from "react";
import { DatetimePicker } from "react-vant";
import ColumnsTop from "../ColumnsTop/index";
import { date, defaultEndTime, defaultStartTime, formatCN } from "../../const";
import DialogAlert from "../DialogAlert";
import "./index.less";
var getDateValueOf = function getDateValueOf(date) {
  return new Date("".concat(date.format('YYYY-MM-DD'))).valueOf();
};
var StartAndEndTime = function StartAndEndTime(_ref) {
  var onClick = _ref.onClick,
    active = _ref.active,
    text = _ref.text;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    className: classNames('tst-date-picker-custom-time', _defineProperty({}, 'tst-date-picker-custom-time-active', active))
  }, text);
};
var Title = function Title() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: '10px'
    }
  }, "\u9009\u62E9\u65F6\u95F4"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#686868',
      fontSize: '14px'
    }
  }, "\u65F6\u6BB5\u76F8\u5DEE\u4E0D\u8D85\u8FC731\u5929"));
};
var CustomDate = function CustomDate(_ref2) {
  var onConfirm = _ref2.onConfirm,
    onCancel = _ref2.onCancel,
    setChangeValue = _ref2.setChangeValue,
    setType = _ref2.setType,
    changeValue = _ref2.changeValue;
  var _useState = useState('start'),
    _useState2 = _slicedToArray(_useState, 2),
    isStartOrEnd = _useState2[0],
    setIsStartOrEnd = _useState2[1];
  var _useState3 = useState(defaultStartTime),
    _useState4 = _slicedToArray(_useState3, 2),
    startTime = _useState4[0],
    setStartTime = _useState4[1];
  var _useState5 = useState(defaultEndTime),
    _useState6 = _slicedToArray(_useState5, 2),
    endTime = _useState6[0],
    setEndTime = _useState6[1];
  var value = isStartOrEnd === 'start' ? startTime.value.toDate() : isStartOrEnd === 'end' ? endTime.value.toDate() : startTime.value.toDate();
  var onChangeDatetimePicker = function onChangeDatetimePicker(val) {
    var dateValue = {
      text: formatCN(val),
      value: moment(val)
    };
    if (isStartOrEnd === 'start') {
      setStartTime(dateValue);
    }
    if (isStartOrEnd === 'end') {
      setEndTime(dateValue);
    }
  };
  var onConfirmDatetimePicker = function onConfirmDatetimePicker() {
    var startTimeValue = startTime.value;
    var endTimeValue = endTime.value;
    var limit31Day = getDateValueOf(moment(startTimeValue).add(31, 'day'));
    var nowValueOf = getDateValueOf(moment());
    var endValueOf = getDateValueOf(endTime.value);
    var startValueOf = getDateValueOf(startTimeValue);
    if (endValueOf > nowValueOf) {
      DialogAlert('结束时间不能大于当前时间');
      return;
    }
    if (endValueOf < startValueOf) {
      DialogAlert('结束时间不能小于开始时间');
      return;
    }
    if (endValueOf >= limit31Day) {
      DialogAlert('已超过31天，请重新选择');
      return;
    }
    var parma = {
      dates: [startTimeValue, endTimeValue]
    };
    onConfirm("".concat(startTime.text, " ~ ").concat(endTime.text), parma);
  };
  return /*#__PURE__*/React.createElement(DatetimePicker, {
    title: /*#__PURE__*/React.createElement(Title, null),
    type: "date",
    minDate: date.minDate,
    maxDate: date.maxDate,
    value: value,
    onChange: onChangeDatetimePicker,
    onCancel: onCancel,
    onConfirm: onConfirmDatetimePicker,
    columnsTop: /*#__PURE__*/React.createElement(ColumnsTop, {
      type: "custom",
      changeValue: changeValue,
      setType: setType,
      setChangeValue: setChangeValue,
      bottom: function bottom() {
        return /*#__PURE__*/React.createElement("div", {
          className: "tst-date-picker-custom"
        }, /*#__PURE__*/React.createElement(StartAndEndTime, {
          onClick: function onClick() {
            setIsStartOrEnd === null || setIsStartOrEnd === void 0 ? void 0 : setIsStartOrEnd('start');
          },
          active: isStartOrEnd === 'start',
          text: startTime === null || startTime === void 0 ? void 0 : startTime.text
        }), /*#__PURE__*/React.createElement("span", null, "~"), /*#__PURE__*/React.createElement(StartAndEndTime, {
          onClick: function onClick() {
            setIsStartOrEnd === null || setIsStartOrEnd === void 0 ? void 0 : setIsStartOrEnd('end');
          },
          active: isStartOrEnd === 'end',
          text: endTime === null || endTime === void 0 ? void 0 : endTime.text
        }));
      }
    })
  });
};
export default CustomDate;