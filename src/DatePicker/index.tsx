import { CalendarOutlined } from '@ant-design/icons';
import * as React from 'react';
import { Field, Popup } from 'react-vant';
import { PickerCustom, PickerDate, PickerWeek } from './components';
import BusinessDaySwitch from './components/BusinessDaySwitch';
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
  pickDateType?: DateType[];
  subTitle?: string;
};

export const Context = React.createContext<DateType[]>([]);

const ContextProvider = Context.Provider;
export interface PickerDateSwitchProps {
  setChangeValue: (params: any) => void;
  onCancel: () => void;
  onConfirm: (file: any, parma: any) => void;
  setType: (t: any) => void;
  changeValue: number;
  subTitle?: string;
}

const DatePickerIndex = ({
  onChange,
  onType,
  businessDaySwitch,
  rightIcon = <CalendarOutlined className="tst-date-picker-right-icon" />,
  style,
  searchBusinessDay,
  pickDateType = ['date', 'week', 'year-month', 'custom'],
  subTitle,
}: DatePickerIndexProps) => {
  const [showPicker, setShowPicker] = React.useState(false);
  const [fieldValue, setFieldValue] = React.useState<string>(formatCN());
  const [changeValue, setChangeValue] = React.useState<any>(formatCN());
  const [type, setType] = React.useState<DateType>('date');

  const onConfirm = (fieldValue: React.SetStateAction<string>, parma: any) => {
    setFieldValue(fieldValue);
    onChange(parma);
    setShowPicker(false);
  };

  const onCancel = () => setShowPicker(false);

  const setTypeDateSwitch = (t: any) => {
    setType(t);
    onType?.(t);
  };

  const DateSwitch = () => {
    switch (type) {
      case 'date':
        return (
          <PickerDate
            subTitle={subTitle}
            type={type}
            onCancel={onCancel}
            onConfirm={onConfirm}
            changeValue={changeValue}
            setType={setTypeDateSwitch}
            setChangeValue={setChangeValue}
          />
        );
      case 'year-month':
        return (
          <PickerDate
            subTitle={subTitle}
            type={type}
            onCancel={onCancel}
            onConfirm={onConfirm}
            changeValue={changeValue}
            setType={setTypeDateSwitch}
            setChangeValue={setChangeValue}
          />
        );
      case 'week':
        return (
          <PickerWeek
            subTitle={subTitle}
            onCancel={onCancel}
            onConfirm={onConfirm}
            changeValue={changeValue}
            setType={setTypeDateSwitch}
            setChangeValue={setChangeValue}
          />
        );
      case 'custom':
        return (
          <PickerCustom
            onCancel={onCancel}
            onConfirm={onConfirm}
            changeValue={changeValue}
            setType={setTypeDateSwitch}
            setChangeValue={setChangeValue}
          />
        );
      default:
        return null;
    }
  };

  return (
    <ContextProvider value={pickDateType}>
      <div style={style} className="tst-date-picker-field-box">
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
    </ContextProvider>
  );
};

export default DatePickerIndex;
