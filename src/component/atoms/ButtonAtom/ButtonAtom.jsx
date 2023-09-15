import React from "react"

const ButtonAtom = ({text, onClick}, props) => {
    
    return(
        <button style={props.style} onClick={onClick}>{text}</button>
    )
}

export default ButtonAtom