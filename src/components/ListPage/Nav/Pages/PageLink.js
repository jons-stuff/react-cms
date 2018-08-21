import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function PageLink({
  children: overrideLabel, page, className, active, disabled, onAction,
}) {
  const label = overrideLabel || (page + 1);

  const onClick = (e) => {
    e.preventDefault();
    onAction(page);
  };

  const classNameToUse = className || (active ? 'active' : null);

  return (
    <Fragment>
      {' '}
      {disabled ? (
        <span className={classNameToUse}>{label}</span>
      ) : (
        <a href="#" className={classNameToUse} onClick={onClick}>{label}</a>
      )}
      {' '}
    </Fragment>
  );
}

PageLink.propTypes = {
  children: PropTypes.node,
  page: PropTypes.number.isRequired,
  className: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onAction: PropTypes.func.isRequired,
};

PageLink.defaultProps = {
  children: null,
  className: null,
  disabled: false,
  active: false,
};

export default PageLink;
