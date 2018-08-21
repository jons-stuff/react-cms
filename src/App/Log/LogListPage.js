import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ListPage, Column } from 'Components/ListPage';
import createListStateHandlers from 'Components/ListPage/state';
import { logApiConnector } from './log';

const { reducer, selectors, actions } = createListStateHandlers(
  'logList',
  { dataset: { apiConnector: logApiConnector } },
);

export { reducer as logList };

const defaultFetchAction = () => (dispatch) => {
  dispatch(actions.dataset.resetData());
  dispatch(actions.dataset.changeSort({ field: 'date', dir: 'asc' }));
};

class LogListPage extends React.Component {
  componentDidMount() {
    this.props.doInitialLoad();
  }

  render() {
    const columns = [
      <Column.DateTime label="Date" sort="date" field="date" />,
      <Column.Custom label="User" sort="user" field="user" />,
      <Column.Custom label="Action" sort="action">
        {logItem => logItem.action.toUpperCase()}
      </Column.Custom>,
      <Column.Custom label="Description" sort="description">
        {logItem => `${logItem.area}: ${logItem.item}`}
      </Column.Custom>,
    ];

    return (
      <ListPage
        title="System Log"
        datasetSelectors={selectors.dataset}
        datasetActions={actions.dataset}
        noItemsContent={<p>No items</p>}
        columns={columns}
      />
    );
  }
}

LogListPage.propTypes = {
  doInitialLoad: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  doInitialLoad: defaultFetchAction,
};

export default connect(null, mapDispatchToProps)(LogListPage);
