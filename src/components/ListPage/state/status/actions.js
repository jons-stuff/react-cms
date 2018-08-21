export default function createStatusActions(getSelectedIDs, patchItems) {
  const setListItemsStatus = (ids, newStatus) => patchItems(ids, { status: newStatus });

  const setListItemStatus = (id, newStatus) => setListItemsStatus([id], newStatus);

  const setSelectedListItemsStatus = newStatus => (dispatch, getState) => {
    const selectedIDs = getSelectedIDs(getState());

    if (selectedIDs.size === 0) {
      /* eslint-disable-next-line no-alert */
      window.alert('Please select one or more items');
    } else {
      dispatch(setListItemsStatus([...selectedIDs], newStatus));
    }
  };

  return {
    setListItemStatus,
    setSelectedListItemsStatus,
  };
}
