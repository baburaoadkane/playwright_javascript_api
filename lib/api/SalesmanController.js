import BaseApiController from './BaseApiController';

export default class SalesmanController extends BaseApiController {
    /**
     * Creates a new Salesman if it does not already exist.
     *  
     * @param {Object} payload - Salesman creation request body
     * @returns {Promise<import('@playwright/test').APIResponse>}
     */
    async createSalesman(payload) {
        try {
            return await this.post('/salesman/create', payload);
        } catch (error) {
            console.error('Error: ', error);
            throw error;
        }
    }    

}