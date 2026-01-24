import BaseApiController from './BaseApiController';

export default class JournalController extends BaseApiController {
  async createJournal(payload) {
    return await this.post('/journal/CreateJournal', payload);
  }
}
