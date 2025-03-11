import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';
import {viteStaticCopy} from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
      react(),
      viteStaticCopy({
        targets: [
          {
            src: 'src/shared/assets/img/*',
            dest: 'img'
          },
          {
            src: 'src/shared/assets/icons/*',
            dest: 'icons'
          }
          ,
          {
            src: 'src/shared/assets/fonts/*',
            dest: 'fonts'
          }
        ]
      })
  ],
  resolve: {
    alias: {
      "pages": path.resolve(__dirname, "src/pages"),
      "entries": path.resolve(__dirname, "src/entries"),
      "shared": path.resolve(__dirname, "src/shared"),
      '/img': path.resolve(__dirname, 'src/shared/assets/img'),
    }
  },
})
