import { test } from '@playwright/test';
import { ProductsPage } from '../src/pages/ProductsPage';
import { productData } from '../src/test-data/productData';
import { ProductDetailsPage } from '../src/pages/ProductDetailsPage';

test('Verify Products page is loaded', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    await productsPage.goto();

    await productsPage.verifyProductsPageLoaded();
});

test('Search product and verify search results', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    await productsPage.goto();

    await productsPage.verifyProductsPageLoaded();

    await productsPage.searchProduct(productData.productName);

    await productsPage.verifySearchResult(productData.productName);
});

test('View product details', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const productDetailsPage = new ProductDetailsPage(page);

    await productsPage.goto();

    await productsPage.viewProductDetails(productData.productName);

    await productDetailsPage.verifyProductName(productData.productName);
});
