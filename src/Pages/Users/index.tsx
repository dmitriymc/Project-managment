import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { User } from '../../Interfaces/user';
import { Button } from '../../Ui/Button';
import { CreateUser } from './components/createUser';
import * as usersCreators from '../../Actions/usersAction'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Preloader } from '../../Ui/Preloader';
import { rolesList } from '../../constants/rolesList';
import './style.scss'
import { State } from '../../Interfaces/state';

type users = {
    newUser: Function,
    users: User[],
    loading: boolean,
    history: any
}

class Users extends React.Component<users> {

    state = {
        createUserForm: false
    }

    createUserForm = () => this.setState({createUserForm: !this.state.createUserForm})
    createUser = (user: User) => {
        this.props.newUser(user);
        this.setState({createUserForm: false})
    }
    
    render(){
        return(
            <PerfectScrollbar>
            <div className="page">
                    <div className="page-header">
                    <Button className={'page-header__button--left'} align="left" title="To projects" type="large" img={'<i class="fas fa-chevron-left"></i>'} onClick={this.props.history.goBack} />
                        <div className="page-header__title">
                            <h2 className="page-title">Users</h2>
                        </div> 
                        <Button className="page-header__button--right" title="Create new user" align="right" titleActive="Close new user" type="large" onClick={this.createUserForm} active={this.state.createUserForm} />
                    </div>
                    <div className="page-content">
                        {this.props.loading ? <Preloader /> : <div className="users">
                            {this.state.createUserForm ? <CreateUser createUser={this.createUser}/> :
                                rolesList.map(role => 
                                    <div className="users-department" key={role.id}>
                                       <div className="users-department__title">{role.name}</div>
                                       <div className="users-department__container">
                                           {
                                               this.props.users.map((user, index) => 
                                                
                                                user.role == role.id && <div className="user" key={index}>
                                                    <div className="user__avatar">{user.avatar && <img className="user__img" src={user.avatar} />}</div>
                                                    <div className="user__info">
                                                        <div className="user__name">{user.name}</div>
                                                        <div className="user__position">{rolesList[user.role].name}</div>
                                                    </div>
                                                </div>

                                                )
                                           }
                                       </div>
                                    </div>
                                )
                            }
                        </div>}
                    </div>
                </div>
                </PerfectScrollbar>
        )
    }
    
}

const mapStateToProps = (state: State) => {
    return {
        users: state.users.users,
        loading: state.users.loading
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators(usersCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
    