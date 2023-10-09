import React, { useState, useRef, useCallback } from "react"

import TextBoxMolecule from "../molecules/TextBoxMolecule"
import ButtonAtom from "../atoms/ButtonAtom/ButtonAtom"
import { useNavigate } from "react-router-dom"

import { setToken } from "../../store/slices/token"

import axios from "axios" 
import { useDispatch } from "react-redux"

const Login = () => {
    const [username, setUsername] = useState('')
    const password = useRef('')
    const nav = useNavigate()
    const dispatch = useDispatch()
    
    function login(){
        axios
            .post("https://drariawan.altapro.online/login", {
                "email": username,
                "password": password.current.value
            })
            .then((result)=>{
                //set the global state
                dispatch(setToken(result.data.data.token))
                localStorage.setItem("isLogin", "true")
                nav("/admin")
            })
            .catch((err)=>{})
        
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