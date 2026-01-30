import { test, expect } from '@playwright/test';
import ItemController from '../../lib/api/ItemController.js';
import { itemPayload } from '../../test-data/item.payload.js';

test('Create Item - Success', async () => {
    const itemApi = new ItemController();

    const payload = itemPayload();
    const response = await itemApi.createItem(payload);

    if (!response.ok()) {
        console.error('Create Item failed:', await response.text());
    }

    expect(response.status()).toBe(200);

    await itemApi.dispose();
});

test.only('Get All Items', async () => {
    const itemApi = new ItemController();

    const response = await itemApi.getAllItems('2026-01-26T09:00:00', 0, 100);

    if (!response.ok()) {
        console.error('Get All Items failed:', await response.text());
    }

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.data.length).toBeGreaterThan(0);

    await itemApi.dispose();

});