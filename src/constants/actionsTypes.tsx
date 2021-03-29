import { Task } from "redux-saga";
import { Alert } from "../Interfaces/alert";
import { Card } from "../Interfaces/card";
import { Project } from "../Interfaces/project"
import { ProjectDesk, ProjectDeskResult } from "../Interfaces/projectDesk";
import { User } from "../Interfaces/user";

export enum actionsTypes {

    PROJECT_LOADED = "PROJECT_LOADED",
    CURRENT_PROJECT = "CURRENT_PROJECT",

    GET_PROJECTS = "GET_PROJECTS",
    PROJECTS_RECEIVED = "PROJECTS_RECEIVED",
    ADD_PROJECT = "ADD_PROJECT",
    ADD_PROJECT_RECEIVED = "ADD_PROJECT_RECEIVED",
    UPDATE_PROJECT = "UPDATE_PROJECT",
    REMOVE_PROJECT = "REMOVE_PROJECT",

    GET_PROJECT_DESKS = "GET_PROJECT_DESKS",
    PROJECT_DESKS_RECEIVED = "PROJECT_DESKS_RECEIVED",
    ADD_PROJECT_DESK = "ADD_PROJECT_DESK",
    ADD_PROJECT_DESK_RECEIVED = "ADD_PROJECT_DESK_RECEIVED",
    UPDATE_PROJECT_DESK = "UPDATE_PROJECT_DESK",
    REMOVE_PROJECT_DESK = "REMOVE_PROJECT_DESK",
    REMOVE_PROJECT_DESKS = "REMOVE_PROJECT_DESKS",

    USER_LOGIN = "USER_LOGIN",
    USER_LOGIN_RECEIVED = "USER_LOGIN_RECEIVED",
    USER_LOGOUT = "USER_LOGOUT",
    GET_USER = 'GET_USER',

    GET_USERS = "GET_USERS",
    USERS_RECEIVED = "USERS_RECEIVED",
    ADD_USER = "ADD_USER",
    ADD_USER_RECEIVED = "ADD_USER_RECEIVED",
    UPDATE_USER = "UPDATE_USER",
    UPDATE_USER_RECEIVED = "UPDATE_USER_RECEIVED",
    REMOVE_USER = "REMOVE_USER",

    GET_TASKS = "GET_TASKS",
    TASKS_RECEIVED = "TASKS_RECEIVED",
    ADD_TASK = "ADD_TASK",
    ADD_TASK_RECEIVED = "ADD_TASK_RECEIVED",
    REMOVE_CARD = "REMOVE_CARD",
    REMOVE_CARD_RECEIVED = "REMOVE_CARD_RECEIVED",
    CHANGE_CARD_POSITION = "CHANGE_CARD_POSITION",
    CHANGE_CARD_POSITION_RECEIVED = "CHANGE_CARD_POSITION_RECEIVED",

    GET_CARD = "GET_CARD",
    CARD_RECEIVED = "CARD_RECEIVED",
    EDIT_CARD = "EDIT_CARD",
    EDIT_CARD_RECEIVED = "EDIT_CARD_RECEIVED",

    ACTION = "ACTION"


}

export interface ProjectLoaded {
    type: typeof actionsTypes.PROJECT_LOADED
}

export interface CurrentProject {
    type: typeof actionsTypes.CURRENT_PROJECT,
    project: number
}

export interface GetProjectsAction {
    type: typeof actionsTypes.GET_PROJECTS,
}

export interface ProjectsReceived {
    type: typeof actionsTypes.PROJECTS_RECEIVED,
    json: Project[]
}

export interface AddProjectAction {
    type: typeof actionsTypes.ADD_PROJECT,
    item: Project
}

export interface AddProjectReceived {
    type: typeof actionsTypes.ADD_PROJECT_RECEIVED,
    item: Project
}

export interface RemoveProject {
    type: typeof actionsTypes.REMOVE_PROJECT,
    id: number
}

