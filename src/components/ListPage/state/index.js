import createListActions from './actions';
import createListSelectors from './selectors';
import createListReducer from './reducer';

export default function createListStateHandlers(listReducerKey, stateGroupParams) {
  const reducer = createListReducer(listReducerKey, stateGroupParams);
  const selectors = createListSelectors(listReducerKey, stateGroupParams);
  const actions = createListActions(listReducerKey, selectors, stateGroupParams);

  return {
    reducer,
    selectors,
    actions,
  };
}
