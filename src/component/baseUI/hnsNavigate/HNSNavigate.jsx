/**
 * @name: HNSNavigate.jsx
 * @author: 米洛
 * @date: 2022-07-17 20:41
 * @description：导航栏
 */

import React, {Fragment, useRef, memo} from 'react';
import HNSSearch from "../hnsSearch/HNSSearch";
import {nanoid} from "nanoid";
import {useNavigate} from "react-router";
import HNSAvatar from "../hnsAvatar/HNSAvatar";
import pic from '../../../logo.svg'
import IconDown from "../../../icon/iconDown/iconDown";
import style from './hnsNavigate.module.less'


function HNSNavigate(props) {
  let {type, dataSource, rootLink} = props
  let navigate = useNavigate()
  const sideBar = useRef(null)
  const ulDOM = useRef(null)
  const secondUl = useRef(null)
  // 模式切换
  const modeChange = () => {
    if (type === "top" || !type) return style.topMode
    else return style.sideMode
  }

  // 路由跳转
  const routerTrans = (link) => {
    navigate(rootLink ? `${rootLink}/${link}` : link)
  }

  // 获取输入框的值
  const getSearchInput = (result) => {
    navigate()
  }

  // 多级菜单点击事件添加样式和跳转
  const sideBarOnClick = (e, component) => {
    e.stopPropagation()
    let listChildren = ulDOM.current.children;
    for (let i = 0; i < listChildren.length; i++) {
      // 有子节点证明是二级菜单，要遍历清除。有改进空间：记录上一次点击的dom元素，每次点击清除上一次的类
      if (listChildren[i].children.length > 0) {
        for (let j = 0; j < listChildren[i].children[1].children.length; j++) {
          listChildren[i].children[1].children[j].classList.remove(style.liActive)
        }
      } else
        listChildren[i].classList.remove(style.liActive)
    }

    if (e.target.tagName === "LI") {
      e.target.classList.add(style.liActive)
      // 当模式为 侧边栏时 点击子菜单将返回对应组件
      props.changeItem(component)
    }
  }

  // 展开子级菜单样式
  const expandSecondMenu = (e) => {
    let ulDOM = null
    const toggleDOM = (dom, style) => {
      dom.classList.toggle(style)
    }
    if (e.target.tagName === "LI") {
      ulDOM = e.target.children[1]
      toggleDOM(ulDOM, style.openMenu)
      toggleDOM(e.target.children[0].children[0], style.iconDownOpen)
      toggleDOM(e.target.children[0], style.ulActive)
    }
    if (e.target.tagName === "SPAN") {
      ulDOM = e.target.nextElementSibling
      toggleDOM(ulDOM, style.openMenu)
      toggleDOM(e.target.children[0], style.iconDownOpen)
      toggleDOM(e.target, style.ulActive)
    }
    if (e.target.tagName === "svg") {
      ulDOM = e.target.parentNode.nextElementSibling
      toggleDOM(ulDOM, style.openMenu)
      toggleDOM(e.target, style.iconDownOpen)
      toggleDOM(e.target.parentNode, style.ulActive)
    }
    if (e.target.tagName === "path") {
      ulDOM = e.target.parentNode.parentNode.nextElementSibling
      toggleDOM(ulDOM, style.openMenu)
      toggleDOM(e.target.parentNode, style.iconDownOpen)
      toggleDOM(e.target.parentNode.parentNode, style.ulActive)
    }
  }


  return (
    <>
      {
        (type === "top" || !type) &&
        <div className={`${style.base} ${modeChange()}`}>
          <div>logo</div>
          <HNSSearch onFinished={getSearchInput}/>
          <ul className={style.topList}>
            {
              dataSource && dataSource.map(item => {
                return (
                  <li className={style.topBar} key={nanoid()} onClick={e => routerTrans(item.link)}>{item.name}</li>
                )
              })
            }
          </ul>
          <div className={style.toolBar}>
            <HNSAvatar className={style.avatar} type={"circle"} size={48} src={pic}/>
          </div>
        </div>
      }

      {
        type === "side" &&
        <div className={style.sideMode} ref={sideBar}>
          <div className={style.sideBarHead}>HNS 禁书库</div>
          <ul className={style.mainMenu} ref={ulDOM}>
            {
              dataSource.map((item, index) => {
                return (
                  <Fragment key={nanoid()}>
                    {
                      !item.children &&
                      <li className={style.singleMenu} key={nanoid()}
                          onClick={event => sideBarOnClick(event, item.component)}>{item.category}</li>
                    }
                    {
                      item.children &&
                      <li key={nanoid()} className={style.firstLi} onClick={event => expandSecondMenu(event)}>
                        <span className={style.category}>
                          {item.icon && <span>{item.icon}</span>}
                          {item.category}
                          <IconDown className={style.iconDown}/>
                        </span>
                        <ul className={`${style.secondMenu}`} ref={secondUl}>
                          {
                            item.children.map((item, index) => {
                              return (
                                <li key={nanoid()} onClick={event => sideBarOnClick(event, item.component)}>
                                  {item.icon && <span className={style.icon}>{item.icon}</span>}
                                  {item.category}
                                </li>
                              )
                            })
                          }
                        </ul>
                      </li>
                    }
                  </Fragment>
                )
              })
            }
          </ul>
        </div>
      }
    </>
  );
}

export default memo(HNSNavigate);
