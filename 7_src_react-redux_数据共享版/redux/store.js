/**
 * 该文件专门用于暴露一个 store 对象,整个应用只有一个 store 对象
 */

// 引入 createStore, 专门用于创建 redux 中 最为核心的 store 对象
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"; // 用于支持异步 action
import countReducer from "./reducers/count";
import personReducer from "./reducers/person";

const allReducer = combineReducers({
	he: countReducer,
	rens: personReducer,
});

export default createStore(allReducer, applyMiddleware(thunk));
