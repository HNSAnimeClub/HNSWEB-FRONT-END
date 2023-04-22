import React, { useEffect, useState } from "react";

import style from "./popular.module.less";
import { Fire } from "@icon-park/react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router";

// 热门
export default function Popular() {
  const [model, setModel] = useState([
    {
      topic_id: "1543156156313",
      src: "http://dummyimage.com/400x400",
      discussion_degree: 726,
      topic_name: "明日方舟",
      topic_name_en: "Arknights",
      topic_desc: "从现在开始，我们需要按照时间计划进行。",
      members: 1244,
      hot: true,
    },
    {
      topic_id: "1543156156313",
      src: "http://dummyimage.com/400x400",
      discussion_degree: 726,
      topic_name: "明日方舟",
      topic_name_en: "Arknights",
      topic_desc: "从现在开始，我们需要按照时间计划进行。",
      members: 1244,
    },
    {
      topic_id: "1543156156313",
      src: "http://dummyimage.com/400x400",
      discussion_degree: 726,
      topic_name: "明日方舟",
      topic_name_en: "Arknights",
      topic_desc: "从现在开始，我们需要按照时间计划进行。",
      members: 1244,
    },
    {
      topic_id: "1543156156313",
      src: "http://dummyimage.com/400x400",
      discussion_degree: 726,
      topic_name: "明日方舟",
      topic_name_en: "Arknights",
      topic_desc: "从现在开始，我们需要按照时间计划进行。",
      members: 1244,
    },
    {
      topic_id: "1543156156313",
      src: "http://dummyimage.com/400x400",
      discussion_degree: 726,
      topic_name: "明日方舟",
      topic_name_en: "Arknights",
      topic_desc: "从现在开始，我们需要按照时间计划进行。",
      members: 1244,
    },
  ]);

  const navigate = useNavigate();

  const fetchData = async () => {
    // setModel()
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={style.list}>
      {model.map(({ loopKey = nanoid(3), ...item }) => (
        <Item data={item} key={loopKey} navigate={navigate} />
      ))}
    </div>
  );
}

// 列表item组件
const Item = ({
  data: {
    src,
    topic_name,
    topic_name_en,
    topic_desc,
    members,
    discussion_degree,
    hot,
    topic_id,
  },
  navigate,
}) => {
  const handleClick = () => {
    navigate(`/topic/${topic_id}`);
  };

  return (
    <div className={style.item} onClick={handleClick}>
      <div className={style.img}>
        <img src={src} />
      </div>
      <div className={style.right}>
        <div className={style.top}>
          <span className={style.title}>{topic_name}</span>
          {hot && <Fire className={style.hot} />}
        </div>
        {/* <p className={style.en}>{topic_name_en}</p> */}
        <p className={style.desc}>{topic_desc}</p>
        <span className={style.bottom}>
          <span className={style.bItem}>
            <span>讨论</span>
            {discussion_degree}
          </span>
          <span className={style.bItem}>
            <span>关注</span>
            {members}
          </span>
        </span>
      </div>
    </div>
  );
};
