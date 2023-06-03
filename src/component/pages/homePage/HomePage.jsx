import React, { useState, useEffect, useLayoutEffect } from "react";
import { useRecoilValue } from "recoil";
import { useAppBarStore } from "../../module/appBar/store";
import style from "./homePage.module.less";
import { useNavigate } from "react-router";
import * as API from "../../../utils/request/interface/home";
import { Skeleton } from "antd";
import { Ghost, Fire } from "@icon-park/react";
import { debounce } from "lodash";

export default function HomePage() {
  const { target } = useRecoilValue(useAppBarStore);
  const [model, setModel] = useState([]);

  const navigate = useNavigate();
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 30,
  });

  // 数据初始化信号
  const [hasChange, setHasChange] = useState(0);
  const [empty, setEmpty] = useState(false);

  const [init, setInit] = useState(true);

  const fetchData = async () => {
    const { current, pageSize } = pagination;
    if (empty) return;

    const data =
      target === 0
        ? await API.getHomeTopic({ current, pageSize })
        : await API.getTopicByAreaID({
            topic_area_id: target,
            current,
            pageSize,
          });

    if (init) {
      setInit(false);
    }
    if (data.length < 1 || data.length < pageSize) {
      setEmpty(true);
    }
    setModel([...model, ...data]);
  };

  const changePage = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    // 如果是移动端
    const isMobile = () => {
      if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
        return 2 * Math.floor(scrollTop) + clientHeight > scrollHeight - 150;
      }
      return null;
    };

    if (
      Math.floor(scrollTop) + clientHeight > scrollHeight - 150 ||
      isMobile()
    ) {
      setPagination({ ...pagination, current: pagination.current + 1 });
    }
  };

  // 当 分类发生变化的时候将所有数据源重置
  useEffect(() => {
    setEmpty(false);
    setModel([]);
    setPagination({ ...pagination, current: 1 });
    if (!init) setHasChange(hasChange + 1);
    return () => false;
  }, [target]);

  // 只有当hasChange变化时才重新拉取数据
  useLayoutEffect(() => {
    fetchData();
    return () => false;
  }, [pagination.current, hasChange]);

  useEffect(() => {
    addEventListener("scroll", debounce(changePage, 300));
    return () => {
      removeEventListener("scroll", changePage);
    };
  }, []);

  return (
    <div className={style.box}>
      <List data={model} init={init} navigate={navigate} />
      {empty && <Empty />}
    </div>
  );
}

// 空状态
const Empty = () => {
  return (
    <div className={style.empty}>
      <Ghost />
      <p>已经到底啦</p>
    </div>
  );
};

// 列表组件
const List = ({ data, init, navigate }) => {
  const handleClick = (topic_id) => {
    navigate(`/topic/${topic_id}`);
  };

  useEffect(() => {
    const imgs = document.querySelectorAll(".img-display");

    const config = {
      rootMargin: "0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries, self) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.dataset.src;
          if (src) {
            img.src = src;
            img.removeAttribute("data-src");
            const parrent = img.parentNode.parentNode.style;
            const styleConfig = {
              backgroundImage: `linear-gradient(45deg, rgb(255, 255, 255), rgb(255 255 255 / 92%)),url(${src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPositionY: "50%",
            };

            for (const key in styleConfig) {
              parrent[key] = styleConfig[key];
            }
          }
          // 解除观察
          self.unobserve(entry.target);
        }
      });
    }, config);

    imgs.forEach((image) => {
      observer.observe(image);
    });

    return () => {
      if (imgs?.length && observer) {
        observer.disconnect();
      }
    };
  });

  return (
    <div className={style.list}>
      {data.map(
        ({
          topic_name,
          topic_desc,
          members,
          discussion_degree,
          hot,
          topic_id,
          topic_target_name,
          src,
        }) => (
          <div
            className={style.item}
            key={topic_id}
            onClick={() => handleClick(topic_id)}
          >
            {init && (
              <Skeleton
                avatar
                active
                paragraph={{
                  rows: 4,
                }}
              />
            )}
            {!init && (
              <>
                <div className={style.img}>
                  <img className="img-display" data-src={src} />
                </div>
                <div className={style.right}>
                  <div className={style.top}>
                    <span className={style.title}>{topic_name}</span>
                    {hot && <Fire className={style.hot} />}
                  </div>
                  <p className={style.desc}>{topic_desc}</p>
                  <p className={style.target_name}>{topic_target_name}</p>
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
              </>
            )}
          </div>
        )
      )}
    </div>
  );
};
