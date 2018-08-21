import createApiActions from './api/actions';
import createDescriptorActions from './descriptor/actions';

export const LIST_RESET = 'LIST_RESET';
export const LIST_RECEIVE = 'LIST_RECEIVE';
export const LIST_APPLY_DESCRIPTOR_CHANGES = 'LIST_APPLY_DESCRIPTOR_CHANGES';

export default function createDatasetActions(
  listReducerKey,
  apiConnector,
  scrollToTop,
  getDescriptor,
  getDescriptorWithChanges,
) {
  const apiActions = createApiActions(
    listReducerKey,
    apiConnector,
    getDescriptor,
  );

  const descriptorActions = createDescriptorActions(
    listReducerKey,
    apiActions.fetch,
    getDescriptorWithChanges,
    scrollToTop,
  );

  return {
    ...apiActions,
    ...descriptorActions,
  };
}
