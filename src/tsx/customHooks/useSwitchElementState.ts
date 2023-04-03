import {useState} from "react"

export default function useSwitchElementState():[boolean, () => void]{
    const [elementState, setState] = useState(false);
    const switchState = () => {
        setState(!elementState)
    }
    return [elementState, switchState]
}