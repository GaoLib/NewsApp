import * as actionTypes from './constants'

export const chooseTab = (data)=>({
    type: actionTypes.CHOOSE_TAB,
    data
})

export const setTouchStateX = (data)=>({
    type: actionTypes.SET_TOUCH_STATEX,
    data
})

export const changeBanner = (data) => ({
    type: actionTypes.CHANGE_BANNER,
    data
})