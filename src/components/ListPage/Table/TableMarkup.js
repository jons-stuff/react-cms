import React from 'react';
import PropTypes from 'prop-types';

const isAlt = index => index % 2 === 0;

export default function TableMarkup({ headings, rows }) {
  return (
    <table className="gridTable">
      <tbody>
        <tr>
          {headings.map(heading => (
            <th key={heading.key}>{heading.component}</th>
          ))}
        </tr>
        { rows.map((row, rowIndex) => (
          <tr key={row.key} className={isAlt(rowIndex) ? 'alt' : null}>
            { row.cells.map(cell => (
              <td key={cell.key} className={cell.className}>{cell.component}</td>
            )) }
          </tr>
        )) }
      </tbody>
    </table>
  );
}

const headingType = PropTypes.shape({
  key: PropTypes.node.isRequired,
  component: PropTypes.node.isRequired,
});

const cellType = PropTypes.shape({
  key: PropTypes.node.isRequired,
  className: PropTypes.string,
  component: PropTypes.node,
});

const rowType = PropTypes.shape({
  key: PropTypes.node.isRequired,
  cells: PropTypes.arrayOf(cellType).isRequired,
});

TableMarkup.propTypes = {
  headings: PropTypes.arrayOf(headingType).isRequired,
  rows: PropTypes.arrayOf(rowType).isRequired,
};
