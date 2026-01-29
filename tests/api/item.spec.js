import { test, expect } from '@playwright/test';
import ItemController from '../../lib/api/ItemController.js';
import { itemPayload } from '../../test-data/item.payload.js';

test.only('Create Item - Success', async () => {
    const itemApi = new ItemController();

    const payload = itemPayload();    
    const response = await itemApi.createItem(payload);

    if (!response.ok()) {
        console.error('Create Item failed:', await response.text());
    }

    expect(response.status()).toBe(200);

    await itemApi.dispose();
});