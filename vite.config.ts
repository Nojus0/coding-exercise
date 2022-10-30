/// <reference types="vite/client" />
/// <reference types="vitest" />

import {defineConfig, splitVendorChunkPlugin} from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
    plugins: [
        tsconfigPaths(),
        react(),
        splitVendorChunkPlugin()
    ],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/Test/Setup.ts',
        css: true
    },
})
