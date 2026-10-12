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

  await productPage.addFirstProductToCart();
  await productPage.clickContinueShopping();

  await headerPage.clickCartLink();
  expect(await cartPage.getFirstProductTitle()).toBe(CartData.product.name); 
  expect(await cartPage.getFirstProductPrice()).toBe(CartData.product.price);

  })

})