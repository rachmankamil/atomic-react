import React from "react";

import { Route, redirect as Rd, redirect } from "react-router-dom";

const PrivateRoute = ({component: Component}) => {
    if (localStorage.getItem("isLogin")==="true"){
        return (<Component ></Component>)
    } else {
        //TODO:redirect to login
    }
}

export default PrivateRoute