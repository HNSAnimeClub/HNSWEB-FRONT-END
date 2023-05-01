import React from "react";
import ReactDOM from "react-dom";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import "antd/dist/reset.css";
import "nprogress/nprogress.css"
import "../public/globalConfig.less";
import reportWebVitals from "./reportWebVitals";
import RouterConfig from "./router/router";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ConfigProvider locale={zhCN}>
        <RouterConfig />
      </ConfigProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
