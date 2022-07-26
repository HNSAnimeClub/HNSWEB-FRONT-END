/**
 * @name: Test.jsx
 * @author: 米洛
 * @date: 2022-06-13 13:16
 * @description：用于组件测试的沙盒（试验田）
 */

import React, {useMemo, useState, memo} from 'react';
import style from './test.module.less'
import HNSNavigate from "../baseUI/hnsNavigate/HNSNavigate";
import {Route, Routes, Outlet} from "react-router-dom";
import {Menu} from "antd";
import {useNavigate} from "react-router";
import HNSButton from "../baseUI/hnsButton/HNSButton";


function Test(props) {
  const topData = [
    {
      name: "动漫",
      link: "http://localhost:2007"
    }, {
      name: "游戏",
      link: "xxxx"
    }, {
      name: "发现",
      link: "xxxx"
    }, {
      name: "热点",
      link: "xxxx"
    }
  ]
  const sideData = [
    {
      category: "用户管理",
      // icon: <IconUp/>,
      children: [
        {
          category: "用户二级菜单",
          component: <p>二级菜单主体1</p>,
          // icon: <IconUp/>
        }, {
          category: "用户二级菜单",
          component: <p>二级菜单主体2</p>,
          // icon: <IconUp/>
        }
      ]
    }, {
      category: "评论管理",
      // icon: <IconUp/>,
      children: [
        {
          category: "用户二级菜单",
          component: <p>二级菜单主体3</p>,
          // icon: <IconUp/>
        }, {
          category: "用户二级菜单",
          component: <p>二级菜单主体4</p>,
          // icon: <IconUp/>
        }
      ]
    }, {
      category: "板块管理",
      component: <p>二级菜单主体5</p>,
      // icon: <IconUp/>
    }
  ]
  const [item, setItem] = useState(null)
  const changeItem = (component) => {
    setItem(component)
  }

  return (
    <div className={style.container}>
      <HNSNavigate dataSource={sideData} type={"side"} changeItem={changeItem}/>
      <div>
        导航栏右侧主要展示区域
        {item}
      </div>
    </div>
  );
}

export default Test;
