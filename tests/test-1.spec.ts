import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('http://localhost:3000/colorear/');

  await page.getByRole('heading', { name: 'Colorear - Selecciona una categoría' }).click();

});