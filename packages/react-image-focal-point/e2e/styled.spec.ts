import { test, expect } from '@playwright/test';

const BASE_URL = '/styled';

test.describe('styled', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test('should place the focal point button on X=50% and Y=50% on init', async ({ page }) => {
    const focalPointButton = page.getByRole('button', { name: 'Focal Point' });

    await expect(focalPointButton).toHaveAttribute('style', 'left: 50%; top: 50%; cursor: grab;');
  });

  test('should place the focal point button on X=36% and Y=24% when it moves X=180px and Y=120px', async ({ page }) => {
    const focalPointButton = page.getByRole('button', { name: 'Focal Point' });
    const x = 180;
    const y = 120;

    await focalPointButton.dispatchEvent('mousedown');
    await expect(focalPointButton).toHaveAttribute('style', 'left: 50%; top: 50%; cursor: grabbing;');
    await page.mouse.move(x, y);
    await expect(focalPointButton).toHaveAttribute('style', 'left: 36%; top: 24%; cursor: grabbing;');
    await focalPointButton.dispatchEvent('mouseup');
    await expect(focalPointButton).toHaveAttribute('style', 'left: 36%; top: 24%; cursor: grab;');
  });
});

test.describe('styled with margin', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}-with-margin`);
  });

  test('should place the focal point button on X=50% and Y=50% on init', async ({ page }) => {
    const focalPointButton = page.getByRole('button', { name: 'Focal Point' });

    await expect(focalPointButton).toHaveAttribute('style', 'left: 50%; top: 50%; cursor: grab;');
  });

  test('should place the focal point button on X=36% and Y=24% when it moves X=380px and Y=320px because page has 200px of margin', async ({
    page,
  }) => {
    const focalPointButton = page.getByRole('button', { name: 'Focal Point' });
    const x = 380;
    const y = 320;

    await focalPointButton.dispatchEvent('mousedown');
    await expect(focalPointButton).toHaveAttribute('style', 'left: 50%; top: 50%; cursor: grabbing;');
    await page.mouse.move(x, y);
    await expect(focalPointButton).toHaveAttribute('style', 'left: 36%; top: 24%; cursor: grabbing;');
    await focalPointButton.dispatchEvent('mouseup');
    await expect(focalPointButton).toHaveAttribute('style', 'left: 36%; top: 24%; cursor: grab;');
  });
});

test.describe('styled with scroll', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE_URL}-with-scroll`);
  });

  test('should place the focal point button on X=50% and Y=50% on init', async ({ page }) => {
    const focalPointButton = page.getByRole('button', { name: 'Focal Point' });

    await expect(focalPointButton).toHaveAttribute('style', 'left: 50%; top: 50%; cursor: grab;');
  });

  test('should place the focal point button on X=36% and Y=24% when it moves X=1180px and Y=1120px because page has 1000px of margin', async ({
    page,
  }) => {
    const focalPointButton = page.getByRole('button', { name: 'Focal Point' });
    const scrollY = 800;
    await page.mouse.wheel(0, scrollY);
    await page.waitForLoadState('load');

    await focalPointButton.dispatchEvent('mousedown');
    await expect(focalPointButton).toHaveAttribute('style', 'left: 50%; top: 50%; cursor: grabbing;');

    const x = 1180;
    const y = 1120 - scrollY;
    await page.mouse.move(x, y);
    await expect(focalPointButton).toHaveAttribute('style', 'left: 36%; top: 24%; cursor: grabbing;');
    await focalPointButton.dispatchEvent('mouseup');
    await expect(focalPointButton).toHaveAttribute('style', 'left: 36%; top: 24%; cursor: grab;');
  });
});
