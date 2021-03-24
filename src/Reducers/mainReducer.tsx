import { AppActions } from "../constants/actionsTypes";

interface initialProject {
    currentProject: number | string,
    projectLoaded: boolean
}

const initialProject: initialProject = {
    currentProject: 0,
    projectLoaded: false
}

export const mainReducer = (state = initialProject, action: AppActions) => {
    switch(action.type) {
        case 'CURRENT_PROJECT':
            return {...state, currentProject: action.project}
            break;
        case 'PROJECT_LOADED':
            return {...state, projectLoaded: true}
            break;    
        default:
            return state    
    }
}