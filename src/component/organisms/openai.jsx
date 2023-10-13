import React, { useState }  from "react"

import OpenAI from "openai"
import TextBoxMolecule from "../molecules/TextBoxMolecule"
import ButtonAtom from "../atoms/ButtonAtom/ButtonAtom"

const FormAI = () => {

    const openai = new OpenAI({
        apiKey : "",
        dangerouslyAllowBrowser: true,
    })

    const [prompt, setPrompt] = useState("")
    const [result, setResult] = useState("")
    const [loading, setLoading] = useState(false)

    const AICLick = async () => {
        setLoading(true)
        try {
            const resp = await openai.completions.create({
                model: "gpt-3.5-turbo-instruct",
                prompt: prompt,
                max_tokens: 250
            })
            setResult(resp.choices[0].text)
        
        } catch (error) {
            console.log(error);
        }
        setLoading(false)
    }

    return (
        <div>
            <TextBoxMolecule name="text_ai" label="your question is?" onChange={(e)=>setPrompt(e.target.value)}></TextBoxMolecule>

            <ButtonAtom text="AI" onClick={AICLick}></ButtonAtom>
            <p>{loading ? "AI is Loading...." : ""}</p>

            <p>Result : {result}</p>
        </div>
    )
}

export default FormAI;