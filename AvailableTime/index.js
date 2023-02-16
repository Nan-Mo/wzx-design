import "antd/es/checkbox/style";
import _Checkbox from "antd/es/checkbox";
import "antd/es/form/style";
import _Form from "antd/es/form";
import "antd/es/radio/style";
import _Radio from "antd/es/radio";
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import * as React from 'react';
import TimeInterval from "../TimeInterval";
export var dayOptions = [{
  label: '周一',
  value: '1'
}, {
  label: '周二',
  value: '2'
}, {
  label: '周三',
  value: '3'
}, {
  label: '周四',
  value: '4'
}, {
  label: '周五',
  value: '5'
}, {
  label: '周六',
  value: '6'
}, {
  label: '周日',
  value: '7'
}];
var AvailableTime = /*#__PURE__*/React.memo(function (_ref) {
  var _formItemProps$fullTi, _formItemProps$fullTi2;
  var _ref$maxCount = _ref.maxCount,
    maxCount = _ref$maxCount === void 0 ? 3 : _ref$maxCount,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$formItemProps = _ref.formItemProps,
    formItemProps = _ref$formItemProps === void 0 ? {
      fullTime: {
        name: 'fullTime',
        label: '可用时间'
      },
      weeks: {
        name: 'weeks',
        label: "周期"
      },
      times: {
        name: 'times',
        label: '时段'
      }
    } : _ref$formItemProps;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Form.Item, _extends({
    label: formItemProps === null || formItemProps === void 0 ? void 0 : (_formItemProps$fullTi = formItemProps.fullTime) === null || _formItemProps$fullTi === void 0 ? void 0 : _formItemProps$fullTi.label,
    required: formItemProps === null || formItemProps === void 0 ? void 0 : (_formItemProps$fullTi2 = formItemProps.fullTime) === null || _formItemProps$fullTi2 === void 0 ? void 0 : _formItemProps$fullTi2.required,
    rules: [{
      required: true,
      message: '请选择'
    }],
    initialValue: true
  }, formItemProps === null || formItemProps === void 0 ? void 0 : formItemProps.fullTime), /*#__PURE__*/React.createElement(_Radio.Group, {
    disabled: disabled
  }, /*#__PURE__*/React.createElement(_Radio, {
    value: true
  }, "\u5168\u65F6\u6BB5"), /*#__PURE__*/React.createElement(_Radio, {
    value: false
  }, "\u6307\u5B9A\u65F6\u6BB5"))), /*#__PURE__*/React.createElement(_Form.Item, {
    noStyle: true,
    dependencies: [formItemProps.fullTime.name]
  }, function (_ref2) {
    var getFieldValue = _ref2.getFieldValue;
    var fullTime = getFieldValue(formItemProps.fullTime.name);
    return !fullTime && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Form.Item, _extends({
      rules: [{
        required: true,
        message: "\u8BF7\u9009\u62E9\u5468\u671F"
      }],
      initialValue: dayOptions.map(function (item) {
        return item.value;
      })
    }, formItemProps.weeks), /*#__PURE__*/React.createElement(_Checkbox.Group, {
      disabled: disabled,
      options: dayOptions
    })), /*#__PURE__*/React.createElement(TimeInterval, {
      maxCount: maxCount,
      disabled: disabled,
      formItemProps: formItemProps.times
    }));
  }));
});
export default AvailableTime;