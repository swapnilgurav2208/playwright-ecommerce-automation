import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../base/BasePage';

export class CartPage extends BasePage {
    readonly productSummaryCard: Locator;

    constructor(page: Page) {
        super(page);

        this.productSummaryCard = this.page.locator('[class="table table-condensed"] tbody tr');
    }

    async verifyProductInCart(productName: string): Promise<void> {
        const productNameInCart = this.productSummaryCard.getByText(productName);
        await expect(productNameInCart).toBeVisible();
    }
}
