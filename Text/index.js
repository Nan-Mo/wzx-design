import "antd/es/typography/style";
import _Typography from "antd/es/typography";
var _excluded = ["children", "type", "className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import * as React from 'react';
import classnames from 'classnames';
import styles from "../styles/global.module.less";
var Text = function Text(_ref) {
  var children = _ref.children,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'primary' : _ref$type,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var cls = classnames(styles.tst_primary_color, className);
  if (type === 'grey') {
    return /*#__PURE__*/React.createElement(_Typography.Text, _extends({
      type: "secondary"
    }, rest), children);
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
};
export default Text;