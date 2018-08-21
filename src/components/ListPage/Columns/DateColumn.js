import React from 'react';
import DateCell from './DateCell';

export default function DateColumn() {
  return null;
}

DateColumn.createCell = (dataItem, props) => <DateCell {...props} dataItem={dataItem} />;
