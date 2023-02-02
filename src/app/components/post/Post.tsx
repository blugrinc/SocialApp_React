import React from "react";
import { Link } from "react-router-dom";
import { DeleteButton } from "../buttons/Buttons";
import { PostAuthor } from "../postAuthor/PostAuthor";
import { PostProps } from "../../model/props";
import "./style.css";

export const ListPost = ({ post }: PostProps) => {
  const { userId, id, title, body } = post;

  return (
    <article className="listPost">
      <h3>{title}</h3>
      <div>
        <PostAuthor userId={userId} />
      </div>
      <p className="post-content">{body}</p>

      <div className="postElement">
        <Link to={`/posts/${id}`} className="button">
          View Post
        </Link>
        <DeleteButton post={post} />
      </div>
    </article>
  );
};

export const SinglePost = ({ post }: PostProps) => {
  const { userId, id, title, body } = post;

  return (
    <article className="post ">
      <h2>{title}</h2>
      <div>
        <PostAuthor userId={userId} />
      </div>
      <p className="post-content">{body}</p>

      <div className="postElement">
        <Link to={`/editPost/${id}`} className="button">
          Edit Post
        </Link>
        <DeleteButton post={post} />
      </div>
    </article>
  );
};
