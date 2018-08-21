import React from 'react';
import ViewContents from './ViewContents';

export default function View() {
  return null;
}

View.createForRow = (key, props, dataItem) => (
  <ViewContents key={key} {...props} dataItem={dataItem} />
);
