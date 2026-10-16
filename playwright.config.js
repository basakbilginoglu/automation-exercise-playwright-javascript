
 // @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  // CI ortamında test.only varsa build başarısız olsun.
  forbidOnly: !!process.env.CI,

  // Testleri yalnızca CI ortamında yeniden dene.
  retries: process.env.CI ? 2 : 0,

  // CI ortamında tek worker kullan.
  workers: process.env.CI ? 1 : undefined,

  // Terminal çıktısı ve HTML raporu oluştur.
  reporter: [
    ['list'],
    ['html', {
      outputFolder: 'playwright-report',
      open: 'never',
    }],
  ],

  use: {
    // İlk yeniden denemede trace kaydet.
    trace: 'on-first-retry',

    // Başarısız testlerde ekran görüntüsü al.
    screenshot: 'only-on-failure',

    // Başarısız testlerde video kaydet.
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
