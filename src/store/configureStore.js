import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
//this will warn us if we accidentally mutate Redux State

export default function configureStore(initialState){
   const composeEnhancers = 
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
      //add support for Redux Dev Tools
   return createStore(
      rootReducer,
      initialState,
      composeEnhancers(applyMiddleware(thunk,reduxImmutableStateInvariant()))
      )
}