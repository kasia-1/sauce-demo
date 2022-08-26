import { defineConfig } from 'cypress';
import setupNodeEvents from './cypress/plugins/index';

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    supportFile: 'cypress/support/e2e.ts',
    baseUrl: 'https://www.saucedemo.com/',
    setupNodeEvents
  },
});