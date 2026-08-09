import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../base/BasePage';

export class SignupPage extends BasePage {
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly signupButton: Locator;
    readonly titleRadioButton: Locator;
    readonly passwordInput: Locator;
    readonly daySelect: Locator;
    readonly monthSelect: Locator;
    readonly yearSelect: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly companyInput: Locator;
    readonly addressInput: Locator;
    readonly address2Input: Locator;
    readonly countrySelect: Locator;
    readonly stateInput: Locator;
    readonly cityInput: Locator;
    readonly zipcodeInput: Locator;
    readonly mobileNumberInput: Locator;
    readonly createAccountButton: Locator;
    readonly accountCreationSuccessMessage: Locator;
    readonly continueButton: Locator;

    constructor(page: Page) {
        super(page);
        this.nameInput = this.page.getByRole('textbox', { name: 'Name' });
        this.emailInput = this.page.locator('[data-qa="signup-email"]');
        this.signupButton = this.page.getByRole('button', { name: 'Signup' });
        this.titleRadioButton = this.page.locator('#id_gender1');
        this.passwordInput = this.page.getByRole('textbox', { name: 'Password *' });
        this.daySelect = this.page.locator('#days');
        this.monthSelect = this.page.locator('#months');
        this.yearSelect = this.page.locator('#years');
        this.firstNameInput = this.page.getByRole('textbox', { name: 'First name *' });
        this.lastNameInput = this.page.getByRole('textbox', { name: 'Last name *' });
        this.companyInput = this.page.locator('#company');
        this.addressInput = this.page.getByRole('textbox', {
            name: 'Address * (Street address, P.O. Box, Company name, etc.)',
        });
        this.address2Input = this.page.getByRole('textbox', { name: 'Address 2' });
        this.countrySelect = this.page.getByRole('combobox', { name: 'Country *' });
        this.stateInput = this.page.getByRole('textbox', { name: 'State *' });
        this.cityInput = this.page.getByRole('textbox', { name: 'City * Zipcode *' });
        this.zipcodeInput = this.page.locator('#zipcode');
        this.mobileNumberInput = this.page.getByRole('textbox', { name: 'Mobile Number *' });
        this.createAccountButton = this.page.getByRole('button', { name: 'Create Account' });
        this.accountCreationSuccessMessage = this.page.getByRole('heading', {
            name: 'ACCOUNT CREATED!',
        });
        this.continueButton = this.page.getByRole('link', { name: 'Continue' });
    }

    async goto(): Promise<void> {
        await this.page.goto('/login');
    }

    async signup(user: { name: string; email: string }): Promise<void> {
        await this.fill(this.nameInput, user.name, 'Signup Name');
        await this.fill(this.emailInput, user.email, 'Signup Email');
        await this.click(this.signupButton, 'Signup Button');
    }

    async createAccount(user: {
        password: string;
        day: string;
        month: string;
        year: string;
        firstName: string;
        lastName: string;
        company: string;
        address: string;
        address2: string;
        country: string;
        state: string;
        city: string;
        zipcode: string;
        mobileNumber: string;
    }): Promise<void> {
        await this.click(this.titleRadioButton, 'Title');
        await this.fill(this.passwordInput, user.password, 'Password');
        await this.select(this.daySelect, user.day, 'Day');
        await this.select(this.monthSelect, user.month, 'Month');
        await this.select(this.yearSelect, user.year, 'Year');
        await this.fill(this.firstNameInput, user.firstName, 'First Name');
        await this.fill(this.lastNameInput, user.lastName, 'Last Name');
        await this.fill(this.companyInput, user.company, 'Company');
        await this.fill(this.addressInput, user.address, 'Address');
        await this.fill(this.address2Input, user.address2, 'Address 2');
        await this.select(this.countrySelect, user.country, 'Country');
        await this.fill(this.stateInput, user.state, 'State');
        await this.fill(this.cityInput, user.city, 'City');
        await this.fill(this.zipcodeInput, user.zipcode, 'Zip Code');
        await this.fill(this.mobileNumberInput, user.mobileNumber, 'Mobile Number');
        await this.click(this.createAccountButton, 'Create Account');
    }

    async verifyAccountCreation(): Promise<void> {
        await expect(this.accountCreationSuccessMessage).toBeVisible();
        await expect(this.accountCreationSuccessMessage).toHaveText('Account Created!');
    }

    async continueToHome(): Promise<void> {
        await this.click(this.continueButton, 'Continue');
    }
}
