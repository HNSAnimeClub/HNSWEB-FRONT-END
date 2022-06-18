/**
 * @Author: 米洛
 * @Date: 2022-06-08 21:53
 * @Description: 示例组件
 */

import React, {useState} from 'react';
import style from './example.module.less'
import HNSButton from "../../baseUI/hnsButton/HNSButton";

function Example(props) {
  const [state, setState] = useState(1)
  const handleClick = () => {
    setState(!state)
  }

  return (
    <div className={style.container}>
      <p>{(state && "你好，世界") || "这是你的第一个 React 组件"}</p>
      <HNSButton onClick={handleClick}>点击切换文本</HNSButton>
    </div>
  );
}

export default Example;