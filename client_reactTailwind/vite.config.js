import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/asset': 'http://localhost:5000'  // ตั้งค่า proxy ให้เส้นทาง /api ไปที่ localhost:4000
    }
  }
})

// // vite.config.js

// export default {
//   server: {
//     proxy: {
//       '/api': 'http://localhost:4000'  // ตั้งค่า proxy ให้เส้นทาง /api ไปที่ localhost:4000
//     }
//   }
// }

