import { expect, type Locator, type Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly header: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = page.locator('.title');
  }

  async validateHeader (header: string = 'Products') {
    await expect(this.header).toHaveText(header);
  }
}
