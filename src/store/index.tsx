import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer, { IRootState } from '../reducers';
/* 导入 redux-devtools-extension
    https://github.com/zalmoxisus/redux-devtools-extension#13-use-redux-devtools-extension-package-from-npm 
*/
/* import { composeWithDevTools } from 'redux-devtools-extension';
 */


import DevTools from '../util/devtools';




const store = (initialState?: IRootState) =>
    /*  redux-thunk 没有使用时action中必须返回为一个对象｛type:""｝
         使用了之后，action就可以返回一个函数，这样在函数中可以做一些处理，如异步获取数据
    // no user thunk createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware())); */
    /* user thunk //  */
    // createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
    createStore(rootReducer, initialState, compose(applyMiddleware(thunk), DevTools.instrument()));
// store().dispatch({type:'ADD_USER'})

export default store;