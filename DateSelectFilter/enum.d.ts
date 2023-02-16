import React, { ReactNode } from 'react';
import moment, { Moment } from 'moment';
import { RangePickerProps } from 'antd/es/date-picker/generatePicker';
export declare type ValueEnums = 'DAY_0' | 'DAY_1' | 'DAY_2' | 'DAY_7' | 'DAY_15' | 'DAY_30' | 'CURRENT_WEEK' | 'LAST_WEEK' | 'CURRENT_MONTH' | 'LAST_MONTH' | 'CUSTOM' | 'WEEK' | 'MONTH' | 'DATE';
export declare type DateRenderProps = {
    disabledDate?: RangePickerProps<Moment>['disabledDate'];
    defaultValue?: Moment[];
    endMoment: Moment;
    onChange: (dateInfo: Moment[]) => void;
};
declare type DATE_SELECT_OPTION = {
    value: ValueEnums;
    label: ReactNode;
    DateRender: React.FC<DateRenderProps>;
    time?: Moment[];
};
export declare const DATE_SELECT_OPTIONS: DATE_SELECT_OPTION[];
export declare const getDataRanges: (endMoment: Moment) => ({
    value: "DAY_0";
    label: string;
    time: moment.Moment[];
} | {
    value: "DAY_1";
    label: string;
    time: moment.Moment[];
} | {
    value: "DAY_2";
    label: string;
    time: moment.Moment[];
} | {
    value: "DAY_7";
    label: string;
    time: moment.Moment[];
} | {
    value: "DAY_15";
    label: string;
    time: moment.Moment[];
} | {
    value: "DAY_30";
    label: string;
    time: moment.Moment[];
} | {
    value: "CURRENT_WEEK";
    label: string;
    time: moment.Moment[];
} | {
    value: "LAST_WEEK";
    label: string;
    time: moment.Moment[];
} | {
    value: "CURRENT_MONTH";
    label: string;
    time: moment.Moment[];
} | {
    value: "LAST_MONTH";
    label: string;
    time: moment.Moment[];
})[];
export {};
