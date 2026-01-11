import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import markdown from 'vite-plugin-md'
import Inspect from 'vite-plugin-inspect'
import { resolve } from 'path'
import type { UserConfig } from 'vite'

const root = resolve(__dirname)

// https://vitejs.dev/config/
const config: UserConfig = defineConfig({
  publicDir: 'assets',
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    markdown(),
    Inspect(),
  ],
  resolve: {
    alias: {
      '@': resolve(root, 'src'),
      '$': resolve(root, 'wailsjs'),
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    open: false,
    cors: true,
  },
  build: {
    outDir: 'dist',
  },
})

export default config
