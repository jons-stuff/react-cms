import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function DeleteContents({ dataItem, onDeleteClick }) {
  const onClick = (e) => {
    e.preventDefault();
    onDeleteClick(dataItem.id);
  };

  return <a href="#" className="a-del" onClick={onClick}>DEL</a>;
}

DeleteContents.propTypes = {
  dataItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch, { deleteActions }) {
  return bindActionCreators({ onDeleteClick: deleteActions.deleteListItem }, dispatch);
}

export default connect(null, mapDispatchToProps)(DeleteContents);
