/*
 * @Author: 814588-chenshi
 * @Date: 2022-11-02 15:30:21
 * @LastEditors: 814588-chenshi
 * @LastEditTime: 2023-02-10 17:05:56
 * @Description:  请求错误状态
 */

export const ERROR_VOUCHER_INVALIDATION = 40001; // 用户凭证失效（使用了退出登录，该token作废）
export const ERROR_ACCOUNT_RISK = 40002; // 账号从另一设备登录
export const ERROR_TOKEN_EXPIRED = "Token已过期";
export const ERROR_SESSION_EXPIRED = "会话超时，请重新登录！";
export const ERROR_IDENTIFY_CODE_EMPTY = "请输入验证码";
export const ERROR_IDENTIFY_CODE_WRONG = "验证码错误";
