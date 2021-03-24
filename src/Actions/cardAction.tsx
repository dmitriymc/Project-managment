import { Task } from 'redux-saga'
import  {actionsTypes, AppActions} from '../constants/actionsTypes'
import { Card } from '../Interfaces/card'

export const getCard = (cardId: number): AppActions => ({
    type: actionsTypes.GET_CARD,
    id: cardId
})

export const cardReceived = (card: Card): AppActions => ({
    type: actionsTypes.CARD_RECEIVED,
    json: card
})

export const editCard = (cardId: number, card: Card): AppActions => ({
    type: actionsTypes.EDIT_CARD,
    json: {
        id: cardId,
        card: card
    }
})

export const editCardReceived = (card: Card): AppActions => ({
    type: actionsTypes.EDIT_CARD_RECEIVED,
    json: card
})