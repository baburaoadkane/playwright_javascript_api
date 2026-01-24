import BaseApiController from './BaseApiController';

export default class JournalController extends BaseApiController {
  /**
 * Creates a journal entry.
 *
 * @param {Object} payload - Journal creation request body
 * @returns {Promise<import('@playwright/test').APIResponse>}
 */
  async createJournal(payload) {
    return this.post('/journal/CreateJournal', payload);
  }
}
