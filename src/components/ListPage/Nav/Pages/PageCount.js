import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function PageCount({ page, numPages }) {
  return <Fragment>Page {page + 1} of {numPages} &nbsp;</Fragment>;
}

PageCount.propTypes = {
  page: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
};

export default PageCount;
