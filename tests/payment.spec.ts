import { test } from '@playwright/test';
import { CartPage } from '../src/pages/CartPage';
import { CheckoutPage } from '../src/pages/CheckoutPage';
import { PaymentPage } from '../src/pages/PaymentPage';
import { ProductsPage } from '../src/pages/ProductsPage';
import { productData } from '../src/test-data/productData';
import { paymentData } from '../src/test-data/paymentData';
import { PaymentDonePage } from '../src/pages/PaymentDonePage';

test.use({
    storageState: 'auth/auth.json',
});

test('Verify user can place an order successfully ', async ({ page }) => {
    const productPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const paymentPage = new PaymentPage(page);
    const paymentDonePage = new PaymentDonePage(page);

    await productPage.goto();

    await productPage.addToCart(productData.productName);

    await productPage.verifyAddtoCartSuccess();

    await productPage.viewCart();

    await cartPage.verifyProductInCart(productData.productName);

    await cartPage.proceedToCheckout();

    await checkoutPage.verifyCheckoutPageLoaded();

    await checkoutPage.reviewAddressAndPlaceOrder();

    await paymentPage.fillPaymentDetails(paymentData);

    await paymentPage.payAndConfirmOrder();

    await paymentDonePage.verifyOrderSuccess();
});
