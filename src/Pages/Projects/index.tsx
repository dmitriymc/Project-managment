import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {bindActionCreators} from 'redux'
import * as projectsCreators from '../../Actions/projectsAction'
import * as mainCreators from '../../Actions/main'
import { projectState } from '../../Enums/projectState';
import { Project } from '../../Interfaces/project';
import { Button } from '../../Ui/Button';
import { Preloader } from '../../Ui/Preloader';
import { CreateProject } from './Components/CreateProject';
import { TransitionGroup,  CSSTransition } from 'react-transition-group'

import './style.scss'
import { State } from '../../Interfaces/state';


//todo actions interfaces
//todo rewrite card to component

interface projects {
    addProject: Function;
    getProjects: Function;
    projects: Project[];
    currentProject: number;
    changeCurrentProject: Function;
    loading: boolean;
}

/*interface projects_state {
    cProject: number;
    createProject: boolean;
}*/

const Projects: React.FunctionComponent<projects> = (props: projects) => {

    /*constructor(props: projects){
        super(props);
        this.moveProjects = this.moveProjects.bind(this)
    }*/

    /*state = {
        cProject: this.props.currentProject,
        createProject: false
    }*/

    const [cProject, setProject] = useState(props.currentProject);
    const [createProject, setCreateProject] = useState(false);

    let currentProjectPos = cProject;

    const moveProjects = (e: KeyboardEvent) => {
        if((e.key === "ArrowLeft" || e.key === "ArrowDown") && currentProjectPos > 0){
            currentProjectPos -= 1; 
        }else if((e.key === "ArrowRight" || e.key === "ArrowUp") && + currentProjectPos < props.projects.length - 1){
            currentProjectPos += 1; 
        }
        props.changeCurrentProject(currentProjectPos); 
        setProject(currentProjectPos)
    }

    const itemClick = (index: number) => {        
        setProject(index)
        props.changeCurrentProject(index);
    }

    useEffect(() => {
        document.addEventListener('keydown', moveProjects)

        return () => {
            document.removeEventListener('keydown', moveProjects);
        }

    },[])

    const addProject = () => setCreateProject(!createProject);

    const createNewProject = (item: Project) => {
        props.addProject(item);
        props.changeCurrentProject(props.projects.length);
        setProject(props.projects.length)
        addProject();
    }    

        return(
            <div className="page">
                <div className="page-header">
        
                </div>
                <div className="page-content page-content--center">
                   {createProject && <CreateProject createProject={createNewProject} />}
                   <div className={`projects ${ createProject ? 'projects--hidden' : ''}`}>
                   {
                   props.loading ? <Preloader/> : ( props.projects.length ? <div className="projects-container" style={{transform: `${'translateX'}(-${cProject * (100/props.projects.length)}%)`}}>
                        
                        {props.projects.map((project, index) => 

                                <div key={project.id} style={project.image ? {backgroundImage: `url(${project.image})`} : {backgroundColor: '#a1a1a1'}} className={`projects-item ${ index == cProject ? 'projects-item--active' : ''}`} onClick={() => itemClick(+index)}>
                                    <div className="projects-item__title"><Link className="project-link" to={`project/${project.id}`}>{project.title}</Link></div>
                                    <div className="projects-item__status">{projectState[project.state]}</div>
                                </div>
                            
                            )}
                           
                        </div> : <h2 className="empty-title">PROJECT LIST IS EMPTY</h2>) 
                    }
                </div>
            
                </div>
                <div className="page__footer projects-page__footer">
                    <Button title="Create project" titleActive="Close project" type="large" onClick={addProject} active={createProject}></Button>
                </div>
            </div>
            )
  
}

const mapStateToProps = (state: State) => {
    return {
        projects: state.projects.projects,
        currentProject: state.main.currentProject,
        loading: state.projects.loading
    }
}

//todo dispatch type

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({...projectsCreators, ...mainCreators}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects)