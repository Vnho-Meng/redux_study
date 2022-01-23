import React from "react";
import ReactDom from "react-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

import App from "./App";
ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

/**
 * 检测 redux 中状态的改变,如果 redux 的状态发生了不改变,那么重新渲染 App 组件
 */
// store.subscribe(() => {
// 	ReactDom.render(<App />, document.getElementById("root"));
// });
