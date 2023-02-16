function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import * as React from 'react';
import ColumnsTop from "./ColumnsTop/index";
import Title from "./Title";
import moment from 'moment';
import DialogAlert from "./DialogAlert";
import WeekPicker from "./WeekPicker/index";
var PickerWeek = function PickerWeek(_ref) {
  var setChangeValue = _ref.setChangeValue,
    onConfirm = _ref.onConfirm,
    onCancel = _ref.onCancel,
    changeValue = _ref.changeValue,
    setType = _ref.setType;
  var onChangeWeekPicker = function onChangeWeekPicker(val) {
    var _val = _slicedToArray(val, 2),
      year = _val[0],
      week = _val[1];
    var value = "".concat(year === null || year === void 0 ? void 0 : year.text).concat(week === null || week === void 0 ? void 0 : week.text, " \uFF08").concat(week === null || week === void 0 ? void 0 : week.value, "\uFF09");
    setChangeValue(value);
  };
  var onConfirmWeekPicker = function onConfirmWeekPicker(value) {
    var limit = moment().valueOf();
    if (moment(value.dates[1]).valueOf() >= limit) {
      DialogAlert('选择时间不能大于当前时间');
      return;
    }
    var parma = {
      dates: [moment(value.dates[0]), moment(value.dates[1])]
    };
    onConfirm(value.text, parma);
  };
  return /*#__PURE__*/React.createElement(WeekPicker, {
    title: /*#__PURE__*/React.createElement(Title, null),
    onCancel: onCancel,
    onChange: onChangeWeekPicker,
    columnsTop: /*#__PURE__*/React.createElement(ColumnsTop, {
      changeValue: changeValue,
      type: "week",
      setType: setType,
      setChangeValue: setChangeValue
    }),
    onConfirm: onConfirmWeekPicker,
    onDefaultChange: setChangeValue
  });
};
export default PickerWeek;