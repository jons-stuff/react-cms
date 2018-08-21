import { isDayMonthYearStringValid } from './datetime';

const isValidEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const hasValue = value => value !== '' && value !== null;

export const required = (message = 'Required') => value => (!hasValue(value) ? message : '');

export const mustBeEmail = (message = 'Invalid') => value => (
  hasValue(value) && !isValidEmail(value) ? message : ''
);

export const mustBeDayMonthYear = (message = 'Invalid') => value => (
  hasValue(value) && !isDayMonthYearStringValid(value) ? message : ''
);

export const createFieldValidator = (field, ...valueValidators) => (item) => {
  const applyValueValidator = valueValidator => valueValidator(item[field]);
  const hasError = error => error;

  const firstError = valueValidators.map(applyValueValidator).find(hasError);

  return firstError
    ? { [field]: firstError }
    : {};
};

export const createFormValidator = (...rules) => (item) => {
  if (!item) return {};

  const addErrorsForRule = (previousErrors, rule) => ({ ...previousErrors, ...rule(item) });

  return rules.reduce(addErrorsForRule, {});
};

export const hasError = errors => Object.keys(errors).length > 0;
