import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export default function ActionsCell({ dataItem, children: actions }) {
  const makeComponentForAction = (action, key) => (
    action
      ? action.type.createForRow(key, action.props, dataItem)
      : null
  );

  return (
    <Fragment>
      <div className="btn-pod-rgt" />
      <div className="btn-pod">
        {actions.map((action, index) => makeComponentForAction(action, index))}
      </div>
      <div className="btn-pod-lft" />
    </Fragment>
  );
}

/* eslint-disable react/forbid-prop-types */

ActionsCell.propTypes = {
  dataItem: PropTypes.object.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};
