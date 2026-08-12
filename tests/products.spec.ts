import { test } from "@playwright/test";
import { ProductsPage } from "../src/pages/ProductsPage";

test('To verify Products page is loaded', async({page}) =>{

    const productsPage = new ProductsPage(page);

    await productsPage.goto();

    await productsPage.verifyProductsPageLoaded();

});