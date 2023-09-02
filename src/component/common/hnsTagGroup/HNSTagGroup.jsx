import React, { useEffect, useState } from "react";
import style from "./hnsTagGroup.module.less";
import { Close } from "@icon-park/react";
import { Input } from "antd";
import { nanoid } from "nanoid";

// 标签本体
const Tag = ({ text, index, onClick }) => {
  const click = () => {
    onClick(index);
  };

  return (
    <div className={style.tag} onClick={click}>
      {text} <Close className={style.icon} />
    </div>
  );
};

export default function HNSTagGroup({ value, maxCount, onChange }) {
  const [model, setModel] = useState([]);

  const enter = (e) => {
    if (!e.target.value || e.key !== "Enter" || model.length === maxCount)
      return;
    setModel([...model, e.target.value]);
  };

  const deleItems = (index) => {
    setModel(model.toSpliced(index, 1));
  };

  useEffect(() => {
    onChange && onChange(model);
  }, [model.length]);

  useEffect(()=>{
    setModel(value)
  },[value])



  return (
    <div className={`${style.tagWrapper} ${model.length > 4 && style.switch}`}>
      <div className={style.tagBox}>
        {model.map((item, index, _, loopKey = nanoid()) => (
          <Tag text={item} index={index} key={loopKey} onClick={deleItems} />
        ))}
      </div>
      <div className={style.bottom}>
        <Input onKeyUp={enter} className={style.input} />
        {maxCount && (
          <div className={style.count}>
            <span>
              还可以添加
              <span
                className={`${style.main} ${
                  model.length === maxCount && style.highlight
                }`}
              >
                {maxCount - model.length}
              </span>
              个
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
