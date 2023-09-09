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
import * as API from "../../../utils/request/interface/login";

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
  const [userInfo, setUserInfo] = useRecoilState(userStore);
  const [modal, setModal] = useState(false); // 登录注册对话框
  const { pathname } = useLocation();
  const [regist, setRegist] = useState(false);
  const [emalExist, setEmailExist] = useState({ status: "init", msg: "" });
  const emailCodeRef = useRef();
  const mask = useRef();
  const form = useRef();
  const [vcodeDisabled, setVcodeDisabled] = useState(false);

  const [showUserMenu, setShowUserMenu] = useState(false);

  const countNumber = 60;
  const [count, setCount] = useState(countNumber);

  // 切换分区
  const changeItem = (index) => setTarget({ ...target, target: index });

  const cancel = () => {
    setModal(false);
  };

  const countDown = async () => {
    const { email } = form.current.getFieldsValue();
    if (!email) {
      setEmailExist({ status: "error", msg: "邮箱不能为空" });
      return;
    }

    setVcodeDisabled(true);

    const { code, data: { email_code, countDown = countNumber } = {} } = await API.getCode(email);
    emailCodeRef.current = email_code;

    if (code !== 200) {
      setCount(countDown - 1);
    } else {
      setCount(count - 1);
    }

    const id = setInterval(() => {
      setCount((state) => {
        if (state > 1) return state - 1;
        else {
          clearInterval(id);
          setVcodeDisabled(false);

          return countNumber;
        }
      });
    }, 1000);
  };

  const drop = (e) => {
    if (mask.current === e.target) setModal(false);
  };

  const judgeEmailExist = async () => {
    const { email } = form.current.getFieldsValue();

    if (!email) {
      setEmailExist({ status: "error", msg: "邮箱不能为空" });
      return;
    }

    const { code } = await API.getEmailValid(email);
    code !== 200 ? setEmailExist({ status: "error", msg: "该邮箱已被注册" }) : setEmailExist({ status: "init", msg: "" });
  };

  // 登录
  const login = async ({ user_name, password }) => {
    const { data = {}, code } = await API.login({ user_name, user_password: password });
    if (code === 200) {
      setUserInfo(data);
      setModal(false);
    }
  };

  // 注册
  const registCount = async ({ email, email_code, password } = {}) => {
    try {
      if (!email) setEmailExist({ status: "error", msg: "邮箱不能为空" });
      await form.current.validateFields(["email", "reg_password", "reg_password2", "vCode"]);
      const { code } = await API.registry({ email, email_code, password });
      if (code === 200) {
        login({ user_name: email, password });
      }
    } catch (error) {
      return;
    }
  };

  const submit = async () => {
    const { user_name, email, vCode, password, reg_password } = form.current.getFieldsValue();
    if (regist) await registCount({ email, email_code: vCode, password: reg_password });
    else await login({ user_name, password });
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
            target.backgroundSrc && `linear-gradient(45deg, rgb(28 28 28), rgb(30 30 30 / 90%)), url(${target.backgroundSrc})`,
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

          {userInfo?.user_name && (
            <div onMouseEnter={() => setShowUserMenu(true)} onMouseLeave={() => setShowUserMenu(false)}>
              <HNSAvatar src={"https://img-static.mihoyo.com/avatar/avatarDefaultPc.png"} className={style.avatar}>
                <Menu show={showUserMenu} />
              </HNSAvatar>
            </div>
          )}

          {!userInfo?.user_name && (
            <div
              className={style.loginCon}
              onClick={() => {
                setModal(true);
              }}
            >
              <span>登录</span>
            </div>
          )}

          <div className={`${style.mask} ${modal ? style.open : style.close}`} onMouseDown={drop} ref={mask}>
            <div className={`${style.content} ${modal ? style.contentMove : style.contentOut}`}>
              <div className={style.slide}>
                <div className={style.normalContent}>
                  <div className={style.head}>
                    <div className={`${style.slideTitle} ${regist ? style.slideStart : style.slideEnd}`}>
                      <p className={style.title}>好久不见！</p>
                      <p className={style.title}>真高兴认识你！</p>
                    </div>

                    <Close className={style.icon} onClick={cancel} />
                  </div>

                  <Form ref={form} className={style.form} onFinish={submit} layout="vertical" size={"large"}>
                    <div className={`${style.login} ${!regist ? style.slideFormStart : style.slideFormEnd}`}>
                      <div className={style.slideLeft}>
                        <Form.Item rules={[{ required: true, message: "请输入用户名" }]} name={"user_name"}>
                          <Input placeholder={"用户名"} />
                        </Form.Item>

                        <Form.Item rules={[{ required: true, message: "请输入密码" }]} name={"password"}>
                          <Input.Password placeholder={"密码"} />
                        </Form.Item>
                      </div>

                      <div className={style.slideRight}>
                        <Form.Item
                          name={"email"}
                          rules={[{ required: true, message: "请输入邮箱" }]}
                          validateStatus={emalExist.status}
                          help={emalExist.msg}
                        >
                          <Input placeholder={"邮箱"} onBlur={judgeEmailExist} />
                        </Form.Item>

                        <Form.Item rules={[{ required: true, message: "请输入密码" }]} name={"reg_password"}>
                          <Input.Password placeholder={"密码"} />
                        </Form.Item>

                        <Form.Item
                          rules={[
                            { required: true, message: "请输入密码" },
                            ({ getFieldValue }) => ({
                              validator(_, value) {
                                if (!value || getFieldValue("reg_password") === value) {
                                  return Promise.resolve();
                                }
                                return Promise.reject(new Error("两次密码不一致"));
                              },
                            }),
                          ]}
                          name={"reg_password2"}
                        >
                          <Input.Password placeholder={"确认密码"} />
                        </Form.Item>

                        <div className={style.regInput}>
                          <Form.Item rules={[{ required: true, message: "请输入验证码" }]} name={"vCode"}>
                            <Input className={style.code} maxLength={5} placeholder={"验证码"} />
                          </Form.Item>
                          <Button disabled={vcodeDisabled} onClick={countDown}>
                            {count === countNumber ? "获取验证码" : `${count}s 后重新获取`}
                          </Button>
                        </div>
                      </div>
                    </div>
                    <span className={style.regist} onClick={() => setRegist(!regist)}>
                      {!regist ? "没有账号？" : "回到登录"}
                    </span>

                    <Button icon={<Right />} className={style.button} shape={"circle"} type={"primary"} onClick={submit} />
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
              className={`${style.item} ${target.target === index && style.active}`}
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
const Menu = ({ show }) => {
  const list = [{ label: "退出登录", key: "logout" }];

  const setUserInfo = useSetRecoilState(userStore);

  const operate = async (e) => {
    const target = e.nativeEvent.composedPath()[0];
    if (target?.tagName === "LI") {
      if (target.dataset?.key === "logout") {
        const { code } = await API.logout();
        if (code === 200) {
          setUserInfo({});
        }
      }
    }
  };
  return (
    <ul className={`${style.avatartMenu} ${show && style.avatartMenuOpen}`} onClick={operate}>
      {list
        .filter((item) => item)
        .map(({ label, key }) => (
          <li key={key} data-key={key} className={style.item}>
            {label}
          </li>
        ))}
    </ul>
  );
};
