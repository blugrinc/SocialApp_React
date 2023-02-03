import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DeleteButton } from "../buttons/Buttons";
import { PostAuthor } from "../postAuthor/PostAuthor";
import { PostProps } from "../../model/props";
import "./style.css";

export const ListPost = ({ post, comment }: PostProps) => {
  const [expanded, setExpanded] = useState(false);
  const [originalPosition, setOriginalPosition] = useState(0);

  const handleOpen = (event: any) => {
    setOriginalPosition(event.target.offsetTop - 170);
    setExpanded(true);
  };

  const handleClose = () => {
    setExpanded(false);
    window.scrollTo(0, originalPosition);
  };

  return (
    <article className="listPost">
      <h3>{post.title}</h3>
      <div>
        <PostAuthor userId={post.userId} />
      </div>
      <p className="post-content">{post.body}</p>

      <div className="postElement">
        <button onClick={handleOpen}>Comments: {comment?.length}</button>
        <Link to={`/posts/${post.id}`} className="button">
          View Post
        </Link>
        <DeleteButton post={post} />
      </div>

      {expanded && (
        <div className="fadeInDown comment-container">
          {comment?.map((element) => (
            <div key={element.id} className="comment">
              <h5 className="comment-name">
                Name_{element.id}: {element.name}
              </h5>
              <div className="comment-content">{element.body}</div>
            </div>
          ))}
          <button className="close" onClick={handleClose}>
            X
          </button>
        </div>
      )}
    </article>
  );
};

export const SinglePost = ({ post, comment }: PostProps) => {
  const { userId, id, title, body } = post;

  return (
    <article className="post ">
      <h2>{title}</h2>
      <div>
        <PostAuthor userId={userId} />
      </div>
      <p className="post-content">{body}</p>
      <h4>COMMENTS:</h4>
      <div className="comment-container">
        {comment?.map((element) => (
          <div key={element.id} className="comment">
            <h5 className="comment-name">
              Name_{element.id}: {element.name}
            </h5>
            <div className="comment-content">{element.body}</div>
          </div>
        ))}
      </div>

      <div className="postElement">
        <Link to={`/editPost/${id}`} className="button">
          Edit Post
        </Link>
        <DeleteButton post={post} />
      </div>
    </article>
  );
};
