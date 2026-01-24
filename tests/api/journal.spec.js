import { test, expect } from '@playwright/test';
import JournalController from '../../lib/api/JournalController.js';
import journalPayload from '../../test-data/journal.payload.json';

test('Create Journal - success', async () => {
  const journalApi = new JournalController();

  const response = await journalApi.createJournal(journalPayload);

  expect(response.status()).toBe(200);

  await journalApi.dispose();
});
