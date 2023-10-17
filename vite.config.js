import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import webfontDownload from 'vite-plugin-webfont-dl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    webfontDownload([
      'https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500&family=DM+Serif+Display&family=Oswald:wght@300&display=swap&family=Material+Symbols+Outlined',
    ]),
  ],
  test: {
    globals: true,
    include: ['**/test.{js,jsx}'],
  },
})
