import { Page } from '@playwright/test';

export class AbstractTestPage {
  constructor(page: Page, url: string) {
    this.url = url;
    this.page = page;
  }

  protected readonly url: string;

  protected readonly page: Page;

  public async load(): Promise<void> {
    await this.page.goto(this.url);
  }
}
