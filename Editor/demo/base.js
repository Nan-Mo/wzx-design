import "antd/es/button/style";
import _Button from "antd/es/button";
import "antd/es/form/style";
import _Form from "antd/es/form";
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React from 'react';
import { Editor } from "../..";
var App = function App() {
  var _Form$useForm = _Form.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var rules = [{
    validator: function validator(_, value, cb) {
      if (!value || value === '<p></p>') {
        return cb('请输入图文内容');
      }
      cb();
    }
  }];
  var changeEditorValue = function changeEditorValue(value) {
    form.setFieldsValue({
      content: value
    });
  };
  var onFinish = function onFinish(value) {
    console.log(value);
  };
  return /*#__PURE__*/React.createElement(_Form, {
    onFinish: onFinish
  }, /*#__PURE__*/React.createElement(_Form.Item, {
    noStyle: true,
    shouldUpdate: function shouldUpdate(prevValues, curValues) {
      return prevValues.content !== curValues.content;
    }
  }, function () {
    var content = form.getFieldValue('content');
    var value = content ? content : '';
    return /*#__PURE__*/React.createElement(_Form.Item, {
      required: true,
      rules: rules,
      name: "content",
      label: "\u56FE\u6587\u5185\u5BB9"
    }, /*#__PURE__*/React.createElement(Editor, {
      value: value,
      onChange: changeEditorValue
    }));
  }), /*#__PURE__*/React.createElement(_Form.Item, null, /*#__PURE__*/React.createElement(_Button, {
    type: "primary",
    htmlType: "submit"
  }, "\u63D0\u4EA4")));
};
export default App;