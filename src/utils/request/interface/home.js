import { http } from "../request";

/**
 * @name 获取话题
 * @param {Object} meta
 * current 当前页
 * pageSize 一次获取多少条数据
 */
export const getHomeTopic = async ({ current, pageSize }) => {
  return http({
    url: `/topic/getHomeTopic?current=${current}&pageSize=${pageSize}`,
    type: "get",
  })||[];
};
