export const CONTEXT_MENU_SHOW = 'CONTEXT_MENU_SHOW';
export const CONTEXT_MENU_HIDE = 'CONTEXT_MENU_HIDE';

export function showContextMenu(items, coords) {
  return {
    type: CONTEXT_MENU_SHOW,
    items,
    coords,
  };
}

export function hideContextMenu() {
  return {
    type: CONTEXT_MENU_HIDE,
  };
}
