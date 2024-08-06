import { fileURLToPath, URL } from 'node:url'

import { prismjsPlugin } from 'vite-plugin-prismjs';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { LayuiVueResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['box-icon'].includes(tag),//将boxicons组件box-icon从vue组件中排除
        }
      }
    }),
    prismjsPlugin({
      languages: 'all', // 语言
      plugins: ['line-numbers', 'copy-to-clipboard'], //官网有其他功能,这里开启行数和复制按钮功能
      theme: 'okaidia', // 主题
      css: true,
    }),
    AutoImport({
      resolvers: [LayuiVueResolver()],
    }),
    Components({
      resolvers: [LayuiVueResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
