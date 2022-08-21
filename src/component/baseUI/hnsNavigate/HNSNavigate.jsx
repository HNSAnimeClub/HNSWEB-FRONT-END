/**
 * @name: HNSNavigate.jsx
 * @author: 米洛
 * @date: 2022-07-17 20:41
 * @description：导航栏
 */

import React, {Fragment, useRef, memo, useState, useEffect} from 'react';
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

  // 获取二级菜单的个数
  const getExpandNum = () => {
    for (const item of dataSource) {
      if (item.children) openMenu.push(false)
    }
  }

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
    console.log(result)
    // navigate()
  }

  // 控制单级菜单
  const [target, setTarget] = useState(null)
  const sideBarOnClick = (e, component, index) => {
    e.stopPropagation()
    setParent(index)
    props.changeItem(component)
    setTarget(index)
  }

  // 控制多级菜单
  const multiMenuControl = (e, parentIndex, childIndex, component) => {
    e.stopPropagation()
    setParent(parentIndex)
    setTarget(childIndex)
    props.changeItem(component)
  }

  // 展开子级菜单样式
  const [parentTargetState, setParent] = useState(null)
  // 控制子菜单是展开的
  const [openMenu, setOpenMenu] = useState([])
  const expandSecondMenu = (e, index) => {
    openMenu[index] = !openMenu[index]
    setOpenMenu([...openMenu])
  }

  useEffect(() => {
    getExpandNum()
  }, [])

  return (
    <>
      {
        (type === "top" || !type) &&
        <div className={`${style.base} ${modeChange()}`}>
          <div className={style.logo}>logo</div>
          <HNSSearch onFinished={getSearchInput} className={style.search}/>
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
            <HNSAvatar className={style.avatar} type={"circle"} size={48} src={pic}
                       onClick={event => routerTrans("/userspace")}/>
          </div>
        </div>
      }

      {
        type === "side" &&
        <div className={style.sideMode} ref={sideBar}>
          <div className={style.sideBarHead}>HNS 禁书库</div>
          <ul className={style.ulMenuBase} ref={ulDOM}>
            {
              dataSource.map((item, parentIndex) => {
                return (
                  <Fragment key={nanoid()}>
                    {
                      !item.children &&
                      <li className={`${style.singleMenu} ${target === parentIndex ? style.liActive : ""}`}
                          key={nanoid()}
                          onClick={event => sideBarOnClick(event, item.component, parentIndex)}>{item.category}</li>
                    }
                    {
                      item.children &&
                      <li key={nanoid()} className={style.firstLi}
                          onClick={event => expandSecondMenu(event, parentIndex)}>
                        <span className={style.category}>
                          {item.icon && <span>{item.icon}</span>}
                          {item.category}
                          <IconDown size={24}
                                    className={`${style.iconDown} ${openMenu[parentIndex] ? style.iconDownOpen : ""}`}/>
                        </span>
                        <ul
                          className={`${style.secondMenu} ${openMenu[parentIndex] ?
                            style.openSecondMenu : ""}`}>
                          {
                            item.children.map((item, index) => {
                              return (
                                <li key={nanoid()}
                                    className={`${style.secondMenuChild} ${(target === index) &&
                                    parentTargetState === parentIndex && openMenu[parentIndex]
                                      ? style.liActive : ""}`}
                                    onClick={event => multiMenuControl(event, parentIndex, index, item.component)}>
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

export default HNSNavigate;
