import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContextMenuContents, { childrenPropType, coordsPropType } from './ContextMenuContents';
import { hideContextMenu as hideContextMenuAction } from './actions';

function ContextMenu({ coords, children, hideContextMenu }) {
  if (!coords) return null;

  const hide = () => {
    hideContextMenu();
  };

  return (
    <ContextMenuContents coords={coords} hide={hide}>
      {children}
    </ContextMenuContents>
  );
}

ContextMenu.propTypes = {
  children: childrenPropType,
  hideContextMenu: PropTypes.func.isRequired,
  coords: coordsPropType,
};

ContextMenu.defaultProps = {
  children: null,
  coords: null,
};

function mapStateToProps({ contextMenu }) {
  const { items, coords } = contextMenu || {
    items: null,
    coords: null,
  };
  return {
    coords,
    children: items,
  };
}

const mapDispatchToProps = {
  hideContextMenu: hideContextMenuAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContextMenu);
