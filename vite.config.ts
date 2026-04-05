import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { federation } from "@module-federation/vite"

export default defineConfig({
  base: "https://mfe-container-repo.s3.ap-south-1.amazonaws.com/products/",

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
  ]
})