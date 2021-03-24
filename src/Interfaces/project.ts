export interface Project {
    id: number;
    title: string;
    state: number;
    priority: number;
    date: string;
    image: string;
    teams: number[];
    createdBy: number;
}