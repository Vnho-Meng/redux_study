/**
 * 该文件用于汇总所有的 reducer 为一个总的 reducer
 */

import { combineReducers } from "redux";

// 引入为 Count 组件 服务的 reducer
import count from "./count";
// 引入为 Person 组件服务的 reducer
import person from "./person";

// 汇总所有的 reducers
export default combineReducers({ count, person });
