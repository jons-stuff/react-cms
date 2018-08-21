
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CustomCell from './CustomCell';

export default function EditCell({
  dataItem, children, field, pathProvider,
}) {
  const path = pathProvider(dataItem.id);

  return (
    <Link to={path}>
      <CustomCell field={field} dataItem={dataItem}>{children}</CustomCell>
    </Link>
  );
}

EditCell.propTypes = {
  dataItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  field: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node),
  pathProvider: PropTypes.func.isRequired,
};

EditCell.defaultProps = {
  field: null,
  children: null,
};
