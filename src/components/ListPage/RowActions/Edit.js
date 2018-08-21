import React from 'react';
import EditContents from './EditContents';

export default function Edit() {
  return null;
}

Edit.createForRow = (key, props, dataItem) => (
  <EditContents key={key} {...props} dataItem={dataItem} />
);
