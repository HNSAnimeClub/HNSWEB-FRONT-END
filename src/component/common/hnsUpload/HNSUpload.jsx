/***
 * @name 上传组件
 */
import React, { forwardRef } from "react";

export default forwardRef(function HNSUpload({ onChange, ...props }, ref) {
  const change = (e) => {
    onChange && onChange(e.target.files[0]);
    e.target.value = "";
  };
  return (
    <input
      ref={ref}
      type="file"
      style={{ display: "none" }}
      {...props}
      onChange={change}
    />
  );
});
