import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getElementDocumentCoords } from 'Utilities/dom';
import { showContextMenu as showContextMenuAction } from '../../ContextMenu/actions';

function makeMenuItems(statuses, activeStatus, onStatusClick) {
  const isNotActive = status => status !== activeStatus;

  const makeMenuItem = status => ({
    label: statuses[status],
    onAction: onStatusClick(status),
  });

  return Object.keys(statuses)
    .filter(isNotActive)
    .map(makeMenuItem);
}

function StatusCell({
  statuses, dataItem, showContextMenu, onNewStatus,
}) {
  const onStatusClick = newStatus => () => onNewStatus(dataItem.id, newStatus);

  const onClick = (e) => {
    e.preventDefault();

    const menuItems = makeMenuItems(statuses, dataItem.status, onStatusClick);

    showContextMenu(menuItems, getElementDocumentCoords(e.target));
  };

  const activeStatusName = statuses[dataItem.status];

  return (
    <Fragment>
      {activeStatusName}
      <a href="#" className="a-status" onClick={onClick}>&nbsp;</a>
    </Fragment>
  );
}

StatusCell.propTypes = {
  statuses: PropTypes.objectOf(PropTypes.string).isRequired,
  dataItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  showContextMenu: PropTypes.func.isRequired,
  onNewStatus: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch, { statusActions }) {
  return bindActionCreators({
    showContextMenu: showContextMenuAction,
    onNewStatus: statusActions.setListItemStatus,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(StatusCell);
