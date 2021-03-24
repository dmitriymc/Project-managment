"use strict";
exports.__esModule = true;
exports.projectDesksReceived = exports.getProjectDesks = void 0;
var actionsTypes_1 = require("../constants/actionsTypes");
exports.getProjectDesks = function (id) { return ({
    type: actionsTypes_1.actionsTypes.GET_PROJECT_DESKS,
    json: id
}); };
exports.projectDesksReceived = function (projectDesks) { return ({
    type: actionsTypes_1.actionsTypes.PROJECT_DESKS_RECEIVED,
    json: projectDesks
}); };
/*export const getProject = () => ({
    type: actionsTypes.GET_PROJECTS
})

export const projectsReceived = (projects: Project[]): AppActions => ({
    type: actionsTypes.PROJECTS_RECEIVED,
    json: projects
})

export const addProjectReceived = (project: Project): AppActions => ({
    type: actionsTypes.ADD_PROJECT_RECEIVED,
    item: project
})

export const addProject = (project: Project): AppActions => ({
    type: actionsTypes.ADD_PROJECT,
    item: project
})

export const updateProject = (project: Project, id: number) => ({
    type: actionsTypes.UPDATE_PROJECT,
    id: id,
    item: project
})

export const removeProject = (id: number) => ({
    type: actionsTypes.REMOVE_PROJECT,
    id: id
})*/ 
