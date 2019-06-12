import React, { Component } from 'react';
import { Banner,Turn,TurnBanner } from './style'
import { connect } from 'react-redux'

class Body extends Component {
    render() {
        const { curBanner, bannerList, mouseUp, mouseDown, mouseMove } = this.props
        const curBannerInfo = bannerList.find(banner=>{
            return banner.id === curBanner
        })
        return (
            <Banner 
                imageUrl={ curBannerInfo.img }
                onMouseUp = { mouseUp }
                onMouseDown = { mouseDown }
                onMouseMove = { mouseMove }>
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
        );
    }
}

const mapState = (state)=>{
    return {
        curBanner: state.home.curBanner,
        bannerList: state.home.bannerList
    }
}

const mapDispatch = (dispatch)=>{
    return {
        mouseUp(e){
            console.log('up' + e.target)
        },
        mouseDown(e){
            console.log('down' + e.target)
        },
        mouseMove(e){
            console.log('move' + e.target)
        }
    }
}

export default connect(mapState,mapDispatch)(Body)