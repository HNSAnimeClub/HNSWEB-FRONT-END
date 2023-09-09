/*
 * @Author: 814588-chenshi
 * @Date: 2023-02-13 09:58:26
 * @LastEditors: 814588-chenshi
 * @LastEditTime: 2023-03-01 18:46:54
 * @Description: 基础Hooks
 */

export const getlocalObj = target => JSON.parse(localStorage.getItem(target));
export const setlocalObj = (name, target) => {
  if (!(target instanceof String)) localStorage.setItem(name, JSON.stringify(target));
  else localStorage.setItem(name, target);
};

// 用户信息
export const useUser = () => getlocalObj("userStore") || {};



