import React, { useRef, useState } from "react";
import { AddPicture } from "@icon-park/react";
import style from "./imgUpload.module.less";
import HNSUpload from "../hnsUpload/HNSUpload";

export default function HNSImgUpload({ onChange, className }) {
  const upload = useRef(null);
  const addImg = () => {
    upload.current.click();
  };

  const [img, setImg] = useState("");

  const handle = (file) => {
    onChange && onChange(file);
    setImg(URL.createObjectURL(file));
  };

  return (
    <div>
      <div className={`${style.imgUpload} ${className}`} onClick={addImg}>
        {!img && (
          <>
            <AddPicture className={style.icon} />
          </>
        )}
        {img && <img className={style.img} src={img} alt="上传图片" />}
        <HNSUpload
          ref={upload}
          onChange={handle}
          accept={"image/png,image/jpeg,image/jpg"}
        />
      </div>
      <p className={style.desc}>支持 JPEG、JPG、PNG</p>
    </div>
  );
}
