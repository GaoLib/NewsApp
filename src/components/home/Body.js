import React, { Component } from 'react';
import { BodyWrapper, Banner,Turn,TurnBanner,NewsWrapper,NewsTitle,NewsPhoto,Interest } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { NavLink } from 'react-router-dom';

class Body extends Component {

    constructor(props){
        super(props)
        this.state = {
            touchStartX: 0
        }
        this.touchStart = this.touchStart.bind(this)
        this.touchEnd = this.touchEnd.bind(this)
    }

    componentWillReceiveProps(nextProps){
        const { newsList, getNewsImg } = this.props
        const nextNewsList = nextProps.newsList
        
        nextNewsList.forEach((newItem, index) =>{
            if(!newsList[index] || newsList[index].imgUrl !== newItem.imgUrl){
                getNewsImg(newItem.id,newItem.imgUrl)
            }
        })
    }

    render() {
        const { curBanner, bannerList, newsList, getNewsDetail } = this.props
        return (
            <BodyWrapper>
                <Banner 
                    imageUrl={ curBanner.img }
                    onTouchStart = { this.touchStart }
                    onTouchEnd = { this.touchEnd }>
                    <Turn>
                    {
                        bannerList.map(banner=>{
                            return (
                                <TurnBanner 
                                    className={banner.id === curBanner.id ? 'banner-active' : ''}
                                    key={banner.id}>
                                </TurnBanner>
                            )
                        })
                    }
                    </Turn>
                </Banner>
                {
                    newsList.map(news=>{
                        return (
                            <NavLink to="/detail" key={news.id} onClick={()=>getNewsDetail(news.id)}>
                                <NewsWrapper>
                                    <NewsTitle>{news.title}</NewsTitle>
                                    <NewsPhoto src={news.img} alt=""></NewsPhoto>
                                    {
                                        news.interested ? <Interest className="iconfont" color="#de513f">&#xe635;</Interest>
                                        : <Interest className="iconfont" color="#333333">&#xe602;</Interest>
                                    }
                                </NewsWrapper>
                            </NavLink>
                        )
                    })
                }
            </BodyWrapper>  
        );
    }

    touchStart(e){
        this.setState({
            touchStartX: e.touches[0].clientX
        })
    }

    touchEnd(e){
        let endX = e.changedTouches[0].clientX, newBannerId, newBanner
        const { curBanner, bannerList, changeBanner } = this.props
        if(endX > this.state.touchStartX){
            newBannerId = curBanner.id > 1 ? curBanner.id - 1 : bannerList.length
        } else {
            newBannerId = curBanner.id < bannerList.length ? curBanner.id + 1 : 1
        }
        newBanner = {
            id: newBannerId,
            imgUrl: bannerList.find(banner=>{ return banner.id === newBannerId }).imgUrl
        }
        changeBanner(newBanner)
    }
}

const mapState = (state)=>{
    return {
        curBanner: state.home.curBanner,
        bannerList: state.home.bannerList,
        newsList: state.home.newsList
    }
}

const mapDispatch = (dispatch)=>{
    return {
        changeBanner(newBanner){
            dispatch(actionCreators.changeBanner(newBanner))
        },
        getNewsImg(id,url){
            dispatch(actionCreators.getNewsImg(id,url))
        },
        getNewsDetail(id){
            dispatch(actionCreators.setCurNews(id))
        }
    }
}

export default connect(mapState,mapDispatch)(Body)