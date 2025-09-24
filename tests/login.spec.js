import { test, expect } from '@playwright/test';
import { ExcelReader } from '../utils/excel-reader.js';
import { LoginPage } from '../pages/login-page.js'; // <-- Add this line

test('Login with data from Excel', async ({ page }) => {
  // Read login data from Excel (first row)
  const loginData = ExcelReader.getLoginData(0);
  
  // Navigate to URL from Excel
  await page.goto(loginData.URL);
  
  // Perform login with Excel data
  const loginPage = new LoginPage(page);
  await loginPage.login(loginData.EMAIL, loginData.PASSWORD);
  
  // Wait for successful login
  await page.waitForURL('**/dashboard**');
});
