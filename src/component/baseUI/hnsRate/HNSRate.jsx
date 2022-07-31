/**
 * @name: HNSRate
 * @author: 米洛
 * @date: 2022-07-30 21:05
 * @description：评分组件
 */

import React, {useEffect, useRef, useState} from 'react';
import style from './hnsRate.module.less'
import IconStar from "../../../icon/iconStar/IconStar";
import {nanoid} from "nanoid";

function HNSRate(props) {
  let {defaultRate, lock, onClick} = props
  if (defaultRate && ((typeof defaultRate).toLowerCase() !== "number")) {
    throw new Error("defaultRate 必须为数值类型")
  }

  const stars = [
    <IconStar key={nanoid()} className={style.star}/>,
    <IconStar key={nanoid()} className={style.star}/>,
    <IconStar key={nanoid()} className={style.star}/>,
    <IconStar key={nanoid()} className={style.star}/>,
    <IconStar key={nanoid()} className={style.star}/>,
  ]

  const div = useRef()
  let index = defaultRate ? defaultRate - 1 : null

  useEffect(() => {
    let {children} = div.current
    if (index) {
      for (let i = 0; i <= index; i++) {
        children[i].classList.add(style.starActive)
      }
    }

  }, [])

  const starsActive = (e) => {
    let {children} = div.current
    const addClass = (i) => {
      children[i].classList.add(style.starActive)
    }
    if (lock) {
      for (let i = 0; i < index; i++) {
        children[i].classList.add(style.starActive)
      }
    } else {
      for (let i = 0; i < children.length; i++) {
        children[i].classList.remove(style.starActive)
      }

      for (let i = 0; i < children.length; i++) {
        if (e.target === children[i]) {
          index = i
        }
      }
      for (let i = 0; i <= index; i++) {
        addClass(i)
      }
    }
  }
  const handleClick = () => {
    if (!lock && onClick) {
      let score = (index + 1).toFixed(1)
      props.onClick(score)
    }
  }

  return (
    <div className={style.main} onMouseOver={starsActive} ref={div} onClick={handleClick}>
      {stars}
    </div>
  );
}

export default HNSRate;