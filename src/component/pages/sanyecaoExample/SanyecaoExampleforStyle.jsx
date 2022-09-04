/*
 * @Author: 三椰草Ω 3291875824@qq.com
 * @Date: 2022-09-04 15:10:53
 * @LastEditors: 三椰草Ω 3291875824@qq.com
 * @LastEditTime: 2022-09-04 15:45:10
 * @FilePath: \HNSWEB-FRONT-END\src\component\pages\sanyecaoExample\SanyecaoExampleforStyle.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, {useState} from 'react';
import style from './SanyecaoExample.module.less'
import {nanoid} from "nanoid";


function SanyecaoExampleforStyle(props) {
  const tag = ["热门", "番剧", "游戏"]//可点击的元素
  const [target, setTarget] = useState(0)
  const handleClick = (index) => {
    setTarget(index)//点击事件
  }

  return (
    <div className={style.container}>
      {
        tag.map((item, index) => {
          return (
            <button className={`${style.button} ${target === index ? style.isActive : ""}`}
                    onClick={event => handleClick(index)}
                    key={nanoid()}>{tag[index]}</button>
          )
        })
      }
    </div>
  );
}

export default SanyecaoExampleforStyle;