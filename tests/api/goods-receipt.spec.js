import { test, expect } from '@playwright/test';
import GoodsReceiptController from '../../lib/api/GoodsReceiptController.js';
import { goodsReceiptPayload } from '../../test-data/goods-receipt.payload.js';

test('Create Goods Receipt - Success', async () => {
    const goodsReceiptApi = new GoodsReceiptController();

    const payload = structuredClone(goodsReceiptPayload);
    const response = await goodsReceiptApi.createGoodsReceipt(payload);

    if (response.status() !== 200) {
        console.log(await response.text());
    }

    expect(response.status()).toBe(200);

    await goodsReceiptApi.dispose();
});