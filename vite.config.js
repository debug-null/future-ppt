import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginForArco from "@arco-plugins/vite-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginForArco({style:'css'})],
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
    alias: {
      "@": "/src"
    }
  },
  css: {
    //css预处理
    preprocessorOptions: {
      scss: {
        /*
				引入var.scss全局预定义变量，
				如果引入多个文件，可以使用
				'@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
				这种格式
				 */
        additionalData: '@import "@/style/global.scss";'
      }
    }
  }
});
