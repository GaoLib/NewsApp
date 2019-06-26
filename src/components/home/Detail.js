import React, { Component } from 'react';
import { DetailHeader, BackToHome, DetailTitle,DetailContent } from './style'
import { NavLink } from 'react-router-dom';

export default class Detail extends Component{
   
    render(){
        return (
            <div>
                <DetailHeader>
                    <NavLink to="/">
                        <BackToHome><i className="iconfont">&#xe609;</i></BackToHome>
                    </NavLink>
                </DetailHeader>
                <DetailContent>
                    <DetailTitle>大惊喜！魔都竟藏着古都“洛阳城”？！一笼「资深汤包」火了16年!</DetailTitle>
                </DetailContent>
            </div>
        );
    }

}