import tailwindcss from '@tailwindcss/vite';

export default {
  plugins: [tailwindcss()],
  build: {
    // Enable source maps for debugging
    sourcemap: true, 
    rollupOptions: {
      output: {
        // Cache-busting for entry files
        entryFileNames: '[name].[hash].js', 
        // Cache-busting for chunk files
        chunkFileNames: '[name].[hash].js', 
        // Original file names for assets
        assetFileNames: '[name].[ext]', 
      },
    },
  },
  server: {
    open: true, // Open browser on server start
    port: 3000, // Specify port number
  },
};
