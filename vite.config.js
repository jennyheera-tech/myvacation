// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: './', // master 루트에서 배포할 때
    plugins: [react()],
});
