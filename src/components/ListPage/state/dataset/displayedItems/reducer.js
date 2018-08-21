import { LIST_RECEIVE } from '../actions';

export default function displayedItems(state = [], action) {
  switch (action.type) {
    case LIST_RECEIVE:
      return action.data.items;
    default:
      return state;
  }
}
