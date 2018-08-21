export const LIST_SELECT_ITEMS = 'LIST_SELECT_ITEMS';
export const LIST_UNSELECT_ITEMS = 'LIST_UNSELECT_ITEMS';
export const LIST_SET_SELECTED_ITEMS = 'LIST_SET_SELECTED_ITEMS';

export default function createRowSelectionActions(listReducerKey, getDisplayedItemIDs) {
  const selectListItem = id => ({
    type: LIST_SELECT_ITEMS,
    listReducerKey,
    ids: new Set([id]),
  });

  const unselectListItem = id => ({
    type: LIST_UNSELECT_ITEMS,
    listReducerKey,
    ids: new Set([id]),
  });

  const setSelectedListItems = ids => ({
    type: LIST_SET_SELECTED_ITEMS,
    listReducerKey,
    ids,
  });

  const selectAllListItems = () => (dispatch, getState) => {
    const allDisplayedIDs = getDisplayedItemIDs(getState());

    dispatch(setSelectedListItems(new Set(allDisplayedIDs)));
  };

  const unselectAllListItems = () => setSelectedListItems(new Set());

  return {
    selectListItem,
    unselectListItem,
    selectAllListItems,
    unselectAllListItems,
  };
}
