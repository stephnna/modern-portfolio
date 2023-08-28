import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate third-party libraries into a vendor chunk
          vendor: ['@emailjs/browser', 'three', 'react-vertical-timeline-component', 'maath', 'react-tilt', '@react-three/fiber', 'react', 'react-dom', '@react-three/drei', 'react-router-dom', 'framer-motion']
        }
      }
    }
  }
})