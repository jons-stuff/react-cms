export default function createDescriptorSelectors(getDescriptorFromState) {
  const getDescriptor = state => getDescriptorFromState(state);

  const getDescriptorWithChanges = (state, changes) => ({
    ...getDescriptor(state),
    ...changes,
  });

  const getItemsPerPage = state => getDescriptor(state).itemsPerPage;

  const getPage = state => getDescriptor(state).page;

  const getSort = state => getDescriptor(state).sort;

  return {
    getDescriptor,
    getDescriptorWithChanges,
    getItemsPerPage,
    getPage,
    getSort,
  };
}
