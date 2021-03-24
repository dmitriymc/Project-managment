import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../routes';

import '../../Layouts/header/style.scss';
import { UserInfo } from './components/user';
import { User } from '../../Interfaces/user';

interface header {
    data: User;
}

export const Header: React.FunctionComponent<header> = (props) => (
    <header className="header">
        <div className="logo">
            <h1>Project</h1>
        </div>
        <div className="navigation">
            <ul className="menu">
                {Routes.map((item, index) => item.menu && <li className="menu__item" key={index}><Link className="menu-link" to={item.path}>{item.name}</Link></li>)}       
            </ul>
        </div>
        { props.data && <UserInfo />}
    </header>
)