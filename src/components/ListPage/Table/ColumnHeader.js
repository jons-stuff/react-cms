import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import upArrow from 'Assets/sort_asc.gif';
import downArrow from 'Assets/sort_desc.gif';

export default function ColumnHeader({
  field, title, displaySortDir, newSortDir, onSortClick,
}) {
  const getArrow = () => {
    if (!displaySortDir) return null;

    const isAscending = displaySortDir === 'asc';
    const sortDescription = isAscending ? 'Ascending' : 'Descending';
    const arrowImage = isAscending ? upArrow : downArrow;

    return (
      <Fragment>
        &nbsp;
        <img src={arrowImage} alt={sortDescription} width="9" height="8" />
      </Fragment>
    );
  };

  const getLink = () => {
    const onClick = (e) => {
      e.preventDefault();
      onSortClick({ field, dir: newSortDir });
    };

    return <a href="#" onClick={onClick}>{title}{getArrow()}</a>;
  };

  const getTitle = () => title || null;

  return field ? getLink() : getTitle();
}

ColumnHeader.propTypes = {
  field: PropTypes.string,
  title: PropTypes.string,
  displaySortDir: PropTypes.string,
  newSortDir: PropTypes.string.isRequired,
  onSortClick: PropTypes.func.isRequired,
};

ColumnHeader.defaultProps = {
  field: null,
  title: null,
  displaySortDir: null,
};
