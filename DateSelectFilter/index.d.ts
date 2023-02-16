import React from 'react';
import moment, { Moment } from 'moment';
import { DateRenderProps, ValueEnums } from './enum';
declare type Value = [Moment[], string[], ValueEnums];
export declare type DateSelectFilterProps = Pick<DateRenderProps, 'disabledDate' | 'defaultValue'> & {
    type?: 'default' | 'quick';
    className?: string;
    picks?: ValueEnums[];
    defaultDateType?: ValueEnums;
    onChange?: (...args: Value) => void;
    endMoment?: Moment;
};
export declare type DateSelectFilterRef = Omit<DateSelectFilterProps, 'onChange' | 'type'>;
declare const DateSelectFilter: React.ForwardRefExoticComponent<Pick<DateRenderProps, "defaultValue" | "disabledDate"> & {
    type?: "default" | "quick" | undefined;
    className?: string | undefined;
    picks?: ValueEnums[] | undefined;
    defaultDateType?: ValueEnums | undefined;
    onChange?: ((args_0: moment.Moment[], args_1: string[], args_2: ValueEnums) => void) | undefined;
    endMoment?: moment.Moment | undefined;
} & React.RefAttributes<DateSelectFilterRef>>;
export default DateSelectFilter;
