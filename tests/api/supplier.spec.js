import { test, expect } from '@playwright/test';
import SupplierController from '../../lib/api/SupplierController.js';
import { supplierPayload } from '../../test-data/supplier.payload.js';

let supplierApi;

test.beforeEach(async () => {
    supplierApi = new SupplierController();
});

test.afterEach(async () => {
    await supplierApi.dispose();
});

test('Supplier | Create | Validate -> Record created successfully',
    { tag: ['@purchase1', '@supplier-create'] },
    async () => {

        await test.step('Create Supplier', async () => {
            const payload = supplierPayload();
            const response = await supplierApi.createSupplier(payload);

            expect(response.ok()).toBeTruthy();
            expect(response.status()).toBe(200);

            const body = await response.json();
            expect(body).toHaveProperty('message');
            expect(body.message).toContain('Record created successfully');
        });

    });

test('Supplier | Get | Validate -> body should contain data',
    { tag: ['@purchase1', '@supplier-get'] },
    async () => {

        await test.step('Get Supplier By Code', async () => {

            const supplierCode = '3001';
            const response = await supplierApi.getSupplierByCode(supplierCode);

            expect(response.ok()).toBeTruthy();
            expect(response.status()).toBe(200);

            const body = await response.json();           

            expect(body).toHaveProperty('code');
            expect(body).toHaveProperty('name');
        });

    });