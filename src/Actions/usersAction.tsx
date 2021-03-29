import  {actionsTypes, AppActions} from '../constants/actionsTypes'
import { User } from '../Interfaces/user'
import Users from '../Pages/Users'

export const getUsers = (): AppActions => ({
    type: actionsTypes.GET_USERS,
})

export const usersReceived = (users: User[]): AppActions => ({
    type: actionsTypes.USERS_RECEIVED,
    json: users
})

export const newUser = (user: User): AppActions => ({
    type: actionsTypes.ADD_USER,
    json: user
})

export const newUserReceived = (user: User): AppActions => ({
    type: actionsTypes.ADD_USER_RECEIVED,
    json: user
})

export const updateUser = (user: User): AppActions => ({
    type: actionsTypes.UPDATE_USER,
    json: user
})

export const removeUser = (id: number): AppActions => ({
    type: actionsTypes.REMOVE_USER
})