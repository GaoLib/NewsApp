import * as actionTypes from './constants'
import Banner1 from '../../../images/banner.jpg'
import Banner2 from '../../../images/banner2.png'
import Banner3 from '../../../images/banner3.png'
import Banner4 from '../../../images/banner4.png'
import News1 from '../../../images/1.jpg'
import News2 from '../../../images/2.jpg'
import News3 from '../../../images/3.jpg'
import News4 from '../../../images/4.jpg'
import News5 from '../../../images/5.jpg'
import News6 from '../../../images/6.jpg'

const defaultState = {
    curTab: 1,
    tabList: [
        {
            id: 1,
            name: '推荐'
        },
        {
            id: 2,
            name: '热点'
        },
        {
            id: 3,
            name: '娱乐圈'
        },
        {
            id: 4,
            name: '笑点低'
        },
        {
            id: 5,
            name: '二次元'
        },
        {
            id: 6,
            name: '潮人范'
        }
    ],
    curBanner: 1,
    bannerList: [
        {
            id: 1,
            link: '',
            img: Banner1
        },
        {
            id: 2,
            link: '',
            img: Banner2
        },
        {
            id: 3,
            link: '',
            img: Banner3
        },
        {
            id: 4,
            link: '',
            img: Banner4
        }
    ],
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
                curBannerId = state.curBanner > 1 ? state.curBanner - 1 : state.bannerList.length
            } else {
                curBannerId = state.curBanner < state.bannerList.length ? state.curBanner + 1 : 1
            }
            return Object.assign({}, state, {
               curBanner: curBannerId
            })
        default:
            return state
    }
}