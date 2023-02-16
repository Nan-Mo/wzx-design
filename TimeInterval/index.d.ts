import * as React from 'react';
import { FormItemProps } from 'antd';
import './style.less';
interface TimeIntervalProps {
    supportNextDay?: boolean;
    disabled?: boolean;
    maxCount?: number;
    formItemProps?: FormItemProps;
}
declare const TimeInterval: React.NamedExoticComponent<TimeIntervalProps>;
export default TimeInterval;
