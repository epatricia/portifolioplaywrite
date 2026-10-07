import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { users } from '../test-data/users';

test('CT04 - Adicionar produto ao carrinho', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  await loginPage.goto();
  await loginPage.login(users.valid.username, users.valid.password);
  await productsPage.addProduct();
  await expect(productsPage.cartBadge).toHaveText('1');
});
