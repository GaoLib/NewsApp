import React, { Component } from 'react';
import { DetailHeader, BackToHome, DetailTitle,DetailContent,DetailTime,DetailArticle } from './style'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

class Detail extends Component{
   
    render(){
        const { curNews } = this.props
        return (
            <div>
                <DetailHeader>
                    <NavLink to="/">
                        <BackToHome><i className="iconfont">&#xe609;</i></BackToHome>
                    </NavLink>
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

    }
}

export default connect(mapProps,mapDispatch)(Detail)

