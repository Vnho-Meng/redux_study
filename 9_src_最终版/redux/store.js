/**
 * 该文件专门用于暴露一个 store 对象,整个应用只有一个 store 对象
 */

// 引入 createStore, 专门用于创建 redux 中 最为核心的 store 对象
import { createStore, applyMiddleware } from "redux";
// 用于支持异步 action
import thunk from "redux-thunk";

import reducer from "./reducers";

// 引入 redux 的开发者工具
import { composeWithDevTools } from "redux-devtools-extension";
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
