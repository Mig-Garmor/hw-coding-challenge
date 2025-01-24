import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/', // Base public path
  plugins: [
    vue() // Include Vue plugin
  ]
});
