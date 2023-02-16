import * as React from 'react';
import { InputProps, SelectProps, FormItemProps } from 'antd';
import { GroupProps } from 'antd/lib/input';
import { Rule } from 'antd/lib/form';
interface InputMultipleOptionIProps extends FormItemProps {
    options: {
        name: React.ReactNode;
        value: string | number;
    }[];
    inputItemName: string;
    optionItemName?: string;
    inputGroupProps?: GroupProps;
    selectProps?: SelectProps;
    inputProps?: InputProps;
    inputRules?: Rule[];
    inputStyle?: React.CSSProperties;
    maxLength?: number;
}
declare const InputMultipleOption: ({ options, inputItemName, selectProps, inputProps, inputGroupProps, optionItemName, inputRules, inputStyle, maxLength, ...rest }: InputMultipleOptionIProps) => JSX.Element;
export default InputMultipleOption;
