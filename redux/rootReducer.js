import { combineReducers,applyMiddleware,createStore } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";
// import reducers

const rootReducer = combineReducers({
    // reducer:reducer
})

export const initStore =  createStore(rootReducer,composeWithDevTools(
        applyMiddleware(thunk)
    ))
