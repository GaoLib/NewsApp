import * as actionTypes from './constants'
import News1 from '../../../images/1.jpg'
import News2 from '../../../images/2.jpg'
import News3 from '../../../images/3.jpg'
import News4 from '../../../images/4.jpg'
import News5 from '../../../images/5.jpg'
import News6 from '../../../images/6.jpg'

const defaultState = {
    curTab: 1,
    tabList: [],
    curBanner: {
        id: 1,
        img: null
    },
    bannerList: [],
    touchStartX: 0,
    newsList: [
        {
            id: 1,
            title: 'DJI 大疆 口袋灵眸 Osmo pocket 口袋云台相机 迷你手持云台相机',
            img: News1
        },
        {
            id: 2,
            title: '米作',
            img: News2
        },
        {
            id: 3,
            title: '好吃的',
            img: News3
        },
        {
            id: 4,
            title: 'DJI 大疆 口袋灵眸 Osmo pocket 口袋云台相机 迷你手持云台相机',
            img: News4
        },
        {
            id: 5,
            title: '米作',
            img: News5
        },
        {
            id: 6,
            title: '好吃的',
            img: News6
        },
    ]
}

export default (state = defaultState, action)=>{
    switch(action.type){
        case actionTypes.GET_TAB_LIST:
            let tabs = [], tabInfo = action.data
            tabInfo.tabList.forEach(tab=>{
                tabs.push({
                    id: tab.id,
                    name: tab.name
                })
            })
            return Object.assign({}, state, {
                tabList: tabs,
                bannerList: tabInfo.tabList[0].bannerList,
                curBanner: {
                    id: tabInfo.tabList[0].bannerList[0].id,
                    img: tabInfo.curBannerImg
                }
            })
        case actionTypes.CHOOSE_TAB:
            return Object.assign({}, state, {
                curTab: action.data
            })
        case actionTypes.SET_TOUCH_STATEX:
            return  Object.assign({}, state, {
               touchStartX: action.data
            })
        case actionTypes.CHANGE_BANNER:
            let curBannerId
            if(action.data > state.touchStartX){
                curBannerId = state.curBanner.id > 1 ? state.curBanner.id - 1 : state.bannerList.length
            } else {
                curBannerId = state.curBanner.id < state.bannerList.length ? state.curBanner.id + 1 : 1
            }
            return Object.assign({}, state, {
               curBanner: {
                   id: curBannerId,
                   img: state.curBanner.img
               }
            })
        case actionTypes.SET_BANNER_IMAGE:
            return Object.assign({}, state, {
                curBanner: {
                   img: action.img,
                   id: state.curBanner.id
                }
            })
        default:
            return state
    }
}