import { all, put, takeLatest } from "redux-saga/effects"
import actionProjectsWatcher from "./projects"
import actionProjectDesksWatcher from "./projectDesk"
import actionUserWatcher from "./user"
import actionUsersWatcher from "./users"
import actionTasksWatcher from "./tasks"
import actionCardWatcher from "./card"


export default function* rootSaga(){
    yield all([
        actionProjectsWatcher(),
        actionProjectDesksWatcher(),
        actionUserWatcher(),
        actionUsersWatcher(),
        actionTasksWatcher(),
        actionCardWatcher()
    ]);
}