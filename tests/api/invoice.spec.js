import { test, expect } from '@playwright/test';
import InvoiceController from '../../lib/api/InvoiceController.js';
import invoicePayload from '../../test-data/invoice.payload.json';

test('Create Invoice API - success', async () => {
    const invoiceApi = new InvoiceController();

    const response = await invoiceApi.createInvoice(invoicePayload);

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.Success).toBe(true);

    await invoiceApi.dispose();
});