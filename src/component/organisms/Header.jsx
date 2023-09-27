import React from "react"
import { useSelector } from "react-redux"
import { getCount } from "../../store/slices/counter"

const Header = () => {
    const count = useSelector(getCount)

    return(
        <header>
            <div>
                <center>{count}</center>
            </div>
        </header>
    )
}

export default Header