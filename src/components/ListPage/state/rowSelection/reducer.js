import { LIST_RECEIVE } from '../dataset/actions';
import { LIST_SELECT_ITEMS, LIST_UNSELECT_ITEMS, LIST_SET_SELECTED_ITEMS } from './actions';

export default function rowSelection(state = new Set(), action) {
  switch (action.type) {
    case LIST_RECEIVE:
      return new Set();
    case LIST_SELECT_ITEMS:
      return new Set([...state, ...action.ids]);
    case LIST_UNSELECT_ITEMS:
      return new Set([...state].filter(id => !action.ids.has(id)));
    case LIST_SET_SELECTED_ITEMS:
      return new Set(action.ids);
    default:
      return state;
  }
}
