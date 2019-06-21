import React, { Component } from 'react';
import { BodyWrapper, Banner,Turn,TurnBanner,NewsWrapper,NewsTitle } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'

class Body extends Component {

    componentDidUpdate(){
        const { curBanner, bannerList, getBannerImage } = this.props
        // getBannerImage(bannerList[curBanner.id - 1].imgUrl)
    }

    render() {
        const { curBanner, bannerList, touchStart, touchEnd, newsList } = this.props
        return (
            <BodyWrapper>
                <Banner 
                    imageUrl={ curBanner.img }
                    onTouchStart = { touchStart }
                    onTouchEnd = { touchEnd }>
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
                            <NewsWrapper key={news.id}>
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
        newsList: state.home.newsList,
    }
}

const mapDispatch = (dispatch)=>{
    return {
        touchStart(e){
            dispatch(actionCreators.setTouchStateX(e.touches[0].clientX))
        },
        touchEnd(e){
            dispatch(actionCreators.changeBanner(e.changedTouches[0].clientX))
        },
        getBannerImage(url){
            dispatch(actionCreators.getBannerImage(url))
        }
    }
}

export default connect(mapState,mapDispatch)(Body)