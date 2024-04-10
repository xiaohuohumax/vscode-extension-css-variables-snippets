import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  envDir: 'env',
  resolve: {
    alias: {
      '#': path.resolve(__dirname, ''),
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    minify: false,
    sourcemap: true,
    rollupOptions: {
      preserveEntrySignatures: 'strict',
      input: './src/extension.ts',
      external: ['vscode'],
      output: [
        {
          dir: 'out',
          format: 'cjs',
          entryFileNames: '[name].js'
        }
      ]
    }
  }
});