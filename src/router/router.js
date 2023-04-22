import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { routerTree } from "./RouterTree";
import { nanoid } from "nanoid";
import Protector from "./Protector";
import HNSLoading from "../component/baseUI/hnsLoading/HNSLoading";

/**
 * @Author: 米洛
 * @Date: 2022-6-17 22:37
 * @returns {JSX.Element}
 * @description 路由
 */
export default function RouterConfig() {
  // 递归生成路由
  const routerRender = (routerList) => {
    if (!routerList) return;
    return routerList.map(
      ({ path, component: Component, children, ...ohterProps }) => {
        return (
          <Route
            key={nanoid()}
            path={path}
            element={
              <Protector {...ohterProps}>
                <Component />
              </Protector>
            }
          >
            {routerRender(children)}
          </Route>
        );
      }
    );
  };

  return (
    <BrowserRouter>
      <Suspense fallback={<HNSLoading fullScreen />}>
        <Routes>{routerRender(routerTree)}</Routes>
      </Suspense>
    </BrowserRouter>
  );
}
