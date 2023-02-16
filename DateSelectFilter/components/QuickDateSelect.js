import "antd/es/date-picker/style";
import _DatePicker from "antd/es/date-picker";
import * as React from 'react';
import { getDataRanges } from "../enum";
var QuickDateSelect = function QuickDateSelect(_ref) {
  var endMoment = _ref.endMoment,
    _ref$picks = _ref.picks,
    picks = _ref$picks === void 0 ? ['DAY_1', 'DAY_7', 'DAY_30', 'CUSTOM'] : _ref$picks,
    onChange = _ref.onChange,
    defaultValue = _ref.defaultValue;
  var dataRanges = getDataRanges(endMoment);
  var showRanges = {};
  dataRanges.forEach(function (item) {
    if (picks.includes(item.value)) {
      showRanges[item.label] = item.time;
    }
  });
  React.useEffect(function () {
    if (!defaultValue) {
      onChange(showRanges[Object.keys(showRanges)[0]]);
    }
  }, []);
  return /*#__PURE__*/React.createElement(_DatePicker.RangePicker, {
    allowClear: false,
    defaultValue: showRanges[Object.keys(showRanges)[0]],
    ranges: showRanges,
    disabledDate: function disabledDate(m) {
      return m.isAfter(endMoment);
    },
    onChange: onChange
  });
};
export default QuickDateSelect;