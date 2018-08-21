export default function createDisplayedItemsSelectors(getDisplayedItemsState) {
  const getDisplayedItems = state => getDisplayedItemsState(state);

  const getDisplayedItemIDs = (state) => {
    const displayedItems = getDisplayedItems(state);

    return displayedItems.map(row => row.id);
  };

  return {
    getDisplayedItems,
    getDisplayedItemIDs,
  };
}
