import { http } from "../request";

/**
 * @name 获取话题
 * @param {Object} meta
 * current 当前页
 * pageSize 一次获取多少条数据
 */
export const getHomeTopic = async ({ current, pageSize }) => {
  return (
    http({
      url: `/topic/getHomeTopic?current=${current}&pageSize=${pageSize}`,
      type: "get",
    }) || []
  );
};

/**
 * @name 获取所有话题分区
 * @returns {Array}
 */
export const getAllTopicArea = async () => {
  return (
    http({
      url: `/topic/getTopicArea`,
      type: "get",
    }) || []
  );
};

/**
 * @name 根据分区id查询数据
 * @param {Object} meta
 * topic_area_id
 * current 当前页
 * pageSize 一次获取多少条数据
 */
export const getTopicByAreaID = async ({
  topic_area_id,
  current,
  pageSize,
}) => {
  return (
    http({
      url: `/topic/getTopicByAreaID?topic_area_id=${topic_area_id}&current=${current}&pageSize=${pageSize}`,
      type: "get",
    }) || []
  );
};
