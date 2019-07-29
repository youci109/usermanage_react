import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from '../components/user/userReducer'
/* 导入 redux-devtools-extension
   参考 https://github.com/zalmoxisus/redux-devtools-extension#13-use-redux-devtools-extension-package-from-npm 
*/
import { composeWithDevTools } from 'redux-devtools-extension';

const userState = {
    users: []
}

interface Props {
    userList(): void;
}

const middleware = [thunk]

const store = createStore(rootReducer, userState,
    composeWithDevTools(
        applyMiddleware(...middleware))
);


export default store;