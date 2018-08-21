import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export default function ItemsPerPageLink({
  children, itemsPerPage, active, className, onAction,
}) {
  const onClick = (e) => {
    e.preventDefault();
    onAction(itemsPerPage);
  };

  const label = children || itemsPerPage;

  const classNameToUse = className || (active ? 'active' : null);

  return <Fragment>{' '}<a href="#" className={classNameToUse} onClick={onClick}>{label}</a>{' '}</Fragment>;
}

ItemsPerPageLink.propTypes = {
  children: PropTypes.node,
  itemsPerPage: PropTypes.node,
  active: PropTypes.bool.isRequired,
  className: PropTypes.string,
  onAction: PropTypes.func.isRequired,
};

ItemsPerPageLink.defaultProps = {
  children: null,
  itemsPerPage: null,
  className: null,
};
