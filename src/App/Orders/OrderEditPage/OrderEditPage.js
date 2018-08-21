import React from 'react';
import withRouter from 'react-router-dom/withRouter';
import { partial } from 'ramda';

import ItemLoader from 'Components/ItemLoader';
import { routerMatchPropType, routerHistoryPropType } from 'Components/propTypes';
import OrderEditForm from './OrderEditForm';

import { orderApiConnector } from '../orders';
import { routePaths } from '../../routes';

function OrderEditPage({ match, history }) {
  const orderID = match.params.id;

  const navigateBack = () => { history.push(routePaths.orderList); };

  const loadOrder = partial(orderApiConnector.getItem, [orderID]);
  const saveOrder = partial(orderApiConnector.patchItem, [orderID]);

  const handleSave = (orderPatchData) => { saveOrder(orderPatchData).then(navigateBack); };

  return (
    <ItemLoader loader={loadOrder} returnActionForFailedLoad={navigateBack}>
      {orderItem => <OrderEditForm orderItem={orderItem} save={handleSave} cancel={navigateBack} />}
    </ItemLoader>
  );
}

OrderEditPage.propTypes = {
  match: routerMatchPropType.isRequired,
  history: routerHistoryPropType.isRequired,
};

export default withRouter(OrderEditPage);
