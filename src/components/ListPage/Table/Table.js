import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TableMarkup from './TableMarkup';
import Heading, { sortPropType } from './Heading';

function Table({
  sort, dataItems, onSortClick, columns,
}) {
  const makeColumnHeading = (column, index) => ({
    component: <Heading sort={sort} onSortClick={onSortClick} column={column} />,
    key: index,
  });

  const headings = React.Children.map(columns, makeColumnHeading);

  const makeCell = dataItem => (column, index) => ({
    component: column.type.createCell(dataItem, column.props),
    className: column.type.tdClassName,
    key: index,
  });

  const makeRow = dataItem => ({
    key: dataItem.id,
    cells: React.Children.map(columns, makeCell(dataItem)),
  });

  const rows = dataItems.map(makeRow);

  return <TableMarkup headings={headings} rows={rows} />;
}

Table.propTypes = {
  sort: sortPropType.isRequired,
  dataItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSortClick: PropTypes.func.isRequired,
  columns: PropTypes.arrayOf(PropTypes.element).isRequired,
};

function mapStateToProps(state, { datasetSelectors }) {
  return {
    sort: datasetSelectors.getSort(state),
    dataItems: datasetSelectors.getDisplayedItems(state),
  };
}

function mapDispatchToProps(dispatch, { datasetActions }) {
  return bindActionCreators({ onSortClick: datasetActions.changeSort }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
