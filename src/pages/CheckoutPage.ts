import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../base/BasePage';

export class CheckoutPage extends BasePage {
    readonly placeOrderButton: Locator;

    constructor(page: Page) {
        super(page);

        this.placeOrderButton = this.page.getByRole('link', { name: 'Place Order' });
    }

    async reviewAddressAndPlaceOrder(): Promise<void> {
        this.click(this.placeOrderButton, 'Place Order');
    }

    async verifyCheckoutPageLoaded(): Promise<void> {
        await expect(this.placeOrderButton).toBeVisible();
    }
}
