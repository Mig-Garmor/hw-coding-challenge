import { defineConfig } from 'vite';
import { loadEnv } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
// Importing base config
import baseConfig from './vite.config.base.js';
// Importing extended config
import extendedConfig from './vite.config.extended.js';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return{
    // Merge base and extended configurations
    ...baseConfig,
    ...extendedConfig,

    // Configure path resolution
    resolve: {
      alias: {
        // Set up alias for the src directory
        '@': resolve(__dirname, '../src'),
      },
    },

    plugins: [
      // Remove duplicate Vue plugin
      ...baseConfig.plugins.filter((plugin) => plugin.name !== 'vite:vue'),
      ...extendedConfig.plugins,
      vue({
        //Template compiler options
        template: {
          compilerOptions: {
            compilerOptions: {
              //Convention for custom elements (not Vue components or html tags)
              isCustomElement: (tag) => tag.startsWith('custom-'),
            },
          },
        },
      }),
    ],

    // Environment variables
    env: {
      // Use environment variable for API URL
      API_URL: env.VITE_API_URL || 'http://localhost:3000/api',
    },

    // Additional server and build options can go here
  };
});
