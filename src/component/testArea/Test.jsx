/**
 * @name: Test.jsx
 * @author: 米洛
 * @date: 2022-06-13 13:16
 * @description：用于组件测试的沙盒（试验田）
 */


import React, {useState} from 'react';
import style from './test.module.less'
import HNSNavigate from "../baseUI/hnsNavigate/HNSNavigate";
import IconUp from "../../icon/iconUp/iconUp";


function Test(props) {
  const sideData = [
    {
      category: "用户管理",
      children: [
        {
          category: "用户二级菜单",
          component: <p>二级菜单主体1</p>,
        }, {
          category: "用户二级菜单",
          component: <p>二级菜单主体2</p>,
        }
      ]
    }, {
      category: "评论管理",
      children: [
        {
          category: "用户二级菜单",
          component: <p>二级菜单主体3</p>,
        }, {
          category: "用户二级菜单",
          component: <p>二级菜单主体4</p>,
        }
      ]
    }, {
      category: "板块管理",
      component: <p>二级菜单主体5</p>,
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
        {item}
      </div>
    </div>
  );
}

export default Test;
