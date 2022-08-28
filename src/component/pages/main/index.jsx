/**
 * @name: index.jsx
 * @author: 米洛
 * @date: 2022-08-20 14:32
 * @description：主站容器
 */

import React, {useState} from 'react';
import HNSNavigate from "../../baseUI/hnsNavigate/HNSNavigate";
import HNSSwitchNavigate from "../../baseUI/hnsSwitchNavigate/HNSSwitchNavigate";
import HNSBackToTop from "../../baseUI/hnsBackToTop/HNSBackToTop";
import IconLike from "../../../icon/iconLike/iconLike";
import IconHeart from "../../../icon/iconHeart/iconHeart";
import IconAll from "../../../icon/iconAll/iconAll";

function Index2(props) {
  return (
    <p style={{color:"red"}}>组件1</p>
  )
}

function Index(props) {
  const topData = [
    {
      name: "首页",
      link: "http://localhost:2007"
    }, {
      name: "主站",
      link: "xxxx"
    }, {
      name: "关于我们",
      link: "xxxx"
    }
  ]
  const switchData = [
    {
      title: "为你推荐",
      icon: <IconLike/>
    }, {
      title: "我的关注",
      icon: <IconHeart/>
    }, {
      title: "全部圈子",
      icon: <IconAll/>
    }
  ]

  const component = [<Index2/>, "组件2", "组件3"]
  const [target, setTarget] = useState(0)

  // 切换按钮
  const switchComponents = (index) => {
    setTarget(index)
  }

  return (
    <div>
      <HNSNavigate dataSource={topData} type={"top"}/>
      <HNSSwitchNavigate dataSource={switchData} switchComponents={switchComponents} mode={"center"}/>
      {component[target]}
      <HNSBackToTop/>
    </div>
  );
}

export default Index;
