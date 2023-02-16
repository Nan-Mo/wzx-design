import * as React from 'react';
import { UploadFile } from 'antd/lib/upload/interface';
import './index.less';
export declare enum ImportStatusEnum {
    /** 上传中 */
    process = "PROCESS",
    /** 失败 */
    fail = "FAIL",
    /** 部分成功 */
    partSuccess = "PART_SUCCESS",
    /** 成功 */
    success = "SUCCESS",
    /** 默认状态 选择文件 */
    pickFile = "PICK_FILE"
}
declare type normalStatus = {
    status: 'FAIL' | 'PROCESS' | 'PICK_FILE';
    [k: string]: any;
};
declare type partSucStatus = {
    status: 'PART_SUCCESS';
    url: string;
    failMsg?: string;
    total: number;
    failLength: number;
};
declare type sucStatus = {
    status: 'SUCCESS';
    total: number;
    [k: string]: any;
};
declare type UploadRes = {
    failExcelUrl?: string;
    failCount?: number;
    successCount: number;
};
export declare type IStatusRender = normalStatus | partSucStatus | sucStatus;
interface IProps {
    modalTitle?: React.ReactNode;
    visible: boolean;
    onClose: (refresh: boolean) => void;
    /** 下载模版 */
    templateUrl?: string;
    downloadTemplate?: () => Promise<string>;
    /** 上传接口 */
    upload: (file: UploadFile) => Promise<UploadRes>;
}
declare const ImportModal: {
    ({ modalTitle, onClose, visible, upload, templateUrl, downloadTemplate, }: IProps): JSX.Element;
    defaultProps: {
        statusData: {
            status: ImportStatusEnum;
        };
    };
};
export default ImportModal;
