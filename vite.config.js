import {
  defineConfig
} from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
console.log("Vite GGGGGGGGGGGG")
export default defineConfig({
  plugins: [uni()],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
});
