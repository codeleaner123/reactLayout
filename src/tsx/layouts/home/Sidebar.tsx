import React from "react";
import {grey} from "@mui/material/colors"
import { Link, NavLink } from "react-router-dom";
import "./sidebar.css"

export default function Sidebar(){
    return (
    <div style={{backgroundColor:grey[700], position:"absolute", top:"0", width:"100px",height:"100vh", zIndex:"0"}}>
        <div style={{position:"absolute", width:"180%", left:"30%",backgroundColor:grey[800],height:"100%"}}>
            <ul style={{marginTop:"100px", color:"white"}}>
                <li style={{height:"40px",flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                
                    <NavLink style={{width:"100%", height:"100%",display:"flex", alignItems:"center"}} className={({isActive, isPending}) => isActive ? "current default" : "default" } to={"/"}>
                    <span style={{fontSize:"30px", marginRight:"auto"}} className="material-symbols-outlined">home</span>
                    <p style={{marginRight:"auto"}}>
                        HOME
                    </p>
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>
    )
}
