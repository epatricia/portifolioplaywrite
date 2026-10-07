import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../test-data/users';

test.describe('Login - SauceDemo', () => {
  test('CT01 - Login com usuário válido', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.valid.username, users.valid.password);
    await expect(page).toHaveURL(/inventory\.html/);
  });

  test('CT02 - Login com senha inválida', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.invalid.username, users.invalid.password);
    await expect(loginPage.errorMessage).toBeVisible();
  });

  test('CT03 - Login sem preencher campos', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.loginButton.click();
    await expect(loginPage.errorMessage).toBeVisible();
  });
});
