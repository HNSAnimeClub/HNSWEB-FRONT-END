/**
 * @name: Test.jsx
 * @author: 米洛
 * @date: 2022-06-13 13:16
 * @description：用于组件测试的沙盒（试验田）
 */


import React, {useState} from 'react';
import style from './test.module.less'
import IconLike from "../../icon/iconLike/iconLike";
import IconHeart from "../../icon/iconHeart/iconHeart";
import IconAll from "../../icon/iconAll/iconAll";
import HNSSwitchNavigate from "../baseUI/hnsSwitchNavigate/HNSSwitchNavigate";


function Test(props) {
  const data = [
    {
      title: "为你推荐",
      icon: <IconLike/>
    }, {
      title: "我的关注",
      icon: <IconHeart/>
    }, {
      title: "全部圈子",
      icon: <IconAll/>
    }, {
      title: "全部圈子22",
    },
  ]
  const component = ["组件1", "组件2", "组件3"]
  const [target, setTarget] = useState(0)
  const switchComponents = (index) => {
    setTarget(index)
  }
  return (
    <div className={style.container}>
      <HNSSwitchNavigate dataSource={data} switchComponents={switchComponents} mode={"right"}/>
      <p>{component[target]}</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
    </div>
  );
}

export default Test;
