import React from 'react';
import PropTypes from 'prop-types';

export default function SelectAssoc({ options, ...props }) {
  return (
    <select {...props}>
      {Object.keys(options).map(value => (
        <option key={value} value={value}>{options[value]}</option>
      ))}
    </select>
  );
}

SelectAssoc.propTypes = {
  options: PropTypes.objectOf(PropTypes.string).isRequired,
};
