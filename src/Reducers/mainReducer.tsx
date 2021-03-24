import { AppActions } from "../constants/actionsTypes";

interface initialProject {
    currentProject: number | string,
}

const initialProject: initialProject = {
    currentProject: 0
}

export const mainReducer = (state = initialProject, action: AppActions) => {
    switch(action.type) {
        case 'CURRENT_PROJECT':
            return {...state, currentProject: action.project}
            break;
        default:
            return state    
    }
}