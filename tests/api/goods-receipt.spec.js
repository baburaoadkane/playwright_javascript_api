import { test, expect } from '@playwright/test';
import GoodsReceiptController from '../../lib/api/GoodsReceiptController.js';
import { goodsReceiptPayload } from '../../test-data/goods-receipt.payload.js';

let goodsReceiptApi;

test.beforeEach(() => {
  goodsReceiptApi = new GoodsReceiptController();
});

test.afterEach(async () => {
  await goodsReceiptApi.dispose();
});

test('Create Goods Receipt - Success @goodsreceipt-create', async () => {

  await test.step('Create Goods Receipt', async () => {

    const payload = goodsReceiptPayload();
    const response = await goodsReceiptApi.createGoodsReceipt(payload);

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const responseText = await response.text();
    expect(responseText.toString()).toBe('true');
  });

});