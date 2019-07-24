import * as actionTypes from './constants'

const defaultState = {
    loginFlag: 'out',
    userName: null
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case actionTypes.LOGINSUCCESS:
            return Object.assign({},state,{
                userName: action.username,
                loginFlag: 'in'
            })
        case actionTypes.LOGINFAIL:
            return Object.assign({},state,{
                loginFlag: 'error'
            })
        default:
            return state
    }
}