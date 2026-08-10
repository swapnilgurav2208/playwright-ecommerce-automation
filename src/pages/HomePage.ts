import { Page,Locator,expect } from "@playwright/test";
import { BasePage } from "../base/BasePage";


export class HomePage extends BasePage{

    constructor(page: Page){
        super(page);
    }

    async goto():Promise<void>{
        await this.page.goto('/');
    }

    async verifyHomePageLoaded():Promise<void>{
        expect(this.page.url()).toBe('https://automationexercise.com/');
    }
}