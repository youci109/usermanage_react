import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from '../components/user/userReducer'

const userState = {
    users: []
}

interface Props {
    userList():void;
}

const middleware = [thunk]

const store = createStore(rootReducer,userState,applyMiddleware(...middleware));


export default store;