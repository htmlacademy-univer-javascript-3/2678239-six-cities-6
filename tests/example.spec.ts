import { test, expect } from '@playwright/test';
import {LoginPage} from './pages/LoginPage.ts';
import {MainPage} from './pages/MainPage.ts';

test('user can authorize', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const mainPage = new MainPage(page);

  await loginPage.load();

  const email = 'abc@mail.com';
  await loginPage.emailInput.fill(email);
  await loginPage.passwordInput.fill('Qwerty123');

  await loginPage.submitButton.click();

  await expect(mainPage.username).toContainText(email);
});
