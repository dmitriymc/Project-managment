import  {actionsTypes, AppActions} from '../constants/actionsTypes'

export const changeCurrentProject = (project: number): AppActions => ({
    type: actionsTypes.CURRENT_PROJECT,
    project: project
})