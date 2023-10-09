import { test } from '@playwright/test';
import { HomePage } from '../../pages/home.page';
import { ProductsPage } from '../../pages/products.page';
import { USERNAME, PASSWORD } from '../../dat-provider';


test('sucessful login', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.login(USERNAME, PASSWORD);

  // validate header
  const productsPage = new ProductsPage(page);
  await productsPage.validateHeader();
});

// this one should fail
// test('invalid login', async ({ page }) => {
//   const homePage = new HomePage(page);
//   await homePage.goto();
//   await homePage.login(USERNAME, PASSWORD);

//   // validate header
//   const productsPage = new ProductsPage(page);
//   await productsPage.validateHeader('invalid header');
// });
