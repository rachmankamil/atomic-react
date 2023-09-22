import React, { useEffect } from "react";

import { Route, useNavigate } from "react-router-dom";

const PrivateRoute = ({component: Component}) => {
    const nav = useNavigate()
    useEffect(()=>{
        if (localStorage.getItem("isLogin")!=="true"){
            nav("/login")
        }
    })
    
    return (<Component ></Component>)
}

export default PrivateRoute