/**
 * @name: addAndRemoveClass
 * @author: 米洛
 * @date: 2022-08-07 01:15
 * @description：工具类
 */

// 添加类
export const addClass = (node, style) => {
  node.classList.add(style)
}

// 移除类
export const removeClass = (node, style) => {
  node.classList.remove(style)
}

// 添加内联样式
export const addStyleSheet = (node, styleObj) => {
  for (const key in styleObj) {
    node.style.setProperty(key, styleObj[key])
  }
}

