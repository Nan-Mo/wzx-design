import * as React from 'react';
interface StatusDotProps {
    type: 'error' | 'warning' | 'success' | 'info' | 'cancel';
    text?: string;
    radius?: number;
    style?: React.CSSProperties;
}
declare const StatusDot: ({ type, text, radius, style, }: StatusDotProps) => JSX.Element;
export default StatusDot;
