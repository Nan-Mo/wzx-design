declare type IResponse<T = any> = {
    code: 200 | 500 | 401 | 600;
    msg?: string;
    result: T;
};
export declare const sleep: (ms: number) => Promise<unknown>;
export declare const showExportAnimation: (position: {
    x: number;
    y: number;
}) => Promise<void>;
export declare function isSuccResponse(response: IResponse<any>, defaultMsg?: string): boolean | "" | undefined;
export declare const dateFormatStr = "YYYY-MM-DD";
export declare const checkFile: (file: File, limitSize: number) => string | true;
export {};
