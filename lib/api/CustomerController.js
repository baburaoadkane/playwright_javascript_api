import BaseApiController from './BaseApiController';

export default class CustomerController extends BaseApiController {
    /**
     * Creates a new customer if it does not already exist.
     *  
     * @param {Object} payload - Item creation request body
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
     * @param {string} customerCode - Unique code of the customer
     * @returns {Promise<import('@playwright/test').APIResponse>}
     */
    async getCustomerByCode(customerCode) {
        try {
            return await this.get('/Customer/GetCustomer', { CustomerCode: customerCode });
        } catch (error) {
            console.error('Error: ', error);
            throw error;
        }
    }

}