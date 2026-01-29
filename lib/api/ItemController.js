import BaseApiController from './BaseApiController';

export default class ItemController extends BaseApiController {
    /**
       * Creates a new item if already not exists.
       *
       * @param {Object} payload - Item creation request body
       * @returns {Promise<import('@playwright/test').APIResponse>}
       */
    async createItem(payload) {
        return this.post('/Item/CreateItemIfNotExist', payload);
    }
}