export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigateTo(path) {
    await this.page.goto(`https://automationexercise.com/${path}`);
  }  
 
}