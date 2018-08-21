import importedCreateDatasetSelectors from './dataset/selectors';
import importedCreateRowSelectionSelectors from './rowSelection/selectors';

function createDatasetSelectors(listReducerKey) {
  return importedCreateDatasetSelectors(state => state[listReducerKey].dataset);
}

function createRowSelectionSelectors(listReducerKey, selectors) {
  return importedCreateRowSelectionSelectors(
    state => state[listReducerKey].rowSelection,
    selectors.dataset.getDisplayedItemIDs,
  );
}

export default function createListSelectors(listReducerKey, groupParams) {
  const selectors = {};

  if (groupParams.dataset) {
    selectors.dataset = createDatasetSelectors(listReducerKey);
  }

  if (groupParams.rowSelection) {
    selectors.rowSelection = createRowSelectionSelectors(
      listReducerKey,
      selectors,
    );
  }

  return selectors;
}
