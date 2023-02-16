function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import * as React from 'react';
import { Popup, Field } from 'react-vant';
import { CalendarOutlined } from '@ant-design/icons';
import BusinessDaySwitch from "./components/BusinessDaySwitch";
import { PickerCustom, PickerDate, PickerWeek } from "./components";
import { formatCN } from "./const";
import "./index.less";
var DatePickerIndex = function DatePickerIndex(_ref) {
  var onChange = _ref.onChange,
    onType = _ref.onType,
    businessDaySwitch = _ref.businessDaySwitch,
    _ref$rightIcon = _ref.rightIcon,
    rightIcon = _ref$rightIcon === void 0 ? /*#__PURE__*/React.createElement(CalendarOutlined, {
      className: "tst-date-picker-right-icon"
    }) : _ref$rightIcon,
    style = _ref.style,
    searchBusinessDay = _ref.searchBusinessDay;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    showPicker = _React$useState2[0],
    setShowPicker = _React$useState2[1];
  var _React$useState3 = React.useState(formatCN()),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    fieldValue = _React$useState4[0],
    setFieldValue = _React$useState4[1];
  var _React$useState5 = React.useState(formatCN()),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    changeValue = _React$useState6[0],
    setChangeValue = _React$useState6[1];
  var _React$useState7 = React.useState('date'),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    type = _React$useState8[0],
    setType = _React$useState8[1];
  var onConfirm = function onConfirm(fieldValue, parma) {
    setFieldValue(fieldValue);
    onChange(parma);
    setShowPicker(false);
  };
  var onCancel = function onCancel() {
    return setShowPicker(false);
  };
  var setTypeDateSwitch = function setTypeDateSwitch(t) {
    setType(t);
    onType === null || onType === void 0 ? void 0 : onType(t);
  };
  var DateSwitch = function DateSwitch() {
    switch (type) {
      case 'date':
      case 'year-month':
        return /*#__PURE__*/React.createElement(PickerDate, {
          type: type,
          onCancel: onCancel,
          onConfirm: onConfirm,
          changeValue: changeValue,
          setType: setTypeDateSwitch,
          setChangeValue: setChangeValue
        });
      case 'week':
        return /*#__PURE__*/React.createElement(PickerWeek, {
          onCancel: onCancel,
          onConfirm: onConfirm,
          changeValue: changeValue,
          setType: setTypeDateSwitch,
          setChangeValue: setChangeValue
        });
      case 'custom':
        return /*#__PURE__*/React.createElement(PickerCustom, {
          onCancel: onCancel,
          onConfirm: onConfirm,
          changeValue: changeValue,
          setType: setTypeDateSwitch,
          setChangeValue: setChangeValue
        });
      default:
        return null;
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: style,
    className: "tst-date-picker-field-box"
  }, businessDaySwitch && /*#__PURE__*/React.createElement(BusinessDaySwitch, {
    searchBusinessDay: searchBusinessDay,
    onChange: onChange
  }), /*#__PURE__*/React.createElement(Field, {
    readOnly: true,
    clickable: true,
    value: fieldValue,
    placeholder: "\u9009\u62E9\u9009\u62E9\u65E5\u671F",
    rightIcon: rightIcon,
    onClick: function onClick() {
      return setShowPicker(true);
    }
  })), /*#__PURE__*/React.createElement(Popup, {
    closeable: false,
    visible: showPicker,
    round: false,
    position: "bottom",
    onClose: function onClose() {
      return setShowPicker(false);
    }
  }, DateSwitch()));
};
export default DatePickerIndex;