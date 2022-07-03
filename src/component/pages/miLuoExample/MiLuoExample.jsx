/**
 * @name: MiLuoExample.jsx
 * @author: 米洛
 * @date: 2022-07-03 15:21
 * @description：米洛的示例组件
 */

import React, {useState} from 'react'
import style from './miLuoExample.module.less'

function MiLuoExample() {
  const [title, setTitle] = useState(0)

  const handleClick = () => {
    setTitle(!title)
  }
  return (
    <div>
      <h1 className={`${title ? style.title : style.titlePrimary}`}>我是米洛</h1>
      <button onClick={handleClick}>按钮点击变化</button>
      {title && <span>123</span>}
    </div>
  )
}

export default MiLuoExample