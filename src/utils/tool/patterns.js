/*
 * @Author: 814588-chenshi
 * @Date: 2022-09-26 10:28:37
 * @LastEditors: 814588-chenshi
 * @LastEditTime: 2022-10-17 11:20:40
 * @Description: 表单校验
 */

const patterns = {
  userName: "^[a-zA-Z_][0-9a-zA-Z_]{0,}$",
  phone: "^1[2-9]\\d{9}$",
  email: "[^@ \t\r\n]+@[^@ \t\r\n]+\\.[^@ \t\r\n]+",
  vcode: "^[0-9a-zA-Z_]{0,}",
  pwd: "^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[\\(\\)])+$)([^(0-9a-zA-Z)]|[\\(\\)]|[a-z]|[A-Z]|[0-9]){8,}$",
  // 用户名 或 手机号 或 邮箱
  uniJudge:
    "^[a-zA-Z_][0-9a-zA-Z_]{0,}$|^1[2-9]\\d{9}$|[^@ \t\r\n]+@[^@ \t\r\n]+\\.[^@ \t\r\n]+",
  // 项目名称
  projectName: "^[^\\s]*$",
  // 项目阶段
  projectPhase: "^[A-Za-z0-9_-]{0,}$",
  // docx与pdf判断
  uploadFile: ".docx|.pdf"
};

//对应正则表达式的提示信息
const patternMsg = {
  userName: "请以字母、下划线开头并包括数字、字母、下划线组成",
  phone: "无效的手机号",
  email: "无效的邮箱地址",
  vcode: "无效的验证码",
  pwd: "密码至少由8位包含字母、数字、特殊字符两种组合",
  uniJudge: "无效的 用户名 / 手机号 / 邮箱",
  projectName: "无效的项目名称",
  projectPhase: "无效的项目阶段",
  uploadFile: "仅支持 .docx 与 .pdf 文件"
};

//根据使用的正则返回对应的正则和信息对象
const pattern = (name, para = "g") => {
  return {
    pattern: new RegExp(patterns[name], para),
    message: patternMsg[name]
  };
};

export default pattern;
