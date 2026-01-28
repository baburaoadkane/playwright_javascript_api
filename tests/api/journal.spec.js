import { test, expect } from '@playwright/test';
import JournalController from '../../lib/api/JournalController.js';
import { journalPayload } from '../../test-data/journal.payload.js';

test('Create Journal - Success', async () => {
  const journalApi = new JournalController();

  const payload = structuredClone(journalPayload);
  const response = await journalApi.createJournal(payload);

  if (response.status() !== 200) {
    console.log(await response.text());
  }

  expect(response.status()).toBe(200);

  await journalApi.dispose();
});
