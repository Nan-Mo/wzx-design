/// <reference types="react" />
import { Moment } from 'moment';
interface StartAndEndDateProps {
    date: (string | number | Moment)[];
    format?: string;
}
declare const StartAndEndDate: ({ date, format, }: StartAndEndDateProps) => JSX.Element;
export default StartAndEndDate;
