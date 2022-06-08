import 'antd/dist/antd.less'
import reportWebVitals from './reportWebVitals';
import dva from 'dva'
import {createBrowserHistory} from "history";
import RouterConfig from "./router";
import './index.css';


// 创建应用
const app = dva({
  history: createBrowserHistory(),
});
//路由
app.router(RouterConfig)

//model 单个注册
// app.model(require('./models/dvaModel').default)

//model遍历注册注册
require('./models').default.forEach(key => app.model(key.default))

// 启动应用
app.start('#root');

reportWebVitals();
