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

test('Create Goods Receipt - Success @goodsreceipt', async () => {
    const goodsReceiptApi = new GoodsReceiptController();

    await test.step('Create Goods Receipt', async () => {

        const payload = goodsReceiptPayload();
        const response = await goodsReceiptApi.createGoodsReceipt(payload);

        if (!response.ok()) {
            console.error('Create Goods Receipt Failed:', await response.text());
        }

        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
    });

    await goodsReceiptApi.dispose();
});