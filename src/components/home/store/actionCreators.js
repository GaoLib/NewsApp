import * as actionTypes from './constants'
import { actionTypes as accountActionTypes }  from '../../account/store'
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

const setNewBanner = (banner) => ({
    type: actionTypes.SET_NEW_BANNER,
    banner
})

const setNewsImg = (news) => ({
    type: actionTypes.SET_NEWS_IMG,
    news
})

const changeInterested = () => ({
    type: actionTypes.CHANGE_INTERESTED,
    data: ''
})

const changeInterestedList = (list) => ({
    type: accountActionTypes.CHANGEINTERESTLIST,
    list
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

export const changeBanner = (data) => {
    return (dispatch)=>{
        getImage(data.imgUrl).then(
            res=> {
                let newBanner = {
                    id: data.id,
                    img: res
                }
                dispatch(setNewBanner(newBanner))
            }
        )
    }
}
 
export const chooseTab = (data)=>({
    type: actionTypes.CHOOSE_TAB,
    data
})

export const getNewsImg = (id,url)=>{
    return (dispatch) => {
        getImage(url).then(
            res=> {
                let news = {
                    id,
                    img: res
                }
                dispatch(setNewsImg(news))
            }
        )
    }
}

export const setCurNews = (newsId)=>({
    type: actionTypes.SET_CUR_NEWS,
    newsId
})

export const handleInterestedList = (params) => {
    return (dispatch)=>{
        axios.post('http://localhost:8888/changeInterest',params)
        .then(res=>{
            if(res.data !== 'fail'){
                dispatch(changeInterested())
                dispatch(changeInterestedList(res.data))
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
}