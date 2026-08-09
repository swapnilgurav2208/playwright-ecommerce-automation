import type { Page, Locator } from '@playwright/test';
import { BasePage } from '../base/BasePage';

export class LoginPage extends BasePage {
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        super(page);
        this.emailInput = this.page.locator('[data-qa="login-email"]');
        this.passwordInput = this.page.getByRole('textbox', { name: 'Password' });
        this.loginButton = this.page.getByRole('button', { name: 'Login' });
    }

    async goto(): Promise<void> {
        await this.page.goto('/login');
    }

    async login(user: { email: string; password: string }): Promise<void> {
        await this.fill(this.emailInput, user.email, 'Login Email');
        await this.fill(this.passwordInput, user.password, 'Login Password');
        await this.click(this.loginButton, 'Login');
    }
}
