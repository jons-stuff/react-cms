
import React from 'react';
import PropTypes from 'prop-types';

export default function EmailCell({ dataItem, field }) {
  return <a href={`mailto:${dataItem[field]}`}>{dataItem[field]}</a>;
}

/* eslint-disable react/forbid-prop-types */

EmailCell.propTypes = {
  dataItem: PropTypes.object.isRequired,
  field: PropTypes.string.isRequired,
};
