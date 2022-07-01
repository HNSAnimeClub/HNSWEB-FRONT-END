/**
 * @name: HNSForm.jsx
 * @author: 米洛
 * @date: 2022-06-21 18:49
 * @description：HNS Form 表单
 */

import React, {useEffect, useState} from 'react';

function HNSForm(props) {
  const temp = {}
  const [resultList] = useState([])
  const onFinished = () => {
    let {children} = props
    if (!children) {
      throw new Error('HNSForm组件内部必须存在子组件')
    }
    // 把数组处理为对象
    const handleList = () => {
      for (let i = 0; i < resultList.length; i++) {
        const key = Object.keys(resultList[i])[0]
        temp[key] = resultList[i][key]
      }
      for (let i = 0; i < resultList.length; i++) {
        // 当检测到错误需要立即跳出循环，否则结果会受到后面项的影响。例如第一项是错的，第二项是对的，那么第二项就会将第一项的错误报警给覆盖，造成错误的结果
        if (resultList[i].error) {
          temp.error = true
          break
        } else {
          temp.error = false
        }
      }
      return temp
    }
    // Form 内只有一个组件和多个组件的情况 需要将组件数据的变化做个劫持
    if (props.onFinished) {
      if (!(children instanceof Array)) {
        if (!children.type.name) {
          throw new Error("HNSForm组件内，存在一个或多个组件未指定属性: “组件名_value”")
        }
        Reflect.defineProperty(children.type, `${children.type.name}_value`, {
          configurable: true,
          set(v) {
            resultList[0] = v
            props.onFinished(handleList())
          },
        })
      } else {
        props.children.forEach((item) => {
          if (!item.type?.name) {
            throw new Error("HNSForm组件内，存在一个或多个组件未指定属性: “组件名_value”")
          }
          Reflect.defineProperty(item.type, `${item.type.name}_value`, {
            configurable: true,
            set(v) {
              const key = Object.keys(v)[0]
              if (resultList.length < 1) {
                resultList.push(v)
              }
              for (let i = 0; i < resultList.length; i++) {
                if (Object.keys(resultList[i])[0] === key) {
                  resultList[i] = v
                  // 只要更新了就直接跳出循环，输入框的属性值是唯一的
                  break
                } else {
                  if (i === resultList.length - 1) {
                    resultList.push(v)
                  }
                }
              }
              props.onFinished(handleList())
            },
          })
          // }
        })
      }
    }
  }
  const conditionChecked = () => {
    const {children} = props
    if (children instanceof Array) {
      for (let i = 0; i < children.length; i++) {
        console.log(children[i])
        if (!(children[i].props.require || children[i].props.checkTypeReg) && children[i].type.name === "HNSInput") {
          throw new Error('不允许所有表单均无限制条件')
        }
      }
    } else {
      if (!(children.props.require || children.props.checkTypeReg) && children.type.name === "HNSInput") {
        throw new Error('不允许所有表单均无限制条件')
      }
    }
  }

  useEffect(() => {
    conditionChecked()
    onFinished()
  })


  return (
    <>
      {props.children}
    </>
  );
}

export default HNSForm;