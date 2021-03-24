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
    const json = yield fetch(`/api/login/authenticate`, requestOptions).then(response => response.json(), )
    console.log(json);
    if(!json.errors){
        yield put({type:"USER_LOGIN_RECEIVED", json: json})
        localStorage.setItem('id', json.id);
    }else{
        json.errors.forEach((error : string) => {
            console.log(error);
        })
    }
    
}

function* getUser(){
    const token = localStorage.getItem('id');
    // const json = yield fetch('/api/login', requestOptions).then(response => response.json(), )
    const json = yield fetch(`/api/login/?id=${token}`).then(response => response.json(), )
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

