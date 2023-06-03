/**
 * @name 话题组件
 */

import React, { useEffect, useState } from "react";
import style from "./topic.module.less";
import * as API from "../../../utils/request/interface/topic";
import { Button, Tag, Image, Pagination } from "antd";
import { useNavigate, useParams } from "react-router";
import HNSAvatar from "../../common/hnsAvatar/HNSAvatar";
import {
  BadTwo,
  Comment,
  DocDetail,
  Eagle,
  Like,
  PreviewOpen,
} from "@icon-park/react";
import dayjs from "dayjs";
import { nanoid } from "nanoid";

export default function Topic() {
  const [topic, setTopic] = useState({
    src: "",
    topic_name: "",
    topic_desc: "",
    topic_bg_src: "",
    members: 0,
  });

  const { id } = useParams();

  // 获取话题信息
  const fetchTopic = async () => {
    const data = await API.getTopicByID(id);
    setTopic(data);
  };

  const init = async () => {
    await fetchTopic();
  };

  useEffect(() => {
    init();
  }, [id]);
  return (
    <div className={style.box}>
      <div className={style.content}>
        {/* 顶部 banner */}
        <div
          className={style.banner}
          style={{
            backgroundImage: `linear-gradient(45deg, rgb(255, 255, 255),rgb(255 255 255 / 93%), rgb(255 255 255 / 75%)),url(${topic.topic_bg_src})`,
          }}
        >
          <div className={style.left}>
            <img src={topic.src} />
            <div className={style.content}>
              <h3>{topic.topic_name}</h3>
              <span className={style.foot}>
                帖子数量 {topic.discussion_degree}
              </span>
              <span className={style.foot}>{topic.members} 人正在讨论</span>
            </div>
          </div>
          <div className={style.right}>
            <Button type={"primary"}>关注</Button>
          </div>
        </div>
        {/* 帖子列表 */}
        <PostList topic_id={id} />
      </div>
      {/* 右侧悬浮框 */}
      <HoverBanner topic_id={id} />
    </div>
  );
}

// 右侧悬浮栏
const HoverBanner = ({ topic_id }) => {
  const [model, setModel] = useState([]);

  const navigate = useNavigate();

  const fetchData = async () => {
    const data = await API.getRelativeTopics(topic_id);
    setModel(data);
  };

  // 写文章
  const transArtical = () => {
    navigate("/artical");
  };

  // 相关圈子
  const transRelative = (id) => {
    navigate(`/topic/${id}`);
  };

  useEffect(() => {
    fetchData();
  }, [topic_id]);

  return (
    <div className={style.popover}>
      <div className={style.item}>
        <div className={style.title}>
          <span>讲讲你的想法~</span>
        </div>
        <div className={style.tool}>
          <div
            className={`${style.button} ${style.comment}`}
          >
            <Comment fill={"#f5274d"} />
            <span className={style.content}>发帖子</span>
          </div>
          <div
            className={`${style.button} ${style.article}`}
            onClick={transArtical}
          >
            <DocDetail fill={"#f5274d"} />
            <span className={style.content}>写文章</span>
          </div>
        </div>
      </div>
      <div className={style.item}>
        <span className={style.itemTwoTitle}>相关圈子</span>
        {model.length > 0 && (
          <div className={style.list}>
            {model.map(({ topic_id, src, topic_name, topic_desc, members }) => (
              <div
                className={style.listItem}
                key={topic_id}
                onClick={() => transRelative(topic_id)}
              >
                <img src={src} />
                <div className={style.right}>
                  <div>
                    <h4 className={style.title}>{topic_name}</h4>
                    <span>{topic_desc}</span>
                  </div>
                  <span>{members} 人正在讨论</span>
                </div>
              </div>
            ))}
          </div>
        )}
        {model.length < 1 && (
          <div className={style.empty}>
            这个圈子看起来挺小众... <Eagle />
          </div>
        )}
      </div>
    </div>
  );
};

// 帖子列表
const PostList = ({ topic_id }) => {
  const [model, setModel] = useState([
    {
      post_id: 155783,
      post_author_id: 151231,
      post_author_name: "奥兹",
      create_time: "2023-05-07T12:41:48+08:00",
      theme: "萌新求带飞，官服",
      desc: "一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区一区",
      tag: ["新人", "官服"],
      visits: 1032,
      comment: 25,
      like: 27,
      dislike: 5,
      img_list: [
        "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
        "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
      ],
    },
  ]);

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 25,
    total: 0,
  });

  const [opList, setOpList] = useState({
    like: [155783],
    dislike: [],
  });

  // 下一页
  const switchPage = (current) => {
    setPagination({ ...pagination, current });
  };

  // 如果是今年发的帖子就只显示月和日，不是今年的显示 年月日
  const yearJudge = (time) => {
    if (dayjs().year() - dayjs(time).year() > 0) {
      return dayjs(time).format("YYYY-MM-DD");
    }
    return dayjs(time).format("MM-DD");
  };

  const judge = ({ key, id }) => opList[key].includes(id);

  const fetchList = async () => {
    const { current, pageSize } = pagination;
    const { records = [], total } = await API.getPostByTopicID({
      topic_id,
      current,
      pageSize,
    });

    records.forEach((item) => {
      item.tag = item.tag?.split(",");
      item.img_list = item.img_list?.split(",");
    });

    setModel(records);
    setPagination({ ...pagination, total });
  };

  useEffect(() => {
    fetchList();
  }, [pagination.current, topic_id]);

  return (
    <div className={style.list}>
      {model.map(
        ({
          post_id,
          post_author_name,
          loopKey = nanoid(),
          create_time,
          theme,
          desc,
          tag = [],
          img_list = [],
          visits = 0,
          comment = 0,
          like = 0,
          dislike = 0,
          avatar_url,
        }) => (
          <div className={style.item} key={loopKey}>
            <div className={style.top}>
              <HNSAvatar src={avatar_url} />
              <div className={style.user}>
                <span>{post_author_name}</span>
                <span>{yearJudge(create_time)}</span>
              </div>
            </div>

            <div className={style.buttom}>
              <div className={style.words}>
                <p className={style.theme}>{theme}</p>
                <p className={style.desc}>{desc}</p>
              </div>
              <div className={style.gallery}>
                <Image.PreviewGroup>
                  {img_list.slice(0, 5).map((item) => (
                    <Image
                      key={nanoid()}
                      width={80}
                      src={item}
                      remark={"gallery"}
                    />
                  ))}
                </Image.PreviewGroup>
              </div>

              <div className={style.tagAndOperate}>
                <div className={style.tag}>
                  {tag.map((item, index) => (
                    <div className={style.item} key={index}>
                      {item}
                    </div>
                  ))}
                </div>
                <div className={style.operateGroup}>
                  <span className={style.operate}>
                    <PreviewOpen className={style.icon} />
                    {visits}
                  </span>
                  <span className={style.operate}>
                    <Comment className={style.icon} />
                    {comment}
                  </span>
                  <span
                    className={`${style.operate} ${
                      judge({ key: "like", id: post_id }) && style.activeLike
                    }`}
                  >
                    <Like className={style.icon} />
                    {like}
                  </span>
                  <span
                    className={`${style.operate} ${
                      judge({ key: "dislike", id: post_id }) &&
                      style.activeDislike
                    }`}
                  >
                    <BadTwo className={style.icon} />
                    {dislike}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )
      )}
      <Pagination
        className={style.pagination}
        onChange={(current) => switchPage(current)}
        {...pagination}
      />
    </div>
  );
};
