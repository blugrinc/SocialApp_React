import React from "react";
import { useAppSelector } from "../../../hooks/hooks";
import { useAppDispatch } from "../../../hooks/hooks";
import { selectAllUsers } from "../../features/users/store/user.selector";
import { Post } from "../../model/post";
import { Formik, Form, Field } from "formik";
import { addPost } from "../../features/posts/store/post.slice";
import "./style.css";

export const AddPostForm = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectAllUsers);

  const initialValues: Post = {
    title: "",
    userId: 0,
    body: "",
  };

  function submitPost(event: Post) {
    console.log(event);
    dispatch(addPost(event));
  }

  return (
    <section>
      <h2>Add a New Post</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          const data = { ...values, userId: Number(values.userId) };
          submitPost(data);
          resetForm();
        }}
      >
        <Form>
          {/*   TITOLO */}
          <label>Post Title:</label>
          <Field name="title" type="text" placeholder="What's on your mind?" />
          {/* UTENTE */}
          <label>Author:</label>
          <Field name="userId" as="select">
            <option value=""></option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </Field>
          {/*  CONTENUTO */}
          <label>Content:</label>
          <Field name="body" as="textarea" placeholder="Body Post" />
          <button className="button" type="submit">
            Save Post
          </button>
        </Form>
      </Formik>
    </section>
  );
};
