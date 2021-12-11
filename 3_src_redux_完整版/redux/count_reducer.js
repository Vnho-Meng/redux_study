/**
 * 1.该文件是用于创建一个为Count租价您服务的reducer,reducer的本质就是一个函数
 * 2.reducer函数会接受两个参数,分别为:之前的状态(preState),动作对象(action)
 */
const initState = 0

export default function countReducer(preState = initState, action) {
	console.log(action)
	const { type, data } = action
	switch (type) {
		case 'increment': // 如果为加
			return preState + data
		case 'decrement':
			return preState - data // 如果为减
		default:
			return preState
	}
}
