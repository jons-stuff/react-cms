import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function RowSelectionCell({
  checked, id, onChecked, onUnchecked,
}) {
  const onChange = (e) => {
    if (e.target.checked) {
      onChecked(id);
    } else {
      onUnchecked(id);
    }
  };

  return (
    <input type="checkbox" className="sel-checkbox" onChange={onChange} checked={checked} />
  );
}

RowSelectionCell.propTypes = {
  checked: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  onChecked: PropTypes.func.isRequired,
  onUnchecked: PropTypes.func.isRequired,
};

function mapStateToProps(state, { id, rowSelectionSelectors }) {
  return {
    checked: rowSelectionSelectors.isItemSelected(state, id),
  };
}

function mapDispatchToProps(dispatch, { rowSelectionActions }) {
  return bindActionCreators({
    onChecked: rowSelectionActions.selectListItem,
    onUnchecked: rowSelectionActions.unselectListItem,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RowSelectionCell);
