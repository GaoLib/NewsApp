import {combineReducers} from 'redux'
import { reducer as homeReducer } from '../components/home/store'

export default combineReducers({
    home: homeReducer
})