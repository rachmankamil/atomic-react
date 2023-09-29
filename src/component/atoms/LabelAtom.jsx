import React from "react"

const LabelAtom = ({name, title}) => {
    const labelStyle = {
        fontSize : "15pt",
        color: "white",
        padding: "0 10px"
    }
    return (
        title ?
        <label htmlFor={name} style={labelStyle}>{title}</label> :
        <></>
    )
}

export default LabelAtom