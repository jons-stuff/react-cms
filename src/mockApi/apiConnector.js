import { parseAndValidateInt } from 'Utilities/misc';
import config from './config';
import createApiItemsRepo from './apiItemsRepo';
import getApiListResponse from './apiListResponse';

const responseDelay = 50;

function delayedPromise(response) {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(response); }, responseDelay);
  });
}

function makeApiRequestFromDescriptor(descriptor) {
  return {
    ...descriptor,
    sort: `${descriptor.sort.field}.${descriptor.sort.dir}`,
  };
}

export default function createApiConnector(resourceName) {
  const itemsRepo = createApiItemsRepo(resourceName, config[resourceName].initialDataFile);

  return {
    async getList(descriptor) {
      const listConfig = config[resourceName].apiList;
      const apiRequest = makeApiRequestFromDescriptor(descriptor);
      const items = await itemsRepo.getItems();
      const listResponse = getApiListResponse(listConfig, apiRequest, items);

      return delayedPromise(listResponse);
    },

    async getItem(id) {
      const idAsInt = parseAndValidateInt(id);
      const foundItem = await itemsRepo.findItem(idAsInt);

      if (!foundItem) {
        throw (Error('Item not found'));
      }

      return delayedPromise(foundItem);
    },

    async patchItem(id, patchData) {
      const idAsInt = parseAndValidateInt(id);
      await itemsRepo.patchItems([idAsInt], patchData);

      const patchedItem = await itemsRepo.findItem(idAsInt);

      return delayedPromise(patchedItem);
    },

    async postItem(postData) {
      const id = await itemsRepo.addItem(postData);

      const newItem = await itemsRepo.findItem(id);

      return delayedPromise(newItem);
    },

    async patchItems(ids, patchData) {
      await itemsRepo.patchItems(ids, patchData);

      return delayedPromise([]);
    },

    async deleteItems(ids) {
      await itemsRepo.deleteItems(ids);

      return delayedPromise([]);
    },
  };
}
