import React from "react"
import { AppBar, Box,Avatar } from "@mui/material"


export default function Header(){
    return (
        <AppBar position="static" sx={{height:"80px", position:"relative",zIndex:"100", display:"flex", flexDirection:"row", alignItems:"center"}}>
                <div style={{marginLeft:"20px"}}>
                <h3>Sample</h3>
                </div>
                <Avatar sx={{marginRight:"30px",marginLeft:"auto"}}>G</Avatar>
        </AppBar>
    )
}