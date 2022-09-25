/**
 * @name: Test.jsx
 * @author: 米洛
 * @date: 2022-06-13 13:16
 * @description：用于组件测试的沙盒（试验田）
 */


import React, {useEffect, useRef, useState} from 'react';
import style from './test.module.less'
import {nanoid} from "nanoid";

function Test(props) {

  // const anime = [
  //   {
  //     name: "异世界",
  //     children: [
  //       {
  //         name: "异世界舅舅",
  //         children: [
  //           {name: "异世界舅舅第一季"}
  //         ]
  //       }, {name: "史莱姆"},
  //     ]
  //   },
  //   {
  //     name: "运动",
  //     children: [
  //       {
  //         name: "排球",
  //         children: [
  //           {name: "排球第一季"},
  //           {name: "排球第二季"},
  //           {name: "排球第三季"},
  //         ]
  //       },
  //       {name: "Free男子游泳部"},
  //     ]
  //   },
  // ]
  //
  // const renderAnime = (dataSource, level) => {
  //   if (!dataSource) return
  //   return dataSource.map((item) => {
  //     return (
  //       <div key={nanoid()} className={`${level === 1 ? style.listContainer : style.items}`}>
  //       <span style={{marginLeft: `${level * 16}px`}}
  //             className={` ${level === 1 ? style.category : ""} ${level === 2 ? style.bungumiName : ""}`}>{item.name}</span>
  //
  //         {renderAnime(item.children, level + 1)}
  //       </div>
  //     )
  //   })
  // }
  //
  // const a = {
  //   a: {
  //     value: {
  //       name: "haha"
  //     }
  //   },
  //   b: "3"
  // }
  //
  // const b = {
  //   a: {
  //     value: {
  //       name: "haha"
  //     }
  //   },
  //   b: "3"
  // }
  //
  // const valueIsEqual = (obj1, obj2) => {
  //   // 获得两个对象第一层的属性:  obj1 : ['a','b']  obj2 : ['a','b']
  //   const keys1 = Object.keys(obj1)
  //   const keys2 = Object.keys(obj2)
  //
  //   // 如果属性数量不相等 直接返回false
  //   if (keys1.length !== keys2.length) return false
  //
  //   // 循环每一层
  //   for (let i = 0; i < keys1.length; i++) {
  //     // 当 i = 0 时 obj1[keys1[i]] 等价于 obj1['a'] 等价于 obj1.a
  //     const val1 = obj1[keys1[i]]
  //     const val2 = obj2[keys2[i]]
  //
  //     // 判断传入的两个值是否均为对象
  //     const areObject = obj1 instanceof Object && obj2 instanceof Object
  //
  //     // 如果两个值都是对象，则进行递归，深度优先遍历到下一层。若两个值不都是对象，则直接比较是否相等。
  //     if ((areObject && !valueIsEqual(val1, val2)) || (!areObject && val1 !== val2))
  //       return false
  //   }
  //   return true
  // }
  // console.log(valueIsEqual(a, b))

  // // 递归
  // const anime = [
  //   {
  //     name: "异世界",
  //     children: [
  //       {
  //         name: "史莱姆"
  //       }
  //     ]
  //   },
  //   {
  //     name: "战斗",
  //     children: [
  //       {
  //         name: "鬼灭"
  //       }
  //     ]
  //   },
  //   {
  //     name: "纯爱",
  //     children: [
  //       {
  //         name: "辉夜"
  //       }
  //     ]
  //   },
  // ]
  //
  // // 递归
  // const logAnime = (dataSource) => {
  //   if (!dataSource) return
  //   for (let i = 0; i < dataSource.length; i++) {
  //     console.log(dataSource[i].name)
  //     logAnime(dataSource[i].children)
  //   }
  // }

  // logAnime(anime)
  const a = {
    a: {
      value: {
        name: "蝙蝠侠"
      }
    },
    c: "小丑"
  }

  const b = {
    a: {
      value: {
        name: "蝙蝠侠"
      }
    },
    n: "小丑"
  }


  const isEqual = (obj1, obj2) => {
    const keys1 = Object.keys(obj1) // [a,c]
    const keys2 = Object.keys(obj2) // [a,c]

    if (keys1.length !== keys2.length) return false

    for (let i = 0; i < keys1.length; i++) {
      if (keys1[i] !== keys2[i]) return false
      const value1 = obj1[keys1[i]]  // obj1["a"] ~ obj1.a
      const value2 = obj2[keys2[i]] // obj2.a
      const areObj = value1 instanceof Object && value2 instanceof Object // 你们都是对象 反面：你们不都是对象

      if ((areObj && !isEqual(value1, value2)) || (!areObj && value1 !== value2)) {
        return false
      }
    }
    return true
  }

  console.log("两个对象相等吗？", isEqual(a, b))

  return (
    <div className={style.container}>
      {/*{renderAnime(anime, 1)}*/}
    </div>
  )

}

export default Test;
