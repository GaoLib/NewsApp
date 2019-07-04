import {combineReducers} from 'redux'
import { reducer as homeReducer } from '../components/home/store'
import { reducer as footerReducer } from '../components/common/footer/store'

export default combineReducers({
    home: homeReducer,
    footer: footerReducer
})