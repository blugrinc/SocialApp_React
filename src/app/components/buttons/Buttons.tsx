import React from "react";
import { useAppDispatch } from "../../../hooks/hooks";
import { deletePost } from "../../features/posts/store/post.slice";

import { Post } from "../../model/post";
import { PostProps } from "../../model/props";

export function DeleteButton({ post }: PostProps) {
  const dispatch = useAppDispatch();

  const removePost = (post: Post) => {
    dispatch(deletePost(post));
  };

  return (
    <button
      onClick={() => {
        removePost(post);
      }}
    >
      Delete
    </button>
  );
}
