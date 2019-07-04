import React, { Component } from 'react';
import { DetailHeader, BackToHome, DetailTitle,DetailContent,DetailTime,DetailArticle,Collect } from './style'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Detail extends Component{
   
    render(){
        const { curNews,handleInterested } = this.props
        return (
            <div>
                <DetailHeader>
                    <NavLink to="/">
                        <BackToHome><i className="iconfont">&#xe609;</i></BackToHome>
                    </NavLink>
                    {
                        curNews.interested ? <Collect className="iconfont" color="#de513f" onClick={handleInterested}>&#xe635;</Collect>
                                : <Collect className="iconfont" color="#333333"  onClick={handleInterested}>&#xe602;</Collect>
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
        curNews: state.home.curNews
    }
}

const mapDispatch = (dispatch) => {
    return {
        handleInterested(){
            dispatch(actionCreators.changeInterested())
        }
    }
}

export default connect(mapProps,mapDispatch)(Detail)

