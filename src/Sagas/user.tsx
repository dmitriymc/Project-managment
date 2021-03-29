import { rejects } from "assert";
import { resolve } from "path";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects"
import { User } from "../Interfaces/user";


function* loginUser(user: any) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user.json)
    };
    const json = yield fetch(`/api/login/authenticate`, requestOptions).then(response => response.json())

    if(!json.error){
        localStorage.setItem('id', json.id);
        yield all([
            put({type:"USER_LOGIN_RECEIVED", json: json}),
            put({type:"ACTION", json:{
                status: 1,
                title: 'LOGIN SUCCESS'
                }})
        ])
    }else{
        yield put({type:"ACTION", json: json.error})
    }
    
}

function* getUser(){
    const token = localStorage.getItem('id');
    // const json = yield fetch('/api/login', requestOptions).then(response => response.json(), )
    const json = yield fetch(`/api/login/?id=${token}`).then(response => response.json())
    yield put({type: "USER_LOGIN_RECEIVED", json: json})
}

function* actionUserWatcher() {
    yield takeEvery("USER_LOGIN", loginUser)
    yield takeEvery("GET_USER", getUser);
}

export default function* rootSaga(){
    yield all([
        actionUserWatcher(),
    ]);
}

