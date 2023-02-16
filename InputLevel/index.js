import "antd/es/space/style";
import _Space from "antd/es/space";
import "antd/es/checkbox/style";
import _Checkbox from "antd/es/checkbox";
import "antd/es/form/style";
import _Form from "antd/es/form";
import "antd/es/input-number/style";
import _InputNumber from "antd/es/input-number";
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import * as React from 'react';
var InputLevel = function InputLevel(_ref) {
  var form = _ref.form,
    _ref$file = _ref.file,
    file = _ref$file === void 0 ? {
      orderName: 'order',
      topName: 'top'
    } : _ref$file;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    orderTop = _React$useState2[0],
    setOrderTop = _React$useState2[1];
  var _form$getFieldsValue = form.getFieldsValue(['top']),
    top = _form$getFieldsValue.top;
  var _form$getFieldsValue2 = form.getFieldsValue(['order']),
    order = _form$getFieldsValue2.order;
  var changeTop = function changeTop(e) {
    setOrderTop(!!(e !== null && e !== void 0 && e[0]));
    if (e !== null && e !== void 0 && e[0]) {
      form.setFieldsValue({
        order: 9999
      });
    } else {
      form.setFieldsValue({
        order: order
      });
    }
  };
  return /*#__PURE__*/React.createElement(_Space, null, /*#__PURE__*/React.createElement(_Form.Item, {
    name: file.orderName,
    noStyle: true,
    style: {
      marginRight: 10
    },
    rules: [{
      required: !(top !== null && top !== void 0 && top[0]),
      message: '请输入优先级'
    }]
  }, /*#__PURE__*/React.createElement(_InputNumber, {
    min: 0,
    precision: 0,
    disabled: orderTop,
    placeholder: "\u6570\u5B57\u8D8A\u5927\u8D8A\u9760\u524D",
    style: {
      width: 150
    },
    max: 9999
  })), /*#__PURE__*/React.createElement(_Form.Item, {
    noStyle: true,
    name: file.topName
  }, /*#__PURE__*/React.createElement(_Checkbox.Group, {
    onChange: changeTop
  }, /*#__PURE__*/React.createElement(_Checkbox, {
    value: true
  }, "\u6700\u9AD8\u4F18\u5148\u7EA7"))));
};
export default InputLevel;