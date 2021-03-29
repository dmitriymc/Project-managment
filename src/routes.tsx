import { RouteType } from "./Interfaces/route";
import  Projects  from "./Pages/Projects";
import ProjectC from "./Pages/Project";
import Users from "./Pages/Users";
import Login from "./Pages/Login";
import Tasks from "./Pages/Tasks";
import CardComponent from "./Pages/Card";
import Profile from "./Pages/User";

export const Routes = [
    {
      name: 'Projects',
      path: '/',
      component: Projects,
      menu: true
    },
    {
      name: 'Project',
      path: '/project/:projectId',
      component: ProjectC,
    },
    {
      name: 'Users',
      path: '/users',
      component: Users,
      menu: true
    },
    {
      name: 'Profile',
      path: '/users/:userId',
      component: Profile,
    },
    {
      name: 'Tasks',
      path: '/project/:projectId/:deskId',
      component: Tasks,
    },
    {
      name: 'Card',
      path: '/project/:projectId/:deskId/:cardId',
      component: CardComponent
    }
  ]