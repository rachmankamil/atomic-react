import React from "react"

const TextBoxAtom = ({name, placeholder}) => {
    return (
        <input type="text" name={name} placeholder={placeholder}/>
    )
}

export default TextBoxAtom