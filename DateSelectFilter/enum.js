import "antd/es/space/style";
import _Space from "antd/es/space";
import "antd/es/date-picker/style";
import _DatePicker from "antd/es/date-picker";
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import CustomRangePicker from "./components/CustomRangePicker";
var RangePicker = _DatePicker.RangePicker;
export var DATE_SELECT_OPTIONS = [{
  value: 'DAY_0',
  label: '今天',
  DateRender: function DateRender(_ref) {
    var onChange = _ref.onChange;
    useEffect(function () {
      onChange([moment().endOf('day'), moment().endOf('day')]);
    }, []);
    return /*#__PURE__*/React.createElement(_DatePicker, {
      disabled: true,
      value: moment().endOf('day')
    });
  }
}, {
  value: 'DAY_1',
  label: '昨天',
  DateRender: function DateRender(_ref2) {
    var onChange = _ref2.onChange;
    var endMoment = moment().endOf('day').subtract(1, 'days');
    useEffect(function () {
      onChange([endMoment, endMoment]);
    }, []);
    return /*#__PURE__*/React.createElement(_DatePicker, {
      disabled: true,
      value: endMoment
    });
  }
}, {
  value: 'DAY_2',
  label: '前天',
  DateRender: function DateRender(_ref3) {
    var onChange = _ref3.onChange;
    var endMoment = moment().endOf('day').subtract(2, 'days');
    useEffect(function () {
      onChange([endMoment, endMoment]);
    }, []);
    return /*#__PURE__*/React.createElement(_DatePicker, {
      disabled: true,
      value: endMoment
    });
  }
}, {
  value: 'DAY_7',
  label: '近 7 天',
  DateRender: function DateRender(_ref4) {
    var endMoment = _ref4.endMoment,
      onChange = _ref4.onChange;
    var rangeData = [endMoment.clone().subtract(6, 'days'), endMoment];
    useEffect(function () {
      onChange(rangeData);
    }, []);
    return /*#__PURE__*/React.createElement(RangePicker, {
      disabled: true,
      value: rangeData
    });
  }
}, {
  value: 'DAY_15',
  label: '近 15 天',
  DateRender: function DateRender(_ref5) {
    var endMoment = _ref5.endMoment,
      onChange = _ref5.onChange;
    var rangeData = [endMoment.clone().subtract(14, 'days'), endMoment];
    useEffect(function () {
      onChange(rangeData);
    }, []);
    return /*#__PURE__*/React.createElement(RangePicker, {
      disabled: true,
      value: rangeData
    });
  }
}, {
  value: 'DAY_30',
  label: '近 30 天',
  DateRender: function DateRender(_ref6) {
    var endMoment = _ref6.endMoment,
      onChange = _ref6.onChange;
    var rangeData = [endMoment.clone().subtract(29, 'days'), endMoment];
    useEffect(function () {
      onChange(rangeData);
    }, []);
    return /*#__PURE__*/React.createElement(RangePicker, {
      disabled: true,
      value: rangeData
    });
  }
}, {
  value: 'CURRENT_WEEK',
  label: '本周',
  DateRender: function DateRender(_ref7) {
    var endMoment = _ref7.endMoment,
      onChange = _ref7.onChange;
    var rangeData = [moment().startOf('week'), endMoment];
    useEffect(function () {
      onChange(rangeData);
    }, []);
    return /*#__PURE__*/React.createElement(RangePicker, {
      disabled: true,
      value: rangeData
    });
  }
}, {
  value: 'LAST_WEEK',
  label: '上周',
  DateRender: function DateRender(_ref8) {
    var endMoment = _ref8.endMoment,
      onChange = _ref8.onChange;
    var end = endMoment.clone().subtract(7, 'days').endOf('week');
    var rangeData = [end.clone().startOf('week'), end];
    useEffect(function () {
      onChange(rangeData);
    }, []);
    return /*#__PURE__*/React.createElement(RangePicker, {
      disabled: true,
      value: rangeData
    });
  }
}, {
  value: 'CURRENT_MONTH',
  label: '本月',
  DateRender: function DateRender(_ref9) {
    var endMoment = _ref9.endMoment,
      onChange = _ref9.onChange;
    var rangeData = [moment().startOf('month'), endMoment];
    useEffect(function () {
      onChange(rangeData);
    }, []);
    return /*#__PURE__*/React.createElement(RangePicker, {
      disabled: true,
      value: rangeData
    });
  }
}, {
  value: 'LAST_MONTH',
  label: '上月',
  DateRender: function DateRender(_ref10) {
    var endMoment = _ref10.endMoment,
      onChange = _ref10.onChange;
    var end = endMoment.clone().startOf('month').subtract(1, 'days');
    var rangeData = [end.clone().startOf('month'), end];
    useEffect(function () {
      onChange(rangeData);
    }, []);
    return /*#__PURE__*/React.createElement(RangePicker, {
      disabled: true,
      value: rangeData
    });
  }
}, {
  value: 'WEEK',
  label: '自然周',
  DateRender: function DateRender(_ref11) {
    var defaultValue = _ref11.defaultValue,
      disabledDate = _ref11.disabledDate,
      endMoment = _ref11.endMoment,
      onChange = _ref11.onChange;
    var realEndMoment = endMoment.subtract(endMoment.get('day'), 'days');
    var _useState = useState(function () {
        if (defaultValue && defaultValue[0].get('day') === 1 && defaultValue[1].diff(defaultValue[0], 'day') === 6) {
          return defaultValue[0];
        }
        return realEndMoment.clone().startOf('week');
      }),
      _useState2 = _slicedToArray(_useState, 2),
      time = _useState2[0],
      setTime = _useState2[1];
    useEffect(function () {
      onChange([time.clone(), time.clone().endOf('week')]);
    }, [time]);
    return /*#__PURE__*/React.createElement(_Space, null, /*#__PURE__*/React.createElement(_DatePicker, {
      allowClear: false,
      disabledDate: disabledDate || function (m) {
        return m.isAfter(realEndMoment);
      },
      value: time,
      onChange: function onChange(m) {
        return setTime(m.startOf('week'));
      }
    }), "\xA0\xA0~\xA0\xA0", /*#__PURE__*/React.createElement(_DatePicker, {
      disabled: true,
      value: time.clone().endOf('week')
    }));
  }
}, {
  value: 'MONTH',
  label: '自然月',
  DateRender: function DateRender(_ref12) {
    var defaultValue = _ref12.defaultValue,
      disabledDate = _ref12.disabledDate,
      endMoment = _ref12.endMoment,
      onChange = _ref12.onChange;
    var realEndMoment = endMoment.clone().add(1, 'days').subtract(1, 'month').endOf('month');
    var _useState3 = useState(function () {
        return defaultValue && defaultValue[0].isBefore(realEndMoment) ? defaultValue[0] : realEndMoment;
      }),
      _useState4 = _slicedToArray(_useState3, 2),
      month = _useState4[0],
      setMonth = _useState4[1];
    useEffect(function () {
      onChange([month.clone().startOf('month'), month.clone().endOf('month')]);
    }, [month]);
    return /*#__PURE__*/React.createElement(_DatePicker, {
      picker: "month",
      allowClear: false,
      disabledDate: disabledDate || function (m) {
        return m.isAfter(realEndMoment);
      },
      value: month,
      onChange: setMonth
    });
  }
}, {
  value: 'DATE',
  label: '自然日',
  DateRender: function DateRender(_ref13) {
    var defaultValue = _ref13.defaultValue,
      disabledDate = _ref13.disabledDate,
      endMoment = _ref13.endMoment,
      onChange = _ref13.onChange;
    var _useState5 = useState(function () {
        return defaultValue ? defaultValue[0] : endMoment;
      }),
      _useState6 = _slicedToArray(_useState5, 2),
      date = _useState6[0],
      setDate = _useState6[1];
    useEffect(function () {
      onChange([date.clone(), date.clone()]);
    }, [date]);
    return /*#__PURE__*/React.createElement(_DatePicker, {
      allowClear: false,
      value: date,
      disabledDate: disabledDate || function (m) {
        return m.isAfter(endMoment);
      },
      onChange: setDate
    });
  }
}, {
  value: 'CURRENT_WEEK',
  label: '本周',
  DateRender: function DateRender(_ref14) {
    var onChange = _ref14.onChange;
    var rangeData = [moment().startOf('week'), moment().endOf('week')];
    useEffect(function () {
      onChange(rangeData);
    }, []);
    return /*#__PURE__*/React.createElement(RangePicker, {
      disabled: true,
      value: rangeData
    });
  }
}, {
  value: 'LAST_WEEK',
  label: '上周',
  DateRender: function DateRender(_ref15) {
    var onChange = _ref15.onChange;
    var rangeData = [moment().subtract(1, 'week').startOf('week'), moment().subtract(1, 'week').endOf('week')];
    useEffect(function () {
      onChange(rangeData);
    }, []);
    return /*#__PURE__*/React.createElement(RangePicker, {
      disabled: true,
      value: rangeData
    });
  }
}, {
  value: 'CURRENT_MONTH',
  label: '本月',
  DateRender: function DateRender(_ref16) {
    var onChange = _ref16.onChange;
    var rangeData = [moment().startOf('month'), moment().endOf('month')];
    useEffect(function () {
      onChange(rangeData);
    }, []);
    return /*#__PURE__*/React.createElement(RangePicker, {
      disabled: true,
      value: rangeData
    });
  }
}, {
  value: 'LAST_MONTH',
  label: '上月',
  DateRender: function DateRender(_ref17) {
    var onChange = _ref17.onChange;
    var rangeData = [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')];
    useEffect(function () {
      onChange(rangeData);
    }, []);
    return /*#__PURE__*/React.createElement(RangePicker, {
      disabled: true,
      value: rangeData
    });
  }
}, {
  value: 'CUSTOM',
  label: '自定义',
  DateRender: function DateRender(_ref18) {
    var defaultValue = _ref18.defaultValue,
      disabledDate = _ref18.disabledDate,
      rangeLimit = _ref18.rangeLimit,
      endMoment = _ref18.endMoment,
      onChange = _ref18.onChange;
    var _useState7 = useState(function () {
        return defaultValue || [endMoment, endMoment];
      }),
      _useState8 = _slicedToArray(_useState7, 2),
      value = _useState8[0],
      setValue = _useState8[1];
    useEffect(function () {
      onChange(value);
    }, [value]);
    return /*#__PURE__*/React.createElement(CustomRangePicker, {
      allowClear: false,
      disabledDate: disabledDate || function (m) {
        return m.isAfter(endMoment);
      },
      value: value,
      rangeLimit: rangeLimit,
      onChange: setValue
    });
  }
}];
export var getDataRanges = function getDataRanges(endMoment) {
  return [{
    value: 'DAY_0',
    label: '今天',
    time: [endMoment, endMoment]
  }, {
    value: 'DAY_1',
    label: '昨天',
    time: [endMoment.clone().subtract(1, 'days'), endMoment]
  }, {
    value: 'DAY_2',
    label: '前天',
    time: [endMoment.clone().subtract(2, 'days'), endMoment]
  }, {
    value: 'DAY_7',
    label: '近 7 天',
    time: [endMoment.clone().subtract(6, 'days'), endMoment]
  }, {
    value: 'DAY_15',
    label: '近 15 天',
    time: [endMoment.clone().subtract(14, 'days'), endMoment]
  }, {
    value: 'DAY_30',
    label: '近 30 天',
    time: [endMoment.clone().subtract(29, 'days'), endMoment]
  }, {
    value: 'CURRENT_WEEK',
    label: '本周',
    time: [moment().startOf('week'), endMoment]
  }, {
    value: 'LAST_WEEK',
    label: '上周',
    time: [endMoment.clone().subtract(7, 'days').endOf('week').clone().startOf('week'), endMoment.clone().subtract(7, 'days').endOf('week')]
  }, {
    value: 'CURRENT_MONTH',
    label: '本月',
    time: [moment().startOf('month'), endMoment]
  }, {
    value: 'LAST_MONTH',
    label: '上月',
    time: [endMoment.clone().startOf('month').subtract(1, 'days').clone().startOf('month'), endMoment.clone().startOf('month').subtract(1, 'days')]
  }];
};