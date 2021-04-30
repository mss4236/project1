import React, { useCallback, useState } from "react";
import { Form, Input, Checkbox, Button } from "antd";
import { useDispatch } from "react-redux";

// Custom Hooks
const UseInput = (initailValue = null) => {
  const [value, setter] = useState(initailValue);
  const handler = (e) => {
    setter(e.target.value);
  };
  return [value, handler]; // onChange
};

// 회원가입 Hooks
const singnUp = () => {
  const [userId, onChangeId] = UseInput();
  const [password, onChangePwd] = UseInput();
  const [nickname, onChangeNick] = UseInput();
  const [term, setTerm] = useState(false);
  const dispatch = useDispatch();

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 16, offset: 8 },
    },
  };

  // 회원가입 데이터 전송
  const onSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <>
      <Form
        {...formItemLayout}
        name="signUpForm"
        scrollToFirstError
        onSubmit={onSubmit}
      >
        {/* 아이디 입력란 */}
        <Form.Item
          name="userId"
          label="아이디"
          rules={[
            {
              required: true,
              message: "아이디를 입력해주세요.",
            },
          ]}
        >
          <Input
            style={{ width: "70%" }}
            value={userId}
            onChange={onChangeId}
          />
        </Form.Item>

        {/* 비밀번호 입력란 */}
        <Form.Item
          name="password"
          label="비밀번호"
          rules={[
            {
              required: true,
              message: "비밀번호를 입력해주세요.",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            style={{ width: "70%" }}
            value={password}
            onChange={onChangePwd}
          />
        </Form.Item>

        {/* 비밀번호 확인 입력란 */}
        <Form.Item
          name="confirm"
          label="비밀번호 확인"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "비밀번호가 일치하지 않습니다.",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("비밀번호가 일치하지 않습니다.")
                );
              },
            }),
          ]}
        >
          <Input.Password style={{ width: "70%" }} />
        </Form.Item>

        {/* 닉네임 입력란 */}
        <Form.Item
          name="nickname"
          label="닉네임"
          tooltip="무엇이라 불러드리면 될까요?"
          rules={[
            {
              required: true,
              message: "닉네입을 입력해주세요.",
              whitespace: true,
            },
          ]}
        >
          <Input
            style={{ width: "70%" }}
            value={nickname}
            onChange={onChangeNick}
          />
        </Form.Item>

        {/* 약관 동의 */}
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("약관에 동의하셔야 합니다.")),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            위의 약관에 <a href="">동의</a>합니다.
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            회원가입
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default singnUp;
