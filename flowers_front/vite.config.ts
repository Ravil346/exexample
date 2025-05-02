import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        postcss: {
            plugins: [tailwindcss()],
        },
    },
    server: {
        watch: {
            usePolling: true,
        },
        allowedHosts: [
            'localhost',
            '127.0.0.1',
            'testitest.forum.ru', // Добавляем ваш хост
          ],
    },
    build: {
        outDir: "dist",
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
