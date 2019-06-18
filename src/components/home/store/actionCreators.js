import * as actionTypes from './constants'
import axios from 'axios'

const initTabList = (data) => ({
    type: actionTypes.GET_TAB_LIST,
    data
})

export const getTabList = () => {
    return (dispatch)=>{
        axios.get('http://localhost:8888/getTabList')
        .then(res=>{
            if(res.status === 200){
                dispatch(initTabList(res.data))
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

export const getImage = (url) => {
    return ()=>{
        axios.post('http://localhost:8888/getImage',{url})
        .then(res=>{
            return res
        })
        .catch(err=>{
            console.log(err)
        })
    }
} 
 
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