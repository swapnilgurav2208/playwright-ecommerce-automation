import { test } from '@playwright/test';
import { ProductsPage } from '../src/pages/ProductsPage';
import { productData } from '../src/test-data/productData';
import { ProductDetailsPage } from '../src/pages/ProductDetailsPage';
import { CartPage } from '../src/pages/CartPage';
import { CheckoutPage } from '../src/pages/CheckoutPage';
import { LoginPage } from '../src/pages/LoginPage';
import { loginData } from '../src/test-data/loginData';
import { HeaderComponent } from '../src/components/HeaderComponent';
import { signupData } from '../src/test-data/signupData';
import { SignupPage } from '../src/pages/SignupPage';

test('Verify logged-in user can proceed to Checkout with a product in the cart', async ({
    page,
}) => {
    const signupPage = new SignupPage(page);
    const productsPage = new ProductsPage(page);
    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const headerComponent = new HeaderComponent(page);

    await signupPage.goto();

    await signupPage.signup(signupData.validUser);

    await signupPage.createAccount(signupData.validUser);

    await signupPage.continueToHome();

    await headerComponent.logout();

    await loginPage.login(loginData.validUser);

    await headerComponent.verifyUserLoggedIn(signupData.validUser.name);

    await productsPage.goto();

    await productsPage.addToCart(productData.productName);

    await productsPage.verifyAddtoCartSuccess();

    await productsPage.viewCart();

    await cartPage.verifyProductInCart(productData.productName);

    await cartPage.proceedToCheckout();

    await checkoutPage.verifyCheckoutPageLoaded();
});
