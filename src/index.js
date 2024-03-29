import React from "react";
import ReactDOM from "react-dom";
import { ConfigProvider, App } from "antd";
import zhCN from "antd/locale/zh_CN";
import "antd/dist/reset.css";
import "nprogress/nprogress.css";
import "../public/globalConfig.less";
import reportWebVitals from "./reportWebVitals";
import RouterConfig from "./router/router";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ConfigProvider
        locale={zhCN}
        theme={{
          token: {
            colorPrimary: "#1f1f1f",
            fontFamily:"noto Sans SC, Roboto, sans-serif"
          },
        }}
      >
        <App>
        <RouterConfig />
        </App>
      </ConfigProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
