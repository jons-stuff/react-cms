import PropTypes from 'prop-types';

import createApiConnector from 'API/apiConnector';

export const orderStatuses = {
  new: 'New',
  processing: 'Processing',
  'awaiting-stock': 'Awaiting Stock',
  dispatched: 'Dispatched',
};

export const orderApiConnector = createApiConnector('orders');

export function getGrandTotal(orderItem) {
  return orderItem.lineItems
    .map(lineItem => lineItem.total)
    .reduce((a, b) => a + b, 0);
}

export const orderPropType = PropTypes.shape({
  status: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  orderId: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  lineItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
  })),
});
