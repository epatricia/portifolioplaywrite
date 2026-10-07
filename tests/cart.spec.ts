import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { users } from '../test-data/users';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  await loginPage.goto();
  await loginPage.login(users.valid.username, users.valid.password);
  await productsPage.addProduct();
  await productsPage.openCart();
});

test('CT05 - Validar produto no carrinho', async ({ page }) => {
  const cartPage = new CartPage(page);
  await expect(cartPage.productName).toBeVisible();
});

test('CT06 - Remover produto do carrinho', async ({ page }) => {
  const cartPage = new CartPage(page);
  await cartPage.removeButton.click();
  await expect(cartPage.productName).not.toBeVisible();
});
