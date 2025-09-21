import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
   build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        Service: 'services.html',
        About: 'about.html',
        Skills: 'skills.html',
        Contact: 'contact.html',
      },
    },
  }
})