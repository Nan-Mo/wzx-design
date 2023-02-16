/// <reference types="react" />
import { Moment } from 'moment';
import { RangePickerProps } from 'antd/es/date-picker/generatePicker';
interface CustomRangePickerProps<T> extends Omit<RangePickerProps<T>, 'open' | 'onOpenChange'> {
    rangeLimit?: number | false;
}
declare function CustomRangePicker({ defaultValue, onChange, disabledDate, rangeLimit, ...restProps }: CustomRangePickerProps<Moment>): JSX.Element;
declare namespace CustomRangePicker {
    var defaultProps: {
        rangeLimit: number;
    };
}
export default CustomRangePicker;
