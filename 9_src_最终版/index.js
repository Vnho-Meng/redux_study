import React from "react";
import ReactDom from "react-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

import App from "./App";
ReactDom.render(
	/**
	 * 此处需要用 Provider 包裹 App 目的是让 App 所有的后代容器组件都能接收到 store
	 */
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
