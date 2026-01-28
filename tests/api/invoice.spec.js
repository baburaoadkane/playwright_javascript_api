import { test, expect } from '@playwright/test';
import InvoiceController from '../../lib/api/InvoiceController.js';
import payload from '../../test-data/invoice.payload.json';

test('Create Invoice - Success', async () => {
    const invoiceApi = new InvoiceController();

    const response = await invoiceApi.createInvoice(payload);

    if (response.status() !== 200) {
        console.log(await response.text());
    }

    expect(response.status()).toBe(200);

    await invoiceApi.dispose();
});