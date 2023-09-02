/*
 * @Author: 814588-chenshi
 * @Date: 2023-02-09 08:59:08
 * @LastEditors: 814588-chenshi
 * @LastEditTime: 2023-04-18 10:26:26
 * @Description: 请求封装
 */
import { message } from "antd";
import axios from "axios";
import NProgress from "nprogress";
import {
  ERROR_ACCOUNT_RISK,
  ERROR_SESSION_EXPIRED,
  ERROR_TOKEN_EXPIRED,
  ERROR_VOUCHER_INVALIDATION,
} from "../tool/requestErrorStage";
import { useUser } from "../hooks/useProject";

const controller = new AbortController();

const instance = axios.create({
  baseURL: "/api",
  timeout: 1000 * 3600,
});

/**
 *
 * @param {Object} config
 * @param url
 * @param type:请求类型
 * @param reqData:请求体
 * @param config:axios请求配置
 * @param successInfo:请求成功自定义返回信息
 * @param errorHandler: 错误处理函数, 也可在外部处理
 * @param fullData: 返回完整的响应
 * （当为 true 时返回 {code，data，msg} ,为 false时 仅返回 data，默认为 false）
 * @param logger: 控制台打印完整的响应
 * @param errorTips: 为true时将弹窗提醒，默认为false
 *
 * @returns {Promise} [Object | Array]
 */
export const http = async ({
  url,
  type,
  reqData,
  config,
  successInfo,
  errorHandler,
  fullData,
  logger,
  errorTips,
}) => {
  try {
    const reqBodyJudge = () => {
      switch (true) {
        case reqData instanceof FormData:
        case reqData instanceof Array:
          return reqData;
        default:
          return { ...reqData, signal: controller.signal };
      }
    };
    const { data } = await instance[type](url, reqBodyJudge(), {
      ...config,
      signal: controller.signal,
    });
    switch (true) {
      case data.code === 200:
        successInfo && message.success(successInfo);
        break;
      case errorHandler && data.msg === errorHandler.msg:
        errorHandler?.handler();
        break;
      default:
        data.msg && errorTips && message.error(data.msg);
        break;
    }
    logger &&
      console.log({ code: data?.code, msg: data?.msg, data: data?.data });
    if (fullData) return data;
    return data?.data || null;
  } catch (error) {
    if (error.code === "ERR_CANCELED") return;
    controller.abort();
    message.error(`系统异常，请稍后刷新重试 ${error}`);
  }
};

NProgress.configure({
  easing: "ease", // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: true, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3, // 初始化时的最小百分比
});

// 请求拦截器
instance.interceptors.request.use(
  (req) => {
    if (req.url !== "/logout") NProgress.start();

    const { token = null } = useUser();
    req.headers["Authorization"] = token ? `Bearer ${token}` : null;

    return req;
  },
  (err) => {
    NProgress.done();
    return Promise.reject(err);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  async (res) => {
    if (res.config.url !== "/logout") NProgress.done();
    switch (res.data.code) {
      case ERROR_ACCOUNT_RISK:
      case ERROR_VOUCHER_INVALIDATION:
      case ERROR_SESSION_EXPIRED:
      case ERROR_TOKEN_EXPIRED:
        message.error(`${res.data.msg}`);
        sessionStorage.clear();
        window.location.replace("/");
        break;
      default:
        break;
    }
    return res;
  },
  (err) => {
    NProgress.done();
    return Promise.reject(err);
  }
);
