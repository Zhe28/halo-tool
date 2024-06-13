import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import ElementPlus from 'unplugin-element-plus/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ElementPlus({
      importStyle: 'sass',
      useSource: true
    }),
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ],
  server: {
    host: '0.0.0.0',
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: id => {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      },
    }
  }
})
