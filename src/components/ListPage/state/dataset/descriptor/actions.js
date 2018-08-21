export const LIST_APPLY_DESCRIPTOR_CHANGES = 'LIST_APPLY_DESCRIPTOR_CHANGES';

export default function createDescriptorActions(
  listReducerKey,
  fetchList,
  getDescriptorWithChanges,
  scrollToTop,
) {
  const applyDescriptorChanges = descriptorChanges => ({
    type: LIST_APPLY_DESCRIPTOR_CHANGES,
    listReducerKey,
    descriptorChanges,
  });

  const changeDescriptor = descriptorChanges => (dispatch, getState) => {
    const descriptor = getDescriptorWithChanges(getState(), descriptorChanges);

    dispatch(fetchList(descriptor))
      .then(() => {
        dispatch(applyDescriptorChanges(descriptorChanges));
        scrollToTop();
      });
  };

  const changePage = page => changeDescriptor({ page });

  const changeSort = sort => changeDescriptor({ sort, page: 0 });

  const changeItemsPerPage = itemsPerPage => changeDescriptor({ itemsPerPage, page: 0 });

  return {
    changePage,
    changeSort,
    changeItemsPerPage,
  };
}

