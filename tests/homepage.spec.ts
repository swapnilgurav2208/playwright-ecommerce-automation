import { test, expect } from '@playwright/test';

test('Verify Automation exercise homepage', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle('Automation Exercise');
});
