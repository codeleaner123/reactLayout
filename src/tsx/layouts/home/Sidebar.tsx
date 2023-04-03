import React from "react";
import {grey} from "@mui/material/colors"
import "./sidebar.css"
import SidemnuList from "../../components/SidmenuLIst";
import useSwitchElementState from "../../customHooks/useSwitchElementState";

export default function Sidebar(){
    const [sideMenuState, setSidemenuState] = useSwitchElementState();
    window.onclick = (event:Event) => {
        if(sideMenuState && event.target instanceof HTMLElement && event.target.classList[0] !== "material-symbols-outlined"){
            setSidemenuState(false)
        }
    }
    return (
    <>
    <div className="sideMenuBar" style={{backgroundColor:grey[700], position:"absolute", top:"0", width:"100px",height:"100vh", zIndex:"0"}}>
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
    <div style={{marginTop:"10px", marginLeft:"10px"}}>
    <span onClick={() => {setSidemenuState()}} style={{fontSize:"50px"}} className="material-symbols-outlined">list</span>
    </div>
    <div style={{display:sideMenuState ? "block" : "none",backgroundColor:grey[700], position:"absolute", top:"0", width:"100px",height:"100vh", zIndex:"0"}}>
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
    </>
    
    )
}
