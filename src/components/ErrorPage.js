import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export default function ErrorPage({ error, onBack }) {
  const backClickHandler = (e) => {
    e.preventDefault();
    onBack();
  };

  return (
    <Fragment>
      <h1>ERROR: {error}</h1>
      <p><a href="#" onClick={backClickHandler}>&lt;&lt; BACK</a></p>
    </Fragment>
  );
}

ErrorPage.propTypes = {
  error: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};
