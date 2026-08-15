import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../base/BasePage';

export class ProductsPage extends BasePage {
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly productCard: Locator;
    readonly productNames: Locator;
    readonly viewProductButton: Locator;

    constructor(page: Page) {
        super(page);

        this.searchInput = this.page.getByRole('textbox', { name: 'Search Product' });
        this.searchButton = this.page.locator('#submit_search');
        this.productCard = this.page.locator('.col-sm-4');
        this.productNames = this.page.locator(
            '[class=product-image-wrapper] [class=single-products] [class*=productinfo] p'
        );
        this.viewProductButton = this.page.locator(
            ' [class=product-image-wrapper] [class=choose] a'
        );
    }

    async goto(): Promise<void> {
        await this.page.goto('/products');
    }

    async verifyProductsPageLoaded(): Promise<void> {
        await expect(this.page).toHaveURL('https://automationexercise.com/products');
    }

    async searchProduct(productName: string): Promise<void> {
        await this.fill(this.searchInput, productName, 'Products Search');
        await this.click(this.searchButton, 'Search');
    }

    async verifySearchResult(productName: string): Promise<void> {
        const productsList = await this.productNames.allTextContents();

        for (const product of productsList) {
            expect(product).toContain(productName);
        }
    }

    async viewProductDetails(productName: string): Promise<void> {
        const product = this.productCard.filter({ hasText: productName });
        const viewProduct = product.getByRole('link', { name: ' View Product' });
        await this.click(viewProduct, 'View Product');
    }
}
