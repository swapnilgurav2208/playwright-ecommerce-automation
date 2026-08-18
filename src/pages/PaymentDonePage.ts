import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../base/BasePage';

export class PaymentDonePage extends BasePage {
    readonly orderPlacedSuccessMessage: Locator;
    readonly downloadInvoiceButton: Locator;
    readonly continueButton: Locator;

    constructor(page: Page) {
        super(page);

        this.orderPlacedSuccessMessage = this.page.getByRole('heading', { name: 'ORDER PLACED!' });
        this.downloadInvoiceButton = this.page.getByRole('link', { name: 'Download Invoice' });
        this.continueButton = this.page.getByRole('link', { name: 'Continue' });
    }

    async verifyOrderSuccess(): Promise<void> {
        await expect(this.orderPlacedSuccessMessage).toBeVisible();
        await expect(this.downloadInvoiceButton).toBeVisible();
        await expect(this.continueButton).toBeVisible();
    }
}
