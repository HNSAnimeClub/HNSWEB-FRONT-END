import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.less'
import reportWebVitals from './reportWebVitals';
import RouterConfig from "./router";
import {RecoilRoot} from "recoil";


ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterConfig/>
    </RecoilRoot>
  </React.StrictMode>
  , document.getElementById("root"))

reportWebVitals();
