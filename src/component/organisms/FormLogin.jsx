import React, { useState, useRef } from "react"

import TextBoxMolecule from "../molecules/TextBoxMolecule"
import ButtonAtom from "../atoms/ButtonAtom/ButtonAtom"

const Login = () => {
    const [username, setUsername] = useState('')
    const password = useRef('')

    function login(){
        alert("username:"+username+" <====> password:"+password.current.value)
        localStorage.setItem("isLogin", "true")
    }

    return(
        <div>
            {/* controlled component, all the proces is handled by react */}
            <TextBoxMolecule name="username" label="Username" value={username} onChange={(element)=>{setUsername(element.target.value)}} ></TextBoxMolecule>
            {/* uncontrolled component, still need DOM for document selector using ref */}
            <TextBoxMolecule name="password" label="Password" refAlias={password} ></TextBoxMolecule>

            <ButtonAtom text="Login" onClick={login}></ButtonAtom>
        </div>
    )
}

export default Login