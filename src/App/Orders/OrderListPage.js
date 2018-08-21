import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { formatPounds } from 'Utilities/misc';
import { ListPage, NavAction, Column, RowAction } from 'Components/ListPage';
import createListStateHandlers from 'Components/ListPage/state';
import { orderStatuses, orderApiConnector } from './orders';
import { routePaths } from '../routes';

const { reducer, selectors, actions } = createListStateHandlers(
  'orderList',
  {
    dataset: { apiConnector: orderApiConnector },
    rowSelection: true,
    delete: true,
    status: true,
  },
);

export { reducer as orderList };

const defaultFetchAction = () => (dispatch) => {
  dispatch(actions.dataset.resetData());
  dispatch(actions.dataset.changeSort({ field: 'date', dir: 'asc' }));
};

class OrderListPage extends React.Component {
  componentDidMount() {
    this.props.doInitialLoad();
  }

  render() {
    const navActions = [
      <NavAction.Group>
        <NavAction.SetStatus statusActions={actions.status} status="awaiting-stock" className="awaiting-stock">
          MARK AS AWAITING STOCK
        </NavAction.SetStatus>
        <NavAction.SetStatus statusActions={actions.status} status="dispatched" className="dispatched">
          MARK AS DISPATCHED
        </NavAction.SetStatus>
      </NavAction.Group>,
      <NavAction.Delete deleteActions={actions.delete} />,
    ];

    const columns = [
      <Column.RowSelection
        rowSelectionSelectors={selectors.rowSelection}
        rowSelectionActions={actions.rowSelection}
      />,
      <Column.Edit label="Order" sort="orderId" field="orderId" pathProvider={routePaths.orderEdit.path} />,
      <Column.Date label="Date" sort="date" field="date" />,
      <Column.Custom label="Customer" sort="name">
        {dataItem => `${dataItem.lastName}, ${dataItem.firstName}`}
      </Column.Custom>,
      <Column.Custom label="Total" sort="grandTotal">
        {dataItem => formatPounds(dataItem.grandTotal)}
      </Column.Custom>,
      <Column.Status statuses={orderStatuses} statusActions={actions.status} />,
      <Column.Actions>
        <RowAction.Edit pathProvider={routePaths.orderEdit.path} />
        <RowAction.Delete deleteActions={actions.delete} />
      </Column.Actions>,
    ];

    return (
      <ListPage
        title="Order Management"
        datasetSelectors={selectors.dataset}
        datasetActions={actions.dataset}
        noItemsContent={<p>No items</p>}
        navActions={navActions}
        columns={columns}
      />
    );
  }
}

OrderListPage.propTypes = {
  doInitialLoad: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  doInitialLoad: defaultFetchAction,
};

export default connect(null, mapDispatchToProps)(OrderListPage);
