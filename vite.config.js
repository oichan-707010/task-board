import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages は https://<user>.github.io/task-board/ で配信されるため
  base: '/task-board/',
})
