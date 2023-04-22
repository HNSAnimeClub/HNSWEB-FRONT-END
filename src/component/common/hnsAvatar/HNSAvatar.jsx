import React from "react";
import style from "./hnsAvatar.module.less";

export default function HNSAvatar({ children, className, ...props }) {
  return (
    <img className={`${style.avatar} ${className}`} {...props}>
      {children}
    </img>
  );
}
