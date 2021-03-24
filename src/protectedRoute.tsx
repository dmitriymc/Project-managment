import { Component } from "react";
import { Redirect, Route } from "react-router";
import { User } from "./Interfaces/user";

type component = {
    component: any,
    isAuthenticaton: boolean,
    exact: boolean,
    path: any
}

export const ProtectedRoute: React.FunctionComponent<component> = ({component: Component, isAuthenticaton, ...rest}) =>{
    return (
    <Route 
    {...rest} 
    render={props =>{
        if(isAuthenticaton){
            return <Component {...props} />
        }else{
            return <Redirect to={{pathname: '/login', state: {from : props.location}}} />
        }
    }}></Route>
    )
}