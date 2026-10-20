import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  server: {
    host: '0.0.0.0',
    port: 12000,
    strictPort: true,
    allowedHosts: ['visionenergy.goldenbillions.com']
  },
  preview: {
    host: '0.0.0.0',
    port: 12000,
  },
})
