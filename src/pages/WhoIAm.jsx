import React from "react";

import { useParams } from "react-router-dom"

import FormAI from "../component/organisms/openai";

const WhoIAm = () => {
    const {firstname, lastname} = useParams()

    console.log(useParams);

    return (
        <>
            <h1>
                Welcome, {firstname} {lastname}
            </h1>

            <FormAI></FormAI>

        </>
    )
} 

export default WhoIAm