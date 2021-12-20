import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteFonts from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteFonts({
      google: {
        families: [
          {
            name: 'Poppins',
            styles: 'ital,wght@0,400;0,700;0,800;1,400;1,700;1,800'
          },
          {
            name: 'Open Sans',
            styles: 'ital,wght@0,400;0,700;1,400;1,700'
          }
        ] 
      }
    })
  ]
})
