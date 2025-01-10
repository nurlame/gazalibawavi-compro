import { defineConfig, loadEnv } from 'vite'
import dns from "dns"
import react from '@vitejs/plugin-react-swc'
import obfuscatorPlugin from "vite-plugin-javascript-obfuscator";
import dynamicImport from 'vite-plugin-dynamic-import';
// import { fileURLToPath } from 'url';

dns.setDefaultResultOrder('verbatim');

const env = loadEnv("mock", process.cwd(), "");

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dynamicImport(),
    obfuscatorPlugin({
      include: ["@/components/**/*.js", "src/pages/**/*.js", "src/config/redux/reducers/**/*.js", "src/utils/**/*.js", "src/*.js"],
      exclude: [/node_modules/],
      // apply: "build",
      debugger: false,
      options: {
        debugProtection: false,
      },
    }),
  ],
  server: {
    port: +env.VITE_PORT,
    host: true,
    // proxy: { //not working when separate server
    //   '/api': {
    //     target: env.VITE_BASE_URL,
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace("/api", ""),
    //   },
    // }
  },
  
})
