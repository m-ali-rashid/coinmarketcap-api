// import postReducer from './postReducer.js'
import cryptoReducer from './cryptoReducer.js'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
   cryptos: cryptoReducer,
})

export default rootReducer
