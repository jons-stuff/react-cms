import { LIST_APPLY_DESCRIPTOR_CHANGES } from './actions';

const defaultState = {
  itemsPerPage: 20,
  sort: { field: null, dir: 'asc' },
  page: 0,
};

export default function descriptor(state = defaultState, action) {
  switch (action.type) {
    case LIST_APPLY_DESCRIPTOR_CHANGES:
      return { ...state, ...action.descriptorChanges };
    default:
      return state;
  }
}
