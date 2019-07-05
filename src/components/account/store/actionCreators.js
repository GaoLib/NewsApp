import * as actionTypes from './constants'
import axios from 'axios'

const loginSuccess = (username) => ({
    type: actionTypes.LOGIN,
    username
})

export const login = (account)=>{
    return (dispatch) => {
        axios.post('http://localhost:8888/login',account).then(
            res=> {
                if(res === 'success'){
                    dispatch(loginSuccess(account.user))
                }
            },
            err=> { console.log(err) } 
        )
    }
}