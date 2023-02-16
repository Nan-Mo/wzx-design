import * as React from 'react';
import { DatetimePicker } from "react-vant";
import { date, formatCN } from "../const";
import Title from "./Title";
import moment from 'moment';
import DialogAlert from "./DialogAlert";
import ColumnsTop from "./ColumnsTop/index";
var dateFomat = function dateFomat(val, type) {
  return type === 'date' ? formatCN(val) : moment(val).format('YYYY年MM月');
};
var PickerDate = function PickerDate(_ref) {
  var type = _ref.type,
    onConfirm = _ref.onConfirm,
    onCancel = _ref.onCancel,
    setChangeValue = _ref.setChangeValue,
    changeValue = _ref.changeValue,
    setType = _ref.setType;
  var onConfirmDatetimePicker = function onConfirmDatetimePicker(val) {
    var limit = type === 'date' ? moment().valueOf() : moment().subtract(1, 'months').valueOf();
    if (moment(val).valueOf() >= limit) {
      DialogAlert('选择时间不能大于当前时间');
      return;
    }
    var startDate = type === 'date' ? moment(val) : moment(val).startOf('month');
    var endDate = type === 'date' ? moment(val) : moment(val).endOf('month');
    var parma = {
      dates: [startDate, endDate]
    };
    onConfirm(dateFomat(val, type), parma);
  };
  return /*#__PURE__*/React.createElement(DatetimePicker, {
    type: type,
    minDate: date.minDate,
    maxDate: date.maxDate,
    value: date.today,
    title: /*#__PURE__*/React.createElement(Title, null),
    onChange: function onChange(val) {
      return setChangeValue(dateFomat(val, type));
    },
    onCancel: onCancel,
    onConfirm: onConfirmDatetimePicker,
    columnsTop: /*#__PURE__*/React.createElement(ColumnsTop, {
      type: type,
      changeValue: changeValue,
      setType: setType,
      setChangeValue: setChangeValue
    })
  });
};
export default PickerDate;