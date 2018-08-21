import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function New({ pathProvider }) {
  const path = pathProvider('new');

  return <Link to={path} className="btn new">ADD NEW</Link>;
}

New.propTypes = {
  pathProvider: PropTypes.func.isRequired,
};
