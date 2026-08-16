import { test } from '@playwright/test';
import { ProductsPage } from '../src/pages/ProductsPage';
import { productData } from '../src/test-data/productData';
import { CartPage } from '../src/pages/CartPage';

test('Verify product can be added to cart', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await productsPage.goto();

    await productsPage.addToCart(productData.productName);

    await productsPage.verifyAddtoCartSuccess();

    await productsPage.viewCart();

    await cartPage.verifyProductInCart(productData.productName);
});

test('Verify product can be deleted from cart', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await productsPage.goto();

    await productsPage.addToCart(productData.productName);

    await productsPage.verifyAddtoCartSuccess();

    await productsPage.viewCart();

    await cartPage.verifyProductInCart(productData.productName);

    await cartPage.deleteProductFromCart(productData.productName);

    await cartPage.verifyProductIsDeletedFromCart(productData.productName);
});
