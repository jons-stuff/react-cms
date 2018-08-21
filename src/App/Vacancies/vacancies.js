import createApiConnector from 'API/apiConnector';
import { dateToTimestamp } from 'Utilities/datetime';

export const vacancyStatuses = {
  draft: 'Draft',
  'awaiting-approval': 'Awaiting Approval',
  approved: 'Approved',
  published: 'Published',
};

export const vacancyApiConnector = createApiConnector('vacancies');

export function newVacancy() {
  return {
    title: '',
    status: 'draft',
    publishDate: dateToTimestamp(new Date()),
    shortDescription: '',
    h1Title: '',
    pageTitle: '',
    metaDescription: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    description: '',
  };
}
