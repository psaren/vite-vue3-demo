import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from '@rollup/plugin-alias'
import path from 'path'
import vitePluginImp from 'vite-plugin-imp'

const projectRootDir = path.resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxInject: `import { h } from 'vue'\n`,
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  plugins: [
    vue(),
    alias({
      entries: [
        {
          find: '@',
          replacement: path.resolve(projectRootDir, 'src')
        }
      ]
    }),
    vitePluginImp({
      libList: [
        {
          libName: 'element-plus',
          style: (name) => {
            return`element-plus/lib/theme-chalk/${name}.css`
          }
        }
      ]
    })
  ]
})
