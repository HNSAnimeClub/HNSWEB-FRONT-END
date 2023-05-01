import React, { useEffect, useState, useLayoutEffect } from "react";
import { Skeleton } from "antd";
import style from "./topic.module.less";
import { Fire, Ghost } from "@icon-park/react";
import { useNavigate } from "react-router";
import { debounce } from "lodash";

// 话题列表
export default function Popular({ api }) {
  const [model, setModel] = useState([]);

  const navigate = useNavigate();
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 30,
  });

  const [empty, setEmpty] = useState(false);

  const [init, setInit] = useState(true);

  const fetchData = async () => {
    const { current, pageSize } = pagination;
    if (empty) return;

    const data = await api({ current, pageSize });
    if (init) {
      setInit(false);
    }
    if (data.length < 1) {
      setEmpty(true);
    }
    setModel([...model, ...data]);
  };

  const changePage = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    console.log();
    console.log(Math.floor(scrollTop), scrollHeight - 150);

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

  useLayoutEffect(() => {
    fetchData();
  }, [pagination.current]);

  useEffect(() => {
    addEventListener("scroll", debounce(changePage, 300));
    return () => {
      removeEventListener("scroll", changePage);
    };
  }, []);

  return (
    <div>
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
          topic_area_name,
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
                  <p className={style.area_name}>{topic_area_name}</p>
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
