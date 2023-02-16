import { UploadProps as AntUploadProps } from 'antd/es/upload/interface';
import { ReactNode } from 'react';
import FileUpload from './FileUpload';
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
declare type CompoundedComponent = UploadProps & {
    FileUpload: typeof FileUpload;
};
declare const Uploader: {
    ({ accept, action, maxCount, multiple, disabled, listType, limitSize, beforeUpload, showUploadList, uploading, setUploading, value, onChange, resetValue, isSingle, additionalData, children, className, }: CompoundedComponent): JSX.Element;
    FileUpload: ({ accept, action, multiple, disabled, limitSize, beforeUpload, showUploadList, uploading, setUploading, value, onChange, isSingle, additionalData, className, fileName, maxCount, }: UploadProps) => JSX.Element;
};
export default Uploader;
