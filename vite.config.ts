import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductsPage": "./src/ProductsPage.jsx"
      },
      shared: ["react", "react-dom"]
    })
  ],
  server: {
    cors: true,
    port: 3001,
     headers: {
    "Access-Control-Allow-Origin": "*"
  }
  }
});