import { Locator, Page } from '@playwright/test';

export class CartPage {
  readonly productName: Locator;
  readonly removeButton: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.productName = page.getByText('Sauce Labs Bike Light', { exact: true });
    this.removeButton = page.locator('[data-test="remove-sauce-labs-bike-light"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}
