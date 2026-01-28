import { test, expect } from '@playwright/test';
import JournalController from '../../lib/api/JournalController.js';
import payload from '../../test-data/journal.payload.json';

test('Create Journal - Success', async () => {
  const journalApi = new JournalController();

  const response = await journalApi.createJournal(payload);

  if (response.status() !== 200) {
    console.log(await response.text());
  }

  expect(response.status()).toBe(200);

  await journalApi.dispose();
});
