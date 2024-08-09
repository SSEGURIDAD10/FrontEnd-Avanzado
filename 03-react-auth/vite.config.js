import { defineConfig } from "vite"; // Importa la función para definir la configuración de Vite
import react from "@vitejs/plugin-react"; // Importa el plugin de React para Vite
import path from "path"; // Importa el módulo path para resolver rutas

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // Configura el plugin de React
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Define un alias para la carpeta src
    },
  },
});
