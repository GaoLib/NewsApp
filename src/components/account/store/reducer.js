import * as actionTypes from './constants'

const defaultState = {
    loginFlag: 'out',
    accountInfo: {
        id: 0,
        username: null,
        interestedList: []
    }
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case actionTypes.LOGINSUCCESS:
            return Object.assign({},state,{
                accountInfo: action.account,
                loginFlag: 'in'
            })
        case actionTypes.LOGINFAIL:
            return Object.assign({},state,{
                loginFlag: 'error'
            })
        case actionTypes.CHANGEINTERESTLIST:
            let newState1 = JSON.parse(JSON.stringify(state))
            newState1.accountInfo.interestedList = action.list
            return newState1
        default:
            return state
    }
}