export default function createDeleteActions(getSelectedIDs, deleteItems) {
  const deleteListItemsWithConfirmation = ids => (dispatch) => {
    /* eslint-disable-next-line no-alert */
    if (window.confirm('Really delete?')) {
      dispatch(deleteItems(ids));
    }
  };

  const deleteSelectedListItems = () => (dispatch, getState) => {
    const selectedIDs = getSelectedIDs(getState());
    if (selectedIDs.size === 0) {
      /* eslint-disable-next-line no-alert */
      window.alert('Please tick the boxes of the items to deleted');
    } else {
      dispatch(deleteListItemsWithConfirmation([...selectedIDs]));
    }
  };

  const deleteListItem = id => deleteListItemsWithConfirmation([id]);

  return {
    deleteSelectedListItems,
    deleteListItem,
  };
}
