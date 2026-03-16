/**
 * skenario pengujian E2E - alur login:
 *
 * - Login Flow
 *   - should display login page with email and password inputs
 *   - should show error when submitting with wrong credentials
 *   - should successfully login and redirect to home page with valid credentials
 *   - should navigate to register page from login page
 */

const {test, expect} = require('@playwright/test');

const TEST_EMAIL = process.env.TEST_EMAIL || 'testuser@example.com';
const TEST_PASSWORD = process.env.TEST_PASSWORD || 'testpassword123';

test.describe('Login Flow', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('/login');
  });

  test('should display login page with email and password inputs', async ({
    page,
  }) => {
    await expect(page.getByRole('heading', {name: /masuk/i})).toBeVisible();
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByLabel(/password/i)).toBeVisible();
    await expect(
      page.getByRole('button', {name: /masuk/i}),
    ).toBeVisible();
  });

  test('should show error when submitting with wrong credentials',
    async ({page}) => {
      await page.getByLabel(/email/i).fill('wrong@example.com');
      await page.getByLabel(/password/i).fill('wrongpassword');

      page.on('dialog', async (dialog) => {
        expect(dialog.message()).toBeTruthy();
        await dialog.accept();
      });

      await page.getByRole('button', {name: /masuk/i}).click();

      // Should remain on login page
      await expect(page).toHaveURL(/.*login.*/);
    });

  test(
    'should successfully login and redirect to home page with valid credentials',
    async ({page}) => {
      await page.getByLabel(/email/i).fill(TEST_EMAIL);
      await page.getByLabel(/password/i).fill(TEST_PASSWORD);
      await page.getByRole('button', {name: /masuk/i}).click();

      // After successful login, should be redirected to home page
      await expect(page).toHaveURL('/', {timeout: 10000});
      // Home page should show thread list or navigation without login link
      await expect(
        page.locator('.app'),
      ).toBeVisible();
    },
  );

  test('should navigate to register page from login page', async ({page}) => {
    await page.getByRole('link', {name: /daftar di sini/i}).click();
    await expect(page).toHaveURL(/.*register.*/);
  });
});
