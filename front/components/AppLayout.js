// 고정 레이아웃
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React from "react";
import { Menu, Input, Row, Col } from "antd";
import LoginForm from "./LoginForm";
import UserProfile from "./UserProfile";
import { dummyData } from "../reducer/user";

const AppLayout = ({ children }) => {
  const me = dummyData.me;
  const router = useRouter();

  const onSearch = (hashtag) => {
    router.push("/hashtag/[hashtag]", `/hashtag/${hashtag}`);
  };

  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>Home</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="search">
          <Input.Search
            placeholder="hashtag"
            allowClear
            enterButton="검색"
            onSearch={onSearch}
          />
        </Menu.Item>
      </Menu>
      <Col span={7} offset={1}>
        {me ? <UserProfile /> : <LoginForm />}
      </Col>
      <Col span={8} offset={1}>
        {children}
      </Col>
    </>
  );
};

export default AppLayout;
