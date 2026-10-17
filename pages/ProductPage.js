import { test, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import CartData from '../test-data/cart.json';

export class ProductPage extends BasePage {
    constructor(page) {
        super(page);
        this.searchInput = page.locator('#search_product');

        this.searchButton = page.locator('#submit_search');
        this.continueShoppingButton = page.getByRole('button', { name: 'Continue Shopping' });

    }
    async searchProduct(productName){
        await this.searchInput.fill(productName);
        await this.searchButton.click();

    }
     
     async addProductToCart(productName) {
        const product = this.page.locator('.productinfo')
            .filter({ hasText: productName });

        await expect(product).toHaveCount(1);
        await product.hover();
        await product.locator('.add-to-cart').click();
    }


     async clickContinueShopping(){
            await this.continueShoppingButton.click();
     }
}    