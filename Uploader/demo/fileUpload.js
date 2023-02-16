import React from 'react';
import { Uploader } from "../..";
var FileUpload = Uploader.FileUpload;
var App = function App() {
  return /*#__PURE__*/React.createElement(FileUpload, {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    isSingle: true,
    fileName: "\u80CC\u666F\u97F3\u4E50",
    accept: ".xlsx"
  });
};
export default App;