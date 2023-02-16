/// <reference types="react" />
import 'braft-editor/dist/index.css';
import './styles.less';
declare type TProps = {
    action?: string;
    value?: string;
    onChange: (value: string) => void;
};
declare const Editor: ({ value, onChange, action }: TProps) => JSX.Element;
export default Editor;
