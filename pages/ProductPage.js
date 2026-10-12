import {Page,Locator} from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductPage extends BasePage {
    constructor(page) {
        super(page);
        this.searchInput = page.locator('#search_product');
        this.searchButton = page.locator('#submit_search');
        this.firstProductOverlay = page.locator('.product-image-wrapper');
        this.addToCartButton = page.locator('.add-to-cart');
        this.continueShoppingButton = page.getByRole('button', { name: 'Continue Shopping' });

    }
    async searchProduct(productName){
        await this.searchInput.fill(productName);
        await this.searchButton.click();

    }
    
    async addFirstProductToCart() {
        await this.firstProductOverlay.first().hover();
        await this.addToCartButton.first().click();
       
    }
    async clickContinueShopping(){
        await this.continueShoppingButton.click();
    }
}    