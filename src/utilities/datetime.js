import { pipe } from 'ramda';

/**
 * Conversion between date and timestamp
 */

export function dateToTimestamp(date) {
  return date.valueOf() / 1000;
}

function timestampToDate(timestamp) {
  return new Date(timestamp * 1000);
}

function isValidDate(date) {
  return Number.isNaN(date.valueOf()) === false;
}

/**
 * Conversion to dayMonthYearString
 */

function doubleDigit(num) {
  return num.toString().padStart(2, '0');
}

function dateToDayMonthYearString(date) {
  if (!isValidDate(date)) return '';

  const day = doubleDigit(date.getUTCDate());
  const month = doubleDigit(date.getUTCMonth() + 1);
  const year = date.getUTCFullYear();

  return `${day}/${month}/${year}`;
}

export function timestampToDayMonthYearString(timestamp) {
  if (timestamp === null) return '';

  return pipe(timestampToDate, dateToDayMonthYearString)(timestamp);
}

/**
 * Conversion from dayMonthYear string
 */

function dayMonthYearStringToComponents(dayMonthYearString) {
  const dateRegEx = /^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})$/;

  const results = dateRegEx.exec(dayMonthYearString);
  if (!results) return null;

  return {
    d: parseInt(results[1], 10),
    m: parseInt(results[2], 10),
    y: parseInt(results[3], 10),
  };
}

function dateComponentsToDate(dateComponents) {
  const utcMillis = Date.UTC(dateComponents.y, dateComponents.m - 1, dateComponents.d);
  return new Date(utcMillis);
}

export function dayMonthYearStringToTimestamp(dayMonthYearString) {
  if (dayMonthYearString === '') return null;

  const dateComponents = dayMonthYearStringToComponents(dayMonthYearString);
  if (!dateComponents) return NaN;

  return pipe(dateComponentsToDate, dateToTimestamp)(dateComponents);
}

/**
 * Conversion to locale dates/times
 */

export function timestampToUTCLocaleDate(timestamp, def = '') {
  const date = timestampToDate(timestamp);

  if (!isValidDate(date)) return def;

  return date.toLocaleDateString(undefined, { timeZone: 'UTC' });
}

export function timestampToLocaleDateAndTime(timestamp, def = '') {
  const date = timestampToDate(timestamp);

  if (!isValidDate(date)) return def;

  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}

/**
 * Validation
 */

export function isDayMonthYearStringValid(dayMonthYearString) {
  const dateComponents = dayMonthYearStringToComponents(dayMonthYearString);
  if (!dateComponents) return false;

  const date = dateComponentsToDate(dateComponents);

  return date.getUTCFullYear() === dateComponents.y
    && date.getUTCMonth() + 1 === dateComponents.m
    && date.getUTCDate() === dateComponents.d;
}
