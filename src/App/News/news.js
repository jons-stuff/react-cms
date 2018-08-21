import createApiConnector from 'API/apiConnector';
import { dateToTimestamp } from 'Utilities/datetime';

export const newsStatuses = {
  draft: 'Draft',
  'awaiting-approval': 'Awaiting Approval',
  approved: 'Approved',
  published: 'Published',
};

export const newsApiConnector = createApiConnector('news');

export function newNewsItem() {
  return {
    title: '',
    status: 'draft',
    publishDate: dateToTimestamp(new Date()),
    shortDescription: '',
    h1Title: '',
    pageTitle: '',
    metaDescription: '',
    description: '',
  };
}
