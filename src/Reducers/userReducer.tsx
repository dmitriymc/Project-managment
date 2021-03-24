import { combineReducers } from "redux";
import { AppActions } from "../constants/actionsTypes";
import { ProjectDesk } from "../Interfaces/projectDesk";
import { User } from "../Interfaces/user";
import { AppState } from "../store";

interface initialUser {
   user: User | null;
   isLogin: boolean;
}

const initialState: initialUser = {
    user: null,
    isLogin: false
}

export const userReducer = (state = initialState, action: AppActions) => {
    switch(action.type) {
        case 'USER_LOGIN':
            return {...state};
            break;
        case 'USER_LOGIN_RECEIVED':
            return {...state, user: action.json, isLogin: (action.json ? true : false)};
            break;    
        case 'USER_LOGOUT': 
            localStorage.removeItem('id');
            return {...state, user: null, isLogin: false}
            break;
        case 'GET_USER':
            return {...state}   
        default:
            return state
    }
}