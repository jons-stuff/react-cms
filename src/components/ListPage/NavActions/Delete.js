import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function Delete({ onAction }) {
  const onClick = (e) => {
    e.preventDefault();
    onAction();
  };

  return <a href="#" onClick={onClick} className="btn delete">DELETE</a>;
}

Delete.propTypes = {
  onAction: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch, { deleteActions }) {
  return bindActionCreators({ onAction: deleteActions.deleteSelectedListItems }, dispatch);
}

export default connect(null, mapDispatchToProps)(Delete);
