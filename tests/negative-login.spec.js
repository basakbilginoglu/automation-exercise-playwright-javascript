import{test,expect}from'@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import LoginData from '../test-data/login.json';

test.describe('Negative Login Tests', () => {
  test('should display error message for invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateTo('login');
  
    //await headerPage.clickSignUpLoginLink();
    await loginPage.login(LoginData.invalidUser.email, LoginData.invalidUser.password);
    await expect(page.getByText(LoginData.expectedError)).toBeVisible();
    await expect(page.getByText(LoginData.expectedError)).toHaveText(LoginData.expectedError);
      
    await expect(page).toHaveURL(/login/);
  })
})