import React from 'react';
import PropTypes from 'prop-types';

export default function ViewContents({ dataItem }) {
  return (
    <a href={dataItem.viewUrl} className="view" target="_blank" rel="noopener noreferrer">VIEW</a>
  );
}

ViewContents.propTypes = {
  dataItem: PropTypes.shape({
    viewUrl: PropTypes.string.isRequired,
  }).isRequired,
};
