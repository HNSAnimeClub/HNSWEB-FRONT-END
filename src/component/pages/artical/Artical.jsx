/**
 * @name 写文章
 */

import React from "react";
import Editor from "./Editor";
import style from "./editor.module.less";

export default function Artical() {
  return (
    <div className={style.box}>
      <Editor />
    </div>
  );
}
