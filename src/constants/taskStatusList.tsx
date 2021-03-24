import { TaskStatus } from "../Enums/taskStatus";

export const taskStatusList = [
    {
        id: TaskStatus.to_do,
        name: 'To do',
        color: 'low'
    },
    {
        id: TaskStatus.in_progress,
        name: 'In progress',
        color: 'medium'
    },
    {
        id: TaskStatus.complete,
        name: 'Complete',
        color: 'hight'
    }
]