import React from 'react';
import PropTypes from 'prop-types';

export default function NavFrame({ actionLinks, pageLinks, itemsPerPageLinks }) {
  return (
    <table className="gridTableControls">
      <tbody>
        {actionLinks &&
          <tr>
            <td className="buttons">
              { actionLinks }
            </td>
          </tr>
        }
        {(pageLinks || itemsPerPageLinks) &&
          <tr>
            <td className="pages">
              { pageLinks }
            </td>
            <td className="viewNum">
              { itemsPerPageLinks }
            </td>
          </tr>
        }
      </tbody>
    </table>
  );
}

NavFrame.propTypes = {
  actionLinks: PropTypes.node,
  pageLinks: PropTypes.node,
  itemsPerPageLinks: PropTypes.node,
};

NavFrame.defaultProps = {
  actionLinks: null,
  pageLinks: null,
  itemsPerPageLinks: null,
};
