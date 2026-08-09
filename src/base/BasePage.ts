import { Page, Locator } from '@playwright/test';

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async click(locator: Locator, elementName: string): Promise<void> {
        await locator.click();
        console.log(`Clicked on ${elementName}`);
    }

    async fill(locator: Locator, value: string, elementName: string): Promise<void> {
        await locator.fill(value);
        console.log(`Entered value in ${elementName}`);
    }

    async hover(locator: Locator, elementName: string): Promise<void> {
        await locator.hover();
        console.log(`Hovered on ${elementName}`);
    }

    async select(locator: Locator, value: string, elementName: string): Promise<void> {
        await locator.selectOption(value);
        console.log(`Selected ${value} from ${elementName}`);
    }

    async check(locator: Locator, elementName: string): Promise<void> {
        await locator.check();
        console.log(`Checked ${elementName}`);
    }
}
