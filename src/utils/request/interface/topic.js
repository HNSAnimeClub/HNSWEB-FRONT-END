import { http } from "../request";

/**
 * @name 获取话题信息
 * @param {Object} meta
 * current 当前页
 * pageSize 一次获取多少条数据
 */
export const getTopicByID = async (id) => {
  return (
    http({
      url: `/topic/getTopicByID?topic_id=${id}`,
      type: "get",
    }) || []
  );
};

/**
 * @name 获取话题下的帖子
 * @param {Object} meta
 * current 当前页
 * pageSize 一次获取多少条数据
 */
export const getPostByTopicID = async ({ topic_id, current, pageSize }) => {
  return (
    http({
      url: `/post/getPostListByID?topic_id=${topic_id}&current=${current}&pageSize=${pageSize}`,
      type: "get",
    }) || []
  );
};

/**
 * @name 获取话题的相关圈子
 * @param {Object} meta
 */
export const getRelativeTopics = async (topic_id) => {
  return (
    http({
      url: `/topic/getRelativeTopics?topic_id=${topic_id}`,
      type: "get",
    }) || []
  );
};
