// 게시글 등록 컴포넌트
import { Input, Form, Button } from "antd";
import React from "react";

export default function PostForm() {
  return (
    <>
      <Form>
        <Input.TextArea></Input.TextArea>
        <Button type="primary" loading="false">
          Submit
        </Button>
      </Form>
    </>
  );
}
