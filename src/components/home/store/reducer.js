import * as actionTypes from './constants'

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
    ]
}

export default (state = defaultState, action)=>{
    switch(action.type){
        case actionTypes.CHOOSE_TAB:
            console.log(action.data)
            return Object.assign({}, state, {
                curTab: action.data
            })
        default:
            return state
    }
}