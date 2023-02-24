import { test, expect } from '@playwright/test';

const BASE_URL = '/controlled';

test.describe('controlled', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test('should place the focal point button on X=5% and Y=10% on init', async ({ page }) => {
    const focalPointButton = page.getByRole('button', { name: 'Focal Point' });

    await expect(focalPointButton).toHaveAttribute('style', 'left: 5%; top: 10%; cursor: grab;');
  });

  test('should place the focal point button on X=60% and Y=40% when it moves X=180px and Y=120px', async ({ page }) => {
    const focalPointButton = page.getByRole('button', { name: 'Focal Point' });
    const x = 180;
    const y = 120;

    await focalPointButton.dispatchEvent('mousedown');
    await expect(focalPointButton).toHaveAttribute('style', 'left: 5%; top: 10%; cursor: grabbing;');
    await page.mouse.move(x, y);
    await expect(focalPointButton).toHaveAttribute('style', 'left: 60%; top: 40%; cursor: grabbing;');
    await focalPointButton.dispatchEvent('mouseup');
    await expect(focalPointButton).toHaveAttribute('style', 'left: 60%; top: 40%; cursor: grab;');
  });
});

test.describe('controlled with margin', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}-with-margin`);
  });

  test('should place the focal point button on X=5% and Y=10% on init', async ({ page }) => {
    const focalPointButton = page.getByRole('button', { name: 'Focal Point' });

    await expect(focalPointButton).toHaveAttribute('style', 'left: 5%; top: 10%; cursor: grab;');
  });

  test('should place the focal point button on X=60% and Y=40% when it moves X=380px and Y=320px because page has 200px of margin', async ({
    page,
  }) => {
    const focalPointButton = page.getByRole('button', { name: 'Focal Point' });
    const x = 380;
    const y = 320;

    await focalPointButton.dispatchEvent('mousedown');
    await expect(focalPointButton).toHaveAttribute('style', 'left: 5%; top: 10%; cursor: grabbing;');
    await page.mouse.move(x, y);
    await expect(focalPointButton).toHaveAttribute('style', 'left: 60%; top: 40%; cursor: grabbing;');
    await focalPointButton.dispatchEvent('mouseup');
    await expect(focalPointButton).toHaveAttribute('style', 'left: 60%; top: 40%; cursor: grab;');
  });
});

test.describe('controlled with scroll', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}-with-scroll`);
  });

  test('should place the focal point button on X=5% and Y=10% on init', async ({ page }) => {
    const focalPointButton = page.getByRole('button', { name: 'Focal Point' });

    await expect(focalPointButton).toHaveAttribute('style', 'left: 5%; top: 10%; cursor: grab;');
  });

  test('should place the focal point button on X=60% and Y=40% when it moves X=1180px and Y=1120px because page has 1000px of margin', async ({
    page,
  }) => {
    const focalPointButton = page.getByRole('button', { name: 'Focal Point' });
    const scrollY = 800;
    await page.mouse.wheel(0, scrollY);
    await page.waitForLoadState('load');

    await focalPointButton.dispatchEvent('mousedown');
    await expect(focalPointButton).toHaveAttribute('style', 'left: 5%; top: 10%; cursor: grabbing;');

    const x = 1180;
    const y = 1120 - scrollY;
    await page.mouse.move(x, y);
    await expect(focalPointButton).toHaveAttribute('style', 'left: 60%; top: 40%; cursor: grabbing;');
    await focalPointButton.dispatchEvent('mouseup');
    await expect(focalPointButton).toHaveAttribute('style', 'left: 60%; top: 40%; cursor: grab;');
  });
});
