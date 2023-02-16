import { ReactNode } from 'react';
import { ButtonProps } from 'antd/es/button/button';
export interface DelayButtonProps extends ButtonProps {
    delay?: number;
    delayRender?(lastTime: number): ReactNode;
}
declare const DelayButton: ({ children, loading, delayRender, disabled, delay, ...props }: DelayButtonProps) => JSX.Element;
export default DelayButton;
