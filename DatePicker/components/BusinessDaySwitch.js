function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import * as React from 'react';
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Field, Picker, Popup } from "react-vant";
import "../index.less";
var BusinessDaySwitch = function BusinessDaySwitch(_ref) {
  var onChange = _ref.onChange,
    searchBusinessDay = _ref.searchBusinessDay;
  var defaultDateType = searchBusinessDay ? '营业日' : '自然日';
  var _useState = useState(defaultDateType),
    _useState2 = _slicedToArray(_useState, 2),
    dateType = _useState2[0],
    setDateType = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showDateTypePicker = _useState4[0],
    setDateTypeShowPicker = _useState4[1];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
    readOnly: true,
    clickable: true,
    value: dateType,
    style: {
      width: 120
    },
    rightIcon: /*#__PURE__*/React.createElement(DownOutlined, {
      className: "tst-date-picker-right-icon"
    }),
    onClick: function onClick() {
      return setDateTypeShowPicker(true);
    }
  }), /*#__PURE__*/React.createElement(Popup, {
    closeable: false,
    visible: showDateTypePicker,
    round: false,
    position: "bottom",
    onClose: function onClose() {
      return setDateTypeShowPicker(false);
    }
  }, /*#__PURE__*/React.createElement(Picker, {
    title: "\u65E5\u671F\u7C7B\u578B",
    columns: searchBusinessDay ? ['营业日', '自然日'] : ['自然日'],
    onConfirm: function onConfirm(value) {
      setDateType(value);
      onChange({
        searchBusinessDay: value === '营业日'
      });
      setDateTypeShowPicker(false);
    },
    onCancel: function onCancel() {
      setDateTypeShowPicker(false);
    }
  })));
};
export default BusinessDaySwitch;