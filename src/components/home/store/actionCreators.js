import * as actionTypes from './constants'
import axios from 'axios'

const getImage = (url) => {
    return new Promise((resolve,reject)=>{
        axios.post('http://localhost:8888/getImage',{url},{ responseType: "arraybuffer" })
        .then(res=>{
            return (
                "data:image/png;base64," +
                btoa(
                    new Uint8Array(res.data).reduce(
                        (data, byte) =>
                            data + String.fromCharCode(byte),
                        ""
                    )
                )
            );
        })
        .then(img=>{
            resolve(img)
        })
        .catch(err=>{
            reject(err)
        })
    })
}

const initTabList = (data) => ({
    type: actionTypes.GET_TAB_LIST,
    data
})

const setBannerImage = (img)=>({
    type: actionTypes.SET_BANNER_IMAGE,
    img
})

export const getTabList = () => {
    return (dispatch)=>{
        axios.get('http://localhost:8888/getTabList')
        .then(res=>{
            if(res.status === 200){
                getImage(res.data[0].bannerList[0].imgUrl).then(
                    img=>{
                        let data = {
                            tabList: res.data,
                            curBannerImg: img
                        }
                        dispatch(initTabList(data))
                    }
                )
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

export const getBannerImage = (url) => {
    return (dispatch)=>{
        getImage(url)
        .then(res=>{
            dispatch(setBannerImage(res))
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