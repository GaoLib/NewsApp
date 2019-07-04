import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FooterWrapper,IconWrapper } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Footer extends Component{
    render(){
        const { pageFlag, changePage } = this.props
        return (
            <FooterWrapper>
                <NavLink to="/" onClick={()=>changePage(1)}>
                {
                    pageFlag === 1 ? 
                    <IconWrapper className="iconfont" color="#f5ef3e">&#xe690;</IconWrapper>
                    : <IconWrapper className="iconfont" color="#aaa">&#xe608;</IconWrapper>
                }
                    
                </NavLink>
                <NavLink to="/account" onClick={()=>changePage(2)}>
                {
                    pageFlag === 2 ? 
                    <IconWrapper className="iconfont" color="#f5ef3e">&#xe604;</IconWrapper>
                    : <IconWrapper className="iconfont" color="#aaa">&#xe613;</IconWrapper>
                }
                </NavLink>
            </FooterWrapper>
        );
    }

}

const mapState = (state) => {
    return {
        pageFlag: state.footer.pageFlag
    }
} 

const mapProps = (dispatch) => {
    return {
        changePage(val){
            dispatch(actionCreators.changePage(val))
        }
    }
}

export default connect(mapState,mapProps)(Footer)