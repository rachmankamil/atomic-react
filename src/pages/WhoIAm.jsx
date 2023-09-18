import React from "react";

import { useParams } from "react-router-dom"

const WhoIAm = () => {
    const {firstname, lastname} = useParams()

    console.log(useParams);

    return (
        <>
            <h1>
                Welcome, {firstname} {lastname}
            </h1>
        </>
    )
} 

export default WhoIAm