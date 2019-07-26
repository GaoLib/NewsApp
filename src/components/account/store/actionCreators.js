import * as actionTypes from './constants'
import axios from 'axios'

const loginSuccess = (account) => ({
    type: actionTypes.LOGINSUCCESS,
    account
})

const loginFail = () => ({
    type: actionTypes.LOGINFAIL
})

export const login = (account)=>{
    return (dispatch) => {
        axios.post('http://localhost:8888/login',account).then(
            res=> {
                if(res.data){
                    dispatch(loginSuccess(res.data))
                } else { 
                    dispatch(loginFail())
                }
            },
            err=> { console.log(err) } 
        )
    }
}