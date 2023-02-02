import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { selectAllPost } from "../../features/posts/store/post.selector";
import { editPost } from "../../features/posts/store/post.slice";
import { Post } from "../../model/post";
import { Formik, Form, Field } from "formik";

export const EditPost = () => {
  const { id } = useParams();
  const allPosts = useAppSelector(selectAllPost);
  const dispatch = useAppDispatch();
  const navigateTo = useNavigate();

  let post: Post | undefined;
  if (id) {
    post = allPosts.find((post) => post.id === +id);
  }

  function submitEditPost(event: Post) {
    dispatch(editPost(event));
    navigateTo("/");
  }

  if (post) {
    const initialValues: Post = {
      title: post.title,
      userId: post.userId,
      id: post.id,
      body: post.body,
    };

    return (
      <section>
        <h2>Edit Post</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { resetForm }) => {
            submitEditPost(values);
            resetForm();
          }}
        >
          <Form>
            {/*   TITOLO */}
            <label>Post Title:</label>
            <Field
              name="title"
              type="text"
              placeholder="What's on your mind?"
            />

            {/*  CONTENUTO */}
            <label>Content:</label>
            <Field name="body" as="textarea" placeholder="Body Post" />
            <button type="submit"> Edit Post </button>
          </Form>
        </Formik>
      </section>
    );
  } else return <h1>Post not Found</h1>;
};
