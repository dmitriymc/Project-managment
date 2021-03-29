import { AppActions } from "../constants/actionsTypes";
import { Alert } from "../Interfaces/alert";

interface initialProject {
    currentProject: number | string,
    projectLoaded: boolean,
    actions: Alert[]
}

const initialProject: initialProject = {
    currentProject: 0,
    projectLoaded: false,
    actions: []
}

export const mainReducer = (state = initialProject, action: AppActions) => {
    switch(action.type) {
        case 'CURRENT_PROJECT':
            return {...state, currentProject: action.project}
            break;
        case 'PROJECT_LOADED':
            return {...state, projectLoaded: true}
            break;
        case 'ACTION':
            return {...state, actions: [...state.actions, action.json]}      
        default:
            return state    
    }
}