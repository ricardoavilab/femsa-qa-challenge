import { type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly userNameInput: Locator;
  readonly passwordInput: Locator;
  readonly sumbitButton: Locator

  constructor(page: Page) {
    this.page = page;
    this.userNameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.sumbitButton = page.locator('#login-button');
  }

  async goto () {
    await this.page.goto('/');
  }
  
  async login(userName: string, password: string) {
    await this.userNameInput.fill(userName);
    await this.passwordInput.fill(password);
    await this.sumbitButton.click();
  }
}
