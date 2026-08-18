import { test } from '@playwright/test';
import { ProductsPage } from '../src/pages/ProductsPage';
import { productData } from '../src/test-data/productData';
import { CartPage } from '../src/pages/CartPage';
import { CheckoutPage } from '../src/pages/CheckoutPage';

test.use({
    storageState: 'auth/auth.json',
});

test('Verify logged-in user can proceed to Checkout with a product in the cart', async ({
    page,
}) => {
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await productsPage.goto();

    await productsPage.addToCart(productData.productName);

    await productsPage.verifyAddtoCartSuccess();

    await productsPage.viewCart();

    await cartPage.verifyProductInCart(productData.productName);

    await cartPage.proceedToCheckout();

    await checkoutPage.verifyCheckoutPageLoaded();
});
