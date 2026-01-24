import BaseApiController from './BaseApiController';

export default class InvoiceController extends BaseApiController {
  /**
 * Creates an invoice entry.
 *
 * @param {Object} payload - Invoice creation request body
 * @returns {Promise<import('@playwright/test').APIResponse>}
 */
  async createInvoice(payload) {
    return this.post('/invoice/CreateInvoice', payload);
  }
}