import  {actionsTypes, AppActions} from '../constants/actionsTypes'
import { ProjectDesk, ProjectDeskResult } from '../Interfaces/projectDesk'

export const getProjectDesks = (id: number) => ({
    type: actionsTypes.GET_PROJECT_DESKS,
    json: id
})

export const projectDesksReceived = (projectDesks: ProjectDeskResult): AppActions => ({
    type: actionsTypes.PROJECT_DESKS_RECEIVED,
    json: projectDesks
})