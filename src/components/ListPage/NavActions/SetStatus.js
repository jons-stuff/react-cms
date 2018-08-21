import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function SetStatus({
  status, className, children, onSetStatus,
}) {
  const onClick = (e) => {
    e.preventDefault();
    onSetStatus(status);
  };
  return <a href="#" className={`btn ${className}`} onClick={onClick}>{children}</a>;
}

SetStatus.propTypes = {
  status: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onSetStatus: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch, { statusActions }) {
  return bindActionCreators({ onSetStatus: statusActions.setSelectedListItemsStatus }, dispatch);
}

export default connect(null, mapDispatchToProps)(SetStatus);
