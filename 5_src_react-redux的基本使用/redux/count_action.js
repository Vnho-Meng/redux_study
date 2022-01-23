import { INCREMENT, DECREMENT } from "./constant";

// 同步 action
export const createIncrementAction = data => ({ type: INCREMENT, data });
export const createDecrementAction = data => ({ type: DECREMENT, data });

// 所谓的异步 action 就是指 action 的值为函数
// 异步 action 中一般都会调用同步任务
// 异步 action 不是必须要用的
export const createIncrementAsyncAction = (data, time) => dispatch => {
	setTimeout(() => {
		dispatch(createIncrementAction(data));
	}, time);
};
