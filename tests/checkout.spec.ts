import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { users } from '../test-data/users';

async function goToCheckout(page: any) {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  await loginPage.goto();
  await loginPage.login(users.valid.username, users.valid.password);
  await productsPage.addProduct();
  await productsPage.openCart();
  await cartPage.checkout();
}

test('CT07 - Checkout sem preencher dados', async ({ page }) => {
  await goToCheckout(page);
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.continueButton.click();
  await expect(checkoutPage.errorMessage).toBeVisible();
});

test('CT08 - Realizar compra completa com sucesso', async ({ page }) => {
  await goToCheckout(page);
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.fillInformation(
    users.checkout.firstName,
    users.checkout.lastName,
    users.checkout.postalCode
  );
  await checkoutPage.continueButton.click();
  await checkoutPage.finishButton.click();
  await expect(checkoutPage.successMessage).toHaveText('Thank you for your order!');
});
