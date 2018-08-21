import React from 'react';
import PropTypes from 'prop-types';

export default function ActionContainer({ buttons }) {
  const buttonsArray = Array.isArray(buttons) ? buttons : [buttons];

  return (
    <table>
      <tbody>
        <tr>
          {buttonsArray.map((item, index) => item && (
            /* eslint-disable-next-line react/no-array-index-key */
            <td key={index} className={index > 0 ? 'right-btn' : null} style={{ whiteSpace: 'nowrap' }} >
              {item}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

ActionContainer.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.node).isRequired,
};
