import React from 'react';
import EmailCell from './EmailCell';

export default function EmailColumn() {
  return null;
}

EmailColumn.createCell = (dataItem, props) => <EmailCell {...props} dataItem={dataItem} />;
