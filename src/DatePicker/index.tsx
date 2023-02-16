import * as React from 'react';
import { Popup, Field } from 'react-vant';
import { CalendarOutlined } from '@ant-design/icons';
import BusinessDaySwitch from './components/BusinessDaySwitch';
import { PickerCustom, PickerDate, PickerWeek } from './components';
import { formatCN } from './const';

import './index.less';

export type DateType = 'date' | 'year-month' | 'week' | 'custom';

export type DatePickerIndexProps = {
  onChange: (params: any) => void;
  onType?: (type: DateType) => void;
  businessDaySwitch?: boolean;
  rightIcon?: React.ReactNode;
  style?: React.CSSProperties;
  searchBusinessDay?: boolean;
};

export interface PickerDateSwitchProps {
  setChangeValue: (params: any) => void
  onCancel: () => void
  onConfirm: (file: any, parma: any) => void;
  setType: (t: any) => void
  changeValue: number
}

const DatePickerIndex = (({
  onChange,
  onType,
  businessDaySwitch,
  rightIcon = <CalendarOutlined className="tst-date-picker-right-icon" />,
  style,
  searchBusinessDay,
}: DatePickerIndexProps) => {
  const [showPicker, setShowPicker] = React.useState(false);
  const [fieldValue, setFieldValue] = React.useState<string>(formatCN());
  const [changeValue, setChangeValue] = React.useState<any>(formatCN());
  const [type, setType] = React.useState<DateType>('date');

  const onConfirm = (fieldValue: React.SetStateAction<string>, parma: any) => {
    setFieldValue(fieldValue);
    onChange(parma);
    setShowPicker(false);
  }

  const onCancel = () => setShowPicker(false)

  const setTypeDateSwitch = (t: any) => {
    setType(t);
    onType?.(t);
  }

  const DateSwitch = () => {
    switch (type) {
      case 'date':
      case 'year-month':
        return (
          <PickerDate
            type={type}
            onCancel={onCancel}
            onConfirm={onConfirm}
            changeValue={changeValue}
            setType={setTypeDateSwitch}
            setChangeValue={setChangeValue}
          />
        )
      case 'week':
        return (
          <PickerWeek
            onCancel={onCancel}
            onConfirm={onConfirm}
            changeValue={changeValue}
            setType={setTypeDateSwitch}
            setChangeValue={setChangeValue}
          />
        )
      case 'custom':
        return (
          <PickerCustom
            onCancel={onCancel}
            onConfirm={onConfirm}
            changeValue={changeValue}
            setType={setTypeDateSwitch}
            setChangeValue={setChangeValue}
          />
        )
      default:
        return null
    }
  };

  return (
    <>
      <div
        style={style}
        className="tst-date-picker-field-box"
      >
        {businessDaySwitch && (
          <BusinessDaySwitch
            searchBusinessDay={searchBusinessDay}
            onChange={onChange}
          />
        )}
        <Field
          readOnly
          clickable
          value={fieldValue}
          placeholder="选择选择日期"
          rightIcon={rightIcon}
          onClick={() => setShowPicker(true)}
        />
      </div>
      <Popup
        closeable={false}
        visible={showPicker}
        round={false}
        position="bottom"
        onClose={() => setShowPicker(false)}
      >
        {DateSwitch()}
      </Popup>
    </>
  );
});

export default DatePickerIndex;
