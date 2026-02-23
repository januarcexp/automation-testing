import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('student');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
  await page.getByRole('button', { name: 'Submit' }).click();

  
  // const transaksiLink = page.getByRole('link', { name: 'Transaksi' });
  // await expect(transaksiLink).toBeVisible({ timeout: 10000 });
  // await transaksiLink.click();

  // const produkLink = page.locator('a', { hasText: 'Produk VirtualRiwayat' });
  // await expect(produkLink).toBeVisible({ timeout: 10000 });
  // produkLink.click();

  // const daftarLink = page.getByRole('link', { name: 'Daftar' });
  // await expect(daftarLink).toBeVisible({ timeout: 10000 });
  // await daftarLink.click();
});


