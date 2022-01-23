// 引入 Count 的 UI 组件
import React, { Component } from "react";
// 引入 connect 用于连接 UI 组件与redux
import { connect } from "react-redux";
import { increment, decrement, incrementAsync } from "../../redux/actions/count";

// 定义 UI 组件
class Count extends Component {
	componentDidMount() {
		console.log("函数的传递参数", this.props);
	}

	// 加法
	increment = () => {
		const { value } = this.selectNumber;
		this.props.increment(value * 1);
	};

	// 减法
	decrement = () => {
		const { value } = this.selectNumber;
		this.props.decrement(value * 1);
	};

	// 奇数加
	incrementIfOdd = () => {
		const { value } = this.selectNumber;
		if (this.props.count % 2 !== 0) {
			this.props.increment(value * 1);
		}
	};

	// 异步加
	incrementAsync = () => {
		const { value } = this.selectNumber;
		this.props.incrementAsync(value * 1, 500);
	};

	render() {
		return (
			<div>
				<h2>我是Count组件,下方组件人数为{this.props.persons.length}</h2>
				<h4>当前求和为:{this.props.count}</h4>
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

export default connect(state => ({ count: state.count, persons: state.persons }), {
	increment,
	decrement,
	incrementAsync,
})(Count);
