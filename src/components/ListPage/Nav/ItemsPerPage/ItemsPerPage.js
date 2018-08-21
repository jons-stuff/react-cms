import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SeperatedItems from './SeparatedItems';
import ItemsPerPageLink from './ItemsPerPageLink';

function ItemsPerPage({
  itemsPerPageOptions, activeItemsPerPage, onItemsPerPageClick,
}) {
  return (
    <Fragment>
      Show
      <SeperatedItems seperator=" | ">
        {itemsPerPageOptions.map(itemsPerPage => (
          <ItemsPerPageLink
            key={itemsPerPage}
            itemsPerPage={itemsPerPage}
            active={activeItemsPerPage === itemsPerPage}
            onAction={onItemsPerPageClick}
          />
        ))}
      </SeperatedItems>
      per page
      <ItemsPerPageLink itemsPerPage="all" active={activeItemsPerPage === 'all'} onAction={onItemsPerPageClick}>SHOW ALL</ItemsPerPageLink>
    </Fragment>
  );
}

ItemsPerPage.propTypes = {
  itemsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  activeItemsPerPage: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]).isRequired,
  onItemsPerPageClick: PropTypes.func.isRequired,
};

ItemsPerPage.defaultProps = {
  itemsPerPageOptions: [20, 50, 100],
};

function mapStateToProps(state, { datasetSelectors }) {
  return {
    activeItemsPerPage: datasetSelectors.getItemsPerPage(state),
  };
}

function mapDispatchToProps(dispatch, { datasetActions }) {
  return bindActionCreators({ onItemsPerPageClick: datasetActions.changeItemsPerPage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPerPage);
