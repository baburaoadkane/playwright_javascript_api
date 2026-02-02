import BaseApiController from './BaseApiController';

export default class CustomerController extends BaseApiController {
    /**
     * Creates a new customer if it does not already exist.
     *  
     * @param {Object} payload - Customer creation request body
     * @returns {Promise<import('@playwright/test').APIResponse>}
     */
    async createCustomer(payload) {
        try {
            return await this.post('/Customer/Create', payload);
        } catch (error) {
            console.error('Error: ', error);
            throw error;
        }
    }

    /**
     * Fetch a specific customer by CustomerCode
     *
     * @param {Object} params - Query parameters
     * @param {string} params.code - Customer Code
     * @returns {Promise<import('@playwright/test').APIResponse>}
     */
    async getCustomerByCode(params) {
        try {
            return await this.get('/Customer/GetCustomer', params);
        } catch (error) {
            console.error('Error: ', error);
            throw error;
        }
    }

}