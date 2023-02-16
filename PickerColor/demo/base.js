import "antd/es/button/style";
import _Button from "antd/es/button";
import "antd/es/form/style";
import _Form from "antd/es/form";
import React from 'react';
import { PickerColor } from "../..";
var App = function App() {
  var initialValues = {
    color: {
      r: 26,
      g: 14,
      b: 85,
      a: 1
    }
  };
  var handleOnFinish = function handleOnFinish(values) {
    console.log(values);
  };
  return /*#__PURE__*/React.createElement(_Form, {
    onFinish: handleOnFinish,
    initialValues: initialValues
  }, /*#__PURE__*/React.createElement(_Form.Item, {
    label: "Colorpicker",
    name: "color"
  }, /*#__PURE__*/React.createElement(PickerColor, null)), /*#__PURE__*/React.createElement(_Form.Item, null, /*#__PURE__*/React.createElement(_Button, {
    type: "primary",
    htmlType: "submit"
  }, "\u63D0\u4EA4")));
};
export default App;