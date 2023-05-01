/*
 * @Author: 814588-chenshi
 * @Date: 2023-02-13 09:58:26
 * @LastEditors: 814588-chenshi
 * @LastEditTime: 2023-03-01 18:46:54
 * @Description: 基础Hooks
 */

export const getSessionObj = target => JSON.parse(sessionStorage.getItem(target));
export const setSessionObj = (name, target) => {
  if (!(target instanceof String)) sessionStorage.setItem(name, JSON.stringify(target));
  else sessionStorage.setItem(name, target);
};

// 用户信息
export const useUser = () => getSessionObj("user_info") || {};



