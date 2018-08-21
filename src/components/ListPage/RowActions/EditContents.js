
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function EditContents({ dataItem, pathProvider }) {
  const path = pathProvider(dataItem.id);

  return <Link className="a-edit" to={path}>EDIT</Link>;
}

EditContents.propTypes = {
  dataItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  pathProvider: PropTypes.func.isRequired,
};
