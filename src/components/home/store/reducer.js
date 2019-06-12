import * as actionTypes from './constants'
import Banner1 from '../../../images/banner.jpg'
import Banner2 from '../../../images/banner2.png'
import Banner3 from '../../../images/banner3.png'
import Banner4 from '../../../images/banner4.png'

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
    ]
}

export default (state = defaultState, action)=>{
    switch(action.type){
        case actionTypes.CHOOSE_TAB:
            return Object.assign({}, state, {
                curTab: action.data
            })
        default:
            return state
    }
}