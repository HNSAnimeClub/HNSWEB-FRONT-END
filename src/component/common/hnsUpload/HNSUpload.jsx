/***
 * @name 上传组件
 */
import React, { forwardRef } from "react";
import { App } from "antd";

export default forwardRef(function HNSUpload(
  { onChange, accept, ...props },
  ref
) {
  const { message } = App.useApp();
  const change = (e) => {
    const file = e.target.files[0];

    if (file.type && accept.includes(file.type)) onChange && onChange(file);
    else message.warning("暂不支持该格式")

    e.target.value = "";
  };
  return (
    <input
      ref={ref}
      type="file"
      accept={accept}
      style={{ display: "none" }}
      {...props}
      onChange={change}
    />
  );
});
