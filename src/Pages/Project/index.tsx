import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, RouteProps } from 'react-router';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as projectCreators from '../../Actions/projectAction';
import * as mainCreators from '../../Actions/main';
import * as projectsCreators from '../../Actions/projectsAction';
import { ProjectDesk, ProjectDeskResult } from '../../Interfaces/projectDesk';
import { Preloader } from '../../Ui/Preloader';
import { AppActions } from '../../constants/actionsTypes';
import { Button } from '../../Ui/Button';
import { State } from '../../Interfaces/state';
import { Project } from '../../Interfaces/project';

import './style.scss'

interface project {
    getProjectDesks: Function,
    getProjectDesksReceived: Function,
    removeProject: Function,
    changeCurrentProject: Function,
    currentProject: number,
    projectDesks: ProjectDeskResult,
    projects: Project[];
    loading: boolean
}

interface project_state {
    // todo type any
    projectParams: any;
}

class ProjectC extends React.Component<project & RouteComponentProps, project_state> {
    // todo type any
    // rewrite functional component
    constructor(props: any){
        super(props)
        this.state = {
            projectParams: this.props.match.params
        }
    }
    componentDidMount(){
        this.props.getProjectDesks(this.state.projectParams.projectId);
        this.props.changeCurrentProject(this.props.projects.findIndex((item: Project) => item.id === this.state.projectParams.projectId));
    }

    removeProject(){
        this.props.history.push('/')
        this.props.removeProject(this.state.projectParams.projectId);
        this.props.changeCurrentProject(this.props.currentProject !== 0 ? this.props.currentProject - 1 : this.props.currentProject)
    }

    render(){
        return(
            <div className="page">
                    <div className="page-header">
                        <Button className={'page-header__button--left'} align="left" title="TO PROJECTS" type="large" img={'<i class="fas fa-chevron-left"></i>'} onClick={this.props.history.goBack} />
                        <div className="page-header__title">
                            <h2 className="page-title">Project</h2>
                        </div> 
                        <Button onClick={() => this.removeProject()} className={"page-header__button--right"} align="right" title="REMOVE PROJECT" type="large" img="-"/>
                        <div className="page-header__settings"></div>
                    </div>
                    <div className="page-content page-content--center">
                        <div className="project">
                        {this.props.loading ? <Preloader/> : (this.props.projectDesks.desks.length ? <div className="project-container">
                               {
                                    
                                    this.props.projectDesks.desks.map((desk, index) => 
                                        <div className="project-item" key={index}>
                                            <div className="project-item__title">
                                                <Link className="project-link" to={`${this.state.projectParams.projectId}/${desk.id}`}>
                                                    {desk.title}
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                }
                            </div> : <h2 className="empty-title">DESKS LIST IS EMPTY</h2>)}
                        </div>
                    </div>
                </div>
        )
    }
    
}

const mapStateToProps = (state: State) => {
    return {
        projects: state.projects.projects,
        projectDesks: state.projectDesks.projectDesks,
        currentProject: state.main.currentProject,
        loading: state.projectDesks.loading
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({...mainCreators, ...projectCreators, ...projectsCreators}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (ProjectC);
    