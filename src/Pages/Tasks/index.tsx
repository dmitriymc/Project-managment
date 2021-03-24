import React, { DragEvent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tasksCreators from '../../Actions/tasksAction'
import { Button } from '../../Ui/Button';
import { Preloader } from '../../Ui/Preloader';
import {taskStatusList} from '../../constants/taskStatusList'
import { Card } from '../../Interfaces/card';
import './style.scss'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import { projectPriority } from '../../Enums/projectPriority';
import { CreateCard } from './components/createCard/createCard';
import { TaskStatus } from '../../Enums/taskStatus';
import { priorityList } from '../../constants/priorityList';
import { Link } from 'react-router-dom';
import { cardTypesList } from '../../constants/cardTypes';
import { projectState } from '../../Enums/projectState';
import { State } from '../../Interfaces/state';

interface tasks {
    getTasks: Function,
    newTask: Function,
    changeCardPosition: Function,
    removeCard: Function,
    userId: number,
    match: any,
    history: any,
    tasks: Card[],
    loading: boolean
}

interface tasks_state {
    createTaskForm: boolean,
    testSortElement: number | null
}

class Tasks extends React.Component<tasks, tasks_state> {

    constructor(props: tasks){
        super(props)
        this.state = {
            createTaskForm: false,
            testSortElement: null
        }

        this.handleOnDrop = this.handleOnDrop.bind(this);
    }

    

    createTask = (card: Card) => {
        this.props.newTask(card);
        this.createTaskForm();
    }
    removeCard = (id: number) => this.props.removeCard(id);
    createTaskForm = () => this.setState({createTaskForm: !this.state.createTaskForm})
    
    componentDidMount(){
        this.props.getTasks(this.props.match.params.deskId, this.props.userId);
        console.log(this.props)
    }

    handleDragEnter(e: DragEvent){
        e.currentTarget.classList.add('cards-field__content--active')
    }

    handleDragLeave(e: DragEvent){
        e.currentTarget.classList.remove('cards-field__content--active') 
    }

    handleOnDrop(e: DragEvent){
        e.currentTarget.classList.remove('cards-field__content--active') 
        this.props.changeCardPosition(e.dataTransfer.getData('cardId'), e.currentTarget.id, this.state.testSortElement)
    }

    handleDragOver(e: DragEvent){
        e.preventDefault();
    }

    handleDragStart(e: any, cardId: number){
        e.currentTarget.classList.add('card--active')
        e.dataTransfer.setData('cardId', cardId)
    }

    handleDragEnd(e: DragEvent){
        e.currentTarget.classList.remove('card--active')
    }

    // TEST SORTING */

    getOrderOfElement(order: number){
        this.setState({testSortElement: order});
    }  

    render(){
        return(
            <PerfectScrollbar>
            <div className="page">
                    <div className="page-header">
                        <Button className={'page-header__button--left'} align="left" title="TO PROJECT" type="large" img={'<i class="fas fa-chevron-left"></i>'} onClick={this.props.history.goBack} />
                        <div className="page-header__title">
                            <h2 className="page-title">Tasks {this.props.tasks.length}</h2>
                        </div> 
                        <Button className={'page-header__button'} align="right" title="CREATE TASK" titleActive="CLOSE TASK FORM" type="large" onClick={this.createTaskForm} active={this.state.createTaskForm} />
                    </div>
                    <div className="page-content">
                        {
                            this.state.createTaskForm && <CreateCard createCard={this.createTask} />
                        }
                        {
                        this.props.loading ? <Preloader /> : 
                            <div className={`cards ${this.state.createTaskForm ? 'cards--hidden' : ''}`}>
                                {
                                    taskStatusList.map(field => 
                                        <div key={field.id} className="cards-field">
                                            <div className="cards-field__title">{field.name}</div>
                                            <div id={(field.id as any)} className={`cards-field__content`} onDragEnter={this.handleDragEnter} onDragLeave={this.handleDragLeave} onDrop={this.handleOnDrop} onDragOver={this.handleDragOver}>
                                                {
                                                this.props.tasks.sort((a,b) => a.order - b.order).map(card =>
                                                    
                                                    (field.id == card.status) && <div onDragOver={() => this.getOrderOfElement(card.order)} key={card.id} className="card" draggable={true} onDragStart={(e) => this.handleDragStart(e, card.id)} onDragEnd={this.handleDragEnd}>
                                                        <div className="card__header">
                                                            <div className={`card__title ${(field.id as number) == projectState.complete ? 'card__title--complete' : ''}`}>
                                                            <Link className="card__link" to={`${this.props.match.params.deskId}/${card.id}`}>{card.title}</Link>
                                                            </div>
                                                            <div className={`card__type ${cardTypesList[card.type].color}`}>
                                                            {cardTypesList[card.type].name}
                                                            </div>
                                                            <div className={`card__priority ${priorityList[card.priority].color}`}>
                                                               
                                                            </div>
                                                        </div>
                                                        <div className="card__content">{card.content}</div>
                                                    </div>
                                                        
                                                )
                                                }
                                            </div>

                                        </div>        
                                    )
                                }
                            </div>
                        }
                    </div>
                </div>
                </PerfectScrollbar>
        )
    }

}
const mapStateToProps = (state: State) => {
    return {
        tasks: state.tasks.tasks,
        userId: state.user.user.id,
        loading: state.tasks.loading
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators(tasksCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)