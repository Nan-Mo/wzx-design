function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
import "antd/es/modal/style";
import _Modal from "antd/es/modal";
import "antd/es/col/style";
import _Col from "antd/es/col";
import "antd/es/row/style";
import _Row from "antd/es/row";
import "antd/es/input/style";
import _Input from "antd/es/input";
import "antd/es/upload/style";
import _Upload from "antd/es/upload";
import "antd/es/button/style";
import _Button from "antd/es/button";
import "antd/es/spin/style";
import _Spin from "antd/es/spin";
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import * as React from 'react';
import { CheckCircleFilled, CloseCircleFilled, CloseCircleOutlined, DownloadOutlined, InfoCircleFilled, LoadingOutlined, PaperClipOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import "./index.less";
import { useState } from 'react';
export var ImportStatusEnum;
(function (ImportStatusEnum) {
  ImportStatusEnum["process"] = "PROCESS";
  ImportStatusEnum["fail"] = "FAIL";
  ImportStatusEnum["partSuccess"] = "PART_SUCCESS";
  ImportStatusEnum["success"] = "SUCCESS";
  ImportStatusEnum["pickFile"] = "PICK_FILE";
})(ImportStatusEnum || (ImportStatusEnum = {}));
var StatusRender = function StatusRender(_ref) {
  var _content;
  var status = _ref.status,
    total = _ref.total,
    failLength = _ref.failLength,
    failMsg = _ref.failMsg,
    url = _ref.url,
    onClose = _ref.onClose;
  var processJsx = /*#__PURE__*/React.createElement("div", {
    className: classnames("tst-import-excel-modal-flex", "tst-import-excel-modal-align_middle")
  }, /*#__PURE__*/React.createElement(_Spin, {
    className: "tst-import-excel-modal-spin"
  }), "\u6570\u636E\u6279\u91CF\u5BFC\u5165\u4E2D\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85...");
  var failJsx = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: classnames("tst-import-excel-modal-flex", "tst-import-excel-modal-align_middle")
  }, /*#__PURE__*/React.createElement(CloseCircleFilled, {
    className: "tst-import-excel-modal-fail"
  }), failMsg ? failMsg : '导入失败,请使用正确的导入模版'), /*#__PURE__*/React.createElement("div", {
    className: classnames("tst-import-excel-modal-flex", "tst-import-excel-modal-justify_end")
  }, /*#__PURE__*/React.createElement(_Button, {
    onClick: onClose,
    type: "primary"
  }, "\u786E\u5B9A")));
  var partSuccessJsx = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: classnames("tst-import-excel-modal-flex", "tst-import-excel-modal-flex_column")
  }, /*#__PURE__*/React.createElement("div", {
    className: "tst-import-excel-modal-flex"
  }, /*#__PURE__*/React.createElement(InfoCircleFilled, {
    className: "tst-import-excel-modal-warning"
  }), /*#__PURE__*/React.createElement("span", null, "\u5171\u6709 ", /*#__PURE__*/React.createElement("span", {
    className: "tst-import-excel-modal-red"
  }, total, "\u6761"), " \u6570\u636E\uFF0C\u5176\u4E2D", /*#__PURE__*/React.createElement("span", {
    className: "tst-import-excel-modal-red"
  }, failLength, "\u6761"), /*#__PURE__*/React.createElement("br", null), "\u6570\u636E\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u4E0B\u8F7D\u5931\u8D25\u6587\u4EF6\u67E5\u770B\u8BE6\u60C5")), /*#__PURE__*/React.createElement("a", {
    className: "tst-import-excel-modal-download",
    href: url,
    download: true
  }, /*#__PURE__*/React.createElement(DownloadOutlined, {
    className: "tst-import-excel-modal-icon"
  }), "\u4E0B\u8F7D\u5931\u8D25\u5217\u8868")), /*#__PURE__*/React.createElement("div", {
    className: classnames("tst-import-excel-modal-flex", "tst-import-excel-modal-justify_end")
  }, /*#__PURE__*/React.createElement(_Button, {
    onClick: onClose,
    type: "primary"
  }, "\u786E\u5B9A")));
  var successJsx = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: classnames("tst-import-excel-modal-flex", "tst-import-excel-modal-align_middle")
  }, /*#__PURE__*/React.createElement(CheckCircleFilled, {
    className: "tst-import-excel-modal-success"
  }), "\u6210\u529F\u5BFC\u5165", /*#__PURE__*/React.createElement("span", {
    className: "tst-import-excel-modal-red"
  }, total, "\u6761"), " \u6570\u636E"), /*#__PURE__*/React.createElement("div", {
    className: classnames("tst-import-excel-modal-flex", "tst-import-excel-modal-justify_end")
  }, /*#__PURE__*/React.createElement(_Button, {
    onClick: onClose,
    type: "primary"
  }, "\u786E\u5B9A")));
  var content = (_content = {}, _defineProperty(_content, ImportStatusEnum.pickFile, null), _defineProperty(_content, ImportStatusEnum.process, processJsx), _defineProperty(_content, ImportStatusEnum.fail, failJsx), _defineProperty(_content, ImportStatusEnum.partSuccess, partSuccessJsx), _defineProperty(_content, ImportStatusEnum.success, successJsx), _content);
  return content[status];
};
var ImportModal = function ImportModal(_ref2) {
  var modalTitle = _ref2.modalTitle,
    onClose = _ref2.onClose,
    visible = _ref2.visible,
    upload = _ref2.upload,
    templateUrl = _ref2.templateUrl,
    downloadTemplate = _ref2.downloadTemplate;
  var _React$useState = React.useState(),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    file = _React$useState2[0],
    setFile = _React$useState2[1];
  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    downloadLoading = _React$useState4[0],
    setDownloadLoading = _React$useState4[1];
  var _useState = useState({
      status: ImportStatusEnum.pickFile
    }),
    _useState2 = _slicedToArray(_useState, 2),
    statusData = _useState2[0],
    setStatusData = _useState2[1];
  var status = statusData.status;
  var uploadingStatus = status !== ImportStatusEnum.pickFile;
  var submitHandle = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _res, _res2, res, _status;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            setStatusData(_objectSpread(_objectSpread({}, statusData), {}, {
              status: ImportStatusEnum.process
            }));
            if (!file) {
              _context.next = 8;
              break;
            }
            _context.next = 5;
            return upload(file);
          case 5:
            res = _context.sent;
            _status = (_res = res) !== null && _res !== void 0 && _res.failExcelUrl ? ImportStatusEnum.partSuccess : (_res2 = res) !== null && _res2 !== void 0 && _res2.failCount ? ImportStatusEnum.fail : ImportStatusEnum.success;
            setStatusData(_objectSpread(_objectSpread({}, statusData), {}, {
              status: _status,
              total: (res.successCount || 0) + (res.failCount || 0),
              url: res.failExcelUrl,
              failLength: res.failCount
            }));
          case 8:
            _context.next = 13;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            setStatusData(_objectSpread(_objectSpread({}, statusData), {}, {
              status: ImportStatusEnum.fail,
              failMsg: _context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.msg
            }));
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 10]]);
    }));
    return function submitHandle() {
      return _ref3.apply(this, arguments);
    };
  }();
  var resetFileHandle = function resetFileHandle() {
    setFile(undefined);
  };
  var modalProps = {
    title: modalTitle || '批量导入',
    bodyStyle: {
      padding: '24px 0 0 0'
    }
  };
  if (uploadingStatus) {
    modalProps = {
      title: '',
      closable: false
    };
  }
  var onClosImportExcelModale = function onClosImportExcelModale(refresh) {
    setStatusData({
      status: ImportStatusEnum.pickFile
    });
    onClose(refresh);
  };
  return /*#__PURE__*/React.createElement(_Modal, _extends({}, modalProps, {
    width: 500,
    footer: null,
    open: visible,
    destroyOnClose: true,
    onCancel: function onCancel() {
      return onClosImportExcelModale(false);
    },
    afterClose: resetFileHandle
  }), uploadingStatus ? StatusRender(_objectSpread(_objectSpread({}, statusData), {}, {
    onClose: function onClose() {
      return onClosImportExcelModale(true);
    }
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Row, {
    style: {
      margin: '0 24px'
    }
  }, /*#__PURE__*/React.createElement(_Col, {
    flex: 1
  }, /*#__PURE__*/React.createElement(_Row, {
    align: "middle"
  }, /*#__PURE__*/React.createElement("span", null, "\u5BFC\u5165Excel\u6570\u636E\u6587\u4EF6: "), /*#__PURE__*/React.createElement(_Input, {
    readOnly: true,
    value: file === null || file === void 0 ? void 0 : file.name,
    className: "tst-import-excel-modal-input",
    addonBefore: file && /*#__PURE__*/React.createElement(PaperClipOutlined, {
      className: "tst-import-excel-modal-input-before"
    }),
    suffix: !!file && /*#__PURE__*/React.createElement("span", {
      onClick: resetFileHandle
    }, /*#__PURE__*/React.createElement(CloseCircleOutlined, {
      color: "#ccc"
    })),
    addonAfter: /*#__PURE__*/React.createElement(_Upload, {
      maxCount: 1,
      accept: ".xlsx",
      showUploadList: false,
      beforeUpload: function beforeUpload() {
        return false;
      },
      onChange: function onChange(_ref4) {
        var file = _ref4.file;
        return setFile(file);
      }
    }, /*#__PURE__*/React.createElement(_Button, null, "\u9009\u62E9\u6587\u4EF6"))
  }))), /*#__PURE__*/React.createElement(_Col, {
    offset: 7
  }, downloadTemplate ? /*#__PURE__*/React.createElement("a", {
    className: "tst-import-excel-modal-download-template",
    onClick: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var res;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            setDownloadLoading(true);
            _context2.next = 3;
            return downloadTemplate();
          case 3:
            res = _context2.sent;
            setDownloadLoading(false);
            window.open(res);
          case 6:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))
  }, downloadLoading ? /*#__PURE__*/React.createElement(LoadingOutlined, {
    className: "tst-import-excel-modal-download-template-icon"
  }) : /*#__PURE__*/React.createElement(DownloadOutlined, {
    className: "tst-import-excel-modal-download-template-icon"
  }), "\u4E0B\u8F7D\u5BFC\u5165\u6A21\u7248") : /*#__PURE__*/React.createElement("a", {
    href: templateUrl,
    target: "_blank",
    download: true,
    className: "tst-import-excel-modal-download-template"
  }, /*#__PURE__*/React.createElement(DownloadOutlined, {
    className: "tst-import-excel-modal-download-template-icon"
  }), "\u4E0B\u8F7D\u5BFC\u5165\u6A21\u7248"))), /*#__PURE__*/React.createElement(_Row, {
    justify: "end",
    align: "middle",
    className: "tst-import-excel-modal-footer"
  }, /*#__PURE__*/React.createElement(_Button, {
    type: "primary",
    onClick: function onClick() {
      return submitHandle();
    },
    disabled: !file
  }, "\u5F00\u59CB\u5BFC\u5165"))));
};
ImportModal.defaultProps = {
  statusData: {
    status: ImportStatusEnum.pickFile
  }
};
export default ImportModal;