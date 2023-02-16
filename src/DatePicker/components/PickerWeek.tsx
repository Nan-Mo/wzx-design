import * as React from 'react';
import { PickerDateSwitchProps } from "..";
import ColumnsTop from "./ColumnsTop/index";
import Title from "./Title";
import moment from 'moment';
import DialogAlert from "./DialogAlert";
import WeekPicker from './WeekPicker/index';

const PickerWeek = ({
  setChangeValue,
  onConfirm,
  onCancel,
  changeValue,
  setType,
}: PickerDateSwitchProps) => {

  const onChangeWeekPicker = (val: [any, any]) => {
    const [year, week] = val;
    const value = `${year?.text}${week?.text} （${week?.value}）`;
    setChangeValue(value);
  }

  const onConfirmWeekPicker = (value: { text: string; dates: string[] }) => {
    const limit = moment().valueOf();
    if (moment(value.dates[1]).valueOf() >= limit) {
      DialogAlert('选择时间不能大于当前时间')
      return;
    }
    const parma = {
      dates: [moment(value.dates[0]), moment(value.dates[1])],
    };
    onConfirm(value.text, parma)
  }

  return (
    <WeekPicker
      title={<Title />}
      onCancel={onCancel}
      onChange={onChangeWeekPicker}
      columnsTop={
        <ColumnsTop
          changeValue={changeValue}
          type="week"
          setType={setType}
          setChangeValue={setChangeValue}
        />
      }
      onConfirm={onConfirmWeekPicker}
      onDefaultChange={setChangeValue}
    />
  )
}

export default PickerWeek;

