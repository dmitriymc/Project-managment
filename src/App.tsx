import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, withRouter, Redirect, useLocation, RouteComponentProps, matchPath} from 'react-router-dom';
import { Header } from './Layouts/header';
import { Footer } from './Layouts/footer';
import { Routes } from './routes';
import { Npage }  from './Pages/404';
import * as mainCreators from './Actions/main';
import * as userCreators from './Actions/userAction';
import * as usersCreators from './Actions/usersAction';
import * as projectsCreators from './Actions/projectsAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ProtectedRoute } from './protectedRoute';
import  Login  from './Pages/Login';
import { State } from './Interfaces/state';

import './App.css';
import './main.scss';
import './Ui/ui.scss';
import { Preloader } from './Ui/Preloader';
import { Project } from './Interfaces/project';
import { AlertsComponent } from './Ui/Alerts';

// todo props type

const App: React.FunctionComponent = (props: any) =>  {
  
  const ft = localStorage.getItem('id');

  useEffect(() => {
    if(ft){
      props.getUser();
      props.getProjects();
      props.getUsers();
    }else{
      props.history.push('/login')
    }

   }, [ft])

   useEffect(() => {
    if(props.projects.length && props.user){
      props.projectLoaded();
      if(match?.params.projectId){
        props.changeCurrentProject(props.projects.findIndex((item: Project) => item.id == match?.params.projectId));
      }
    }
    
   }, [props.projects.length && props.user])

   const match: any = matchPath(props.history.location.pathname, {
     path: "/project/:projectId"
   }) 

  return (
    <div className="App">
      <div className="container">
      <div className="page-bg" style={props.projects[props.currentProject]?.image ? {backgroundImage: `url(${props.projects[props.currentProject]?.image})`} : {background: `none`}}>
                
      </div>
      { props.location.pathname !== '/login' && <Header data={props.user} />}

      
      <div className={`main ${props.location.pathname === '/login' && 'main--start' || ''}`}>
           <Switch>
            {
              //todo return protected routes
              Routes.map((route) => <ProtectedRoute isAuthenticaton={true} projectLoaded={props.projectReady} exact path={route.path} component={route.component} key={route.path} />)
            }
            <Route excat path='/login' component={Login}></Route>
            <Route component={Npage}></Route>
          </Switch>
      </div>
      <AlertsComponent alerts={props.actions} />
      <Footer />
      
      </div>
</div>
  )

}

const mapStateToProps = (state: State) => {
  return {
      projectDesks: state.projectDesks.projectDesks,
      projects: state.projects.projects,
      currentProject: state.main.currentProject,
      projectReady: state.main.projectLoaded,
      loading: state.projectDesks.loading,
      user: state.user.user,
      isLogin: state.user.isLogin,
      actions: state.main.actions
  }
}

//todo dispatch type

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({...userCreators, ...projectsCreators, ...usersCreators, ...mainCreators} ,dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

