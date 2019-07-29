import React, { Component } from 'react';
import { DetailHeader, BackToHome, DetailTitle,DetailContent,DetailTime,DetailArticle,Collect } from './style'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Detail extends Component{
   
    render(){
        const { curNews,accountInfo,handleInterested } = this.props
        return (
            <div>
                <DetailHeader>
                    <NavLink to="/">
                        <BackToHome><i className="iconfont">&#xe609;</i></BackToHome>
                    </NavLink>
                    {
                        curNews.interested ? <Collect className="iconfont" color="#de513f" 
                        onClick={()=>handleInterested(accountInfo.id,curNews.id,false)}>&#xe635;</Collect>
                                : <Collect className="iconfont" color="#333333"  
                                onClick={()=>handleInterested(accountInfo.id,curNews.id,true)}>&#xe602;</Collect>
                    }
                </DetailHeader>
                <DetailContent>
                    <DetailTitle>{ curNews.title }</DetailTitle>
                    <DetailTime>{ curNews.time }</DetailTime>
                    <DetailArticle>{ curNews.content }</DetailArticle>
                </DetailContent>
            </div>
        );
    }
}

const mapProps = (state) => {
    return {
        curNews: state.home.curNews,
        accountInfo: state.account.accountInfo
    }
}

const mapDispatch = (dispatch) => {
    return {
        handleInterested(accountId,newsId,state){
            let params = {
                accountId,
                newsId,
                state
            }
            dispatch(actionCreators.handleInterestedList(params))
        }
    }
}

export default connect(mapProps,mapDispatch)(Detail)

