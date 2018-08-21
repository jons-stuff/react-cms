import React from 'react';
import DateTimeCell from './DateTimeCell';

export default function DateTimeColumn() {
  return null;
}

DateTimeColumn.createCell = (dataItem, props) => <DateTimeCell {...props} dataItem={dataItem} />;
