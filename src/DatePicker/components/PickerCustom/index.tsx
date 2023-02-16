import * as React from 'react';
import classNames from "classnames";
import moment, { Moment } from "moment";
import { useState } from "react";
import { DatetimePicker } from "react-vant";
import { PickerDateSwitchProps } from "../../index";
import ColumnsTop from '../ColumnsTop/index';
import { date, defaultEndTime, defaultStartTime, formatCN } from "../../const";
import DialogAlert from "../DialogAlert";
import './index.less';

type Time = { text: string; value: Moment };

interface StartAndEndTimeProps {
  onClick: () => void;
  active: boolean
  text?: string
}

const getDateValueOf = (date: moment.Moment) => {
  return new Date(`${date.format('YYYY-MM-DD')}`).valueOf()
}

const StartAndEndTime = ({
  onClick,
  active,
  text
}: StartAndEndTimeProps) => {
  return (
    <div
      onClick={onClick}
      className={classNames('tst-date-picker-custom-time', {
        ['tst-date-picker-custom-time-active']: active,
      })}
    >
      {text}
    </div>
  )
}

const Title = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <span
      style={{
        marginTop: '10px',
      }}
    >
      选择时间
    </span>
    <span
      style={{
        color: '#686868',
        fontSize: '14px',
      }}
    >
      时段相差不超过31天
    </span>
  </div>
)

const CustomDate = ({
  onConfirm,
  onCancel,
  setChangeValue,
  setType,
  changeValue,
}: PickerDateSwitchProps) => {
  const [isStartOrEnd, setIsStartOrEnd] = useState<'start' | 'end'>('start');

  const [startTime, setStartTime] = useState<Time>(defaultStartTime);
  const [endTime, setEndTime] = useState<Time>(defaultEndTime);

  const value = isStartOrEnd === 'start'
    ? startTime.value.toDate()
    : isStartOrEnd === 'end'
      ? endTime.value.toDate()
      : startTime.value.toDate()

  const onChangeDatetimePicker = (val: any) => {
    const dateValue = {
      text: formatCN(val),
      value: moment(val),
    }
    if (isStartOrEnd === 'start') {
      setStartTime(dateValue);
    }
    if (isStartOrEnd === 'end') {
      setEndTime(dateValue);
    }
  }

  const onConfirmDatetimePicker = () => {
    const startTimeValue = startTime.value;
    const endTimeValue = endTime.value;
    const limit31Day = getDateValueOf(moment(startTimeValue).add(31, 'day'));
    const nowValueOf = getDateValueOf(moment());
    const endValueOf = getDateValueOf(endTime.value);
    const startValueOf = getDateValueOf(startTimeValue);

    if (endValueOf > nowValueOf) {
      DialogAlert('结束时间不能大于当前时间')
      return;
    }
    if (endValueOf < startValueOf) {
      DialogAlert('结束时间不能小于开始时间')
      return;
    }
    if (endValueOf >= limit31Day) {
      DialogAlert('已超过31天，请重新选择')
      return;
    }

    const parma = {
      dates: [startTimeValue, endTimeValue],
    };
    onConfirm(`${startTime.text} ~ ${endTime.text}`, parma)
  }

  return (
    <DatetimePicker
      title={<Title />}
      type="date"
      minDate={date.minDate}
      maxDate={date.maxDate}
      value={value}
      onChange={onChangeDatetimePicker}
      onCancel={onCancel}
      onConfirm={onConfirmDatetimePicker}
      columnsTop={
        <ColumnsTop
          type="custom"
          changeValue={changeValue}
          setType={setType}
          setChangeValue={setChangeValue}
          bottom={() => (
            <div className="tst-date-picker-custom">
              <StartAndEndTime
                onClick={() => {
                  setIsStartOrEnd?.('start');
                }}
                active={isStartOrEnd === 'start'}
                text={startTime?.text}
              />
              <span>~</span>
              <StartAndEndTime
                onClick={() => {
                  setIsStartOrEnd?.('end');
                }}
                active={isStartOrEnd === 'end'}
                text={endTime?.text}
              />
            </div>
          )}
        />
      }
    />
  )
}

export default CustomDate;
