import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RowSelectionCell from './RowSelectionCell';

function RowSelectionColumn({ allChecked, onAllCheckboxChecked, onAllCheckboxUnchecked }) {
  const onChange = (e) => {
    if (e.target.checked) {
      onAllCheckboxChecked();
    } else {
      onAllCheckboxUnchecked();
    }
  };

  return (
    <input type="checkbox" className="sel-checkbox" onChange={onChange} checked={allChecked} />
  );
}

RowSelectionColumn.createCell = (dataItem, props) => (
  <RowSelectionCell {...props} id={dataItem.id} />
);

RowSelectionColumn.tdClassName = 'cb';

RowSelectionColumn.rendersHeader = true;

RowSelectionColumn.propTypes = {
  allChecked: PropTypes.bool.isRequired,
  onAllCheckboxChecked: PropTypes.func.isRequired,
  onAllCheckboxUnchecked: PropTypes.func.isRequired,
};

function mapStateToProps(state, { rowSelectionSelectors }) {
  return {
    allChecked: rowSelectionSelectors.areAllDisplayedItemsSelected(state),
  };
}

function mapDispatchToProps(dispatch, { rowSelectionActions }) {
  return bindActionCreators({
    onAllCheckboxChecked: rowSelectionActions.selectAllListItems,
    onAllCheckboxUnchecked: rowSelectionActions.unselectAllListItems,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RowSelectionColumn);
