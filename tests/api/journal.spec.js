import { test, expect } from '@playwright/test';
import JournalController from '../../lib/api/JournalController';
import journalPayload from '../../test-data/journal.payload.json';

test('Create Journal API', async () => {
  const journalApi = new JournalController();
  await journalApi.init();

  const response = await journalApi.createJournal(journalPayload);

  expect(response.status()).toBe(200);
});
