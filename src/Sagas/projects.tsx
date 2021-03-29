import { rejects } from "assert";
import { resolve } from "path";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects"


function* getProjects() {
 const json = yield fetch("/api/projects").then(response => response.json(), )
 yield put({type:"PROJECTS_RECEIVED", json: json})
}

function* addProject(project: any){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project.item)
    };
        const project_add = yield fetch("/api/projects", requestOptions).then(response => response.json())
        yield all([
            put({type: "ADD_PROJECT_RECEIVED", item: project_add}),
            put({type:"ACTION", json:{
                status: 1,
                title: 'NEW PROJECT CREATED'
                }})
        ]) 
}

function* removeProject(action: any){
    const requestOptions = {
        method: 'DELETE',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(action.id)
    }
    const json = yield fetch(`/api/projects/`, requestOptions).then(response => response)
    yield put({type:"ACTION", json:{
        status: 1,
        title: `PROJECT ${action.id} REMOVED`
        }})
}

function* actionProjectsWatcher() {
    yield takeEvery("GET_PROJECTS", getProjects)
    yield takeLatest("ADD_PROJECT", addProject)
    yield takeLatest("REMOVE_PROJECT", removeProject)

}

export default function* rootSaga(){
    yield all([
        actionProjectsWatcher(),
    ]);
}

