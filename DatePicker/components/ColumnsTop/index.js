import "antd/es/row/style";
import _Row from "antd/es/row";
import "antd/es/col/style";
import _Col from "antd/es/col";
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import * as React from 'react';
import { formatCN, types } from "../../const";
import moment from 'moment';
import classNames from 'classnames';
import "./index.less";
function ColumnsTop(_ref) {
  var type = _ref.type,
    changeValue = _ref.changeValue,
    setType = _ref.setType,
    setChangeValue = _ref.setChangeValue,
    bottom = _ref.bottom;
  var _onClick = function onClick(t) {
    var date;
    switch (t.type) {
      case 'date':
        date = formatCN();
        break;
      case 'week':
        date = "".concat(moment().format('YYYY'), "\u5E74").concat(moment().format('wo'));
        break;
      case 'year-month':
        date = "".concat(moment().subtract(1, 'months').format('YYYY年MM月'));
        break;
      case 'custom':
        date = [formatCN(), moment().add(31, 'day').format('YYYY-MM-DD')];
        break;
      default:
        break;
    }
    setChangeValue(date);
    setType(t.type);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "tst-date-picker-columns-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tst-date-picker-columns-top-radio"
  }, /*#__PURE__*/React.createElement(_Row, {
    className: "tst-date-picker-columns-top-radio-box"
  }, types.map(function (t) {
    return /*#__PURE__*/React.createElement(_Col, {
      onClick: function onClick() {
        return _onClick(t);
      },
      key: t.type,
      span: 6,
      className: classNames("tst-date-picker-columns-top-radio-box-item", _defineProperty({}, "tst-date-picker-columns-top-radio-box-item-active", t.type === type))
    }, t.name);
  }))), bottom ? bottom() : /*#__PURE__*/React.createElement("div", {
    className: "tst-date-picker-columns-top-time"
  }, changeValue));
}
export default ColumnsTop;