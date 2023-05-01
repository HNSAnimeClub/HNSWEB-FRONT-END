/*
 * @Author: 814588-chenshi
 * @Date: 2022-10-20 09:08:27
 * @LastEditors: 814588-chenshi
 * @LastEditTime: 2022-10-20 09:09:30
 * @Description:  重新加载前的操作
 */
export const beforeReload = () => {
  window.addEventListener("beforeunload", (e) => {
    let confirmationMessage = ""
    ;(e || window.event).returnValue = confirmationMessage
    return confirmationMessage
  })
}
