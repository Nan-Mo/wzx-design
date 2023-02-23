import moment from 'moment';
import * as React from 'react';
import { DatetimePicker } from 'react-vant';
import { PickerDateSwitchProps } from '..';
import { date, formatCN } from '../const';
import ColumnsTop from './ColumnsTop/index';
import DialogAlert from './DialogAlert';
import Title from './Title';

type Type = 'date' | 'year-month';
interface PickerDateProps extends PickerDateSwitchProps {
  type: Type;
}

const dateFomat = (val: moment.MomentInput, type: Type) => {
  return type === 'date' ? formatCN(val) : moment(val).format('YYYY年MM月');
};

const PickerDate = ({
  type,
  onConfirm,
  onCancel,
  setChangeValue,
  changeValue,
  setType,
  subTitle,
}: PickerDateProps) => {
  const onConfirmDatetimePicker = (val: any) => {
    const limit =
      type === 'date'
        ? moment().valueOf()
        : moment().subtract(1, 'months').valueOf();

    if (moment(val).valueOf() >= limit) {
      DialogAlert('选择时间不能大于当前时间');
      return;
    }

    const startDate =
      type === 'date' ? moment(val) : moment(val).startOf('month');
    const endDate = type === 'date' ? moment(val) : moment(val).endOf('month');

    const parma = {
      dates: [startDate, endDate],
    };

    onConfirm(dateFomat(val, type), parma);
  };
  return (
    <DatetimePicker
      type={type}
      minDate={date.minDate}
      maxDate={date.maxDate}
      value={date.today}
      title={<Title subTitle={subTitle} />}
      onChange={(val: any) => setChangeValue(dateFomat(val, type))}
      onCancel={onCancel}
      onConfirm={onConfirmDatetimePicker}
      columnsTop={
        <ColumnsTop
          type={type}
          changeValue={changeValue}
          setType={setType}
          setChangeValue={setChangeValue}
        />
      }
    />
  );
};

export default PickerDate;
