import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export default function EditPageLayout({ title, sideActions, body }) {
  return (
    <Fragment>
      <h1>{ title }</h1>
      <table className="edit-page-table">
        <tbody>
          <tr>
            <td valign="top">
              { body }
            </td>
            <td valign="top">
              <div className="rh-column">
                { sideActions }
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
}

EditPageLayout.propTypes = {
  title: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  sideActions: PropTypes.node.isRequired,
};
