import React from 'react';
import { ExportButton } from "../..";
var App = function App() {
  var request = function request() {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve('导出');
      }, 2000);
    });
  };
  return /*#__PURE__*/React.createElement(ExportButton, {
    request: request,
    animation: false
  }, "\u5BFC\u51FA");
};
export default App;