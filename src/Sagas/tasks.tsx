import { rejects } from "assert";
import { resolve } from "path";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects"


function* getTasks(action: any) {
    const json = yield fetch(`/api/tasks/?deskId=${action.json.deskId}&userId=${action.json.userId}`).then(response => response.json(), )
    yield put({type:"TASKS_RECEIVED", json: json})
}

function* addTask(action: any) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(action.json)
    }
    const json = yield fetch('/api/tasks', requestOptions).then(response => response.json())
    yield put({type: "ADD_TASK_RECEIVED", json: json})
}

function* changeTask(action: any){
    /*const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(action.json)
    }*/

    //console.log(requestOptions)
    const json = yield fetch(`/api/tasks/changeField/?id=${action.json.id}&status=${action.json.status}`).then(response => response.json())
    //yield put({type: "CHANGE_CARD_POSITION_RECEIVED", json: json})
}

function* removeCard(action: any){
    const requestOptions = {
        method: 'DELETE',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(action.id)
    }
    const json = yield fetch(`/api/tasks/`, requestOptions).then(response => response)
    yield put({type: "REMOVE_CARD_RECEIVED", id: action.id})
}

function* actionTasksWatcher() {
    yield takeEvery("GET_TASKS", getTasks)
    yield takeEvery("CHANGE_CARD_POSITION", changeTask)
    yield takeLatest("ADD_TASK", addTask)
    yield takeEvery("REMOVE_CARD", removeCard)
    // yield takeLatest("ADD_PROJECT", addProject)

}

export default function* rootSaga(){
    yield all([
        actionTasksWatcher(),
    ]);
}

