import { URL, fileURLToPath } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      imports: ['vue', 'vue-router'],
      dirs: ['./composables'],
      vueTemplate: true
    }),
    Components({
      dirs: [
        './components/'
        // Component folders that should be auto-imported
      ],
      extensions: ['vue', '.stories.ts', '.stories.js'],
      dts: true,
      directoryAsNamespace: true,
    })
  ], 
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./', import.meta.url))
      // Add any other aliases you use in your code base
      // https://nuxt.com/docs/api/configuration/nuxt-config/#alias
    }
  }
})