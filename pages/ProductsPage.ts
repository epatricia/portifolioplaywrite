import { Locator, Page } from '@playwright/test';

export class ProductsPage {
  readonly addBikeLight: Locator;
  readonly cartLink: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.addBikeLight = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }

  async addProduct() {
    await this.addBikeLight.click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}
