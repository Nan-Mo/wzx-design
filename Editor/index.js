import "antd/es/upload/style";
import _Upload from "antd/es/upload";
import "antd/es/message/style";
import _message from "antd/es/message";
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import * as React from 'react';
import 'braft-editor/dist/index.css';
import { useState, useEffect } from 'react';
import BraftEditor from 'braft-editor';
import "./styles.less";
import tokenUtils from "../utils/tokenUtils";
import { ContentUtils } from 'braft-utils';
var Editor = function Editor(_ref) {
  var value = _ref.value,
    onChange = _ref.onChange,
    action = _ref.action;
  var _useState = useState(BraftEditor.createEditorState(value)),
    _useState2 = _slicedToArray(_useState, 2),
    editorValue = _useState2[0],
    setEditorValue = _useState2[1];
  var handleEditorChange = function handleEditorChange(e) {
    setEditorValue(e);
  };
  useEffect(function () {
    setEditorValue(BraftEditor.createEditorState(value));
  }, []);
  useEffect(function () {
    onChange(editorValue.toHTML());
  }, [editorValue]);
  var uploadFiles = {
    accept: 'image/*',
    // 只接受图片
    name: 'file',
    headers: {
      'user-token': tokenUtils.getToken()
    },
    action: action,
    // 这里是上传图片接口的url
    showUploadList: false,
    onChange: function onChange(info) {
      if (info.file.status === 'done') {
        var _value = ContentUtils.insertMedias(editorValue, [{
          type: 'IMAGE',
          url: info.file.response.result // 图片url,
        }]);

        setEditorValue(_value);
      } else if (info.file.status === 'error') {
        _message.error('上传失败');
      }
    }
  };
  var extendControls = [{
    key: 'antd-uploader',
    type: 'component',
    component: /*#__PURE__*/React.createElement(_Upload, uploadFiles, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "control-item button upload-button",
      "data-title": "\u63D2\u5165\u56FE\u7247"
    }, "\u56FE\u7247"))
  }];
  var controls = ['undo', 'redo', 'separator', 'font-size', 'line-height', 'letter-spacing', 'separator', 'text-color', 'bold', 'italic', 'underline', 'strike-through', 'separator', 'superscript', 'subscript', 'remove-styles', 'emoji', 'separator', 'text-indent', 'text-align', 'separator', 'headings', 'list-ul', 'list-ol', 'blockquote', 'code', 'separator', 'link', 'separator', 'hr', 'separator', 'separator', 'clear'];
  return /*#__PURE__*/React.createElement(BraftEditor, {
    value: editorValue,
    onChange: handleEditorChange,
    controls: controls,
    style: {
      width: '80%'
    },
    contentStyle: {
      display: 'flex',
      width: '100%',
      height: 500,
      minHeight: 400,
      boxShadow: 'inset 0 2px 4px rgba(0,0,0,.2)'
    }
    // @ts-ignore
    ,
    extendControls: extendControls
  });
};
export default Editor;