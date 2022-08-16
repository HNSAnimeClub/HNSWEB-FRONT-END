/**
 * @name: HNSSwitchNavigate.jsx
 * @author: 米洛
 * @date: 2022-08-06 21:43
 * @description：切换型导航栏
 */


import React, {useEffect, useRef, useState} from 'react';
import style from './hnsSwitchNavigate.module.less'
import {nanoid} from "nanoid";
import {addStyleSheet, removeClass} from "../../../utils/utils";

function HNSwitchNavigate(props) {
  let {dataSource, switchComponents, mode} = props
  const container = useRef()
  const slideBar = useRef()
  const [itemStack, setItemStack] = useState([])
  const [target, setTarget] = useState(0)
  const [init, setInit] = useState(true)

  const modeJudge = () => {
    switch (mode) {
      case "left":
        return "flex-start"
      case "right":
        return "flex-end"
      default:
        return "center"
    }
  }
  const handleClick = (e, index) => {
    switchComponents(index)
    setTarget(index)
    let {children} = container.current
    for (let i = 0; i < children.length; i++) {
      removeClass(children[i], style.itemActive)
    }
  }
  // 获取选项卡的位置，赋值给slideBar
  // 存储item的left 和 position

  const getPosition = () => {
    let {children} = container.current
    if (itemStack.length < children.length) {
      for (let i = 0; i < children.length; i++) {
        itemStack.push({
            left: children[i].getBoundingClientRect().left,
            width: children[i].offsetWidth
          }
        )
      }
    }
    if (init) {
      addStyleSheet(slideBar.current, {
        width: itemStack[0].width + "px",
        left: itemStack[0].left + "px",
      })
    } else {
      addStyleSheet(slideBar.current, {
        width: itemStack[target].width + "px",
        left: itemStack[target].left + "px",
      })
    }
    setInit(false)
  }


  useEffect(() => {
    getPosition()
  }, [itemStack])

  // 当用户缩放屏幕时应重新获取滑动条的宽度，以及距离左侧的位置
  window.onresize = () => {
    setItemStack([])
    getPosition()

  }

  return (
    <div className={style.slideBarControl}>
      <div className={style.container} ref={container} id={"container"}
           style={{justifyContent: modeJudge()}}>
        {
          dataSource.map((item, index) => {
            return (
              <div key={nanoid()} onClick={event => handleClick(event, index)}
                   className={`${style.item} ${target === index ? style.itemActive : ""}`}>
                {item.icon && item.icon}
                <span className={item.icon && style.title}>{item.title}</span>
              </div>
            )
          })
        }
      </div>
      <div className={style.slideBar} ref={slideBar}
           style={{width: itemStack[target]?.width, left: itemStack[target]?.left}}/>
    </div>
  );
}

export default HNSwitchNavigate;