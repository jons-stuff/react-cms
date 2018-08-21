import { CONTEXT_MENU_SHOW, CONTEXT_MENU_HIDE } from './actions';

export default function contextMenu(state = null, action) {
  switch (action.type) {
    case CONTEXT_MENU_SHOW:
    {
      const { items, coords } = action;
      return { items, coords };
    }
    case CONTEXT_MENU_HIDE:
      return null;
    default:
      return state;
  }
}
