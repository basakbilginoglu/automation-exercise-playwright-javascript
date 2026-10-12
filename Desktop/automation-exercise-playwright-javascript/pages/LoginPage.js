import {Page,Locator} from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    
    constructor(page) {
        super(page);
        this.userEmailInput = page.locator('input[data-qa="login-email"]');
        this.passwordInput = page.locator('input[data-qa="login-password"]');
        this.loginButton = page.locator('button[data-qa="login-button"]');
    }

    async login(email,password){
        await this.userEmailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
  