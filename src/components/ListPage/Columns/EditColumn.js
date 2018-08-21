import React from 'react';
import PropTypes from 'prop-types';
import EditCell from './EditCell';

export default function EditColumn() {
  return null;
}

EditColumn.propTypes = {
  children: PropTypes.func,
};

EditColumn.createCell = (dataItem, props) => <EditCell {...props} dataItem={dataItem} />;
