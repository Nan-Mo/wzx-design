import "antd/es/modal/style";
import _Modal from "antd/es/modal";
import "antd/es/row/style";
import _Row from "antd/es/row";
import "antd/es/button/style";
import _Button from "antd/es/button";
import "antd/es/col/style";
import _Col from "antd/es/col";
import "antd/es/space/style";
import _Space from "antd/es/space";
import "antd/es/input/style";
import _Input from "antd/es/input";
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import * as React from 'react';
import { Map, Marker } from 'react-amap';
import POISelect from "./POISelect";
var defaultMapCenter = {
  longitude: 121.475164,
  latitude: 31.228816
};
var LocationModal = function LocationModal(_ref) {
  var closeModal = _ref.closeModal,
    visible = _ref.visible,
    initValue = _ref.initValue;
  var geocoder = React.useRef();
  var _ref2 = (initValue === null || initValue === void 0 ? void 0 : initValue.data) || {},
    _ref2$province = _ref2.province,
    province = _ref2$province === void 0 ? '' : _ref2$province,
    _ref2$city = _ref2.city,
    city = _ref2$city === void 0 ? '' : _ref2$city,
    _ref2$district = _ref2.district,
    district = _ref2$district === void 0 ? '' : _ref2$district,
    _ref2$address = _ref2.address,
    address = _ref2$address === void 0 ? '' : _ref2$address;
  var defaultAddress = "".concat(province).concat(city).concat(district).concat(address);
  var _React$useState = React.useState(defaultMapCenter),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    center = _React$useState2[0],
    setCenter = _React$useState2[1];
  var _React$useState3 = React.useState({
      province: province,
      city: city,
      district: district,
      address: address,
      formattedAddress: defaultAddress
    }),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    addressObj = _React$useState4[0],
    setAddress = _React$useState4[1];
  var getLocation = function getLocation() {
    geocoder.current.getLocation(defaultAddress, function (status, result) {
      if (status === 'complete' && result.resultNum) {
        var location = result.geocodes[0].location;
        setCenter({
          latitude: location.lat,
          longitude: location.lng
        });
      }
    });
  };
  React.useEffect(function () {
    if (geocoder.current) {
      getLocation();
      setAddress({
        province: province,
        city: city,
        district: district,
        address: address,
        formattedAddress: defaultAddress
      });
    }
  }, []);
  return /*#__PURE__*/React.createElement(_Modal, {
    open: visible,
    onCancel: closeModal,
    width: 1000,
    title: "\u5B9A\u4F4D\u9009\u62E9",
    footer: null,
    forceRender: true
  }, /*#__PURE__*/React.createElement(POISelect, {
    city: city,
    style: {
      width: '100%'
    },
    value: addressObj.formattedAddress,
    onChange: function onChange(value) {
      var location = value.location,
        pname = value.pname,
        cityname = value.cityname,
        adname = value.adname,
        address = value.address,
        name = value.name;
      var _location$split = location.split(','),
        _location$split2 = _slicedToArray(_location$split, 2),
        longitude = _location$split2[0],
        latitude = _location$split2[1];
      setCenter({
        latitude: +latitude,
        longitude: +longitude
      });
      setAddress({
        formattedAddress: "".concat(pname).concat(cityname).concat(adname).concat(address).concat(name),
        province: pname,
        city: cityname || pname,
        district: adname,
        address: "".concat(address).concat(name)
      });
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '400px',
      margin: '24px auto'
    }
  }, /*#__PURE__*/React.createElement(Map, {
    center: center,
    zoom: 14,
    events: {
      created: function created() {
        window.AMap.plugin(['AMap.Geocoder'], function () {
          // @ts-ignore
          geocoder.current = new window.AMap.Geocoder();
          if (defaultAddress) getLocation();
        });
      }
    },
    plugins: ['Scale']
  }, /*#__PURE__*/React.createElement(Marker, {
    draggable: true,
    position: center,
    events: {
      mouseup: function mouseup(e) {
        setCenter({
          longitude: e.lnglat.lng,
          latitude: e.lnglat.lat
        });
        if (!geocoder.current) return;
        geocoder.current.getAddress(e.lnglat, function (status, result) {
          if (status === 'complete' && result.regeocode) {
            var _result$regeocode = result.regeocode,
              formattedAddress = _result$regeocode.formattedAddress,
              _result$regeocode$add = _result$regeocode.addressComponent,
              _province = _result$regeocode$add.province,
              _city = _result$regeocode$add.city,
              _district = _result$regeocode$add.district;
            var _address = formattedAddress.split(_district)[1];
            setAddress({
              formattedAddress: formattedAddress,
              province: _province,
              city: _city,
              district: _district,
              address: _address
            });
          }
        });
      }
    }
  }))), /*#__PURE__*/React.createElement(_Row, {
    justify: "space-between"
  }, /*#__PURE__*/React.createElement(_Col, null, /*#__PURE__*/React.createElement(_Space, null, /*#__PURE__*/React.createElement("span", null, "\u7ECF\u5EA6: "), /*#__PURE__*/React.createElement(_Input, {
    disabled: true,
    value: center ? center.longitude : ''
  }), /*#__PURE__*/React.createElement("span", null, "\u7EAC\u5EA6: "), /*#__PURE__*/React.createElement(_Input, {
    disabled: true,
    value: center ? center.latitude : ''
  }))), /*#__PURE__*/React.createElement(_Button, {
    type: "primary",
    onClick: function onClick() {
      closeModal();
      center && (initValue === null || initValue === void 0 ? void 0 : initValue.onSuccess(center, addressObj));
    }
  }, "\u786E\u5B9A\u7ECF\u7EAC\u5EA6")));
};
export default LocationModal;