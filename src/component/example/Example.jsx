/*
 * @Author: 米洛
 * @Date: 2022-06-08 21:53
 * @Description: 示例组件
 */

import React, {useState} from 'react';
import {Button} from "antd";
import style from './example.module.less'

function Example(props) {
  const [state, setState] = useState(1)
  const handleClick = () => {
    setState(!state)
  }

  return (
    <div className={style.container}>
      <p>{state && "你好，世界" || "这是你的第一个 React 组件"}</p>
      <Button onClick={handleClick}>点击切换文本</Button>
    </div>
  );
}

export default Example;