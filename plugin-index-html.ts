import { Plugin } from "vite";
import fs from "fs";
import path from "path";

export function pluginIndexHtml(): Plugin {
  return {
    name: "vite:index-html",
    generateBundle(options, bundle) {
      const distDir = path.resolve(options.dir || 'dist');
      const newIndexHtmlPath = path.resolve(distDir, '200.html');
      const indexHtmlPath = path.resolve(distDir, 'index.html');

      // Check if index.html exists in the dist directory
      if (fs.existsSync(indexHtmlPath)) {
          try {
              // Rename index.html to 200.html
              fs.renameSync(indexHtmlPath, newIndexHtmlPath);
          } catch (e) {
              console.error('Error renaming index.html to 200.html:', e);
          }
      } else {
          console.warn('index.html not found in dist directory');
      }
  },
    enforce: "post",
    apply: "build",
  };
}