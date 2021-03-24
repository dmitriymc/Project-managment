import { combineReducers } from "redux";
import { AppActions } from "../constants/actionsTypes";
import { ProjectDeskResult } from "../Interfaces/projectDesk";
import { AppState } from "../store";

interface initialProject {
    projectDesks: ProjectDeskResult | {}
    loading: boolean
}

const initialState: initialProject = {
    projectDesks: {
        project: {},
        desks: []
    },
    loading: true
}

export const projectDesksReducer = (state = initialState, action: AppActions) => {
    switch(action.type) {
        case 'GET_PROJECT_DESKS':
            return {...state, loading: true};
            break;
        case 'PROJECT_DESKS_RECEIVED':
            return {...state, projectDesks: action.json, loading: false};
            break;
        case 'REMOVE_PROJECT_DESK':
            return {...state}
            break;
        case 'REMOVE_PROJECT_DESKS':
            return {...state}
            break;        
        default:
            return state
    }
}