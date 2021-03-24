import { rejects } from "assert";
import { resolve } from "path";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects"
import { User } from "../Interfaces/user";


function* addUser(user: any) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user.json)
    };
    console.log('USER ADD');
    const json = yield fetch(`/api/users`, requestOptions).then(response => response.json())
    yield put({type:"ADD_USER_RECEIVED", json: json})
}

function* getUsers(){
    const json = yield fetch('/api/users').then(response => response.json())
    yield put({type: "USERS_RECEIVED", json: json})
}

function* actionUsersWatcher() {
    yield takeEvery("ADD_USER", addUser)
    yield takeEvery("GET_USERS", getUsers);
    // yield takeLatest("ADD_PROJECT", addProject)

}

export default function* rootSaga(){
    yield all([
        actionUsersWatcher(),
    ]);
}

