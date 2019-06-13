import React, { Component } from 'react';
import { BodyWrapper, Banner,Turn,TurnBanner,NewsWrapper,NewsTitle } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import img from '../../images/1.jpg'

class Body extends Component {

    render() {
        const { curBanner, bannerList, touchStart, touchEnd, newsList } = this.props
        const curBannerInfo = bannerList.find(banner=>{
            return banner.id === curBanner
        })
        return (
            <BodyWrapper>
                <Banner 
                    imageUrl={ curBannerInfo.img }
                    onTouchStart = { touchStart }
                    onTouchEnd = { touchEnd }>
                    <Turn>
                    {
                        bannerList.map(banner=>{
                            return (
                                <TurnBanner 
                                    className={banner.id === curBanner ? 'banner-active' : ''}
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
                            <NewsWrapper>
                                <NewsTitle>{news.title}</NewsTitle>
                                <img src={news.img} alt="" />
                            </NewsWrapper>
                        )
                    })
                }
            </BodyWrapper>  
        );
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
        touchStart(e){
            dispatch(actionCreators.setTouchStateX(e.touches[0].clientX))
        },
        touchEnd(e){
            dispatch(actionCreators.changeBanner(e.changedTouches[0].clientX))
        }
    }
}

export default connect(mapState,mapDispatch)(Body)