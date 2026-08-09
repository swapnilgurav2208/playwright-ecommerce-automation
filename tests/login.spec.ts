import { test } from '@playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { SignupPage } from '../src/pages/SignupPage';
import { signupData } from '../src/test-data/signupData';
import { HeaderComponent } from '../src/components/HeaderComponent';
import { loginData } from '../src/test-data/loginData';

test('verify user login with valid creds', async ({ page }) => {
    const signupPage = new SignupPage(page);
    const loginPage = new LoginPage(page);
    const headerComponent = new HeaderComponent(page);

    await signupPage.goto();

    await signupPage.signup(signupData.validUser);

    await signupPage.createAccount(signupData.validUser);

    await signupPage.continueToHome();

    await headerComponent.logout();

    await loginPage.login(loginData.validUser);

    await headerComponent.verifyUserLoggedIn(signupData.validUser.name);
});
