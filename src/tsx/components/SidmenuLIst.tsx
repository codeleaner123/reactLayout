import React from "react"
import { NavLink } from "react-router-dom";

export default function SidemnuList({menuIcon, menuName, href}:{menuIcon:JSX.Element, menuName:string, href:string}){

    return (
        <li className="menulist"  style={{height:"80px", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                    <NavLink style={{width:"100%", height:"100%",display:"flex", alignItems:"center"}} className={({isActive, isPending}) => isActive ? "current default" : "default" } to={href}>
                    {menuIcon}
                    <p style={{marginRight:"auto", fontSize:"20px"}}>
                        {menuName}
                    </p>
                    </NavLink>
        </li>
    )
}