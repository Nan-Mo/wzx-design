function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import * as React from 'react';
import moment from 'moment';
import { memo, useEffect, useMemo, useState } from 'react';
import { Picker } from 'react-vant';
var getWeek = function getWeek(y) {
  var oneDay = moment(y + '-01-01');
  var oneWeek = null;
  if (oneDay.format('wo') === '1周') {
    oneWeek = oneDay.startOf('week').format('YYYY-MM-DD');
  } else {
    console.log('weeks');
    oneDay.add(1, 'weeks');
    oneWeek = oneDay.startOf('week').format('YYYY-MM-DD');
  }
  var arr = [];
  var weelyStr = '1周';
  do {
    var d = {
      value: '',
      text: ''
    };
    var time = moment(oneWeek);
    d.value = "".concat(time.startOf('week').format('MM-DD'), "~").concat(time.endOf('week').format('MM-DD'));
    d.text = time.format('第wo');
    // d = `${time.format('第wo')}（${time.startOf('week').format('MM/DD')}-${}）`;
    // d = time.format('第wo');
    arr.push(d);
    oneDay.add(1, 'weeks');
    oneWeek = oneDay.startOf('week').format('YYYY-MM-DD');
    weelyStr = oneDay.format('wo');
  } while (weelyStr !== '1周' && oneWeek.indexOf(y) > -1);
  return arr;
};
var currentYear = new Date().getFullYear();
export default /*#__PURE__*/memo(function (_ref) {
  var title = _ref.title,
    columnsTop = _ref.columnsTop,
    _ref$minDate = _ref.minDate,
    minDate = _ref$minDate === void 0 ? new Date(currentYear - 10, 0, 1) : _ref$minDate,
    _ref$maxDate = _ref.maxDate,
    maxDate = _ref$maxDate === void 0 ? new Date(currentYear + 10, 11, 31) : _ref$maxDate,
    onDefaultChange = _ref.onDefaultChange,
    _onConfirm = _ref.onConfirm,
    _onChange = _ref.onChange,
    onCancel = _ref.onCancel;
  var _useState = useState(String(currentYear)),
    _useState2 = _slicedToArray(_useState, 2),
    year = _useState2[0],
    setYear = _useState2[1];
  var columns = useMemo(function () {
    var minYear = moment(minDate).get('year');
    var maxYear = moment(maxDate).get('year');
    var cols = {};
    for (var i = minYear; i < maxYear; i++) {
      cols[i] = getWeek(i);
    }
    var week = moment().subtract(7, 'days').format('第wo');
    var index = Object.keys(cols).findIndex(function (y) {
      return y === year;
    });
    var weekIndex = cols[year].findIndex(function (w) {
      return w.text === week;
    });
    return [{
      values: Object.keys(cols).map(function (col) {
        return {
          text: "".concat(col, "\u5E74"),
          value: col
        };
      }),
      defaultIndex: index
    }, {
      values: cols[year],
      defaultIndex: weekIndex
    }];
  }, [year]);
  useEffect(function () {
    if (onDefaultChange) {
      var newColumns = columns.map(function (column) {
        return column.values[column.defaultIndex];
      });
      onDefaultChange("".concat(newColumns[0].text).concat(newColumns[1].text, " \uFF08").concat(newColumns[1].value, "\uFF09"));
    }
  }, []);
  return /*#__PURE__*/React.createElement(Picker, {
    title: title,
    columns: columns,
    columnsTop: columnsTop,
    onCancel: onCancel,
    onChange: function onChange(values) {
      var y = values[0];
      setYear(y.value);
      if (_onChange) {
        _onChange(values);
      }
    },
    onConfirm: function onConfirm(values) {
      var dates = values[1].value.split('~');
      var datesArray = ["".concat(values[0].value, "-").concat(dates[0]), "".concat(values[0].value, "-").concat(dates[1])];
      _onConfirm({
        dates: datesArray,
        text: "".concat(values[0].text).concat(values[1].text)
      });
    }
  });
});