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

    /**
     * Fetch all items with pagination and modified date filter
     *
     * @param {string} modifiedDateTime - ISO date string (e.g. 2026-01-26T09:00:00)
     * @param {number} skip - Records to skip
     * @param {number} take - Records to take
     * @returns {Promise<import('@playwright/test').APIResponse>}
     */
    async getAllItems(modifiedDateTime, skip, take) {
        return this.get('/Item/GetAllItems', {
            modifiedDateTime,
            skip,
            take
        });
    }
}