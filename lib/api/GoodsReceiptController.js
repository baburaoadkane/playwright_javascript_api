import BaseApiController from './BaseApiController';

export default class GoodsReceiptController extends BaseApiController {
  /**
   * Creates a goods receipt entry.
   *
   * @param {Object} payload - Goods receipt creation request body
   * @returns {Promise<import('@playwright/test').APIResponse>}
   */
  async createGoodsReceipt(payload) {
    return this.post('/GoodsReceipt/CreateGoodsReceipt', payload);
  }
}