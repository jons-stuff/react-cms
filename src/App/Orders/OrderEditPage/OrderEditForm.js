import React from 'react';
import PropTypes from 'prop-types';

import EditPageLayout from 'Components/EditPage/EditPageLayout';
import { SelectAssoc, SaveButton, CancelButton } from 'Components/Inputs';
import { nl2br } from 'Utilities/react';
import { formatPounds } from 'Utilities/misc';
import { timestampToLocaleDateAndTime } from 'Utilities/datetime';
import { orderStatuses, getGrandTotal, orderPropType } from '../orders';

const orderItemToFormData = orderItem => ({
  status: orderItem.status,
  notes: orderItem.notes,
});

const formDataToOrderPatchData = formData => ({ ...formData });

export default class OrderEditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: orderItemToFormData(props.orderItem),
    };
    this.save = this.save.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  updateFormField(field, value) {
    const formDataWithFieldUpdate = ({ formData }) => (
      { formData: { ...formData, [field]: value } }
    );
    this.setState(formDataWithFieldUpdate);
  }

  handleFieldChange({ target: { name, value } }) {
    this.updateFormField(name, value);
  }

  save() {
    this.props.save(formDataToOrderPatchData(this.state.formData));
  }

  render() {
    const { formData } = this.state;
    const { orderItem: originalOrderItem, cancel } = this.props;

    return (
      <EditPageLayout
        title={`Order: ${originalOrderItem.orderId}`}
        sideActions={[
          <SaveButton key="save" onClick={this.save} />,
          <CancelButton key="cancel" onClick={cancel} />,
        ]}
        body={(
          <div className="editframe">
            <h2>Order Summary</h2>
            <table className="detailsTable">
              <tbody>
                <tr>
                  <th>Order Ref:</th>
                  <td>{originalOrderItem.orderId}</td>
                </tr>
                <tr>
                  <th>Date:</th>
                  <td>{timestampToLocaleDateAndTime(originalOrderItem.date)}</td>
                </tr>
                <tr>
                  <th>Status:</th>
                  <td><SelectAssoc name="status" options={orderStatuses} value={formData.status} onChange={this.handleFieldChange} /></td>
                </tr>
                <tr>
                  <th>Notes:</th>
                  <td><textarea name="notes" value={formData.notes} onChange={this.handleFieldChange} /></td>
                </tr>
              </tbody>
            </table>
            <h2>Customer Details</h2>
            <table className="detailsTable">
              <tbody>
                <tr>
                  <th>Name:</th>
                  <td>{`${originalOrderItem.firstName} ${originalOrderItem.lastName}`}</td>
                </tr>
                <tr>
                  <th>Email:</th>
                  <td><a href={`mailto:${originalOrderItem.email}`}>{originalOrderItem.email}</a></td>
                </tr>
                <tr>
                  <th>Address:</th>
                  <td>{nl2br(originalOrderItem.address)}</td>
                </tr>
              </tbody>
            </table>
            <h2>Basket Contents</h2>
            <table className="itemsTable">
              <tbody>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                </tr>
                {originalOrderItem.lineItems.map(lineItem => (
                  <tr key={lineItem.title}>
                    <td>{lineItem.title}</td>
                    <td>{formatPounds(lineItem.total)}</td>
                  </tr>
                ))}
                <tr>
                  <td className="total">Order Total:</td>
                  <td>{formatPounds(getGrandTotal(originalOrderItem))}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      />
    );
  }
}

OrderEditForm.propTypes = {
  orderItem: orderPropType.isRequired,
  save: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
};
