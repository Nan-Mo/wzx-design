import * as React from 'react';
import './index.less';
export declare type DateType = 'date' | 'year-month' | 'week' | 'custom';
export declare type DatePickerIndexProps = {
    onChange: (params: any) => void;
    onType?: (type: DateType) => void;
    businessDaySwitch?: boolean;
    rightIcon?: React.ReactNode;
    style?: React.CSSProperties;
    searchBusinessDay?: boolean;
};
export interface PickerDateSwitchProps {
    setChangeValue: (params: any) => void;
    onCancel: () => void;
    onConfirm: (file: any, parma: any) => void;
    setType: (t: any) => void;
    changeValue: number;
}
declare const DatePickerIndex: ({ onChange, onType, businessDaySwitch, rightIcon, style, searchBusinessDay, }: DatePickerIndexProps) => JSX.Element;
export default DatePickerIndex;
