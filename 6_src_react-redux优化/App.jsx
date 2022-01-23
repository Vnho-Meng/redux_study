import React, { Component } from "react";
import ContainerCount from "./container/Count";

export default class App extends Component {
	render() {
		return (
			<div>
				{/* 为 UI 组件传递 store 属性 */}
				<ContainerCount />
			</div>
		);
	}
}
