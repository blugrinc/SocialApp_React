import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../hooks/hooks";
import { ListPost, SinglePost } from "../../components/post/Post";
import { AddPostForm } from "../../components/addPostForm/AddPostForm";

import { selectAllPost } from "./store/post.selector";
import { Post } from "../../model/post";
import "./style.css";

export const PostList = () => {
  const post = useAppSelector(selectAllPost);
  return (
    <section className="posts-list">
      <AddPostForm />
      <div>
        <h2>Posts</h2>
        {post.map((element) => (
          <ListPost key={element.title} post={element} />
        ))}
      </div>
    </section>
  );
};

export const PostPage = () => {
  const { id } = useParams();
  const allPosts = useAppSelector(selectAllPost);

  let post: Post | undefined;

  if (id) {
    post = allPosts.find((post) => post.id === +id);
  }

  return (
    <section>
      <SinglePost post={post!} />
    </section>
  );
};
