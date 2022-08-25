import { defineConfig } from 'cypress';

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    supportFile: 'cypress/support/e2e.ts',
    baseUrl: 'https://www.saucedemo.com/',
    // defaultCommandTimeout: 6000,
  },
});
