import { test, expect } from '@playwright/test';

test('test bukalapak', async ({ page }) => {
    await page.goto('https://www.bukalapak.com/', { waitUntil: 'domcontentloaded'});

    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(5000);

  const transaksiLink = page.getByRole('link', { name: 'Transaksi' });
  await expect(transaksiLink).toBeVisible({ timeout: 150000 });
  await transaksiLink.click();

  const produkLink = page.locator('a', { hasText: 'Produk VirtualRiwayat' });
  await expect(produkLink).toBeVisible({ timeout: 10000 });
  produkLink.click();

  const daftarLink = page.getByRole('link', { name: 'Daftar' });
  await expect(daftarLink).toBeVisible({ timeout: 10000 });
  await daftarLink.click();

  });