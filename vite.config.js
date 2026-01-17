import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: './',
    plugins: [react()],
    build: {
        outDir: 'docs', // ⭐️ 이 줄이 핵심
        emptyOutDir: true,
    },
});
