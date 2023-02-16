import * as React from 'react';
interface TextProps {
    style?: React.CSSProperties;
    type: 'primary' | 'grey';
    children: React.ReactNode;
    className?: string;
}
declare const Text: ({ children, type, className, ...rest }: TextProps) => JSX.Element;
export default Text;
