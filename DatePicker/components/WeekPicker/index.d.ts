import * as React from 'react';
import { ReactNode } from 'react';
interface IWeekPickerProps {
    title?: any;
    minDate?: Date;
    maxDate?: Date;
    onConfirm: (value: any) => void;
    columnsTop?: ReactNode;
    onDefaultChange?: (values: any) => void;
    onChange?: (values: any) => void;
    onCancel?: () => void;
}
declare const _default: React.NamedExoticComponent<IWeekPickerProps>;
export default _default;
