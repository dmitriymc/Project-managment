import { Project } from "./project";

export interface ProjectDesk {
    id: number;
    projectId: number;
    title: string;
    team: number;
    progress: number;
    date: string;
    createdBy: number;
}

export interface ProjectDeskResult {
    project: Project,
    desks: ProjectDesk[]
}