/*
 * @Author: 814588-chenshi
 * @Date: 2022-11-10 16:53:57
 * @LastEditors: 814588-chenshi
 * @LastEditTime: 2023-04-07 12:15:45
 * @Description:  公共接口
 */

import { http } from "../httpRequest/request";

/***
 * @ parmas fileConfig : {
 *    name:"文件名"
 *    type:"type / MIME"
 * }
 */

// 文件获取
export const getFileInterface = async ({ minFileName, fileConfig }) => {
  const { name, ...options } = fileConfig;
  const blob = await http({
    url: `/minio/download?minFileName=${minFileName}`,
    type: "get",
    fullData: true,
    reqData: { responseType: "blob" }
  });
  return new File([blob], name, { ...options });
};

// 文件下载
export const downloadFileInterface = async ({ minFileName, fileConfig }) => {
  const file = await getFileInterface({ minFileName, fileConfig });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(file);
  a.download = fileConfig?.name;
  a.click();
  URL.revokeObjectURL(a.href);
  a.remove();
};

// 文件下载，指明url
export const downloadFileForUrl = async ({ url, fileConfig }) => {
  const blob = await http({
    url,
    type: "get",
    fullData: true,
    reqData: { responseType: "blob" }
  });
  const file = new File([blob], fileConfig?.name, { type: fileConfig?.type });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(file);
  a.download = fileConfig?.name;
  a.click();
  URL.revokeObjectURL(a.href);
  a.remove();
};

// 模板下载下载，指明url
export const downloadTemplate = async ({ tempName, fileConfig }) => {
  const blob = await http({
    url: `/downloadTemplate?templateName=${tempName}`,
    type: "get",
    fullData: true,
    reqData: { responseType: "blob" }
  });
  const file = new File([blob], fileConfig?.name, { type: fileConfig?.type });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(file);
  a.download = fileConfig?.name;
  a.click();
  URL.revokeObjectURL(a.href);
  a.remove();
};

// 文件上传
export const uploadFileInterface = async ({ file, message }) => {
  const formData = new FormData();
  formData.append("files", file);
  return await http({
    url: "/minio/upload",
    type: "post",
    reqData: formData,
    successInfo: message
  });
};
