import { test } from '@playwright/test';
import { SignupPage } from '../src/pages/SignupPage';
import { signupData } from '../src/test-data/signupData';

test('Verify signup with valid data', async ({ page }) => {
    const signupPage = new SignupPage(page);

    await signupPage.goto();

    await signupPage.signup(signupData.validUser);

    await signupPage.createAccount(signupData.validUser);

    await signupPage.verifyAccountCreation();
});
