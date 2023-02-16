import moment from 'moment';
import { DateType } from '.';
export declare const types: {
    name: string;
    type: DateType;
}[];
export declare const date: {
    minDate: Date;
    maxDate: Date;
    today: Date;
    value: Date;
    monthsVal: Date;
};
export declare const formatCN: (val?: any) => string;
export declare const defaultStartTime: {
    text: string;
    value: moment.Moment;
};
export declare const defaultEndTime: {
    text: string;
    value: moment.Moment;
};
