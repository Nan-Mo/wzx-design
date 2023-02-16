/// <reference types="react" />
import { FormInstance } from 'antd';
import { Address } from "./components/LocationModal";
import { FullLngLatPos } from "react-amap";
interface LocationSelectProps {
    form: FormInstance;
}
export interface LocationModalValueProps {
    data: Address;
    onSuccess: (center: FullLngLatPos, { address }: Address) => void;
}
declare const LocationSelect: ({ form }: LocationSelectProps) => JSX.Element;
export default LocationSelect;
