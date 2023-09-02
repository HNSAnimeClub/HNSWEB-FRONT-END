import React, { useEffect, useState } from "react";
import style from "./appBar.module.less";
import HNSAvatar from "../../common/hnsAvatar/HNSAvatar";
import {
  CosmeticBrush,
  Fire,
  GameThree,
  Headwear,
  Platte,
  Remind,
  ThinkingProblem,
  TvOne,
  Close,
  ArrowRight,
  Right,
} from "@icon-park/react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useAppBarStore } from "./store";
import { userStore } from "../../store/userStore";
import { useLocation } from "react-router";
import { useLogin } from "./login/useLogin";

import { Button, Form, Input } from "antd";
import { useRef } from "react";

export default function AppBar() {
  const items = [
    { title: "热门", icon: <Fire /> },
    { title: "游戏", icon: <GameThree /> },
    { title: "番剧", icon: <TvOne /> },
    { title: "cosplay", icon: <Headwear /> },
    { title: "绘画", icon: <Platte /> },
    { title: "美妆", icon: <CosmeticBrush /> },
    { title: "乐子人", icon: <ThinkingProblem /> },
  ];

  const [target, setTarget] = useRecoilState(useAppBarStore);
  const [show, setShow] = useState(true);
  const { username, ...userInfo } = useRecoilState(userStore);
  const [modal, setModal] = useState(false);
  const { pathname } = useLocation();
  const [regist, setRegist] = useState(false);
  const mask = useRef();

  const countNumber = 60;
  const [count, setCount] = useState(countNumber);

  // 切换分区
  const changeItem = (index) => setTarget({ ...target, target: index });

  const cancel = () => {
    setModal(false);
  };

  const countDown = () => {
    setCount(count - 1);

    const id = setInterval(() => {
      setCount((state) => {
        if (state > 1) return state - 1;
        else {
          clearInterval(id);
          return countNumber;
        }
      });
    }, 1000);
  };

  const drop = (e) => {
    if (mask.current === e.target) setModal(false);
  };

  const form = useRef();

  const submit = () => {
    // setModal(false);
  };

  useEffect(() => {
    if (pathname !== "/home") setShow(false);
    else {
      setShow(true);
      setTarget({ ...target, backgroundSrc: "" });
    }
  }, [pathname]);

  return (
    <div className={style.box}>
      <div
        className={style.top}
        style={{
          backgroundImage:
            target.backgroundSrc &&
            `linear-gradient(45deg, rgb(28 28 28), rgb(30 30 30 / 90%)), url(${target.backgroundSrc})`,
        }}
      >
        <div className={style.title}>
          <span>HNS-WEB</span>
        </div>

        <div className={style.right}>
          <div className={style.toolbar}>
            <div className={style.divider} />
            <Remind className={style.icon} />
          </div>

          {username && (
            <HNSAvatar
              src={"https://img-static.mihoyo.com/avatar/avatarDefaultPc.png"}
              className={style.avatar}
            >
              <Menu />
            </HNSAvatar>
          )}

          {!username && (
            <div
              className={style.loginCon}
              onClick={() => {
                setModal(true);
              }}
            >
              <span>登录</span>
            </div>
          )}

          <div
            className={`${style.mask} ${modal ? style.open : style.close}`}
            onMouseDown={drop}
            ref={mask}
          >
            <div
              className={`${style.content} ${
                modal ? style.contentMove : style.contentOut
              }`}
            >
              <div className={style.slide}>
                <div className={style.normalContent}>
                  <div className={style.head}>
                    <div
                      className={`${style.slideTitle} ${
                        regist ? style.slideStart : style.slideEnd
                      }`}
                    >
                      <p className={style.title}>好久不见！</p>
                      <p className={style.title}>真高兴认识你！</p>
                    </div>

                    <Close className={style.icon} onClick={cancel} />
                  </div>

                  <Form
                    ref={form}
                    className={style.form}
                    onFinish={submit}
                    layout="vertical"
                    size={"large"}
                  >
                    <div
                      className={`${style.login} ${
                        !regist ? style.slideFormStart : style.slideFormEnd
                      }`}
                    >
                      <div className={style.slideLeft}>
                        <Form.Item
                          rules={[{ required: true, message: "请输入用户名" }]}
                        >
                          <Input placeholder={"用户名"} />
                        </Form.Item>

                        <Form.Item
                          rules={[{ required: true, message: "请输入密码" }]}
                        >
                          <Input.Password placeholder={"密码"} />
                        </Form.Item>
                      </div>

                      <div className={style.slideRight}>
                        <Form.Item
                          name={"email"}
                          rules={[{ required: true, message: "请输入邮箱" }]}
                        >
                          <Input placeholder={"邮箱"} />
                        </Form.Item>

                        <div className={style.regInput}>
                          <Form.Item
                            rules={[
                              { required: true, message: "请输入验证码" },
                            ]}
                          >
                            <Input
                              className={style.code}
                              maxLength={5}
                              placeholder={"验证码"}
                            />
                          </Form.Item>
                          <Button
                            disabled={count !== countNumber}
                            onClick={countDown}
                          >
                            {count === countNumber
                              ? "获取验证码"
                              : `${count}s 后重新获取`}
                          </Button>
                        </div>
                      </div>
                    </div>
                    <span
                      className={style.regist}
                      onClick={() => setRegist(!regist)}
                    >
                      {!regist ? "没有账号？" : "回到登录"}
                    </span>

                    <Button
                      icon={<Right />}
                      className={style.button}
                      shape={"circle"}
                      type={"primary"}
                      onClick={submit}
                    />
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {show && (
        <div className={style.bottom}>
          {items.map(({ title, icon }, index) => (
            <span
              className={`${style.item} ${
                target.target === index && style.active
              }`}
              key={index}
              onClick={() => changeItem(index)}
            >
              {icon}
              {title}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// 头像菜单
const Menu = () => {
  const list = [{ label: "退出登录" }];
  return (
    <ul className={style.avatartMenu}>
      {list
        .filter((item) => item)
        .map(({ label }, index) => (
          <li key={index} className={style.item}>
            {label}
          </li>
        ))}
    </ul>
  );
};
