import  {actionsTypes, AppActions} from '../constants/actionsTypes'

export const changeCurrentProject = (project: number): AppActions => ({
    type: actionsTypes.CURRENT_PROJECT,
    project: project
})

export const projectLoaded = (): AppActions => ({
    type: actionsTypes.PROJECT_LOADED,
})