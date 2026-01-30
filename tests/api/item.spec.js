import { test, expect } from '@playwright/test';
import ItemController from '../../lib/api/ItemController.js';
import { itemPayload } from '../../test-data/item.payload.js';

let itemApi;

test.beforeEach(async () => {
    itemApi = new ItemController();
});

test.afterEach(async () => {
    await itemApi.dispose();
});

test.skip('Create Item - Success @item', async () => {

    await test.step('Create Item', async () => {

        const payload = itemPayload();
        const response = await itemApi.createItem(payload);

        if (!response.ok()) {
            console.error('Create Item failed:', await response.text());
        }

        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
    });

});

test('Get All Items', async () => {

    await test.step('Fetch all items', async () => {
        const response = await itemApi.getAllItems('2026-01-26T09:00:00', 0, 100);

        if (!response.ok()) {
            console.error('Get All Items failed:', await response.text());
        }

        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body.data.length).toBeGreaterThan(0);
    });

});