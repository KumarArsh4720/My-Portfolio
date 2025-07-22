import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),              // Landing page
        about: resolve(__dirname, 'pages/about.html'),       // Sub-page
        contact: resolve(__dirname, 'pages/contact.html')    // Sub-page
      }
    }
  }
})
