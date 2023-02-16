export declare type Geocode = {
    adcode: string;
    location: {
        lat: number;
        lng: number;
    };
};
export declare type GeocodeResult = {
    info: string;
    resultNum: number;
    geocodes: Geocode[];
};
export declare type ReGeocode = {
    formattedAddress: string;
    addressComponent: {
        adcode?: string;
        province: string;
        city?: string;
        citycode?: string;
        district: string;
        township?: string;
        street?: string;
        streetNumber?: string;
    };
};
export declare type RegeoCodeResult = {
    info: string;
    regeocode: ReGeocode;
};
export declare type POI = {
    id: string;
    name: string;
    location: string;
    pname: string;
    cityname: string;
    adname: string;
    address: string;
};
