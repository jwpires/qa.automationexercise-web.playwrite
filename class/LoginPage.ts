import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly login_email: Locator;
  readonly login_password: Locator;
  readonly login_button: Locator;

  constructor(page: Page) {
    this.page = page;
    this.login_email = page.locator('[data-qa="login-email"]');
    this.login_password = page.locator('[data-qa="login-password"]');
    this.login_button = page.locator('[data-qa="login-button"]');
  }

  async accessUrl(url: string) {
    await this.page.goto(url);
  }

  async login(email: string, password: string) {
    await this.login_email.fill(email);
    await this.login_password.fill(password);
    await this.login_button.click();
  }
}
