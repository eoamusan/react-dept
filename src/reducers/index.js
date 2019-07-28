import { combineReducers } from 'redux'
import home from './HomeReducer'
import { connectRouter } from 'connected-react-router';

export default (history) => combineReducers({
    router: connectRouter(history),
    home
})