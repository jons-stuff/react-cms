import React from 'react';
import PropTypes from 'prop-types';

import cancelButton from 'Assets/cancel.gif';

export default function CancelButton(props) {
  const onClick = (e) => {
    e.preventDefault();
    props.onClick();
  };
  return <a href="#" onClick={onClick}><img src={cancelButton} alt="Cancel" /></a>;
}

CancelButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
