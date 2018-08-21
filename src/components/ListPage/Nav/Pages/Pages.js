import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PageCount from './PageCount';
import PageLink from './PageLink';
import PageLinkNumbers from './PageLinkNumbers';

function Pages({
  onPageClick, itemsPerPage, activePage, totalItems,
}) {
  if (!totalItems || !itemsPerPage) return null;

  const numPages = itemsPerPage === 'all' ?
    1 :
    Math.ceil(totalItems / itemsPerPage);

  const width = 15;

  const first = Math.max(0, Math.floor(activePage - (width / 2)) + 1);
  const range = {
    first,
    last: Math.min(numPages, first + width),
  };
  if (range.first - range.last < width) {
    if (numPages - activePage < activePage) {
      range.last = Math.min(numPages, Math.floor(activePage + (width / 2)) + 1);
      range.first = Math.max(0, range.last - width);
    } else {
      range.first = Math.max(0, Math.floor(activePage - (width / 2)) + 1);
      range.last = Math.min(numPages, range.first + width);
    }
  }

  return (
    <Fragment>
      <PageCount page={activePage} numPages={numPages} />
      <PageLink
        className="previous"
        page={activePage - 1}
        disabled={activePage === 0}
        onAction={onPageClick}
      >
        PREVIOUS
      </PageLink>
      <PageLinkNumbers
        onPageClick={onPageClick}
        range={range}
        numPages={numPages}
        activePage={activePage}
      />
      <PageLink
        className="next"
        page={activePage + 1}
        disabled={activePage === numPages - 1}
        onAction={onPageClick}
      >
        NEXT
      </PageLink>
    </Fragment>
  );
}

Pages.propTypes = {
  onPageClick: PropTypes.func.isRequired,
  itemsPerPage: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  activePage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
};

function mapStateToProps(state, { datasetSelectors }) {
  return {
    totalItems: datasetSelectors.getTotalItems(state),
    itemsPerPage: datasetSelectors.getItemsPerPage(state),
    activePage: datasetSelectors.getPage(state),
  };
}

function mapDispatchToProps(dispatch, { datasetActions }) {
  return bindActionCreators({
    onPageClick: datasetActions.changePage,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Pages);
