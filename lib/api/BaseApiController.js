import { request } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default class BaseApiController {
  constructor() {
    this.baseURL = process.env.BASE_URL;
    this.bearerToken = process.env.BEARER_TOKEN;
  }

  async init() {
    this.context = await request.newContext({
      baseURL: this.baseURL,
      extraHTTPHeaders: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.bearerToken}`
      }
    });
  }

  async get(url, params = {}) {
    return await this.context.get(url, { params });
  }

  async post(url, payload) {
    return await this.context.post(url, { data: payload });
  }

  async put(url, payload) {
    return await this.context.put(url, { data: payload });
  }

  async delete(url) {
    return await this.context.delete(url);
  }
}