/// <reference types="react" />
import { Moment } from 'moment';
import { DateSelectFilterProps } from '..';
declare type QuickDateSelectProps = Pick<DateSelectFilterProps, 'picks' | 'defaultValue'> & {
    onChange: (value: any) => void;
    endMoment: Moment;
};
declare const QuickDateSelect: ({ endMoment, picks, onChange, defaultValue, }: QuickDateSelectProps) => JSX.Element;
export default QuickDateSelect;
