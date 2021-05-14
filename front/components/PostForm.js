// 게시글 등록 컴포넌트
import { Input, Form, Button } from "antd";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_POST_REQUEST } from "../reducer/post";

export default function PostForm() {
  const [text, setText] = useState("");
  // const { isAddingPost, postAdded, imagePaths } = useSelector(state => state.post);
  const dispatch = useDispatch();

  let isAddingPost = false;

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: ADD_POST_REQUEST,
      data: "ss"
    });
  }, []);  // form submit

  const onChangeText = useCallback(() => { }, []);  // textArea 내용 변경 시

  return (
    <>
      <Form
        onSubmit={onSubmitForm}
      // encType="multipart/form-data"  // 이미지 업로드를 위한 타입
      >
        <Input.TextArea
          maxLength={140}
          placeholder="내용을 입력해주세요."
          value={text}
          onChange={onChangeText}
        ></Input.TextArea>
        <Button type="primary" loading={isAddingPost}>
          Submit
        </Button>
      </Form>
    </>
  );
}
