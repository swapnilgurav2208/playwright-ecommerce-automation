import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../base/BasePage';

export class ProductsPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async goto(): Promise<void> {
        await this.page.goto('/products');
    }

    async verifyProductsPageLoaded(): Promise<void> {
        await expect(this.page).toHaveURL('https://automationexercise.com/products');
    }
}
