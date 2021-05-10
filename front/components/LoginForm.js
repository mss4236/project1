import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import Link from "next/link";

export default function LoginForm() {
  const [id, setId] = useState(null);
  const [password, setPassword] = useState(null);
  const isLoggingIn = false;

  return (
    <>
      <Form name="LogIn" onSubmit>
        <Form.Item
          label="아이디"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="비밀번호"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoggingIn}>
            로그인
          </Button>
          <Button>
            <Link href="/signUp">회원가입</Link>
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
