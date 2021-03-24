import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLogout } from '../../../../Actions/userAction';
import { State } from '../../../../Interfaces/state';
import { User } from '../../../../Interfaces/user';

import './style.scss';

export const UserInfo: React.FunctionComponent = () => {

    const dispatch = useDispatch();
    const userInfo = useSelector((state: State) => state.user.user);
    const logout = () => {
        dispatch(userLogout());
    }
    
    return(<div className="userInfo">
        <div className="userInfo-content">
            <div className="userInfo-content__img">
                
            </div>
            <div className="userInfo-content__title">
                Hi, {userInfo.name}
            </div>
        </div>
        <div className="userInfo-menu">
            <ul>
                <li><a className="userInfo-link">Profile</a></li>
                <li><a className="userInfo-link" onClick={() => logout()}>Logout</a></li>
            </ul>
        </div>
    </div>)
}