import {Page,Locator} from '@playwright/test';
import { BasePage } from './BasePage';

export class HeaderPage extends BasePage {
    constructor(page) {
        super(page);
        this.homeLink = page.locator('a:has-text("Home")');
        this.productsLink = page.locator('a:has-text("Products")');
        this.signUpLoginLink = page.locator('a:has-text("Signup / Login")');
        this.cartLink = page.locator('header a[href="/view_cart"]');
    }
    async clickHomeLink() {
        await this.homeLink.click();
    }

    async clickProductsLink(){
        await this.productsLink.click();
    }
    
    async clickSignUpLoginLink() {
        await this.signUpLoginLink.click();
    }   

    async clickCartLink() {
        await this.cartLink.click();
    }
}