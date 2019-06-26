import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FooterWrapper,IconWrapper } from './style'

export default class Footer extends Component{
    render(){
        return (
            <FooterWrapper>
                <NavLink to="/">
                    <IconWrapper className="iconfont" color="#f5ef3e">&#xe690;</IconWrapper>
                </NavLink>
                <NavLink to="/account">
                    <IconWrapper className="iconfont" color="#aaa">&#xe613;</IconWrapper>
                </NavLink>
            </FooterWrapper>
        );
    }

}