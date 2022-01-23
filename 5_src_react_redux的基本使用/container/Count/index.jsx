// 引入 Count 的 UI 组件
import CountUI from "../../components/Count";
// 引入 connect 用于连接 UI 组件与redux
import { connect } from "react-redux";
import {
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction,
} from "../../redux/count_action";

// 函数的返回值作为状态传递给了 UI 组件 (必为对象)
const mapStateToProps = state => ({ count: state });

// 函数返回的对象最为操作 store 状态的方法 (必为函数)
const mapDispatchToProps = dispatch => ({
	add: data => dispatch(createIncrementAction(data)),
	dec: data => dispatch(createDecrementAction(data)),
	asyncAdd: (data, time) => dispatch(createIncrementAsyncAction(data, time)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
