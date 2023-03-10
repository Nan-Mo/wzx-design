import classNames from 'classnames';
import moment, { Moment } from 'moment';
import * as React from 'react';
import { useState } from 'react';
import { DatetimePicker } from 'react-vant';
import { date, defaultEndTime, defaultStartTime, formatCN } from '../../const';
import { PickerDateSwitchProps } from '../../index';
import ColumnsTop from '../ColumnsTop/index';
import DialogAlert from '../DialogAlert';
import Title from '../Title';
import './index.less';

type Time = { text: string; value: Moment };

interface StartAndEndTimeProps {
  onClick: () => void;
  active: boolean;
  text?: string;
}

const getDateValueOf = (date: moment.Moment) => {
  return new Date(`${date.format('YYYY-MM-DD')}`).valueOf();
};

const StartAndEndTime = ({ onClick, active, text }: StartAndEndTimeProps) => {
  return (
    <div
      onClick={onClick}
      className={classNames('tst-date-picker-custom-time', {
        ['tst-date-picker-custom-time-active']: active,
      })}
    >
      {text}
    </div>
  );
};

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

  const value =
    isStartOrEnd === 'start'
      ? startTime.value.toDate()
      : isStartOrEnd === 'end'
      ? endTime.value.toDate()
      : startTime.value.toDate();

  const onChangeDatetimePicker = (val: any) => {
    const dateValue = {
      text: formatCN(val),
      value: moment(val),
    };
    if (isStartOrEnd === 'start') {
      setStartTime(dateValue);
    }
    if (isStartOrEnd === 'end') {
      setEndTime(dateValue);
    }
  };

  const onConfirmDatetimePicker = () => {
    const startTimeValue = startTime.value;
    const endTimeValue = endTime.value;
    const limit31Day = getDateValueOf(moment(startTimeValue).add(31, 'day'));
    const nowValueOf = getDateValueOf(moment());
    const endValueOf = getDateValueOf(endTime.value);
    const startValueOf = getDateValueOf(startTimeValue);

    if (endValueOf > nowValueOf) {
      DialogAlert('????????????????????????????????????');
      return;
    }
    if (endValueOf < startValueOf) {
      DialogAlert('????????????????????????????????????');
      return;
    }
    if (endValueOf >= limit31Day) {
      DialogAlert('?????????31?????????????????????');
      return;
    }

    const parma = {
      dates: [startTimeValue, endTimeValue],
    };
    onConfirm(`${startTime.text} ~ ${endTime.text}`, parma);
  };

  return (
    <DatetimePicker
      title={<Title subTitle="?????????????????????31???" />}
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
  );
};

export default CustomDate;
