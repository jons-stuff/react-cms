import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ListPage, NavAction, Column, RowAction } from 'Components/ListPage';
import createListStateHandlers from 'Components/ListPage/state';
import { newsStatuses, newsApiConnector } from './news';
import { routePaths } from '../routes';

const { reducer, selectors, actions } = createListStateHandlers(
  'newsList',
  {
    dataset: { apiConnector: newsApiConnector },
    rowSelection: true,
    delete: true,
    status: true,
  },
);

export { reducer as newsList };

const defaultFetchAction = () => (dispatch) => {
  dispatch(actions.dataset.resetData());
  dispatch(actions.dataset.changeSort({ field: 'publishDate', dir: 'asc' }));
};

class NewsListPage extends React.Component {
  componentDidMount() {
    this.props.doInitialLoad();
  }

  render() {
    const navActions = [
      <NavAction.New pathProvider={routePaths.newsEdit.path} />,
      <NavAction.Group>
        <NavAction.SetStatus statusActions={actions.status} status="draft" className="draft">
          DRAFT
        </NavAction.SetStatus>
        <NavAction.SetStatus statusActions={actions.status} status="approved" className="approve">
          APPROVE
        </NavAction.SetStatus>
        <NavAction.SetStatus statusActions={actions.status} status="published" className="publish">
          PUBLISH
        </NavAction.SetStatus>
      </NavAction.Group>,
      <NavAction.Delete deleteActions={actions.delete} />,
    ];

    const columns = [
      <Column.RowSelection
        rowSelectionSelectors={selectors.rowSelection}
        rowSelectionActions={actions.rowSelection}
      />,
      <Column.Edit label="Title" sort="title" field="title" pathProvider={routePaths.newsEdit.path} />,
      <Column.Date label="Publish Date" sort="publishDate" field="publishDate" />,
      <Column.Status statuses={newsStatuses} statusActions={actions.status} />,
      <Column.Actions>
        <RowAction.Edit pathProvider={routePaths.newsEdit.path} />
        <RowAction.Delete deleteActions={actions.delete} />
      </Column.Actions>,
    ];

    return (
      <ListPage
        title="Company News"
        datasetSelectors={selectors.dataset}
        datasetActions={actions.dataset}
        noItemsContent={<p>No items</p>}
        navActions={navActions}
        columns={columns}
      />
    );
  }
}

NewsListPage.propTypes = {
  doInitialLoad: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  doInitialLoad: defaultFetchAction,
};

export default connect(null, mapDispatchToProps)(NewsListPage);
