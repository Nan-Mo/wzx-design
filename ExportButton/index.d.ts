import * as React from 'react';
import { ButtonProps } from 'antd/es/button/button';
import ExportPageEntery, { addCount } from './components/ExportPageEntery';
interface ExportButtonProps extends ButtonProps {
    icon?: React.ReactNode;
    request: () => Promise<any>;
    onSuccess?: (e: any) => void;
    successMessage?: string;
    animation?: boolean;
}
declare type CompoundedComponent = ExportButtonProps & {
    ExportPageEntery?: typeof ExportPageEntery;
    addCount?: typeof addCount;
};
declare const ExportButton: {
    ({ request, onSuccess, successMessage, icon, animation, children, ...rest }: CompoundedComponent): JSX.Element;
    ExportPageEntery: ({ onClick, className, style, iconStyle, badgeSize, }: {
        onClick?: (() => void) | undefined;
        className?: string | undefined;
        style?: React.CSSProperties | undefined;
        iconStyle?: React.CSSProperties | undefined;
        badgeSize?: "small" | "default" | undefined;
    }) => JSX.Element;
    addCount: (e: any) => void;
};
export default ExportButton;
