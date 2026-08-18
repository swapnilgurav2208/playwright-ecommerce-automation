import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../base/BasePage';

export class PaymentPage extends BasePage {
    readonly nameOnCardInput: Locator;
    readonly cardNumberInput: Locator;
    readonly cvcInput: Locator;
    readonly expirationMonthInput: Locator;
    readonly expirationYearInput: Locator;
    readonly payAndConfirmButton: Locator;

    constructor(page: Page) {
        super(page);

        this.nameOnCardInput = this.page.locator('[data-qa="name-on-card"]');
        this.cardNumberInput = this.page.locator('[class="form-control card-number"]');
        this.cvcInput = this.page.locator('[class="form-control card-cvc"]');
        this.expirationMonthInput = this.page.locator('[class="form-control card-expiry-month"]');
        this.expirationYearInput = this.page.locator('[class="form-control card-expiry-year"]');
        this.payAndConfirmButton = this.page.getByRole('button', { name: 'Pay and Confirm Order' });
    }

    async fillPaymentDetails(paymentData: {
        nameOnCard: string;
        cardNumber: string;
        cvc: string;
        expiryMonth: string;
        expiryYear: string;
    }): Promise<void> {
        await this.fill(this.nameOnCardInput, paymentData.nameOnCard, 'Name on Card');
        await this.fill(this.cardNumberInput, paymentData.cardNumber, 'Card Number');
        await this.fill(this.cvcInput, paymentData.cvc, 'CVC');
        await this.fill(this.expirationMonthInput, paymentData.expiryMonth, 'Expiry Month');
        await this.fill(this.expirationYearInput, paymentData.expiryYear, 'Expiry Year');
    }

    async payAndConfirmOrder(): Promise<void> {
        await this.click(this.payAndConfirmButton, 'Pay and Confirm');
    }
}
