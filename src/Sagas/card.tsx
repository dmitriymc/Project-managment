import { rejects } from "assert";
import { resolve } from "path";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects"
import { Card } from "../Interfaces/card";
import { User } from "../Interfaces/user";


//todo types any

function* getCard(action: any) {
    const json = yield fetch(`/api/tasks/${action.id}`).then(response => response.json())
        yield put({type:"CARD_RECEIVED", json: json})
}

function* editCard(action: any){
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(action.json.card)
    }

    const json = yield fetch(`/api/tasks/${action.json.id}`, requestOptions).then(response => response.json())
    console.log(json);
    yield put({type: "EDIT_CARD_RECEIVED", json: json})
}

function* actionCardWatcher() {
    yield takeEvery("GET_CARD", getCard)
    yield takeEvery("EDIT_CARD", editCard);
}

export default function* rootSaga(){
    yield all([
        actionCardWatcher(),
    ]);
}

