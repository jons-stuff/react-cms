import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import PageLink from './PageLink';

function PageLinkNumbers({
  range, numPages, activePage, onPageClick,
}) {
  const displayedPages = [];
  for (let i = range.first; i < range.last; i += 1) {
    displayedPages.push(i);
  }

  const pagesGap = (
    <Fragment>
      {' '}<span className="dots">...</span>{' '}
    </Fragment>
  );

  return (
    <div className="page-numbers">
      {range.first !== 0 &&
        <PageLink page={0} onAction={onPageClick} />
      }
      {range.first > 1 && pagesGap}
      {displayedPages.map(page => (
        <PageLink key={page} page={page} onAction={onPageClick} active={activePage === page} />
      ))}
      {range.last < numPages - 1 && pagesGap}
      {range.last !== numPages &&
        <PageLink page={numPages - 1} onAction={onPageClick} />
      }
    </div>
  );
}

PageLinkNumbers.propTypes = {
  range: PropTypes.shape({
    first: PropTypes.number.isRequired,
    last: PropTypes.number.isRequired,
  }).isRequired,
  numPages: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  onPageClick: PropTypes.func.isRequired,
};

export default PageLinkNumbers;
