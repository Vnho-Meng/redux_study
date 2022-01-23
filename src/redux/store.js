import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // 用于支持异步 action
import countReducer from "./count_reducer";

export default createStore(countReducer, applyMiddleware(thunk));
