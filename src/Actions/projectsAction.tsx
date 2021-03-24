import  {actionsTypes, AppActions} from '../constants/actionsTypes'
import { Project } from '../Interfaces/project'


export const getProjects = () => ({
    type: actionsTypes.GET_PROJECTS
})

export const projectsReceived = (projects: Project[]): AppActions => ({
    type: actionsTypes.PROJECTS_RECEIVED,
    json: projects
})

export const addProjectReceived = (project: Project): AppActions => ({
    type: actionsTypes.ADD_PROJECT_RECEIVED,
    item: project
})

export const addProject = (project: Project): AppActions => ({
    type: actionsTypes.ADD_PROJECT,
    item: project
})

export const updateProject = (project: Project, id: number) => ({
    type: actionsTypes.UPDATE_PROJECT,
    id: id,
    item: project
})

export const removeProject = (id: number) => ({
    type: actionsTypes.REMOVE_PROJECT,
    id: id
})