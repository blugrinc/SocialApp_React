import React from "react";
import { Link } from "react-router-dom";

import { PostAuthor } from "../postAuthor/PostAuthor";
import { Post } from "../../model/post";
import "./style.css";

interface Props {
  post: Post;
}

export const SinglePost = ({ post }: Props) => {
  const { userId, id, title, body } = post;

  return (
    <article className="singlePost">
      <h3>{title}</h3>
      <div>
        <PostAuthor userId={userId} />
      </div>
      <p className="post-content">{body}</p>

      <Link to={`/posts/${id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  );
};
