"use strict";
exports.__esModule = true;
exports.Routes = void 0;
var Projects_1 = require("./Pages/Projects");
var ProjectCard_1 = require("./Pages/Projects/Components/ProjectCard");
exports.Routes = [
    {
        name: 'Projects',
        path: '/',
        component: Projects_1.Projects
    },
    {
        name: 'Users',
        path: '/project',
        component: Projects_1.Projects
    },
    {
        name: 'About',
        path: '/card',
        component: ProjectCard_1.ProjectCard
    }
];
