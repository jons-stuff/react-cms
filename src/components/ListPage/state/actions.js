import importedCreateDatasetActions from './dataset/actions';
import importedCreateRowSelectionActions from './rowSelection/actions';
import importedCreateDeleteActions from './delete/actions';
import importedCreateStatusActions from './status/actions';

function scrollToTop() {
  const root = document.getElementById('root');
  const rootRect = root.getBoundingClientRect();
  if (rootRect.top < 0) window.scrollTo(0, 0);
}

function createDatasetActions(listReducerKey, selectors, datasetParams) {
  return importedCreateDatasetActions(
    listReducerKey,
    datasetParams.apiConnector,
    scrollToTop,
    selectors.dataset.getDescriptor,
    selectors.dataset.getDescriptorWithChanges,
  );
}

function createRowSelectionActions(listReducerKey, selectors) {
  return importedCreateRowSelectionActions(
    listReducerKey,
    selectors.dataset.getDisplayedItemIDs,
  );
}

function createDeleteActions(selectors, actions) {
  return importedCreateDeleteActions(
    selectors.rowSelection.getSelectedIDs,
    actions.dataset.deleteItems,
  );
}

function createStatusActions(selectors, actions) {
  return importedCreateStatusActions(
    selectors.rowSelection.getSelectedIDs,
    actions.dataset.patchItems,
  );
}

export default function createListActions(listReducerKey, selectors, groupParams) {
  const actions = {};

  if (groupParams.dataset) {
    actions.dataset = createDatasetActions(listReducerKey, selectors, groupParams.dataset);
  }

  if (groupParams.rowSelection) {
    actions.rowSelection = createRowSelectionActions(listReducerKey, selectors);
  }

  if (groupParams.delete) {
    actions.delete = createDeleteActions(selectors, actions);
  }

  if (groupParams.status) {
    actions.status = createStatusActions(selectors, actions);
  }

  return actions;
}
