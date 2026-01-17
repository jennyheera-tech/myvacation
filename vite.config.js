import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/myvacation/', // ⭐️ 이게 핵심
    plugins: [react()],
    build: {
        outDir: 'docs',
        emptyOutDir: true,
    },
});
