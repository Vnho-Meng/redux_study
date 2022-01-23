import React, { Component } from "react";
import ContainerCount from "./container/Count";
import store from "./redux/store";
export default class App extends Component {
	render() {
		return (
			<div>
				{/* 为 UI 组件传递 store 属性 */}
				<ContainerCount store={store} />
			</div>
		);
	}
}
