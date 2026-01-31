import { test, expect } from '@playwright/test';
import JournalController from '../../lib/api/JournalController.js';
import { journalPayload } from '../../test-data/journal.payload.js';

let journalApi;

test.beforeEach(async () => {
  journalApi = new JournalController();
});

test.afterEach(async () => {
  await journalApi.dispose();
});

test('Create Journal - Success @journal-create', async () => {

  await test.step('Create Journal', async () => {

    const payload = journalPayload();
    const response = await journalApi.createJournal(payload);
    
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const responseText = await response.text();
    expect(responseText).toContain('Record created successfully');
  });

});
