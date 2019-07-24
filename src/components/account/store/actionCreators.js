import * as actionTypes from './constants'
import axios from 'axios'

const loginSuccess = (username) => ({
    type: actionTypes.LOGINSUCCESS,
    username
})

const loginFail = () => ({
    type: actionTypes.LOGINFAIL
})

export const login = (account)=>{
    return (dispatch) => {
        axios.post('http://localhost:8888/login',account).then(
            res=> {
                if(res.data === 'success'){
                    dispatch(loginSuccess(account.user))
                } else { 
                    dispatch(loginFail())
                }
            },
            err=> { console.log(err) } 
        )
    }
}