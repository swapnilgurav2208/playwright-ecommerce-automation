import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../base/BasePage';

export class ProductDetailsPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async verifyProductName(expectedProductName: string): Promise<void> {
        await expect(this.page.getByRole('heading', { name: expectedProductName })).toBeVisible();
    }
}
