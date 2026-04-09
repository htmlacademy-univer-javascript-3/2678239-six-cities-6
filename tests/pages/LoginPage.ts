import { Locator, Page } from '@playwright/test';
import {AbstractTestPage} from './AbstractTestPage.ts';

export class LoginPage extends AbstractTestPage {
  constructor(page: Page, url = '/login') {
    super(page, url);
    this.emailInput = this.page.getByTestId('login-input');
    this.passwordInput = this.page.getByTestId('password-input');

    this.submitButton = this.page.getByTestId('submit-button');
  }

  public readonly emailInput: Locator;

  public readonly passwordInput: Locator;

  public readonly submitButton: Locator;
}
