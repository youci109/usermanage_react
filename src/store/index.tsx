import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import { userList } from '../actions/index'

// const initialState = Array<IUser>
const middleware = [thunk]

const store = createStore(rootReducer,applyMiddleware(...middleware));

store.dispatch(userList())

export default store;