import { Task } from 'redux-saga'
import  {actionsTypes, AppActions} from '../constants/actionsTypes'
import { Card } from '../Interfaces/card'

export const getTasks = (deskId: number, userId: number): AppActions => ({
    type: actionsTypes.GET_TASKS,
    json: {
        deskId,
        userId
    }
})

export const tasksReceived = (cards: Card[]): AppActions => ({
    type: actionsTypes.TASKS_RECEIVED,
    json: cards
})

export const newTask = (card: Card): AppActions => ({
    type: actionsTypes.ADD_TASK,
    json: card
})

export const newTaskReceived = (card: Card): AppActions => ({
    type: actionsTypes.ADD_TASK_RECEIVED,
    json: card
})

export const removeCard = (id: number): AppActions => ({
    type: actionsTypes.REMOVE_CARD,
    id: id
})

export const removeCardReceived = (id: number): AppActions => ({
    type: actionsTypes.REMOVE_CARD_RECEIVED,
    id: id
})

export const changeCardPosition = (cardId: number, status: number, testOrder: number): AppActions => ({
    type: actionsTypes.CHANGE_CARD_POSITION,
    json: {
        id: cardId,
        status: status
    },
    testOrder: testOrder
})

export const changeCardPositionReceived = (card: Card): AppActions => ({
    type: actionsTypes.CHANGE_CARD_POSITION_RECEIVED,
    json: card
})