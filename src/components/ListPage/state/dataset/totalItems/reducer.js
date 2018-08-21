import { LIST_RECEIVE } from '../actions';

export default function totalItems(state = 0, action) {
  switch (action.type) {
    case LIST_RECEIVE:
      return action.data.total;
    default:
      return state;
  }
}
