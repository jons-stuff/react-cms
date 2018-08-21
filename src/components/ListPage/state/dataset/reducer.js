import { combineReducers } from 'redux';
import displayedItems from './displayedItems/reducer';
import loadStatus from './loadStatus/reducer';
import totalItems from './totalItems/reducer';
import descriptor from './descriptor/reducer';

const reducer = combineReducers({
  displayedItems,
  loadStatus,
  totalItems,
  descriptor,
});

export default reducer;
