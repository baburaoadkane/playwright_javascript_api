import { test, expect } from '@playwright/test';
import InvoiceController from '../../lib/api/InvoiceController.js';
import { salesInvoicePayload } from '../../test-data/invoice.payload.js';

let invoiceApi;

test.beforeEach(() => {
  invoiceApi = new InvoiceController();
});

test.afterEach(async () => {
  await invoiceApi.dispose();
});

test('Create Invoice - Success @invoice', async () => {

    await test.step('Create Invoice', async () => {

        const payload = salesInvoicePayload();
        const response = await invoiceApi.createInvoice(payload);

        if (!response.ok()) {
            console.error('Create Invoice Failed:', await response.text());
        }

        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
    });

});