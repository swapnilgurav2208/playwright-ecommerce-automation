import { test as setup } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { authData } from '../src/test-data/authData';
import { HeaderComponent } from '../src/components/HeaderComponent';

setup('authenticate', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const headerComponent = new HeaderComponent(page);

    await loginPage.goto();

    await loginPage.login(authData.validUser);

    await headerComponent.verifyUserLoggedIn(authData.validUser.name);

    await page.context().storageState({
        path: 'auth/auth.json',
    });
});
