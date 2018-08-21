import { combineReducers } from 'redux';
import dataset from './dataset/reducer';
import rowSelection from './rowSelection/reducer';

function bindListReducerToKey(listReducerKey, reducer) {
  const hasNotBeenInitialised = state => state === undefined;
  const listKeyMatches = action => action.listReducerKey === listReducerKey;

  const isActionForThisReducer = (action, state) => (
    listKeyMatches(action) || hasNotBeenInitialised(state)
  );

  return (state, action) => (
    isActionForThisReducer(action, state) ?
      reducer(state, action) :
      state
  );
}

export default function createListReducer(listReducerKey, groupParams) {
  const reducers = {};

  if (groupParams.dataset) {
    reducers.dataset = dataset;
  }

  if (groupParams.rowSelection) {
    reducers.rowSelection = rowSelection;
  }

  return bindListReducerToKey(listReducerKey, combineReducers(reducers));
}

