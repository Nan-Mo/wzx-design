import "antd/es/card/style";
import _Card from "antd/es/card";
import "antd/es/table/style";
import _Table from "antd/es/table";
import "antd/es/layout/style";
import _Layout from "antd/es/layout";
import React from 'react';
import { ExportButton } from "../..";
var ExportPageEntery = ExportButton.ExportPageEntery;
var Header = _Layout.Header,
  Content = _Layout.Content,
  Footer = _Layout.Footer,
  Sider = _Layout.Sider;
var App = function App() {
  var dataSource = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '高新区华健大厦5号'
  }, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '高新区华健大厦5号'
  }];
  var columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
  }, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age'
  }, {
    title: '住址',
    dataIndex: 'address',
    key: 'address'
  }];
  var request = function request() {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve('导出');
      }, 2000);
    });
  };
  return /*#__PURE__*/React.createElement(_Layout, null, /*#__PURE__*/React.createElement(Sider, {
    breakpoint: "lg",
    collapsedWidth: "0",
    onBreakpoint: function onBreakpoint(broken) {
      console.log(broken);
    },
    onCollapse: function onCollapse(collapsed, type) {
      console.log(collapsed, type);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "logo"
  })), /*#__PURE__*/React.createElement(_Layout, null, /*#__PURE__*/React.createElement(Header, {
    style: {
      padding: 0,
      background: '#ffffff',
      display: 'flex',
      justifyContent: 'end'
    }
  }, /*#__PURE__*/React.createElement(ExportPageEntery, {
    style: {
      padding: '0 14px',
      cursor: 'pointer'
    },
    BadgeSize: "small",
    iconStyle: {
      fontSize: 20
    }
  })), /*#__PURE__*/React.createElement(Content, {
    style: {
      margin: '24px 16px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      minHeight: 360,
      background: '#ffffff'
    }
  }, /*#__PURE__*/React.createElement(_Card, {
    title: "\u4EBA\u5458\u62A5\u8868",
    extra: /*#__PURE__*/React.createElement(ExportButton, {
      request: request,
      type: "default"
    }, "\u5BFC\u51FA\u4EBA\u5458\u62A5\u8868")
  }, /*#__PURE__*/React.createElement(_Table, {
    dataSource: dataSource,
    columns: columns
  })))), /*#__PURE__*/React.createElement(Footer, {
    style: {
      textAlign: 'center'
    }
  }, "Tastien Design \xA92023 Created by Tastien")));
};
export default App;