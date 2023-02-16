import "antd/es/space/style";
import _Space from "antd/es/space";
import "antd/es/form/style";
import _Form from "antd/es/form";
import "antd/es/input/style";
import _Input from "antd/es/input";
import "antd/es/button/style";
import _Button from "antd/es/button";
import * as React from "react";
import LocationModal from "./components/LocationModal";
import { useModal } from "@shihengtech/hooks";
var LocationSelect = function LocationSelect(_ref) {
  var form = _ref.form;
  var locationModal = useModal();
  return /*#__PURE__*/React.createElement(_Form.Item, {
    noStyle: true
  }, /*#__PURE__*/React.createElement(_Form.Item, {
    label: "\u5730\u56FE\u5B9A\u4F4D",
    name: "location",
    rules: [{
      required: true,
      message: '请选择详细地址'
    }]
  }, /*#__PURE__*/React.createElement(_Space, null, /*#__PURE__*/React.createElement(_Button, {
    onClick: function onClick() {
      var _form$getFieldsValue = form.getFieldsValue(['district', 'address', 'location']),
        _form$getFieldsValue$ = _form$getFieldsValue.district,
        district = _form$getFieldsValue$ === void 0 ? [] : _form$getFieldsValue$,
        address = _form$getFieldsValue.address,
        location = _form$getFieldsValue.location;
      locationModal.openModal({
        data: {
          province: district[0],
          city: district[1],
          district: district[2],
          address: address,
          location: location
        },
        onSuccess: function onSuccess(center, _ref2) {
          var address = _ref2.address;
          form.setFieldsValue({
            location: center,
            address: address
          });
        }
      });
    }
  }, "\u5B9A\u4F4D\u9009\u62E9"), /*#__PURE__*/React.createElement(_Form.Item, {
    name: ['location', 'longitude'],
    noStyle: true
  }, /*#__PURE__*/React.createElement(_Input, {
    disabled: true,
    placeholder: "\u7ECF\u5EA6"
  })), /*#__PURE__*/React.createElement(_Form.Item, {
    name: ['location', 'latitude'],
    noStyle: true
  }, /*#__PURE__*/React.createElement(_Input, {
    disabled: true,
    placeholder: "\u7EF4\u5EA6"
  })))), /*#__PURE__*/React.createElement(LocationModal, locationModal));
};
export default LocationSelect;