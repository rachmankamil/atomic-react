import React from "react"
import ButtonAtom from "../atoms/ButtonAtom/ButtonAtom"
import { decrement, increment } from "../../store/slices/counter"
import { useDispatch } from "react-redux"

const ControlCounter = () => {
    const dispatch = useDispatch()

    return (
        <div>
            <ButtonAtom text="plus" onClick={() => dispatch(increment())}/>
            <ButtonAtom text="minus" onClick={() => dispatch(decrement())}/>
        </div>
    )
}

export default ControlCounter