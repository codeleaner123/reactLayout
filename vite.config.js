import react from "@vitejs/plugin-react"
import { defineConfig } from "vite";
import path from "path"

export default defineConfig({
    server:{
        proxy:{
            "^/$":{
                target:"http://localhost:5173/",
                changeOrigin:false,
                rewrite:(urlPath) =>{ 
                    if(urlPath === "/"){
                        return urlPath + "/pages/index.html"
                    }
                    return "/pages/" + urlPath + ".html"
                }
            }
        }
    },
    plugins:[react()],
    root:"src",
    base:"/",
    publicDir:"public",
    build:{
    rollupOptions:{
        input:{
            index:"src/pages/index.html"
        },
        output:{
            dir:path.resolve(__dirname, "./public"),
            entryFileNames: `js/[name].js`,
            chunkFileNames: `js/[name].js`,
            assetFileNames:"js/[name].[ext]"
        }
    },
    outDir:"../public"
    }
})
