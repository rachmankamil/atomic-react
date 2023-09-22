import React from "react"

const TextBoxAtom = ({name, placeholder, value, onChange, refAlias, ...props}) => {
    return (
        <input type="text" name={name} placeholder={placeholder} value={value} ref={refAlias} onChange={onChange} {...props}/>
    )
}

export default TextBoxAtom