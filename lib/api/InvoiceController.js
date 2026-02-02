import BaseApiController from './BaseApiController';

export default class InvoiceController extends BaseApiController {
  /**
   * Creates an invoice entry.
   *
   * @param {Object} payload - Invoice creation request body
   * @returns {Promise<import('@playwright/test').APIResponse>}
   */
  async createInvoice(payload) {
    return this.post('/SalesInvoice/CreateInvoice', payload);
  }

  /**
  * Fetches the due amount details for a specific sales invoice.
  *
  * @param {Object} params - Query parameters
  * @param {string} params.salesInvoiceId - Unique ID of the sales invoice
  * @param {string} params.txnNum - Transaction number of the sales invoice
  * @param {string} params.txnInstanceCode - Transaction instance code
  * @param {string} params.warehouseCode - Warehouse code
  * @returns {Promise<import('@playwright/test').APIResponse>}
  */
  async getInvoiceDueAmount(params) {
    try {
      return await this.get('/SalesInvoice/GetInvoiceDueAmount', params);
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

}