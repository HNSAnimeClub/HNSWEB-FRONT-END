import { http } from "../request";

/**
 * @name 判断邮箱是否注册
 * @param {Object} email
 * @returns {Array}
 */
export const getEmailValid = async (email) => {
  return (
    http({
      url: `/register/existEmail?email=${email}`,
      type: "get",
      fullData: true,
    }) || {}
  );
};

/**
 * @name 获取验证码
 * @param {Object} email
 * @returns {Array}
 */
export const getCode = async (email) => {
  return (
    http({
      url: `/register/getEmailCode?email=${email}`,
      type: "get",
      fullData: true,
    }) || {}
  );
};

/**
 * @name 注册
 * @param {Object} reqData
 * @returns {Object}
 */
export const registry = async (reqData) => {
  return (
    http({
      url: `/register`,
      type: "post",
      reqData,
      errorTips: true,
      fullData: true,
    }) || {}
  );
};


/**
 * @name 登录
 * @param {Object} reqData
 * @returns {Object}
 */
export const login = async (reqData) => {
  return (
    http({
      url: `/auth/login`,
      type: "post",
      reqData,
      errorTips: true,
      fullData: true,
    }) || {}
  );
};


/**
 * @name 退出登录
 * @returns {Object}
 */
export const logout = async () => {
  return (
    http({
      url: `/auth/logout`,
      type: "post",
      errorTips: true,
      fullData:true
    }) || {}
  );
};
