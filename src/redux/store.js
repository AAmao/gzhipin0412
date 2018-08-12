/*
redux最核心的store对象模块
 */

import {createStore,applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import reducers from './reducers'
import {composeWithDevTools} from "redux-devtools-extension";
//composeWithDevTools  调试工具  页面中调用redux的state查看的工具
export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))

