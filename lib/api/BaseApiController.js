import { request } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default class BaseApiController {
  constructor() {
    this.baseURL = process.env.BASE_URL;
    this.bearerToken = process.env.BEARER_TOKEN;
    this.context = null;
  }

  async init() {
    if (!this.context) {
      this.context = await request.newContext({
        baseURL: this.baseURL,
        extraHTTPHeaders: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.bearerToken}`
        }
      });
    }
  }

  async get(url, params = {}) {
    await this.init();
    return this.context.get(url, { params });
  }

  async post(url, payload) {
    await this.init();
    return this.context.post(url, { data: payload });
  }

  async put(url, payload) {
    await this.init();
    return this.context.put(url, { data: payload });
  }

  async delete(url) {
    await this.init();
    return this.context.delete(url);
  }

  async dispose() {
    if (this.context) {
      await this.context.dispose();
      this.context = null;
    }
  }
}