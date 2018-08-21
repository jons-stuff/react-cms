export default function createTotalItemsSelectors(getTotalItemsState) {
  const getTotalItems = state => getTotalItemsState(state);

  const hasItems = state => getTotalItems(state) > 0;

  return {
    getTotalItems,
    hasItems,
  };
}
