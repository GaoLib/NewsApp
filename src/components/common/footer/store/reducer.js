import * as actionTypes from './constants'

const defaultState = {
    pageFlag: 1 
}

export default (state = defaultState, action)=>{
    switch(action.type){
        case actionTypes.CHANGE_PAGE:
            return Object.assign({},state,{
                pageFlag: action.page
            })
        default:
            return state
    }
}