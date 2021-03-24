import { useRef } from 'react'
import {useForm} from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useHistory, useLocation, useParams } from 'react-router'
import { priorityList } from '../../../../constants/priorityList'
import {cardTypesList} from '../../../../constants/cardTypes'
import { cardTypes } from '../../../../Enums/cardType'
import { Card } from '../../../../Interfaces/card'
import { Select } from '../../../../Ui/Select'
import './style.scss'
import { State } from '../../../../Interfaces/state'

interface createCard {
    createCard: Function;
}

export const CreateCard: React.FunctionComponent<createCard> = (props) => {

    //todo any type

    const id: any = useParams();
    const userId = useSelector((state: State) => state.user.user.id)

    console.log(props)

    const { register, setValue, handleSubmit, formState, errors, watch} = useForm<Card>();
    const onSubmit = (card: Card) => {
        const cardForm = {
          title: card.title,
          content: card.content,
          date: new Date(),
          deskId: id.deskId,
          type: card.type,
          position: 0,
          priority: card.priority,
          projectId: id.projectId,
          status: 0,
          userId: userId
        }

        console.log(id.deskId)
        props.createCard(cardForm);
    
    }    

    

    return(
    <div className="createCard modal">
        <div className="modal-header">
            <h3 className="modal-header__title">Create card</h3>
        </div>
        <div className="modal-container">
            <div className="createCard-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="createCard-container__left">
                        <div className="createCard-container__item">
                            <input className="createCard-container__input" autoComplete="off" placeholder="Enter title" name="title" ref={register({required: true})} />
                            {errors.title && 'Field is required'}
                        </div>
                        <div className="createCard-container__item">
                            <input className="createCard-container__input" autoComplete="off" placeholder="Enter content" name="content" ref={register({required: true})} />
                            {errors.content && 'Field is required'}
                        </div>
                    </div>
                    <div className="createCard-container__right">
                        <div className="createCard-container__item">
                            <Select items={cardTypesList} name="type" register={register({required: true})} placeholder={'Card type'} />
                        </div>
                        <div className="createCard-container__item">
                            <Select items={priorityList} name="priority" register={register({required: true})} placeholder={'Priority'} />
                        {errors.priority && 'Field is required'}
                        </div>
                        <div className="createCard-container__item">
                            <button className="button createCard-container__button" type="submit">Create card</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}