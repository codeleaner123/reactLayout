import React from "react";
import {grey} from "@mui/material/colors"
import "./sidebar.css"
import SidemnuList from "../../components/SidmenuLIst";

export default function Sidebar(){
    return (
    <div style={{backgroundColor:grey[700], position:"absolute", top:"0", width:"100px",height:"100vh", zIndex:"0"}}>
        <div style={{position:"absolute", width:"180%", left:"30%",backgroundColor:grey[800],height:"100%"}}>
            <ul style={{marginTop:"100px", color:"white"}}>
                <SidemnuList menuIcon={<span style={{marginLeft:"10px", fontSize:"30px", marginRight:"auto"}}  className="material-symbols-outlined">home</span>} menuName={"HOME"} href={"/"} />
                <SidemnuList menuIcon={<span style={{marginLeft:"10px", fontSize:"30px", marginRight:"auto"}}  className="material-symbols-outlined">description</span>} menuName={"Alcohol"} href={"/alcohol"} />
                <SidemnuList menuIcon={<span style={{marginLeft:"10px", fontSize:"30px", marginRight:"auto"}}  className="material-symbols-outlined">assignment</span>} menuName={"Document"} href={"/document"} />
                <SidemnuList menuIcon={<span style={{marginLeft:"10px", fontSize:"30px", marginRight:"auto"}}  className="material-symbols-outlined">account_circle</span>} menuName={"Profile"} href={"/profile"} />
                <SidemnuList menuIcon={<span style={{marginLeft:"10px", fontSize:"30px", marginRight:"auto"}}  className="material-symbols-outlined">group_add</span>} menuName={"team"} href={"/team"} />
            </ul>
        </div>
    </div>
    )
}
