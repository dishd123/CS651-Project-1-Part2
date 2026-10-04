import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { cpSync } from 'fs';

const staticFiles = ['index.html', 'about.html', 'contact.html'];

export default defineConfig({
  plugins: [react(), {
    name: 'copy-static-pages',
    closeBundle() {
      // Vite builds the React entry points; copy the traditional static pages alongside them.
      staticFiles.forEach((file) => cpSync(resolve(process.cwd(), file), resolve(process.cwd(), 'dist', file)));
      cpSync(resolve(process.cwd(), 'css'), resolve(process.cwd(), 'dist', 'css'), { recursive: true });
      cpSync(resolve(process.cwd(), 'js'), resolve(process.cwd(), 'dist', 'js'), { recursive: true });
    }
  }],
  build: {
    rollupOptions: {
      input: {
        app: resolve(process.cwd(), 'app/index.html'),
        login: resolve(process.cwd(), 'login/index.html')
      }
    }
  }
});
