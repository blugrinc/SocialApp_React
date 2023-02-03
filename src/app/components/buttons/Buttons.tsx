import React, { useState } from "react";
import { useAppDispatch } from "../../../hooks/hooks";
import { deletePost } from "../../features/posts/store/post.slice";

import { Post } from "../../model/post";
import { PostProps } from "../../model/props";
import "./style.css";

export const DeleteButton = ({ post }: PostProps) => {
  const dispatch = useAppDispatch();

  const removePost = (post: Post) => {
    dispatch(deletePost(post));
  };

  return (
    <button
      className="button delete"
      onClick={() => {
        removePost(post);
      }}
    >
      Delete
    </button>
  );
};

export const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1800) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 530,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      className="scrollTop"
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    >
      UP
    </button>
  );
};
