import { test, expect } from '@playwright/test';
import InvoiceController from '../../lib/api/InvoiceController.js';
import invoicePayload from '../../test-data/invoice.payload.json';

test('Create Invoice - success', async () => {
    const invoiceApi = new InvoiceController();

    const response = await invoiceApi.createInvoice(invoicePayload);

    expect(response.status()).toBe(200);    

    await invoiceApi.dispose();
});