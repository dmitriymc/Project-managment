export interface Card {
    id: number;
    title: string;
    type: number;
    status: number;
    priority: number;
    userId: number;
    date: Date;
    projectId: number;
    deskId: number;
    order: number;
    position: number;
    content: string;
    comments: string[];
}