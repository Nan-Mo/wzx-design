import * as React from 'react';
import { FormItemProps } from 'antd';
declare type AvailableTimeFormItemProps = FormItemProps & {
    name: string | string[];
};
interface props {
    maxCount?: number;
    disabled?: boolean;
    itemMarginBottom?: string;
    formItemProps?: {
        fullTime: AvailableTimeFormItemProps;
        weeks: AvailableTimeFormItemProps;
        times: AvailableTimeFormItemProps;
    };
}
export declare const dayOptions: {
    label: string;
    value: string;
}[];
declare const AvailableTime: React.NamedExoticComponent<props>;
export default AvailableTime;
