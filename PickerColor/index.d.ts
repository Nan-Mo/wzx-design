/// <reference types="react" />
import { AnyColorFormat as antAnyColorFormat, ColorPickerResult as antColorPickerResult, ColorPickerTypes as antColorPickerTypes, ColorPickerValue as antColorPickerValue } from './Colorpicker';
export declare type AnyColorFormat = antAnyColorFormat;
export declare type ColorPickerResult = antColorPickerResult;
export declare type ColorPickerTypes = antColorPickerTypes;
export declare type ColorPickerValue = antColorPickerValue;
declare const PickerColor: ((props: {
    [key: string]: any;
    popup?: boolean | undefined;
    value?: any;
    onChange?: ((value: any) => void) | undefined;
    onChangeComplete?: ((value: any) => void) | undefined;
    onColorResult?: ((color: ColorResult) => any) | undefined;
    blockStyles?: import("react").CSSProperties | undefined;
    picker?: antColorPickerTypes | undefined;
}) => JSX.Element) & {
    propTypes: {
        [key: string]: any;
    };
};
export default PickerColor;
