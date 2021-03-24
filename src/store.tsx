import { applyMiddleware,compose, createStore } from "redux";
import { rootReducer } from "./Reducers/rootReducer";
import createSagaMiddleWare from "redux-saga";
import rootSaga from "./Sagas/indexProjects";

const default_store: any = {

}

export type AppState = ReturnType<typeof rootReducer>

const saga = createSagaMiddleWare();
let middleware = applyMiddleware(saga);
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, default_store ,composeEnhancers(middleware));
saga.run(rootSaga)

export default store;