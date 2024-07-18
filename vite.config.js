import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // veya belirli bir IP adresi
    port: 5174, // port numarasını değiştirebilirsiniz
  },
})
