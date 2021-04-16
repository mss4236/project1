import React, { useState } from 'react';
import { Form, Input, Checkbox, Button } from "antd";
import { useDispatch } from 'react-redux';

const singnUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [term, setTerm] = useState(false);
    const dispatch = useDispatch();

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 }
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 }
        }
    };
    const tailFormItemLayout = {
        wrapperCol: {
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 }
        }
    };

    return (
        <>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                onFinish={onFinish}
                initialValues={{
                    residence: ["zhejiang", "hangzhou", "xihu"],
                    prefix: "86"
                }}
                scrollToFirstError
            >
                {/* email 입력란 */}
                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: "email",
                            message: "The input is not valid E-mail!"
                        },
                        {
                            required: true,
                            message: "Please input your E-mail!"
                        }
                    ]}
                >
                    <Input style={{ width: "70%" }} />
                </Form.Item>

                {/* password 입력란 */}
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!"
                        }
                    ]}
                    hasFeedback
                >
                    <Input.Password style={{ width: "70%" }} />
                </Form.Item>

                {/* password confirm 입력란 */}
                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: "Please confirm your password!"
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue("password") === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject(
                                    new Error("비밀번호가 일치하지 않습니다.")
                                );
                            }
                        })
                    ]}
                >
                    <Input.Password style={{ width: "70%" }} />
                </Form.Item>

                {/* nickname 입력란 */}
                <Form.Item
                    name="nickname"
                    label="Nickname"
                    tooltip="What do you want others to call you?"
                    rules={[
                        {
                            required: true,
                            message: "Please input your nickname!",
                            whitespace: true
                        }
                    ]}
                >
                    <Input style={{ width: "70%" }} />
                </Form.Item>

                {/* phoneNumber 입력란 */}
                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[
                        {
                            required: true,
                            message: "Please input your phone number!"
                        }
                    ]}
                >
                    <Input style={{ width: "70%" }} />
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
                                    : Promise.reject(new Error("약관에 동의하셔야 합니다."))
                        }
                    ]}
                    {...tailFormItemLayout}
                >
                    <Checkbox>위의 약관에 <a href="">동의</a>합니다.</Checkbox>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">회원가입</Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default singnUp;