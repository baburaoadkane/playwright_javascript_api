import { test, expect } from '@playwright/test';
import CustomerController from '../../lib/api/CustomerController.js';
import { customerPayload, customerCode } from '../../test-data/customer.payload.js';

let customerApi;

test.beforeEach(async () => {
    customerApi = new CustomerController();
});

test.afterEach(async () => {
    await customerApi.dispose();
});

test('Customer | Create | Validate -> Record created successfully',
    { tag: ['@sales', '@customer-create'] },
    async () => {

        await test.step('Create Customer', async () => {
            const payload = customerPayload();
            const response = await customerApi.createCustomer(payload);

            expect(response.ok()).toBeTruthy();
            expect(response.status()).toBe(200);

            const body = await response.json();
            expect(body).toHaveProperty('message');
            expect(body.message).toContain('Record created successfully');
        });

    });

test('Customer | Get | Validate -> body should contain data',
    { tag: ['@sales', '@customer-get'] },
    async () => {

        await test.step('Get Customer By Code', async () => {

            const params = customerCode();
            const response = await customerApi.getCustomerByCode(params);

            expect(response.ok()).toBeTruthy();
            expect(response.status()).toBe(200);

            const body = await response.json();

            expect(body).toHaveProperty('code');
            expect(body).toHaveProperty('name');
        });

    });