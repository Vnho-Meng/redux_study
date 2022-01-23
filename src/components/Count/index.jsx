import React, { Component } from "react";
// 引入store用于获取redux中保存的状态
import store from "../../redux/store";

import { createDecrementAction, createIncrementAction, createIncrementAsyncAction } from "../../redux/count_action";
export default class Count extends Component {
	increment = () => {
		const { value } = this.selectNumber;
		store.dispatch(createIncrementAction(value * 1));
	};

	decrement = () => {
		const { value } = this.selectNumber;
		store.dispatch(createDecrementAction(value * 1));
	};

	incrementIfOdd = () => {
		const { value } = this.selectNumber;
		if (store.getState() % 2 !== 0) {
			store.dispatch(createIncrementAction(value * 1));
		}
	};

	// 异步加
	incrementAsync = () => {
		const { value } = this.selectNumber;

		// setTimeout(() => {
		store.dispatch(createIncrementAsyncAction(value * 1, 500));
		// }, 1000);
	};

	render() {
		return (
			<div>
				<h1>当前求和为:{store.getState()}</h1>
				<select ref={c => (this.selectNumber = c)}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>
				&nbsp;&nbsp;&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;&nbsp;&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;&nbsp;&nbsp;
				<button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;&nbsp;&nbsp;
				<button onClick={this.incrementAsync}>异步加</button>
			</div>
		);
	}
}
