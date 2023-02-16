import "antd/es/popover/style";
import _Popover from "antd/es/popover";
var _excluded = ["value", "onChange", "onChangeComplete", "onColorResult", "popup", "blockStyles", "picker"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import * as ReactColor from 'react-color';
import PropTypes from 'prop-types';
import tinycolor from 'tinycolor2';
var Colorpicker = function Colorpicker(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange,
    onChangeComplete = _ref.onChangeComplete,
    onColorResult = _ref.onColorResult,
    _ref$popup = _ref.popup,
    popup = _ref$popup === void 0 ? true : _ref$popup,
    _ref$blockStyles = _ref.blockStyles,
    blockStyles = _ref$blockStyles === void 0 ? {
      width: '100px'
    } : _ref$blockStyles,
    _ref$picker = _ref.picker,
    picker = _ref$picker === void 0 ? 'SketchPicker' : _ref$picker,
    props = _objectWithoutProperties(_ref, _excluded);
  var formatColor = function formatColor(color) {
    return color !== undefined && typeof color !== 'string' ? tinycolor('hsl' in color ? color['hsl'] : 'hsv' in color ? color['hsv'] : 'rgb' in color ? color['rgb'] : 'hex' in color ? color['hex'] : color) : tinycolor(color);
  };
  var prepareValue = function prepareValue(value) {
    var decimalToHex = function decimalToHex(alpha) {
      return alpha === 0 ? '00' : Math.round(255 * alpha).toString(16);
    };
    var formatted = formatColor(value);
    return "".concat(formatted.toHexString()).concat(decimalToHex(formatted.getAlpha()));
  };
  var triggerOnChange = function triggerOnChange(color) {
    var colorValue = onColorResult ? onColorResult(color) : color;
    onChange === null || onChange === void 0 ? void 0 : onChange(colorValue);
  };
  var triggerOnChangeComplete = function triggerOnChangeComplete(color) {
    var colorValue = onColorResult ? onColorResult(color) : color;
    onChangeComplete === null || onChangeComplete === void 0 ? void 0 : onChangeComplete(colorValue);
  };
  var getBackgroundBlockColor = function getBackgroundBlockColor(color) {
    var _rgba$r, _rgba$g, _rgba$b, _rgba$a;
    var formatted = formatColor(color);
    var rgba = formatted.toRgb();
    return color ? "rgba(\n        ".concat((_rgba$r = rgba === null || rgba === void 0 ? void 0 : rgba.r) !== null && _rgba$r !== void 0 ? _rgba$r : 0, ", ").concat((_rgba$g = rgba === null || rgba === void 0 ? void 0 : rgba.g) !== null && _rgba$g !== void 0 ? _rgba$g : 0, ", ").concat((_rgba$b = rgba === null || rgba === void 0 ? void 0 : rgba.b) !== null && _rgba$b !== void 0 ? _rgba$b : 0, ", ").concat((_rgba$a = rgba === null || rgba === void 0 ? void 0 : rgba.a) !== null && _rgba$a !== void 0 ? _rgba$a : 100, "\n      )") : '';
  };
  var blStyles = Object.assign({}, {
    width: '50px',
    height: '20px',
    display: 'inline-flex',
    border: '2px solid #fff',
    boxShadow: '0 0 0 1px #ccc'
  }, blockStyles, {
    background: getBackgroundBlockColor(value)
  });
  var fixReactColorStyles = {
    MaterialPicker: {
      default: {
        material: {
          boxSizing: 'content-box'
        }
      }
    }
  };
  if (popup) {
    fixReactColorStyles['SliderPicker'] = {
      default: {
        hue: {
          minWidth: '300px'
        }
      }
    };
  }
  var Picker = getPicker(picker);
  return /*#__PURE__*/React.createElement(React.Fragment, null, popup ? /*#__PURE__*/React.createElement(_Popover, {
    trigger: "click"
    // {...popoverProps}
    ,
    content: /*#__PURE__*/React.createElement(Picker, _extends({
      color: prepareValue(value),
      onChange: triggerOnChange,
      onChangeComplete: triggerOnChangeComplete,
      styles: fixReactColorStyles[picker] || undefined
    }, props))
  }, /*#__PURE__*/React.createElement("div", {
    style: blStyles
  })) : /*#__PURE__*/React.createElement(Picker, _extends({
    color: prepareValue(value),
    onChange: triggerOnChange,
    onChangeComplete: triggerOnChangeComplete,
    styles: fixReactColorStyles[picker] || undefined
  }, props)));
};
var getPicker = function getPicker(pickerType) {
  switch (pickerType) {
    case 'BlockPicker':
      return ReactColor.BlockPicker;
    case 'ChromePicker':
      return ReactColor.ChromePicker;
    case 'CirclePicker':
      return ReactColor.CirclePicker;
    case 'CompactPicker':
      return ReactColor.CompactPicker;
    case 'GithubPicker':
      return ReactColor.GithubPicker;
    case 'GooglePicker':
      return ReactColor.GooglePicker;
    case 'HuePicker':
      return ReactColor.HuePicker;
    case 'MaterialPicker':
      return ReactColor.MaterialPicker;
    case 'PhotoshopPicker':
      return ReactColor.PhotoshopPicker;
    case 'SliderPicker':
      return ReactColor.SliderPicker;
    case 'SwatchesPicker':
      return ReactColor.SwatchesPicker;
    case 'TwitterPicker':
      return ReactColor.TwitterPicker;
  }
  return ReactColor.SketchPicker;
};
Colorpicker.propTypes = {
  popup: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func,
  onChangeComplete: PropTypes.func,
  onColorResult: PropTypes.func,
  blockStyles: PropTypes.object,
  // popoverProps: PropTypes.object,
  picker: PropTypes.oneOf(['BlockPicker', 'ChromePicker', 'CirclePicker', 'CompactPicker', 'GithubPicker', 'GooglePicker', 'HuePicker', 'MaterialPicker', 'PhotoshopPicker', 'SketchPicker', 'SliderPicker', 'SwatchesPicker', 'TwitterPicker'])
};
export default Colorpicker;