import { LIST_RECEIVE, LIST_RESET } from '../actions';

export default function loadStatus(state = 'not-loaded', action) {
  switch (action.type) {
    case LIST_RESET:
      return 'not-loaded';
    case LIST_RECEIVE:
      return 'loaded';
    default:
      return state;
  }
}
