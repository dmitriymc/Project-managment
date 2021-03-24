import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import dayjs from 'dayjs';
import { Card } from '../../Interfaces/card';
import { bindActionCreators } from 'redux';
import * as projectCreators from '../../Actions/cardAction'
import * as cardCreators from '../../Actions/tasksAction'
import { Preloader } from '../../Ui/Preloader';
import { useForm } from 'react-hook-form';
import { Select } from '../../Ui/Select';
import { priorityList } from '../../constants/priorityList';
import { taskStatusList } from '../../constants/taskStatusList';
import { cardTypesList } from '../../constants/cardTypes';
import { Button } from '../../Ui/Button';
import { User } from '../../Interfaces/user';
import { State } from '../../Interfaces/state';

import './style.scss'


// todo any types

interface card {
    getCard: Function,
    editCard: Function;
    removeCard: Function;
    loading: boolean,
    match: any,
    history: any,
    card: Card,
    users: User[]
}

const CardComponent: React.FunctionComponent<card> = (props) => {

     
        const { register, setValue, handleSubmit, errors} = useForm();

        useEffect(() => {
            props.getCard(props.match.params.cardId);
        }, [])

        const removeCard = () => {
            props.removeCard(props.match.params.cardId);
            props.history.goBack()
        }

        const onSubmit = (card: Card) => {
            const content = document.querySelector('#description')?.textContent;
            const cardTitle = document.querySelector('#card-title')?.textContent;
            const item = {
                ...props.card,
                title: cardTitle,
                content: content,
                status: card.status,
                priority: card.priority,
                type: card.type,
                userId: card.userId
            }
    
            props.editCard(props.card.id, item);
            props.history.goBack();
        }  


        return(
            props.loading ? <Preloader/> : <div className="page">
                    <div className="page-header">
                        <Button className={'page-header__button--left'} align="left" title="TO TASKS" type="large" img={'<i class="fas fa-chevron-left"></i>'} onClick={props.history.goBack} />
                        <div className="page-header__title">
                            <h2 id="card-title" className="page-header__editable" suppressContentEditableWarning={true} contentEditable>{props.card.title}</h2>
                        </div> 
                        <Button className={'page-header__button--right'} align="right" title="REMOVE CARD" type="large" img={'<i class="far fa-trash-alt"></i>'} onClick={removeCard} />
                    </div>
                    <div className="page-content">
                        <div className="cardPage">
                            <div className="cardPage-container">
                                <form onSubmit={handleSubmit(onSubmit)} className="cardPage-container__form">
                                    <div className="cardPage-container__left">
                                        <div className="cardPage-content">
                                                <div className="cardPage-content__description">
                                                    <label>Description</label>
                                                    <span id="description" suppressContentEditableWarning={true} contentEditable className="input">
                                                        {props.card.content}
                                                    </span>
                                                </div>
                                                <div className="cardPage-content__imgLish cardPage-imgList">
                                                    
                                                </div>
                                                <div className="cardPage-content__comments">

                                                </div>
                                        </div>
                                    </div>
                                    <div className="cardPage-container__right">
                                        <div className="cardPage-info">
                                            <div className="cardPage-info__user">
                                                {props.users.find(user => props.card.userId == user.id)?.name}
                                            </div>
                                            <div className="cardPage-info__type">
                                            <Select items={cardTypesList} default={props.card.type} name="type" register={register({required: true})} placeholder={'Card type'} />
                                            </div>
                                            <div className="cardPage-info__priority">
                                            <Select items={priorityList} default={props.card.priority} name="priority" register={register({required: true})} placeholder={'Card priority'} />
                                            </div>
                                            <div className="cardPage-info__status">
                                            <Select items={taskStatusList} default={props.card.status} name="status" register={register({required: true})} placeholder={'Card status'} />
                                            </div>
                                            <div className="cardPage-info__date">
                                                {dayjs(props.card.date).format('HH:mm DD.MM.YY')}
                                            </div>
                                            <button className="button cardPage-info__button" type="submit">Update</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        )
}

const mapStateToProps = (state: State) => {
    return {
        card: state.card.card,
        users: state.users.users,
        loading: state.card.loading
    }
}

//todo type dispatch

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({...projectCreators, ...cardCreators}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (CardComponent);
    