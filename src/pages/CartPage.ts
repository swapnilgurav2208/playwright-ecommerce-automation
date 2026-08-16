import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../base/BasePage';

export class CartPage extends BasePage {
    readonly productSummaryCard: Locator;
    readonly proceedToCheckoutButton: Locator;

    constructor(page: Page) {
        super(page);

        this.productSummaryCard = this.page.locator('[class="table table-condensed"] tbody tr');
        this.proceedToCheckoutButton = this.page.locator('[class="btn btn-default check_out"]');
    }

    async verifyProductInCart(productName: string): Promise<void> {
        const productNameInCart = this.productSummaryCard.getByText(productName);
        await expect(productNameInCart).toBeVisible();
    }

    async deleteProductFromCart(productName: string): Promise<void> {
        const productNameToDelete = this.productSummaryCard.filter({
            has: this.page.getByText(productName),
        });
        const deleteProductButton = productNameToDelete.locator('[class="cart_quantity_delete"]');
        await this.click(deleteProductButton, 'Delete Product');
    }

    async verifyProductIsDeletedFromCart(productName: string): Promise<void> {
        const productNameToDelete = this.productSummaryCard.filter({
            has: this.page.getByText(productName),
        });
        await expect(productNameToDelete).not.toBeVisible();
    }

    async proceedToCheckout(): Promise<void> {
        await this.click(this.proceedToCheckoutButton, 'Proceed to Checkout');
    }
}
