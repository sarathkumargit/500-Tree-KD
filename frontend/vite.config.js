import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],

  build: {
    // Raise the chunk-size warning threshold (default 500kB is too aggressive for image-heavy sites)
    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      output: {
        // Split vendor code into a separate long-cached chunk
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          icons:  ['lucide-react'],
        },
      },
    },
  },
})
