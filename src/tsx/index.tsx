import React from "react"
import {createRoot} from "react-dom/client"
import App from "./app";
import "../css/index.css"
const rootId = document.getElementById("root");
if(rootId){
    createRoot(rootId).render(<App />)
}