function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
import "antd/es/upload/style";
import _Upload from "antd/es/upload";
import "antd/es/button/style";
import _Button from "antd/es/button";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useEffect, useRef, useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import _ from 'lodash';
import { checkFile, isSuccResponse } from "../utils/utils";
import tokenUtils from "../utils/tokenUtils";
import "./index.less";
var FileUploader = function FileUploader(_ref) {
  var accept = _ref.accept,
    action = _ref.action,
    multiple = _ref.multiple,
    disabled = _ref.disabled,
    _ref$limitSize = _ref.limitSize,
    limitSize = _ref$limitSize === void 0 ? 5 : _ref$limitSize,
    beforeUpload = _ref.beforeUpload,
    showUploadList = _ref.showUploadList,
    _ref$uploading = _ref.uploading,
    uploading = _ref$uploading === void 0 ? false : _ref$uploading,
    setUploading = _ref.setUploading,
    value = _ref.value,
    onChange = _ref.onChange,
    isSingle = _ref.isSingle,
    _ref$additionalData = _ref.additionalData,
    additionalData = _ref$additionalData === void 0 ? null : _ref$additionalData,
    className = _ref.className,
    _ref$fileName = _ref.fileName,
    fileName = _ref$fileName === void 0 ? '' : _ref$fileName,
    _ref$maxCount = _ref.maxCount,
    maxCount = _ref$maxCount === void 0 ? 1 : _ref$maxCount;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    fileList = _useState2[0],
    setFileList = _useState2[1];
  var tempFileName = useRef(fileName);
  useEffect(function () {
    if (typeof value === 'string' && value && isSingle) {
      return setFileList([{
        uid: '1',
        status: 'done',
        name: tempFileName.current,
        url: value
      }]);
    }
    if (Array.isArray(value) && value.length) {
      setFileList(function () {
        return value.map(function (url, idx) {
          return {
            uid: String(idx + 1),
            name: String(idx + 1),
            status: 'done',
            url: url
          };
        });
      });
    }
  }, [value]);
  var handleChange = function handleChange(_ref2) {
    var fileList = _ref2.fileList;
    var batchLoading = false;
    fileList.forEach(function (item, idx) {
      var status = item.status,
        response = item.response;
      if (!status) {
        fileList[idx] = _objectSpread(_objectSpread({}, item), {}, {
          status: 'error'
        });
      }
      if (status === 'uploading') batchLoading = true;
      if (status === 'done' && response) {
        if (!isSuccResponse(response)) {
          fileList[idx] = _objectSpread(_objectSpread({}, item), {}, {
            status: 'error',
            response: response.msg
          });
          return;
        }
        fileList[idx] = _objectSpread(_objectSpread({}, item), {}, {
          status: response.result ? 'done' : 'error',
          url: response.result
        });
      }
    });
    setUploading && setUploading(batchLoading);
    setFileList(fileList);
    if (isSingle) {
      var _fileList$;
      tempFileName.current = fileList === null || fileList === void 0 ? void 0 : (_fileList$ = fileList[0]) === null || _fileList$ === void 0 ? void 0 : _fileList$.name;
    }
    if (!batchLoading) {
      var list = _.compact(fileList.map(function (file) {
        return file.url;
      }));
      onChange && onChange(isSingle ? list[0] : list);
    }
  };
  return /*#__PURE__*/React.createElement(_Upload, {
    accept: accept,
    data: additionalData,
    headers: {
      'user-token': tokenUtils.getToken()
    },
    beforeUpload: beforeUpload ? beforeUpload : function (file) {
      return checkFile(file, limitSize);
    },
    action: action,
    multiple: multiple,
    fileList: fileList,
    onChange: handleChange,
    disabled: disabled || uploading,
    showUploadList: showUploadList,
    className: className,
    maxCount: maxCount
  }, /*#__PURE__*/React.createElement(_Button, {
    icon: /*#__PURE__*/React.createElement(UploadOutlined, null)
  }, "\u4E0A\u4F20\u6587\u4EF6"));
};
export default FileUploader;