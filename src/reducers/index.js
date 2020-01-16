import countReducer from './countReducer'
import todoReducer from './todoReducer'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({countReducer, todoReducer})

export default rootReducer