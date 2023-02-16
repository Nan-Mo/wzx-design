import * as React from 'react';
import classnames from 'classnames';
import { Typography } from 'antd';
import styles from '../styles/global.module.less';

interface TextProps {
  style?: React.CSSProperties;
  type: 'primary' | 'grey';
  children: React.ReactNode;
  className?: string;
}

const Text = ({ 
  children, 
  type = 'primary',
  className,
  ...rest
}: TextProps) => {
  const cls = classnames(styles.tst_primary_color, className);
  
  if (type === 'grey') {
    return (
      <Typography.Text type="secondary" {...rest}>
        {children}
      </Typography.Text>
    )
  }

  return (
    <span
      className={cls}
      {...rest}
    >
      {children}
    </span>
  );
}

export default Text;

