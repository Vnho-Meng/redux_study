// 引入 Count 的 UI 组件
import React, { Component } from "react";
// 引入 connect 用于连接 UI 组件与redux
import { connect } from "react-redux";
import {
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction,
} from "../../redux/count_action";

// 定义 UI 组件
class Count extends Component {
	componentDidMount() {
		console.log("函数的传递参数", this.props);
	}

	// 加法
	increment = () => {
		const { value } = this.selectNumber;
		this.props.add(value * 1);
	};

	// 减法
	decrement = () => {
		const { value } = this.selectNumber;
		this.props.dec(value * 1);
	};

	// 奇数加
	incrementIfOdd = () => {
		const { value } = this.selectNumber;
		if (this.props.count % 2 !== 0) {
			this.props.add(value * 1);
		}
	};

	// 异步加
	incrementAsync = () => {
		const { value } = this.selectNumber;
		this.props.asyncAdd(value * 1, 500);
	};

	render() {
		return (
			<div>
				<h1>当前求和为:{this.props.count}</h1>
				<select ref={c => (this.selectNumber = c)}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>
				&nbsp;&nbsp;&nbsp;
				<button onClick={this.increment}>+</button>
				&nbsp;&nbsp;&nbsp;
				<button onClick={this.decrement}>-</button>
				&nbsp;&nbsp;&nbsp;
				<button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>
				&nbsp;&nbsp;&nbsp;
				<button onClick={this.incrementAsync}>异步加</button>
			</div>
		);
	}
}

export default connect(
	state => ({ count: state }),
	// mapStateToProps的一般写法
	/* 	dispatch => ({
		add: data => dispatch(createIncrementAction(data)),
		dec: data => dispatch(createDecrementAction(data)),
		asyncAdd: (data, time) => dispatch(createIncrementAsyncAction(data, time)),
	}) */
	// mapStateToProps的精简写法
	{
		add: createIncrementAction,
		dec: createDecrementAction,
		asyncAdd: createIncrementAsyncAction,
	}
)(Count);
