/**
 * @name: RouterTree.jsx
 * @author: 米洛
 * @date: 2022-11-13 14:12
 * @description：路由树
 */

import React, { lazy } from "react";

const lazyLoad = (path) => lazy(() => import(`../component/pages/${path}`));

const loginJudge = () => {
  // return false;
};

export const routerTree = [
  // 首页
  {
    path: "/",
    component: lazy(() => import("../component/module/basePage/BasePage")),
    redirect: "home",
    children: [
      {
        path: "/home",
        component: lazyLoad("homePage/HomePage"),
      },
    ],
  },
  // 话题
  {
    component: lazy(() => import("../component/module/basePage/BasePage")),
    children: [
      {
        path: "/topic/:id",
        component: lazyLoad("topic/Topic"),
      },
    ],
  },
  // 写文章
  {
    component: lazy(() => import("../component/module/basePage/BasePage")),
    children: [
      {
        path: "/artical/:id",
        component: lazyLoad("artical/Artical"),
      },
    ],
  },

  //未匹配到页面时返回主页
  {
    path: "*",
    redirect: "/home",
    component: lazyLoad("homePage/HomePage"),
  },
];
