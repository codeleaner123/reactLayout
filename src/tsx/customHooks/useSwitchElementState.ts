import {useState} from "react"

export default function useSwitchElementState():[boolean, (state?:boolean) => void]{
    const [elementState, setState] = useState(false);
    const switchState = (state?:boolean) => {
        if(state !== undefined){
            setState(state)
        }else{
            setState(!elementState)
        }
    }
    return [elementState, switchState]
}