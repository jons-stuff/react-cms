import React from 'react';
import PropTypes from 'prop-types';
import CustomCell from './CustomCell';

export default function CustomColumn() {
  return null;
}

CustomColumn.propTypes = {
  children: PropTypes.func,
};

CustomColumn.createCell = (dataItem, props) => <CustomCell {...props} dataItem={dataItem} />;
