import React from 'react';
import StatusCell from './StatusCell';

export default function StatusColumn() {
  return null;
}

StatusColumn.defaultProps = {
  label: 'Status',
  sort: 'status',
};

StatusColumn.createCell = (dataItem, props) => <StatusCell {...props} dataItem={dataItem} />;
