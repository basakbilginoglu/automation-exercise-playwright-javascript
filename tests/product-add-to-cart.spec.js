
import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import { ProductPage } from '../pages/ProductPage';
import { HeaderPage } from '../pages/HeaderPage';
import CartData from '../test-data/cart.json';

test.describe('Product Add to Cart', () => {
  test('should add product to cart and display confirmation', async ({ page }) => {
    const cartPage = new CartPage(page);
    const headerPage = new HeaderPage(page);
    const productPage = new ProductPage(page);

    await productPage.navigateTo('products');

    await productPage.addProductToCart(CartData.product.name);
    await productPage.clickContinueShopping();

    await headerPage.clickCartLink();

    await expect.poll(() => cartPage.getProductTitle(CartData.product.name))
      .toBe(CartData.product.name);

    await expect.poll(() => cartPage.getProductPrice(CartData.product.name))
      .toBe(CartData.product.price);
  });
});
