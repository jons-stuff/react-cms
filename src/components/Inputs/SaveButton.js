import React from 'react';
import PropTypes from 'prop-types';

import saveButton from 'Assets/save.gif';

export default function SaveButton(props) {
  const onClick = (e) => {
    e.preventDefault();
    props.onClick();
  };
  return <a href="#" onClick={onClick}><img src={saveButton} alt="Save" /></a>;
}

SaveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
