import React from 'react';
import PropTypes from 'prop-types';

import EditPageLayout from 'Components/EditPage/EditPageLayout';
import { showGeneralError } from 'Components/EditPage/behaviours';
import { WYSIWYG, FieldError, SelectAssoc, SaveButton, CancelButton } from 'Components/Inputs';
import { timestampToDayMonthYearString, dayMonthYearStringToTimestamp } from 'Utilities/datetime';
import { hasError, createFormValidator, createFieldValidator, required, mustBeEmail, mustBeDayMonthYear } from 'Utilities/validation';
import { vacancyStatuses } from '../vacancies';

const vacancyFormValidator = createFormValidator(
  createFieldValidator('title', required()),
  createFieldValidator('publishDate', required(), mustBeDayMonthYear()),
  createFieldValidator('contactEmail', mustBeEmail()),
);

const vacancyToFormData = vacancy => ({
  title: vacancy.title,
  status: vacancy.status,
  publishDate: timestampToDayMonthYearString(vacancy.publishDate),
  shortDescription: vacancy.shortDescription,
  h1Title: vacancy.h1Title,
  pageTitle: vacancy.pageTitle,
  metaDescription: vacancy.metaDescription,
  contactName: vacancy.contactName,
  contactPhone: vacancy.contactPhone,
  contactEmail: vacancy.contactEmail,
  description: vacancy.description,
});

const formDataToVacancy = formData => ({
  ...formData,
  publishDate: dayMonthYearStringToTimestamp(formData.publishDate),
});

export default class VacancyEditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: vacancyToFormData(props.vacancy),
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

    if (hasError(vacancyFormValidator(formData))) {
      this.setState({ showErrors: true });
      showGeneralError();
    } else {
      save(formDataToVacancy(formData));
    }
  }

  render() {
    const { formData, showErrors } = this.state;

    const errors = showErrors ? vacancyFormValidator(formData) : {};

    return (
      <EditPageLayout
        title={`Editing Vacancy: ${formData.title || '<No Name>'}`}
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
                  <th>Vacancy Title:</th>
                  <td><input type="text" name="title" value={formData.title} onChange={this.handleFieldChange} /> <FieldError>{errors.title}</FieldError></td>
                </tr>
                <tr>
                  <th>Status:</th>
                  <td><SelectAssoc name="status" options={vacancyStatuses} value={formData.status} onChange={this.handleFieldChange} /></td>
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
            <h2>Contact Details</h2>
            <table className="detailsTable">
              <tbody>
                <tr>
                  <th>Name:</th>
                  <td><input type="text" name="contactName" value={formData.contactName} onChange={this.handleFieldChange} /></td>
                </tr>
                <tr>
                  <th>Phone:</th>
                  <td><input type="text" name="contactPhone" value={formData.contactPhone} onChange={this.handleFieldChange} /></td>
                </tr>
                <tr>
                  <th>Email:</th>
                  <td><input type="email" name="contactEmail" value={formData.contactEmail} onChange={this.handleFieldChange} /> <FieldError>{errors.contactEmail}</FieldError></td>
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

VacancyEditForm.propTypes = {
  vacancy: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  save: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
};
