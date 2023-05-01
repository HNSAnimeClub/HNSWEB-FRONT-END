/*
 * @Author: 814588-chenshi
 * @Date: 2022-10-11 17:31:03
 * @LastEditors: 814588-chenshi
 * @LastEditTime: 2022-10-12 13:04:19
 * @Description:  生成随机颜色
 */
export const genRandomColor = (alpha, range) => {
  const render = () => parseInt(Math.random() * range || 255)
  return `rgba(${render()},${render()},${render()},${alpha || 1})`
}
