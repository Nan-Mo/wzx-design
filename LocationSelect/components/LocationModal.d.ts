/// <reference types="react" />
import { FullLngLatPos } from 'react-amap';
import { IUseModalResult } from '@shihengtech/hooks/lib/useModal';
import { LocationModalValueProps } from '..';
export declare type Address = {
    province?: string;
    city?: string;
    district?: string;
    address?: string;
    formattedAddress?: string;
    location?: FullLngLatPos;
};
declare type LocationModalProps = IUseModalResult<LocationModalValueProps>;
declare const LocationModal: ({ closeModal, visible, initValue }: LocationModalProps) => JSX.Element;
export default LocationModal;
