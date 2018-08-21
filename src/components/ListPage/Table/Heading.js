import React from 'react';
import PropTypes from 'prop-types';

import ColumnHeader from './ColumnHeader';

export default function Heading({ sort: activeSort, onSortClick, column }) {
  const renderCustomHeader = () => column;

  const renderStandardHeader = () => {
    const isActive = activeSort.field === column.props.sort;

    const displaySortDir = isActive ? activeSort.dir : '';

    const newSortDir = displaySortDir === 'asc' ? 'desc' : 'asc';

    return (
      <ColumnHeader
        field={column.props.sort}
        title={column.props.label}
        displaySortDir={displaySortDir}
        newSortDir={newSortDir}
        onSortClick={onSortClick}
      />
    );
  };

  return column.type.rendersHeader
    ? renderCustomHeader()
    : renderStandardHeader();
}

export const sortPropType = PropTypes.shape({
  field: PropTypes.string,
  dir: PropTypes.string,
});
