/**
 * @name: MiLuoExample.jsx
 * @author: 米洛
 * @date: 2022-07-03 15:21
 * @description：米洛的示例组件
 */

import React, {useState} from 'react'
import style from './miLuoExample.module.less'

function MiLuoExample() {
  const [title, setTitle] = useState({name: "罗翔", age: "18"})

  const handleClick = () => {

    setTitle((pre) => {
      title.name = "张三"
      return {...pre, ...title}
    })
  }
  return (
    <div>
      <h1 className={`${title ? style.title : style.titlePrimary}`}>{title.name} {title.age}</h1>
      <button onClick={handleClick}>按钮点击变化</button>
    </div>
  )
}

export default MiLuoExample