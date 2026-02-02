import { test, expect } from '@playwright/test';
import SalesmanController from '../../lib/api/SalesmanController.js';
import { salesmanPayload } from '../../test-data/salesman.payload.js';

let salesmanApi;

test.beforeEach(async () => {
    salesmanApi = new SalesmanController();
});

test.afterEach(async () => {
    await salesmanApi.dispose();
});

test('Salesman | Create | Validate -> Record created successfully',
    { tag: ['@sales', '@salesman-create'] },
    async () => {

        await test.step('Create Salesman', async () => {
            const payload = salesmanPayload();
            const response = await salesmanApi.createSalesman(payload);

            expect(response.ok()).toBeTruthy();
            expect(response.status()).toBe(200);

            const body = await response.json();
            expect(body).toHaveProperty('message');
            expect(body.message).toContain('Record created successfully');
        });

    });