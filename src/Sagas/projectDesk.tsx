import { rejects } from "assert";
import { resolve } from "path";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects"


function* getProjectDesks(action: any) {
    const json = yield fetch(`/api/projectDesks/${action.json}`).then(response => response.json(), )
    yield put({type:"PROJECT_DESKS_RECEIVED", json: json})
}

function* actionProjectDesksWatcher() {
    yield takeEvery("GET_PROJECT_DESKS", getProjectDesks)
}

export default function* rootSaga(){
    yield all([
        actionProjectDesksWatcher(),
    ]);
}

