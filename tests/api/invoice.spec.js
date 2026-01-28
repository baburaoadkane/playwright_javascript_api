import { test, expect } from '@playwright/test';
import InvoiceController from '../../lib/api/InvoiceController.js';
import { salesInvoicePayload } from '../../test-data/invoice.payload.js';

test('Create Invoice - Success', async () => {
    const invoiceApi = new InvoiceController();

    const payload = structuredClone(salesInvoicePayload);
    const response = await invoiceApi.createInvoice(payload);

    if (response.status() !== 200) {
        console.log(await response.text());
    }

    expect(response.status()).toBe(200);

    await invoiceApi.dispose();
});