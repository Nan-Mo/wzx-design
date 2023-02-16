import * as React from 'react';
import { Col, Row } from 'antd';
import { formatCN, types } from '../../const';
import moment from 'moment';
import classNames from 'classnames';
import { ReactNode } from 'react';
import { DateType } from '../../index';

import './index.less';

function ColumnsTop({
  type,
  changeValue,
  setType,
  setChangeValue,
  bottom,
}: {
  changeValue: any;
  type: 'date' | 'year-month' | 'week' | 'custom';
  setType: (type: 'date' | 'year-month' | 'week' | 'custom') => void;
  setChangeValue: (date: any) => void;
  bottom?: () => ReactNode;
}) {

  const onClick = (t: { name?: string; type: DateType; }) => {
    let date: any;
    switch (t.type) {
      case 'date':
        date = formatCN();
        break;
      case 'week':
        date = `${moment().format('YYYY')}年${moment().format('wo')}`;
        break;
      case 'year-month':
        date = `${moment().subtract(1, 'months').format('YYYY年MM月')}`;
        break;
      case 'custom':
        date = [
          formatCN(),
          moment().add(31, 'day').format('YYYY-MM-DD'),
        ];
        break;
      default:
        break;
    }
    setChangeValue(date);
    setType(t.type);
  }

  return (
    <div className="tst-date-picker-columns-top">
      <div className="tst-date-picker-columns-top-radio">
        <Row className="tst-date-picker-columns-top-radio-box">
          {types.map((t) => (
            <Col
              onClick={() => onClick(t)}
              key={t.type}
              span={6}
              className={classNames("tst-date-picker-columns-top-radio-box-item", {
                ["tst-date-picker-columns-top-radio-box-item-active"]: t.type === type,
              })}
            >
              {t.name}
            </Col>
          ))}
        </Row>
      </div>
      {bottom
        ? bottom()
        : (
          <div className="tst-date-picker-columns-top-time">{changeValue}</div>
        )}
    </div>
  );
}

export default ColumnsTop;