export interface GetProjectDesks {
    type: typeof actionsTypes.GET_PROJECT_DESKS,
    json: number
}

export interface ProjectDesksReceived {
    type: typeof actionsTypes.PROJECT_DESKS_RECEIVED,
    json: ProjectDeskResult
}

export interface ProjectDeskRemoved {
    type: typeof actionsTypes.REMOVE_PROJECT_DESK,
    json: number[]
}

export interface ProjectDesksRemoved {
    type: typeof actionsTypes.REMOVE_PROJECT_DESKS,
    json: number
}

export interface UserLogin {
    type: typeof actionsTypes.USER_LOGIN,
    json: User
}

export interface UserLoginReceived {
    type: typeof actionsTypes.USER_LOGIN_RECEIVED,
    json: User
}

export interface UserLogout {
    type: typeof actionsTypes.USER_LOGOUT,
}

export interface GetUser {
    type: typeof actionsTypes.GET_USER
}

export interface GetUsers {
    type: typeof actionsTypes.GET_USERS
}

export interface GetUsersReceived {
    type: typeof actionsTypes.USERS_RECEIVED,
    json: User[]
}

export interface AddUser {
    type: typeof actionsTypes.ADD_USER,
    json: User
}

export interface UpdateUser {
    type: typeof actionsTypes.UPDATE_USER,
    json: User
}

export interface UpdateUserReceived {
    type: typeof actionsTypes.UPDATE_USER_RECEIVED,
    json: User
}

export interface AddUserReceived {
    type: typeof actionsTypes.ADD_USER_RECEIVED,
    json: User
}

export interface RemoveUser {
    type: typeof actionsTypes.REMOVE_USER,
}

export interface GetTasks {
    type: typeof actionsTypes.GET_TASKS,
    json: {
        deskId: number,
        userId: number
    }
}

export interface TasksReceived {
    type: typeof actionsTypes.TASKS_RECEIVED,
    json: Card[]
}

export interface AddTask {
    type: typeof actionsTypes.ADD_TASK,
    json: Card
}

export interface AddTaskReceived {
    type: typeof actionsTypes.ADD_TASK_RECEIVED,
    json: Card
}

export interface RemoveCard {
    type: typeof actionsTypes.REMOVE_CARD,
    id: number
}

export interface RemoveCardReceived {
    type: typeof actionsTypes.REMOVE_CARD_RECEIVED,
    id: number
}

export interface ChangeCardPosition {
    type: typeof actionsTypes.CHANGE_CARD_POSITION,
    json: {
        id: number,
        status: number
    },
    testOrder: number
}

export interface ChangeCardPositionReceived {
    type: typeof actionsTypes.CHANGE_CARD_POSITION_RECEIVED,
    json: Card
}

export interface GetCard {
    type: typeof actionsTypes.GET_CARD,
    id: number
}

export interface CardReceived {
    type: typeof actionsTypes.CARD_RECEIVED,
    json: Card
}

export interface EditCard {
    type: typeof actionsTypes.EDIT_CARD,
    json: {
        id: number,
        card: Card
    }
}

export interface EditCardReceived {
    type: typeof actionsTypes.EDIT_CARD_RECEIVED,
    json: Card
}

export interface ActionAlert {
    type: typeof actionsTypes.ACTION,
    json: Alert
}

export type AppActions = ProjectLoaded | CurrentProject | GetProjectsAction | ProjectsReceived | 
AddProjectAction | AddProjectReceived | GetProjectDesks | RemoveProject | 
ProjectDesksReceived | UserLogin | UserLoginReceived | ProjectDeskRemoved | ProjectDesksRemoved | UserLogout | GetUser |
GetUsers | GetUsersReceived | AddUser | AddUserReceived | UpdateUser | UpdateUserReceived | RemoveUser | GetTasks |
TasksReceived | AddTask | AddTaskReceived | RemoveCard | RemoveCardReceived | ChangeCardPosition | ChangeCardPositionReceived |
GetCard | CardReceived | EditCard | EditCardReceived | ActionAlert