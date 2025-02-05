import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint2';

// https://vite.dev/config/
export default defineConfig({
  base: '/greenapi-messenger-react-ts/',
  plugins: [react(), eslint()],
});
