import { Component } from "react";
import { Redirect, Route } from "react-router";
import { User } from "./Interfaces/user";
import { Preloader } from "./Ui/Preloader";

type component = {
    component: any,
    isAuthenticaton: boolean,
    projectLoaded: boolean,
    exact: boolean,
    path: any
}

export const ProtectedRoute: React.FunctionComponent<component> = ({component: Component, isAuthenticaton, projectLoaded, ...rest}) =>{

    let route = <Route 
    {...rest} 
    render={props =>{
        if(isAuthenticaton){
            return <Component {...props} />
        }else{
            return <Redirect to={{pathname: '/login', state: {from : props.location}}} />
        }
    }}></Route>

    return (
        projectLoaded === true ? route : <Preloader/>
    )
}