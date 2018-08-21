import React from 'react';
import PropTypes from 'prop-types';

import Frame from './Frame';
import ItemsPerPage from './ItemsPerPage';
import Pages from './Pages';
import ActionContainer from './Frame/ActionContainer';

export default function Nav({ navActions, datasetSelectors, datasetActions }) {
  return (
    <Frame
      pageLinks={
        <Pages datasetSelectors={datasetSelectors} datasetActions={datasetActions} />
      }
      itemsPerPageLinks={
        <ItemsPerPage datasetSelectors={datasetSelectors} datasetActions={datasetActions} />
      }
      actionLinks={
        navActions && <ActionContainer buttons={navActions} />
      }
    />
  );
}

Nav.propTypes = {
  navActions: PropTypes.arrayOf(PropTypes.node),
  datasetSelectors: PropTypes.objectOf(PropTypes.func).isRequired,
  datasetActions: PropTypes.objectOf(PropTypes.func).isRequired,
};

Nav.defaultProps = {
  navActions: null,
};
