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

test.skip('Item | Create | Validate -> Record created successfully',
    { tag: ['@inventory', '@item-create'] },
    async () => {

        await test.step('Create Item', async () => {
            const payload = itemPayload();
            const response = await itemApi.createItem(payload);

            expect(response.ok()).toBeTruthy();
            expect(response.status()).toBe(200);

            const responseText = await response.text();
            expect(responseText).toContain('Record Created successfully');
        });

    });

test('Item | Items Fetch | Validate -> body should contain data',
    { tag: ['@inventory', '@items-fetch'] },
    async () => {

        await test.step('Fetch all items', async () => {
            const response = await itemApi.getAllItems('2026-01-26T09:00:00', 0, 100);

            expect(response.ok()).toBeTruthy();
            expect(response.status()).toBe(200);

            const body = await response.json();
            expect(Array.isArray(body.data)).toBeTruthy();
            expect(body.data.length).toBeGreaterThan(0);

            expect(body.data[0]).toHaveProperty('code');
            expect(body.data[0]).toHaveProperty('name');
        });

    });