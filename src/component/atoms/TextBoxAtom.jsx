import React from "react"

const TextBoxAtom = ({name, placeholder, value}) => {
    return (
        <input type="text" name={name} placeholder={placeholder} value={value}/>
    )
}

export default TextBoxAtom