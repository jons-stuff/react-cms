export default function createRowSelectionSelectors(getRowSelectionState, getDisplayedItemIDs) {
  const getSelectedIDs = state => getRowSelectionState(state);

  const isItemSelected = (state, id) => {
    const selectedIDs = getSelectedIDs(state);

    return selectedIDs.has(id);
  };

  const areAllDisplayedItemsSelected = (state) => {
    const displayedItemIDs = getDisplayedItemIDs(state);

    return displayedItemIDs.every(id => isItemSelected(state, id));
  };

  return {
    getSelectedIDs,
    isItemSelected,
    areAllDisplayedItemsSelected,
  };
}
