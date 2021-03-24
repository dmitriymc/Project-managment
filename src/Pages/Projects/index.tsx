import React from 'react';
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

interface projects_state {
    cProject: number;
    createProject: boolean;
}

class Projects extends React.Component<projects, projects_state>  {

    constructor(props: projects){
        super(props);
        this.moveProjects = this.moveProjects.bind(this)
    }

    state = {
        cProject: this.props.currentProject,
        createProject: false
    }

    moveProjects = (e: KeyboardEvent) => {

        if((e.key === "ArrowLeft" || e.key === "ArrowDown") && this.state.cProject > 0){
            this.setState({
                cProject : this.state.cProject - 1
            })
        }else if((e.key === "ArrowRight" || e.key === "ArrowUp") && +this.state.cProject < this.props.projects.length - 1){
            this.setState({
                cProject : this.state.cProject + 1
            })
        }
        this.props.changeCurrentProject(this.state.cProject);
        
    }

    itemClick(index: number){        
        this.setState({
            cProject : index
        })
        this.props.changeCurrentProject(index);
    }

    componentDidMount(){
        document.addEventListener('keydown', this.moveProjects)
    }
    
    componentWillUnmount (){
        document.removeEventListener('keydown', this.moveProjects)
    }

    addProject = () => this.setState({createProject: !this.state.createProject});
    createProject = (item: Project) => {
        this.props.addProject(item);
        this.props.changeCurrentProject(this.props.projects.length);
        this.setState({
            cProject: this.props.projects.length
        })
        this.addProject();
    }    

    render(){
        return(
            <div className="page">
                <div className="page-header">
        
                </div>
                <div className="page-content page-content--center">
                   {this.state.createProject && <CreateProject createProject={this.createProject} />}
                   <div className={`projects ${ this.state.createProject ? 'projects--hidden' : ''}`}>
                   {
                   this.props.loading ? <Preloader/> : ( this.props.projects.length ? <div className="projects-container" style={{transform: `${'translateX'}(-${this.state.cProject * (100/this.props.projects.length)}%)`}}>
                        
                        {this.props.projects.map((project, index) => 

                                <div key={project.id} style={project.image ? {backgroundImage: `url(${project.image})`} : {backgroundColor: '#a1a1a1'}} className={`projects-item ${ index == this.state.cProject ? 'projects-item--active' : ''}`} onClick={() => this.itemClick(+index)}>
                                    <div className="projects-item__title"><Link className="project-link" to={`project/${project.id}`}>{project.title}</Link></div>
                                    <div className="projects-item__status">{projectState[project.state]}</div>
                                </div>
                            
                            )}
                           
                        </div> : <h2 className="empty-title">PROJECT LIST IS EMPTY</h2>) 
                    }
                </div>
            
                </div>
                <div className="page__footer projects-page__footer">
                    <Button title="Create project" titleActive="Close project" type="large" onClick={this.addProject} active={this.state.createProject}></Button>
                </div>
            </div>
            )
    }
  
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