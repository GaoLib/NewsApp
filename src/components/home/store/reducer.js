import * as actionTypes from './constants'

const defaultState = {
    curTab: 1,
    tabList: [],
    curBanner: {
        id: 1,
        img: null
    },
    bannerList: [],
    newsList: [],
    curNews: {}
}

export default (state = defaultState, action)=>{
    switch(action.type){
        case actionTypes.GET_TAB_LIST:
            let tabInfo = action.data
            return Object.assign({}, state, {
                tabList: tabInfo.tabList,
                bannerList: tabInfo.tabList[0].bannerList,
                curBanner: {
                    id: tabInfo.tabList[0].bannerList[0].id,
                    img: tabInfo.curBannerImg
                },
                newsList: tabInfo.tabList[0].newsList
            })
        case actionTypes.CHOOSE_TAB:
            let newTab = state.tabList.find(tab=>{ return tab.id === action.data })
            return Object.assign({}, state, {
                curTab: action.data,
                newsList: newTab.newsList
            })
        case actionTypes.SET_NEW_BANNER:
            return Object.assign({}, state, {
                curBanner: {
                    id: action.banner.id,
                    img: action.banner.img
                }
            })
        case actionTypes.SET_NEWS_IMG:
            let curNewsIndex = state.newsList.findIndex(news=>news.id === action.news.id)
            let newState = JSON.parse(JSON.stringify(state))
            newState.newsList[curNewsIndex].img = action.news.img
            return newState
        case actionTypes.SET_CUR_NEWS:
            let curNews = state.newsList.find(news=>news.id === action.newsId)
            return Object.assign({}, state, {
                curNews
            })
        case actionTypes.CHANGE_INTERESTED:
            let newState1 = JSON.parse(JSON.stringify(state))
            newState1.curNews.interested = !newState1.curNews.interested
            let news = newState1.newsList.find(news=> news.id === newState1.curNews.id)
            news.interested = !news.interested
            return newState1
        default:
            return state
    }
}