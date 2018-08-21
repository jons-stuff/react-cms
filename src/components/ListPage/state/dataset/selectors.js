import createDisplayedItemsSelectors from './displayedItems/selectors';
import createLoadStatusSelectors from './loadStatus/selectors';
import createTotalItemsSelectors from './totalItems/selectors';
import createDescriptorSelectors from './descriptor/selectors';

export default function createDatasetSelectors(getDatasetState) {
  return {
    ...createDisplayedItemsSelectors(state => getDatasetState(state).displayedItems),
    ...createLoadStatusSelectors(state => getDatasetState(state).loadStatus),
    ...createTotalItemsSelectors(state => getDatasetState(state).totalItems),
    ...createDescriptorSelectors(state => getDatasetState(state).descriptor),
  };
}
