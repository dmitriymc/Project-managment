import { Task } from "redux-saga";
import { AppActions } from "../constants/actionsTypes";
import { Card } from "../Interfaces/card";

interface initialTasks {
   card: Card | null,
   loading: boolean
}

const initialState: initialTasks = {
    card: null,
    loading: true
}

export const cardReducer = (state = initialState, action: AppActions) => {
    switch(action.type) {
        case 'GET_CARD':
            return {...state, loading: true}
            break;
        case 'CARD_RECEIVED':
            return {...state, card: action.json, loading: false}
            break;
        case 'EDIT_CARD':
            return {...state}
            break;
        case 'EDIT_CARD_RECEIVED':
            return {...state, card: action.json}
            break;                      
        default:
            return state
    }
}