/**
 * @name: HNSBackToTop.jsx
 * @author: 米洛
 * @date: 2022-08-19 20:34
 * @description：回到顶部按钮
 */

import React, {useState} from 'react';
import style from './hnsBackToTop.module.less'
import IconArrowTop from "../../../icon/iconArrowTop/iconArrowTop";
import {debounce} from "../../../utils/hnsDebounce";

function HNSBackToTop(props) {
  const backToTop = (e) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  // 滚动设置隐藏
  window.onscroll = () => {
    // 防抖 2s 执行一次
    debounce(() => {
      if (window.scrollY > window.innerHeight / 3)
        setShow(true)
      else
        setShow(false)
    }, 200)
  }
  const [show, setShow] = useState(false)
  return (
    <div className={`${style.main} ${show ? style.show : ""}`} onClick={backToTop}>
      <IconArrowTop/>
    </div>
  );
}

export default HNSBackToTop;