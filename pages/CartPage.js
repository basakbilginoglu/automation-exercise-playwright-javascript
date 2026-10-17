
import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
    constructor(page) {
        super(page);

        this.cartRows = page.locator('.cart_info tbody tr');
        this.proceedToCheckoutButton = page.getByRole('link', {
            name: 'Proceed To Checkout'
        });
    }

    async getCartItemsCount() {
        return await this.cartRows.count();
    }

    async clickProceedToCheckout() {
        await this.proceedToCheckoutButton.click();
    }

    getProductRow(productName) {
        return this.cartRows.filter({
            has: this.page.locator('.cart_description h4 a', {
                hasText: productName
            })
        });
    }

    async getProductTitle(productName) {
        const row = this.getProductRow(productName);
        await expect(row).toHaveCount(1);

        const title = await row.locator('.cart_description h4 a').textContent();
        return title?.trim() ?? '';
    }

    async getProductPrice(productName) {
        const row = this.getProductRow(productName);
        await expect(row).toHaveCount(1);

        const price = await row.locator('.cart_price').textContent();
        return price?.trim() ?? '';
    }

    async getProductQuantity(productName) {
    const row = this.getProductRow(productName);
    await expect(row).toHaveCount(1);

    const quantity = await row.locator('.cart_quantity button').textContent();
    return Number(quantity?.trim());
}
}
