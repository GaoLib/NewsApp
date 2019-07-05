import * as actionTypes from './constants'

const defaultState = {
    loginFlag: false,
    userName: null
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case actionTypes.LOGIN:
            return Object.assign({},state,{
                userName: action.username
            })
        default:
            return state
    }
}