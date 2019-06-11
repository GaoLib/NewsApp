import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Account from'../../../images/account.svg';
import HomePage from '../../../images/home-active.svg';

export default class Footer extends Component{
    render(){
        return (
            <div className="footer">
                <NavLink to="/"><img src={HomePage} className="icon" alt="Home"/></NavLink>
                <NavLink to="/account"><img src={Account} className="icon" alt="Account"/></NavLink>
            </div>
        );
    }

}