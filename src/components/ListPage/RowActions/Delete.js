import React from 'react';
import DeleteContents from './DeleteContents';

export default function Delete() {
  return null;
}

Delete.createForRow = (key, props, dataItem) => (
  <DeleteContents key={key} {...props} dataItem={dataItem} />
);
