import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';

test('Verify Automation exercise homepage is loaded', async ({ page }) => {
    
    const homePage = new HomePage(page);

    await homePage.goto();

    await homePage.verifyHomePageLoaded();
});
