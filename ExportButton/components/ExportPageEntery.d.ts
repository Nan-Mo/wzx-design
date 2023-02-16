import * as React from 'react';
export declare const addCount: (e: any) => void;
declare type ExportPageEnteryProps = {
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
    iconStyle?: React.CSSProperties;
    badgeSize?: 'default' | 'small';
};
declare const ExportPageEntery: ({ onClick, className, style, iconStyle, badgeSize, }: ExportPageEnteryProps) => JSX.Element;
export default ExportPageEntery;
