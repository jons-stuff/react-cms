import { LIST_RECEIVE, LIST_RESET } from '../actions';

export default function createDataActions(listReducerKey, apiConnector, getDescriptor) {
  const resetData = () => ({
    type: LIST_RESET,
    listReducerKey,
  });

  const receiveData = data => ({
    type: LIST_RECEIVE,
    listReducerKey,
    data,
  });

  const fetch = descriptor => dispatch => (
    apiConnector
      .getList(descriptor)
      .then((data) => { dispatch(receiveData(data)); })
  );

  const refresh = () => (dispatch, getState) => {
    const descriptor = getDescriptor(getState());
    dispatch(fetch(descriptor));
  };

  const deleteItems = ids => (dispatch) => {
    apiConnector
      .deleteItems(ids)
      .then(() => dispatch(refresh()));
  };

  const patchItems = (ids, patchData) => (dispatch) => {
    apiConnector
      .patchItems(ids, patchData)
      .then(() => dispatch(refresh()));
  };

  return {
    resetData,
    fetch,
    deleteItems,
    patchItems,
  };
}
