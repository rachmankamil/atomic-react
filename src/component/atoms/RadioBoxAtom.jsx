import React from "react"

const RadioBoxAtom = ({item, name}) => {
    return (
        item.map(value => {
            return (
                <>
                    <input type="radio" name={name} id="" value={value} /> {value}
                </>    
            )
        })
    )
}

export default RadioBoxAtom