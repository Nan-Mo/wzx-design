import "antd/es/date-picker/style";
import _DatePicker from "antd/es/date-picker";
var _excluded = ["defaultValue", "onChange", "disabledDate", "rangeLimit"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import * as React from 'react';
var RangePicker = _DatePicker.RangePicker;
function CustomRangePicker(_ref) {
  var defaultValue = _ref.defaultValue,
    onChange = _ref.onChange,
    _disabledDate = _ref.disabledDate,
    rangeLimit = _ref.rangeLimit,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var controlled = ('value' in restProps);
  var _React$useState = React.useState(function () {
      return controlled ? restProps.value : defaultValue;
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    innerValue = _React$useState2[0],
    setInnerValue = _React$useState2[1];
  var payloadRef = React.useRef({
    open: false,
    payload: null
  });
  var _React$useState3 = React.useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    dates = _React$useState4[0],
    setDates = _React$useState4[1];
  var triggerChange = function triggerChange() {
    if (!controlled) {
      setInnerValue(arguments.length <= 0 ? undefined : arguments[0]);
    }
    onChange && onChange.apply(void 0, arguments);
  };
  var mergedValue = controlled ? restProps.value : innerValue;

  // @ts-ignore
  var props = {
    disabledDate: function disabledDate(m) {
      return _disabledDate && _disabledDate(m) || !!rangeLimit && !!dates && (!!dates[0] && m.diff(dates[0], 'days') >= rangeLimit || !!dates[1] && dates[1].diff(m, 'days') >= rangeLimit);
    },
    value: dates || mergedValue
  };
  return /*#__PURE__*/React.createElement(RangePicker, _extends({}, restProps, props, {
    onOpenChange: function onOpenChange(open) {
      if (open) {
        controlled && setInnerValue(restProps.value);
      } else {
        if (payloadRef.current.payload) {
          triggerChange.apply(void 0, _toConsumableArray(payloadRef.current.payload));
          payloadRef.current.payload = null;
        }
        setDates(null);
      }
      payloadRef.current.open = open;
    },
    onChange: function onChange() {
      if (payloadRef.current.open) return;
      triggerChange.apply(void 0, arguments);
    },
    onCalendarChange: function onCalendarChange(value) {
      var nextValue = mergedValue && value ? value.map(function (v, i) {
        return v === mergedValue[i] ? null : v;
      }) : value;
      (nextValue === null || nextValue === void 0 ? void 0 : nextValue.filter(function (v) {
        return !!v;
      }).length) === 2 && (payloadRef.current.payload = [nextValue, nextValue.map(function (m) {
        return m.format('YYYY-MM-DD');
      })]);
      setDates(nextValue);
    }
  }));
}
CustomRangePicker.defaultProps = {
  rangeLimit: 31
};
export default CustomRangePicker;