import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  use: { baseURL: 'http://localhost:3000', trace: 'on' },
  webServer: {
    command: 'npx http-server app -p 3000 -s',
    url: 'http://localhost:3000',
    reuseExistingServer: true,
  },
});
