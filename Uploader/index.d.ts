import { ReactNode } from 'react';
import { UploadProps as AntUploadProps } from 'antd/es/upload/interface';
import './index.less';
export interface UploadProps extends Omit<AntUploadProps, 'onChange'> {
    limitSize?: number;
    uploading?: boolean;
    setUploading?: (value: boolean) => void;
    isSingle?: boolean;
    resetValue?: string[] | string;
    value?: string[] | string;
    additionalData?: any;
    onChange?: (values: string[] | string) => void;
    children?: ReactNode;
    fileName?: string;
}
declare const Uploader: ({ accept, action, maxCount, multiple, disabled, listType, limitSize, beforeUpload, showUploadList, uploading, setUploading, value, onChange, resetValue, isSingle, additionalData, children, className, }: UploadProps) => JSX.Element;
export default Uploader;
