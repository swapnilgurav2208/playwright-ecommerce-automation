import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../base/BasePage';

export class HeaderComponent extends BasePage {
    readonly logoutButton: Locator;
    readonly loggedInUser: Locator;
    readonly deleteAccountButton: Locator;

    constructor(page: Page) {
        super(page);
        this.logoutButton = this.page.getByRole('link', { name: ' Logout' });
        this.loggedInUser = this.page.locator('a:has(i.fa-user) b');
        this.deleteAccountButton = this.page.getByRole('link', { name: ' Delete Account' });
    }

    async logout(): Promise<void> {
        await this.click(this.logoutButton, 'Logout');
    }

    async verifyUserLoggedIn(name: string): Promise<void> {
        await expect(this.logoutButton).toBeVisible();
        await expect(this.deleteAccountButton).toBeVisible();
        await expect(this.loggedInUser).toHaveText(name);
    }
}
