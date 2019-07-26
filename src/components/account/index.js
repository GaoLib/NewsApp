import React, { Component } from 'react';
import Footer from '../common/footer'
import { AccountWrapper,Profile,TurnToLogin,LifeWrapper,LifeMoment1,LifeMoment2,LifeMoment3,
Pin1,Pin2,Pin3 } from './style'
import { connect } from 'react-redux'
import Moment1 from '../../statics/life1.gif'
import Moment2 from '../../statics/life2.gif'
import Moment3 from '../../statics/life3.gif'
import { NavLink } from 'react-router-dom';

class Account extends Component{
    render(){
        const { loginFlag,accountInfo } = this.props
        return (
            <div>
                <AccountWrapper>
                    <NavLink to="/login">
                        <Profile>
                            <i className="iconfont">&#xe639;</i>
                            <span>{ loginFlag === 'in'? accountInfo.username : '点击登录' }</span>
                        </Profile>
                        <TurnToLogin>></TurnToLogin>
                    </NavLink>
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

const mapState = (state) => {
    return {
        loginFlag: state.account.loginFlag,
        accountInfo: state.account.accountInfo
    }
}

const mapDispatch = (dispatch) => {
    return {

    }
}

export default connect(mapState,mapDispatch)(Account)