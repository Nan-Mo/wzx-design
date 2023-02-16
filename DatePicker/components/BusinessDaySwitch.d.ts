/// <reference types="react" />
import { DatePickerIndexProps } from "..";
import '../index.less';
declare type BusinessDaySwitchProps = Pick<DatePickerIndexProps, 'onChange' | 'searchBusinessDay'>;
declare const BusinessDaySwitch: ({ onChange, searchBusinessDay, }: BusinessDaySwitchProps) => JSX.Element;
export default BusinessDaySwitch;
