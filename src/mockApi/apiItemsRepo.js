
function createApiItemStoreFromInitialDatafile(initialDataFile) {
  let items;

  return {
    async getItems() {
      if (items === undefined) {
        const response = await fetch(initialDataFile);
        items = await response.json();
      }
      return items;
    },

    setItems(newItems) {
      items = newItems;
    },
  };
}

function createApiRepo(itemsStore) {
  const getItems = () => itemsStore.getItems();

  const setItems = (newItems) => { itemsStore.setItems(newItems); };

  const findItem = async (id) => {
    const items = await getItems();
    return items.find(item => item.id === id);
  };

  const deleteItems = async (ids) => {
    const items = await getItems();
    const itemsAfterDelete = items.filter(item => !ids.includes(item.id));
    setItems(itemsAfterDelete);
  };

  const patchItems = async (ids, patchData) => {
    const items = await getItems();
    const getPatchedItem = item => (ids.includes(item.id) ? { ...item, ...patchData } : item);
    setItems(items.map(getPatchedItem));
  };

  const addItem = async (newItem) => {
    const items = await getItems();
    const allIds = items.map(item => item.id);
    const newID = allIds.reduce((a, b) => Math.max(a, b), 0) + 1;
    const newItemWithID = { ...newItem, id: newID };
    setItems([...items, newItemWithID]);
    return newID;
  };

  return {
    getItems,
    deleteItems,
    addItem,
    findItem,
    patchItems,
  };
}


const itemStores = {};

export default function createApiItemsRepo(resourceName, initialDataFile) {
  if (itemStores[resourceName] === undefined) {
    itemStores[resourceName] = createApiItemStoreFromInitialDatafile(initialDataFile);
  }
  return createApiRepo(itemStores[resourceName]);
}
