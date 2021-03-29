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
    yield all([
        put({type:"ADD_USER_RECEIVED", json: json}),
        put({type:"ACTION", json:{
            status: 1,
            title: 'NEW USER ADDED'
            }})
    ])
}

function* getUsers(){
    const json = yield fetch('/api/users').then(response => response.json())
    yield put({type: "USERS_RECEIVED", json: json})
}

function* updateUser(user: any){
    const requestOptions = {
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(user.json)
    }
    const json = yield fetch(`/api/users/${user.json.id}`, requestOptions).then(response => response.json())
    yield all([
        put({type: "UPDATE_USER_RECEIVED", json: json}),
        put({type:"ACTION", json:{
            status: 1,
            title: 'USER UPDATED'
            }})
    ])
}

function* actionUsersWatcher() {
    yield takeEvery("ADD_USER", addUser)
    yield takeEvery("GET_USERS", getUsers);
    yield takeEvery("UPDATE_USER", updateUser);
}

export default function* rootSaga(){
    yield all([
        actionUsersWatcher(),
    ]);
}

