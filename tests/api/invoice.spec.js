import { test, expect } from '@playwright/test';
import InvoiceController from '../../lib/api/InvoiceController.js';
import { salesInvoicePayload, invoiceDueAmount } from '../../test-data/invoice.payload.js';

let invoiceApi;

test.beforeEach(async () => {
  invoiceApi = new InvoiceController();
});

test.afterEach(async () => {
  await invoiceApi.dispose();
});

test('Invoice | Create | Validate -> successful: true',
  { tag: ['@sales', '@invoice-create'] },
  async () => {

    await test.step('Create Invoice', async () => {

      const payload = salesInvoicePayload();
      const response = await invoiceApi.createInvoice(payload);

      expect(response.ok()).toBeTruthy();
      expect(response.status()).toBe(200);

      const body = await response.json();
      expect(body).toHaveProperty('successful', true);
      expect(body).toHaveProperty('txnNum');
    });

  });

test('Invoice | Get Due Amount | Validate -> successful: true',
  { tag: ['@sales', '@invoice-dueamount'] },
  async () => {

    await test.step('Get Invoice Due Amount', async () => {

      const params = invoiceDueAmount();
      const response = await invoiceApi.getInvoiceDueAmount(params);

      expect(response.ok()).toBeTruthy();
      expect(response.status()).toBe(200);

      const body = await response.json();
      expect(body).toHaveProperty('successful', true);
      expect(body).toHaveProperty('dueAmount');
      expect(body).toHaveProperty('txnNum');
    });

  });