import React from "react"

const ButtonAtom = ({text}, props) => {
    
    return(
        <button style={props.style}>{text}</button>
    )
}

export default ButtonAtom