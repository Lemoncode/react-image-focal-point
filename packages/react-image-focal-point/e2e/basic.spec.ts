import { test, expect } from '@playwright/test';

test.describe('basic', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should place the focal point button on X=50% and Y=50% on init', async ({ page }) => {
    const focalPointButton = page.getByRole('button', { name: 'Focal Point' });

    await expect(focalPointButton).toHaveAttribute('style', 'left: 50%; top: 50%; cursor: grab;');
  });

  test('should place the focal point button on X=60% and Y=40% when it moves X=180px and Y=120px', async ({ page }) => {
    const focalPointButton = page.getByRole('button', { name: 'Focal Point' });
    const x = 180;
    const y = 120;

    await focalPointButton.dispatchEvent('mousedown');
    await expect(focalPointButton).toHaveAttribute('style', 'left: 50%; top: 50%; cursor: grabbing;');
    await page.mouse.move(x, y);
    await expect(focalPointButton).toHaveAttribute('style', 'left: 60%; top: 40%; cursor: grabbing;');
    await focalPointButton.dispatchEvent('mouseup');
    await expect(focalPointButton).toHaveAttribute('style', 'left: 60%; top: 40%; cursor: grab;');
  });
});

test.describe('basic with margin', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/basic-with-margin');
  });

  test('should place the focal point button on X=50% and Y=50% on init', async ({ page }) => {
    const focalPointButton = page.getByRole('button', { name: 'Focal Point' });

    await expect(focalPointButton).toHaveAttribute('style', 'left: 50%; top: 50%; cursor: grab;');
  });

  test('should place the focal point button on X=60% and Y=40% when it moves X=380px and Y=320px because page has 200px of margin', async ({
    page,
  }) => {
    const focalPointButton = page.getByRole('button', { name: 'Focal Point' });
    const x = 380;
    const y = 320;

    await focalPointButton.dispatchEvent('mousedown');
    await expect(focalPointButton).toHaveAttribute('style', 'left: 50%; top: 50%; cursor: grabbing;');
    await page.mouse.move(x, y);
    await expect(focalPointButton).toHaveAttribute('style', 'left: 60%; top: 40%; cursor: grabbing;');
    await focalPointButton.dispatchEvent('mouseup');
    await expect(focalPointButton).toHaveAttribute('style', 'left: 60%; top: 40%; cursor: grab;');
  });
});

test.describe('basic with scroll', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/basic-with-scroll');
  });

  test('should place the focal point button on X=50% and Y=50% on init', async ({ page }) => {
    const focalPointButton = page.getByRole('button', { name: 'Focal Point' });

    await expect(focalPointButton).toHaveAttribute('style', 'left: 50%; top: 50%; cursor: grab;');
  });

  test('should place the focal point button on X=60% and Y=40% when it moves X=1180px and Y=1120px because page has 1000px of margin', async ({
    page,
  }) => {
    const focalPointButton = page.getByRole('button', { name: 'Focal Point' });
    const x = 1180;
    const y = 1120;
    const rect = await focalPointButton.boundingBox();

    await page.mouse.wheel(0, rect?.y! - 300);
    // await focalPointButton.focus();
    await focalPointButton.dispatchEvent('mousedown');
    await expect(focalPointButton).toHaveAttribute('style', 'left: 50%; top: 50%; cursor: grabbing;');
    // const x2 = rect?.x! + 180;
    // const y2 = rect?.y! + 180;
    await page.mouse.move(x, y);
    await expect(focalPointButton).toHaveAttribute('style', 'left: 60%; top: 40%; cursor: grabbing;');
    await focalPointButton.dispatchEvent('mouseup');
    await expect(focalPointButton).toHaveAttribute('style', 'left: 60%; top: 40%; cursor: grab;');
  });
});
