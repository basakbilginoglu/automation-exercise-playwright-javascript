import {Page,Locator} from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {

    constructor(page) {
        super(page);
        this.cartRows = page.locator('.cart_info tbody tr');
        this.proceedToCheckoutButton = page.locator('.cart_navigation a:has-text("Proceed To Checkout")');
    }

    async getCartItemsCount(){
        return await this.cartRows.count();
    }

    async clickProceedToCheckout(){
        await this.proceedToCheckoutButton.click();
    }
    async getFirstProductTitle(){
       if (await this.getCartItemsCount() > 0) {
        const title = await this.cartRows.first().locator('.cart_description h4 a').textContent();
        return title ? title.trim() : '';
       }
      return '';
    }

    async getFirstProductPrice() {
        const price = await this.cartRows.first()
            .locator('.cart_price')
            .textContent();

        return price?.trim() ?? '';
}


}   