import React from 'react';
import PropTypes from 'prop-types';

export default function FieldError({ children }) {
  return children
    ? <span className="fieldError">{ children }</span>
    : null;
}

FieldError.propTypes = {
  children: PropTypes.node,
};

FieldError.defaultProps = {
  children: null,
};
