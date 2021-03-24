import React, {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import * as projectsCreators from '../../Actions/userAction'
import { User } from '../../Interfaces/user';
import {login} from '../../Interfaces/login'

import './style.scss'
import { Preloader } from '../../Ui/Preloader';
import { State } from '../../Interfaces/state';

//todo any types

const Login: React.FunctionComponent<login> = (props: any) => {

    const { register, handleSubmit, errors} = useForm<User>();
    const onSubmit = (user: User) => {
        const userForm = {
            login: user.login,
            password: user.password,
        }
    
        props.userLogin(userForm);
        
    }
    
    useEffect(() => {
        if(props.isLogin){
            props.history.push('/')
        }

    }, [props.isLogin])

    return(
        <div className="page f-page f-page--center">
            <div className="page__content f-page__content">
                {!props.isLogin && <form className="createUser" onSubmit={handleSubmit(onSubmit)}>
                    <div className="createUser__item">
                        <span className="createUser__span">login: username</span>
                        <span className="createUser__span">password: 12345678</span>
                    </div>
                    <div className="createUser__item">
                        <input autoComplete="off" placeholder="Enter login" name="login" ref={register({required: true})} />
                        <span className="createUser__error">{errors.login && 'Field is required'}</span>
                        
                    </div>
                    <div className="createUser__item">
                        <input autoComplete="off" placeholder="Enter password" name="password" ref={register({required: true})} />
                        <span className="createUser__error">{errors.password && 'Field is required'}</span>
                    </div>
                    <div className="createUser__item">
                        <button className="button" type="submit">Login</button>
                    </div>
                </form>
                }
            </div>
        </div>
        )
  
}

const mapStateToProps = (state: State) => {
    return {
        isLogin: state.user.isLogin
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators(projectsCreators,dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)