import "antd/es/badge/style";
import _Badge from "antd/es/badge";
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import * as React from 'react';
import { showExportAnimation } from "../../utils/utils";
import eventEmitter from "../../utils/eventEmitter";
import { DownloadOutlined } from '@ant-design/icons';
export var addCount = function addCount(e) {
  showExportAnimation({
    x: e.clientX,
    y: e.clientY
  });
  setTimeout(function () {
    eventEmitter.emit('change-report-num');
  }, 400);
};
var ExportPageEntery = function ExportPageEntery(_ref) {
  var _onClick = _ref.onClick,
    className = _ref.className,
    style = _ref.style,
    iconStyle = _ref.iconStyle,
    badgeSize = _ref.badgeSize;
  var _React$useState = React.useState(0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    count = _React$useState2[0],
    setCount = _React$useState2[1];
  React.useEffect(function () {
    var handler = function handler() {
      setCount(function (n) {
        return n + 1;
      });
    };
    eventEmitter.on('change-report-num', handler);
    return function () {
      eventEmitter.off('change-report-num', handler);
    };
  }, []);
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: style,
    onClick: function onClick() {
      _onClick && _onClick();
      setCount(0);
    }
  }, /*#__PURE__*/React.createElement(_Badge, {
    count: count,
    size: badgeSize
  }, /*#__PURE__*/React.createElement(DownloadOutlined, {
    id: "export-entery-icon",
    style: iconStyle
  })));
};
export default ExportPageEntery;