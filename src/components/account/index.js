import React, { Component } from 'react';
import Footer from '../common/footer'
import { AccountWrapper,Profile,TurnToLogin,LifeWrapper,LifeMoment1,LifeMoment2,LifeMoment3,
Pin1,Pin2,Pin3 } from './style'
import Moment1 from '../../statics/life1.gif'
import Moment2 from '../../statics/life2.gif'
import Moment3 from '../../statics/life3.gif'

export default class Account extends Component{
    render(){
        return (
            <div>
                <AccountWrapper>
                    <Profile>
                        <i className="iconfont">&#xe639;</i>
                        <span>µã»÷µÇÂ¼</span>
                    </Profile>
                    <TurnToLogin>></TurnToLogin>
                </AccountWrapper>
                <LifeWrapper>
                    <Pin1 className="iconfont">&#xe637;</Pin1>
                    <LifeMoment1 src={Moment1} alt=""></LifeMoment1>
                    <Pin2 className="iconfont">&#xe637;</Pin2>
                    <LifeMoment2 src={Moment2} alt=""></LifeMoment2>
                    <Pin3 className="iconfont">&#xe637;</Pin3>
                    <LifeMoment3 src={Moment3} alt=""></LifeMoment3>
                </LifeWrapper>
                <Footer />
            </div>
        );
    }

}