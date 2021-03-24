import { combineReducers } from "redux";
import { cardReducer } from "./cardReducer";
import { mainReducer } from "./mainReducer";
import { projectDesksReducer } from "./projectDesksReducer";
import { projectsReducer } from "./projectsReducer";
import { tasksReducer } from "./tasksReducer";
import { userReducer} from "./userReducer";
import { usersReducer} from "./usersReducer";

export const rootReducer = combineReducers({main: mainReducer, projects: projectsReducer, projectDesks: projectDesksReducer, user: userReducer, users: usersReducer, tasks: tasksReducer, card: cardReducer})