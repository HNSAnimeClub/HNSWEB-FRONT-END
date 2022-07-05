/**
 * @name: HNSToast.jsx
 * @author: 米洛
 * @date: 2022-07-05 12:26
 * @description：消息框
 */

import React, {useState} from 'react';
import style from './hnsToast.module.less'

function HNSToast(props) {
  let {delay, top, right, bottom, left, close} = props
  const [visible, setVisible] = useState(false)
  const [content, setContent] = useState("")
  if (delay && close) {
    throw new Error('delay和close只能指定一个')
  }

  HNSToast.message = (content) => {
    if (!visible && content && delay) {
      setContent(content)
      setVisible(true)
      setTimeout(() => {
        setVisible(visible => false)
      }, delay ? delay * 1000 : 3000)
    }
    if (!visible && close && !delay) {
      setVisible(false)
    }
  }

  return (
    <div className={visible ? style.controllerActive : style.controllerClose} style={{top, right, bottom, left}}>
      {content}
    </div>
  );
}

export default HNSToast;