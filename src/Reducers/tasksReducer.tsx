import { Task } from "redux-saga";
import { AppActions } from "../constants/actionsTypes";
import { Card } from "../Interfaces/card";

interface initialTasks {
   tasks: Card[],
   loading: boolean
}

const initialState: initialTasks = {
    tasks: [],
    loading: true
}

export const tasksReducer = (state = initialState, action: AppActions) => {
    switch(action.type) {
        case 'GET_TASKS':
            return {...state, loading: true};
            break;
        case 'TASKS_RECEIVED':
            return {...state, tasks: action.json, loading: false};
            break;    
        case 'ADD_TASK': 
            return {...state}
            break;
        case 'ADD_TASK_RECEIVED':
            return {...state, tasks: [...state.tasks, action.json]}
            break;
        case 'CHANGE_CARD_POSITION':
            const card_index = state.tasks.findIndex((card: Card) => card.id === action.json.id)
            let card = state.tasks[card_index];
            const changeField = {...state.tasks.slice(0, card_index), card}
            
            card.status = Number(action.json.status)

            if(action.testOrder !== null){

                let testOrder = {
                    ...state, tasks: [
                        ...state.tasks.map((item: Card, index: number) => {

                            /*if(index !== card_index){
                                if(index > card_index && index > 0 && index <= action.testOrder){
                                    item.order -= 1;
                                }
                                if(index < card_index && index >= action.testOrder){
                                    item.order += 1;
                                }
                            }else{
                                item.order = action.testOrder;
                            }*/
                            
                            return item;
                        })
                    ]
                }

                return testOrder
                
            }else{
                return {...state, tasks: [
                    ...state.tasks, changeField
                ]}   
            }
            
            break;
        case 'CHANGE_CARD_POSITION_RECEIVED':
            return {...state}
            break;
        case 'REMOVE_CARD':
            // todo edit saga
            return {...state, tasks:[
                ...state.tasks.filter((card: Card) => card.id != action.id)
            ]}
            break;
        case 'REMOVE_CARD_RECEIVED':
            return {...state, tasks:[
                ...state.tasks.filter((card: Card) => card.id != action.id)
            ]}
            break;                
        default:
            return state
    }
}