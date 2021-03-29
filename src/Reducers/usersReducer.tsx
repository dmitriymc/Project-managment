import { combineReducers } from "redux";
import { AppActions } from "../constants/actionsTypes";
import { ProjectDesk } from "../Interfaces/projectDesk";
import { User } from "../Interfaces/user";
import { AppState } from "../store";

interface initialUser {
   users: User[],
   loading: boolean
}

const initialState: initialUser = {
   users: [],
   loading: true
}

export const usersReducer = (state = initialState, action: AppActions) => {
    switch(action.type) {
        case 'GET_USERS':
            return {...state, loading: true};
            break;
        case 'USERS_RECEIVED':
            return {...state, users: action.json, loading: false};
            break;    
        case 'ADD_USER':
            return {...state}
            break;  
        case 'ADD_USER_RECEIVED':
            return {...state, users: [...state.users, action.json]};
            break;
        case 'UPDATE_USER':
            return {...state}
        case 'UPDATE_USER_RECEIVED':
            let index: number = state.users.findIndex(item => item.id === action.json.id);
            let newArray = [...state.users];
            newArray.splice(index, 1, action.json);
            return {...state, users: newArray}
        default:
            return state
    }
}