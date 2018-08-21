import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Nav, Table } from '.';

function ListPage({
  title, isLoaded, hasItems, noItemsContent, navActions, columns, datasetSelectors, datasetActions,
}) {
  const nav = (
    <Nav
      datasetSelectors={datasetSelectors}
      datasetActions={datasetActions}
      navActions={navActions}
    />
  );

  const table = (
    <Table
      datasetSelectors={datasetSelectors}
      datasetActions={datasetActions}
      columns={columns}
    />
  );

  return (
    <Fragment>
      <h1>{ title }</h1>
      {isLoaded && (
        hasItems
          ? <Fragment>{nav} {table} {nav}</Fragment>
          : noItemsContent
      )}
    </Fragment>
  );
}

ListPage.propTypes = {
  title: PropTypes.string.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  hasItems: PropTypes.bool.isRequired,
  noItemsContent: PropTypes.node.isRequired,
  navActions: PropTypes.arrayOf(PropTypes.element),
  columns: PropTypes.arrayOf(PropTypes.element).isRequired,
  datasetSelectors: PropTypes.objectOf(PropTypes.func).isRequired,
  datasetActions: PropTypes.objectOf(PropTypes.func).isRequired,
};

ListPage.defaultProps = {
  navActions: null,
};

function mapStateToProps(state, { datasetSelectors }) {
  return {
    isLoaded: datasetSelectors.isLoaded(state),
    hasItems: datasetSelectors.hasItems(state),
  };
}

export default connect(mapStateToProps)(ListPage);
