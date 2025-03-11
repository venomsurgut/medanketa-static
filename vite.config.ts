import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "pages": path.resolve(__dirname, "src/pages"),
      "entries": path.resolve(__dirname, "src/entries"),
      "shared": path.resolve(__dirname, "src/shared"),
      '/img': path.resolve(__dirname, 'src/shared/assets/img'),
    }
  },
})
