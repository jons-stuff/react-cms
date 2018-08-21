import React from 'react';
import PropTypes from 'prop-types';

import EditPageLayout from 'Components/EditPage/EditPageLayout';
import { showGeneralError } from 'Components/EditPage/behaviours';
import { WYSIWYG, FieldError, SelectAssoc, SaveButton, CancelButton } from 'Components/Inputs';
import { timestampToDayMonthYearString, dayMonthYearStringToTimestamp } from 'Utilities/datetime';
import { hasError, createFormValidator, createFieldValidator, required, mustBeDayMonthYear } from 'Utilities/validation';
import { newsStatuses } from '../news';

const newsFormValidator = createFormValidator(
  createFieldValidator('title', required()),
  createFieldValidator('publishDate', required(), mustBeDayMonthYear()),
);

const newsItemToFormData = newsItem => ({
  title: newsItem.title,
  status: newsItem.status,
  publishDate: timestampToDayMonthYearString(newsItem.publishDate),
  shortDescription: newsItem.shortDescription,
  h1Title: newsItem.h1Title,
  pageTitle: newsItem.pageTitle,
  metaDescription: newsItem.metaDescription,
  description: newsItem.description,
});

const formDataToNewsItem = formData => ({
  ...formData,
  publishDate: dayMonthYearStringToTimestamp(formData.publishDate),
});

export default class NewsEditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: newsItemToFormData(props.news),
      showErrors: false,
    };

    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.save = this.save.bind(this);
  }

  updateFormField(field, value) {
    const formDataWithFieldUpdate = ({ formData }) => (
      { formData: { ...formData, [field]: value } }
    );
    this.setState(formDataWithFieldUpdate);
  }

  handleDescriptionChange(newValue) {
    this.updateFormField('description', newValue);
  }

  handleFieldChange({ target: { name, value } }) {
    this.updateFormField(name, value);
  }

  save() {
    const { formData } = this.state;
    const { save } = this.props;

    if (hasError(newsFormValidator(formData))) {
      this.setState({ showErrors: true });
      showGeneralError();
    } else {
      save(formDataToNewsItem(formData));
    }
  }

  render() {
    const { formData, showErrors } = this.state;

    const errors = showErrors ? newsFormValidator(formData) : {};

    return (
      <EditPageLayout
        title={`Editing News: ${formData.title || '<No Name>'}`}
        sideActions={[
          <SaveButton key="save" onClick={this.save} />,
          <CancelButton key="cancel" onClick={this.props.cancel} />,
        ]}
        body={(
          <div className="editframe">
            <h2>Main Details</h2>
            <table className="detailsTable">
              <tbody>
                <tr>
                  <th>News Title:</th>
                  <td><input type="text" name="title" value={formData.title} onChange={this.handleFieldChange} /> <FieldError>{errors.title}</FieldError></td>
                </tr>
                <tr>
                  <th>Status:</th>
                  <td><SelectAssoc name="status" options={newsStatuses} value={formData.status} onChange={this.handleFieldChange} /></td>
                </tr>
                <tr>
                  <th>Date:</th>
                  <td>
                    <input type="text" name="publishDate" value={formData.publishDate} onChange={this.handleFieldChange} />
                    <FieldError>{errors.publishDate}</FieldError>
                    <div className="small">(dd/mm/yyyy)</div>
                  </td>
                </tr>
                <tr>
                  <th>Short Description:</th>
                  <td><textarea name="shortDescription" value={formData.shortDescription} onChange={this.handleFieldChange} /></td>
                </tr>
                <tr>
                  <th>H1 Title:</th>
                  <td><input type="text" name="h1Title" value={formData.h1Title} onChange={this.handleFieldChange} /></td>
                </tr>
                <tr>
                  <th>Browser Title:</th>
                  <td><input type="text" name="pageTitle" value={formData.pageTitle} onChange={this.handleFieldChange} /></td>
                </tr>
                <tr>
                  <th>Meta Description:</th>
                  <td><textarea name="metaDescription" value={formData.metaDescription} onChange={this.handleFieldChange} /></td>
                </tr>
              </tbody>
            </table>
            <h2>Description</h2>
            <WYSIWYG value={formData.description} onChange={this.handleDescriptionChange} />
          </div>
        )}
      />
    );
  }
}

NewsEditForm.propTypes = {
  news: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  save: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
};
