import { test, expect } from '@playwright/test';

test('test bukalapak', async ({ page }) => {
  await page.goto('https://www.bukalapak.com/');
  await page.waitForLoadState('networkidle');
  await page.getByRole('link', { name: 'Transaksi' }).click();
  await page.locator('a').filter({ hasText: 'Produk VirtualRiwayat' }).click();
  await page.getByRole('link', { name: 'Daftar' }).click();
});