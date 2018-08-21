import { pipe } from 'ramda';

const getSortedItems = (sortFunction, sortDir) => (items) => {
  const sortedItems = [...items].sort(sortFunction);
  return sortDir === 'desc' ? sortedItems.reverse() : sortedItems;
};

const getTransformedItems = transformer => items => (
  items.map(item => transformer(item))
);

const getPaginatedItems = (itemsPerPage, page) => (items) => {
  if (itemsPerPage === 'all') return items;

  const firstIndex = Math.min(page * itemsPerPage, items.length);
  const lastIndex = Math.min(firstIndex + itemsPerPage, items.length);

  return items.slice(firstIndex, lastIndex);
};

function getApiListItems({ transformer, sortFunctions }, { sort, itemsPerPage, page }, items) {
  const [sortField, sortDir] = sort.split('.');
  const sortFunction = sortFunctions[sortField];

  return pipe(
    getSortedItems(sortFunction, sortDir),
    getTransformedItems(transformer),
    getPaginatedItems(itemsPerPage, page),
  )(items);
}

export default function getApiListResponse(apiListConfig, requestDescriptor, items) {
  return {
    total: items.length,
    items: getApiListItems(apiListConfig, requestDescriptor, items),
  };
}
