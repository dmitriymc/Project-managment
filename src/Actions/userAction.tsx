import  {actionsTypes, AppActions} from '../constants/actionsTypes'
import { User } from '../Interfaces/user'


export const userLogin = (user: User): AppActions => ({
    type: actionsTypes.USER_LOGIN,
    json: user
})

export const userLoginReceived = (user: User): AppActions => ({
    type: actionsTypes.USER_LOGIN_RECEIVED,
    json: user
})

export const userLogout = (): AppActions => ({
    type: actionsTypes.USER_LOGOUT
});

export const getUser = (): AppActions => ({
    type: actionsTypes.GET_USER
})