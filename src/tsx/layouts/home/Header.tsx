import React from "react"
import { AppBar, Avatar, MenuList, MenuItem,ListItemIcon, ListItemText} from "@mui/material"
import useSwitchElementState from "../../customHooks/useSwitchElementState"
import "./header.css"

export default function Header(){
    const [listState, switchListState] = useSwitchElementState();
    window.onclick = (event:Event) => {
        if(listState === true && event.target instanceof HTMLElement && !(event.target.classList[0] === "MuiAvatar-root"))
            switchListState(false);
        }
    return (
        <AppBar position="static" sx={{height:"80px", position:"relative",zIndex:"100", display:"flex", flexDirection:"row", alignItems:"center"}}>
                <div style={{marginLeft:"20px"}}>
                <h3>Alcohol APP</h3>
                </div>
                <div style={{position:"relative",marginRight:"10%",marginLeft:"auto",}}>
                <Avatar onClick={() => {switchListState()}} sx={{cursor:"pointer"}}>G</Avatar>
                <div className="icon-list" style={{display:listState ? "block" : "none",borderRadius:"10px",position:"absolute", right:"0px", backgroundColor:"white", border:"1px solid gray"}}>
                <MenuList>
                <MenuItem>
                    <ListItemIcon >
                        <span className="material-symbols-outlined">notifications</span>
                    </ListItemIcon>
                    <ListItemText sx={{color:"black"}}>notifications</ListItemText>
                </MenuItem>
                </MenuList>
                </div>
                </div>
        </AppBar>
    )
}