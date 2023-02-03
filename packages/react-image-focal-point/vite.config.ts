import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: "src/index.ts",
      name: "ReactImageFocalPoint",
      fileName: (format) => `react-image-focal-point.${format}.js`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
