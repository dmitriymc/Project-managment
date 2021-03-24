import { combineReducers } from "redux";
import { AppActions } from "../constants/actionsTypes";
import { Project } from "../Interfaces/project";
import { AppState } from "../store";

interface initialProject {
    projects: Project[];
    loading: boolean;
}

const initialState: initialProject = {
    projects: [

    ],
    loading: true
}

export const projectsReducer = (state = initialState, action: AppActions) => {
    switch(action.type) {
        case 'GET_PROJECTS':
            return {...state, loading: true};
            break;
        case 'PROJECTS_RECEIVED':
            return {...state, projects: action.json, loading: false};
            break;    
        case 'ADD_PROJECT':
            return {...state};
            break;
        case 'ADD_PROJECT_RECEIVED':
            console.log(action);
            return {
                ...state, projects: [
                    ...state.projects, action.item
                ]
            } 
            break;
        case 'REMOVE_PROJECT':
            return {
                ...state, projects: [
                    ...state.projects.filter(project => project.id !== action.id)
                ]
            }    
        default:
            return state
    }
}