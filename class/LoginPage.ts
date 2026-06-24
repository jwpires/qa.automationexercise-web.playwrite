import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  private readonly _login_email: Locator;
  private readonly _login_password: Locator;
  private readonly _login_button: Locator;

  constructor(page: Page) {
    this.page = page;
    this._login_email = page.locator('[data-qa="login-email"]');
    this._login_password = page.locator('[data-qa="login-password"]');
    this._login_button = page.locator('[data-qa="login-button"]');
  }

  // get login_email(): Locator {
  //   return this._login_email;
  // }

  // get login_password(): Locator {
  //   return this._login_password;
  // }

  // get login_button(): Locator {
  //   return this._login_button;
  // }

  async setLoginEmail(email: string): Promise<void> {
    await this._login_email.fill(email);
  }

  async setLoginPassword(password: string): Promise<void> {
    await this._login_password.fill(password);
  }

  async clickLoginButton(): Promise<void> {
    await this._login_button.click();
  }

  async goto(): Promise<void> {
    await this.page.goto("https://automationexercise.com/login");
  }

  async login(email: string, password: string): Promise<void> {
    await this.setLoginEmail(email);
    await this.setLoginPassword(password);
    await this.clickLoginButton();
  }
}
