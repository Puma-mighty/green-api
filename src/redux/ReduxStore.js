import { combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
// import { composeWithDevTools } from 'redux-devtools-extension';
import MainReducer from './Reducer.js'
import { legacy_createStore as createStore } from 'redux'


// import { applyMiddleware } from 'redux'
// import createSagaMiddleware from 'redux-saga'

// import rootSaga from './sagas'

// const sagaMiddleware = createSagaMiddleware()

let reducers = combineReducers({
  MainReducer
})

// let store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));
let store = createStore(reducers, applyMiddleware(thunk));

// sagaMiddleware.run(rootSaga)

window.store = store;

export default store;