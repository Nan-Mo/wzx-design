import * as React from 'react';
import { SelectProps } from 'antd/es/select';
import { POI } from '../../types/amap';
interface Props<T = any> extends Omit<SelectProps<T>, 'onChange'> {
    city?: string;
    onChange?: (value: POI) => void;
}
declare const POISelect: React.NamedExoticComponent<Props<any>>;
export default POISelect;
