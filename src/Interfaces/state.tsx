import { Card } from "./card";
import { Project } from "./project";
import { ProjectDeskResult } from "./projectDesk";
import { User } from "./user";

export interface State {
    main: {
        currentProject: number
    },
    projects: {
        projects: Project[],
        loading: boolean
    },
    projectDesks:{
        projectDesks: ProjectDeskResult,
        loading: boolean
    },
    user: {
        user: User,
        isLogin: boolean
    },
    users: {
        users: User[],
        loading: boolean
    },
    tasks: {
        tasks: Card[],
        loading: boolean
    },
    card: {
        card: Card,
        loading: boolean
    }
}