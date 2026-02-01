import BaseApiController from './BaseApiController';

export default class SupplierController extends BaseApiController {
    /**
     * Creates a new suppliers if it does not already exist.
     *  
     * @param {Object} payload - Supplier creation request body
     * @returns {Promise<import('@playwright/test').APIResponse>}
     */
    async createSupplier(payload) {
        try {
            return await this.post('/Supplier/Create', payload);
        } catch (error) {
            console.error('Error: ', error);
            throw error;
        }
    }

    /**
     * Get a specific supplier by supplier code
     *
     * @param {string} supplierCode - Unique code of the supplier
     * @returns {Promise<import('@playwright/test').APIResponse>}
     */
    async getSupplierByCode(supplierCode) {
        try {
            return await this.get('/Supplier/GetSupplier', { SupplierCode: supplierCode });
        } catch (error) {
            console.error('Error: ', error);
            throw error;
        }
    }

}