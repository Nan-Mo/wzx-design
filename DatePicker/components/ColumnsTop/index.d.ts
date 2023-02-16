import { ReactNode } from 'react';
import './index.less';
declare function ColumnsTop({ type, changeValue, setType, setChangeValue, bottom, }: {
    changeValue: any;
    type: 'date' | 'year-month' | 'week' | 'custom';
    setType: (type: 'date' | 'year-month' | 'week' | 'custom') => void;
    setChangeValue: (date: any) => void;
    bottom?: () => ReactNode;
}): JSX.Element;
export default ColumnsTop;
