import React from 'react';
import ActionsCell from './ActionsCell';

export default function ActionsColumn() {
  return null;
}

ActionsColumn.tdClassName = 'links';

ActionsColumn.createCell = (dataItem, props) => <ActionsCell {...props} dataItem={dataItem} />;
