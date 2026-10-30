import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Esto obliga a Vite a pre-empaquetar estas librerías juntas
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
  },
  resolve: {
    // Esto asegura que solo haya una copia de React en el proyecto
    dedupe: ['react', 'react-dom'],
  },
})