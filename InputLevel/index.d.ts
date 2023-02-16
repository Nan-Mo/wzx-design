/// <reference types="react" />
import { FormInstance } from 'antd';
interface InputLevelProps {
    form: FormInstance;
    file?: {
        orderName: string;
        topName: string;
    };
}
declare const InputLevel: ({ form, file, }: InputLevelProps) => JSX.Element;
export default InputLevel;
