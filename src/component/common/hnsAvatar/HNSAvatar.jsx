import React from "react";
import style from "./hnsAvatar.module.less";

export default function HNSAvatar({ children, className, ...props }) {
  return (
    <div style={{ position: "relative" }}>
      <img className={`${style.avatar} ${className}`} {...props} />
      {children}
    </div>
  );
}
