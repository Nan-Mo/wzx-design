/// <reference types="react" />
import { PickerDateSwitchProps } from "..";
declare type Type = "date" | "year-month";
interface PickerDateProps extends PickerDateSwitchProps {
    type: Type;
}
declare const PickerDate: ({ type, onConfirm, onCancel, setChangeValue, changeValue, setType, }: PickerDateProps) => JSX.Element;
export default PickerDate;
